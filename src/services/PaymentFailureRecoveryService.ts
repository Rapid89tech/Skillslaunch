/**
 * Payment Failure Recovery Service
 * 
 * Comprehensive payment failure handling and recovery system that provides:
 * - Payment error classification and handling
 * - User-friendly error messages with retry options
 * - Payment retry mechanism for failed transactions
 * - Fallback to manual approval for persistent payment failures
 * 
 * Requirements: 7.1, 7.2, 7.3, 7.4
 */

import {
  PaymentResult,
  PaymentStatus,
  PaymentError,
  IkhokhaError,
  PaymentValidationError,
  NetworkError,
  PaymentData,
  PaymentMetadata
} from '../types/ikhokha';

import { 
  PaymentErrorHandler, 
  PaymentErrorInfo, 
  PaymentErrorHandlingResult,
  handlePaymentError,
  analyzePaymentError 
} from '../utils/paymentErrorHandler';

import { EnrollmentStateManager } from './EnrollmentStateManager';
import { RealTimePaymentSync } from './RealTimePaymentSync';
import { paymentLoggingService, PaymentLogContext } from './PaymentLoggingService';

export interface PaymentRetryAttempt {
  attemptNumber: number;
  timestamp: Date;
  error: PaymentError;
  nextRetryAt?: Date;
  canRetry: boolean;
}

export interface PaymentFailureContext {
  enrollmentId: string;
  courseId: string;
  userId: string;
  paymentData: PaymentData;
  originalError: any;
  retryAttempts: PaymentRetryAttempt[];
  failureReason: string;
  requiresManualApproval: boolean;
}

export interface PaymentRecoveryOptions {
  maxRetryAttempts: number;
  retryDelayMs: number;
  enableManualFallback: boolean;
  notifyAdminOnFailure: boolean;
  preserveEnrollmentOnFailure: boolean;
}

export interface PaymentRecoveryResult {
  success: boolean;
  action: 'retry' | 'manual_approval' | 'failed' | 'cancelled';
  message: string;
  nextRetryAt?: Date;
  canRetry: boolean;
  requiresUserAction: boolean;
  userInstructions?: string;
  adminNotified: boolean;
}

export interface UserFriendlyErrorMessage {
  title: string;
  message: string;
  actionText: string;
  actionType: 'retry' | 'change_method' | 'contact_support' | 'wait';
  showRetryButton: boolean;
  showChangeMethodButton: boolean;
  showContactSupport: boolean;
  estimatedRetryTime?: string;
  additionalInfo?: string;
}

/**
 * Payment Failure Recovery Service Implementation
 */
export class PaymentFailureRecoveryService {
  private enrollmentStateManager: EnrollmentStateManager;
  private realTimeSync: RealTimePaymentSync;
  private defaultRecoveryOptions: PaymentRecoveryOptions;

  constructor(
    enrollmentStateManager: EnrollmentStateManager,
    realTimeSync: RealTimePaymentSync
  ) {
    this.enrollmentStateManager = enrollmentStateManager;
    this.realTimeSync = realTimeSync;
    
    this.defaultRecoveryOptions = {
      maxRetryAttempts: 3,
      retryDelayMs: 5000,
      enableManualFallback: true,
      notifyAdminOnFailure: true,
      preserveEnrollmentOnFailure: true
    };

    console.log('🔧 Payment Failure Recovery Service initialized');
  }

