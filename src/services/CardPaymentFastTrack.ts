/**
 * Card Payment Fast-Track Approval Service
 * 
 * Provides immediate enrollment approval for successful card payments,
 * bypassing the admin approval queue and granting instant course access.
 * 
 * Requirements: 2.1, 2.2, 2.3, 2.4
 */

import {
  IkhokhaWebhook,
  PaymentData,
  PaymentResult,
  EnrollmentStatus,
  PaymentStatus,
  PaymentType,
  ProductionEnrollment,
  EnrollmentStatusUpdate
} from '../types/ikhokha';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/logger';
import { saveEnrollment, refreshEnrollmentStatus } from '@/utils/enrollmentPersistence';

export interface FastTrackResult {
  success: boolean;
  enrollmentApproved: boolean;
  accessGranted: boolean;
  processingTimeMs: number;
  error?: FastTrackError;
  auditTrail: AuditEntry[];
}

export interface ApprovalResult {
  approved: boolean;
  approvalTimestamp: Date;
  approvedBy: 'system_card_payment';
  enrollmentId: string;
  previousStatus: EnrollmentStatus;
  newStatus: EnrollmentStatus;
}

export interface AccessResult {
  accessGranted: boolean;
  grantedAt: Date;
  courseId: string;
  userId: string;
  accessLevel: 'full' | 'limited' | 'none';
  expiresAt?: Date;
}

export interface FastTrackError {
  code: string;
  message: string;
  details?: Record<string, any>;
  recoverable: boolean;
}

export interface AuditEntry {
  timestamp: Date;
  action: string;
  result: 'success' | 'failure' | 'warning';
  details: Record<string, any>;
  processingTimeMs?: number;
}

export interface EnrollmentData {
  id: string;
  user_id: string;
  user_email: string;
  course_id: string;
  course_title: string;
  status: EnrollmentStatus;
  payment_type: PaymentType;
  payment_status: PaymentStatus;
  payment_reference?: string;
  ikhokha_transaction_id?: string;
  created_at: Date;
  updated_at: Date;
  course_access_granted: boolean;
  access_granted_at?: Date;
}

/**
 * Card Payment Fast-Track Service
 * 
 * Handles immediate enrollment approval for successful card payments,
 * providing instant course access without admin intervention.
 */
