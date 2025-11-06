/**
 * Production Payment Orchestrator Service
 * 
 * Main coordinator for production payment flows with enrollment management,
 * payment method routing, and real-time status synchronization.
 * 
 * Requirements: 5.1, 5.2, 5.3, 6.2
 */

import {
    PaymentStatus,
    PaymentResult,
    PaymentMetadata,
    IkhokhaError,
    PaymentValidationError,
    ProductionEnrollmentRequest,
    ProductionEnrollmentResult,
    EnrollmentStatus,
    PaymentType,
    ProductionEnrollment,
    ProductionValidation,
    EnrollmentStatusUpdate
} from '../types/ikhokha';
import { IkhokhaPaymentService } from './ikhokhaPaymentService';
import { realTimeEnrollmentService } from './RealTimeEnrollmentService';
import { supabase } from '@/integrations/supabase/client';

// Production-specific types are imported from types/ikhokha.ts

/**
 * Production Payment Orchestrator
 * 
 * Coordinates the entire payment and enrollment flow for production environment
 */
export class ProductionPaymentOrchestrator {
    private static instance: ProductionPaymentOrchestrator;
    private paymentService: IkhokhaPaymentService;
    private statusUpdateCallbacks: Set<(update: EnrollmentStatusUpdate) => void> = new Set();

    constructor() {
        this.paymentService = new IkhokhaPaymentService();
        this.validateProductionReadiness();
    }

    static getInstance(): ProductionPaymentOrchestrator {
        if (!ProductionPaymentOrchestrator.instance) {
            ProductionPaymentOrchestrator.instance = new ProductionPaymentOrchestrator();
        }
        return ProductionPaymentOrchestrator.instance;
    }

    /**
     * Validate production readiness - Requirements 5.1, 5.2, 5.3
     */
    validateProductionReadiness(): ProductionValidation {
        const errors: string[] = [];
        const warnings: string[] = [];
        const isProduction = import.meta.env.VITE_NODE_ENV === 'production';

        // Production environment validation
        if (isProduction) {
            // Check for test mode in production
            const config = this.paymentService['config'];
            if (config.test_mode) {
                errors.push('Payment service cannot run in test mode in production environment');
            }

            // Check API endpoint
            if (config.api_url.includes('pay.ikhokha.com')) {
                errors.push('Production must use api.ikhokha.com endpoint, not pay.ikhokha.com');
            }

            // Check for development credentials
            if (config.api_key === 'IKW31E1I5WP1HT2KIIB2XZMBXJOFDX5D') {
                errors.push('Production cannot use development API credentials');
            }

            // Validate SSL
            if (!config.api_url.startsWith('https://')) {
                errors.push('Production API must use HTTPS');
            }

            // Check webhook secret
            if (config.webhook_secret.includes('dev_') || config.webhook_secret.includes('test_')) {
                errors.push('Production cannot use development webhook secret');
            }
        }

        // Database connection validation
        if (!supabase) {
            errors.push('Database connection not available');
        }

        // Real-time service validation
        if (!realTimeEnrollmentService) {
            warnings.push('Real-time enrollment service not available');
        }

        const validation: ProductionValidation = {
            isValid: errors.length === 0,
            errors,
            warnings
        };

        // Log validation results
        const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';
        if (shouldLog) {
            if (validation.isValid) {
                console.log('✅ Production payment orchestrator validation passed');
            } else {
                console.error('❌ Production payment orchestrator validation failed:', errors);
            }

            if (warnings.length > 0) {
                console.warn('⚠️ Production payment orchestrator warnings:', warnings);
            }
        }

        // Throw error if validation fails in production
        if (isProduction && !validation.isValid) {
            throw new Error(`Production validation failed: ${errors.join(', ')}`);
        }

        return validation;
    }

