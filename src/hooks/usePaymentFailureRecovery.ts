/**
 * Payment Failure Recovery Hook
 * 
 * React hook for managing payment failures and recovery in the UI.
 * Provides user-friendly error handling, retry mechanisms, and real-time updates.
 * 
 * Requirements: 7.1, 7.2, 7.3, 7.4
 */

import { useState, useCallback, useEffect } from 'react';
import { 
  PaymentFailureRecoveryService,
  PaymentRecoveryResult,
  UserFriendlyErrorMessage,
  PaymentRecoveryOptions,
  paymentFailureRecoveryService
} from '../services/PaymentFailureRecoveryService';

import { PaymentData, PaymentResult } from '../types/ikhokha';
import { useRealTimePaymentSync } from './useRealTimePaymentSync';

export interface PaymentFailureState {
  hasFailure: boolean;
  isRecovering: boolean;
  canRetry: boolean;
  retryAttempts: number;
  errorMessage: UserFriendlyErrorMessage | null;
  recoveryResult: PaymentRecoveryResult | null;
  nextRetryAt: Date | null;
  isRetryScheduled: boolean;
}

export interface PaymentFailureActions {
  handlePaymentFailure: (error: any, paymentData: PaymentData, enrollmentId: string) => Promise<void>;
  retryPayment: (enrollmentId: string) => Promise<void>;
  clearFailure: () => void;
  generateErrorMessage: (error: any, canRetry?: boolean) => UserFriendlyErrorMessage;
}

export interface UsePaymentFailureRecoveryOptions {
  maxRetryAttempts?: number;
  retryDelayMs?: number;
  enableManualFallback?: boolean;
  autoRetry?: boolean;
  onRecoveryComplete?: (result: PaymentRecoveryResult) => void;
  onManualApprovalRequired?: (enrollmentId: string) => void;
}

/**
 * Payment Failure Recovery Hook
 */
