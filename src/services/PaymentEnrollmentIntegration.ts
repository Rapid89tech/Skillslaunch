/**
 * Payment Enrollment Integration Service
 * 
 * Integrates PaymentTypeDetector with enrollment system to provide
 * automatic status assignment based on payment type and real-time monitoring.
 * 
 * Requirements: 1.1, 1.2, 2.1, 2.2
 */

import { paymentTypeDetector } from './PaymentTypeDetector';
import { paymentMethodRouter } from './PaymentMethodRouter';
import { realTimePaymentSync } from './RealTimePaymentSync';
import { unifiedEnrollmentManager } from './UnifiedEnrollmentManager';
import { logger } from '@/utils/logger';
import { 
  IkhokhaWebhook, 
  PaymentType, 
  PaymentStatus, 
  EnrollmentStatus,
  PaymentResult 
} from '@/types/ikhokha';

export interface EnrollmentPaymentData {
  enrollmentId: string;
  userId: string;
  courseId: string;
  userEmail: string;
  courseName: string;
  amount: number;
  currency: string;
}

export interface PaymentProcessingResult {
  success: boolean;
  enrollmentId: string;
  paymentType: PaymentType;
  confidence: number;
  status: EnrollmentStatus;
  accessGranted: boolean;
  message: string;
  processingTimeMs: number;
  error?: string;
}

/**
 * Payment Enrollment Integration Service
 * 
 * Connects payment detection with enrollment workflow for automatic
 * status assignment and real-time updates.
 */
