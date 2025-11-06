/**
 * Payment Error Handler Utility
 * 
 * Comprehensive error handling for payment processing failures
 */

import { 
  IkhokhaError, 
  PaymentValidationError, 
  NetworkError, 
  WebhookValidationError,
  PaymentStatus 
} from '../types/ikhokha';

export interface PaymentErrorInfo {
  code: string;
  message: string;
  userMessage: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  retryable: boolean;
  suggestedAction: string;
  technicalDetails?: any;
}

export interface PaymentErrorHandlingResult {
  shouldRetry: boolean;
  retryDelay?: number;
  maxRetries?: number;
  userMessage: string;
  logLevel: 'info' | 'warn' | 'error' | 'critical';
  notifySupport: boolean;
}

/**
 * Payment Error Handler Class
 */
export class PaymentErrorHandler {
  private static readonly ERROR_CODES = {
    // Network errors
    NETWORK_ERROR: {
      userMessage: 'Connection error. Please check your internet connection and try again.',
      severity: 'medium' as const,
      retryable: true,
      suggestedAction: 'Check internet connection and retry'
    },
    TIMEOUT_ERROR: {
      userMessage: 'Request timed out. Please try again.',
      severity: 'medium' as const,
      retryable: true,
      suggestedAction: 'Retry the payment'
    },
    
    // Validation errors
    PAYMENT_VALIDATION_ERROR: {
      userMessage: 'Invalid payment information. Please check your details.',
      severity: 'low' as const,
      retryable: false,
      suggestedAction: 'Correct payment information'
    },
    AMOUNT_VALIDATION_ERROR: {
      userMessage: 'Invalid payment amount. Please check the amount and try again.',
      severity: 'low' as const,
      retryable: false,
      suggestedAction: 'Verify payment amount'
    },
    
    // API errors
    API_ERROR: {
      userMessage: 'Payment service temporarily unavailable. Please try again later.',
      severity: 'high' as const,
      retryable: true,
      suggestedAction: 'Wait and retry, or contact support'
    },
    AUTHENTICATION_ERROR: {
      userMessage: 'Payment service configuration error. Please contact support.',
      severity: 'critical' as const,
      retryable: false,
      suggestedAction: 'Contact technical support'
    },
    
    // Payment processing errors
    PAYMENT_DECLINED: {
      userMessage: 'Payment was declined. Please check your payment method or try a different card.',
      severity: 'medium' as const,
      retryable: true,
      suggestedAction: 'Try different payment method'
    },
    INSUFFICIENT_FUNDS: {
      userMessage: 'Insufficient funds. Please check your account balance or try a different payment method.',
      severity: 'medium' as const,
      retryable: true,
      suggestedAction: 'Check account balance or use different payment method'
    },
    CARD_EXPIRED: {
      userMessage: 'Your card has expired. Please use a different payment method.',
      severity: 'medium' as const,
      retryable: false,
      suggestedAction: 'Use a valid payment method'
    },
    
    // Webhook errors
    WEBHOOK_VALIDATION_ERROR: {
      userMessage: 'Payment confirmation error. Your payment may still be processing.',
      severity: 'high' as const,
      retryable: false,
      suggestedAction: 'Check payment status or contact support'
    },
    
    // System errors
    SYSTEM_ERROR: {
      userMessage: 'A system error occurred. Please try again or contact support.',
      severity: 'high' as const,
      retryable: true,
      suggestedAction: 'Retry or contact support'
    },
    CONFIGURATION_ERROR: {
      userMessage: 'Payment system configuration error. Please contact support.',
      severity: 'critical' as const,
      retryable: false,
      suggestedAction: 'Contact technical support immediately'
    }
  };