    /**
     * Initiate enrollment flow - Requirements 6.2
     */
    async initiateEnrollment(request: ProductionEnrollmentRequest): Promise<ProductionEnrollmentResult> {
        try {
            // Validate request
            this.validateEnrollmentRequest(request);

            // Check for existing enrollment
            const existingEnrollment = await this.getExistingEnrollment(request.courseId, request.userId);
            if (existingEnrollment) {
                return this.handleExistingEnrollment(existingEnrollment);
            }

            // Create pending enrollment
            const enrollment = await this.createPendingEnrollment(request);

            // Initialize payment
            const paymentResult = await this.initializePayment(enrollment, request);

            // Update enrollment with payment information
            await this.updateEnrollmentPaymentInfo(enrollment.id, paymentResult);

            // Broadcast enrollment creation
            this.broadcastEnrollmentUpdate({
                enrollmentId: enrollment.id,
                userId: request.userId,
                courseId: request.courseId,
                status: enrollment.status,
                eventType: 'enrollment_created',
                timestamp: new Date()
            });

            return {
                success: true,
                enrollmentId: enrollment.id,
                paymentUrl: paymentResult.payment_url,
                status: enrollment.status,
                message: 'Enrollment initiated successfully'
            };

        } catch (error) {
            console.error('❌ Enrollment initiation failed:', error);

            return {
                success: false,
                status: EnrollmentStatus.FAILED,
                message: error instanceof Error ? error.message : 'Enrollment initiation failed',
                error: {
                    code: error instanceof IkhokhaError ? error.code : 'ENROLLMENT_INIT_ERROR',
                    message: error instanceof Error ? error.message : 'Unknown error',
                    details: error instanceof IkhokhaError ? error.details : undefined
                }
            };
        }
    }

    /**
     * Get enrollment status - Requirements 6.2
     */
    async getEnrollmentStatus(courseId: string, userId: string): Promise<EnrollmentStatus> {
        try {
            const { data, error } = await supabase
                .from('enrollments')
                .select('status')
                .eq('course_id', courseId)
                .eq('user_id', userId)
                .single();

            if (error) {
                if (error.code === 'PGRST116') {
                    return EnrollmentStatus.PENDING; // No enrollment found
                }
                throw error;
            }

            return data.status as EnrollmentStatus;
        } catch (error) {
            console.error('❌ Failed to get enrollment status:', error);
            return EnrollmentStatus.FAILED;
        }
    }

    /**
     * Update enrollment status with proper state transitions - Requirements 6.2
     */
    async updateEnrollmentStatus(
        enrollmentId: string,
        newStatus: EnrollmentStatus,
        metadata?: { approvedBy?: string; rejectionReason?: string }
    ): Promise<void> {
        try {
            // Get current enrollment
            const { data: enrollment, error: fetchError } = await supabase
                .from('enrollments')
                .select('*')
                .eq('id', enrollmentId)
                .single();

            if (fetchError) {
                throw new Error(`Failed to fetch enrollment: ${fetchError.message}`);
            }

            // Validate state transition
            this.validateStateTransition(enrollment.status, newStatus);

            // Prepare update data
            const updateData: any = {
                status: newStatus,
                updated_at: new Date().toISOString()
            };

            // Handle approval-specific updates
            if (newStatus === EnrollmentStatus.APPROVED) {
                updateData.approved_by = metadata?.approvedBy;
                updateData.approved_at = new Date().toISOString();
                updateData.course_access_granted = true;
                updateData.access_granted_at = new Date().toISOString();
            }

            // Handle rejection-specific updates
            if (newStatus === EnrollmentStatus.REJECTED) {
                updateData.rejection_reason = metadata?.rejectionReason;
                updateData.course_access_granted = false;
            }

            // Update enrollment
            const { error: updateError } = await supabase
                .from('enrollments')
                .update(updateData)
                .eq('id', enrollmentId);

            if (updateError) {
                throw new Error(`Failed to update enrollment: ${updateError.message}`);
            }

            // Broadcast status update
            this.broadcastEnrollmentUpdate({
                enrollmentId,
                userId: enrollment.user_id,
                courseId: enrollment.course_id,
                status: newStatus,
                eventType: 'enrollment_updated',
                timestamp: new Date(),
                metadata
            });

            console.log('✅ Enrollment status updated:', {
                enrollmentId,
                oldStatus: enrollment.status,
                newStatus,
                metadata
            });

        } catch (error) {
            console.error('❌ Failed to update enrollment status:', error);
            throw error;
        }
    }

