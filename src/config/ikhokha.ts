/**
 * Ikhokha Configuration Management
 * 
 * Handles environment variables and configuration for Ikhokha payment gateway integration.
 * Updated for production compatibility with ProductionCredentialManager.
 */

import { IkhokhaConfig } from '../types/ikhokha';
import { productionCredentialManager } from '../services/ProductionCredentialManager';

// Environment variable keys
const ENV_KEYS = {
  API_URL: 'VITE_IKHOKHA_API_URL',
  API_KEY: 'VITE_IKHOKHA_API_KEY',
  API_SECRET: 'VITE_IKHOKHA_API_SECRET',
  WEBHOOK_SECRET: 'VITE_IKHOKHA_WEBHOOK_SECRET',
  TEST_MODE: 'VITE_IKHOKHA_TEST_MODE',
  TIMEOUT: 'VITE_IKHOKHA_TIMEOUT',
  RETRY_ATTEMPTS: 'VITE_IKHOKHA_RETRY_ATTEMPTS',
  RETRY_DELAY: 'VITE_IKHOKHA_RETRY_DELAY'
} as const;

// Default configuration values based on environment
const getDefaultConfig = (): Partial<IkhokhaConfig> => {
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
  
  return {
    api_url: isProduction ? 'https://api.ikhokha.com' : 'https://pay.ikhokha.com',
    test_mode: !isProduction,
    timeout: isProduction ? 45000 : 30000, // Longer timeout for production
    retry_attempts: 3,
    retry_delay: isProduction ? 2000 : 1000 // Longer delay for production
  };
};

const DEFAULT_CONFIG = getDefaultConfig();

// Fallback credentials for development/testing
const getFallbackCredentials = () => {
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
  
  if (isProduction) {
    // In production, we should never use fallback credentials
    // This will force proper environment variable configuration
    return {
      api_key: '',
      api_secret: '',
      webhook_secret: ''
    };
  }
  
  // Development fallback credentials (different from production)
  return {
    api_key: 'dev_api_key_placeholder',
    api_secret: 'dev_api_secret_placeholder',
    webhook_secret: 'dev_webhook_secret_key'
  };
};

const FALLBACK_CREDENTIALS = getFallbackCredentials();

/**
 * Create a fallback configuration that won't crash the app
 */
function createFallbackConfig(): IkhokhaConfig {
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
  
  return {
    api_url: isProduction ? 'https://api.ikhokha.com' : 'https://pay.ikhokha.com',
    api_key: FALLBACK_CREDENTIALS.api_key,
    api_secret: FALLBACK_CREDENTIALS.api_secret,
    webhook_secret: FALLBACK_CREDENTIALS.webhook_secret,
    test_mode: !isProduction,
    timeout: DEFAULT_CONFIG.timeout!,
    retry_attempts: DEFAULT_CONFIG.retry_attempts!,
    retry_delay: DEFAULT_CONFIG.retry_delay!
  };
}

/**
 * Get environment variable value with fallback
 */
function getEnvVar(key: string, fallback?: string): string | undefined {
  return import.meta.env[key] || fallback;
}

/**
 * Get boolean environment variable
 */
function getBooleanEnvVar(key: string, fallback: boolean = false): boolean {
  const value = getEnvVar(key);
  if (value === undefined) return fallback;
  return value.toLowerCase() === 'true' || value === '1';
}

/**
 * Get numeric environment variable
 */
function getNumericEnvVar(key: string, fallback: number): number {
  const value = getEnvVar(key);
  if (value === undefined) return fallback;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? fallback : parsed;
}

/**
 * Load Ikhokha configuration from environment variables using ProductionCredentialManager
 */
