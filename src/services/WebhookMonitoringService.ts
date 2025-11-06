/**
 * Webhook Monitoring Service
 * 
 * Monitors webhook processing performance and provides analytics
 * Tracks webhook success rates, response times, and error patterns
 */

import { supabase } from '../integrations/supabase/client';
import { IkhokhaWebhook, WebhookResult } from '../types/ikhokha';

export interface WebhookMetrics {
  totalProcessed: number;
  successfulProcessed: number;
  failedProcessed: number;
  averageResponseTime: number;
  successRate: number;
  lastProcessedAt?: Date;
  commonErrors: Array<{
    error: string;
    count: number;
    lastOccurred: Date;
  }>;
}

export interface WebhookLogEntry {
  id: string;
  webhook_id: string;
  transaction_id: string;
  reference: string;
  amount: number;
  currency: string;
  status: string;
  processing_time_ms: number;
  success: boolean;
  error_message?: string;
  client_ip?: string;
  user_agent?: string;
  created_at: Date;
  webhook_data: IkhokhaWebhook;
  processing_result: WebhookResult;
}

/**
 * Webhook Monitoring Service
 */
export class WebhookMonitoringService {
  private metrics: WebhookMetrics = {
    totalProcessed: 0,
    successfulProcessed: 0,
    failedProcessed: 0,
    averageResponseTime: 0,
    successRate: 0,
    commonErrors: []
  };

  constructor() {
    console.log('📊 Webhook Monitoring Service initialized');
  }

  /**
   * Log webhook processing attempt
   */
  async logWebhookProcessing(
    webhookData: IkhokhaWebhook,
    result: WebhookResult,
    processingTimeMs: number,
    clientIp?: string,
    userAgent?: string
  ): Promise<void> {
    try {
      const logEntry: Partial<WebhookLogEntry> = {
        webhook_id: `webhook_${Date.now()}`,
        transaction_id: webhookData.transaction_id,
        reference: webhookData.reference,
        amount: webhookData.amount,
        currency: webhookData.currency,
        status: webhookData.status,
        processing_time_ms: processingTimeMs,
        success: result.processed,
        error_message: result.error,
        client_ip: clientIp,
        user_agent: userAgent,
        created_at: new Date(),
        webhook_data: webhookData,
        processing_result: result
      };

      // Store in database
      const { error } = await supabase
        .from('webhook_processing_log')
        .insert(logEntry);

      if (error) {
        console.error('❌ Failed to log webhook processing:', error);
      } else {
        console.log('📝 Webhook processing logged successfully');
      }

      // Update in-memory metrics
      this.updateMetrics(result.processed, processingTimeMs, result.error);

    } catch (error) {
      console.error('❌ Webhook logging error:', error);
    }
  }

