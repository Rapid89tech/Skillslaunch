/**
 * Card Payment Monitoring and Alerting Service
 * 
 * Comprehensive monitoring, metrics tracking, and alerting for the card payment
 * immediate access system.
 */

import { supabase } from '@/integrations/supabase/client';
import { cardPaymentProductionConfig } from '@/config/cardPaymentProduction';

export interface CardPaymentMetrics {
  totalCardPayments: number;
  successfulApprovals: number;
  failedApprovals: number;
  averageProcessingTime: number;
  immediateAccessGranted: number;
  uiUpdateSuccessRate: number;
  errorRate: number;
  timestamp: Date;
}

export interface ProcessingPerformance {
  webhookProcessingTime: number;
  paymentDetectionTime: number;
  approvalProcessingTime: number;
  uiUpdateTime: number;
  persistenceTime: number;
  totalEndToEndTime: number;
  timestamp: Date;
}

export interface BusinessMetrics {
  cardPaymentConversionRate: number;
  averageTimeToAccess: number;
  userSatisfactionScore: number;
  manualInterventionRate: number;
  timestamp: Date;
}

export interface SystemAlert {
  id: string;
  type: AlertType;
  severity: AlertSeverity;
  title: string;
  message: string;
  context: Record<string, any>;
  timestamp: Date;
  resolved: boolean;
  resolvedAt?: Date;
}

export enum AlertType {
  PROCESSING_FAILURE = 'processing_failure',
  PERFORMANCE_DEGRADATION = 'performance_degradation',
  HIGH_ERROR_RATE = 'high_error_rate',
  WEBHOOK_VALIDATION_FAILURE = 'webhook_validation_failure',
  UI_UPDATE_FAILURE = 'ui_update_failure',
  PERSISTENCE_FAILURE = 'persistence_failure',
  THRESHOLD_EXCEEDED = 'threshold_exceeded',
  SYSTEM_ERROR = 'system_error'
}

export enum AlertSeverity {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  INFO = 'info'
}

export class CardPaymentMonitoringService {
  private config = cardPaymentProductionConfig.monitoring;
  private alertingConfig = cardPaymentProductionConfig.alerting;
  private metricsBuffer: CardPaymentMetrics[] = [];
  private performanceBuffer: ProcessingPerformance[] = [];
  private alertsCache: Map<string, SystemAlert> = new Map();

  /**
   * Track card payment metrics
   */
  async trackCardPaymentMetrics(metrics: Partial<CardPaymentMetrics>): Promise<void> {
    if (!this.config.enabled) return;

    try {
      const fullMetrics: CardPaymentMetrics = {
        totalCardPayments: metrics.totalCardPayments || 0,
        successfulApprovals: metrics.successfulApprovals || 0,
        failedApprovals: metrics.failedApprovals || 0,
        averageProcessingTime: metrics.averageProcessingTime || 0,
        immediateAccessGranted: metrics.immediateAccessGranted || 0,
        uiUpdateSuccessRate: metrics.uiUpdateSuccessRate || 0,
        errorRate: metrics.errorRate || 0,
        timestamp: new Date()
      };

      // Add to buffer
      this.metricsBuffer.push(fullMetrics);

      // Store in database
      await supabase.from('card_payment_metrics').insert([{
        total_card_payments: fullMetrics.totalCardPayments,
        successful_approvals: fullMetrics.successfulApprovals,
        failed_approvals: fullMetrics.failedApprovals,
        average_processing_time: fullMetrics.averageProcessingTime,
        immediate_access_granted: fullMetrics.immediateAccessGranted,
        ui_update_success_rate: fullMetrics.uiUpdateSuccessRate,
        error_rate: fullMetrics.errorRate,
        timestamp: fullMetrics.timestamp.toISOString()
      }]);

      // Check for alert conditions
      await this.checkMetricsAlerts(fullMetrics);

      // Trim buffer if needed
      if (this.metricsBuffer.length > 1000) {
        this.metricsBuffer = this.metricsBuffer.slice(-1000);
      }
    } catch (error) {
      console.error('Failed to track card payment metrics:', error);
    }
  }

