/**
 * Production Webhook Service
 * 
 * Handles production-specific webhook configuration and validation
 * Ensures webhooks are properly configured for real payment processing
 */

import { IkhokhaWebhook, WebhookResult, IkhokhaError } from '../types/ikhokha';
import { ikhokhaConfig } from '../config/ikhokha';

export interface WebhookEndpointConfig {
  url: string;
  secret: string;
  enabled: boolean;
  retryConfig: {
    maxRetries: number;
    retryDelay: number;
    backoffMultiplier: number;
  };
}

export interface WebhookSecurityConfig {
  requireSignature: boolean;
  allowedIPs: string[];
  rateLimitPerMinute: number;
  timestampToleranceMs: number;
}

export interface ProductionWebhookStatus {
  configured: boolean;
  endpoint: string;
  securityEnabled: boolean;
  lastWebhookReceived?: Date;
  totalWebhooksProcessed: number;
  failedWebhooks: number;
  issues: string[];
}

/**
 * Production Webhook Service
 */
export class ProductionWebhookService {
  private config: WebhookEndpointConfig;
  private securityConfig: WebhookSecurityConfig;
  private stats = {
    totalProcessed: 0,
    successfulProcessed: 0,
    failedProcessed: 0,
    lastProcessedAt: null as Date | null
  };

  constructor() {
    this.config = this.loadWebhookConfig();
    this.securityConfig = this.loadSecurityConfig();
    
    this.validateProductionSetup();
    
    console.log('🔔 Production Webhook Service initialized');
  }

  /**
   * Configure production webhook endpoint
   */
  configureProductionWebhook(): WebhookEndpointConfig {
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
    
    if (!isProduction) {
      throw new IkhokhaError(
        'Production webhook configuration can only be used in production environment',
        'INVALID_ENVIRONMENT'
      );
    }

    // Get production domain
    const productionDomain = this.getProductionDomain();
    
    // Configure webhook endpoint
    const webhookEndpoint = `${productionDomain}/.netlify/functions/ikhokha-webhook`;
    
    const config: WebhookEndpointConfig = {
      url: webhookEndpoint,
      secret: ikhokhaConfig.webhook_secret,
      enabled: true,
      retryConfig: {
        maxRetries: 5,
        retryDelay: 2000,
        backoffMultiplier: 2
      }
    };

    console.log('🔧 Production webhook configured:', {
      url: config.url,
      enabled: config.enabled,
      hasSecret: !!config.secret
    });

    return config;
  }

  /**
   * Validate webhook signature for production security
   */
  async validateProductionWebhookSignature(
    payload: string,
    signature: string,
    timestamp: string
  ): Promise<boolean> {
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
    
    // In production, signature validation is MANDATORY
    if (isProduction && !signature) {
      console.error('❌ Missing webhook signature in production');
      return false;
    }

    // Validate timestamp to prevent replay attacks
    if (!this.validateTimestamp(timestamp)) {
      console.error('❌ Webhook timestamp validation failed');
      return false;
    }

    // In development, allow bypassing signature validation
    if (!isProduction && !signature) {
      console.warn('⚠️ Webhook signature validation skipped (development mode)');
      return true;
    }

    try {
      // Use the Netlify function's signature validation
      // This is a client-side check - the actual validation happens server-side
      return this.performSignatureValidation(payload, signature);
    } catch (error) {
      console.error('❌ Webhook signature validation error:', error);
      return false;
    }
  }

