/**
 * Payment Method Router Service
 * 
 * Handles detection and routing of different payment methods (card vs EFT)
 * and implements automatic approval logic for successful card payments.
 */

import { 
  PaymentType, 
  PaymentStatus, 
  EnrollmentStatus,
  ProductionEnrollment,
  PaymentResult,
  IkhokhaWebhook,
  PaymentData
} from '../types/ikhokha';
import { supabase } from '@/integrations/supabase/client';
import { logger } from '@/utils/logger';

export interface PaymentMethodDetectionResult {
  paymentType: PaymentType;
  requiresApproval: boolean;
  autoApprove: boolean;
  routingDecision: 'immediate_approval' | 'admin_approval' | 'manual_review';
}

export interface PaymentRoutingContext {
  paymentMethod?: string;
  paymentData?: PaymentData;
  webhookData?: IkhokhaWebhook;
  transactionData?: any;
  userAgent?: string;
  metadata?: Record<string, any>;
}

export interface EnrollmentApprovalResult {
  success: boolean;
  enrollmentId: string;
  approved: boolean;
  accessGranted: boolean;
  message: string;
  error?: string;
}

/**
 * Payment Method Router Service
 * 
 * Core service for detecting payment methods and routing them through
 * appropriate approval workflows based on payment type.
 */
export class PaymentMethodRouter {
  private static instance: PaymentMethodRouter;

  static getInstance(): PaymentMethodRouter {
    if (!PaymentMethodRouter.instance) {
      PaymentMethodRouter.instance = new PaymentMethodRouter();
    }
    return PaymentMethodRouter.instance;
  }

  /**
   * Detect payment method type from various sources
   */  async
 detectPaymentMethod(context: PaymentRoutingContext): Promise<PaymentMethodDetectionResult> {
    try {
      logger.info('🔍 PaymentMethodRouter: Detecting payment method', { context });

      let paymentType: PaymentType;
      let requiresApproval = false;
      let autoApprove = false;
      let routingDecision: 'immediate_approval' | 'admin_approval' | 'manual_review';

      // Method 1: Direct payment method specification
      if (context.paymentMethod) {
        paymentType = this.mapPaymentMethodToType(context.paymentMethod);
      }
      // Method 2: Webhook data analysis
      else if (context.webhookData) {
        paymentType = this.detectFromWebhookData(context.webhookData);
      }
      // Method 3: Payment data analysis
      else if (context.paymentData) {
        paymentType = this.detectFromPaymentData(context.paymentData);
      }
      // Method 4: Transaction data analysis
      else if (context.transactionData) {
        paymentType = this.detectFromTransactionData(context.transactionData);
      }
      // Default fallback
      else {
        logger.warn('⚠️ PaymentMethodRouter: No payment method indicators found, defaulting to CARD');
        paymentType = PaymentType.CARD;
      }

      // Determine approval requirements based on payment type
      const approvalLogic = this.determineApprovalLogic(paymentType, context);
      requiresApproval = approvalLogic.requiresApproval;
      autoApprove = approvalLogic.autoApprove;
      routingDecision = approvalLogic.routingDecision;

      const result: PaymentMethodDetectionResult = {
        paymentType,
        requiresApproval,
        autoApprove,
        routingDecision
      };

      logger.info('✅ PaymentMethodRouter: Payment method detected', { result });
      return result;

    } catch (error) {
      logger.error('❌ PaymentMethodRouter: Payment method detection failed', { error, context });
      
      // Safe fallback - route to manual review
      return {
        paymentType: PaymentType.CARD,
        requiresApproval: true,
        autoApprove: false,
        routingDecision: 'manual_review'
      };
    }
  }

