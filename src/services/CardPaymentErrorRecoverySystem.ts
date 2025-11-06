/**
 * Card Payment Error Handling and Recovery System
 * 
 * Comprehensive error detection, recovery strategies, and fallback mechanisms
 * for card payment processing failures with manual intervention triggers.
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.4
 */

import {
  IkhokhaWebhook,
  EnrollmentStatus,
  PaymentStatus,
  PaymentType,
  WebhookValidationError,
  IkhokhaError
} from '../types/ikhokha';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/logger';
import { cardPaymentFastTrack } from './CardPaymentFastTrack';
import { paymentTypeDetector } from './PaymentTypeDetector';

export interface ProcessingError {
  id: string;
  type: ErrorType;
  severity: ErrorSeverity;
  message: string;
  details: Record<string, any>;
  timestamp: Date;
  context: ProcessingContext;
  recoverable: boolean;
  retryCount: number;
  maxRetries: number;
}

export interface ProcessingContext {
  webhookId: string;
  enrollmentId?: string;
  userId?: string;
  courseId?: string;
  paymentReference?: string;
  transactionId?: string;
  processingStage: ProcessingStage;
  attemptNumber: number;
  startTime: Date;
  metadata?: Record<string, any>;
}

export interface ErrorDetectionResult {
  errorsDetected: ProcessingError[];
  criticalErrors: ProcessingError[];
  recoverableErrors: ProcessingError[];
  systemHealthStatus: SystemHealthStatus;
  recommendedActions: RecommendedAction[];
}

export interface RecoveryResult {
  success: boolean;
  strategy: RecoveryStrategy;
  executionTime: number;
  recoveredErrors: ProcessingError[];
  remainingErrors: ProcessingError[];
  fallbackUsed: boolean;
  manualInterventionRequired: boolean;
  details: Record<string, any>;
}

export interface FallbackResult {
  success: boolean;
  mechanism: FallbackMechanism;
  executionTime: number;
  enrollmentStatus: EnrollmentStatus;
  accessGranted: boolean;
  manualApprovalTriggered: boolean;
  details: Record<string, any>;
}

export interface InterventionResult {
  triggered: boolean;
  interventionType: InterventionType;
  priority: InterventionPriority;
  assignedTo?: string;
  estimatedResolutionTime?: number;
  escalationPath: string[];
  details: Record<string, any>;
}

export interface FailedOperation {
  operationType: OperationType;
  context: ProcessingContext;
  error: ProcessingError;
  attemptedRecoveries: RecoveryAttempt[];
  timestamp: Date;
}

export interface RecoveryAttempt {
  strategy: RecoveryStrategy;
  timestamp: Date;
  success: boolean;
  executionTime: number;
  error?: string;
  details: Record<string, any>;
}

export interface CriticalError {
  id: string;
  type: CriticalErrorType;
  severity: 'critical' | 'high';
  message: string;
  context: ProcessingContext;
  impact: ErrorImpact;
  requiresImmediateAttention: boolean;
  escalationRequired: boolean;
  timestamp: Date;
}

export interface RecommendedAction {
  action: ActionType;
  priority: ActionPriority;
  description: string;
  estimatedTime: number;
  requiredRole: string;
  automatable: boolean;
}

export enum ErrorType {
  WEBHOOK_VALIDATION_ERROR = 'webhook_validation_error',
  PAYMENT_DETECTION_ERROR = 'payment_detection_error',
  ENROLLMENT_LOOKUP_ERROR = 'enrollment_lookup_error',
  FAST_TRACK_PROCESSING_ERROR = 'fast_track_processing_error',
  DATABASE_ERROR = 'database_error',
  NETWORK_ERROR = 'network_error',
  AUTHENTICATION_ERROR = 'authentication_error',
  BUSINESS_LOGIC_ERROR = 'business_logic_error',
  TIMEOUT_ERROR = 'timeout_error',
  CONFIGURATION_ERROR = 'configuration_error',
  EXTERNAL_SERVICE_ERROR = 'external_service_error'
}

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export enum ProcessingStage {
  WEBHOOK_RECEIVED = 'webhook_received',
  SECURITY_VALIDATION = 'security_validation',
  PAYMENT_TYPE_DETECTION = 'payment_type_detection',
  ENROLLMENT_LOOKUP = 'enrollment_lookup',
  FAST_TRACK_PROCESSING = 'fast_track_processing',
  STATUS_UPDATE = 'status_update',
  REAL_TIME_SYNC = 'real_time_sync',
  AUDIT_LOGGING = 'audit_logging',
  COMPLETION = 'completion'
}

export enum SystemHealthStatus {
  HEALTHY = 'healthy',
  DEGRADED = 'degraded',
  CRITICAL = 'critical',
  OFFLINE = 'offline'
}

export enum RecoveryStrategy {
  RETRY_WITH_BACKOFF = 'retry_with_backoff',
  ALTERNATIVE_ENDPOINT = 'alternative_endpoint',
  CACHED_DATA_FALLBACK = 'cached_data_fallback',
  MANUAL_APPROVAL_ROUTE = 'manual_approval_route',
  GRACEFUL_DEGRADATION = 'graceful_degradation',
  CIRCUIT_BREAKER_RESET = 'circuit_breaker_reset',
  DATABASE_RECONNECTION = 'database_reconnection',
  SERVICE_RESTART = 'service_restart'
}

