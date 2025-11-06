/**
 * Payment Verification Service
 * 
 * Handles comprehensive payment verification for production environments
 */

import { supabase } from '../integrations/supabase/client';
import { ikhokhaPaymentService } from './ikhokhaPaymentService';
import { 
  PaymentVerification, 
  PaymentStatus, 
  IkhokhaError,
  PaymentValidationError 
} from '../types/ikhokha';
import { handlePaymentError, formatPaymentErrorForLogging } from '../utils/paymentErrorHandler';

export interface PaymentVerificationResult {
  verified: boolean;
  payment: PaymentVerification | null;
  enrollmentUpdated: boolean;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export interface EnrollmentPaymentData {
  enrollment_id: string;
  user_id: string;
  course_id: string;
  payment_reference: string;
  ikhokha_transaction_id?: string;
  payment_status: string;
  amount: number;
}

/**
 * Payment Verification Service Class
 */
export class PaymentVerificationService {
  private static instance: PaymentVerificationService;

  private constructor() {}

  static getInstance(): PaymentVerificationService {
    if (!PaymentVerificationService.instance) {
      PaymentVerificationService.instance = new PaymentVerificationService();
    }
    return PaymentVerificationService.instance;
  }

  /**
   * Verify payment and update enrollment status
   */
  async verifyPaymentAndUpdateEnrollment(
    paymentId: string,
    enrollmentId?: string
  ): Promise<PaymentVerificationResult> {
    try {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
      const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';

      if (shouldLog) {
        console.log('🔍 Starting payment verification:', {
          paymentId,
          enrollmentId,
          environment: isProduction ? 'PRODUCTION' : 'DEVELOPMENT'
        });
      }

      // Step 1: Verify payment with Ikhokha
      const paymentVerification = await this.verifyWithIkhokha(paymentId);

      if (!paymentVerification.valid) {
        if (shouldLog) {
          console.warn('⚠️ Payment verification failed:', {
            paymentId,
            status: paymentVerification.status
          });
        }

        return {
          verified: false,
          payment: paymentVerification,
          enrollmentUpdated: false,
          error: {
            code: 'PAYMENT_VERIFICATION_FAILED',
            message: 'Payment could not be verified with Ikhokha'
          }
        };
      }

      // Step 2: Find enrollment by payment ID or enrollment ID
      const enrollmentData = await this.findEnrollmentData(paymentId, enrollmentId);

      if (!enrollmentData) {
        if (shouldLog) {
          console.warn('⚠️ No enrollment found for payment:', paymentId);
        }

        return {
          verified: true,
          payment: paymentVerification,
          enrollmentUpdated: false,
          error: {
            code: 'ENROLLMENT_NOT_FOUND',
            message: 'No enrollment found for this payment'
          }
        };
      }

      // Step 3: Update enrollment status based on payment verification
      const enrollmentUpdated = await this.updateEnrollmentStatus(
        enrollmentData,
        paymentVerification
      );

      if (shouldLog) {
        console.log('✅ Payment verification completed:', {
          paymentId,
          enrollmentId: enrollmentData.enrollment_id,
          verified: paymentVerification.valid,
          status: paymentVerification.status,
          enrollmentUpdated
        });
      }

      return {
        verified: paymentVerification.valid,
        payment: paymentVerification,
        enrollmentUpdated,
      };

    } catch (error) {
      const errorHandling = handlePaymentError(error);
      const errorLog = formatPaymentErrorForLogging(error, { paymentId, enrollmentId });

      console.error('❌ Payment verification error:', errorLog);

      return {
        verified: false,
        payment: null,
        enrollmentUpdated: false,
        error: {
          code: errorLog.code || 'VERIFICATION_ERROR',
          message: errorHandling.userMessage,
          details: errorLog.details
        }
      };
    }
  }

  /**
   * Verify payment with Ikhokha API
   */
  private async verifyWithIkhokha(paymentId: string): Promise<PaymentVerification> {
    try {
      return await ikhokhaPaymentService.verifyPayment(paymentId);
    } catch (error) {
      // If verification fails, create a failed verification result
      return {
        valid: false,
        payment_id: paymentId,
        status: PaymentStatus.FAILED,
        amount: 0,
        currency: 'ZAR',
        reference: '',
        transaction_date: new Date(),
        verification_date: new Date(),
        ikhokha_data: {
          error: error instanceof Error ? error.message : String(error)
        }
      };
    }
  }

  /**
   * Find enrollment data by payment ID or enrollment ID
   */
  private async findEnrollmentData(
    paymentId: string,
    enrollmentId?: string
  ): Promise<EnrollmentPaymentData | null> {
    try {
      let query = supabase
        .from('enrollments')
        .select(`
          id,
          user_id,
          course_id,
          payment_reference,
          ikhokha_transaction_id,
          payment_status,
          amount
        `);

      // Search by enrollment ID first if provided
      if (enrollmentId) {
        query = query.eq('id', enrollmentId);
      } else {
        // Search by payment reference or transaction ID
        query = query.or(`payment_reference.eq.${paymentId},ikhokha_transaction_id.eq.${paymentId}`);
      }

      const { data, error } = await query.single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows found
          return null;
        }
        throw error;
      }