  /**
   * Get webhook processing metrics
   */
  async getWebhookMetrics(timeRange?: {
    from: Date;
    to: Date;
  }): Promise<WebhookMetrics> {
    try {
      let query = supabase
        .from('webhook_processing_log')
        .select('*');

      if (timeRange) {
        query = query
          .gte('created_at', timeRange.from.toISOString())
          .lte('created_at', timeRange.to.toISOString());
      }

      const { data: logs, error } = await query;

      if (error) {
        console.error('❌ Failed to fetch webhook metrics:', error);
        return this.metrics;
      }

      if (!logs || logs.length === 0) {
        return {
          totalProcessed: 0,
          successfulProcessed: 0,
          failedProcessed: 0,
          averageResponseTime: 0,
          successRate: 0,
          commonErrors: []
        };
      }

      // Calculate metrics from database logs
      const totalProcessed = logs.length;
      const successfulProcessed = logs.filter(log => log.success).length;
      const failedProcessed = totalProcessed - successfulProcessed;
      const averageResponseTime = logs.reduce((sum, log) => sum + log.processing_time_ms, 0) / totalProcessed;
      const successRate = (successfulProcessed / totalProcessed) * 100;
      const lastProcessedAt = new Date(Math.max(...logs.map(log => new Date(log.created_at).getTime())));

      // Calculate common errors
      const errorCounts = new Map<string, { count: number; lastOccurred: Date }>();
      logs.filter(log => !log.success && log.error_message).forEach(log => {
        const error = log.error_message!;
        const existing = errorCounts.get(error);
        const logDate = new Date(log.created_at);
        
        if (existing) {
          existing.count++;
          if (logDate > existing.lastOccurred) {
            existing.lastOccurred = logDate;
          }
        } else {
          errorCounts.set(error, { count: 1, lastOccurred: logDate });
        }
      });

      const commonErrors = Array.from(errorCounts.entries())
        .map(([error, data]) => ({ error, ...data }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10); // Top 10 errors

      return {
        totalProcessed,
        successfulProcessed,
        failedProcessed,
        averageResponseTime,
        successRate,
        lastProcessedAt,
        commonErrors
      };

    } catch (error) {
      console.error('❌ Failed to calculate webhook metrics:', error);
      return this.metrics;
    }
  }

  /**
   * Get webhook processing logs
   */
  async getWebhookLogs(
    filters?: {
      success?: boolean;
      status?: string;
      dateFrom?: Date;
      dateTo?: Date;
      limit?: number;
    }
  ): Promise<WebhookLogEntry[]> {
    try {
      let query = supabase
        .from('webhook_processing_log')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters) {
        if (filters.success !== undefined) {
          query = query.eq('success', filters.success);
        }
        
        if (filters.status) {
          query = query.eq('status', filters.status);
        }
        
        if (filters.dateFrom) {
          query = query.gte('created_at', filters.dateFrom.toISOString());
        }
        
        if (filters.dateTo) {
          query = query.lte('created_at', filters.dateTo.toISOString());
        }
        
        if (filters.limit) {
          query = query.limit(filters.limit);
        }
      }

      const { data: logs, error } = await query;

      if (error) {
        console.error('❌ Failed to fetch webhook logs:', error);
        return [];
      }

      return logs || [];

    } catch (error) {
      console.error('❌ Failed to get webhook logs:', error);
      return [];
    }
  }