  /**
   * Handle payment error and return appropriate response
   */
  static handlePaymentError(error: any): PaymentErrorHandlingResult {
    const errorInfo = this.analyzeError(error);
    
    return {
      shouldRetry: errorInfo.retryable,
      retryDelay: this.calculateRetryDelay(errorInfo),
      maxRetries: this.getMaxRetries(errorInfo),
      userMessage: errorInfo.userMessage,
      logLevel: this.getLogLevel(errorInfo.severity),
      notifySupport: errorInfo.severity === 'critical'
    };
  }

  /**
   * Analyze error and extract information
   */
  static analyzeError(error: any): PaymentErrorInfo {
    // Handle IkhokhaError
    if (error instanceof IkhokhaError) {
      return this.handleIkhokhaError(error);
    }

    // Handle PaymentValidationError
    if (error instanceof PaymentValidationError) {
      return this.handleValidationError(error);
    }

    // Handle NetworkError
    if (error instanceof NetworkError) {
      return this.handleNetworkError(error);
    }

    // Handle WebhookValidationError
    if (error instanceof WebhookValidationError) {
      return this.handleWebhookError(error);
    }

    // Handle generic errors
    return this.handleGenericError(error);
  }

  /**
   * Handle Ikhokha-specific errors
   */
  private static handleIkhokhaError(error: IkhokhaError): PaymentErrorInfo {
    const errorCode = error.code;
    const baseInfo = this.ERROR_CODES[errorCode as keyof typeof this.ERROR_CODES] || 
                     this.ERROR_CODES.API_ERROR;

    return {
      code: errorCode,
      message: error.message,
      userMessage: this.customizeUserMessage(error.message, baseInfo.userMessage),
      severity: baseInfo.severity,
      retryable: baseInfo.retryable,
      suggestedAction: baseInfo.suggestedAction,
      technicalDetails: error.details
    };
  }

  /**
   * Handle validation errors
   */
  private static handleValidationError(error: PaymentValidationError): PaymentErrorInfo {
    return {
      code: 'PAYMENT_VALIDATION_ERROR',
      message: error.message,
      userMessage: error.message, // Validation errors are usually user-friendly
      severity: 'low',
      retryable: false,
      suggestedAction: 'Correct the validation errors and try again'
    };
  }

  /**
   * Handle network errors
   */
  private static handleNetworkError(error: NetworkError): PaymentErrorInfo {
    const isTimeout = error.message.toLowerCase().includes('timeout') ||
                     error.message.toLowerCase().includes('aborted');

    return {
      code: isTimeout ? 'TIMEOUT_ERROR' : 'NETWORK_ERROR',
      message: error.message,
      userMessage: isTimeout ? 
        'Request timed out. Please try again.' :
        'Connection error. Please check your internet connection and try again.',
      severity: 'medium',
      retryable: true,
      suggestedAction: isTimeout ? 'Retry the payment' : 'Check internet connection and retry',
      technicalDetails: error.details
    };
  }

  /**
   * Handle webhook errors
   */
  private static handleWebhookError(error: WebhookValidationError): PaymentErrorInfo {
    return {
      code: 'WEBHOOK_VALIDATION_ERROR',
      message: error.message,
      userMessage: 'Payment confirmation error. Your payment may still be processing.',
      severity: 'high',
      retryable: false,
      suggestedAction: 'Check payment status or contact support'
    };
  }

  /**
   * Handle generic errors
   */
  private static handleGenericError(error: any): PaymentErrorInfo {
    const message = error instanceof Error ? error.message : String(error);
    
    return {
      code: 'SYSTEM_ERROR',
      message,
      userMessage: 'A system error occurred. Please try again or contact support.',
      severity: 'high',
      retryable: true,
      suggestedAction: 'Retry or contact support',
      technicalDetails: error
    };
  }