      return {
        enrollment_id: data.id,
        user_id: data.user_id,
        course_id: data.course_id,
        payment_reference: data.payment_reference,
        ikhokha_transaction_id: data.ikhokha_transaction_id,
        payment_status: data.payment_status,
        amount: data.amount
      };

    } catch (error) {
      console.error('❌ Error finding enrollment data:', error);
      return null;
    }
  }

  /**
   * Update enrollment status based on payment verification
   */
  private async updateEnrollmentStatus(
    enrollmentData: EnrollmentPaymentData,
    paymentVerification: PaymentVerification
  ): Promise<boolean> {
    try {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
      const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';

      // Determine new enrollment status based on payment status
      const newStatus = this.mapPaymentStatusToEnrollmentStatus(paymentVerification.status);
      const isActive = paymentVerification.status === PaymentStatus.COMPLETED;

      // Prepare update data
      const updateData: any = {
        payment_status: paymentVerification.status,
        ikhokha_transaction_id: paymentVerification.payment_id,
        payment_verified_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      // Update enrollment status if payment is successful
      if (isActive) {
        updateData.status = 'active';
        updateData.enrolled_at = updateData.enrolled_at || new Date().toISOString();
      } else if (paymentVerification.status === PaymentStatus.FAILED) {
        updateData.status = 'payment_failed';
      }

      // Verify amount matches (important for security)
      if (paymentVerification.amount !== enrollmentData.amount) {
        if (shouldLog) {
          console.warn('⚠️ Payment amount mismatch:', {
            expected: enrollmentData.amount,
            verified: paymentVerification.amount,
            enrollmentId: enrollmentData.enrollment_id
          });
        }

        // In production, this is a serious issue
        if (isProduction) {
          throw new PaymentValidationError(
            `Payment amount mismatch: expected ${enrollmentData.amount}, got ${paymentVerification.amount}`
          );
        }
      }

      // Update enrollment in database
      const { error } = await supabase
        .from('enrollments')
        .update(updateData)
        .eq('id', enrollmentData.enrollment_id);

      if (error) {
        throw error;
      }

      if (shouldLog) {
        console.log('✅ Enrollment status updated:', {
          enrollmentId: enrollmentData.enrollment_id,
          newStatus: updateData.status,
          paymentStatus: paymentVerification.status,
          isActive
        });
      }

      // If enrollment is now active, trigger any post-enrollment actions
      if (isActive) {
        await this.triggerPostEnrollmentActions(enrollmentData, paymentVerification);
      }

      return true;

    } catch (error) {
      console.error('❌ Error updating enrollment status:', error);
      return false;
    }
  }

  /**
   * Map payment status to enrollment status
   */
  private mapPaymentStatusToEnrollmentStatus(paymentStatus: PaymentStatus): string {
    switch (paymentStatus) {
      case PaymentStatus.COMPLETED:
        return 'active';
      case PaymentStatus.PENDING:
      case PaymentStatus.PROCESSING:
        return 'pending_payment';
      case PaymentStatus.FAILED:
        return 'payment_failed';
      case PaymentStatus.CANCELLED:
        return 'cancelled';
      case PaymentStatus.REFUNDED:
        return 'refunded';
      default:
        return 'pending_payment';
    }
  }

  /**
   * Trigger post-enrollment actions (notifications, etc.)
   */
  private async triggerPostEnrollmentActions(
    enrollmentData: EnrollmentPaymentData,
    paymentVerification: PaymentVerification
  ): Promise<void> {
    try {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
      const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';

      if (shouldLog) {
        console.log('🎉 Triggering post-enrollment actions:', {
          enrollmentId: enrollmentData.enrollment_id,
          userId: enrollmentData.user_id,
          courseId: enrollmentData.course_id
        });
      }

      // Broadcast enrollment activation
      await supabase.channel('enrollment_updates').send({
        type: 'broadcast',
        event: 'enrollment_activated',
        payload: {
          enrollment_id: enrollmentData.enrollment_id,
          user_id: enrollmentData.user_id,
          course_id: enrollmentData.course_id,
          payment_id: paymentVerification.payment_id,
          transaction_id: paymentVerification.payment_id,
          amount: paymentVerification.amount,
          timestamp: new Date().toISOString()
        }
      });

      // Additional actions could include:
      // - Send welcome email
      // - Create user progress record
      // - Update user statistics
      // - Trigger analytics events

    } catch (error) {
      // Don't fail the main process for post-enrollment actions
      console.warn('⚠️ Post-enrollment actions failed:', error);
    }
  }

  /**
   * Batch verify multiple payments
   */
  async batchVerifyPayments(paymentIds: string[]): Promise<PaymentVerificationResult[]> {
    const results: PaymentVerificationResult[] = [];

    for (const paymentId of paymentIds) {
      try {
        const result = await this.verifyPaymentAndUpdateEnrollment(paymentId);
        results.push(result);
      } catch (error) {
        results.push({
          verified: false,
          payment: null,
          enrollmentUpdated: false,
          error: {
            code: 'BATCH_VERIFICATION_ERROR',
            message: `Failed to verify payment ${paymentId}`,
            details: error instanceof Error ? error.message : error
          }
        });
      }
    }

    return results;
  }

  /**
   * Get payment verification status
   */
  async getPaymentVerificationStatus(paymentId: string): Promise<{
    exists: boolean;
    verified: boolean;
    status?: PaymentStatus;
    lastVerified?: Date;
  }> {
    try {
      // Check if payment exists in our database
      const { data, error } = await supabase
        .from('enrollments')
        .select('payment_status, payment_verified_at, ikhokha_transaction_id')
        .or(`payment_reference.eq.${paymentId},ikhokha_transaction_id.eq.${paymentId}`)
        .single();

      if (error || !data) {
        return { exists: false, verified: false };
      }

      return {
        exists: true,
        verified: data.payment_verified_at !== null,
        status: data.payment_status as PaymentStatus,
        lastVerified: data.payment_verified_at ? new Date(data.payment_verified_at) : undefined
      };

    } catch (error) {
      console.error('❌ Error checking payment verification status:', error);
      return { exists: false, verified: false };
    }
  }
}

// Export singleton instance
export const paymentVerificationService = PaymentVerificationService.getInstance();