  /**
   * Get webhook health status
   */
  async getWebhookHealthStatus(): Promise<{
    status: 'healthy' | 'warning' | 'critical';
    issues: string[];
    recommendations: string[];
    metrics: WebhookMetrics;
  }> {
    const issues: string[] = [];
    const recommendations: string[] = [];
    
    // Get recent metrics (last 24 hours)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const metrics = await this.getWebhookMetrics({
      from: oneDayAgo,
      to: new Date()
    });

    // Analyze health
    let status: 'healthy' | 'warning' | 'critical' = 'healthy';

    // Check success rate
    if (metrics.successRate < 95) {
      if (metrics.successRate < 80) {
        status = 'critical';
        issues.push(`Critical: Success rate is ${metrics.successRate.toFixed(1)}% (below 80%)`);
      } else {
        status = 'warning';
        issues.push(`Warning: Success rate is ${metrics.successRate.toFixed(1)}% (below 95%)`);
      }
      recommendations.push('Investigate common webhook processing errors');
    }

    // Check response time
    if (metrics.averageResponseTime > 10000) {
      status = 'critical';
      issues.push(`Critical: Average response time is ${metrics.averageResponseTime}ms (above 10s)`);
      recommendations.push('Optimize webhook processing performance');
    } else if (metrics.averageResponseTime > 5000) {
      if (status === 'healthy') status = 'warning';
      issues.push(`Warning: Average response time is ${metrics.averageResponseTime}ms (above 5s)`);
      recommendations.push('Monitor webhook processing performance');
    }

    // Check recent activity
    if (metrics.lastProcessedAt) {
      const timeSinceLastWebhook = Date.now() - metrics.lastProcessedAt.getTime();
      const hoursSinceLastWebhook = timeSinceLastWebhook / (1000 * 60 * 60);
      
      if (hoursSinceLastWebhook > 24) {
        if (status === 'healthy') status = 'warning';
        issues.push(`Warning: No webhooks processed in the last ${Math.round(hoursSinceLastWebhook)} hours`);
        recommendations.push('Verify webhook endpoint is receiving traffic');
      }
    } else if (metrics.totalProcessed === 0) {
      if (status === 'healthy') status = 'warning';
      issues.push('Warning: No webhook processing activity detected');
      recommendations.push('Verify webhook configuration and registration');
    }

    // Check common errors
    if (metrics.commonErrors.length > 0) {
      const topError = metrics.commonErrors[0];
      if (topError.count > metrics.totalProcessed * 0.1) { // More than 10% of requests
        if (status === 'healthy') status = 'warning';
        issues.push(`Warning: Common error "${topError.error}" affects ${topError.count} requests`);
        recommendations.push('Address the most common webhook processing error');
      }
    }

    // General recommendations
    if (status === 'healthy') {
      recommendations.push('Webhook processing is healthy');
      recommendations.push('Continue monitoring webhook metrics');
    }

    return {
      status,
      issues,
      recommendations,
      metrics
    };
  }

  /**
   * Generate webhook monitoring report
   */
  async generateMonitoringReport(timeRange?: {
    from: Date;
    to: Date;
  }): Promise<string> {
    const metrics = await this.getWebhookMetrics(timeRange);
    const healthStatus = await this.getWebhookHealthStatus();
    
    const lines: string[] = [];
    
    lines.push('=== Webhook Monitoring Report ===');
    lines.push(`Generated at: ${new Date().toISOString()}`);
    
    if (timeRange) {
      lines.push(`Time Range: ${timeRange.from.toISOString()} to ${timeRange.to.toISOString()}`);
    } else {
      lines.push('Time Range: All time');
    }
    
    lines.push('');
    
    lines.push(`📊 Overall Health: ${getHealthEmoji(healthStatus.status)} ${healthStatus.status.toUpperCase()}`);
    lines.push('');
    
    lines.push('📈 Processing Metrics:');
    lines.push(`  Total Processed: ${metrics.totalProcessed}`);
    lines.push(`  Successful: ${metrics.successfulProcessed}`);
    lines.push(`  Failed: ${metrics.failedProcessed}`);
    lines.push(`  Success Rate: ${metrics.successRate.toFixed(1)}%`);
    lines.push(`  Average Response Time: ${metrics.averageResponseTime.toFixed(0)}ms`);
    
    if (metrics.lastProcessedAt) {
      lines.push(`  Last Processed: ${metrics.lastProcessedAt.toISOString()}`);
    }
    
    lines.push('');
    
    if (healthStatus.issues.length > 0) {
      lines.push('🚨 Issues:');
      healthStatus.issues.forEach(issue => lines.push(`  - ${issue}`));
      lines.push('');
    }
    
    if (metrics.commonErrors.length > 0) {
      lines.push('❌ Common Errors:');
      metrics.commonErrors.slice(0, 5).forEach(error => {
        lines.push(`  - ${error.error} (${error.count} times, last: ${error.lastOccurred.toISOString()})`);
      });
      lines.push('');
    }
    
    if (healthStatus.recommendations.length > 0) {
      lines.push('💡 Recommendations:');
      healthStatus.recommendations.forEach(rec => lines.push(`  - ${rec}`));
      lines.push('');
    }
    
    return lines.join('\n');
  }

  // Private Methods

  /**
   * Update in-memory metrics
   */
  private updateMetrics(success: boolean, processingTime: number, error?: string): void {
    this.metrics.totalProcessed++;
    this.metrics.lastProcessedAt = new Date();
    
    if (success) {
      this.metrics.successfulProcessed++;
    } else {
      this.metrics.failedProcessed++;
      
      // Update common errors
      if (error) {
        const existingError = this.metrics.commonErrors.find(e => e.error === error);
        if (existingError) {
          existingError.count++;
          existingError.lastOccurred = new Date();
        } else {
          this.metrics.commonErrors.push({
            error,
            count: 1,
            lastOccurred: new Date()
          });
        }
        
        // Keep only top 10 errors
        this.metrics.commonErrors.sort((a, b) => b.count - a.count);
        this.metrics.commonErrors = this.metrics.commonErrors.slice(0, 10);
      }
    }
    
    // Recalculate derived metrics
    this.metrics.successRate = (this.metrics.successfulProcessed / this.metrics.totalProcessed) * 100;
    this.metrics.averageResponseTime = (this.metrics.averageResponseTime * (this.metrics.totalProcessed - 1) + processingTime) / this.metrics.totalProcessed;
  }
}

/**
 * Get health status emoji
 */
function getHealthEmoji(status: string): string {
  switch (status) {
    case 'healthy': return '✅';
    case 'warning': return '⚠️';
    case 'critical': return '🚨';
    default: return '❓';
  }
}

// Export singleton instance
export const webhookMonitoringService = new WebhookMonitoringService();