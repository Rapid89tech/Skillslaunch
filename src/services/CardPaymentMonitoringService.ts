import { supabase } from '@/integrations/supabase/client';

// Types for monitoring and logging
export interface CardPaymentMetrics {
  totalCardPayments: number;
  successfulApprovals: number;
  failedApprovals: number;
  averageProcessingTime: number;
  immediateAccessGranted: number;
  uiUpdateSuccessRate: number;
}

export interface ProcessingPerformance {
  webhookProcessingTime: number;
  paymentDetectionTime: number;
  approvalProcessingTime: number;
  uiUpdateTime: number;
  persistenceTime: number;
  totalEndToEndTime: number;
}

export interface ProcessingContext {
  webhookId: string;
  enrollmentId: string;
  userId: string;
  courseId: string;
  paymentReference: string;
  processingStage: ProcessingStage;
  attemptNumber: number;
  startTime: Date;
}

export enum ProcessingStage {
  WEBHOOK_VALIDATION = 'webhook_validation',
  PAYMENT_DETECTION = 'payment_detection',
  ENROLLMENT_LOOKUP = 'enrollment_lookup',
  APPROVAL_PROCESSING = 'approval_processing',
  STATUS_UPDATE = 'status_update',
  UI_NOTIFICATION = 'ui_notification',
  PERSISTENCE = 'persistence'
}

export interface ProcessingError {
  id: string;
  type: ErrorType;
  message: string;
  stack: string;
  context: ProcessingContext;
  timestamp: Date;
  severity: ErrorSeverity;
  recoverable: boolean;
}

export enum ErrorType {
  NETWORK_ERROR = 'network_error',
  DATABASE_ERROR = 'database_error',
  VALIDATION_ERROR = 'validation_error',
  BUSINESS_LOGIC_ERROR = 'business_logic_error',
  TIMEOUT_ERROR = 'timeout_error',
  AUTHENTICATION_ERROR = 'authentication_error'
}

export enum ErrorSeverity {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  INFO = 'info'
}

export interface SystemAlert {
  type: AlertType;
  severity: AlertSeverity;
  message: string;
  context: ProcessingContext;
  timestamp: Date;
  requiresImmediate: boolean;
}

export enum AlertType {
  PROCESSING_FAILURE = 'processing_failure',
  PERFORMANCE_DEGRADATION = 'performance_degradation',
  HIGH_ERROR_RATE = 'high_error_rate',
  WEBHOOK_VALIDATION_FAILURE = 'webhook_validation_failure',
  UI_UPDATE_FAILURE = 'ui_update_failure'
}

export enum AlertSeverity {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
  INFO = 'info'
}

export interface BusinessMetrics {
  cardPaymentVolume: number;
  approvalSuccessRate: number;
  averageApprovalTime: number;
  immediateAccessRate: number;
  userSatisfactionScore?: number;
  revenueImpact: number;
}

export interface LogEntry {
  id: string;
  timestamp: Date;
  level: LogLevel;
  category: LogCategory;
  message: string;
  context: ProcessingContext;
  metadata: Record<string, any>;
  duration: number;
}

export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal'
}

export enum LogCategory {
  WEBHOOK_PROCESSING = 'webhook_processing',
  PAYMENT_DETECTION = 'payment_detection',
  APPROVAL_WORKFLOW = 'approval_workflow',
  UI_UPDATES = 'ui_updates',
  PERSISTENCE = 'persistence',
  PERFORMANCE = 'performance',
  BUSINESS_METRICS = 'business_metrics',
  SECURITY = 'security'
}

/**
 * Enhanced monitoring and logging service for card payment flows
 * Provides comprehensive tracking, performance monitoring, and alerting
 */
export class CardPaymentMonitoringService {
  private static instance: CardPaymentMonitoringService;
  private metricsBuffer: LogEntry[] = [];
  private performanceBuffer: ProcessingPerformance[] = [];
  private alertBuffer: SystemAlert[] = [];
  private flushInterval: NodeJS.Timeout | null = null;

  private constructor() {
    this.startPeriodicFlush();
  }

  public static getInstance(): CardPaymentMonitoringService {
    if (!CardPaymentMonitoringService.instance) {
      CardPaymentMonitoringService.instance = new CardPaymentMonitoringService();
    }
    return CardPaymentMonitoringService.instance;
  }

