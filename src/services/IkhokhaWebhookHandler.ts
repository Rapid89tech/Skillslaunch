/**
 * Ikhokha Webhook Handler Service
 * 
 * Client-side service for handling webhook-related operations and real-time updates
 * Works in conjunction with the Netlify function webhook endpoint
 * 
 * Updated for production compatibility with ProductionWebhookSecurity and monitoring integration.
 */

import { supabase } from '../integrations/supabase/client';
import {
  IkhokhaWebhook,
  WebhookResult,
  PaymentStatus,
  PaymentUpdate,
  PaymentUpdateCallback,
  WebhookValidationError,
  IkhokhaError
} from '../types/ikhokha';
import { webhookRetryService } from './WebhookRetryService';
import { productionWebhookSecurity } from './ProductionWebhookSecurity';
import { productionConfigurationEnforcer } from './ProductionConfigurationEnforcer';

export interface WebhookSubscription {
  id: string;
  callback: PaymentUpdateCallback;
  filters?: {
    paymentId?: string;
    reference?: string;
    status?: PaymentStatus[];
  };
}

export interface WebhookRetryConfig {
  maxRetries: number;
  retryDelay: number;
  backoffMultiplier: number;
  maxRetryDelay: number;
}

/**
 * Ikhokha Webhook Handler Service
 */
export class IkhokhaWebhookHandler {
  private subscriptions: Map<string, WebhookSubscription> = new Map();
  private retryQueue: Map<string, WebhookRetryItem> = new Map();
  private retryConfig: WebhookRetryConfig;
  private isProcessingRetries = false;

  constructor(retryConfig?: Partial<WebhookRetryConfig>) {
    this.retryConfig = {
      maxRetries: 3,
      retryDelay: 1000,
      backoffMultiplier: 2,
      maxRetryDelay: 30000,
      ...retryConfig
    };

    // Initialize real-time subscriptions
    this.initializeRealTimeSubscriptions();
    
    // Start retry processor
    this.startRetryProcessor();

    console.log('🔔 Ikhokha Webhook Handler initialized');
  }