  /**
   * Track processing performance
   */
  async trackProcessingPerformance(performance: ProcessingPerformance): Promise<void> {
    if (!this.config.performanceMonitoring) return;

    try {
      // Add to buffer
      this.performanceBuffer.push(performance);

      // Store in database
      await supabase.from('card_payment_performance').insert([{
        webhook_processing_time: performance.webhookProcessingTime,
        payment_detection_time: performance.paymentDetectionTime,
        approval_processing_time: performance.approvalProcessingTime,
        ui_update_time: performance.uiUpdateTime,
        persistence_time: performance.persistenceTime,
        total_end_to_end_time: performance.totalEndToEndTime,
        timestamp: performance.timestamp.toISOString()
      }]);

      // Check for performance alerts
      await this.checkPerformanceAlerts(performance);

      // Trim buffer if needed
      if (this.performanceBuffer.length > 1000) {
        this.performanceBuffer = this.performanceBuffer.slice(-1000);
      }
    } catch (error) {
      console.error('Failed to track processing performance:', error);
    }
  }

  /**
   * Track business metrics
   */
  async trackBusinessMetrics(metrics: BusinessMetrics): Promise<void> {
    if (!this.config.businessMetrics) return;

    try {
      await supabase.from('card_payment_business_metrics').insert([{
        card_payment_conversion_rate: metrics.cardPaymentConversionRate,
        average_time_to_access: metrics.averageTimeToAccess,
        user_satisfaction_score: metrics.userSatisfactionScore,
        manual_intervention_rate: metrics.manualInterventionRate,
        timestamp: metrics.timestamp.toISOString()
      }]);
    } catch (error) {
      console.error('Failed to track business metrics:', error);
    }
  }

  /**
   * Trigger system alert
   */
  async triggerAlert(alert: Omit<SystemAlert, 'id' | 'resolved' | 'resolvedAt'>): Promise<void> {
    try {
      const fullAlert: SystemAlert = {
        ...alert,
        id: crypto.randomUUID(),
        resolved: false
      };

      // Cache alert
      this.alertsCache.set(fullAlert.id, fullAlert);

      // Store in database
      await supabase.from('card_payment_alerts').insert([{
        id: fullAlert.id,
        type: fullAlert.type,
        severity: fullAlert.severity,
        title: fullAlert.title,
        message: fullAlert.message,
        context: fullAlert.context,
        timestamp: fullAlert.timestamp.toISOString(),
        resolved: false
      }]);

      // Send notifications based on severity
      await this.sendAlertNotifications(fullAlert);

      // Log alert
      this.logAlert(fullAlert);
    } catch (error) {
      console.error('Failed to trigger alert:', error);
    }
  }

  /**
   * Resolve alert
   */
  async resolveAlert(alertId: string): Promise<void> {
    try {
      const alert = this.alertsCache.get(alertId);
      if (!alert) return;

      alert.resolved = true;
      alert.resolvedAt = new Date();

      await supabase
        .from('card_payment_alerts')
        .update({
          resolved: true,
          resolved_at: alert.resolvedAt.toISOString()
        })
        .eq('id', alertId);

      this.alertsCache.set(alertId, alert);
    } catch (error) {
      console.error('Failed to resolve alert:', error);
    }
  }

  /**
   * Get current metrics summary
   */
  async getMetricsSummary(timeRange: 'hour' | 'day' | 'week' = 'day'): Promise<CardPaymentMetrics> {
    try {
      const now = new Date();
      const startTime = new Date(now);

      switch (timeRange) {
        case 'hour':
          startTime.setHours(now.getHours() - 1);
          break;
        case 'day':
          startTime.setDate(now.getDate() - 1);
          break;
        case 'week':
          startTime.setDate(now.getDate() - 7);
          break;
      }

      const { data, error } = await supabase
        .from('card_payment_metrics')
        .select('*')
        .gte('timestamp', startTime.toISOString())
        .order('timestamp', { ascending: false });

      if (error) throw error;

      if (!data || data.length === 0) {
        return {
          totalCardPayments: 0,
          successfulApprovals: 0,
          failedApprovals: 0,
          averageProcessingTime: 0,
          immediateAccessGranted: 0,
          uiUpdateSuccessRate: 0,
          errorRate: 0,
          timestamp: new Date()
        };
      }

      // Aggregate metrics
      const summary: CardPaymentMetrics = {
        totalCardPayments: data.reduce((sum, m) => sum + m.total_card_payments, 0),
        successfulApprovals: data.reduce((sum, m) => sum + m.successful_approvals, 0),
        failedApprovals: data.reduce((sum, m) => sum + m.failed_approvals, 0),
        averageProcessingTime: data.reduce((sum, m) => sum + m.average_processing_time, 0) / data.length,
        immediateAccessGranted: data.reduce((sum, m) => sum + m.immediate_access_granted, 0),
        uiUpdateSuccessRate: data.reduce((sum, m) => sum + m.ui_update_success_rate, 0) / data.length,
        errorRate: data.reduce((sum, m) => sum + m.error_rate, 0) / data.length,
        timestamp: new Date()
      };

      return summary;
    } catch (error) {
      console.error('Failed to get metrics summary:', error);
      throw error;
    }
  }

