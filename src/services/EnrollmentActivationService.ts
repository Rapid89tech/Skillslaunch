/**
 * Enrollment Activation Service
 * 
 * Handles automatic enrollment activation after successful payment processing
 * Integrates with webhook processing to provide seamless course access
 */

import { supabase } from '../integrations/supabase/client';
import { IkhokhaWebhook, PaymentStatus, IkhokhaError } from '../types/ikhokha';

export interface EnrollmentActivationResult {
  success: boolean;
  enrollmentId?: string;
  activatedAt?: Date;
  courseAccess: boolean;
  notificationSent: boolean;
  error?: string;
  details?: Record<string, any>;
}

export interface EnrollmentActivationConfig {
  autoActivateOnPayment: boolean;
  requireManualApproval: boolean;
  sendNotifications: boolean;
  grantImmediateAccess: boolean;
}

export interface CourseAccessGrant {
  enrollmentId: string;
  courseId: string;
  userId: string;
  accessLevel: 'full' | 'limited' | 'preview';
  expiresAt?: Date;
  features: string[];
}

/**
 * Enrollment Activation Service
 */
export class EnrollmentActivationService {
  private config: EnrollmentActivationConfig;

  constructor(config?: Partial<EnrollmentActivationConfig>) {
    this.config = {
      autoActivateOnPayment: true,
      requireManualApproval: false,
      sendNotifications: true,
      grantImmediateAccess: true,
      ...config
    };

    console.log('🎓 Enrollment Activation Service initialized:', this.config);
  }