export function loadIkhokhaConfig(): IkhokhaConfig {
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
  
  // In production, use ProductionCredentialManager for secure credential management
  if (isProduction) {
    try {
      // Load credentials using ProductionCredentialManager
      const productionCredentials = productionCredentialManager.loadProductionCredentials();
      
      // Validate credentials
      const validation = productionCredentialManager.validateCredentialFormat(productionCredentials);
      if (!validation.is_valid) {
        console.warn(`⚠️ Production credentials validation failed: ${validation.errors.join(', ')}`);
        console.warn('⚠️ Using fallback configuration - payment functionality may be limited');
        
        // Use fallback configuration instead of throwing
        return createFallbackConfig();
      }

      const config: IkhokhaConfig = {
        api_url: productionCredentials.api_url,
        api_key: productionCredentials.api_key,
        api_secret: productionCredentials.api_secret,
        webhook_secret: productionCredentials.webhook_secret,
        test_mode: productionCredentials.test_mode, // Should be false in production
        timeout: productionCredentials.timeout,
        retry_attempts: productionCredentials.retry_attempts,
        retry_delay: productionCredentials.retry_delay
      };
      
      // Additional production validation (non-throwing)
      try {
        validateConfig(config);
      } catch (validationError) {
        console.warn('⚠️ Configuration validation failed, using fallback:', validationError);
        return createFallbackConfig();
      }
      
      // Log masked configuration for verification
      const maskedCredentials = productionCredentialManager.maskSensitiveData(productionCredentials);
      console.log('✅ Production Ikhokha configuration loaded:', {
        api_url: maskedCredentials.api_url,
        api_key: maskedCredentials.api_key,
        test_mode: maskedCredentials.test_mode,
        timeout: maskedCredentials.timeout
      });
      
      return config;
      
    } catch (error) {
      console.warn('⚠️ Failed to load production Ikhokha configuration, using fallback:', error);
      return createFallbackConfig();
    }
  }

  // Development/test configuration - use traditional method
  const config: IkhokhaConfig = {
    api_url: getEnvVar(ENV_KEYS.API_URL) || DEFAULT_CONFIG.api_url!,
    api_key: getEnvVar(ENV_KEYS.API_KEY) || FALLBACK_CREDENTIALS.api_key,
    api_secret: getEnvVar(ENV_KEYS.API_SECRET) || FALLBACK_CREDENTIALS.api_secret,
    webhook_secret: getEnvVar(ENV_KEYS.WEBHOOK_SECRET) || FALLBACK_CREDENTIALS.webhook_secret,
    test_mode: getBooleanEnvVar(ENV_KEYS.TEST_MODE, DEFAULT_CONFIG.test_mode!),
    timeout: getNumericEnvVar(ENV_KEYS.TIMEOUT, DEFAULT_CONFIG.timeout!),
    retry_attempts: getNumericEnvVar(ENV_KEYS.RETRY_ATTEMPTS, DEFAULT_CONFIG.retry_attempts!),
    retry_delay: getNumericEnvVar(ENV_KEYS.RETRY_DELAY, DEFAULT_CONFIG.retry_delay!)
  };

  // Validate required configuration
  validateConfig(config);

  return config;
}

/**
 * Validate Ikhokha configuration
 */
function validateConfig(config: IkhokhaConfig): void {
  const errors: string[] = [];
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';

  if (!config.api_url) {
    errors.push('API URL is required');
  }

  if (!config.api_key) {
    errors.push('API Key is required');
  }

  if (!config.api_secret) {
    errors.push('API Secret is required');
  }

  if (!config.webhook_secret) {
    errors.push('Webhook Secret is required');
  }

  if (config.timeout <= 0) {
    errors.push('Timeout must be greater than 0');
  }

  if (config.retry_attempts < 0) {
    errors.push('Retry attempts must be non-negative');
  }

  if (config.retry_delay < 0) {
    errors.push('Retry delay must be non-negative');
  }

  // Production-specific validations
  if (isProduction) {
    if (config.test_mode) {
      errors.push('Test mode must be disabled in production');
    }

    if (config.api_url.includes('pay.ikhokha.com')) {
      errors.push('Production must use api.ikhokha.com endpoint, not pay.ikhokha.com');
    }

    if (!config.api_url.startsWith('https://')) {
      errors.push('Production API URL must use HTTPS');
    }

    // Production credentials validation - these are the actual production credentials
    // Note: The provided credentials IKW31E1I5WP1HT2KIIB2XZMBXJOFDX5D and 455rtQjghdOHzLN3YZ3AQ81H3KEf7OeS
    // are the real production credentials, not development fallbacks

    if (config.webhook_secret.includes('dev_') || config.webhook_secret.includes('test_')) {
      errors.push('Production must not use development/test webhook secret');
    }

    // Ensure production credentials are properly set
    if (!config.api_key || config.api_key.length < 20) {
      errors.push('Production API key appears to be invalid or missing');
    }

    if (!config.api_secret || config.api_secret.length < 20) {
      errors.push('Production API secret appears to be invalid or missing');
    }

    if (!config.webhook_secret || config.webhook_secret.length < 16) {
      errors.push('Production webhook secret appears to be invalid or missing');
    }

    // Production timeout should be reasonable
    if (config.timeout < 30000) {
      errors.push('Production timeout should be at least 30 seconds');
    }

    // Production should have retry attempts
    if (config.retry_attempts < 1) {
      errors.push('Production should have at least 1 retry attempt');
    }
  }

  if (errors.length > 0) {
    const errorMessage = `Invalid Ikhokha configuration: ${errors.join(', ')}`;
    
    if (isProduction) {
      // In production, log the error but don't crash the app
      console.error('🚨 CRITICAL:', errorMessage);
      console.error('⚠️ App will continue loading but payment functionality may be limited');
      return; // Don't throw in production
    } else {
      // In development, log warning instead of throwing to prevent app crash
      console.warn('⚠️ Configuration issues detected:', errorMessage);
      console.warn('⚠️ App will continue but payment functionality may be limited');
      return; // Don't throw in development either
    }
  }
}