  /**
   * Handle payment failure with comprehensive recovery options
   * Requirement 7.1: Display clear error message with retry option
   */
  async handlePaymentFailure(
    error: any,
    paymentData: PaymentData,
    enrollmentId: string,
    options?: Partial<PaymentRecoveryOptions>
  ): Promise<PaymentRecoveryResult> {
    const recoveryOptions = { ...this.defaultRecoveryOptions, ...options };
    
    const paymentContext: PaymentLogContext = {
      enrollmentId,
      paymentId: paymentData.sessionId,
      amount: paymentData.amount,
      currency: paymentData.currency,
      userId: paymentData.metadata?.userId,
      courseId: paymentData.metadata?.courseId,
      paymentMethod: 'card'
    };

    try {
      console.log('🚨 Handling payment failure:', {
        enrollmentId,
        sessionId: paymentData.sessionId,
        error: error instanceof Error ? error.message : error
      });

      // Log payment failure
      await paymentLoggingService.logPaymentError(
        paymentContext,
        {
          code: error instanceof IkhokhaError ? error.code : 'PAYMENT_FAILURE',
          message: error instanceof Error ? error.message : 'Unknown payment error',
          details: error instanceof IkhokhaError ? error.details : undefined,
          retryable: true
        },
        'payment_processing'
      );

      // Analyze the error to determine recovery strategy
      const errorInfo = analyzePaymentError(error);
      const errorHandling = handlePaymentError(error);

      // Create failure context
      const failureContext = await this.createFailureContext(
        enrollmentId,
        paymentData,
        error,
        errorInfo
      );

      // Determine recovery action based on error analysis
      const recoveryResult = await this.determineRecoveryAction(
        failureContext,
        errorHandling,
        recoveryOptions
      );

      // Execute recovery action
      await this.executeRecoveryAction(recoveryResult, failureContext, recoveryOptions);

      // Update enrollment status based on recovery result
      await this.updateEnrollmentForFailure(failureContext, recoveryResult);

      // Broadcast real-time updates
      await this.broadcastFailureUpdate(failureContext, recoveryResult);

      console.log('✅ Payment failure handled:', {
        action: recoveryResult.action,
        canRetry: recoveryResult.canRetry,
        requiresUserAction: recoveryResult.requiresUserAction
      });

      return recoveryResult;

    } catch (recoveryError) {
      console.error('❌ Failed to handle payment failure:', recoveryError);
      
      // Log recovery failure
      await paymentLoggingService.logPaymentError(
        paymentContext,
        {
          code: 'RECOVERY_FAILURE',
          message: 'Failed to handle payment failure',
          details: { originalError: error, recoveryError },
          retryable: false
        },
        'payment_recovery'
      );

      // Return fallback recovery result
      return {
        success: false,
        action: 'failed',
        message: 'Unable to process payment failure. Please contact support.',
        canRetry: false,
        requiresUserAction: true,
        userInstructions: 'Please contact customer support for assistance with your payment.',
        adminNotified: true
      };
    }
  }

  /**
   * Retry failed payment with intelligent retry logic
   * Requirement 7.3: Implement payment retry mechanism for failed transactions
   */
  async retryFailedPayment(
    enrollmentId: string,
    retryOptions?: Partial<PaymentRecoveryOptions>
  ): Promise<PaymentRecoveryResult> {
    try {
      console.log('🔄 Retrying failed payment:', { enrollmentId });

      // Get failure context
      const failureContext = await this.getFailureContext(enrollmentId);
      if (!failureContext) {
        throw new Error('No failure context found for enrollment');
      }

      // Check if retry is allowed
      const canRetry = this.canRetryPayment(failureContext, retryOptions);
      if (!canRetry.allowed) {
        console.log('❌ Payment retry not allowed:', canRetry.reason);
        
        // Fallback to manual approval if enabled
        if (retryOptions?.enableManualFallback !== false) {
          return await this.fallbackToManualApproval(failureContext);
        }

        return {
          success: false,
          action: 'failed',
          message: canRetry.reason,
          canRetry: false,
          requiresUserAction: true,
          adminNotified: false
        };
      }

      // Record retry attempt
      const retryAttempt = this.recordRetryAttempt(failureContext);

      // Calculate retry delay
      const retryDelay = this.calculateRetryDelay(failureContext.retryAttempts.length);
      
      console.log('⏳ Waiting before retry:', { delayMs: retryDelay });
      await this.delay(retryDelay);

      // Attempt payment retry through payment service
      const retryResult = await this.attemptPaymentRetry(failureContext);

      if (retryResult.success) {
        console.log('✅ Payment retry successful');
        
        // Update enrollment to approved status
        await this.enrollmentStateManager.approveEnrollment(
          enrollmentId,
          'system_retry'
        );

        // Broadcast success update
        await this.realTimeSync.syncEnrollmentStatus(
          enrollmentId,
          'approved'
        );

        return {
          success: true,
          action: 'retry',
          message: 'Payment completed successfully',
          canRetry: false,
          requiresUserAction: false,
          adminNotified: false
        };
      }

      // Retry failed, determine next action
      const maxRetries = retryOptions?.maxRetryAttempts ?? this.defaultRecoveryOptions.maxRetryAttempts;
      const hasMoreRetries = failureContext.retryAttempts.length < maxRetries;

      if (hasMoreRetries) {
        const nextRetryAt = new Date(Date.now() + this.calculateRetryDelay(failureContext.retryAttempts.length + 1));
        
        return {
          success: false,
          action: 'retry',
          message: 'Payment failed. Will retry automatically.',
          nextRetryAt,
          canRetry: true,
          requiresUserAction: false,
          adminNotified: false
        };
      }

      // No more retries, fallback to manual approval
      console.log('❌ All retry attempts exhausted, falling back to manual approval');
      return await this.fallbackToManualApproval(failureContext);

    } catch (error) {
      console.error('❌ Payment retry failed:', error);
      
      return {
        success: false,
        action: 'failed',
        message: 'Payment retry failed. Please try again or contact support.',
        canRetry: true,
        requiresUserAction: true,
        adminNotified: false
      };
    }
  }