    /**
     * Determine payment method and routing logic
     */
    determinePaymentType(paymentMethod: string): PaymentType {
        // Map payment methods to types
        const paymentMethodMap: Record<string, PaymentType> = {
            'card': PaymentType.CARD,
            'credit_card': PaymentType.CARD,
            'debit_card': PaymentType.CARD,
            'eft': PaymentType.EFT,
            'bank_transfer': PaymentType.EFT,
            'manual': PaymentType.MANUAL
        };

        return paymentMethodMap[paymentMethod.toLowerCase()] || PaymentType.CARD;
    }

    /**
     * Check if payment requires admin approval
     */
    shouldRequireApproval(paymentType: PaymentType): boolean {
        return paymentType === PaymentType.EFT || paymentType === PaymentType.MANUAL;
    }

    /**
     * Subscribe to enrollment status updates
     */
    subscribeToEnrollmentUpdates(callback: (update: EnrollmentStatusUpdate) => void): () => void {
        this.statusUpdateCallbacks.add(callback);

        return () => {
            this.statusUpdateCallbacks.delete(callback);
        };
    }

    // Private methods

    /**
     * Validate enrollment request
     */
    private validateEnrollmentRequest(request: ProductionEnrollmentRequest): void {
        const errors: string[] = [];

        if (!request.courseId) errors.push('Course ID is required');
        if (!request.userId) errors.push('User ID is required');
        if (!request.userEmail) errors.push('User email is required');
        if (!request.userName) errors.push('User name is required');
        if (!request.courseName) errors.push('Course name is required');
        if (!request.coursePrice || request.coursePrice <= 0) errors.push('Valid course price is required');

        if (errors.length > 0) {
            throw new PaymentValidationError(`Invalid enrollment request: ${errors.join(', ')}`);
        }
    }

    /**
     * Get existing enrollment
     */
    private async getExistingEnrollment(courseId: string, userId: string): Promise<ProductionEnrollment | null> {
        try {
            const { data, error } = await supabase
                .from('enrollments')
                .select('*')
                .eq('course_id', courseId)
                .eq('user_id', userId)
                .single();

            if (error) {
                if (error.code === 'PGRST116') {
                    return null; // No enrollment found
                }
                throw error;
            }

            return data as ProductionEnrollment;
        } catch (error) {
            console.error('❌ Failed to check existing enrollment:', error);
            return null;
        }
    }

    /**
     * Handle existing enrollment
     */
    private handleExistingEnrollment(enrollment: ProductionEnrollment): ProductionEnrollmentResult {
        switch (enrollment.status) {
            case EnrollmentStatus.APPROVED:
            case EnrollmentStatus.COMPLETED:
                return {
                    success: true,
                    enrollmentId: enrollment.id,
                    status: enrollment.status,
                    message: 'Already enrolled in this course'
                };

            case EnrollmentStatus.PENDING_APPROVAL:
                return {
                    success: true,
                    enrollmentId: enrollment.id,
                    status: enrollment.status,
                    message: 'Enrollment pending approval'
                };

            case EnrollmentStatus.PAYMENT_REQUIRED:
            case EnrollmentStatus.PAYMENT_PROCESSING:
                return {
                    success: false,
                    enrollmentId: enrollment.id,
                    status: enrollment.status,
                    message: 'Payment still required for this enrollment'
                };

            case EnrollmentStatus.REJECTED:
                return {
                    success: false,
                    enrollmentId: enrollment.id,
                    status: enrollment.status,
                    message: 'Previous enrollment was rejected'
                };

            default:
                return {
                    success: false,
                    enrollmentId: enrollment.id,
                    status: enrollment.status,
                    message: 'Existing enrollment found with unknown status'
                };
        }
    }