export function usePaymentFailureRecovery(
  options: UsePaymentFailureRecoveryOptions = {}
): [PaymentFailureState, PaymentFailureActions] {
  const [failureState, setFailureState] = useState<PaymentFailureState>({
    hasFailure: false,
    isRecovering: false,
    canRetry: false,
    retryAttempts: 0,
    errorMessage: null,
    recoveryResult: null,
    nextRetryAt: null,
    isRetryScheduled: false
  });

  const { subscribeToPaymentUpdates } = useRealTimePaymentSync();

  // Subscribe to real-time payment updates
  useEffect(() => {
    const unsubscribe = subscribeToPaymentUpdates((update) => {
      if (update.type === 'payment_failure' || update.type === 'payment_recovery') {
        setFailureState(prev => ({
          ...prev,
          isRecovering: false,
          ...(update.type === 'payment_recovery' && update.success && {
            hasFailure: false,
            errorMessage: null,
            recoveryResult: null
          })
        }));
      }
    });

    return unsubscribe;
  }, [subscribeToPaymentUpdates]);

  /**
   * Handle payment failure with recovery options
   * Requirement 7.1: Display clear error message with retry option
   */
  const handlePaymentFailure = useCallback(async (
    error: any,
    paymentData: PaymentData,
    enrollmentId: string
  ) => {
    console.log('🚨 Handling payment failure in UI:', {
      enrollmentId,
      error: error instanceof Error ? error.message : error
    });

    setFailureState(prev => ({
      ...prev,
      isRecovering: true
    }));

    try {
      // Handle failure through recovery service
      const recoveryOptions: Partial<PaymentRecoveryOptions> = {
        maxRetryAttempts: options.maxRetryAttempts || 3,
        retryDelayMs: options.retryDelayMs || 5000,
        enableManualFallback: options.enableManualFallback !== false,
        notifyAdminOnFailure: true,
        preserveEnrollmentOnFailure: true
      };

      const recoveryResult = await paymentFailureRecoveryService.handlePaymentFailure(
        error,
        paymentData,
        enrollmentId,
        recoveryOptions
      );

      // Generate user-friendly error message
      const errorMessage = paymentFailureRecoveryService.generateUserFriendlyErrorMessage(
        error,
        recoveryResult.canRetry,
        0
      );

      // Update failure state
      setFailureState(prev => ({
        ...prev,
        hasFailure: true,
        isRecovering: false,
        canRetry: recoveryResult.canRetry,
        retryAttempts: 0,
        errorMessage,
        recoveryResult,
        nextRetryAt: recoveryResult.nextRetryAt || null,
        isRetryScheduled: recoveryResult.action === 'retry' && !!recoveryResult.nextRetryAt
      }));

      // Handle specific recovery actions
      if (recoveryResult.action === 'manual_approval' && options.onManualApprovalRequired) {
        options.onManualApprovalRequired(enrollmentId);
      }

      // Auto-retry if enabled and scheduled
      if (options.autoRetry && recoveryResult.canRetry && recoveryResult.nextRetryAt) {
        const retryDelay = recoveryResult.nextRetryAt.getTime() - Date.now();
        if (retryDelay > 0) {
          setTimeout(() => {
            retryPayment(enrollmentId);
          }, retryDelay);
        }
      }

      // Notify completion callback
      if (options.onRecoveryComplete) {
        options.onRecoveryComplete(recoveryResult);
      }

    } catch (recoveryError) {
      console.error('❌ Failed to handle payment failure:', recoveryError);
      
      // Set fallback error state
      setFailureState(prev => ({
        ...prev,
        hasFailure: true,
        isRecovering: false,
        canRetry: false,
        retryAttempts: 0,
        errorMessage: {
          title: 'Payment Error',
          message: 'Unable to process payment. Please contact support.',
          actionText: 'Contact Support',
          actionType: 'contact_support',
          showRetryButton: false,
          showChangeMethodButton: false,
          showContactSupport: true
        },
        recoveryResult: null,
        nextRetryAt: null,
        isRetryScheduled: false
      }));
    }
  }, [options]);

  /**
   * Retry failed payment
   * Requirement 7.3: Implement payment retry mechanism for failed transactions
   */
  const retryPayment = useCallback(async (enrollmentId: string) => {
    console.log('🔄 Retrying payment from UI:', { enrollmentId });

    setFailureState(prev => ({
      ...prev,
      isRecovering: true,
      isRetryScheduled: false
    }));

    try {
      const retryOptions: Partial<PaymentRecoveryOptions> = {
        maxRetryAttempts: options.maxRetryAttempts || 3,
        retryDelayMs: options.retryDelayMs || 5000,
        enableManualFallback: options.enableManualFallback !== false
      };

      const retryResult = await paymentFailureRecoveryService.retryFailedPayment(
        enrollmentId,
        retryOptions
      );

      if (retryResult.success) {
        // Payment retry successful
        console.log('✅ Payment retry successful');
        
        setFailureState(prev => ({
          ...prev,
          hasFailure: false,
          isRecovering: false,
          canRetry: false,
          errorMessage: null,
          recoveryResult: retryResult,
          nextRetryAt: null,
          isRetryScheduled: false
        }));

        if (options.onRecoveryComplete) {
          options.onRecoveryComplete(retryResult);
        }

        return;
      }

      // Retry failed, update state
      const newRetryAttempts = failureState.retryAttempts + 1;
      
      // Generate updated error message
      const errorMessage = paymentFailureRecoveryService.generateUserFriendlyErrorMessage(
        new Error(retryResult.message),
        retryResult.canRetry,
        newRetryAttempts
      );

      setFailureState(prev => ({
        ...prev,
        isRecovering: false,
        canRetry: retryResult.canRetry,
        retryAttempts: newRetryAttempts,
        errorMessage,
        recoveryResult: retryResult,
        nextRetryAt: retryResult.nextRetryAt || null,
        isRetryScheduled: retryResult.action === 'retry' && !!retryResult.nextRetryAt
      }));

      // Handle manual approval fallback
      if (retryResult.action === 'manual_approval' && options.onManualApprovalRequired) {
        options.onManualApprovalRequired(enrollmentId);
      }

      // Schedule next auto-retry if enabled
      if (options.autoRetry && retryResult.canRetry && retryResult.nextRetryAt) {
        const retryDelay = retryResult.nextRetryAt.getTime() - Date.now();
        if (retryDelay > 0) {
          setTimeout(() => {
            retryPayment(enrollmentId);
          }, retryDelay);
        }
      }

      if (options.onRecoveryComplete) {
        options.onRecoveryComplete(retryResult);
      }

    } catch (error) {
      console.error('❌ Payment retry failed:', error);
      
      setFailureState(prev => ({
        ...prev,
        isRecovering: false,
        canRetry: false,
        errorMessage: {
          title: 'Retry Failed',
          message: 'Unable to retry payment. Please contact support.',
          actionText: 'Contact Support',
          actionType: 'contact_support',
          showRetryButton: false,
          showChangeMethodButton: false,
          showContactSupport: true
        }
      }));
    }
  }, [failureState.retryAttempts, options]);

  /**
   * Clear failure state
   */
  const clearFailure = useCallback(() => {
    setFailureState({
      hasFailure: false,
      isRecovering: false,
      canRetry: false,
      retryAttempts: 0,
      errorMessage: null,
      recoveryResult: null,
      nextRetryAt: null,
      isRetryScheduled: false
    });
  }, []);

  /**
   * Generate user-friendly error message
   * Requirement 7.2: Enrollment status remains pending until successful payment
   */
  const generateErrorMessage = useCallback((
    error: any,
    canRetry: boolean = true
  ): UserFriendlyErrorMessage => {
    return paymentFailureRecoveryService.generateUserFriendlyErrorMessage(
      error,
      canRetry,
      failureState.retryAttempts
    );
  }, [failureState.retryAttempts]);

  const actions: PaymentFailureActions = {
    handlePaymentFailure,
    retryPayment,
    clearFailure,
    generateErrorMessage
  };

  return [failureState, actions];
}

/**
 * Hook for payment failure statistics (for admin use)
 */
export function usePaymentFailureStats(timeRange?: { from: Date; to: Date }) {
  const [stats, setStats] = useState({
    totalFailures: 0,
    failuresByType: {},
    retrySuccessRate: 0,
    manualApprovalRate: 0,
    averageRetryAttempts: 0,
    isLoading: true
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const defaultTimeRange = {
          from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
          to: new Date()
        };

        const failureStats = await paymentFailureRecoveryService.getPaymentFailureStats(
          timeRange || defaultTimeRange
        );

        setStats({
          ...failureStats,
          isLoading: false
        });
      } catch (error) {
        console.error('Failed to fetch payment failure stats:', error);
        setStats(prev => ({ ...prev, isLoading: false }));
      }
    };

    fetchStats();
  }, [timeRange]);

  return stats;
}