export class PaymentEnrollmentIntegration {
  private static instance: PaymentEnrollmentIntegration;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): PaymentEnrollmentIntegration {
    if (!PaymentEnrollmentIntegration.instance) {
      PaymentEnrollmentIntegration.instance = new PaymentEnrollmentIntegration();
    }
    return PaymentEnrollmentIntegration.instance;
  }

  /**
   * Initialize the integration service
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) {
      return;
    }

    try {
      logger.info('🔗 PaymentEnrollmentIntegration: Initializing service...');

      // Initialize dependent services
      await realTimePaymentSync.initialize();
      await unifiedEnrollmentManager.initialize();

      this.isInitialized = true;
      logger.info('✅ PaymentEnrollmentIntegration: Service initialized successfully');

    } catch (error) {
      logger.error('❌ PaymentEnrollmentIntegration: Initialization failed', { error });
      throw error;
    }
  }

  /**
   * Process payment webhook and automatically assign enrollment status
   * Requirement 1.1: Automatic status assignment based on payment type
   */
  async processPaymentWebhook(
    webhookData: IkhokhaWebhook,
    enrollmentData: EnrollmentPaymentData
  ): Promise<PaymentProcessingResult> {
    const startTime = Date.now();

    try {
      logger.info('🔄 PaymentEnrollmentIntegration: Processing payment webhook', {
        transactionId: webhookData.transaction_id,
        enrollmentId: enrollmentData.enrollmentId
      });

      // Step 1: Detect payment type using PaymentTypeDetector
      const paymentTypeResult = paymentTypeDetector.detectPaymentType(webhookData);
      
      logger.info('🔍 PaymentEnrollmentIntegration: Payment type detected', {
        type: paymentTypeResult.type,
        confidence: Math.round(paymentTypeResult.confidence * 100) + '%',
        indicators: paymentTypeResult.indicators.length
      });

      // Step 2: Convert webhook to payment result
      const paymentResult: PaymentResult = {
        success: webhookData.status === 'completed',
        transaction_id: webhookData.transaction_id,
        reference: webhookData.reference,
        status: webhookData.status === 'completed' ? PaymentStatus.COMPLETED : PaymentStatus.FAILED,
        amount: webhookData.amount,
        currency: webhookData.currency,
        payment_id: webhookData.transaction_id,
        error: webhookData.status !== 'completed' ? 
          { message: webhookData.response_message || 'Payment failed' } : undefined
      };

      // Step 3: Route payment based on detected type
      const routingContext = {
        webhookData,
        paymentData: {
          paymentMethod: paymentTypeResult.type,
          amount: webhookData.amount,
          currency: webhookData.currency,
          reference: webhookData.reference,
          metadata: webhookData.metadata
        }
      };

      const routingResult = await paymentMethodRouter.routePayment(
        enrollmentData.enrollmentId,
        paymentResult,
        routingContext
      );

      // Step 4: Update enrollment in unified system
      const newStatus = routingResult.approved ? EnrollmentStatus.APPROVED : EnrollmentStatus.PENDING;
      
      await unifiedEnrollmentManager.updateEnrollmentStatus(
        enrollmentData.enrollmentId,
        newStatus === EnrollmentStatus.APPROVED ? 'approved' : 'pending',
        enrollmentData.userEmail
      );

      // Step 5: Sync real-time updates
      await this.syncRealTimeUpdates(
        enrollmentData,
        paymentTypeResult.type,
        paymentResult.status,
        newStatus
      );

      const processingTimeMs = Date.now() - startTime;

      const result: PaymentProcessingResult = {
        success: routingResult.success,
        enrollmentId: enrollmentData.enrollmentId,
        paymentType: paymentTypeResult.type === 'card' ? PaymentType.CARD : 
                    paymentTypeResult.type === 'eft' ? PaymentType.EFT : PaymentType.MANUAL,
        confidence: paymentTypeResult.confidence,
        status: newStatus,
        accessGranted: routingResult.accessGranted,
        message: routingResult.message,
        processingTimeMs,
        error: routingResult.error
      };

      logger.info('✅ PaymentEnrollmentIntegration: Payment processing completed', {
        enrollmentId: enrollmentData.enrollmentId,
        paymentType: result.paymentType,
        status: result.status,
        accessGranted: result.accessGranted,
        processingTimeMs
      });

      return result;

    } catch (error) {
      const processingTimeMs = Date.now() - startTime;
      
      logger.error('❌ PaymentEnrollmentIntegration: Payment processing failed', {
        error,
        enrollmentId: enrollmentData.enrollmentId,
        processingTimeMs
      });

      return {
        success: false,
        enrollmentId: enrollmentData.enrollmentId,
        paymentType: PaymentType.MANUAL,
        confidence: 0,
        status: EnrollmentStatus.PENDING,
        accessGranted: false,
        message: 'Payment processing failed',
        processingTimeMs,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Determine enrollment status based on payment type
   * Requirement 1.2: Card payments get immediate approval, EFT needs admin approval
   */
  determineEnrollmentStatus(paymentType: PaymentType, paymentSuccess: boolean): EnrollmentStatus {
    if (!paymentSuccess) {
      return EnrollmentStatus.PENDING;
    }

    switch (paymentType) {
      case PaymentType.CARD:
        // Card payments get immediate approval
        return EnrollmentStatus.APPROVED;
      
      case PaymentType.EFT:
        // EFT payments need admin approval
        return EnrollmentStatus.PENDING;
      
      default:
        // Unknown payment types need manual review
        return EnrollmentStatus.PENDING;
    }
  }

  /**
   * Check if enrollment should grant immediate course access
   * Requirement 1.1: Card payments provide immediate access
   */
  shouldGrantImmediateAccess(paymentType: PaymentType, paymentSuccess: boolean): boolean {
    return paymentType === PaymentType.CARD && paymentSuccess;
  }

  /**
   * Monitor payment status changes in real-time
   * Requirement 2.2: Real-time payment status monitoring
   */
  async monitorPaymentStatus(
    enrollmentId: string,
    callback: (status: PaymentStatus, enrollmentStatus: EnrollmentStatus) => void
  ): Promise<() => void> {
    try {
      logger.info('👀 PaymentEnrollmentIntegration: Starting payment status monitoring', {
        enrollmentId
      });

      // Subscribe to real-time payment updates
      const unsubscribe = realTimePaymentSync.subscribeToStatusUpdates((update) => {
        if (update.enrollment_id === enrollmentId && update.type === 'payment') {
          const paymentStatus = update.new_status as PaymentStatus;
          const enrollmentStatus = update.type === 'enrollment' ? 
            update.new_status as EnrollmentStatus : EnrollmentStatus.PENDING;
          
          logger.info('📡 PaymentEnrollmentIntegration: Payment status update received', {
            enrollmentId,
            paymentStatus,
            enrollmentStatus
          });

          callback(paymentStatus, enrollmentStatus);
        }
      });

      return unsubscribe;

    } catch (error) {
      logger.error('❌ PaymentEnrollmentIntegration: Failed to monitor payment status', {
        error,
        enrollmentId
      });
      
      // Return no-op unsubscribe function
      return () => {};
    }
  }

  /**
   * Get payment type classification for existing enrollment
   */
  async classifyEnrollmentPayment(enrollmentId: string): Promise<{
    paymentType: PaymentType;
    confidence: number;
    requiresApproval: boolean;
  }> {
    try {
      // Get enrollment data
      const enrollment = await unifiedEnrollmentManager.getUserEnrollmentForCourse('', '');
      
      if (!enrollment) {
        throw new Error(`Enrollment not found: ${enrollmentId}`);
      }

      // For existing enrollments, we can infer payment type from status and metadata
      let paymentType: PaymentType;
      let confidence: number;
      let requiresApproval: boolean;

      if (enrollment.status === 'approved') {
        // Likely a card payment if auto-approved
        paymentType = PaymentType.CARD;
        confidence = 0.8;
        requiresApproval = false;
      } else if (enrollment.status === 'pending') {
        // Likely an EFT payment if pending approval
        paymentType = PaymentType.EFT;
        confidence = 0.7;
        requiresApproval = true;
      } else {
        // Unknown status
        paymentType = PaymentType.MANUAL;
        confidence = 0.5;
        requiresApproval = true;
      }

      logger.info('🔍 PaymentEnrollmentIntegration: Classified enrollment payment', {
        enrollmentId,
        paymentType,
        confidence,
        requiresApproval
      });

      return { paymentType, confidence, requiresApproval };

    } catch (error) {
      logger.error('❌ PaymentEnrollmentIntegration: Failed to classify enrollment payment', {
        error,
        enrollmentId
      });

      // Safe fallback
      return {
        paymentType: PaymentType.MANUAL,
        confidence: 0,
        requiresApproval: true
      };
    }
  }

  /**
   * Sync real-time updates across all connected services
   */
  private async syncRealTimeUpdates(
    enrollmentData: EnrollmentPaymentData,
    paymentType: 'card' | 'eft' | 'unknown',
    paymentStatus: PaymentStatus,
    enrollmentStatus: EnrollmentStatus
  ): Promise<void> {
    try {
      // Sync payment status
      await realTimePaymentSync.syncPaymentStatus(
        enrollmentData.enrollmentId,
        paymentStatus
      );

      // Sync enrollment status
      await realTimePaymentSync.syncEnrollmentStatus(
        enrollmentData.enrollmentId,
        enrollmentStatus
      );

      // Broadcast user-specific update
      realTimePaymentSync.broadcastToUser(enrollmentData.userId, {
        userId: enrollmentData.userId,
        type: paymentStatus === PaymentStatus.COMPLETED ? 'payment_completed' : 'enrollment_status_changed',
        data: {
          enrollmentId: enrollmentData.enrollmentId,
          courseId: enrollmentData.courseId,
          paymentType,
          paymentStatus,
          enrollmentStatus,
          accessGranted: enrollmentStatus === EnrollmentStatus.APPROVED
        },
        timestamp: new Date()
      });

      // If EFT payment, notify admins
      if (paymentType === 'eft' && paymentStatus === PaymentStatus.COMPLETED) {
        realTimePaymentSync.broadcastToAdmins({
          type: 'new_eft_enrollment',
          enrollmentId: enrollmentData.enrollmentId,
          userEmail: enrollmentData.userEmail,
          courseName: enrollmentData.courseName,
          timestamp: new Date()
        });
      }

      logger.info('📡 PaymentEnrollmentIntegration: Real-time updates synced', {
        enrollmentId: enrollmentData.enrollmentId,
        paymentType,
        paymentStatus,
        enrollmentStatus
      });

    } catch (error) {
      logger.error('❌ PaymentEnrollmentIntegration: Failed to sync real-time updates', {
        error,
        enrollmentId: enrollmentData.enrollmentId
      });
      // Don't throw - sync failure shouldn't break the main flow
    }
  }

  /**
   * Get service health status
   */
  getHealthStatus(): {
    initialized: boolean;
    paymentDetectorAvailable: boolean;
    routerAvailable: boolean;
    realTimeSyncAvailable: boolean;
    enrollmentManagerAvailable: boolean;
  } {
    return {
      initialized: this.isInitialized,
      paymentDetectorAvailable: !!paymentTypeDetector,
      routerAvailable: !!paymentMethodRouter,
      realTimeSyncAvailable: !!realTimePaymentSync,
      enrollmentManagerAvailable: !!unifiedEnrollmentManager
    };
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    this.isInitialized = false;
    logger.info('🧹 PaymentEnrollmentIntegration: Service cleaned up');
  }
}

// Export singleton instance
export const paymentEnrollmentIntegration = PaymentEnrollmentIntegration.getInstance();