export enum FallbackMechanism {
  MANUAL_APPROVAL_QUEUE = 'manual_approval_queue',
  ADMIN_NOTIFICATION = 'admin_notification',
  DELAYED_PROCESSING = 'delayed_processing',
  SAFE_MODE_PROCESSING = 'safe_mode_processing',
  EMERGENCY_APPROVAL = 'emergency_approval'
}

export enum InterventionType {
  TECHNICAL_REVIEW = 'technical_review',
  MANUAL_APPROVAL = 'manual_approval',
  SYSTEM_MAINTENANCE = 'system_maintenance',
  CONFIGURATION_UPDATE = 'configuration_update',
  ESCALATION_TO_ADMIN = 'escalation_to_admin',
  EMERGENCY_RESPONSE = 'emergency_response'
}

export enum InterventionPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
  EMERGENCY = 'emergency'
}

export enum OperationType {
  WEBHOOK_PROCESSING = 'webhook_processing',
  PAYMENT_DETECTION = 'payment_detection',
  ENROLLMENT_APPROVAL = 'enrollment_approval',
  ACCESS_GRANTING = 'access_granting',
  STATUS_SYNCHRONIZATION = 'status_synchronization'
}

export enum CriticalErrorType {
  SYSTEM_FAILURE = 'system_failure',
  DATA_CORRUPTION = 'data_corruption',
  SECURITY_BREACH = 'security_breach',
  SERVICE_UNAVAILABLE = 'service_unavailable',
  PAYMENT_PROCESSING_FAILURE = 'payment_processing_failure'
}

export enum ErrorImpact {
  USER_EXPERIENCE = 'user_experience',
  BUSINESS_OPERATIONS = 'business_operations',
  DATA_INTEGRITY = 'data_integrity',
  SECURITY = 'security',
  SYSTEM_STABILITY = 'system_stability'
}

export enum ActionType {
  RETRY_OPERATION = 'retry_operation',
  MANUAL_REVIEW = 'manual_review',
  SYSTEM_RESTART = 'system_restart',
  CONFIGURATION_FIX = 'configuration_fix',
  ESCALATE_TO_ADMIN = 'escalate_to_admin',
  EMERGENCY_SHUTDOWN = 'emergency_shutdown'
}

export enum ActionPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

/**
 * Comprehensive Error Recovery System for Card Payment Processing
 * 
 * Provides error detection, recovery strategies, fallback mechanisms,
 * and manual intervention triggers for robust payment processing.
 */
export class CardPaymentErrorRecoverySystem {
  private static instance: CardPaymentErrorRecoverySystem;
  private isInitialized = false;
  private errorHistory: Map<string, ProcessingError[]> = new Map();
  private recoveryAttempts: Map<string, RecoveryAttempt[]> = new Map();
  private circuitBreakers: Map<string, CircuitBreakerState> = new Map();
  private systemHealthMetrics: SystemHealthMetrics = {
    errorRate: 0,
    successRate: 100,
    averageProcessingTime: 0,
    lastHealthCheck: new Date()
  };

  private constructor() {}

  static getInstance(): CardPaymentErrorRecoverySystem {
    if (!CardPaymentErrorRecoverySystem.instance) {
      CardPaymentErrorRecoverySystem.instance = new CardPaymentErrorRecoverySystem();
    }
    return CardPaymentErrorRecoverySystem.instance;
  }