  /**
   * Process webhook with production-specific handling
   */
  async processProductionWebhook(webhookData: IkhokhaWebhook): Promise<WebhookResult> {
    const startTime = Date.now();
    
    try {
      console.log('🔄 Processing production webhook:', {
        transaction_id: webhookData.transaction_id,
        reference: webhookData.reference,
        status: webhookData.status,
        amount: webhookData.amount
      });

      // Validate webhook data for production
      this.validateProductionWebhookData(webhookData);

      // Send to Netlify function for processing
      const result = await this.sendToNetlifyFunction(webhookData);

      // Update statistics
      this.updateStats(true, Date.now() - startTime);

      // Log successful processing
      console.log('✅ Production webhook processed successfully:', {
        transaction_id: webhookData.transaction_id,
        processing_time: Date.now() - startTime,
        result: result.processed
      });

      return result;

    } catch (error) {
      // Update statistics
      this.updateStats(false, Date.now() - startTime);

      console.error('❌ Production webhook processing failed:', error);
      
      // Return failed result
      return {
        processed: false,
        payment_updated: false,
        enrollment_updated: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get production webhook status
   */
  getProductionWebhookStatus(): ProductionWebhookStatus {
    const issues: string[] = [];
    
    // Check configuration
    if (!this.config.enabled) {
      issues.push('Webhook endpoint is disabled');
    }
    
    if (!this.config.secret) {
      issues.push('Webhook secret is not configured');
    }
    
    if (!this.config.url.startsWith('https://')) {
      issues.push('Webhook URL must use HTTPS in production');
    }

    // Check security configuration
    if (!this.securityConfig.requireSignature) {
      issues.push('Signature validation is disabled');
    }

    return {
      configured: this.config.enabled && !!this.config.secret,
      endpoint: this.config.url,
      securityEnabled: this.securityConfig.requireSignature,
      lastWebhookReceived: this.stats.lastProcessedAt,
      totalWebhooksProcessed: this.stats.totalProcessed,
      failedWebhooks: this.stats.failedProcessed,
      issues
    };
  }

  /**
   * Test webhook endpoint connectivity
   */
  async testWebhookEndpoint(): Promise<{
    reachable: boolean;
    responseTime: number;
    error?: string;
  }> {
    const startTime = Date.now();
    
    try {
      const response = await fetch(this.config.url, {
        method: 'GET',
        headers: {
          'User-Agent': 'BetaSkill-Webhook-Test/1.0'
        }
      });

      const responseTime = Date.now() - startTime;

      return {
        reachable: response.status === 405, // Should return 405 for GET requests
        responseTime,
        error: response.status !== 405 ? `Unexpected status: ${response.status}` : undefined
      };

    } catch (error) {
      return {
        reachable: false,
        responseTime: Date.now() - startTime,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Configure automatic enrollment activation on successful payment
   */
  configureEnrollmentActivation(): {
    enabled: boolean;
    autoApprove: boolean;
    notificationEnabled: boolean;
  } {
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
    
    return {
      enabled: true,
      autoApprove: isProduction, // Auto-approve in production for successful payments
      notificationEnabled: true
    };
  }

  // Private Methods

  /**
   * Load webhook configuration
   */
  private loadWebhookConfig(): WebhookEndpointConfig {
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
    const productionDomain = this.getProductionDomain();
    
    return {
      url: isProduction 
        ? `${productionDomain}/.netlify/functions/ikhokha-webhook`
        : 'http://localhost:3000/api/webhooks/ikhokha',
      secret: ikhokhaConfig.webhook_secret,
      enabled: true,
      retryConfig: {
        maxRetries: isProduction ? 5 : 3,
        retryDelay: isProduction ? 2000 : 1000,
        backoffMultiplier: 2
      }
    };
  }

  /**
   * Load security configuration
   */
  private loadSecurityConfig(): WebhookSecurityConfig {
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
    
    return {
      requireSignature: isProduction, // Always require signature in production
      allowedIPs: [], // Empty means allow all IPs
      rateLimitPerMinute: isProduction ? 60 : 120,
      timestampToleranceMs: 300000 // 5 minutes
    };
  }

  /**
   * Get production domain
   */
  private getProductionDomain(): string {
    // Try to get from environment variables
    const productionUrl = import.meta.env.VITE_PRODUCTION_URL || 
                         import.meta.env.VITE_APP_URL;
    
    if (productionUrl) {
      return productionUrl;
    }
    
    // Fallback to current origin if available
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    
    // Default production domain
    return 'https://app.betaskill.com';
  }

  /**
   * Validate production setup
   */
  private validateProductionSetup(): void {
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
    
    if (!isProduction) {
      console.log('🧪 Webhook service running in development mode');
      return;
    }

    const issues: string[] = [];

    if (!this.config.secret) {
      issues.push('Webhook secret is not configured');
    }

    if (!this.config.url.startsWith('https://')) {
      issues.push('Webhook URL must use HTTPS in production');
    }

    if (this.config.secret && this.config.secret.includes('dev_')) {
      issues.push('Production webhook secret contains development indicators');
    }

    if (issues.length > 0) {
      throw new IkhokhaError(
        `Production webhook setup validation failed: ${issues.join(', ')}`,
        'PRODUCTION_SETUP_ERROR'
      );
    }

    console.log('✅ Production webhook setup validated successfully');
  }

  /**
   * Validate timestamp to prevent replay attacks
   */
  private validateTimestamp(timestamp: string): boolean {
    try {
      const webhookTime = new Date(timestamp);
      const now = new Date();
      const timeDiff = Math.abs(now.getTime() - webhookTime.getTime());
      
      return timeDiff <= this.securityConfig.timestampToleranceMs;
    } catch {
      return false;
    }
  }

  /**
   * Perform signature validation (client-side check)
   */
  private performSignatureValidation(payload: string, signature: string): boolean {
    // This is a basic client-side check
    // The actual cryptographic validation happens in the Netlify function
    
    if (!signature || signature.length === 0) {
      return false;
    }

    // Check signature format
    if (!signature.startsWith('sha256=')) {
      return false;
    }

    // Basic length check
    const signatureValue = signature.replace('sha256=', '');
    if (signatureValue.length !== 64) { // SHA256 hex length
      return false;
    }

    return true;
  }

  /**
   * Validate webhook data for production
   */
  private validateProductionWebhookData(webhookData: IkhokhaWebhook): void {
    const errors: string[] = [];

    // Required fields
    if (!webhookData.transaction_id) errors.push('Missing transaction_id');
    if (!webhookData.reference) errors.push('Missing reference');
    if (!webhookData.amount) errors.push('Missing amount');
    if (!webhookData.currency) errors.push('Missing currency');
    if (!webhookData.status) errors.push('Missing status');
    if (!webhookData.timestamp) errors.push('Missing timestamp');

    // Validate amount
    if (webhookData.amount <= 0) {
      errors.push('Invalid amount value');
    }

    if (webhookData.amount > 1000000) { // 1M ZAR limit
      errors.push('Amount exceeds maximum limit');
    }

    // Validate status
    const validStatuses = ['completed', 'failed', 'cancelled', 'pending'];
    if (!validStatuses.includes(webhookData.status)) {
      errors.push('Invalid status value');
    }

    // Validate currency
    if (webhookData.currency !== 'ZAR') {
      errors.push('Invalid currency - only ZAR is supported');
    }

    if (errors.length > 0) {
      throw new IkhokhaError(
        `Webhook data validation failed: ${errors.join(', ')}`,
        'WEBHOOK_VALIDATION_ERROR'
      );
    }
  }

  /**
   * Send webhook to Netlify function for processing
   */
  private async sendToNetlifyFunction(webhookData: IkhokhaWebhook): Promise<WebhookResult> {
    const response = await fetch(this.config.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'BetaSkill-Webhook-Client/1.0'
      },
      body: JSON.stringify(webhookData)
    });

    if (!response.ok) {
      throw new IkhokhaError(
        `Webhook endpoint returned ${response.status}: ${response.statusText}`,
        'WEBHOOK_ENDPOINT_ERROR'
      );
    }

    const result = await response.json();

    if (!result.success) {
      throw new IkhokhaError(
        result.message || 'Webhook processing failed',
        'WEBHOOK_PROCESSING_ERROR'
      );
    }

    return result.result;
  }

  /**
   * Update processing statistics
   */
  private updateStats(success: boolean, processingTime: number): void {
    this.stats.totalProcessed++;
    this.stats.lastProcessedAt = new Date();
    
    if (success) {
      this.stats.successfulProcessed++;
    } else {
      this.stats.failedProcessed++;
    }
  }
}

// Export singleton instance
export const productionWebhookService = new ProductionWebhookService();