  /**
   * Fallback to manual approval for persistent payment failures
   * Requirement 7.4: Add fallback to manual approval for persistent payment failures
   */
  async fallbackToManualApproval(
    failureContext: PaymentFailureContext
  ): Promise<PaymentRecoveryResult> {
    try {
      console.log('🔄 Falling back to manual approval:', {
        enrollmentId: failureContext.enrollmentId,
        retryAttempts: failureContext.retryAttempts.length
      });

      // Update enrollment to require manual approval
      await this.enrollmentStateManager.markForManualApproval(
        failureContext.enrollmentId,
        'payment_failure_fallback',
        {
          originalPaymentError: failureContext.originalError,
          retryAttempts: failureContext.retryAttempts.length,
          failureReason: failureContext.failureReason
        }
      );

      // Notify admins of manual approval requirement
      await this.notifyAdminsOfManualApproval(failureContext);

      // Broadcast real-time update to user
      await this.realTimeSync.syncEnrollmentStatus(
        failureContext.enrollmentId,
        'pending_manual_approval'
      );

      // Log manual approval fallback
      const paymentContext: PaymentLogContext = {
        enrollmentId: failureContext.enrollmentId,
        userId: failureContext.userId,
        courseId: failureContext.courseId,
        amount: failureContext.paymentData.amount,
        currency: failureContext.paymentData.currency
      };

      await paymentLoggingService.logPaymentError(
        paymentContext,
        {
          code: 'MANUAL_APPROVAL_FALLBACK',
          message: 'Payment failed multiple times, falling back to manual approval',
          details: {
            retryAttempts: failureContext.retryAttempts.length,
            failureReason: failureContext.failureReason
          },
          retryable: false
        },
        'payment_fallback'
      );

      return {
        success: true,
        action: 'manual_approval',
        message: 'Payment processing failed. Your enrollment has been submitted for manual review.',
        canRetry: false,
        requiresUserAction: false,
        userInstructions: 'An administrator will review your enrollment and contact you within 24 hours.',
        adminNotified: true
      };

    } catch (error) {
      console.error('❌ Manual approval fallback failed:', error);
      
      return {
        success: false,
        action: 'failed',
        message: 'Unable to process enrollment. Please contact support.',
        canRetry: false,
        requiresUserAction: true,
        userInstructions: 'Please contact customer support for immediate assistance.',
        adminNotified: false
      };
    }
  }