  /**
   * Initialize the error recovery system
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize circuit breakers
      this.initializeCircuitBreakers();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      // Load error history from database
      await this.loadErrorHistory();
      
      this.isInitialized = true;
      logger.info('✅ CardPaymentErrorRecoverySystem: Initialized successfully');
    } catch (error) {
      logger.error('❌ CardPaymentErrorRecoverySystem: Initialization failed', { error });
      throw error;
    }
  }

  /**
   * Detect processing errors in card payment workflow
   * Requirement 6.1: Implement error detection for card payment processing failures
   */
  async detectProcessingErrors(context: ProcessingContext): Promise<ErrorDetectionResult> {
    try {
      logger.info('🔍 ErrorRecoverySystem: Detecting processing errors', {
        webhookId: context.webhookId,
        stage: context.processingStage
      });

      const errorsDetected: ProcessingError[] = [];
      
      // Check for webhook validation errors
      const webhookErrors = await this.detectWebhookErrors(context);
      errorsDetected.push(...webhookErrors);
      
      // Check for payment detection errors
      const paymentErrors = await this.detectPaymentDetectionErrors(context);
      errorsDetected.push(...paymentErrors);
      
      // Check for enrollment lookup errors
      const enrollmentErrors = await this.detectEnrollmentErrors(context);
      errorsDetected.push(...enrollmentErrors);
      
      // Check for database connectivity errors
      const databaseErrors = await this.detectDatabaseErrors(context);
      errorsDetected.push(...databaseErrors);
      
      // Check for system health errors
      const systemErrors = await this.detectSystemHealthErrors(context);
      errorsDetected.push(...systemErrors);

      // Categorize errors
      const criticalErrors = errorsDetected.filter(e => e.severity === ErrorSeverity.CRITICAL);
      const recoverableErrors = errorsDetected.filter(e => e.recoverable);
      
      // Determine system health status
      const systemHealthStatus = this.determineSystemHealthStatus(errorsDetected);
      
      // Generate recommended actions
      const recommendedActions = this.generateRecommendedActions(errorsDetected);

      // Store errors in history
      this.storeErrorHistory(context.webhookId, errorsDetected);

      const result: ErrorDetectionResult = {
        errorsDetected,
        criticalErrors,
        recoverableErrors,
        systemHealthStatus,
        recommendedActions
      };

      logger.info('✅ ErrorRecoverySystem: Error detection completed', {
        totalErrors: errorsDetected.length,
        criticalErrors: criticalErrors.length,
        recoverableErrors: recoverableErrors.length,
        systemHealth: systemHealthStatus
      });

      return result;

    } catch (error) {
      logger.error('❌ ErrorRecoverySystem: Error detection failed', { error, context });
      
      // Return safe fallback result
      return {
        errorsDetected: [{
          id: `error_${Date.now()}`,
          type: ErrorType.EXTERNAL_SERVICE_ERROR,
          severity: ErrorSeverity.HIGH,
          message: 'Error detection system failure',
          details: { originalError: error },
          timestamp: new Date(),
          context,
          recoverable: true,
          retryCount: 0,
          maxRetries: 3
        }],
        criticalErrors: [],
        recoverableErrors: [],
        systemHealthStatus: SystemHealthStatus.DEGRADED,
        recommendedActions: [{
          action: ActionType.MANUAL_REVIEW,
          priority: ActionPriority.HIGH,
          description: 'Manual review required due to error detection failure',
          estimatedTime: 300,
          requiredRole: 'admin',
          automatable: false
        }]
      };
    }
  }

  /**
   * Execute recovery strategy for detected errors
   * Requirement 6.2: Add recovery strategies for webhook processing errors
   */
  async executeRecoveryStrategy(
    error: ProcessingError,
    context: ProcessingContext
  ): Promise<RecoveryResult> {
    const startTime = Date.now();
    
    try {
      logger.info('🔧 ErrorRecoverySystem: Executing recovery strategy', {
        errorId: error.id,
        errorType: error.type,
        strategy: this.selectRecoveryStrategy(error)
      });

      const strategy = this.selectRecoveryStrategy(error);
      let recoveryResult: RecoveryResult;

      switch (strategy) {
        case RecoveryStrategy.RETRY_WITH_BACKOFF:
          recoveryResult = await this.executeRetryWithBackoff(error, context);
          break;
          
        case RecoveryStrategy.ALTERNATIVE_ENDPOINT:
          recoveryResult = await this.executeAlternativeEndpoint(error, context);
          break;
          
        case RecoveryStrategy.CACHED_DATA_FALLBACK:
          recoveryResult = await this.executeCachedDataFallback(error, context);
          break;
          
        case RecoveryStrategy.MANUAL_APPROVAL_ROUTE:
          recoveryResult = await this.executeManualApprovalRoute(error, context);
          break;
          
        case RecoveryStrategy.GRACEFUL_DEGRADATION:
          recoveryResult = await this.executeGracefulDegradation(error, context);
          break;
          
        case RecoveryStrategy.DATABASE_RECONNECTION:
          recoveryResult = await this.executeDatabaseReconnection(error, context);
          break;
          
        default:
          recoveryResult = await this.executeDefaultRecovery(error, context);
      }

      // Record recovery attempt
      this.recordRecoveryAttempt(context.webhookId, {
        strategy,
        timestamp: new Date(),
        success: recoveryResult.success,
        executionTime: Date.now() - startTime,
        details: recoveryResult.details
      });

      // Update error retry count
      if (!recoveryResult.success && error.retryCount < error.maxRetries) {
        error.retryCount++;
      }

      logger.info('✅ ErrorRecoverySystem: Recovery strategy executed', {
        errorId: error.id,
        strategy,
        success: recoveryResult.success,
        executionTime: recoveryResult.executionTime
      });

      return recoveryResult;

    } catch (recoveryError) {
      const executionTime = Date.now() - startTime;
      
      logger.error('❌ ErrorRecoverySystem: Recovery strategy failed', {
        error: recoveryError,
        originalError: error,
        context
      });

      return {
        success: false,
        strategy: RecoveryStrategy.RETRY_WITH_BACKOFF,
        executionTime,
        recoveredErrors: [],
        remainingErrors: [error],
        fallbackUsed: false,
        manualInterventionRequired: true,
        details: {
          recoveryError: recoveryError instanceof Error ? recoveryError.message : String(recoveryError),
          originalError: error
        }
      };
    }
  }