  /**
   * Route payment based on detected method and implement approval logic
   */
  async routePayment(
    enrollmentId: string, 
    paymentResult: PaymentResult, 
    context: PaymentRoutingContext
  ): Promise<EnrollmentApprovalResult> {
    try {
      logger.info('🚦 PaymentMethodRouter: Routing payment', { 
        enrollmentId, 
        paymentSuccess: paymentResult.success,
        context 
      });

      // First detect the payment method
      const detection = await this.detectPaymentMethod(context);
      
      // Update enrollment with payment type
      await this.updateEnrollmentPaymentType(enrollmentId, detection.paymentType);

      // Handle failed payments
      if (!paymentResult.success) {
        return await this.handleFailedPayment(enrollmentId, paymentResult, detection);
      }

      // Route successful payments based on detection
      switch (detection.routingDecision) {
        case 'immediate_approval':
          return await this.processImmediateApproval(enrollmentId, paymentResult, detection);
        
        case 'admin_approval':
          return await this.routeToAdminApproval(enrollmentId, paymentResult, detection);
        
        case 'manual_review':
          return await this.routeToManualReview(enrollmentId, paymentResult, detection);
        
        default:
          throw new Error(`Unknown routing decision: ${detection.routingDecision}`);
      }

    } catch (error) {
      logger.error('❌ PaymentMethodRouter: Payment routing failed', { 
        error, 
        enrollmentId, 
        paymentResult 
      });

      return {
        success: false,
        enrollmentId,
        approved: false,
        accessGranted: false,
        message: 'Payment routing failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Process immediate approval for card payments
   */
  private async processImmediateApproval(
    enrollmentId: string,
    paymentResult: PaymentResult,
    detection: PaymentMethodDetectionResult
  ): Promise<EnrollmentApprovalResult> {
    try {
      logger.info('⚡ PaymentMethodRouter: Processing immediate approval', { 
        enrollmentId, 
        paymentType: detection.paymentType 
      });

      // Update enrollment status to approved
      const { error: updateError } = await supabase
        .from('enrollments')
        .update({
          status: EnrollmentStatus.APPROVED,
          payment_status: PaymentStatus.COMPLETED,
          course_access_granted: true,
          access_granted_at: new Date().toISOString(),
          approved_at: new Date().toISOString(),
          approved_by: 'system_auto_approval',
          ikhokha_transaction_id: paymentResult.transaction_id,
          payment_reference: paymentResult.reference,
          updated_at: new Date().toISOString()
        })
        .eq('id', enrollmentId);

      if (updateError) {
        throw new Error(`Failed to approve enrollment: ${updateError.message}`);
      }

      logger.info('✅ PaymentMethodRouter: Immediate approval completed', { enrollmentId });

      return {
        success: true,
        enrollmentId,
        approved: true,
        accessGranted: true,
        message: 'Payment successful - Course access granted immediately'
      };

    } catch (error) {
      logger.error('❌ PaymentMethodRouter: Immediate approval failed', { error, enrollmentId });
      
      return {
        success: false,
        enrollmentId,
        approved: false,
        accessGranted: false,
        message: 'Approval processing failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Route EFT payments to admin approval workflow
   */ 
 private async routeToAdminApproval(
    enrollmentId: string,
    paymentResult: PaymentResult,
    detection: PaymentMethodDetectionResult
  ): Promise<EnrollmentApprovalResult> {
    try {
      logger.info('👨‍💼 PaymentMethodRouter: Routing to admin approval', { 
        enrollmentId, 
        paymentType: detection.paymentType 
      });

      // Update enrollment to pending approval status
      const { error: updateError } = await supabase
        .from('enrollments')
        .update({
          status: EnrollmentStatus.PENDING,
          payment_status: PaymentStatus.COMPLETED,
          requires_approval: true,
          course_access_granted: false,
          ikhokha_transaction_id: paymentResult.transaction_id,
          payment_reference: paymentResult.reference,
          updated_at: new Date().toISOString()
        })
        .eq('id', enrollmentId);

      if (updateError) {
        throw new Error(`Failed to update enrollment for admin approval: ${updateError.message}`);
      }

      // Notify admins of pending enrollment (this would integrate with admin dashboard)
      await this.notifyAdminsOfPendingEnrollment(enrollmentId, detection.paymentType);

      logger.info('✅ PaymentMethodRouter: Routed to admin approval', { enrollmentId });

      return {
        success: true,
        enrollmentId,
        approved: false,
        accessGranted: false,
        message: 'Payment received - Awaiting admin approval for course access'
      };

    } catch (error) {
      logger.error('❌ PaymentMethodRouter: Admin approval routing failed', { error, enrollmentId });
      
      return {
        success: false,
        enrollmentId,
        approved: false,
        accessGranted: false,
        message: 'Failed to process for admin approval',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Route payments that need manual review
   */
  private async routeToManualReview(
    enrollmentId: string,
    paymentResult: PaymentResult,
    detection: PaymentMethodDetectionResult
  ): Promise<EnrollmentApprovalResult> {
    try {
      logger.info('🔍 PaymentMethodRouter: Routing to manual review', { 
        enrollmentId, 
        paymentType: detection.paymentType 
      });

      // Update enrollment to pending status with manual review flag
      const { error: updateError } = await supabase
        .from('enrollments')
        .update({
          status: EnrollmentStatus.PENDING,
          payment_status: PaymentStatus.COMPLETED,
          requires_approval: true,
          course_access_granted: false,
          ikhokha_transaction_id: paymentResult.transaction_id,
          payment_reference: paymentResult.reference,
          rejection_reason: 'Requires manual review',
          updated_at: new Date().toISOString()
        })
        .eq('id', enrollmentId);

      if (updateError) {
        throw new Error(`Failed to update enrollment for manual review: ${updateError.message}`);
      }

      // Flag for admin attention
      await this.flagForManualReview(enrollmentId, 'Payment method requires manual verification');

      logger.info('✅ PaymentMethodRouter: Routed to manual review', { enrollmentId });

      return {
        success: true,
        enrollmentId,
        approved: false,
        accessGranted: false,
        message: 'Payment received - Under manual review for verification'
      };

    } catch (error) {
      logger.error('❌ PaymentMethodRouter: Manual review routing failed', { error, enrollmentId });
      
      return {
        success: false,
        enrollmentId,
        approved: false,
        accessGranted: false,
        message: 'Failed to process for manual review',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Handle failed payment scenarios
   */
  private async handleFailedPayment(
    enrollmentId: string,
    paymentResult: PaymentResult,
    detection: PaymentMethodDetectionResult
  ): Promise<EnrollmentApprovalResult> {
    try {
      logger.info('❌ PaymentMethodRouter: Handling failed payment', { 
        enrollmentId, 
        paymentType: detection.paymentType,
        error: paymentResult.error 
      });

      // Update enrollment with failure information
      const { error: updateError } = await supabase
        .from('enrollments')
        .update({
          status: EnrollmentStatus.PENDING,
          payment_status: PaymentStatus.FAILED,
          course_access_granted: false,
          rejection_reason: paymentResult.error?.message || 'Payment failed',
          updated_at: new Date().toISOString()
        })
        .eq('id', enrollmentId);

      if (updateError) {
        throw new Error(`Failed to update enrollment with payment failure: ${updateError.message}`);
      }

      return {
        success: true, // Successfully handled the failure
        enrollmentId,
        approved: false,
        accessGranted: false,
        message: paymentResult.error?.message || 'Payment failed - Please try again'
      };

    } catch (error) {
      logger.error('❌ PaymentMethodRouter: Failed payment handling failed', { error, enrollmentId });
      
      return {
        success: false,
        enrollmentId,
        approved: false,
        accessGranted: false,
        message: 'Failed to process payment failure',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Map payment method string to PaymentType enum
   */
  private mapPaymentMethodToType(paymentMethod: string): PaymentType {
    const method = paymentMethod.toLowerCase();
    
    // Card payment indicators
    if (method.includes('card') || 
        method.includes('visa') || 
        method.includes('mastercard') || 
        method.includes('credit') || 
        method.includes('debit')) {
      return PaymentType.CARD;
    }
    
    // EFT payment indicators
    if (method.includes('eft') || 
        method.includes('bank') || 
        method.includes('transfer') || 
        method.includes('deposit')) {
      return PaymentType.EFT;
    }
    
    // Default to card for unknown methods
    logger.warn('⚠️ PaymentMethodRouter: Unknown payment method, defaulting to CARD', { paymentMethod });
    return PaymentType.CARD;
  }

  /**
   * Detect payment type from webhook data
   */  private
 detectFromWebhookData(webhookData: IkhokhaWebhook): PaymentType {
    // Check for card-specific fields
    if (webhookData.card_type || webhookData.masked_card_number || webhookData.auth_code) {
      return PaymentType.CARD;
    }
    
    // Check response codes that indicate card transactions
    if (webhookData.response_code && ['00', '01', '02'].includes(webhookData.response_code)) {
      return PaymentType.CARD;
    }
    
    // Check for EFT indicators in metadata or reference
    const reference = webhookData.reference?.toLowerCase() || '';
    const metadata = JSON.stringify(webhookData.metadata || {}).toLowerCase();
    
    if (reference.includes('eft') || reference.includes('transfer') || 
        metadata.includes('eft') || metadata.includes('bank')) {
      return PaymentType.EFT;
    }
    
    // Default to card if no clear indicators
    return PaymentType.CARD;
  }

  /**
   * Detect payment type from payment data
   */
  private detectFromPaymentData(paymentData: PaymentData): PaymentType {
    // Check payment method if specified
    if (paymentData.paymentMethod) {
      return this.mapPaymentMethodToType(paymentData.paymentMethod);
    }
    
    // Check metadata for payment type indicators
    const metadata = paymentData.metadata || {};
    if (metadata.paymentType) {
      return this.mapPaymentMethodToType(metadata.paymentType);
    }
    
    // Check reference for indicators
    const reference = paymentData.reference?.toLowerCase() || '';
    if (reference.includes('eft') || reference.includes('transfer')) {
      return PaymentType.EFT;
    }
    
    // Default to card
    return PaymentType.CARD;
  }

  /**
   * Detect payment type from transaction data
   */
  private detectFromTransactionData(transactionData: any): PaymentType {
    // Check for card-specific transaction fields
    if (transactionData.card_type || 
        transactionData.masked_card_number || 
        transactionData.auth_code ||
        transactionData.card_scheme) {
      return PaymentType.CARD;
    }
    
    // Check transaction type
    if (transactionData.transaction_type) {
      const type = transactionData.transaction_type.toLowerCase();
      if (type.includes('eft') || type.includes('transfer') || type.includes('bank')) {
        return PaymentType.EFT;
      }
    }
    
    // Check payment method
    if (transactionData.payment_method) {
      return this.mapPaymentMethodToType(transactionData.payment_method);
    }
    
    // Default to card
    return PaymentType.CARD;
  }

  /**
   * Determine approval logic based on payment type and context
   */
  private determineApprovalLogic(
    paymentType: PaymentType, 
    context: PaymentRoutingContext
  ): {
    requiresApproval: boolean;
    autoApprove: boolean;
    routingDecision: 'immediate_approval' | 'admin_approval' | 'manual_review';
  } {
    // Card payments get immediate approval
    if (paymentType === PaymentType.CARD) {
      return {
        requiresApproval: false,
        autoApprove: true,
        routingDecision: 'immediate_approval'
      };
    }
    
    // EFT payments require admin approval
    if (paymentType === PaymentType.EFT) {
      return {
        requiresApproval: true,
        autoApprove: false,
        routingDecision: 'admin_approval'
      };
    }
    
    // Unknown or manual payments need manual review
    return {
      requiresApproval: true,
      autoApprove: false,
      routingDecision: 'manual_review'
    };
  }

  /**
   * Update enrollment with detected payment type
   */
  private async updateEnrollmentPaymentType(
    enrollmentId: string, 
    paymentType: PaymentType
  ): Promise<void> {
    try {
      const { error } = await supabase
        .from('enrollments')
        .update({
          payment_type: paymentType,
          updated_at: new Date().toISOString()
        })
        .eq('id', enrollmentId);

      if (error) {
        throw new Error(`Failed to update enrollment payment type: ${error.message}`);
      }

      logger.info('✅ PaymentMethodRouter: Updated enrollment payment type', { 
        enrollmentId, 
        paymentType 
      });

    } catch (error) {
      logger.error('❌ PaymentMethodRouter: Failed to update payment type', { 
        error, 
        enrollmentId, 
        paymentType 
      });
      throw error;
    }
  }

  /**
   * Notify admins of pending enrollment requiring approval
   */
  private async notifyAdminsOfPendingEnrollment(
    enrollmentId: string, 
    paymentType: PaymentType
  ): Promise<void> {
    try {
      // This would integrate with the admin notification system
      // For now, we'll log the notification
      logger.info('📢 PaymentMethodRouter: Admin notification sent', { 
        enrollmentId, 
        paymentType,
        message: 'New EFT payment enrollment requires approval'
      });

      // In a real implementation, this would:
      // 1. Send real-time notification to admin dashboard
      // 2. Send email notification to admins
      // 3. Update admin notification counters
      // 4. Trigger webhook to external admin systems

    } catch (error) {
      logger.error('❌ PaymentMethodRouter: Failed to notify admins', { 
        error, 
        enrollmentId, 
        paymentType 
      });
      // Don't throw - notification failure shouldn't break the flow
    }
  }

  /**
   * Flag enrollment for manual review
   */
  private async flagForManualReview(enrollmentId: string, reason: string): Promise<void> {
    try {
      // This would integrate with the admin review system
      logger.info('🚩 PaymentMethodRouter: Flagged for manual review', { 
        enrollmentId, 
        reason 
      });

      // In a real implementation, this would:
      // 1. Add to manual review queue
      // 2. Set priority flags
      // 3. Notify review team
      // 4. Log audit trail

    } catch (error) {
      logger.error('❌ PaymentMethodRouter: Failed to flag for manual review', { 
        error, 
        enrollmentId, 
        reason 
      });
      // Don't throw - flagging failure shouldn't break the flow
    }
  }

  /**
   * Check if payment method requires approval based on business rules
   */
  shouldRequireApproval(paymentType: PaymentType, context?: PaymentRoutingContext): boolean {
    // Card payments don't require approval
    if (paymentType === PaymentType.CARD) {
      return false;
    }
    
    // EFT payments always require approval
    if (paymentType === PaymentType.EFT) {
      return true;
    }
    
    // Unknown payment types require approval by default
    return true;
  }

  /**
   * Get payment type persistence data for enrollment records
   */
  getPaymentTypePersistenceData(
    paymentType: PaymentType, 
    paymentResult: PaymentResult
  ): Partial<ProductionEnrollment> {
    return {
      payment_type: paymentType,
      payment_status: paymentResult.success ? PaymentStatus.COMPLETED : PaymentStatus.FAILED,
      payment_reference: paymentResult.reference,
      ikhokha_transaction_id: paymentResult.transaction_id,
      requires_approval: this.shouldRequireApproval(paymentType),
      updated_at: new Date()
    };
  }
}

// Export singleton instance
export const paymentMethodRouter = PaymentMethodRouter.getInstance();