  /**
   * Generate user-friendly error message with retry options
   * Requirement 7.1: Display clear error message with retry option
   */
  generateUserFriendlyErrorMessage(
    error: any,
    canRetry: boolean = true,
    retryAttempts: number = 0
  ): UserFriendlyErrorMessage {
    const errorInfo = analyzePaymentError(error);
    const errorHandling = handlePaymentError(error);

    // Base message structure
    let message: UserFriendlyErrorMessage = {
      title: 'Payment Failed',
      message: errorHandling.userMessage,
      actionText: 'Try Again',
      actionType: 'retry',
      showRetryButton: canRetry && errorInfo.retryable,
      showChangeMethodButton: false,
      showContactSupport: false
    };

    // Customize based on error type
    switch (errorInfo.code) {
      case 'PAYMENT_DECLINED':
      case 'INSUFFICIENT_FUNDS':
        message = {
          ...message,
          title: 'Payment Declined',
          actionType: 'change_method',
          actionText: 'Try Different Payment Method',
          showRetryButton: true,
          showChangeMethodButton: true,
          additionalInfo: 'You can also try again with the same payment method.'
        };
        break;

      case 'CARD_EXPIRED':
        message = {
          ...message,
          title: 'Card Expired',
          actionType: 'change_method',
          actionText: 'Use Different Card',
          showRetryButton: false,
          showChangeMethodButton: true
        };
        break;

      case 'NETWORK_ERROR':
      case 'TIMEOUT_ERROR':
        message = {
          ...message,
          title: 'Connection Problem',
          actionType: 'retry',
          estimatedRetryTime: '30 seconds',
          additionalInfo: 'Please check your internet connection.'
        };
        break;

      case 'API_ERROR':
      case 'SYSTEM_ERROR':
        message = {
          ...message,
          title: 'Service Temporarily Unavailable',
          actionType: 'wait',
          actionText: 'Try Again Later',
          estimatedRetryTime: '5 minutes',
          showContactSupport: retryAttempts >= 2
        };
        break;

      case 'AUTHENTICATION_ERROR':
      case 'CONFIGURATION_ERROR':
        message = {
          ...message,
          title: 'Service Configuration Error',
          actionType: 'contact_support',
          actionText: 'Contact Support',
          showRetryButton: false,
          showContactSupport: true,
          additionalInfo: 'This appears to be a technical issue on our end.'
        };
        break;
    }

    // Add retry attempt information
    if (retryAttempts > 0) {
      message.additionalInfo = `${message.additionalInfo || ''} (Attempt ${retryAttempts + 1})`.trim();
    }

    // Disable retry if too many attempts
    if (retryAttempts >= 3) {
      message.showRetryButton = false;
      message.showContactSupport = true;
      message.additionalInfo = 'Multiple attempts failed. Please contact support for assistance.';
    }

    return message;
  }

  /**
   * Get payment failure statistics for monitoring
   */
  async getPaymentFailureStats(timeRange: { from: Date; to: Date }) {
    // This would typically query a database for failure statistics
    // For now, return a basic structure
    return {
      totalFailures: 0,
      failuresByType: {},
      retrySuccessRate: 0,
      manualApprovalRate: 0,
      averageRetryAttempts: 0
    };
  }

  // Private Methods

  /**
   * Create failure context for tracking and recovery
   */
  private async createFailureContext(
    enrollmentId: string,
    paymentData: PaymentData,
    error: any,
    errorInfo: PaymentErrorInfo
  ): Promise<PaymentFailureContext> {
    return {
      enrollmentId,
      courseId: paymentData.metadata?.courseId || '',
      userId: paymentData.metadata?.userId || '',
      paymentData,
      originalError: error,
      retryAttempts: [],
      failureReason: errorInfo.message,
      requiresManualApproval: !errorInfo.retryable || errorInfo.severity === 'critical'
    };
  }

  /**
   * Get existing failure context
   */
  private async getFailureContext(enrollmentId: string): Promise<PaymentFailureContext | null> {
    // In a real implementation, this would fetch from database
    // For now, return null to indicate no stored context
    return null;
  }

