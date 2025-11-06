/**
 * Enhanced Webhook Handler Service
 * 
 * Comprehensive webhook handling system for Ikhokha payment notifications
 * with advanced error handling, retry mechanisms, and enrollment status updates
 * 
 * Requirements: 8.1, 8.2, 8.3, 8.4
 */

import {
  IkhokhaWebhook,
  WebhookResult,
  PaymentStatus,
  EnrollmentStatus,
  PaymentResult,
  WebhookValidationError,
  IkhokhaError
} from '../types/ikhokha';
import { supabase } from '@/integrations/supabase/client';
import { ikhokhaConfig } from '../config/ikhokha';
import { paymentMethodRouter } from './PaymentMethodRouter';
import { realTimePaymentSync } from './RealTimePaymentSync';
import { productionSecurityService } from './ProductionSecurityService';
import { paymentTypeDetector } from './PaymentTypeDetector';
import { cardPaymentFastTrack } from './CardPaymentFastTrack';
import { cardPaymentErrorRecoverySystem } from './CardPaymentErrorRecoverySystem';
import { logger } from '@/utils/logger';

interface WebhookProcessingContext {
  webhookId: string;
  attempt: number;
  maxAttempts: number;
  originalTimestamp: Date;
  processingStarted: Date;
}

interface WebhookRetryConfig {
  maxAttempts: number;
  baseDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
}

interface WebhookSecurityValidation {
  signatureValid: boolean;
  timestampValid: boolean;
  sourceValid: boolean;
  contentValid: boolean;
  overallValid: boolean;
  errors: string[];
}

interface EnhancedWebhookProcessingResult {
  processed: boolean;
  paymentTypeDetected: boolean;
  paymentType: 'card' | 'eft' | 'unknown';
  confidence: number;
  fastTrackApplied: boolean;
  enrollmentApproved: boolean;
  accessGranted: boolean;
  fallbackUsed: boolean;
  processingTimeMs: number;
  error?: string;
  details?: Record<string, any>;
}

/**
 * Enhanced Webhook Handler for Production iKhokha Payment Processing
 * 
 * Handles real iKhokha payment notifications with production-grade security,
 * automatic enrollment approval, and comprehensive retry mechanisms.
 */
export class WebhookHandler {
  private static instance: WebhookHandler;
  private retryConfig: WebhookRetryConfig;
  private processingQueue: Map<string, WebhookProcessingContext> = new Map();
  private isInitialized = false;

  private constructor() {
    this.retryConfig = {
      maxAttempts: 5,
      baseDelay: 1000,
      maxDelay: 30000,
      backoffMultiplier: 2
    };
  }

  static getInstance(): WebhookHandler {
    if (!WebhookHandler.instance) {
      WebhookHandler.instance = new WebhookHandler();
    }
    return WebhookHandler.instance;
  }