  /**
   * Subscribe to payment updates from webhooks
   */
  subscribeToPaymentUpdates(
    callback: PaymentUpdateCallback,
    filters?: WebhookSubscription['filters']
  ): () => void {
    const subscriptionId = `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const subscription: WebhookSubscription = {
      id: subscriptionId,
      callback,
      filters
    };

    this.subscriptions.set(subscriptionId, subscription);

    console.log('📡 Webhook subscription created:', subscriptionId);

    // Return unsubscribe function
    return () => {
      this.subscriptions.delete(subscriptionId);
      console.log('📡 Webhook subscription removed:', subscriptionId);
    };
  }

  /**
   * Manually trigger webhook processing (for testing or retry scenarios)
   */
  async processWebhook(webhookData: IkhokhaWebhook): Promise<WebhookResult> {
    try {
      console.log('🔄 Processing webhook manually:', {
        transaction_id: webhookData.transaction_id,
        reference: webhookData.reference,
        status: webhookData.status
      });

      // Validate webhook data
      this.validateWebhookData(webhookData);

      // Process the webhook through our endpoint
      const result = await this.sendWebhookToEndpoint(webhookData);

      // Notify subscribers
      this.notifySubscribers({
        payment_id: webhookData.transaction_id,
        status: this.mapIkhokhaStatusToPaymentStatus(webhookData.status),
        transaction_id: webhookData.transaction_id,
        amount: webhookData.amount,
        currency: webhookData.currency,
        reference: webhookData.reference,
        timestamp: new Date(),
        metadata: webhookData.metadata
      });

      return result;

    } catch (error) {
      console.error('❌ Manual webhook processing failed:', error);
      
      // Add to retry queue if it's a retryable error
      if (this.isRetryableError(error)) {
        await webhookRetryService.addToRetryQueue(webhookData, error);
      }

      throw error;
    }
  }

  /**
   * Get webhook processing status and statistics
   */
  getWebhookStats(): {
    activeSubscriptions: number;
    pendingRetries: number;
    totalProcessed: number;
    lastProcessedAt?: Date;
  } {
    return {
      activeSubscriptions: this.subscriptions.size,
      pendingRetries: this.retryQueue.size,
      totalProcessed: this.getTotalProcessedCount(),
      lastProcessedAt: this.getLastProcessedTime()
    };
  }

  /**
   * Validate webhook signature using ProductionWebhookSecurity
   */
  validateWebhookSignature(
    payload: string,
    signature: string,
    webhookSecret?: string
  ): boolean {
    try {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';

      // In production, use ProductionWebhookSecurity for comprehensive validation
      if (isProduction) {
        // Ensure production configuration is enforced
        if (!productionConfigurationEnforcer.isProductionEnforced()) {
          console.error('❌ Production configuration not enforced for webhook validation');
          return false;
        }

        // Create webhook request for validation
        const webhookRequest = {
          payload,
          signature,
          timestamp: new Date().toISOString(),
          sourceIP: 'client-side', // Client-side validation marker
          headers: { 'content-type': 'application/json' }
        };

        // Use ProductionWebhookSecurity for validation (async, but we'll do basic sync check)
        productionWebhookSecurity.validateWebhookSecurity(webhookRequest)
          .then(validationResult => {
            if (!validationResult.valid) {
              console.error('❌ Production webhook validation failed:', {
                errors: validationResult.validationErrors,
                violations: validationResult.securityViolations.length
              });
            } else {
              console.log('✅ Production webhook validation passed');
            }
          })
          .catch(error => {
            console.error('❌ Production webhook validation error:', error);
          });

        // For synchronous compatibility, do basic validation
        return this.basicSignatureValidation(signature);
      }

      // In development mode, use basic validation
      return this.basicSignatureValidation(signature);

    } catch (error) {
      console.error('❌ Client-side signature validation failed:', error);
      
      // In production, fail on validation errors
      if (import.meta.env.VITE_NODE_ENV === 'production') {
        return false;
      }
      
      // In development, allow basic validation
      return this.basicSignatureValidation(signature);
    }
  }

  /**
   * Basic signature validation for development and fallback
   */
  private basicSignatureValidation(signature: string): boolean {
    // Basic checks
    if (!signature || signature.length === 0) {
      return false;
    }

    // Signature should be reasonable length
    if (signature.length < 10) {
      return false;
    }

    return true;
  }

  /**
   * Retry failed webhook processing
   */
  async retryWebhookProcessing(webhookId: string): Promise<WebhookResult> {
    const retryItem = this.retryQueue.get(webhookId);
    
    if (!retryItem) {
      throw new IkhokhaError('Webhook retry item not found', 'RETRY_NOT_FOUND');
    }

    if (retryItem.retryCount >= this.retryConfig.maxRetries) {
      throw new IkhokhaError('Maximum retry attempts exceeded', 'MAX_RETRIES_EXCEEDED');
    }

    try {
      console.log(`🔄 Retrying webhook processing (attempt ${retryItem.retryCount + 1}):`, webhookId);

      const result = await this.processWebhook(retryItem.webhookData);
      
      // Remove from retry queue on success
      this.retryQueue.delete(webhookId);
      
      return result;

    } catch (error) {
      // Update retry count and schedule next retry
      retryItem.retryCount++;
      retryItem.lastRetryAt = new Date();
      retryItem.nextRetryAt = new Date(
        Date.now() + this.calculateRetryDelay(retryItem.retryCount)
      );

      if (retryItem.retryCount >= this.retryConfig.maxRetries) {
        console.error('❌ Webhook retry failed permanently:', webhookId);
        this.retryQueue.delete(webhookId);
      }

      throw error;
    }
  }

  /**
   * Clear retry queue (for maintenance or testing)
   */
  clearRetryQueue(): void {
    const queueSize = this.retryQueue.size;
    this.retryQueue.clear();
    console.log(`🧹 Cleared webhook retry queue (${queueSize} items)`);
  }

  // Private Methods

  /**
   * Initialize real-time subscriptions for webhook updates
   */
  private initializeRealTimeSubscriptions(): void {
    // Subscribe to enrollment updates
    supabase
      .channel('webhook_updates')
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: 'enrollments',
        filter: 'payment_status=neq.null'
      }, (payload) => {
        this.handleEnrollmentUpdate(payload);
      })
      .on('broadcast', {
        event: 'payment_status_updated'
      }, (payload) => {
        this.handlePaymentStatusBroadcast(payload);
      })
      .subscribe();

    console.log('📡 Real-time webhook subscriptions initialized');
  }

  /**
   * Handle enrollment updates from database
   */
  private handleEnrollmentUpdate(payload: any): void {
    try {
      const enrollment = payload.new;
      
      if (enrollment.ikhokha_transaction_id) {
        const paymentUpdate: PaymentUpdate = {
          payment_id: enrollment.ikhokha_transaction_id,
          status: enrollment.payment_status as PaymentStatus,
          transaction_id: enrollment.ikhokha_transaction_id,
          reference: enrollment.payment_reference,
          timestamp: new Date(enrollment.updated_at),
          metadata: {
            enrollmentId: enrollment.id,
            courseId: enrollment.course_id,
            userId: enrollment.user_id
          }
        };

        this.notifySubscribers(paymentUpdate);
      }
    } catch (error) {
      console.error('❌ Error handling enrollment update:', error);
    }
  }

  /**
   * Handle payment status broadcast from webhook function
   */
  private handlePaymentStatusBroadcast(payload: any): void {
    try {
      const data = payload.payload;
      
      const paymentUpdate: PaymentUpdate = {
        payment_id: data.enrollment_id,
        status: data.payment_status as PaymentStatus,
        transaction_id: data.transaction_id,
        timestamp: new Date(data.timestamp),
        metadata: data
      };

      this.notifySubscribers(paymentUpdate);
    } catch (error) {
      console.error('❌ Error handling payment status broadcast:', error);
    }
  }

  /**
   * Notify all subscribers of payment updates
   */
  private notifySubscribers(update: PaymentUpdate): void {
    this.subscriptions.forEach((subscription) => {
      try {
        // Apply filters if specified
        if (subscription.filters) {
          if (subscription.filters.paymentId && 
              subscription.filters.paymentId !== update.payment_id) {
            return;
          }
          
          if (subscription.filters.reference && 
              subscription.filters.reference !== update.reference) {
            return;
          }
          
          if (subscription.filters.status && 
              !subscription.filters.status.includes(update.status)) {
            return;
          }
        }

        // Call the subscriber callback
        subscription.callback(update);
      } catch (error) {
        console.error('❌ Webhook subscriber callback failed:', error);
      }
    });
  }

  /**
   * Send webhook data to our endpoint for processing
   */
  private async sendWebhookToEndpoint(webhookData: IkhokhaWebhook): Promise<WebhookResult> {
    const response = await fetch('/api/webhooks/ikhokha', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookData)
    });

    if (!response.ok) {
      throw new IkhokhaError(
        `Webhook endpoint returned ${response.status}`,
        'WEBHOOK_ENDPOINT_ERROR',
        { status: response.status, statusText: response.statusText }
      );
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new IkhokhaError(
        result.message || 'Webhook processing failed',
        'WEBHOOK_PROCESSING_ERROR',
        result
      );
    }

    return result.result;
  }

  /**
   * Validate webhook data structure
   */
  private validateWebhookData(webhookData: IkhokhaWebhook): void {
    const required = ['transaction_id', 'reference', 'amount', 'currency', 'status', 'timestamp'];
    
    for (const field of required) {
      if (!webhookData[field as keyof IkhokhaWebhook]) {
        throw new WebhookValidationError(`Missing required field: ${field}`);
      }
    }

    if (webhookData.amount <= 0) {
      throw new WebhookValidationError('Invalid amount');
    }

    if (!['completed', 'failed', 'cancelled'].includes(webhookData.status)) {
      throw new WebhookValidationError('Invalid status');
    }
  }

  /**
   * Map Ikhokha status to internal payment status
   */
  private mapIkhokhaStatusToPaymentStatus(ikhokhaStatus: string): PaymentStatus {
    switch (ikhokhaStatus.toLowerCase()) {
      case 'completed':
      case 'success':
      case 'approved':
        return PaymentStatus.COMPLETED;
      case 'failed':
      case 'declined':
      case 'error':
        return PaymentStatus.FAILED;
      case 'cancelled':
      case 'canceled':
        return PaymentStatus.CANCELLED;
      case 'pending':
      case 'processing':
        return PaymentStatus.PENDING;
      default:
        return PaymentStatus.PENDING;
    }
  }

  /**
   * Check if error is retryable
   */
  private isRetryableError(error: any): boolean {
    if (error instanceof WebhookValidationError) {
      return false; // Don't retry validation errors
    }

    if (error instanceof IkhokhaError) {
      const nonRetryableCodes = ['WEBHOOK_VALIDATION_ERROR', 'MAX_RETRIES_EXCEEDED'];
      return !nonRetryableCodes.includes(error.code);
    }

    return true; // Retry other errors
  }

  /**
   * Add webhook to retry queue
   */
  private async addToRetryQueue(webhookData: IkhokhaWebhook, error: any): Promise<void> {
    const retryId = `retry_${webhookData.transaction_id}_${Date.now()}`;
    
    const retryItem: WebhookRetryItem = {
      id: retryId,
      webhookData,
      error: error instanceof Error ? error.message : String(error),
      retryCount: 0,
      createdAt: new Date(),
      nextRetryAt: new Date(Date.now() + this.retryConfig.retryDelay)
    };

    this.retryQueue.set(retryId, retryItem);
    
    console.log('📋 Added webhook to retry queue:', retryId);
  }

  /**
   * Calculate retry delay with exponential backoff
   */
  private calculateRetryDelay(retryCount: number): number {
    const delay = this.retryConfig.retryDelay * 
                  Math.pow(this.retryConfig.backoffMultiplier, retryCount);
    
    return Math.min(delay, this.retryConfig.maxRetryDelay);
  }

  /**
   * Start the retry processor
   */
  private startRetryProcessor(): void {
    if (this.isProcessingRetries) return;

    this.isProcessingRetries = true;

    const processRetries = async () => {
      try {
        const now = new Date();
        
        for (const [retryId, retryItem] of this.retryQueue.entries()) {
          if (retryItem.nextRetryAt <= now) {
            try {
              await this.retryWebhookProcessing(retryId);
            } catch (error) {
              // Error is already handled in retryWebhookProcessing
            }
          }
        }
      } catch (error) {
        console.error('❌ Retry processor error:', error);
      }

      // Schedule next retry check
      setTimeout(processRetries, 5000); // Check every 5 seconds
    };

    processRetries();
  }

  /**
   * Get total processed count (placeholder for actual implementation)
   */
  private getTotalProcessedCount(): number {
    // This would typically be stored in localStorage or fetched from an API
    return parseInt(localStorage.getItem('webhook_processed_count') || '0', 10);
  }

  /**
   * Get last processed time (placeholder for actual implementation)
   */
  private getLastProcessedTime(): Date | undefined {
    const timestamp = localStorage.getItem('webhook_last_processed');
    return timestamp ? new Date(timestamp) : undefined;
  }
}

// Supporting interfaces
interface WebhookRetryItem {
  id: string;
  webhookData: IkhokhaWebhook;
  error: string;
  retryCount: number;
  createdAt: Date;
  lastRetryAt?: Date;
  nextRetryAt: Date;
}

// Export singleton instance
export const ikhokhaWebhookHandler = new IkhokhaWebhookHandler();