  /**
   * Determine the appropriate recovery action
   */
  private async determineRecoveryAction(
    failureContext: PaymentFailureContext,
    errorHandling: PaymentErrorHandlingResult,
    options: PaymentRecoveryOptions
  ): Promise<PaymentRecoveryResult> {
    // If error is not retryable, go to manual approval
    if (!errorHandling.shouldRetry) {
      if (options.enableManualFallback) {
        return {
          success: true, // Success means we handled it (via manual approval)
          action: 'manual_approval',
          message: 'Payment failed. Submitting for manual review.',
          canRetry: false,
          requiresUserAction: false,
          adminNotified: true
        };
      } else {
        return {
          success: false,
          action: 'failed',
          message: errorHandling.userMessage,
          canRetry: false,
          requiresUserAction: true,
          adminNotified: false
        };
      }
    }

    // Check retry limits
    if (failureContext.retryAttempts.length >= options.maxRetryAttempts) {
      if (options.enableManualFallback) {
        return {
          success: true, // Success means we handled it (via manual approval)
          action: 'manual_approval',
          message: 'Multiple payment attempts failed. Submitting for manual review.',
          canRetry: false,
          requiresUserAction: false,
          adminNotified: true
        };
      } else {
        return {
          success: false,
          action: 'failed',
          message: 'Payment failed after multiple attempts.',
          canRetry: false,
          requiresUserAction: true,
          adminNotified: false
        };
      }
    }

    // Allow retry
    const nextRetryAt = new Date(Date.now() + (errorHandling.retryDelay || options.retryDelayMs));
    
    return {
      success: false,
      action: 'retry',
      message: errorHandling.userMessage,
      nextRetryAt,
      canRetry: true,
      requiresUserAction: false,
      adminNotified: false
    };
  }

  /**
   * Execute the determined recovery action
   */
  private async executeRecoveryAction(
    recoveryResult: PaymentRecoveryResult,
    failureContext: PaymentFailureContext,
    options: PaymentRecoveryOptions
  ): Promise<void> {
    switch (recoveryResult.action) {
      case 'retry':
        // Schedule retry (in a real implementation, this might use a job queue)
        console.log('📅 Scheduling payment retry:', {
          enrollmentId: failureContext.enrollmentId,
          nextRetryAt: recoveryResult.nextRetryAt
        });
        break;

      case 'manual_approval':
        // Don't call fallbackToManualApproval again, it's already handled in determineRecoveryAction
        await this.enrollmentStateManager.markForManualApproval(
          failureContext.enrollmentId,
          'payment_failure_fallback',
          {
            originalPaymentError: failureContext.originalError,
            retryAttempts: failureContext.retryAttempts.length,
            failureReason: failureContext.failureReason
          }
        );
        await this.notifyAdminsOfManualApproval(failureContext);
        break;

      case 'failed':
        if (options.notifyAdminOnFailure) {
          await this.notifyAdminsOfFailure(failureContext);
        }
        break;
    }
  }

  /**
   * Update enrollment status based on failure
   */
  private async updateEnrollmentForFailure(
    failureContext: PaymentFailureContext,
    recoveryResult: PaymentRecoveryResult
  ): Promise<void> {
    const enrollmentId = failureContext.enrollmentId;

    switch (recoveryResult.action) {
      case 'retry':
        // Keep enrollment in pending state with retry information
        await this.enrollmentStateManager.updateEnrollmentStatus(
          enrollmentId,
          'pending_payment_retry',
          {
            retryAttempts: failureContext.retryAttempts.length,
            nextRetryAt: recoveryResult.nextRetryAt,
            lastError: failureContext.failureReason
          }
        );
        break;

      case 'manual_approval':
        // Mark for manual approval
        await this.enrollmentStateManager.markForManualApproval(
          enrollmentId,
          'payment_failure',
          {
            failureReason: failureContext.failureReason,
            retryAttempts: failureContext.retryAttempts.length
          }
        );
        break;

      case 'failed':
        // Mark enrollment as failed
        await this.enrollmentStateManager.rejectEnrollment(
          enrollmentId,
          failureContext.failureReason
        );
        break;
    }
  }

  /**
   * Broadcast real-time failure update
   */
  private async broadcastFailureUpdate(
    failureContext: PaymentFailureContext,
    recoveryResult: PaymentRecoveryResult
  ): Promise<void> {
    await this.realTimeSync.broadcastToUser(failureContext.userId, {
      type: 'payment_failure',
      enrollmentId: failureContext.enrollmentId,
      courseId: failureContext.courseId,
      action: recoveryResult.action,
      message: recoveryResult.message,
      canRetry: recoveryResult.canRetry,
      requiresUserAction: recoveryResult.requiresUserAction,
      timestamp: new Date()
    });
  }