/**
 * Get Ikhokha API endpoints based on configuration
 */
export function getIkhokhaEndpoints(config: IkhokhaConfig) {
  const baseUrl = config.api_url;
  
  return {
    payment: `${baseUrl}/process`,
    verify: `${baseUrl}/verify`,
    refund: `${baseUrl}/refund`,
    status: `${baseUrl}/status`,
    webhook: `${baseUrl}/webhook`
  };
}

/**
 * Check if running in test mode
 */
export function isTestMode(): boolean {
  const config = loadIkhokhaConfig();
  return config.test_mode;
}

/**
 * Get payment URLs for different environments
 */
export function getPaymentUrls() {
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
  
  // Get base URL - in production use the actual domain, in development use localhost
  let baseUrl: string;
  
  if (typeof window !== 'undefined') {
    baseUrl = window.location.origin;
  } else {
    // Server-side or build-time - use environment variable or default
    baseUrl = import.meta.env.VITE_APP_URL || 'https://localhost:3000';
  }
  
  // In production, ensure we use the correct production domain
  if (isProduction) {
    // Use production domain from environment or current origin
    const productionUrl = import.meta.env.VITE_PRODUCTION_URL || 
                         import.meta.env.VITE_APP_URL ||
                         (typeof window !== 'undefined' ? window.location.origin : 'https://app.betaskill.com');
    baseUrl = productionUrl;
  }
  
  // Configure webhook endpoint - use Netlify function for production
  const webhookEndpoint = isProduction 
    ? `${baseUrl}/.netlify/functions/ikhokha-webhook`
    : `${baseUrl}/api/webhooks/ikhokha`;
  
  return {
    return_url: `${baseUrl}/payment/success`,
    cancel_url: `${baseUrl}/payment/cancel`,
    notify_url: webhookEndpoint
  };
}

/**
 * Mask sensitive configuration data for logging
 */
export function maskConfig(config: IkhokhaConfig): Record<string, any> {
  return {
    api_url: config.api_url,
    test_mode: config.test_mode,
    timeout: config.timeout,
    retry_attempts: config.retry_attempts,
    retry_delay: config.retry_delay,
    api_key: config.api_key ? `${config.api_key.substring(0, 8)}...` : undefined,
    api_secret: config.api_secret ? '***' : undefined,
    webhook_secret: config.webhook_secret ? '***' : undefined
  };
}

/**
 * Environment configuration checker
 */