  /**
   * Activate enrollment after successful payment
   */
  async activateEnrollmentFromWebhook(
    webhookData: IkhokhaWebhook
  ): Promise<EnrollmentActivationResult> {
    try {
      console.log('🔄 Processing enrollment activation from webhook:', {
        transaction_id: webhookData.transaction_id,
        reference: webhookData.reference,
        status: webhookData.status,
        amount: webhookData.amount
      });

      // Only activate for successful payments
      if (webhookData.status !== 'completed') {
        return {
          success: false,
          courseAccess: false,
          notificationSent: false,
          error: `Payment not completed (status: ${webhookData.status})`
        };
      }

      // Find enrollment by payment reference
      const enrollment = await this.findEnrollmentByReference(webhookData.reference);
      
      if (!enrollment) {
        return {
          success: false,
          courseAccess: false,
          notificationSent: false,
          error: 'Enrollment not found for payment reference'
        };
      }

      // Check if enrollment is already activated
      if (enrollment.status === 'approved') {
        console.log('ℹ️ Enrollment already activated:', enrollment.id);
        return {
          success: true,
          enrollmentId: enrollment.id,
          courseAccess: true,
          notificationSent: false,
          details: { alreadyActivated: true }
        };
      }

      // Activate the enrollment
      const activationResult = await this.activateEnrollment(enrollment, webhookData);

      // Grant course access
      if (activationResult.success && this.config.grantImmediateAccess) {
        await this.grantCourseAccess(enrollment);
      }

      // Send notification
      let notificationSent = false;
      if (activationResult.success && this.config.sendNotifications) {
        notificationSent = await this.sendActivationNotification(enrollment, webhookData);
      }

      return {
        ...activationResult,
        notificationSent
      };

    } catch (error) {
      console.error('❌ Enrollment activation failed:', error);
      
      return {
        success: false,
        courseAccess: false,
        notificationSent: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Manually activate enrollment (for admin use)
   */
  async manuallyActivateEnrollment(
    enrollmentId: string,
    adminUserId: string,
    reason?: string
  ): Promise<EnrollmentActivationResult> {
    try {
      console.log('👤 Manual enrollment activation:', {
        enrollmentId,
        adminUserId,
        reason
      });

      // Get enrollment details
      const { data: enrollment, error: fetchError } = await supabase
        .from('enrollments')
        .select(`
          *,
          users (id, email, name),
          courses (id, title, description)
        `)
        .eq('id', enrollmentId)
        .single();

      if (fetchError || !enrollment) {
        throw new IkhokhaError('Enrollment not found', 'ENROLLMENT_NOT_FOUND');
      }

      // Update enrollment status
      const { error: updateError } = await supabase
        .from('enrollments')
        .update({
          status: 'approved',
          approved_by: adminUserId,
          approved_at: new Date().toISOString(),
          approval_reason: reason || 'Manual activation by admin',
          updated_at: new Date().toISOString()
        })
        .eq('id', enrollmentId);

      if (updateError) {
        throw new IkhokhaError('Failed to update enrollment', 'UPDATE_ERROR');
      }

      // Grant course access
      if (this.config.grantImmediateAccess) {
        await this.grantCourseAccess(enrollment);
      }

      // Send notification
      let notificationSent = false;
      if (this.config.sendNotifications) {
        notificationSent = await this.sendActivationNotification(enrollment);
      }

      console.log('✅ Manual enrollment activation completed:', enrollmentId);

      return {
        success: true,
        enrollmentId,
        activatedAt: new Date(),
        courseAccess: this.config.grantImmediateAccess,
        notificationSent,
        details: {
          activationType: 'manual',
          adminUserId,
          reason
        }
      };

    } catch (error) {
      console.error('❌ Manual enrollment activation failed:', error);
      
      return {
        success: false,
        courseAccess: false,
        notificationSent: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Check enrollment activation status
   */
  async getEnrollmentActivationStatus(enrollmentId: string): Promise<{
    isActivated: boolean;
    activatedAt?: Date;
    activatedBy?: string;
    courseAccess: boolean;
    accessLevel?: string;
    details: Record<string, any>;
  }> {
    try {
      const { data: enrollment, error } = await supabase
        .from('enrollments')
        .select(`
          *,
          users (id, email, name),
          courses (id, title)
        `)
        .eq('id', enrollmentId)
        .single();

      if (error || !enrollment) {
        throw new IkhokhaError('Enrollment not found', 'ENROLLMENT_NOT_FOUND');
      }

      const isActivated = enrollment.status === 'approved';
      const courseAccess = isActivated && enrollment.payment_status === 'completed';

      return {
        isActivated,
        activatedAt: enrollment.approved_at ? new Date(enrollment.approved_at) : undefined,
        activatedBy: enrollment.approved_by,
        courseAccess,
        accessLevel: courseAccess ? 'full' : 'none',
        details: {
          enrollmentStatus: enrollment.status,
          paymentStatus: enrollment.payment_status,
          courseTitle: enrollment.courses?.title,
          userEmail: enrollment.users?.email
        }
      };

    } catch (error) {
      console.error('❌ Failed to get enrollment activation status:', error);
      throw error;
    }
  }

  /**
   * Bulk activate enrollments (for admin operations)
   */
  async bulkActivateEnrollments(
    enrollmentIds: string[],
    adminUserId: string,
    reason?: string
  ): Promise<{
    successful: string[];
    failed: Array<{ enrollmentId: string; error: string }>;
    totalProcessed: number;
  }> {
    const successful: string[] = [];
    const failed: Array<{ enrollmentId: string; error: string }> = [];

    console.log(`🔄 Bulk activating ${enrollmentIds.length} enrollments`);

    for (const enrollmentId of enrollmentIds) {
      try {
        const result = await this.manuallyActivateEnrollment(enrollmentId, adminUserId, reason);
        
        if (result.success) {
          successful.push(enrollmentId);
        } else {
          failed.push({
            enrollmentId,
            error: result.error || 'Unknown error'
          });
        }
      } catch (error) {
        failed.push({
          enrollmentId,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }

    console.log(`✅ Bulk activation completed: ${successful.length} successful, ${failed.length} failed`);

    return {
      successful,
      failed,
      totalProcessed: enrollmentIds.length
    };
  }

  // Private Methods

  /**
   * Find enrollment by payment reference
   */
  private async findEnrollmentByReference(reference: string): Promise<any> {
    const { data: enrollment, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        users (id, email, name),
        courses (id, title, description)
      `)
      .eq('payment_reference', reference)
      .single();

    if (error) {
      console.error('❌ Failed to find enrollment by reference:', error);
      return null;
    }

    return enrollment;
  }

  /**
   * Activate enrollment in database
   */
  private async activateEnrollment(
    enrollment: any,
    webhookData: IkhokhaWebhook
  ): Promise<EnrollmentActivationResult> {
    try {
      const activatedAt = new Date();

      // Update enrollment status
      const { error: updateError } = await supabase
        .from('enrollments')
        .update({
          status: 'approved',
          payment_status: 'completed',
          approved_at: activatedAt.toISOString(),
          approved_by: 'system_webhook',
          approval_reason: 'Automatic activation after successful payment',
          ikhokha_transaction_id: webhookData.transaction_id,
          payment_completed_at: activatedAt.toISOString(),
          updated_at: activatedAt.toISOString()
        })
        .eq('id', enrollment.id);

      if (updateError) {
        throw new IkhokhaError('Failed to update enrollment status', 'UPDATE_ERROR');
      }

      console.log('✅ Enrollment activated successfully:', {
        enrollmentId: enrollment.id,
        userId: enrollment.user_id,
        courseId: enrollment.course_id,
        transactionId: webhookData.transaction_id
      });

      return {
        success: true,
        enrollmentId: enrollment.id,
        activatedAt,
        courseAccess: true,
        notificationSent: false
      };

    } catch (error) {
      console.error('❌ Failed to activate enrollment:', error);
      
      return {
        success: false,
        courseAccess: false,
        notificationSent: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Grant course access to user
   */
  private async grantCourseAccess(enrollment: any): Promise<CourseAccessGrant> {
    try {
      // Create or update course access record
      const accessGrant: CourseAccessGrant = {
        enrollmentId: enrollment.id,
        courseId: enrollment.course_id,
        userId: enrollment.user_id,
        accessLevel: 'full',
        features: ['videos', 'materials', 'assessments', 'certificate']
      };

      // Insert course access record (if you have such a table)
      // This is optional and depends on your database schema
      const { error: accessError } = await supabase
        .from('course_access')
        .upsert({
          enrollment_id: enrollment.id,
          user_id: enrollment.user_id,
          course_id: enrollment.course_id,
          access_level: accessGrant.accessLevel,
          granted_at: new Date().toISOString(),
          features: accessGrant.features
        }, {
          onConflict: 'enrollment_id'
        });

      if (accessError) {
        console.warn('⚠️ Failed to create course access record:', accessError);
        // Don't throw error as this might be optional
      }

      console.log('🎓 Course access granted:', accessGrant);
      
      return accessGrant;

    } catch (error) {
      console.error('❌ Failed to grant course access:', error);
      throw error;
    }
  }

  /**
   * Send activation notification to user
   */
  private async sendActivationNotification(
    enrollment: any,
    webhookData?: IkhokhaWebhook
  ): Promise<boolean> {
    try {
      const notificationData = {
        user_id: enrollment.user_id,
        type: 'enrollment_activated',
        title: 'Course Access Granted!',
        message: `Congratulations! Your enrollment for "${enrollment.courses?.title}" has been approved. You now have full access to the course content.`,
        data: {
          enrollment_id: enrollment.id,
          course_id: enrollment.course_id,
          course_title: enrollment.courses?.title,
          transaction_id: webhookData?.transaction_id,
          activated_at: new Date().toISOString()
        },
        created_at: new Date().toISOString()
      };

      const { error: notificationError } = await supabase
        .from('notifications')
        .insert(notificationData);

      if (notificationError) {
        console.error('❌ Failed to send activation notification:', notificationError);
        return false;
      }

      console.log('📧 Activation notification sent successfully:', {
        userId: enrollment.user_id,
        enrollmentId: enrollment.id
      });

      return true;

    } catch (error) {
      console.error('❌ Notification sending error:', error);
      return false;
    }
  }
}

// Export singleton instance
export const enrollmentActivationService = new EnrollmentActivationService();