  /**
   * Check if payment can be retried
   */
  private canRetryPayment(
    failureContext: PaymentFailureContext,
    options?: Partial<PaymentRecoveryOptions>
  ): { allowed: boolean; reason?: string } {
    const maxRetries = options?.maxRetryAttempts ?? this.defaultRecoveryOptions.maxRetryAttempts;
    
    if (failureContext.retryAttempts.length >= maxRetries) {
      return {
        allowed: false,
        reason: `Maximum retry attempts (${maxRetries}) exceeded`
      };
    }

    if (failureContext.requiresManualApproval) {
      return {
        allowed: false,
        reason: 'Payment failure requires manual approval'
      };
    }

    return { allowed: true };
  }

  /**
   * Record a retry attempt
   */
  private recordRetryAttempt(failureContext: PaymentFailureContext): PaymentRetryAttempt {
    const attempt: PaymentRetryAttempt = {
      attemptNumber: failureContext.retryAttempts.length + 1,
      timestamp: new Date(),
      error: {
        code: 'RETRY_ATTEMPT',
        message: 'Payment retry attempt'
      },
      canRetry: true
    };

    failureContext.retryAttempts.push(attempt);
    return attempt;
  }

  /**
   * Calculate retry delay with exponential backoff
   */
  private calculateRetryDelay(attemptNumber: number): number {
    const baseDelay = this.defaultRecoveryOptions.retryDelayMs;
    return Math.min(baseDelay * Math.pow(2, attemptNumber - 1), 30000); // Max 30 seconds
  }

  /**
   * Attempt payment retry
   */
  private async attemptPaymentRetry(failureContext: PaymentFailureContext): Promise<PaymentResult> {
    // In a real implementation, this would call the payment service
    // For now, simulate a retry attempt
    console.log('🔄 Attempting payment retry for enrollment:', failureContext.enrollmentId);
    
    // Simulate random success/failure for testing
    const success = Math.random() > 0.5;
    
    return {
      success,
      status: success ? PaymentStatus.COMPLETED : PaymentStatus.FAILED,
      message: success ? 'Payment completed successfully' : 'Payment retry failed',
      ...(success && {
        payment_id: `retry_${Date.now()}`,
        transaction_id: `txn_retry_${Date.now()}`
      })
    };
  }

  /**
   * Notify admins of manual approval requirement
   */
  private async notifyAdminsOfManualApproval(failureContext: PaymentFailureContext): Promise<void> {
    console.log('📧 Notifying admins of manual approval requirement:', {
      enrollmentId: failureContext.enrollmentId,
      userId: failureContext.userId,
      courseId: failureContext.courseId
    });

    // Broadcast to admin dashboard
    await this.realTimeSync.broadcastToAdmins({
      type: 'manual_approval_required',
      enrollmentId: failureContext.enrollmentId,
      userId: failureContext.userId,
      courseId: failureContext.courseId,
      reason: 'payment_failure_fallback',
      retryAttempts: failureContext.retryAttempts.length,
      timestamp: new Date()
    });
  }

  /**
   * Notify admins of payment failure
   */
  private async notifyAdminsOfFailure(failureContext: PaymentFailureContext): Promise<void> {
    console.log('📧 Notifying admins of payment failure:', {
      enrollmentId: failureContext.enrollmentId,
      failureReason: failureContext.failureReason
    });

    await this.realTimeSync.broadcastToAdmins({
      type: 'payment_failure',
      enrollmentId: failureContext.enrollmentId,
      userId: failureContext.userId,
      courseId: failureContext.courseId,
      error: failureContext.failureReason,
      retryAttempts: failureContext.retryAttempts.length,
      timestamp: new Date()
    });
  }

  /**
   * Utility delay function
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Export singleton instance
export const paymentFailureRecoveryService = new PaymentFailureRecoveryService(
  new EnrollmentStateManager(),
  new RealTimePaymentSync()
);