  /**
   * Customize user message based on error details
   */
  private static customizeUserMessage(errorMessage: string, defaultMessage: string): string {
    const lowerMessage = errorMessage.toLowerCase();

    // Check for specific error patterns
    if (lowerMessage.includes('declined') || lowerMessage.includes('rejected')) {
      return 'Payment was declined. Please check your payment method or try a different card.';
    }

    if (lowerMessage.includes('insufficient') || lowerMessage.includes('balance')) {
      return 'Insufficient funds. Please check your account balance or try a different payment method.';
    }

    if (lowerMessage.includes('expired') || lowerMessage.includes('invalid card')) {
      return 'Your card has expired or is invalid. Please use a different payment method.';
    }

    if (lowerMessage.includes('timeout') || lowerMessage.includes('timed out')) {
      return 'Request timed out. Please try again.';
    }

    if (lowerMessage.includes('network') || lowerMessage.includes('connection')) {
      return 'Connection error. Please check your internet connection and try again.';
    }

    return defaultMessage;
  }

  /**
   * Calculate retry delay based on error severity
   */
  private static calculateRetryDelay(errorInfo: PaymentErrorInfo): number | undefined {
    if (!errorInfo.retryable) return undefined;

    switch (errorInfo.severity) {
      case 'low':
        return 1000; // 1 second
      case 'medium':
        return 3000; // 3 seconds
      case 'high':
        return 10000; // 10 seconds
      case 'critical':
        return undefined; // No retry for critical errors
      default:
        return 5000; // 5 seconds default
    }
  }

  /**
   * Get maximum retry attempts based on error severity
   */
  private static getMaxRetries(errorInfo: PaymentErrorInfo): number | undefined {
    if (!errorInfo.retryable) return 0;

    switch (errorInfo.severity) {
      case 'low':
        return 1;
      case 'medium':
        return 3;
      case 'high':
        return 2;
      case 'critical':
        return 0;
      default:
        return 2;
    }
  }

  /**
   * Get log level based on error severity
   */
  private static getLogLevel(severity: PaymentErrorInfo['severity']): PaymentErrorHandlingResult['logLevel'] {
    switch (severity) {
      case 'low':
        return 'info';
      case 'medium':
        return 'warn';
      case 'high':
        return 'error';
      case 'critical':
        return 'critical';
      default:
        return 'error';
    }
  }

  /**
   * Format error for logging
   */
  static formatErrorForLogging(error: any, context?: any): {
    message: string;
    code?: string;
    details?: any;
    context?: any;
    timestamp: string;
  } {
    const errorInfo = this.analyzeError(error);
    
    return {
      message: errorInfo.message,
      code: errorInfo.code,
      details: errorInfo.technicalDetails,
      context,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Check if error indicates payment was successful despite error
   */
  static isPaymentSuccessfulDespiteError(error: any): boolean {
    if (error instanceof IkhokhaError) {
      // Some errors might occur after successful payment
      const successDespiteErrorCodes = [
        'WEBHOOK_VALIDATION_ERROR',
        'NOTIFICATION_ERROR',
        'ENROLLMENT_UPDATE_ERROR'
      ];
      
      return successDespiteErrorCodes.includes(error.code);
    }

    return false;
  }

  /**
   * Get user-friendly status message for payment status
   */
  static getStatusMessage(status: PaymentStatus): string {
    switch (status) {
      case PaymentStatus.COMPLETED:
        return 'Payment completed successfully';
      case PaymentStatus.PENDING:
        return 'Payment is being processed';
      case PaymentStatus.PROCESSING:
        return 'Payment is currently processing';
      case PaymentStatus.FAILED:
        return 'Payment failed';
      case PaymentStatus.CANCELLED:
        return 'Payment was cancelled';
      case PaymentStatus.REFUNDED:
        return 'Payment has been refunded';
      default:
        return 'Payment status unknown';
    }
  }
}

// Export utility functions
export const handlePaymentError = PaymentErrorHandler.handlePaymentError;
export const analyzePaymentError = PaymentErrorHandler.analyzeError;
export const formatPaymentErrorForLogging = PaymentErrorHandler.formatErrorForLogging;
export const isPaymentSuccessfulDespiteError = PaymentErrorHandler.isPaymentSuccessfulDespiteError;
export const getPaymentStatusMessage = PaymentErrorHandler.getStatusMessage;