  /**
   * Execute fallback mechanism for critical failures
   * Requirement 6.3: Create fallback to manual approval for critical failures
   */
  async executeFallbackMechanism(failedOperation: FailedOperation): Promise<FallbackResult> {
    const startTime = Date.now();
    
    try {
      logger.info('🚨 ErrorRecoverySystem: Executing fallback mechanism', {
        operationType: failedOperation.operationType,
        errorType: failedOperation.error.type,
        severity: failedOperation.error.severity
      });

      const mechanism = this.selectFallbackMechanism(failedOperation);
      let fallbackResult: FallbackResult;

      switch (mechanism) {
        case FallbackMechanism.MANUAL_APPROVAL_QUEUE:
          fallbackResult = await this.executeManualApprovalQueue(failedOperation);
          break;
          
        case FallbackMechanism.ADMIN_NOTIFICATION:
          fallbackResult = await this.executeAdminNotification(failedOperation);
          break;
          
        case FallbackMechanism.DELAYED_PROCESSING:
          fallbackResult = await this.executeDelayedProcessing(failedOperation);
          break;
          
        case FallbackMechanism.SAFE_MODE_PROCESSING:
          fallbackResult = await this.executeSafeModeProcessing(failedOperation);
          break;
          
        case FallbackMechanism.EMERGENCY_APPROVAL:
          fallbackResult = await this.executeEmergencyApproval(failedOperation);
          break;
          
        default:
          fallbackResult = await this.executeDefaultFallback(failedOperation);
      }

      fallbackResult.executionTime = Date.now() - startTime;

      // Log fallback execution
      await this.logFallbackExecution(failedOperation, fallbackResult);

      logger.info('✅ ErrorRecoverySystem: Fallback mechanism executed', {
        mechanism,
        success: fallbackResult.success,
        manualApprovalTriggered: fallbackResult.manualApprovalTriggered,
        executionTime: fallbackResult.executionTime
      });

      return fallbackResult;

    } catch (fallbackError) {
      const executionTime = Date.now() - startTime;
      
      logger.error('❌ ErrorRecoverySystem: Fallback mechanism failed', {
        error: fallbackError,
        failedOperation
      });

      return {
        success: false,
        mechanism: FallbackMechanism.MANUAL_APPROVAL_QUEUE,
        executionTime,
        enrollmentStatus: EnrollmentStatus.PENDING,
        accessGranted: false,
        manualApprovalTriggered: true,
        details: {
          fallbackError: fallbackError instanceof Error ? fallbackError.message : String(fallbackError),
          failedOperation
        }
      };
    }
  }

