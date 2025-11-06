/**
 * Webhook Registration Service
 * 
 * Handles registration and management of webhook endpoints with Ikhokha
 * Ensures proper webhook configuration for production payment processing
 */

import { IkhokhaError } from '../types/ikhokha';
import { ikhokhaConfig, getIkhokhaEndpoints } from '../config/ikhokha';
import { getProductionWebhookConfig } from '../config/webhookConfig';

export interface WebhookRegistrationResult {
  success: boolean;
  webhookId?: string;
  endpoint: string;
  status: 'active' | 'pending' | 'failed';
  message?: string;
  error?: string;
}

export interface WebhookRegistrationConfig {
  url: string;
  events: string[];
  secret: string;
  active: boolean;
  description?: string;
}

/**
 * Webhook Registration Service
 */
export class WebhookRegistrationService {
  private config = ikhokhaConfig;
  private endpoints = getIkhokhaEndpoints(this.config);
  private webhookConfig = getProductionWebhookConfig();

  constructor() {
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
    const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';
    
    if (shouldLog) {
      console.log('🔗 Webhook Registration Service initialized');
    }
  }

  /**
   * Register webhook endpoint with Ikhokha
   */
  async registerWebhook(): Promise<WebhookRegistrationResult> {
    try {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
      const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';
      
      if (shouldLog) {
        console.log('📝 Registering webhook with Ikhokha:', {
          endpoint: this.webhookConfig.endpoint.url,
          environment: isProduction ? 'PRODUCTION' : 'DEVELOPMENT'
        });
      }

      // Validate webhook configuration before registration
      this.validateWebhookConfig();

      // Prepare registration payload
      const registrationConfig: WebhookRegistrationConfig = {
        url: this.webhookConfig.endpoint.url,
        events: [
          'payment.completed',
          'payment.failed',
          'payment.cancelled',
          'payment.pending'
        ],
        secret: this.webhookConfig.endpoint.secret,
        active: true,
        description: `BetaSkill ${isProduction ? 'Production' : 'Development'} Webhook`
      };

      // In production, register with real Ikhokha API
      if (isProduction && !this.config.test_mode) {
        return await this.registerWithIkhokhaAPI(registrationConfig);
      }

      // In development/test mode, simulate registration
      if (shouldLog) {
        console.log('🎭 Simulating webhook registration (development mode)');
      }
      
      return this.simulateWebhookRegistration(registrationConfig);

    } catch (error) {
      console.error('❌ Webhook registration failed:', error);
      
      return {
        success: false,
        endpoint: this.webhookConfig.endpoint.url,
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Update existing webhook configuration
   */
  async updateWebhook(webhookId: string): Promise<WebhookRegistrationResult> {
    try {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
      const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';
      
      if (shouldLog) {
        console.log('🔄 Updating webhook configuration:', {
          webhookId,
          endpoint: this.webhookConfig.endpoint.url
        });
      }

      // Validate webhook configuration
      this.validateWebhookConfig();

      // Prepare update payload
      const updateConfig: WebhookRegistrationConfig = {
        url: this.webhookConfig.endpoint.url,
        events: [
          'payment.completed',
          'payment.failed',
          'payment.cancelled',
          'payment.pending'
        ],
        secret: this.webhookConfig.endpoint.secret,
        active: this.webhookConfig.endpoint.enabled,
        description: `BetaSkill ${isProduction ? 'Production' : 'Development'} Webhook (Updated)`
      };

      // In production, update with real Ikhokha API
      if (isProduction && !this.config.test_mode) {
        return await this.updateWithIkhokhaAPI(webhookId, updateConfig);
      }

      // In development/test mode, simulate update
      if (shouldLog) {
        console.log('🎭 Simulating webhook update (development mode)');
      }
      
      return this.simulateWebhookUpdate(webhookId, updateConfig);

    } catch (error) {
      console.error('❌ Webhook update failed:', error);
      
      return {
        success: false,
        webhookId,
        endpoint: this.webhookConfig.endpoint.url,
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Delete webhook endpoint
   */
  async deleteWebhook(webhookId: string): Promise<{ success: boolean; error?: string }> {
    try {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
      const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';
      
      if (shouldLog) {
        console.log('🗑️ Deleting webhook:', { webhookId });
      }

      // In production, delete with real Ikhokha API
      if (isProduction && !this.config.test_mode) {
        return await this.deleteWithIkhokhaAPI(webhookId);
      }

      // In development/test mode, simulate deletion
      if (shouldLog) {
        console.log('🎭 Simulating webhook deletion (development mode)');
      }
      
      return { success: true };

    } catch (error) {
      console.error('❌ Webhook deletion failed:', error);
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * List registered webhooks
   */
  async listWebhooks(): Promise<{
    success: boolean;
    webhooks: Array<{
      id: string;
      url: string;
      events: string[];
      status: string;
      created_at: string;
    }>;
    error?: string;
  }> {
    try {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
      const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';
      
      if (shouldLog) {
        console.log('📋 Listing registered webhooks');
      }

      // In production, list with real Ikhokha API
      if (isProduction && !this.config.test_mode) {
        return await this.listWithIkhokhaAPI();
      }

      // In development/test mode, return mock data
      if (shouldLog) {
        console.log('🎭 Returning mock webhook list (development mode)');
      }
      
      return {
        success: true,
        webhooks: [
          {
            id: 'webhook_dev_123',
            url: this.webhookConfig.endpoint.url,
            events: ['payment.completed', 'payment.failed', 'payment.cancelled'],
            status: 'active',
            created_at: new Date().toISOString()
          }
        ]
      };

    } catch (error) {
      console.error('❌ Failed to list webhooks:', error);
      
      return {
        success: false,
        webhooks: [],
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Test webhook endpoint connectivity
   */
  async testWebhookEndpoint(): Promise<{
    success: boolean;
    responseTime: number;
    status: number;
    error?: string;
  }> {
    const startTime = Date.now();
    
    try {
      const response = await fetch(this.webhookConfig.endpoint.url, {
        method: 'GET',
        headers: {
          'User-Agent': 'BetaSkill-Webhook-Test/1.0'
        }
      });

      const responseTime = Date.now() - startTime;

      return {
        success: response.status === 405, // Should return 405 for GET requests
        responseTime,
        status: response.status,
        error: response.status !== 405 ? `Expected 405, got ${response.status}` : undefined
      };

    } catch (error) {
      return {
        success: false,
        responseTime: Date.now() - startTime,
        status: 0,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  // Private Methods

  /**
   * Validate webhook configuration
   */
  private validateWebhookConfig(): void {
    const errors: string[] = [];

    if (!this.webhookConfig.endpoint.url) {
      errors.push('Webhook URL is not configured');
    }

    if (!this.webhookConfig.endpoint.url.startsWith('https://')) {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
      if (isProduction) {
        errors.push('Webhook URL must use HTTPS in production');
      }
    }

    if (!this.webhookConfig.endpoint.secret) {
      errors.push('Webhook secret is not configured');
    }

    if (this.webhookConfig.endpoint.secret.length < 16) {
      errors.push('Webhook secret must be at least 16 characters long');
    }

    if (errors.length > 0) {
      throw new IkhokhaError(
        `Webhook configuration validation failed: ${errors.join(', ')}`,
        'WEBHOOK_CONFIG_ERROR'
      );
    }
  }

  /**
   * Register webhook with real Ikhokha API
   */
  private async registerWithIkhokhaAPI(config: WebhookRegistrationConfig): Promise<WebhookRegistrationResult> {
    const payload = {
      app_key: this.config.api_key,
      app_secret: this.config.api_secret,
      webhook_url: config.url,
      webhook_secret: config.secret,
      events: config.events,
      active: config.active,
      description: config.description
    };

    const response = await this.makeApiCall(`${this.endpoints.webhook}/register`, payload);

    if (!response.success) {
      throw new IkhokhaError(
        response.error?.message || 'Webhook registration failed',
        response.error?.code || 'WEBHOOK_REGISTRATION_ERROR'
      );
    }

    return {
      success: true,
      webhookId: response.data.webhook_id,
      endpoint: config.url,
      status: 'active',
      message: 'Webhook registered successfully'
    };
  }

  /**
   * Update webhook with real Ikhokha API
   */
  private async updateWithIkhokhaAPI(
    webhookId: string,
    config: WebhookRegistrationConfig
  ): Promise<WebhookRegistrationResult> {
    const payload = {
      app_key: this.config.api_key,
      app_secret: this.config.api_secret,
      webhook_id: webhookId,
      webhook_url: config.url,
      webhook_secret: config.secret,
      events: config.events,
      active: config.active,
      description: config.description
    };

    const response = await this.makeApiCall(`${this.endpoints.webhook}/update`, payload);

    if (!response.success) {
      throw new IkhokhaError(
        response.error?.message || 'Webhook update failed',
        response.error?.code || 'WEBHOOK_UPDATE_ERROR'
      );
    }

    return {
      success: true,
      webhookId,
      endpoint: config.url,
      status: 'active',
      message: 'Webhook updated successfully'
    };
  }

  /**
   * Delete webhook with real Ikhokha API
   */
  private async deleteWithIkhokhaAPI(webhookId: string): Promise<{ success: boolean; error?: string }> {
    const payload = {
      app_key: this.config.api_key,
      app_secret: this.config.api_secret,
      webhook_id: webhookId
    };

    const response = await this.makeApiCall(`${this.endpoints.webhook}/delete`, payload);

    if (!response.success) {
      throw new IkhokhaError(
        response.error?.message || 'Webhook deletion failed',
        response.error?.code || 'WEBHOOK_DELETE_ERROR'
      );
    }

    return { success: true };
  }

  /**
   * List webhooks with real Ikhokha API
   */
  private async listWithIkhokhaAPI(): Promise<{
    success: boolean;
    webhooks: Array<{
      id: string;
      url: string;
      events: string[];
      status: string;
      created_at: string;
    }>;
    error?: string;
  }> {
    const payload = {
      app_key: this.config.api_key,
      app_secret: this.config.api_secret
    };

    const response = await this.makeApiCall(`${this.endpoints.webhook}/list`, payload);

    if (!response.success) {
      throw new IkhokhaError(
        response.error?.message || 'Failed to list webhooks',
        response.error?.code || 'WEBHOOK_LIST_ERROR'
      );
    }

    return {
      success: true,
      webhooks: response.data.webhooks || []
    };
  }

  /**
   * Simulate webhook registration for development
   */
  private simulateWebhookRegistration(config: WebhookRegistrationConfig): WebhookRegistrationResult {
    return {
      success: true,
      webhookId: `webhook_dev_${Date.now()}`,
      endpoint: config.url,
      status: 'active',
      message: 'Webhook registration simulated successfully'
    };
  }

  /**
   * Simulate webhook update for development
   */
  private simulateWebhookUpdate(
    webhookId: string,
    config: WebhookRegistrationConfig
  ): WebhookRegistrationResult {
    return {
      success: true,
      webhookId,
      endpoint: config.url,
      status: 'active',
      message: 'Webhook update simulated successfully'
    };
  }

  /**
   * Make API call to Ikhokha
   */
  private async makeApiCall(url: string, payload: any): Promise<any> {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'BetaSkill-Webhook-Registration/1.0'
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(this.config.timeout)
      });

      if (!response.ok) {
        throw new IkhokhaError(
          `API request failed: ${response.status} ${response.statusText}`,
          'API_REQUEST_ERROR'
        );
      }

      return await response.json();

    } catch (error) {
      if (error instanceof IkhokhaError) {
        throw error;
      }

      throw new IkhokhaError(
        `API call failed: ${error instanceof Error ? error.message : error}`,
        'API_CALL_ERROR'
      );
    }
  }
}

// Export singleton instance
export const webhookRegistrationService = new WebhookRegistrationService();