/**
 * Production Webhook Configuration
 * 
 * Centralized configuration for webhook endpoints and security settings
 * Ensures proper setup for production payment processing
 */

export interface WebhookEndpointConfig {
  url: string;
  secret: string;
  enabled: boolean;
  timeout: number;
  retryConfig: {
    maxRetries: number;
    retryDelay: number;
    backoffMultiplier: number;
  };
}

export interface WebhookSecurityConfig {
  requireSignature: boolean;
  enforceHttps: boolean;
  allowedIPs: string[];
  rateLimitPerMinute: number;
  timestampToleranceMs: number;
  enableLogging: boolean;
}

export interface WebhookActivationConfig {
  autoActivateOnSuccess: boolean;
  requireManualApproval: boolean;
  sendNotifications: boolean;
  grantImmediateAccess: boolean;
  logTransactions: boolean;
}

/**
 * Get production webhook configuration
 */
export function getProductionWebhookConfig(): {
  endpoint: WebhookEndpointConfig;
  security: WebhookSecurityConfig;
  activation: WebhookActivationConfig;
} {
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
  const productionUrl = import.meta.env.VITE_PRODUCTION_URL || 
                       import.meta.env.VITE_APP_URL || 
                       'https://app.betaskill.com';

  return {
    endpoint: {
      url: `${productionUrl}/.netlify/functions/ikhokha-webhook`,
      secret: import.meta.env.VITE_IKHOKHA_WEBHOOK_SECRET || '',
      enabled: true,
      timeout: 30000, // 30 seconds
      retryConfig: {
        maxRetries: isProduction ? 5 : 3,
        retryDelay: isProduction ? 2000 : 1000,
        backoffMultiplier: 2
      }
    },
    security: {
      requireSignature: isProduction, // Always require signature in production
      enforceHttps: isProduction, // Always enforce HTTPS in production
      allowedIPs: [], // Empty means allow all IPs (Ikhokha IPs are dynamic)
      rateLimitPerMinute: isProduction ? 60 : 120,
      timestampToleranceMs: 300000, // 5 minutes
      enableLogging: true
    },
    activation: {
      autoActivateOnSuccess: isProduction, // Auto-activate in production
      requireManualApproval: false, // No manual approval needed for successful payments
      sendNotifications: true,
      grantImmediateAccess: true,
      logTransactions: true
    }
  };
}

/**
 * Validate webhook configuration
 */
export function validateWebhookConfig(): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const config = getProductionWebhookConfig();
  const errors: string[] = [];
  const warnings: string[] = [];
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';

  // Validate endpoint configuration
  if (!config.endpoint.url) {
    errors.push('Webhook URL is not configured');
  } else if (!config.endpoint.url.startsWith('https://') && isProduction) {
    errors.push('Webhook URL must use HTTPS in production');
  }

  if (!config.endpoint.secret) {
    if (isProduction) {
      errors.push('Webhook secret is required in production');
    } else {
      warnings.push('Webhook secret not configured (development mode)');
    }
  } else if (config.endpoint.secret.length < 16) {
    errors.push('Webhook secret must be at least 16 characters long');
  } else if (config.endpoint.secret.includes('dev_') || config.endpoint.secret.includes('test_')) {
    if (isProduction) {
      errors.push('Production webhook secret must not contain development/test indicators');
    }
  }

  // Validate security configuration
  if (config.security.requireSignature && !config.endpoint.secret) {
    errors.push('Signature validation requires webhook secret to be configured');
  }

  if (config.security.enforceHttps && !config.endpoint.url.startsWith('https://')) {
    errors.push('HTTPS enforcement requires webhook URL to use HTTPS');
  }

  if (config.security.timestampToleranceMs < 60000) {
    warnings.push('Timestamp tolerance is very strict (less than 1 minute)');
  } else if (config.security.timestampToleranceMs > 600000) {
    warnings.push('Timestamp tolerance is very loose (more than 10 minutes)');
  }

  // Validate activation configuration
  if (config.activation.autoActivateOnSuccess && !config.activation.grantImmediateAccess) {
    warnings.push('Auto-activation without immediate access may confuse users');
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Get webhook URL for Ikhokha configuration
 */
export function getWebhookUrl(): string {
  const config = getProductionWebhookConfig();
  return config.endpoint.url;
}

/**
 * Check if webhook is ready for production
 */
export function isWebhookProductionReady(): {
  ready: boolean;
  issues: string[];
  recommendations: string[];
} {
  const validation = validateWebhookConfig();
  const config = getProductionWebhookConfig();
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Add validation errors as issues
  issues.push(...validation.errors);

  // Check production-specific requirements
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
  
  if (isProduction) {
    if (!config.security.requireSignature) {
      issues.push('Signature validation must be enabled in production');
    }
    
    if (!config.security.enforceHttps) {
      issues.push('HTTPS enforcement must be enabled in production');
    }
    
    if (!config.activation.autoActivateOnSuccess) {
      recommendations.push('Consider enabling auto-activation for better user experience');
    }
  }

  // Add validation warnings as recommendations
  recommendations.push(...validation.warnings);

  // General recommendations
  recommendations.push('Test webhook endpoint before going live');
  recommendations.push('Monitor webhook processing logs');
  recommendations.push('Set up alerts for webhook failures');

  return {
    ready: issues.length === 0,
    issues,
    recommendations
  };
}

/**
 * Export configuration for external use
 */
export const webhookConfig = getProductionWebhookConfig();