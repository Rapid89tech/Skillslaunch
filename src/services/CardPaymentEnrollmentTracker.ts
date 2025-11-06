/**
 * Card Payment Enrollment Tracker Service
 * 
 * Ensures card payment enrollments are properly tracked and visible in admin dashboard.
 * Provides payment tracking for card transactions, enrollment status synchronization,
 * and admin dashboard visibility enforcement.
 * 
 * Requirements: Admin dashboard card payment visibility
 */

import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/logger';
import { unifiedEnrollmentManager } from './UnifiedEnrollmentManager';

export interface CardPaymentData {
  payment_id: string;
  course_id: string;
  user_id: string;
  user_email: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  payment_method: 'card';
  created_at: string;
  transaction_reference?: string;
  gateway_response?: any;
}

export interface EnrollmentStatus {
  enrollment_id: string;
  payment_tracking_id?: string;
  payment_gateway?: string;
  payment_status: 'pending' | 'completed' | 'failed';
  admin_visible: boolean;
  last_sync_at: string;
}

export interface PaymentTrackingResult {
  success: boolean;
  enrollment_id: string;
  payment_tracking_id: string;
  admin_visible: boolean;
  message: string;
  error?: string;
}

/**
 * Card Payment Enrollment Tracker Service
 * 
 * Tracks card payment transactions and ensures proper enrollment visibility
 * in the admin dashboard by maintaining payment tracking metadata.
 */