    /**
     * Create pending enrollment
     */
    private async createPendingEnrollment(request: ProductionEnrollmentRequest): Promise<ProductionEnrollment> {
        const enrollmentData = {
            user_id: request.userId,
            user_email: request.userEmail,
            course_id: request.courseId,
            course_title: request.courseName,
            status: EnrollmentStatus.PAYMENT_REQUIRED,
            payment_type: PaymentType.CARD, // Default to card, will be updated based on actual payment
            payment_status: PaymentStatus.PENDING,
            requires_approval: false, // Will be updated based on payment type
            course_access_granted: false,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        const { data, error } = await supabase
            .from('enrollments')
            .insert(enrollmentData)
            .select()
            .single();

        if (error) {
            throw new Error(`Failed to create enrollment: ${error.message}`);
        }

        return data as ProductionEnrollment;
    }

    /**
     * Initialize payment
     */
    private async initializePayment(enrollment: ProductionEnrollment, request: ProductionEnrollmentRequest) {
        const paymentReference = `ENR_${enrollment.id}_${Date.now()}`;

        const metadata: PaymentMetadata = {
            enrollmentId: enrollment.id,
            courseId: request.courseId,
            userId: request.userId,
            courseName: request.courseName
        };

        return await this.paymentService.initializePayment(
            request.coursePrice,
            paymentReference,
            metadata
        );
    }

    /**
     * Update enrollment with payment information
     */
    private async updateEnrollmentPaymentInfo(enrollmentId: string, paymentResult: any): Promise<void> {
        const updateData = {
            payment_reference: paymentResult.reference,
            payment_status: PaymentStatus.PROCESSING,
            status: EnrollmentStatus.PAYMENT_PROCESSING,
            updated_at: new Date().toISOString()
        };

        const { error } = await supabase
            .from('enrollments')
            .update(updateData)
            .eq('id', enrollmentId);

        if (error) {
            throw new Error(`Failed to update enrollment payment info: ${error.message}`);
        }
    }

    /**
     * Validate state transition
     */
    private validateStateTransition(currentStatus: EnrollmentStatus, newStatus: EnrollmentStatus): void {
        const validTransitions: Record<EnrollmentStatus, EnrollmentStatus[]> = {
            [EnrollmentStatus.PENDING]: [EnrollmentStatus.PAYMENT_REQUIRED, EnrollmentStatus.FAILED],
            [EnrollmentStatus.PAYMENT_REQUIRED]: [EnrollmentStatus.PAYMENT_PROCESSING, EnrollmentStatus.FAILED],
            [EnrollmentStatus.PAYMENT_PROCESSING]: [
                EnrollmentStatus.APPROVED,
                EnrollmentStatus.PENDING_APPROVAL,
                EnrollmentStatus.FAILED
            ],
            [EnrollmentStatus.PENDING_APPROVAL]: [
                EnrollmentStatus.APPROVED,
                EnrollmentStatus.REJECTED
            ],
            [EnrollmentStatus.APPROVED]: [EnrollmentStatus.COMPLETED],
            [EnrollmentStatus.REJECTED]: [EnrollmentStatus.PAYMENT_REQUIRED],
            [EnrollmentStatus.COMPLETED]: [],
            [EnrollmentStatus.FAILED]: [EnrollmentStatus.PAYMENT_REQUIRED]
        };

        const allowedTransitions = validTransitions[currentStatus] || [];

        if (!allowedTransitions.includes(newStatus)) {
            throw new Error(`Invalid state transition from ${currentStatus} to ${newStatus}`);
        }
    }

    /**
     * Broadcast enrollment update
     */
    private broadcastEnrollmentUpdate(update: EnrollmentStatusUpdate): void {
        // Notify local callbacks
        this.statusUpdateCallbacks.forEach(callback => {
            try {
                callback(update);
            } catch (error) {
                console.error('Error in enrollment status callback:', error);
            }
        });

        // Dispatch global event
        window.dispatchEvent(new CustomEvent('enrollment-status-updated', {
            detail: update
        }));
    }
}

// Export singleton instance
export const productionPaymentOrchestrator = ProductionPaymentOrchestrator.getInstance();