  /**
   * Get performance summary
   */
  async getPerformanceSummary(timeRange: 'hour' | 'day' | 'week' = 'day'): Promise<ProcessingPerformance> {
    try {
      const now = new Date();
      const startTime = new Date(now);

      switch (timeRange) {
        case 'hour':
          startTime.setHours(now.getHours() - 1);
          break;
        case 'day':
          startTime.setDate(now.getDate() - 1);
          break;
        case 'week':
          startTime.setDate(now.getDate() - 7);
          break;
      }

      const { data, error } = await supabase
        .from('card_payment_performance')
        .select('*')
        .gte('timestamp', startTime.toISOString())
        .order('timestamp', { ascending: false });

      if (error) throw error;

      if (!data || data.length === 0) {
        return {
          webhookProcessingTime: 0,
          paymentDetectionTime: 0,
          approvalProcessingTime: 0,
          uiUpdateTime: 0,
          persistenceTime: 0,
          totalEndToEndTime: 0,
          timestamp: new Date()
        };
      }

      // Calculate averages
      const summary: ProcessingPerformance = {
        webhookProcessingTime: data.reduce((sum, p) => sum + p.webhook_processing_time, 0) / data.length,
        paymentDetectionTime: data.reduce((sum, p) => sum + p.payment_detection_time, 0) / data.length,
        approvalProcessingTime: data.reduce((sum, p) => sum + p.approval_processing_time, 0) / data.length,
        uiUpdateTime: data.reduce((sum, p) => sum + p.ui_update_time, 0) / data.length,
        persistenceTime: data.reduce((sum, p) => sum + p.persistence_time, 0) / data.length,
        totalEndToEndTime: data.reduce((sum, p) => sum + p.total_end_to_end_time, 0) / data.length,
        timestamp: new Date()
      };

      return summary;
    } catch (error) {
      console.error('Failed to get performance summary:', error);
      throw error;
    }
  }

  /**
   * Get active alerts
   */
  async getActiveAlerts(): Promise<SystemAlert[]> {
    try {
      const { data, error } = await supabase
        .from('card_payment_alerts')
        .select('*')
        .eq('resolved', false)
        .order('timestamp', { ascending: false });

      if (error) throw error;

      return (data || []).map(alert => ({
        id: alert.id,
        type: alert.type as AlertType,
        severity: alert.severity as AlertSeverity,
        title: alert.title,
        message: alert.message,
        context: alert.context,
        timestamp: new Date(alert.timestamp),
        resolved: alert.resolved,
        resolvedAt: alert.resolved_at ? new Date(alert.resolved_at) : undefined
      }));
    } catch (error) {
      console.error('Failed to get active alerts:', error);
      return [];
    }
  }

  // Private helper methods

  private async checkMetricsAlerts(metrics: CardPaymentMetrics): Promise<void> {
    // Check error rate threshold
    if (metrics.errorRate > this.config.errorRateThreshold) {
      await this.triggerAlert({
        type: AlertType.HIGH_ERROR_RATE,
        severity: AlertSeverity.HIGH,
        title: 'High Error Rate Detected',
        message: `Card payment error rate (${metrics.errorRate.toFixed(2)}%) exceeds threshold (${this.config.errorRateThreshold}%)`,
        context: { metrics },
        timestamp: new Date()
      });
    }

    // Check UI update success rate
    if (metrics.uiUpdateSuccessRate < 95) {
      await this.triggerAlert({
        type: AlertType.UI_UPDATE_FAILURE,
        severity: AlertSeverity.MEDIUM,
        title: 'Low UI Update Success Rate',
        message: `UI update success rate (${metrics.uiUpdateSuccessRate.toFixed(2)}%) is below expected threshold`,
        context: { metrics },
        timestamp: new Date()
      });
    }
  }