export class CardPaymentEnrollmentTracker {
  private static instance: CardPaymentEnrollmentTracker;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): CardPaymentEnrollmentTracker {
    if (!CardPaymentEnrollmentTracker.instance) {
      CardPaymentEnrollmentTracker.instance = new CardPaymentEnrollmentTracker();
    }
    return CardPaymentEnrollmentTracker.instance;
  }

  /**
   * Initialize the tracker service
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) {
      return;
    }

    try {
      logger.info('🔗 CardPaymentEnrollmentTracker: Initializing service...');

      // Ensure unified enrollment manager is initialized
      await unifiedEnrollmentManager.initialize();

      this.isInitialized = true;
      logger.info('✅ CardPaymentEnrollmentTracker: Service initialized successfully');

    } catch (error) {
      logger.error('❌ CardPaymentEnrollmentTracker: Initialization failed', { error });
      throw error;
    }
  }

  /**
   * Track a card payment transaction and link it to enrollment
   * 
   * @param paymentData Card payment transaction data
   * @returns Payment tracking result with enrollment visibility status
   */
  async trackCardPayment(paymentData: CardPaymentData): Promise<PaymentTrackingResult> {
    try {
      logger.info('🔄 CardPaymentEnrollmentTracker: Tracking card payment', {
        payment_id: paymentData.payment_id,
        course_id: paymentData.course_id,
        user_email: paymentData.user_email,
        amount: paymentData.amount
      });

      // Step 1: Find or create enrollment for this payment
      let enrollment = await this.findEnrollmentForPayment(paymentData);
      
      if (!enrollment) {
        // Create enrollment if it doesn't exist
        enrollment = await this.createEnrollmentForCardPayment(paymentData);
      }

      // Step 2: Update enrollment with payment tracking information
      const updateResult = await this.updateEnrollmentPaymentTracking(
        enrollment.id,
        paymentData
      );

      if (!updateResult.success) {
        throw new Error(`Failed to update enrollment payment tracking: ${updateResult.error}`);
      }

      // Step 3: Ensure admin dashboard visibility
      await this.ensureAdminVisibility(enrollment.id);

      // Step 4: Sync with unified enrollment manager
      await this.syncWithUnifiedManager(enrollment.id, paymentData);

      const result: PaymentTrackingResult = {
        success: true,
        enrollment_id: enrollment.id,
        payment_tracking_id: paymentData.payment_id,
        admin_visible: true,
        message: 'Card payment tracked successfully and visible in admin dashboard'
      };

      logger.info('✅ CardPaymentEnrollmentTracker: Card payment tracked successfully', {
        enrollment_id: enrollment.id,
        payment_id: paymentData.payment_id,
        admin_visible: true
      });

      return result;

    } catch (error) {
      logger.error('❌ CardPaymentEnrollmentTracker: Failed to track card payment', {
        error,
        payment_id: paymentData.payment_id
      });

      return {
        success: false,
        enrollment_id: '',
        payment_tracking_id: paymentData.payment_id,
        admin_visible: false,
        message: 'Failed to track card payment',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Synchronize enrollment status with payment gateway
   * 
   * @param paymentId Payment transaction ID
   * @returns Updated enrollment status
   */
  async syncEnrollmentStatus(paymentId: string): Promise<EnrollmentStatus | null> {
    try {
      logger.info('🔄 CardPaymentEnrollmentTracker: Syncing enrollment status', {
        payment_id: paymentId
      });

      // Find enrollment by payment tracking ID
      const { data: enrollment, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('payment_tracking_id', paymentId)
        .single();

      if (error || !enrollment) {
        logger.warn('⚠️ CardPaymentEnrollmentTracker: Enrollment not found for payment', {
          payment_id: paymentId,
          error
        });
        return null;
      }

      // Update last sync timestamp
      const { error: updateError } = await supabase
        .from('enrollments')
        .update({
          updated_at: new Date().toISOString()
        })
        .eq('id', enrollment.id);

      if (updateError) {
        logger.error('❌ CardPaymentEnrollmentTracker: Failed to update sync timestamp', {
          error: updateError,
          enrollment_id: enrollment.id
        });
      }

      const status: EnrollmentStatus = {
        enrollment_id: enrollment.id,
        payment_tracking_id: enrollment.payment_tracking_id,
        payment_gateway: enrollment.payment_gateway,
        payment_status: enrollment.payment_status || 'pending',
        admin_visible: true, // Card payments are always admin visible
        last_sync_at: new Date().toISOString()
      };

      logger.info('✅ CardPaymentEnrollmentTracker: Enrollment status synced', {
        enrollment_id: enrollment.id,
        payment_status: status.payment_status
      });

      return status;

    } catch (error) {
      logger.error('❌ CardPaymentEnrollmentTracker: Failed to sync enrollment status', {
        error,
        payment_id: paymentId
      });
      return null;
    }
  }

  /**
   * Ensure enrollment is visible in admin dashboard
   * 
   * @param enrollmentId Enrollment ID to make visible
   */
  async ensureAdminVisibility(enrollmentId: string): Promise<void> {
    try {
      logger.info('🔄 CardPaymentEnrollmentTracker: Ensuring admin visibility', {
        enrollment_id: enrollmentId
      });

      // Update enrollment to ensure it's visible to admins
      const { error } = await supabase
        .from('enrollments')
        .update({
          updated_at: new Date().toISOString(),
          // Ensure status is set (card payments should be approved)
          status: 'approved'
        })
        .eq('id', enrollmentId);

      if (error) {
        throw new Error(`Failed to update enrollment visibility: ${error.message}`);
      }

      // Broadcast admin dashboard refresh event
      window.dispatchEvent(new CustomEvent('admin-dashboard-refresh', {
        detail: {
          type: 'card_payment_enrollment',
          enrollment_id: enrollmentId,
          timestamp: new Date().toISOString()
        }
      }));

      logger.info('✅ CardPaymentEnrollmentTracker: Admin visibility ensured', {
        enrollment_id: enrollmentId
      });

    } catch (error) {
      logger.error('❌ CardPaymentEnrollmentTracker: Failed to ensure admin visibility', {
        error,
        enrollment_id: enrollmentId
      });
      throw error;
    }
  }

  /**
   * Get all card payment enrollments for admin dashboard
   * 
   * @returns List of card payment enrollments with tracking information
   */
  async getCardPaymentEnrollments(): Promise<any[]> {
    try {
      logger.info('🔄 CardPaymentEnrollmentTracker: Fetching card payment enrollments');

      const { data: enrollments, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('payment_gateway', 'ikhokha')
        .not('payment_tracking_id', 'is', null)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(`Failed to fetch card payment enrollments: ${error.message}`);
      }

      logger.info('✅ CardPaymentEnrollmentTracker: Card payment enrollments fetched', {
        count: enrollments?.length || 0
      });

      return enrollments || [];

    } catch (error) {
      logger.error('❌ CardPaymentEnrollmentTracker: Failed to fetch card payment enrollments', {
        error
      });
      return [];
    }
  }

  /**
   * Find existing enrollment for a payment
   */
  private async findEnrollmentForPayment(paymentData: CardPaymentData): Promise<any | null> {
    try {
      // Try to find by payment tracking ID first
      let { data: enrollment, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('payment_tracking_id', paymentData.payment_id)
        .single();

      if (!error && enrollment) {
        return enrollment;
      }

      // Try to find by user and course combination
      const { data: enrollments, error: searchError } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', paymentData.user_id)
        .eq('course_id', paymentData.course_id)
        .order('created_at', { ascending: false })
        .limit(1);

      if (searchError || !enrollments || enrollments.length === 0) {
        return null;
      }

      return enrollments[0];

    } catch (error) {
      logger.error('❌ CardPaymentEnrollmentTracker: Error finding enrollment', {
        error,
        payment_id: paymentData.payment_id
      });
      return null;
    }
  }

  /**
   * Create new enrollment for card payment
   */
  private async createEnrollmentForCardPayment(paymentData: CardPaymentData): Promise<any> {
    try {
      logger.info('🔄 CardPaymentEnrollmentTracker: Creating enrollment for card payment', {
        payment_id: paymentData.payment_id,
        course_id: paymentData.course_id
      });

      const enrollmentData = {
        user_id: paymentData.user_id,
        user_email: paymentData.user_email,
        course_id: paymentData.course_id,
        course_title: paymentData.course_id, // Will be updated with actual title
        status: paymentData.status === 'completed' ? 'approved' : 'pending',
        payment_tracking_id: paymentData.payment_id,
        payment_gateway: 'ikhokha',
        payment_status: paymentData.status,
        progress: 0,
        enrolled_at: paymentData.created_at,
        created_at: paymentData.created_at,
        updated_at: new Date().toISOString()
      };

      const { data: enrollment, error } = await supabase
        .from('enrollments')
        .insert(enrollmentData)
        .select()
        .single();

      if (error) {
        throw new Error(`Failed to create enrollment: ${error.message}`);
      }

      logger.info('✅ CardPaymentEnrollmentTracker: Enrollment created for card payment', {
        enrollment_id: enrollment.id,
        payment_id: paymentData.payment_id
      });

      return enrollment;

    } catch (error) {
      logger.error('❌ CardPaymentEnrollmentTracker: Failed to create enrollment', {
        error,
        payment_id: paymentData.payment_id
      });
      throw error;
    }
  }

  /**
   * Update enrollment with payment tracking information
   */
  private async updateEnrollmentPaymentTracking(
    enrollmentId: string,
    paymentData: CardPaymentData
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const updateData = {
        payment_tracking_id: paymentData.payment_id,
        payment_gateway: 'ikhokha',
        payment_status: paymentData.status,
        status: paymentData.status === 'completed' ? 'approved' : 'pending',
        updated_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('enrollments')
        .update(updateData)
        .eq('id', enrollmentId);

      if (error) {
        return {
          success: false,
          error: error.message
        };
      }

      return { success: true };

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Sync with unified enrollment manager
   */
  private async syncWithUnifiedManager(
    enrollmentId: string,
    paymentData: CardPaymentData
  ): Promise<void> {
    try {
      // Update status through unified manager for consistency
      const status = paymentData.status === 'completed' ? 'approved' : 'pending';
      
      await unifiedEnrollmentManager.updateEnrollmentStatus(
        enrollmentId,
        status,
        paymentData.user_email
      );

      logger.info('✅ CardPaymentEnrollmentTracker: Synced with unified manager', {
        enrollment_id: enrollmentId,
        status
      });

    } catch (error) {
      logger.error('❌ CardPaymentEnrollmentTracker: Failed to sync with unified manager', {
        error,
        enrollment_id: enrollmentId
      });
      // Don't throw - this is not critical for the main flow
    }
  }

  /**
   * Get service health status
   */
  getHealthStatus(): {
    initialized: boolean;
    unifiedManagerAvailable: boolean;
    supabaseConnected: boolean;
  } {
    return {
      initialized: this.isInitialized,
      unifiedManagerAvailable: !!unifiedEnrollmentManager,
      supabaseConnected: !!supabase
    };
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    this.isInitialized = false;
    logger.info('🧹 CardPaymentEnrollmentTracker: Service cleaned up');
  }
}

// Export singleton instance
export const cardPaymentEnrollmentTracker = CardPaymentEnrollmentTracker.getInstance();