export class CardPaymentFastTrack {
  private static instance: CardPaymentFastTrack;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): CardPaymentFastTrack {
    if (!CardPaymentFastTrack.instance) {
      CardPaymentFastTrack.instance = new CardPaymentFastTrack();
    }
    return CardPaymentFastTrack.instance;
  }

  /**
   * Initialize the fast-track service
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Validate database connection
      const { error } = await supabase.from('enrollments').select('id').limit(1);
      if (error) {
        const errorMessage = `Database connection failed: ${error.message}`;
        logger.error('❌ CardPaymentFastTrack: Initialization failed', { error });
        throw new Error(errorMessage);
      }

      this.isInitialized = true;
      logger.info('✅ CardPaymentFastTrack: Initialized successfully');
    } catch (error) {
      logger.error('❌ CardPaymentFastTrack: Initialization failed', { error });
      throw error;
    }
  }

  /**
   * Process card payment for immediate enrollment approval
   * Requirement 2.1: Create CardPaymentFastTrack service for immediate enrollment approval
   */
  async processCardPayment(
    webhookData: IkhokhaWebhook,
    enrollment: EnrollmentData
  ): Promise<FastTrackResult> {
    const startTime = Date.now();
    const auditTrail: AuditEntry[] = [];

    try {
      logger.info('🚀 CardPaymentFastTrack: Processing card payment', {
        enrollmentId: enrollment.id,
        transactionId: webhookData.transaction_id,
        amount: webhookData.amount
      });

      // Audit: Start processing
      auditTrail.push({
        timestamp: new Date(),
        action: 'fast_track_started',
        result: 'success',
        details: {
          enrollmentId: enrollment.id,
          transactionId: webhookData.transaction_id,
          paymentAmount: webhookData.amount,
          webhookStatus: webhookData.status
        }
      });

      // Step 1: Validate card payment success
      const validationResult = await this.validateCardPaymentSuccess(webhookData, enrollment);
      auditTrail.push({
        timestamp: new Date(),
        action: 'payment_validation',
        result: validationResult.valid ? 'success' : 'failure',
        details: validationResult
      });

      if (!validationResult.valid) {
        throw new FastTrackError(
          'Card payment validation failed',
          'PAYMENT_VALIDATION_FAILED',
          validationResult,
          false
        );
      }

      // Step 2: Approve enrollment immediately
      const approvalResult = await this.approveEnrollmentImmediately(
        enrollment.id,
        this.convertWebhookToPaymentData(webhookData)
      );
      auditTrail.push({
        timestamp: new Date(),
        action: 'enrollment_approval',
        result: approvalResult.approved ? 'success' : 'failure',
        details: approvalResult
      });

      if (!approvalResult.approved) {
        throw new FastTrackError(
          'Enrollment approval failed',
          'APPROVAL_FAILED',
          approvalResult,
          true
        );
      }

      // Step 3: Grant course access immediately
      const accessResult = await this.grantCourseAccessImmediately(
        enrollment.id,
        enrollment.user_id,
        enrollment.course_id
      );
      auditTrail.push({
        timestamp: new Date(),
        action: 'access_granted',
        result: accessResult.accessGranted ? 'success' : 'failure',
        details: accessResult
      });

      if (!accessResult.accessGranted) {
        logger.warn('⚠️ CardPaymentFastTrack: Access granting failed but enrollment approved', {
          enrollmentId: enrollment.id,
          accessResult
        });
      }

      // Step 4: Update real-time status
      await this.updateRealTimeStatus(enrollment, approvalResult, accessResult);
      auditTrail.push({
        timestamp: new Date(),
        action: 'realtime_update',
        result: 'success',
        details: {
          enrollmentId: enrollment.id,
          statusUpdated: true
        }
      });

      // Step 5: Log audit trail
      await this.logFastTrackApproval(enrollment.id, this.convertWebhookToPaymentData(webhookData), {
        success: true,
        enrollmentApproved: approvalResult.approved,
        accessGranted: accessResult.accessGranted,
        processingTimeMs: Date.now() - startTime,
        auditTrail
      });

      const result: FastTrackResult = {
        success: true,
        enrollmentApproved: approvalResult.approved,
        accessGranted: accessResult.accessGranted,
        processingTimeMs: Date.now() - startTime,
        auditTrail
      };

      logger.info('✅ CardPaymentFastTrack: Card payment processed successfully', {
        enrollmentId: enrollment.id,
        processingTime: result.processingTimeMs,
        approved: result.enrollmentApproved,
        accessGranted: result.accessGranted
      });

      return result;

    } catch (error) {
      const processingTime = Date.now() - startTime;
      
      // Add error to audit trail
      auditTrail.push({
        timestamp: new Date(),
        action: 'fast_track_error',
        result: 'failure',
        details: {
          error: error instanceof Error ? error.message : String(error),
          processingTimeMs: processingTime
        },
        processingTimeMs: processingTime
      });

      // Log the failure
      await this.logFastTrackApproval(enrollment.id, this.convertWebhookToPaymentData(webhookData), {
        success: false,
        enrollmentApproved: false,
        accessGranted: false,
        processingTimeMs: processingTime,
        error: error instanceof FastTrackError ? error : new FastTrackError(
          'Unexpected error during fast-track processing',
          'UNEXPECTED_ERROR',
          { originalError: error },
          true
        ),
        auditTrail
      });

      logger.error('❌ CardPaymentFastTrack: Processing failed', {
        error,
        enrollmentId: enrollment.id,
        processingTime
      });

      return {
        success: false,
        enrollmentApproved: false,
        accessGranted: false,
        processingTimeMs: processingTime,
        error: error instanceof FastTrackError ? error : new FastTrackError(
          'Unexpected error during fast-track processing',
          'UNEXPECTED_ERROR',
          { originalError: error },
          true
        ),
        auditTrail
      };
    }
  }

  /**
   * Approve enrollment immediately without admin intervention
   * Requirement 2.2: Implement automatic approval workflow that bypasses admin queue
   */
  async approveEnrollmentImmediately(
    enrollmentId: string,
    paymentData: PaymentData
  ): Promise<ApprovalResult> {
    try {
      logger.info('⚡ CardPaymentFastTrack: Approving enrollment immediately', {
        enrollmentId,
        paymentReference: paymentData.reference
      });

      // Get current enrollment status
      const { data: currentEnrollment, error: fetchError } = await supabase
        .from('enrollments')
        .select('*')
        .eq('id', enrollmentId)
        .single();

      if (fetchError) {
        throw new Error(`Failed to fetch enrollment: ${fetchError.message}`);
      }

      if (!currentEnrollment) {
        throw new Error(`Enrollment ${enrollmentId} not found`);
      }

      const previousStatus = currentEnrollment.status as EnrollmentStatus;
      const approvalTimestamp = new Date();

      // Update enrollment to approved status
      const { data: updatedEnrollment, error: updateError } = await supabase
        .from('enrollments')
        .update({
          status: EnrollmentStatus.APPROVED,
          payment_status: PaymentStatus.COMPLETED,
          approved_by: 'system_card_payment',
          approved_at: approvalTimestamp.toISOString(),
          updated_at: approvalTimestamp.toISOString(),
          ikhokha_transaction_id: paymentData.metadata?.transactionId,
          payment_reference: paymentData.reference
        })
        .eq('id', enrollmentId)
        .select()
        .single();

      if (updateError) {
        throw new Error(`Failed to update enrollment: ${updateError.message}`);
      }

      // Update local storage for immediate UI updates
      if (updatedEnrollment) {
        const enrollmentData = {
          id: updatedEnrollment.id,
          user_id: updatedEnrollment.user_id,
          user_email: updatedEnrollment.user_email,
          course_id: updatedEnrollment.course_id,
          course_title: updatedEnrollment.course_title,
          status: 'approved' as const,
          enrolled_at: updatedEnrollment.created_at,
          approved_at: approvalTimestamp.toISOString(),
          updated_at: approvalTimestamp.toISOString(),
          progress: 0
        };

        saveEnrollment(enrollmentData);
        
        // Set enrollment success flag for immediate UI feedback
        const successFlag = {
          status: 'approved',
          timestamp: approvalTimestamp.toISOString(),
          source: 'card_payment_fast_track'
        };
        localStorage.setItem(
          `enrollment-success-${updatedEnrollment.user_id}-${updatedEnrollment.course_id}`,
          JSON.stringify(successFlag)
        );
      }

      const result: ApprovalResult = {
        approved: true,
        approvalTimestamp,
        approvedBy: 'system_card_payment',
        enrollmentId,
        previousStatus,
        newStatus: EnrollmentStatus.APPROVED
      };

      logger.info('✅ CardPaymentFastTrack: Enrollment approved immediately', {
        enrollmentId,
        previousStatus,
        newStatus: EnrollmentStatus.APPROVED,
        approvedBy: 'system_card_payment'
      });

      return result;

    } catch (error) {
      logger.error('❌ CardPaymentFastTrack: Immediate approval failed', {
        error,
        enrollmentId
      });

      return {
        approved: false,
        approvalTimestamp: new Date(),
        approvedBy: 'system_card_payment',
        enrollmentId,
        previousStatus: EnrollmentStatus.PENDING,
        newStatus: EnrollmentStatus.PENDING
      };
    }
  }

  /**
   * Grant immediate course access for successful card payments
   * Requirement 2.3: Add immediate course access granting for successful card payments
   */
  async grantCourseAccessImmediately(
    enrollmentId: string,
    userId: string,
    courseId: string
  ): Promise<AccessResult> {
    try {
      logger.info('🔓 CardPaymentFastTrack: Granting course access immediately', {
        enrollmentId,
        userId,
        courseId
      });

      const grantedAt = new Date();

      // Update enrollment with access granted flag
      const { error: updateError } = await supabase
        .from('enrollments')
        .update({
          course_access_granted: true,
          access_granted_at: grantedAt.toISOString(),
          updated_at: grantedAt.toISOString()
        })
        .eq('id', enrollmentId);

      if (updateError) {
        logger.error('❌ CardPaymentFastTrack: Failed to update access in database', {
          error: updateError,
          enrollmentId
        });
        // Don't throw - we can still grant local access
      }

      // Update local storage for immediate access
      const accessKey = `course-access-${userId}-${courseId}`;
      const accessData = {
        granted: true,
        grantedAt: grantedAt.toISOString(),
        source: 'card_payment_fast_track',
        enrollmentId
      };
      localStorage.setItem(accessKey, JSON.stringify(accessData));

      // Trigger UI refresh for immediate feedback
      refreshEnrollmentStatus(courseId);

      const result: AccessResult = {
        accessGranted: true,
        grantedAt,
        courseId,
        userId,
        accessLevel: 'full'
      };

      logger.info('✅ CardPaymentFastTrack: Course access granted immediately', {
        enrollmentId,
        userId,
        courseId,
        accessLevel: 'full'
      });

      return result;

    } catch (error) {
      logger.error('❌ CardPaymentFastTrack: Access granting failed', {
        error,
        enrollmentId,
        userId,
        courseId
      });

      return {
        accessGranted: false,
        grantedAt: new Date(),
        courseId,
        userId,
        accessLevel: 'none'
      };
    }
  }

  /**
   * Log fast-track approval for audit purposes
   * Requirement 2.4: Create audit logging for all fast-track approvals
   */
  async logFastTrackApproval(
    enrollmentId: string,
    paymentData: PaymentData,
    result: FastTrackResult
  ): Promise<void> {
    try {
      const logEntry = {
        enrollment_id: enrollmentId,
        transaction_id: paymentData.metadata?.transactionId,
        payment_reference: paymentData.reference,
        payment_amount: paymentData.amount,
        payment_currency: paymentData.currency,
        
        // Fast-track results
        fast_track_success: result.success,
        enrollment_approved: result.enrollmentApproved,
        access_granted: result.accessGranted,
        processing_time_ms: result.processingTimeMs,
        
        // Error details if any
        error_code: result.error?.code,
        error_message: result.error?.message,
        error_recoverable: result.error?.recoverable,
        
        // Audit trail
        audit_trail: JSON.stringify(result.auditTrail),
        
        // Metadata
        approved_by: 'system_card_payment',
        approval_type: 'card_payment_fast_track',
        created_at: new Date().toISOString()
      };

      // Log to fast_track_approvals table
      const { error: logError } = await supabase
        .from('fast_track_approvals')
        .insert(logEntry);

      if (logError) {
        logger.error('❌ CardPaymentFastTrack: Failed to log audit entry', {
          error: logError,
          enrollmentId
        });
        
        // Fallback: Log to console for debugging
        logger.info('📋 CardPaymentFastTrack: Audit log (fallback)', logEntry);
      } else {
        logger.info('📋 CardPaymentFastTrack: Audit logged successfully', {
          enrollmentId,
          success: result.success,
          processingTime: result.processingTimeMs
        });
      }

    } catch (error) {
      logger.error('❌ CardPaymentFastTrack: Audit logging failed', {
        error,
        enrollmentId
      });
      
      // Fallback: Log to console
      logger.info('📋 CardPaymentFastTrack: Audit log (error fallback)', {
        enrollmentId,
        paymentData,
        result,
        error
      });
    }
  }

  /**
   * Validate card payment success before processing
   */
  private async validateCardPaymentSuccess(
    webhookData: IkhokhaWebhook,
    enrollment: EnrollmentData
  ): Promise<{ valid: boolean; errors: string[]; warnings: string[] }> {
    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      // Check webhook status
      if (webhookData.status !== 'completed') {
        errors.push(`Payment status is ${webhookData.status}, expected 'completed'`);
      }

      // Check amount matches enrollment (convert payment_reference to number if needed)
      const enrollmentAmount = typeof enrollment.payment_reference === 'string' 
        ? parseFloat(enrollment.payment_reference) 
        : enrollment.payment_reference;
      
      if (enrollmentAmount && webhookData.amount !== enrollmentAmount) {
        warnings.push(`Payment amount ${webhookData.amount} may not match expected amount ${enrollmentAmount}`);
      }

      // Check enrollment is in valid state for approval
      if (enrollment.status === EnrollmentStatus.APPROVED) {
        warnings.push('Enrollment is already approved');
        // Don't treat this as an error - we can still process it
      } else if (enrollment.status === EnrollmentStatus.REJECTED) {
        errors.push('Cannot approve rejected enrollment');
      }

      // Check payment reference matches (only if it's a string reference)
      if (enrollment.payment_reference && 
          typeof enrollment.payment_reference === 'string' &&
          enrollment.payment_reference !== webhookData.reference) {
        errors.push('Payment reference mismatch');
      }

      return {
        valid: errors.length === 0,
        errors,
        warnings
      };

    } catch (error) {
      logger.error('❌ CardPaymentFastTrack: Validation error', { error });
      return {
        valid: false,
        errors: ['Validation process failed'],
        warnings
      };
    }
  }

  /**
   * Convert webhook data to payment data format
   */
  private convertWebhookToPaymentData(webhookData: IkhokhaWebhook): PaymentData {
    return {
      sessionId: webhookData.transaction_id,
      amount: webhookData.amount,
      currency: webhookData.currency,
      reference: webhookData.reference,
      customer: {
        email: '', // Will be filled from enrollment data
        name: ''   // Will be filled from enrollment data
      },
      metadata: {
        transactionId: webhookData.transaction_id,
        responseCode: webhookData.response_code,
        authCode: webhookData.auth_code,
        cardType: webhookData.card_type,
        maskedCardNumber: webhookData.masked_card_number
      }
    };
  }

  /**
   * Update real-time status across all user sessions
   */
  private async updateRealTimeStatus(
    enrollment: EnrollmentData,
    approvalResult: ApprovalResult,
    accessResult: AccessResult
  ): Promise<void> {
    try {
      // Create status update event
      const statusUpdate: EnrollmentStatusUpdate = {
        enrollmentId: enrollment.id,
        userId: enrollment.user_id,
        courseId: enrollment.course_id,
        status: EnrollmentStatus.APPROVED,
        eventType: 'payment_completed',
        timestamp: new Date(),
        metadata: {
          approvedBy: 'system_card_payment',
          accessGranted: accessResult.accessGranted,
          fastTrackProcessed: true
        }
      };

      // Broadcast to all user sessions
      const broadcastEvent = new CustomEvent('enrollment-status-update', {
        detail: statusUpdate
      });
      
      if (typeof window !== 'undefined') {
        window.dispatchEvent(broadcastEvent);
      }

      // Update localStorage for cross-tab sync
      const updateKey = `enrollment-update-${enrollment.user_id}-${enrollment.course_id}`;
      localStorage.setItem(updateKey, JSON.stringify({
        ...statusUpdate,
        timestamp: statusUpdate.timestamp.toISOString()
      }));

      // Trigger enrollment status refresh
      refreshEnrollmentStatus(enrollment.course_id);

      logger.info('📡 CardPaymentFastTrack: Real-time status updated', {
        enrollmentId: enrollment.id,
        status: EnrollmentStatus.APPROVED,
        accessGranted: accessResult.accessGranted
      });

    } catch (error) {
      logger.error('❌ CardPaymentFastTrack: Real-time update failed', {
        error,
        enrollmentId: enrollment.id
      });
      // Don't throw - this is not critical for the approval process
    }
  }

  /**
   * Get processing statistics
   */
  getProcessingStats(): {
    totalProcessed: number;
    successRate: number;
    averageProcessingTime: number;
    lastProcessedAt?: Date;
  } {
    // This would be implemented with proper metrics collection
    return {
      totalProcessed: 0,
      successRate: 0,
      averageProcessingTime: 0
    };
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    this.isInitialized = false;
  }
}

// Custom error class for fast-track processing
class FastTrackError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: Record<string, any>,
    public recoverable: boolean = false
  ) {
    super(message);
    this.name = 'FastTrackError';
  }
}

// Export singleton instance
export const cardPaymentFastTrack = CardPaymentFastTrack.getInstance();