  private async checkPerformanceAlerts(performance: ProcessingPerformance): Promise<void> {
    const thresholds = this.config.thresholds;

    // Check webhook processing time
    if (performance.webhookProcessingTime > thresholds.webhookProcessing) {
      await this.triggerAlert({
        type: AlertType.PERFORMANCE_DEGRADATION,
        severity: AlertSeverity.MEDIUM,
        title: 'Slow Webhook Processing',
        message: `Webhook processing time (${performance.webhookProcessingTime}ms) exceeds threshold (${thresholds.webhookProcessing}ms)`,
        context: { performance },
        timestamp: new Date()
      });
    }

    // Check end-to-end time
    if (performance.totalEndToEndTime > thresholds.endToEnd) {
      await this.triggerAlert({
        type: AlertType.PERFORMANCE_DEGRADATION,
        severity: AlertSeverity.HIGH,
        title: 'Slow End-to-End Processing',
        message: `End-to-end processing time (${performance.totalEndToEndTime}ms) exceeds threshold (${thresholds.endToEnd}ms)`,
        context: { performance },
        timestamp: new Date()
      });
    }
  }

  private async sendAlertNotifications(alert: SystemAlert): Promise<void> {
    const promises: Promise<void>[] = [];

    // Send webhook notification
    if (this.alertingConfig.webhookUrl) {
      promises.push(this.sendWebhookNotification(alert));
    }

    // Send email notification
    if (this.alertingConfig.email) {
      promises.push(this.sendEmailNotification(alert));
    }

    // Send Slack notification
    if (this.alertingConfig.slackWebhook) {
      promises.push(this.sendSlackNotification(alert));
    }

    await Promise.allSettled(promises);
  }

  private async sendWebhookNotification(alert: SystemAlert): Promise<void> {
    try {
      await fetch(this.alertingConfig.webhookUrl!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          alert_id: alert.id,
          type: alert.type,
          severity: alert.severity,
          title: alert.title,
          message: alert.message,
          context: alert.context,
          timestamp: alert.timestamp.toISOString()
        })
      });
    } catch (error) {
      console.error('Failed to send webhook notification:', error);
    }
  }

  private async sendEmailNotification(alert: SystemAlert): Promise<void> {
    try {
      // Implementation would send email via email service
      console.log(`Email notification sent to ${this.alertingConfig.email}:`, alert.title);
    } catch (error) {
      console.error('Failed to send email notification:', error);
    }
  }

  private async sendSlackNotification(alert: SystemAlert): Promise<void> {
    try {
      const color = this.getSlackColor(alert.severity);
      
      await fetch(this.alertingConfig.slackWebhook!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attachments: [{
            color,
            title: alert.title,
            text: alert.message,
            fields: [
              { title: 'Severity', value: alert.severity.toUpperCase(), short: true },
              { title: 'Type', value: alert.type, short: true },
              { title: 'Timestamp', value: alert.timestamp.toISOString(), short: false }
            ],
            footer: 'Card Payment Monitoring',
            ts: Math.floor(alert.timestamp.getTime() / 1000)
          }]
        })
      });
    } catch (error) {
      console.error('Failed to send Slack notification:', error);
    }
  }

  private getSlackColor(severity: AlertSeverity): string {
    switch (severity) {
      case AlertSeverity.CRITICAL: return 'danger';
      case AlertSeverity.HIGH: return 'warning';
      case AlertSeverity.MEDIUM: return '#FFA500';
      case AlertSeverity.LOW: return 'good';
      case AlertSeverity.INFO: return '#0000FF';
      default: return '#808080';
    }
  }

  private logAlert(alert: SystemAlert): void {
    const logLevel = this.getLogLevel(alert.severity);
    const message = `[${alert.severity.toUpperCase()}] ${alert.title}: ${alert.message}`;
    
    switch (logLevel) {
      case 'error':
        console.error(message, alert.context);
        break;
      case 'warn':
        console.warn(message, alert.context);
        break;
      case 'info':
        console.info(message, alert.context);
        break;
      default:
        console.log(message, alert.context);
    }
  }

  private getLogLevel(severity: AlertSeverity): 'error' | 'warn' | 'info' | 'log' {
    switch (severity) {
      case AlertSeverity.CRITICAL:
      case AlertSeverity.HIGH:
        return 'error';
      case AlertSeverity.MEDIUM:
        return 'warn';
      case AlertSeverity.LOW:
        return 'info';
      default:
        return 'log';
    }
  }
}

// Export singleton instance
export const cardPaymentMonitoring = new CardPaymentMonitoringService();