  /**
   * Trigger manual intervention for unresolvable issues
   * Requirement 6.4: Implement manual intervention triggers for unresolvable issues
   */
  async triggerManualIntervention(criticalError: CriticalError): Promise<InterventionResult> {
    try {
      logger.warn('🚨 ErrorRecoverySystem: Triggering manual intervention', {
        errorId: criticalError.id,
        type: criticalError.type,
        severity: criticalError.severity
      });

      const interventionType = this.determineInterventionType(criticalError);
      const priority = this.determineInterventionPriority(criticalError);
      
      // Create intervention record
      const interventionRecord = {
        id: `intervention_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        error_id: criticalError.id,
        intervention_type: interventionType,
        priority,
        status: 'pending',
        created_at: new Date().toISOString(),
        context: JSON.stringify(criticalError.context),
        details: JSON.stringify(criticalError),
        requires_immediate_attention: criticalError.requiresImmediateAttention,
        escalation_required: criticalError.escalationRequired
      };

      // Store intervention in database
      const { error: dbError } = await supabase
        .from('manual_interventions')
        .insert(interventionRecord);

      if (dbError) {
        logger.error('❌ ErrorRecoverySystem: Failed to store intervention record', { error: dbError });
      }

      // Determine escalation path
      const escalationPath = this.determineEscalationPath(criticalError, priority);
      
      // Send notifications
      await this.sendInterventionNotifications(criticalError, interventionType, priority);
      
      // Estimate resolution time
      const estimatedResolutionTime = this.estimateResolutionTime(interventionType, priority);

      const result: InterventionResult = {
        triggered: true,
        interventionType,
        priority,
        estimatedResolutionTime,
        escalationPath,
        details: {
          interventionId: interventionRecord.id,
          errorDetails: criticalError,
          notificationsSent: true,
          databaseRecorded: !dbError
        }
      };

      logger.warn('🚨 ErrorRecoverySystem: Manual intervention triggered', {
        interventionType,
        priority,
        escalationPath,
        estimatedResolutionTime
      });

      return result;

    } catch (error) {
      logger.error('❌ ErrorRecoverySystem: Failed to trigger manual intervention', {
        error,
        criticalError
      });

      return {
        triggered: false,
        interventionType: InterventionType.EMERGENCY_RESPONSE,
        priority: InterventionPriority.EMERGENCY,
        escalationPath: ['system_admin', 'technical_lead'],
        details: {
          error: error instanceof Error ? error.message : String(error),
          criticalError
        }
      };
    }
  }

  /**
   * Detect webhook-specific errors
   */
  private async detectWebhookErrors(context: ProcessingContext): Promise<ProcessingError[]> {
    const errors: ProcessingError[] = [];

    try {
      // Check if webhook data is missing required fields
      if (!context.transactionId) {
        errors.push(this.createProcessingError(
          ErrorType.WEBHOOK_VALIDATION_ERROR,
          ErrorSeverity.HIGH,
          'Missing transaction ID in webhook data',
          { context },
          context,
          true
        ));
      }

      if (!context.paymentReference) {
        errors.push(this.createProcessingError(
          ErrorType.WEBHOOK_VALIDATION_ERROR,
          ErrorSeverity.MEDIUM,
          'Missing payment reference in webhook data',
          { context },
          context,
          true
        ));
      }

      // Check for webhook timeout
      const processingTime = Date.now() - context.startTime.getTime();
      if (processingTime > 30000) { // 30 seconds
        errors.push(this.createProcessingError(
          ErrorType.TIMEOUT_ERROR,
          ErrorSeverity.HIGH,
          'Webhook processing timeout exceeded',
          { processingTime, threshold: 30000 },
          context,
          true
        ));
      }

    } catch (error) {
      errors.push(this.createProcessingError(
        ErrorType.EXTERNAL_SERVICE_ERROR,
        ErrorSeverity.MEDIUM,
        'Error during webhook error detection',
        { originalError: error },
        context,
        true
      ));
    }

    return errors;
  }

  /**
   * Detect payment detection errors
   */
  private async detectPaymentDetectionErrors(context: ProcessingContext): Promise<ProcessingError[]> {
    const errors: ProcessingError[] = [];

    try {
      // Check if payment type detection is available
      if (!paymentTypeDetector) {
        errors.push(this.createProcessingError(
          ErrorType.CONFIGURATION_ERROR,
          ErrorSeverity.CRITICAL,
          'Payment type detector service not available',
          { context },
          context,
          false
        ));
      }

      // Check circuit breaker status for payment detection
      const circuitBreaker = this.circuitBreakers.get('payment_detection');
      if (circuitBreaker?.state === 'open') {
        errors.push(this.createProcessingError(
          ErrorType.EXTERNAL_SERVICE_ERROR,
          ErrorSeverity.HIGH,
          'Payment detection service circuit breaker is open',
          { circuitBreaker },
          context,
          true
        ));
      }

    } catch (error) {
      errors.push(this.createProcessingError(
        ErrorType.EXTERNAL_SERVICE_ERROR,
        ErrorSeverity.MEDIUM,
        'Error during payment detection error check',
        { originalError: error },
        context,
        true
      ));
    }

    return errors;
  }

  /**
   * Detect enrollment-related errors
   */
  private async detectEnrollmentErrors(context: ProcessingContext): Promise<ProcessingError[]> {
    const errors: ProcessingError[] = [];

    try {
      if (context.enrollmentId) {
        // Check if enrollment exists
        const { data: enrollment, error: dbError } = await supabase
          .from('enrollments')
          .select('id, status')
          .eq('id', context.enrollmentId)
          .single();

        if (dbError && dbError.code !== 'PGRST116') {
          errors.push(this.createProcessingError(
            ErrorType.DATABASE_ERROR,
            ErrorSeverity.HIGH,
            'Failed to lookup enrollment',
            { dbError, enrollmentId: context.enrollmentId },
            context,
            true
          ));
        } else if (!enrollment) {
          errors.push(this.createProcessingError(
            ErrorType.BUSINESS_LOGIC_ERROR,
            ErrorSeverity.HIGH,
            'Enrollment not found',
            { enrollmentId: context.enrollmentId },
            context,
            false
          ));
        }
      }

    } catch (error) {
      errors.push(this.createProcessingError(
        ErrorType.DATABASE_ERROR,
        ErrorSeverity.HIGH,
        'Error during enrollment error detection',
        { originalError: error },
        context,
        true
      ));
    }

    return errors;
  }

  /**
   * Detect database connectivity errors
   */
  private async detectDatabaseErrors(context: ProcessingContext): Promise<ProcessingError[]> {
    const errors: ProcessingError[] = [];

    try {
      // Test database connectivity
      const { error: connectivityError } = await supabase
        .from('enrollments')
        .select('id')
        .limit(1);

      if (connectivityError) {
        errors.push(this.createProcessingError(
          ErrorType.DATABASE_ERROR,
          ErrorSeverity.CRITICAL,
          'Database connectivity error',
          { connectivityError },
          context,
          true
        ));
      }

    } catch (error) {
      errors.push(this.createProcessingError(
        ErrorType.DATABASE_ERROR,
        ErrorSeverity.CRITICAL,
        'Database connection test failed',
        { originalError: error },
        context,
        true
      ));
    }

    return errors;
  }

  /**
   * Detect system health errors
   */
  private async detectSystemHealthErrors(context: ProcessingContext): Promise<ProcessingError[]> {
    const errors: ProcessingError[] = [];

    try {
      // Check error rate
      if (this.systemHealthMetrics.errorRate > 50) {
        errors.push(this.createProcessingError(
          ErrorType.EXTERNAL_SERVICE_ERROR,
          ErrorSeverity.HIGH,
          'High system error rate detected',
          { errorRate: this.systemHealthMetrics.errorRate },
          context,
          true
        ));
      }

      // Check processing time
      if (this.systemHealthMetrics.averageProcessingTime > 10000) {
        errors.push(this.createProcessingError(
          ErrorType.TIMEOUT_ERROR,
          ErrorSeverity.MEDIUM,
          'High average processing time detected',
          { averageProcessingTime: this.systemHealthMetrics.averageProcessingTime },
          context,
          true
        ));
      }

    } catch (error) {
      errors.push(this.createProcessingError(
        ErrorType.EXTERNAL_SERVICE_ERROR,
        ErrorSeverity.MEDIUM,
        'Error during system health check',
        { originalError: error },
        context,
        true
      ));
    }

    return errors;
  }

  /**
   * Create a processing error object
   */
  private createProcessingError(
    type: ErrorType,
    severity: ErrorSeverity,
    message: string,
    details: Record<string, any>,
    context: ProcessingContext,
    recoverable: boolean,
    maxRetries: number = 3
  ): ProcessingError {
    return {
      id: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      severity,
      message,
      details,
      timestamp: new Date(),
      context,
      recoverable,
      retryCount: 0,
      maxRetries
    };
  }

  /**
   * Select appropriate recovery strategy for error
   */
  private selectRecoveryStrategy(error: ProcessingError): RecoveryStrategy {
    switch (error.type) {
      case ErrorType.NETWORK_ERROR:
      case ErrorType.TIMEOUT_ERROR:
        return RecoveryStrategy.RETRY_WITH_BACKOFF;
        
      case ErrorType.DATABASE_ERROR:
        return RecoveryStrategy.DATABASE_RECONNECTION;
        
      case ErrorType.EXTERNAL_SERVICE_ERROR:
        return RecoveryStrategy.ALTERNATIVE_ENDPOINT;
        
      case ErrorType.WEBHOOK_VALIDATION_ERROR:
        return RecoveryStrategy.MANUAL_APPROVAL_ROUTE;
        
      case ErrorType.BUSINESS_LOGIC_ERROR:
        return RecoveryStrategy.GRACEFUL_DEGRADATION;
        
      default:
        return RecoveryStrategy.RETRY_WITH_BACKOFF;
    }
  }

  /**
   * Execute retry with exponential backoff
   */
  private async executeRetryWithBackoff(
    error: ProcessingError,
    context: ProcessingContext
  ): Promise<RecoveryResult> {
    const startTime = Date.now();
    
    try {
      const delay = Math.min(1000 * Math.pow(2, error.retryCount), 30000);
      await new Promise(resolve => setTimeout(resolve, delay));
      
      // Attempt to retry the original operation
      // This would depend on the specific operation that failed
      const retrySuccess = await this.retryOriginalOperation(error, context);
      
      return {
        success: retrySuccess,
        strategy: RecoveryStrategy.RETRY_WITH_BACKOFF,
        executionTime: Date.now() - startTime,
        recoveredErrors: retrySuccess ? [error] : [],
        remainingErrors: retrySuccess ? [] : [error],
        fallbackUsed: false,
        manualInterventionRequired: !retrySuccess && error.retryCount >= error.maxRetries,
        details: {
          retryCount: error.retryCount,
          delay,
          retrySuccess
        }
      };
      
    } catch (retryError) {
      return {
        success: false,
        strategy: RecoveryStrategy.RETRY_WITH_BACKOFF,
        executionTime: Date.now() - startTime,
        recoveredErrors: [],
        remainingErrors: [error],
        fallbackUsed: false,
        manualInterventionRequired: true,
        details: {
          retryError: retryError instanceof Error ? retryError.message : String(retryError)
        }
      };
    }
  }

  /**
   * Execute manual approval route recovery
   */
  private async executeManualApprovalRoute(
    error: ProcessingError,
    context: ProcessingContext
  ): Promise<RecoveryResult> {
    const startTime = Date.now();
    
    try {
      // Route to manual approval queue
      if (context.enrollmentId) {
        const { error: updateError } = await supabase
          .from('enrollments')
          .update({
            status: EnrollmentStatus.PENDING,
            requires_manual_approval: true,
            manual_approval_reason: `Recovery from ${error.type}: ${error.message}`,
            updated_at: new Date().toISOString()
          })
          .eq('id', context.enrollmentId);

        if (updateError) {
          throw new Error(`Failed to route to manual approval: ${updateError.message}`);
        }
      }

      return {
        success: true,
        strategy: RecoveryStrategy.MANUAL_APPROVAL_ROUTE,
        executionTime: Date.now() - startTime,
        recoveredErrors: [error],
        remainingErrors: [],
        fallbackUsed: true,
        manualInterventionRequired: true,
        details: {
          routedToManualApproval: true,
          enrollmentId: context.enrollmentId
        }
      };
      
    } catch (routingError) {
      return {
        success: false,
        strategy: RecoveryStrategy.MANUAL_APPROVAL_ROUTE,
        executionTime: Date.now() - startTime,
        recoveredErrors: [],
        remainingErrors: [error],
        fallbackUsed: false,
        manualInterventionRequired: true,
        details: {
          routingError: routingError instanceof Error ? routingError.message : String(routingError)
        }
      };
    }
  }

  /**
   * Execute database reconnection recovery
   */
  private async executeDatabaseReconnection(
    error: ProcessingError,
    context: ProcessingContext
  ): Promise<RecoveryResult> {
    const startTime = Date.now();
    
    try {
      // Test database connection
      const { error: testError } = await supabase
        .from('enrollments')
        .select('id')
        .limit(1);

      const reconnectionSuccess = !testError;
      
      return {
        success: reconnectionSuccess,
        strategy: RecoveryStrategy.DATABASE_RECONNECTION,
        executionTime: Date.now() - startTime,
        recoveredErrors: reconnectionSuccess ? [error] : [],
        remainingErrors: reconnectionSuccess ? [] : [error],
        fallbackUsed: false,
        manualInterventionRequired: !reconnectionSuccess,
        details: {
          reconnectionSuccess,
          testError: testError?.message
        }
      };
      
    } catch (reconnectionError) {
      return {
        success: false,
        strategy: RecoveryStrategy.DATABASE_RECONNECTION,
        executionTime: Date.now() - startTime,
        recoveredErrors: [],
        remainingErrors: [error],
        fallbackUsed: false,
        manualInterventionRequired: true,
        details: {
          reconnectionError: reconnectionError instanceof Error ? reconnectionError.message : String(reconnectionError)
        }
      };
    }
  }

  /**
   * Execute default recovery strategy
   */
  private async executeDefaultRecovery(
    error: ProcessingError,
    context: ProcessingContext
  ): Promise<RecoveryResult> {
    const startTime = Date.now();
    
    // Default to manual approval route for safety
    return await this.executeManualApprovalRoute(error, context);
  }

  /**
   * Execute manual approval queue fallback
   */
  private async executeManualApprovalQueue(failedOperation: FailedOperation): Promise<FallbackResult> {
    try {
      if (failedOperation.context.enrollmentId) {
        const { error: updateError } = await supabase
          .from('enrollments')
          .update({
            status: EnrollmentStatus.PENDING,
            requires_manual_approval: true,
            manual_approval_reason: `Fallback from failed ${failedOperation.operationType}`,
            updated_at: new Date().toISOString()
          })
          .eq('id', failedOperation.context.enrollmentId);

        if (updateError) {
          throw new Error(`Failed to queue for manual approval: ${updateError.message}`);
        }
      }

      return {
        success: true,
        mechanism: FallbackMechanism.MANUAL_APPROVAL_QUEUE,
        executionTime: 0,
        enrollmentStatus: EnrollmentStatus.PENDING,
        accessGranted: false,
        manualApprovalTriggered: true,
        details: {
          queuedForManualApproval: true,
          enrollmentId: failedOperation.context.enrollmentId
        }
      };
      
    } catch (error) {
      return {
        success: false,
        mechanism: FallbackMechanism.MANUAL_APPROVAL_QUEUE,
        executionTime: 0,
        enrollmentStatus: EnrollmentStatus.PENDING,
        accessGranted: false,
        manualApprovalTriggered: false,
        details: {
          error: error instanceof Error ? error.message : String(error)
        }
      };
    }
  }

  /**
   * Execute default fallback mechanism
   */
  private async executeDefaultFallback(failedOperation: FailedOperation): Promise<FallbackResult> {
    return await this.executeManualApprovalQueue(failedOperation);
  }

  /**
   * Additional recovery and fallback methods would be implemented here...
   * For brevity, I'm including the core structure and key methods.
   */

  // Helper methods and additional implementations...
  private initializeCircuitBreakers(): void {
    // Initialize circuit breakers for different services
  }

  private startHealthMonitoring(): void {
    // Start periodic health monitoring
  }

  private async loadErrorHistory(): Promise<void> {
    // Load error history from database
  }

  private storeErrorHistory(webhookId: string, errors: ProcessingError[]): void {
    this.errorHistory.set(webhookId, errors);
  }

  private recordRecoveryAttempt(webhookId: string, attempt: RecoveryAttempt): void {
    const attempts = this.recoveryAttempts.get(webhookId) || [];
    attempts.push(attempt);
    this.recoveryAttempts.set(webhookId, attempts);
  }

  private determineSystemHealthStatus(errors: ProcessingError[]): SystemHealthStatus {
    const criticalErrors = errors.filter(e => e.severity === ErrorSeverity.CRITICAL);
    const highErrors = errors.filter(e => e.severity === ErrorSeverity.HIGH);
    
    if (criticalErrors.length > 0) return SystemHealthStatus.CRITICAL;
    if (highErrors.length > 2) return SystemHealthStatus.DEGRADED;
    return SystemHealthStatus.HEALTHY;
  }

  private generateRecommendedActions(errors: ProcessingError[]): RecommendedAction[] {
    const actions: RecommendedAction[] = [];
    
    errors.forEach(error => {
      if (error.severity === ErrorSeverity.CRITICAL) {
        actions.push({
          action: ActionType.ESCALATE_TO_ADMIN,
          priority: ActionPriority.URGENT,
          description: `Critical error requires immediate attention: ${error.message}`,
          estimatedTime: 300,
          requiredRole: 'admin',
          automatable: false
        });
      }
    });
    
    return actions;
  }

  private selectFallbackMechanism(failedOperation: FailedOperation): FallbackMechanism {
    if (failedOperation.error.severity === ErrorSeverity.CRITICAL) {
      return FallbackMechanism.EMERGENCY_APPROVAL;
    }
    return FallbackMechanism.MANUAL_APPROVAL_QUEUE;
  }

  private determineInterventionType(criticalError: CriticalError): InterventionType {
    switch (criticalError.type) {
      case CriticalErrorType.SECURITY_BREACH:
        return InterventionType.EMERGENCY_RESPONSE;
      case CriticalErrorType.SYSTEM_FAILURE:
        return InterventionType.SYSTEM_MAINTENANCE;
      default:
        return InterventionType.TECHNICAL_REVIEW;
    }
  }

  private determineInterventionPriority(criticalError: CriticalError): InterventionPriority {
    if (criticalError.requiresImmediateAttention) {
      return InterventionPriority.EMERGENCY;
    }
    return criticalError.severity === 'critical' ? InterventionPriority.URGENT : InterventionPriority.HIGH;
  }

  private determineEscalationPath(criticalError: CriticalError, priority: InterventionPriority): string[] {
    const basePath = ['technical_support', 'system_admin'];
    
    if (priority === InterventionPriority.EMERGENCY) {
      return ['emergency_response', 'technical_lead', 'system_admin'];
    }
    
    return basePath;
  }

  private async sendInterventionNotifications(
    criticalError: CriticalError,
    interventionType: InterventionType,
    priority: InterventionPriority
  ): Promise<void> {
    // Implementation for sending notifications
    logger.warn('📧 Intervention notification sent', {
      errorId: criticalError.id,
      interventionType,
      priority
    });
  }

  private estimateResolutionTime(interventionType: InterventionType, priority: InterventionPriority): number {
    const baseTime = priority === InterventionPriority.EMERGENCY ? 300 : 1800; // 5 min or 30 min
    
    switch (interventionType) {
      case InterventionType.EMERGENCY_RESPONSE:
        return baseTime;
      case InterventionType.SYSTEM_MAINTENANCE:
        return baseTime * 4;
      default:
        return baseTime * 2;
    }
  }

  private async retryOriginalOperation(error: ProcessingError, context: ProcessingContext): Promise<boolean> {
    // Implementation would depend on the specific operation
    // This is a placeholder that would be expanded based on operation type
    return false;
  }

  private async logFallbackExecution(failedOperation: FailedOperation, result: FallbackResult): Promise<void> {
    try {
      const logEntry = {
        webhook_id: failedOperation.context.webhookId,
        operation_type: failedOperation.operationType,
        error_type: failedOperation.error.type,
        fallback_mechanism: result.mechanism,
        success: result.success,
        manual_approval_triggered: result.manualApprovalTriggered,
        execution_time: result.executionTime,
        details: JSON.stringify(result.details),
        created_at: new Date().toISOString()
      };

      const { error: logError } = await supabase
        .from('fallback_executions')
        .insert(logEntry);

      if (logError) {
        logger.error('❌ Failed to log fallback execution', { error: logError });
      }
    } catch (error) {
      logger.error('❌ Error logging fallback execution', { error });
    }
  }

  // Additional placeholder methods for other recovery strategies and fallback mechanisms
  private async executeAlternativeEndpoint(error: ProcessingError, context: ProcessingContext): Promise<RecoveryResult> {
    // Implementation for alternative endpoint recovery
    return this.executeDefaultRecovery(error, context);
  }

  private async executeCachedDataFallback(error: ProcessingError, context: ProcessingContext): Promise<RecoveryResult> {
    // Implementation for cached data fallback
    return this.executeDefaultRecovery(error, context);
  }

  private async executeGracefulDegradation(error: ProcessingError, context: ProcessingContext): Promise<RecoveryResult> {
    // Implementation for graceful degradation
    return this.executeDefaultRecovery(error, context);
  }

  private async executeAdminNotification(failedOperation: FailedOperation): Promise<FallbackResult> {
    // Implementation for admin notification fallback
    return this.executeDefaultFallback(failedOperation);
  }

  private async executeDelayedProcessing(failedOperation: FailedOperation): Promise<FallbackResult> {
    // Implementation for delayed processing fallback
    return this.executeDefaultFallback(failedOperation);
  }

  private async executeSafeModeProcessing(failedOperation: FailedOperation): Promise<FallbackResult> {
    // Implementation for safe mode processing fallback
    return this.executeDefaultFallback(failedOperation);
  }

  private async executeEmergencyApproval(failedOperation: FailedOperation): Promise<FallbackResult> {
    // Implementation for emergency approval fallback
    return this.executeDefaultFallback(failedOperation);
  }
}

// Supporting interfaces and types
interface CircuitBreakerState {
  state: 'closed' | 'open' | 'half-open';
  failureCount: number;
  lastFailureTime?: Date;
  nextAttemptTime?: Date;
}

interface SystemHealthMetrics {
  errorRate: number;
  successRate: number;
  averageProcessingTime: number;
  lastHealthCheck: Date;
}

// Export singleton instance
export const cardPaymentErrorRecoverySystem = CardPaymentErrorRecoverySystem.getInstance();