  /**
   * Initialize the webhook handler
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Validate production configuration
      this.validateProductionConfig();
      
      // Initialize real-time sync service
      await realTimePaymentSync.initialize();
      
      // Initialize card payment fast-track service
      await cardPaymentFastTrack.initialize();
      
      // Initialize error recovery system
      await cardPaymentErrorRecoverySystem.initialize();
      
      this.isInitialized = true;
      logger.info('✅ WebhookHandler: Initialized successfully with card payment detection');
    } catch (error) {
      logger.error('❌ WebhookHandler: Initialization failed', { error });
      throw error;
    }
  }

  /**
   * Process iKhokha webhook notification with enhanced security
   * Requirement 8.1: Process real iKhokha payment notifications
   */
  async processWebhook(
    webhookData: IkhokhaWebhook,
    signature: string,
    timestamp?: string,
    sourceIp?: string
  ): Promise<WebhookResult> {
    const webhookId = `webhook_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    try {
      logger.info('🔔 WebhookHandler: Processing webhook', { 
        webhookId, 
        transactionId: webhookData.transaction_id,
        status: webhookData.status 
      });

      // Enhanced security validation using production security service
      const payload = JSON.stringify(webhookData);
      const securityValidation = await productionSecurityService.validateWebhookSecurity(
        payload,
        signature,
        timestamp || new Date().toISOString(),
        sourceIp || 'unknown'
      );

      if (!securityValidation.valid) {
        throw new WebhookValidationError(
          'Enhanced webhook security validation failed',
          { validation: securityValidation }
        );
      }

      // Additional legacy validation for compatibility
      const legacyValidation = await this.validateWebhookSecurity(
        webhookData, 
        signature, 
        timestamp
      );

      if (!legacyValidation.overallValid) {
        throw new WebhookValidationError(
          'Legacy webhook security validation failed',
          { validation: legacyValidation }
        );
      }

      // Process the webhook with retry mechanism
      const context: WebhookProcessingContext = {
        webhookId,
        attempt: 1,
        maxAttempts: this.retryConfig.maxAttempts,
        originalTimestamp: new Date(),
        processingStarted: new Date()
      };

      return await this.processWebhookWithRetry(webhookData, context);

    } catch (error) {
      logger.error('❌ WebhookHandler: Webhook processing failed', { 
        error, 
        webhookId,
        transactionId: webhookData.transaction_id 
      });

      return {
        processed: false,
        payment_updated: false,
        enrollment_updated: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        details: { webhookId, error }
      };
    }
  }

  /**
   * Validate webhook signature for production security
   * Requirement 8.2: Webhook signature validation for production security
   */
  private async validateWebhookSecurity(
    webhookData: IkhokhaWebhook,
    signature: string,
    timestamp?: string
  ): Promise<WebhookSecurityValidation> {
    const validation: WebhookSecurityValidation = {
      signatureValid: false,
      timestampValid: false,
      sourceValid: false,
      contentValid: false,
      overallValid: false,
      errors: []
    };

    try {
      // 1. Validate webhook signature
      validation.signatureValid = await this.validateSignature(webhookData, signature);
      if (!validation.signatureValid) {
        validation.errors.push('Invalid webhook signature');
      }

      // 2. Validate timestamp (prevent replay attacks)
      validation.timestampValid = this.validateTimestamp(timestamp);
      if (!validation.timestampValid) {
        validation.errors.push('Invalid or expired timestamp');
      }

      // 3. Validate webhook source
      validation.sourceValid = this.validateWebhookSource(webhookData);
      if (!validation.sourceValid) {
        validation.errors.push('Invalid webhook source');
      }

      // 4. Validate webhook content
      validation.contentValid = this.validateWebhookContent(webhookData);
      if (!validation.contentValid) {
        validation.errors.push('Invalid webhook content structure');
      }

      // Overall validation
      validation.overallValid = validation.signatureValid && 
                               validation.timestampValid && 
                               validation.sourceValid && 
                               validation.contentValid;

      logger.info('🔒 WebhookHandler: Security validation completed', { 
        validation: {
          ...validation,
          errors: validation.errors.length > 0 ? validation.errors : undefined
        }
      });

      return validation;

    } catch (error) {
      logger.error('❌ WebhookHandler: Security validation failed', { error });
      validation.errors.push(`Security validation error: ${error instanceof Error ? error.message : error}`);
      return validation;
    }
  }

  /**
   * Process webhook with retry mechanism
   * Requirement 8.4: Webhook retry mechanism for failed processing attempts
   */
  private async processWebhookWithRetry(
    webhookData: IkhokhaWebhook,
    context: WebhookProcessingContext
  ): Promise<WebhookResult> {
    this.processingQueue.set(context.webhookId, context);

    try {
      // Attempt to process the webhook
      const result = await this.processWebhookCore(webhookData, context);
      
      if (result.processed) {
        // Success - remove from queue
        this.processingQueue.delete(context.webhookId);
        logger.info('✅ WebhookHandler: Webhook processed successfully', { 
          webhookId: context.webhookId,
          attempt: context.attempt 
        });
        return result;
      }

      // Failed - check if we should retry
      if (context.attempt < context.maxAttempts) {
        return await this.retryWebhookProcessing(webhookData, context);
      } else {
        // Max attempts reached
        this.processingQueue.delete(context.webhookId);
        logger.error('❌ WebhookHandler: Max retry attempts reached', { 
          webhookId: context.webhookId,
          attempts: context.attempt 
        });
        
        return {
          ...result,
          error: `Max retry attempts (${context.maxAttempts}) reached`,
          details: { ...result.details, finalAttempt: context.attempt }
        };
      }

    } catch (error) {
      logger.error('❌ WebhookHandler: Webhook processing error', { 
        error, 
        webhookId: context.webhookId,
        attempt: context.attempt 
      });

      // Check if we should retry on error
      if (context.attempt < context.maxAttempts && this.isRetryableError(error)) {
        return await this.retryWebhookProcessing(webhookData, context);
      } else {
        this.processingQueue.delete(context.webhookId);
        throw error;
      }
    }
  }

  /**
   * Enhanced core webhook processing logic with card payment detection and error recovery
   * Requirement 8.1, 8.2, 8.3, 8.4: Enhanced webhook processing with card payment detection and error recovery
   */
  private async processWebhookCore(
    webhookData: IkhokhaWebhook,
    context: WebhookProcessingContext
  ): Promise<WebhookResult> {
    const processingStartTime = Date.now();
    
    try {
      // Create processing context for error recovery
      const processingContext = {
        webhookId: context.webhookId,
        transactionId: webhookData.transaction_id,
        paymentReference: webhookData.reference,
        processingStage: 'webhook_received' as const,
        attemptNumber: context.attempt,
        startTime: context.processingStarted,
        metadata: { webhookData }
      };

      // Step 1: Detect processing errors
      const errorDetection = await cardPaymentErrorRecoverySystem.detectProcessingErrors(processingContext);
      
      if (errorDetection.criticalErrors.length > 0) {
        logger.error('🚨 WebhookHandler: Critical errors detected', {
          criticalErrors: errorDetection.criticalErrors.length,
          systemHealth: errorDetection.systemHealthStatus
        });
        
        // Trigger manual intervention for critical errors
        for (const criticalError of errorDetection.criticalErrors) {
          await cardPaymentErrorRecoverySystem.triggerManualIntervention({
            id: criticalError.id,
            type: 'system_failure' as const,
            severity: 'critical' as const,
            message: criticalError.message,
            context: processingContext,
            impact: 'business_operations' as const,
            requiresImmediateAttention: true,
            escalationRequired: true,
            timestamp: new Date()
          });
        }
      }

      // Step 2: Find enrollment by transaction reference
      processingContext.processingStage = 'enrollment_lookup';
      const enrollment = await this.findEnrollmentByReference(webhookData.reference);
      
      if (!enrollment) {
        logger.warn('⚠️ WebhookHandler: No enrollment found for webhook', { 
          reference: webhookData.reference,
          transactionId: webhookData.transaction_id 
        });
        
        return {
          processed: true, // We processed it (no action needed)
          payment_updated: false,
          enrollment_updated: false,
          error: 'No enrollment found for reference',
          details: { reference: webhookData.reference }
        };
      }

      // Update processing context with enrollment info
      processingContext.enrollmentId = enrollment.id;
      processingContext.userId = enrollment.user_id;
      processingContext.courseId = enrollment.course_id;

      // Step 3: Detect payment type using PaymentTypeDetector
      processingContext.processingStage = 'payment_type_detection';
      logger.info('🔍 WebhookHandler: Detecting payment type', {
        transactionId: webhookData.transaction_id,
        enrollmentId: enrollment.id
      });

      const paymentTypeResult = paymentTypeDetector.detectPaymentType(webhookData);
      
      logger.info('✅ WebhookHandler: Payment type detected', {
        type: paymentTypeResult.type,
        confidence: Math.round(paymentTypeResult.confidence * 100) + '%',
        indicators: paymentTypeResult.indicators.length
      });

      // Step 4: Route based on payment type with enhanced validation and error recovery
      processingContext.processingStage = 'fast_track_processing';
      const enhancedResult = await this.processEnhancedPaymentRoutingWithRecovery(
        webhookData,
        enrollment,
        paymentTypeResult,
        context,
        processingContext
      );

      // Step 5: Log enhanced processing results
      processingContext.processingStage = 'audit_logging';
      await this.logEnhancedWebhookProcessing(
        webhookData,
        enrollment,
        paymentTypeResult,
        enhancedResult,
        context
      );

      // Convert enhanced result to standard WebhookResult format
      return {
        processed: enhancedResult.processed,
        payment_updated: enhancedResult.processed,
        enrollment_updated: enhancedResult.enrollmentApproved,
        details: {
          enrollmentId: enrollment.id,
          paymentType: enhancedResult.paymentType,
          confidence: enhancedResult.confidence,
          fastTrackApplied: enhancedResult.fastTrackApplied,
          accessGranted: enhancedResult.accessGranted,
          processingTimeMs: enhancedResult.processingTimeMs,
          fallbackUsed: enhancedResult.fallbackUsed,
          errorRecoveryApplied: errorDetection.recoverableErrors.length > 0
        }
      };

    } catch (error) {
      const processingTimeMs = Date.now() - processingStartTime;
      
      logger.error('❌ WebhookHandler: Enhanced core processing failed', { 
        error, 
        webhookId: context.webhookId,
        processingTimeMs
      });
      
      // Attempt fallback processing with error recovery
      const fallbackResult = await this.attemptFallbackProcessingWithRecovery(
        webhookData,
        enrollment,
        error,
        context
      );

      return fallbackResult || {
        processed: false,
        payment_updated: false,
        enrollment_updated: false,
        error: error instanceof Error ? error.message : 'Enhanced core processing failed',
        details: { 
          webhookId: context.webhookId, 
          error,
          processingTimeMs,
          fallbackAttempted: true,
          errorRecoveryAttempted: true
        }
      };
    }
  }

  /**
   * Retry webhook processing with exponential backoff
   */
  private async retryWebhookProcessing(
    webhookData: IkhokhaWebhook,
    context: WebhookProcessingContext
  ): Promise<WebhookResult> {
    // Calculate delay with exponential backoff
    const delay = Math.min(
      this.retryConfig.baseDelay * Math.pow(this.retryConfig.backoffMultiplier, context.attempt - 1),
      this.retryConfig.maxDelay
    );

    logger.info('🔄 WebhookHandler: Retrying webhook processing', { 
      webhookId: context.webhookId,
      attempt: context.attempt + 1,
      delay 
    });

    // Wait before retry
    await new Promise(resolve => setTimeout(resolve, delay));

    // Update context for retry
    context.attempt++;
    context.processingStarted = new Date();

    // Retry processing
    return await this.processWebhookWithRetry(webhookData, context);
  }

  /**
   * Validate webhook signature using HMAC
   */
  private async validateSignature(webhookData: IkhokhaWebhook, signature: string): Promise<boolean> {
    try {
      // Create payload string for signature verification
      const payload = this.createSignaturePayload(webhookData);
      
      // Use Web Crypto API for HMAC validation
      const encoder = new TextEncoder();
      const keyData = encoder.encode(ikhokhaConfig.webhook_secret);
      const messageData = encoder.encode(payload);

      // Import the key for HMAC
      const cryptoKey = await crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );

      // Calculate expected signature
      const signatureBuffer = await crypto.subtle.sign('HMAC', cryptoKey, messageData);
      const expectedSignature = Array.from(new Uint8Array(signatureBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');

      // Compare signatures (remove sha256= prefix if present)
      const providedSignature = signature.replace('sha256=', '').toLowerCase();
      
      // Constant-time comparison
      return this.constantTimeEqual(expectedSignature, providedSignature);

    } catch (error) {
      logger.error('❌ WebhookHandler: Signature validation error', { error });
      return false;
    }
  }

  /**
   * Constant-time string comparison to prevent timing attacks
   */
  private constantTimeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) {
      return false;
    }

    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }

    return result === 0;
  }

  /**
   * Create signature payload from webhook data
   */
  private createSignaturePayload(webhookData: IkhokhaWebhook): string {
    // Create consistent payload for signature verification
    const payload = {
      transaction_id: webhookData.transaction_id,
      reference: webhookData.reference,
      amount: webhookData.amount,
      currency: webhookData.currency,
      status: webhookData.status,
      timestamp: webhookData.timestamp
    };

    return JSON.stringify(payload);
  }

  /**
   * Validate webhook timestamp to prevent replay attacks
   */
  private validateTimestamp(timestamp?: string): boolean {
    if (!timestamp) return false;

    try {
      const webhookTime = new Date(timestamp);
      const currentTime = new Date();
      const timeDiff = currentTime.getTime() - webhookTime.getTime();
      
      // Allow webhooks within 5 minutes
      const maxAge = 5 * 60 * 1000; // 5 minutes in milliseconds
      
      return timeDiff >= 0 && timeDiff <= maxAge;

    } catch (error) {
      logger.error('❌ WebhookHandler: Timestamp validation error', { error, timestamp });
      return false;
    }
  }

  /**
   * Validate webhook source
   */
  private validateWebhookSource(webhookData: IkhokhaWebhook): boolean {
    // Validate required fields are present
    const requiredFields = ['transaction_id', 'reference', 'amount', 'currency', 'status', 'timestamp'];
    
    for (const field of requiredFields) {
      if (!webhookData[field as keyof IkhokhaWebhook]) {
        logger.warn('⚠️ WebhookHandler: Missing required field', { field });
        return false;
      }
    }

    // Validate transaction ID format (basic validation)
    if (!/^[a-zA-Z0-9_-]+$/.test(webhookData.transaction_id)) {
      logger.warn('⚠️ WebhookHandler: Invalid transaction ID format', { 
        transactionId: webhookData.transaction_id 
      });
      return false;
    }

    return true;
  }

  /**
   * Validate webhook content structure
   */
  private validateWebhookContent(webhookData: IkhokhaWebhook): boolean {
    try {
      // Validate amount is positive number
      if (typeof webhookData.amount !== 'number' || webhookData.amount <= 0) {
        return false;
      }

      // Validate currency is valid
      if (!webhookData.currency || webhookData.currency.length !== 3) {
        return false;
      }

      // Validate status is valid
      const validStatuses = ['completed', 'failed', 'cancelled'];
      if (!validStatuses.includes(webhookData.status)) {
        return false;
      }

      // Validate response code exists
      if (!webhookData.response_code) {
        return false;
      }

      return true;

    } catch (error) {
      logger.error('❌ WebhookHandler: Content validation error', { error });
      return false;
    }
  }

  /**
   * Find enrollment by payment reference
   */
  private async findEnrollmentByReference(reference: string): Promise<any> {
    try {
      const { data: enrollment, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('payment_reference', reference)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        throw new Error(`Database error: ${error.message}`);
      }

      return enrollment;

    } catch (error) {
      logger.error('❌ WebhookHandler: Failed to find enrollment', { error, reference });
      throw error;
    }
  }

  /**
   * Convert webhook data to payment result format
   */
  private convertWebhookToPaymentResult(webhookData: IkhokhaWebhook): PaymentResult {
    const success = webhookData.status === 'completed';
    
    return {
      success,
      payment_id: webhookData.transaction_id,
      transaction_id: webhookData.transaction_id,
      status: this.mapWebhookStatusToPaymentStatus(webhookData.status),
      amount: webhookData.amount,
      currency: webhookData.currency,
      reference: webhookData.reference,
      message: webhookData.response_message || (success ? 'Payment completed' : 'Payment failed'),
      error: success ? undefined : {
        code: webhookData.response_code,
        message: webhookData.response_message || 'Payment failed'
      },
      ikhokha_response: {
        success,
        data: webhookData
      }
    };
  }

  /**
   * Map webhook status to payment status
   */
  private mapWebhookStatusToPaymentStatus(webhookStatus: string): PaymentStatus {
    switch (webhookStatus) {
      case 'completed':
        return PaymentStatus.COMPLETED;
      case 'failed':
        return PaymentStatus.FAILED;
      case 'cancelled':
        return PaymentStatus.CANCELLED;
      default:
        return PaymentStatus.FAILED;
    }
  }

  /**
   * Sync status updates in real-time
   * Requirement 8.3: Automatic enrollment approval for successful card payments
   */
  private async syncStatusUpdates(
    enrollment: any,
    paymentResult: PaymentResult,
    routingResult: any
  ): Promise<void> {
    try {
      // Sync payment status
      await realTimePaymentSync.syncPaymentStatus(
        paymentResult.payment_id!,
        paymentResult.status
      );

      // Sync enrollment status if it was updated
      if (routingResult.success && routingResult.approved) {
        await realTimePaymentSync.syncEnrollmentStatus(
          enrollment.id,
          EnrollmentStatus.APPROVED
        );
      }

      logger.info('✅ WebhookHandler: Status updates synced', { 
        enrollmentId: enrollment.id,
        paymentStatus: paymentResult.status,
        approved: routingResult.approved 
      });

    } catch (error) {
      logger.error('❌ WebhookHandler: Failed to sync status updates', { 
        error, 
        enrollmentId: enrollment.id 
      });
      // Don't throw - sync failure shouldn't break webhook processing
    }
  }

  /**
   * Log webhook processing for audit trail
   */
  private async logWebhookProcessing(
    webhookData: IkhokhaWebhook,
    enrollment: any,
    routingResult: any,
    context: WebhookProcessingContext
  ): Promise<void> {
    try {
      const logEntry = {
        webhook_id: context.webhookId,
        transaction_id: webhookData.transaction_id,
        enrollment_id: enrollment.id,
        user_id: enrollment.user_id,
        course_id: enrollment.course_id,
        webhook_status: webhookData.status,
        processing_result: routingResult.success ? 'success' : 'failed',
        approved: routingResult.approved,
        access_granted: routingResult.accessGranted,
        attempts: context.attempt,
        processing_time_ms: Date.now() - context.processingStarted.getTime(),
        created_at: new Date().toISOString()
      };

      // Log to database for audit trail
      const { error } = await supabase
        .from('webhook_processing_log')
        .insert(logEntry);

      if (error) {
        logger.error('❌ WebhookHandler: Failed to log webhook processing', { error });
      }

    } catch (error) {
      logger.error('❌ WebhookHandler: Audit logging failed', { error });
      // Don't throw - logging failure shouldn't break webhook processing
    }
  }

  /**
   * Check if error is retryable
   */
  private isRetryableError(error: any): boolean {
    // Network errors are retryable
    if (error.code === 'NETWORK_ERROR' || error.code === 'TIMEOUT') {
      return true;
    }

    // Database connection errors are retryable
    if (error.message?.includes('connection') || error.message?.includes('timeout')) {
      return true;
    }

    // Temporary service unavailable errors are retryable
    if (error.code === 'SERVICE_UNAVAILABLE' || error.code === 'RATE_LIMITED') {
      return true;
    }

    // Validation errors are not retryable
    if (error instanceof WebhookValidationError) {
      return false;
    }

    // Unknown errors are not retryable by default
    return false;
  }

  /**
   * Validate production configuration
   */
  private validateProductionConfig(): void {
    if (!ikhokhaConfig.webhook_secret) {
      throw new IkhokhaError(
        'Webhook secret not configured for production',
        'CONFIGURATION_ERROR'
      );
    }

    if (ikhokhaConfig.test_mode) {
      throw new IkhokhaError(
        'Test mode must be disabled in production',
        'CONFIGURATION_ERROR'
      );
    }

    if (!ikhokhaConfig.api_url.startsWith('https://')) {
      throw new IkhokhaError(
        'Production must use HTTPS endpoints',
        'CONFIGURATION_ERROR'
      );
    }
  }

  /**
   * Get webhook processing statistics
   */
  getProcessingStats(): {
    queueSize: number;
    totalProcessed: number;
    successRate: number;
    averageProcessingTime: number;
  } {
    // This would be implemented with proper metrics collection
    return {
      queueSize: this.processingQueue.size,
      totalProcessed: 0, // Would track this
      successRate: 0, // Would calculate this
      averageProcessingTime: 0 // Would calculate this
    };
  }

  /**
   * Process enhanced payment routing with error recovery
   */
  private async processEnhancedPaymentRoutingWithRecovery(
    webhookData: IkhokhaWebhook,
    enrollment: any,
    paymentTypeResult: any,
    context: WebhookProcessingContext,
    processingContext: any
  ): Promise<EnhancedWebhookProcessingResult> {
    try {
      // Attempt normal enhanced payment routing
      return await this.processEnhancedPaymentRouting(
        webhookData,
        enrollment,
        paymentTypeResult,
        context
      );
    } catch (error) {
      logger.warn('⚠️ WebhookHandler: Enhanced payment routing failed, attempting recovery', { error });
      
      // Create failed operation for fallback
      const failedOperation = {
        operationType: 'webhook_processing' as const,
        context: processingContext,
        error: {
          id: `error_${Date.now()}`,
          type: 'fast_track_processing_error' as const,
          severity: 'high' as const,
          message: error instanceof Error ? error.message : 'Enhanced payment routing failed',
          details: { originalError: error },
          timestamp: new Date(),
          context: processingContext,
          recoverable: true,
          retryCount: 0,
          maxRetries: 3
        },
        attemptedRecoveries: [],
        timestamp: new Date()
      };

      // Execute fallback mechanism
      const fallbackResult = await cardPaymentErrorRecoverySystem.executeFallbackMechanism(failedOperation);
      
      return {
        processed: fallbackResult.success,
        paymentTypeDetected: true,
        paymentType: paymentTypeResult.type,
        confidence: paymentTypeResult.confidence,
        fastTrackApplied: false,
        enrollmentApproved: fallbackResult.enrollmentStatus === 'approved',
        accessGranted: fallbackResult.accessGranted,
        fallbackUsed: true,
        processingTimeMs: fallbackResult.executionTime,
        error: fallbackResult.success ? undefined : 'Fallback processing failed',
        details: {
          fallbackMechanism: fallbackResult.mechanism,
          manualApprovalTriggered: fallbackResult.manualApprovalTriggered,
          fallbackDetails: fallbackResult.details
        }
      };
    }
  }

  /**
   * Process enhanced payment routing (original method)
   */
  private async processEnhancedPaymentRouting(
    webhookData: IkhokhaWebhook,
    enrollment: any,
    paymentTypeResult: any,
    context: WebhookProcessingContext
  ): Promise<EnhancedWebhookProcessingResult> {
    const startTime = Date.now();
    
    try {
      // Convert webhook to payment result
      const paymentResult = this.convertWebhookToPaymentResult(webhookData);
      
      // Route based on payment type
      let routingResult;
      if (paymentTypeResult.type === 'card' && paymentTypeResult.confidence > 0.6) {
        // Use card payment fast-track
        const enrollmentData = {
          id: enrollment.id,
          user_id: enrollment.user_id,
          user_email: enrollment.user_email,
          course_id: enrollment.course_id,
          course_title: enrollment.course_title,
          status: enrollment.status,
          payment_type: 'card' as const,
          payment_status: paymentResult.status,
          payment_reference: webhookData.reference,
          ikhokha_transaction_id: webhookData.transaction_id,
          created_at: new Date(enrollment.created_at),
          updated_at: new Date(),
          course_access_granted: false
        };

        const fastTrackResult = await cardPaymentFastTrack.processCardPayment(webhookData, enrollmentData);
        
        routingResult = {
          success: fastTrackResult.success,
          approved: fastTrackResult.enrollmentApproved,
          accessGranted: fastTrackResult.accessGranted,
          fastTrackApplied: true,
          processingTimeMs: fastTrackResult.processingTimeMs
        };
      } else {
        // Use existing payment method router for EFT or unknown payments
        routingResult = await paymentMethodRouter.routePayment(paymentResult, enrollment);
        routingResult.fastTrackApplied = false;
      }

      // Sync status updates
      await this.syncStatusUpdates(enrollment, paymentResult, routingResult);

      return {
        processed: routingResult.success,
        paymentTypeDetected: true,
        paymentType: paymentTypeResult.type,
        confidence: paymentTypeResult.confidence,
        fastTrackApplied: routingResult.fastTrackApplied,
        enrollmentApproved: routingResult.approved,
        accessGranted: routingResult.accessGranted,
        fallbackUsed: false,
        processingTimeMs: Date.now() - startTime,
        details: {
          paymentTypeIndicators: paymentTypeResult.indicators.length,
          routingResult
        }
      };

    } catch (error) {
      logger.error('❌ WebhookHandler: Enhanced payment routing failed', { error });
      throw error;
    }
  }

  /**
   * Attempt fallback processing with error recovery
   */
  private async attemptFallbackProcessingWithRecovery(
    webhookData: IkhokhaWebhook,
    enrollment: any,
    error: any,
    context: WebhookProcessingContext
  ): Promise<WebhookResult | null> {
    try {
      logger.info('🔄 WebhookHandler: Attempting fallback processing with error recovery', {
        webhookId: context.webhookId,
        error: error instanceof Error ? error.message : String(error)
      });

      // Create processing context for error recovery
      const processingContext = {
        webhookId: context.webhookId,
        enrollmentId: enrollment?.id,
        userId: enrollment?.user_id,
        courseId: enrollment?.course_id,
        transactionId: webhookData.transaction_id,
        paymentReference: webhookData.reference,
        processingStage: 'completion' as const,
        attemptNumber: context.attempt,
        startTime: context.processingStarted,
        metadata: { originalError: error }
      };

      // Create failed operation
      const failedOperation = {
        operationType: 'webhook_processing' as const,
        context: processingContext,
        error: {
          id: `error_${Date.now()}`,
          type: 'webhook_validation_error' as const,
          severity: 'high' as const,
          message: error instanceof Error ? error.message : 'Webhook processing failed',
          details: { originalError: error },
          timestamp: new Date(),
          context: processingContext,
          recoverable: true,
          retryCount: 0,
          maxRetries: 3
        },
        attemptedRecoveries: [],
        timestamp: new Date()
      };

      // Execute fallback mechanism
      const fallbackResult = await cardPaymentErrorRecoverySystem.executeFallbackMechanism(failedOperation);

      if (fallbackResult.success) {
        return {
          processed: true,
          payment_updated: false,
          enrollment_updated: fallbackResult.enrollmentStatus === 'approved',
          details: {
            fallbackUsed: true,
            fallbackMechanism: fallbackResult.mechanism,
            manualApprovalTriggered: fallbackResult.manualApprovalTriggered,
            enrollmentStatus: fallbackResult.enrollmentStatus,
            accessGranted: fallbackResult.accessGranted
          }
        };
      }

      return null;

    } catch (fallbackError) {
      logger.error('❌ WebhookHandler: Fallback processing with recovery failed', { 
        fallbackError,
        originalError: error 
      });
      return null;
    }
  }

  /**
   * Log enhanced webhook processing results
   */
  private async logEnhancedWebhookProcessing(
    webhookData: IkhokhaWebhook,
    enrollment: any,
    paymentTypeResult: any,
    enhancedResult: EnhancedWebhookProcessingResult,
    context: WebhookProcessingContext
  ): Promise<void> {
    try {
      const logEntry = {
        webhook_id: context.webhookId,
        transaction_id: webhookData.transaction_id,
        enrollment_id: enrollment?.id,
        user_id: enrollment?.user_id,
        course_id: enrollment?.course_id,
        webhook_status: webhookData.status,
        payment_type_detected: paymentTypeResult.type,
        payment_type_confidence: paymentTypeResult.confidence,
        processing_result: enhancedResult.processed ? 'success' : 'failed',
        fast_track_applied: enhancedResult.fastTrackApplied,
        enrollment_approved: enhancedResult.enrollmentApproved,
        access_granted: enhancedResult.accessGranted,
        fallback_used: enhancedResult.fallbackUsed,
        attempts: context.attempt,
        processing_time_ms: enhancedResult.processingTimeMs,
        error_message: enhancedResult.error,
        details: JSON.stringify(enhancedResult.details),
        created_at: new Date().toISOString()
      };

      // Log to enhanced webhook processing log table
      const { error } = await supabase
        .from('webhook_processing_log')
        .insert(logEntry);

      if (error) {
        logger.error('❌ WebhookHandler: Failed to log enhanced webhook processing', { error });
      } else {
        logger.info('📋 WebhookHandler: Enhanced webhook processing logged', {
          webhookId: context.webhookId,
          processed: enhancedResult.processed,
          fastTrackApplied: enhancedResult.fastTrackApplied
        });
      }

    } catch (error) {
      logger.error('❌ WebhookHandler: Enhanced audit logging failed', { error });
    }
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    this.processingQueue.clear();
    this.isInitialized = false;
  }
}

// Export singleton instance
export const webhookHandler = WebhookHandler.getInstance();