  /**
   * Log detailed information for each step of card payment approval process
   */
  public async logCardPaymentStep(
    stage: ProcessingStage,
    context: ProcessingContext,
    message: string,
    metadata?: Record<string, any>,
    duration?: number
  ): Promise<void> {
    const logEntry: LogEntry = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
      level: LogLevel.INFO,
      category: this.getCategoryForStage(stage),
      message,
      context,
      metadata: metadata || {},
      duration: duration || 0
    };

    this.metricsBuffer.push(logEntry);

    // Log to console for immediate visibility
    console.log(`[${stage}] ${message}`, {
      context,
      metadata,
      duration: duration ? `${duration}ms` : undefined
    });

    // Store in database for persistence
    try {
      await supabase
        .from('card_payment_logs')
        .insert({
          stage,
          webhook_id: context.webhookId,
          enrollment_id: context.enrollmentId,
          user_id: context.userId,
          course_id: context.courseId,
          payment_reference: context.paymentReference,
          processing_stage: context.processingStage,
          attempt_number: context.attemptNumber,
          message,
          metadata,
          duration,
          created_at: new Date().toISOString()
        });
    } catch (error) {
      console.error('Failed to store card payment log:', error);
    }
  }

  /**
   * Track performance metrics for webhook processing times
   */
  public async trackProcessingPerformance(
    performance: ProcessingPerformance,
    context: ProcessingContext
  ): Promise<void> {
    this.performanceBuffer.push(performance);

    // Log performance metrics
    await this.logCardPaymentStep(
      ProcessingStage.WEBHOOK_VALIDATION,
      context,
      'Performance metrics recorded',
      {
        webhookProcessingTime: performance.webhookProcessingTime,
        paymentDetectionTime: performance.paymentDetectionTime,
        approvalProcessingTime: performance.approvalProcessingTime,
        uiUpdateTime: performance.uiUpdateTime,
        persistenceTime: performance.persistenceTime,
        totalEndToEndTime: performance.totalEndToEndTime
      },
      performance.totalEndToEndTime
    );

    // Store performance data
    try {
      await supabase
        .from('card_payment_performance')
        .insert({
          webhook_id: context.webhookId,
          enrollment_id: context.enrollmentId,
          webhook_processing_time: performance.webhookProcessingTime,
          payment_detection_time: performance.paymentDetectionTime,
          approval_processing_time: performance.approvalProcessingTime,
          ui_update_time: performance.uiUpdateTime,
          persistence_time: performance.persistenceTime,
          total_end_to_end_time: performance.totalEndToEndTime,
          created_at: new Date().toISOString()
        });
    } catch (error) {
      console.error('Failed to store performance metrics:', error);
    }

    // Check for performance degradation
    if (performance.totalEndToEndTime > 5000) { // 5 seconds threshold
      await this.triggerAlert({
        type: AlertType.PERFORMANCE_DEGRADATION,
        severity: AlertSeverity.HIGH,
        message: `Card payment processing took ${performance.totalEndToEndTime}ms, exceeding 5s threshold`,
        context,
        timestamp: new Date(),
        requiresImmediate: true
      });
    }
  }

  /**
   * Track business metrics for card payment success rates
   */
  public async trackBusinessMetrics(
    metrics: BusinessMetrics,
    context: ProcessingContext
  ): Promise<void> {
    await this.logCardPaymentStep(
      ProcessingStage.APPROVAL_PROCESSING,
      context,
      'Business metrics updated',
      {
        cardPaymentVolume: metrics.cardPaymentVolume,
        approvalSuccessRate: metrics.approvalSuccessRate,
        averageApprovalTime: metrics.averageApprovalTime,
        immediateAccessRate: metrics.immediateAccessRate,
        revenueImpact: metrics.revenueImpact
      }
    );

    // Store business metrics
    try {
      await supabase
        .from('card_payment_business_metrics')
        .insert({
          card_payment_volume: metrics.cardPaymentVolume,
          approval_success_rate: metrics.approvalSuccessRate,
          average_approval_time: metrics.averageApprovalTime,
          immediate_access_rate: metrics.immediateAccessRate,
          revenue_impact: metrics.revenueImpact,
          user_satisfaction_score: metrics.userSatisfactionScore,
          created_at: new Date().toISOString()
        });
    } catch (error) {
      console.error('Failed to store business metrics:', error);
    }

    // Check for concerning trends
    if (metrics.approvalSuccessRate < 0.95) { // Below 95% success rate
      await this.triggerAlert({
        type: AlertType.HIGH_ERROR_RATE,
        severity: AlertSeverity.HIGH,
        message: `Card payment approval success rate dropped to ${(metrics.approvalSuccessRate * 100).toFixed(1)}%`,
        context,
        timestamp: new Date(),
        requiresImmediate: true
      });
    }
  }

  /**
   * Track processing errors with detailed context
   */
  public async trackProcessingError(
    error: ProcessingError,
    context: ProcessingContext
  ): Promise<void> {
    await this.logCardPaymentStep(
      context.processingStage,
      context,
      `Error occurred: ${error.message}`,
      {
        errorType: error.type,
        errorId: error.id,
        severity: error.severity,
        recoverable: error.recoverable,
        stack: error.stack
      }
    );

    // Store error details
    try {
      await supabase
        .from('card_payment_errors')
        .insert({
          error_id: error.id,
          error_type: error.type,
          message: error.message,
          stack: error.stack,
          webhook_id: context.webhookId,
          enrollment_id: context.enrollmentId,
          user_id: context.userId,
          course_id: context.courseId,
          processing_stage: context.processingStage,
          severity: error.severity,
          recoverable: error.recoverable,
          created_at: new Date().toISOString()
        });
    } catch (dbError) {
      console.error('Failed to store error details:', dbError);
    }

    // Trigger alert for critical errors
    if (error.severity === ErrorSeverity.CRITICAL) {
      await this.triggerAlert({
        type: AlertType.PROCESSING_FAILURE,
        severity: AlertSeverity.CRITICAL,
        message: `Critical error in card payment processing: ${error.message}`,
        context,
        timestamp: new Date(),
        requiresImmediate: true
      });
    }
  }

  /**
   * Create alerting system for card payment processing failures
   */
  public async triggerAlert(alert: SystemAlert): Promise<void> {
    this.alertBuffer.push(alert);

    // Log the alert
    await this.logCardPaymentStep(
      alert.context.processingStage,
      alert.context,
      `ALERT: ${alert.message}`,
      {
        alertType: alert.type,
        severity: alert.severity,
        requiresImmediate: alert.requiresImmediate
      }
    );

    // Store alert
    try {
      await supabase
        .from('card_payment_alerts')
        .insert({
          alert_type: alert.type,
          severity: alert.severity,
          message: alert.message,
          webhook_id: alert.context.webhookId,
          enrollment_id: alert.context.enrollmentId,
          user_id: alert.context.userId,
          course_id: alert.context.courseId,
          requires_immediate: alert.requiresImmediate,
          created_at: alert.timestamp.toISOString()
        });
    } catch (error) {
      console.error('Failed to store alert:', error);
    }

    // Send immediate notifications for critical alerts
    if (alert.requiresImmediate) {
      await this.sendImmediateNotification(alert);
    }
  }

  /**
   * Get current card payment metrics
   */
  public async getCardPaymentMetrics(): Promise<CardPaymentMetrics> {
    try {
      // Get metrics from the last 24 hours
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

      const { data: logs } = await supabase
        .from('card_payment_logs')
        .select('*')
        .gte('created_at', twentyFourHoursAgo.toISOString());

      const { data: performance } = await supabase
        .from('card_payment_performance')
        .select('*')
        .gte('created_at', twentyFourHoursAgo.toISOString());

      const totalPayments = logs?.filter(log => 
        log.processing_stage === ProcessingStage.WEBHOOK_VALIDATION
      ).length || 0;

      const successfulApprovals = logs?.filter(log => 
        log.processing_stage === ProcessingStage.APPROVAL_PROCESSING && 
        log.message.includes('approved')
      ).length || 0;

      const failedApprovals = totalPayments - successfulApprovals;

      const averageProcessingTime = performance?.reduce((sum, p) => 
        sum + p.total_end_to_end_time, 0
      ) / (performance?.length || 1);

      const immediateAccessGranted = logs?.filter(log => 
        log.message.includes('immediate access granted')
      ).length || 0;

      const uiUpdateSuccessRate = (logs?.filter(log => 
        log.processing_stage === ProcessingStage.UI_NOTIFICATION && 
        log.message.includes('success')
      ).length || 0) / Math.max(totalPayments, 1);

      return {
        totalCardPayments: totalPayments,
        successfulApprovals,
        failedApprovals,
        averageProcessingTime,
        immediateAccessGranted,
        uiUpdateSuccessRate
      };
    } catch (error) {
      console.error('Failed to get card payment metrics:', error);
      return {
        totalCardPayments: 0,
        successfulApprovals: 0,
        failedApprovals: 0,
        averageProcessingTime: 0,
        immediateAccessGranted: 0,
        uiUpdateSuccessRate: 0
      };
    }
  }

  /**
   * Get processing performance statistics
   */
  public async getProcessingPerformanceStats(): Promise<{
    averageWebhookTime: number;
    averageDetectionTime: number;
    averageApprovalTime: number;
    averageUIUpdateTime: number;
    averagePersistenceTime: number;
    averageTotalTime: number;
  }> {
    try {
      const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

      const { data: performance } = await supabase
        .from('card_payment_performance')
        .select('*')
        .gte('created_at', twentyFourHoursAgo.toISOString());

      if (!performance || performance.length === 0) {
        return {
          averageWebhookTime: 0,
          averageDetectionTime: 0,
          averageApprovalTime: 0,
          averageUIUpdateTime: 0,
          averagePersistenceTime: 0,
          averageTotalTime: 0
        };
      }

      const count = performance.length;

      return {
        averageWebhookTime: performance.reduce((sum, p) => sum + p.webhook_processing_time, 0) / count,
        averageDetectionTime: performance.reduce((sum, p) => sum + p.payment_detection_time, 0) / count,
        averageApprovalTime: performance.reduce((sum, p) => sum + p.approval_processing_time, 0) / count,
        averageUIUpdateTime: performance.reduce((sum, p) => sum + p.ui_update_time, 0) / count,
        averagePersistenceTime: performance.reduce((sum, p) => sum + p.persistence_time, 0) / count,
        averageTotalTime: performance.reduce((sum, p) => sum + p.total_end_to_end_time, 0) / count
      };
    } catch (error) {
      console.error('Failed to get performance stats:', error);
      return {
        averageWebhookTime: 0,
        averageDetectionTime: 0,
        averageApprovalTime: 0,
        averageUIUpdateTime: 0,
        averagePersistenceTime: 0,
        averageTotalTime: 0
      };
    }
  }

  private getCategoryForStage(stage: ProcessingStage): LogCategory {
    switch (stage) {
      case ProcessingStage.WEBHOOK_VALIDATION:
        return LogCategory.WEBHOOK_PROCESSING;
      case ProcessingStage.PAYMENT_DETECTION:
        return LogCategory.PAYMENT_DETECTION;
      case ProcessingStage.APPROVAL_PROCESSING:
        return LogCategory.APPROVAL_WORKFLOW;
      case ProcessingStage.UI_NOTIFICATION:
        return LogCategory.UI_UPDATES;
      case ProcessingStage.PERSISTENCE:
        return LogCategory.PERSISTENCE;
      default:
        return LogCategory.WEBHOOK_PROCESSING;
    }
  }

  private async sendImmediateNotification(alert: SystemAlert): Promise<void> {
    // In a real implementation, this would send notifications via:
    // - Email
    // - Slack
    // - SMS
    // - Push notifications
    // - Webhook to monitoring systems

    console.error(`🚨 IMMEDIATE ALERT: ${alert.message}`, {
      type: alert.type,
      severity: alert.severity,
      context: alert.context
    });

    // For now, we'll just log to console and could integrate with external services
    if (alert.severity === AlertSeverity.CRITICAL) {
      // Could integrate with PagerDuty, OpsGenie, etc.
      console.error('CRITICAL ALERT - Immediate intervention required');
    }
  }

  private startPeriodicFlush(): void {
    // Flush buffers every 30 seconds
    this.flushInterval = setInterval(() => {
      this.flushBuffers();
    }, 30000);
  }

  private async flushBuffers(): Promise<void> {
    // Clear buffers periodically to prevent memory leaks
    if (this.metricsBuffer.length > 1000) {
      this.metricsBuffer = this.metricsBuffer.slice(-500);
    }
    if (this.performanceBuffer.length > 100) {
      this.performanceBuffer = this.performanceBuffer.slice(-50);
    }
    if (this.alertBuffer.length > 100) {
      this.alertBuffer = this.alertBuffer.slice(-50);
    }
  }

  public destroy(): void {
    if (this.flushInterval) {
      clearInterval(this.flushInterval);
      this.flushInterval = null;
    }
  }
}

// Export singleton instance
export const cardPaymentMonitoring = CardPaymentMonitoringService.getInstance();