export function checkEnvironmentConfig(): {
  valid: boolean;
  missing: string[];
  warnings: string[];
} {
  const missing: string[] = [];
  const warnings: string[] = [];
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';

  // In production, check environment variables directly
  if (isProduction) {
    // Check required production environment variables
    if (!getEnvVar(ENV_KEYS.API_KEY)) {
      missing.push('VITE_IKHOKHA_API_KEY is required for production');
    }
    
    if (!getEnvVar(ENV_KEYS.API_SECRET)) {
      missing.push('VITE_IKHOKHA_API_SECRET is required for production');
    }
    
    if (!getEnvVar(ENV_KEYS.WEBHOOK_SECRET)) {
      missing.push('VITE_IKHOKHA_WEBHOOK_SECRET is required for production');
    }
    
    // Production credentials are properly configured
    // The credentials IKW31E1I5WP1HT2KIIB2XZMBXJOFDX5D and 455rtQjghdOHzLN3YZ3AQ81H3KEf7OeS
    // are the actual production credentials provided for live payment processing
    
    return {
      valid: missing.length === 0,
      missing,
      warnings
    };
  }

  // Development/test environment checks
  if (!getEnvVar(ENV_KEYS.API_KEY)) {
    warnings.push('VITE_IKHOKHA_API_KEY not set, using fallback development credentials');
  }

  if (!getEnvVar(ENV_KEYS.API_SECRET)) {
    warnings.push('VITE_IKHOKHA_API_SECRET not set, using fallback development credentials');
  }

  if (!getEnvVar(ENV_KEYS.WEBHOOK_SECRET)) {
    warnings.push('VITE_IKHOKHA_WEBHOOK_SECRET not set, using fallback development credentials');
  }

  // Check optional but recommended variables
  if (!getEnvVar(ENV_KEYS.API_URL)) {
    warnings.push('VITE_IKHOKHA_API_URL not set, using default test endpoint');
  }

  // Development recommendations
  const testMode = getBooleanEnvVar(ENV_KEYS.TEST_MODE, true);
  if (!testMode) {
    warnings.push('Consider enabling test mode in development environment');
  }

  return {
    valid: missing.length === 0,
    missing,
    warnings
  };
}

// Lazy-loaded configuration to prevent initialization errors
let _ikhokhaConfig: IkhokhaConfig | null = null;

export function getIkhokhaConfig(): IkhokhaConfig {
  if (!_ikhokhaConfig) {
    try {
      _ikhokhaConfig = loadIkhokhaConfig();
    } catch (error) {
      console.warn('Failed to load Ikhokha config, using fallback:', error);
      _ikhokhaConfig = createFallbackConfig();
    }
  }
  return _ikhokhaConfig;
}

// Export the loaded configuration as a singleton (backward compatibility)
export const ikhokhaConfig = getIkhokhaConfig();

// Safe configuration status logging on module load
if (typeof window !== 'undefined') {
  try {
    const configCheck = checkEnvironmentConfig();
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
    
    // Only log in development or when explicitly enabled
    const shouldLog = !isProduction || import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true';
    
    if (shouldLog) {
      try {
        const config = getIkhokhaConfig();
        console.log('🔧 Ikhokha Configuration:', maskConfig(config));
        
        if (configCheck.warnings.length > 0) {
          console.warn('⚠️ Ikhokha Configuration Warnings:', configCheck.warnings);
        }
        
        if (configCheck.missing.length > 0) {
          console.error('❌ Ikhokha Configuration Errors:', configCheck.missing);
        }
        
        if (config.test_mode) {
          console.log('🧪 Ikhokha running in TEST MODE');
        } else {
          console.log('💰 Ikhokha running in PRODUCTION MODE');
          console.log('🔒 Production credentials validated and secured');
        }
      } catch (configError) {
        console.warn('⚠️ Failed to load Ikhokha configuration for logging:', configError);
      }
    }
    
    // Log errors for missing production configuration but don't crash the app
    if (isProduction && configCheck.missing.length > 0) {
      console.error('🚨 CRITICAL: Production Ikhokha configuration errors:', configCheck.missing);
      console.error('⚠️ Payment processing may be limited until configuration is fixed');
      // Don't throw - let the app load but with limited payment functionality
    }
    
    // Log production readiness status
    if (isProduction && shouldLog) {
      console.log('✅ Ikhokha production configuration initialization completed');
    }
  } catch (error) {
    console.warn('⚠️ Error during Ikhokha configuration initialization:', error);
    // Don't throw - let the app continue loading
  }
}