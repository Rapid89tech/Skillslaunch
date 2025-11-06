/**
 * Production Credentials Management
 * 
 * Secure management of production API credentials for Ikhokha payment gateway.
 * This module handles credential validation, encryption, and secure storage.
 */

import { IkhokhaConfig } from '../types/ikhokha';
import { CredentialManager } from '../utils/paymentSecurity';

// Production credential validation patterns
const PRODUCTION_PATTERNS = {
  API_KEY: /^[A-Z0-9]{32,}$/,
  API_SECRET: /^[a-zA-Z0-9]{32,}$/,
  WEBHOOK_SECRET: /^[a-zA-Z0-9_-]{16,}$/
};

// Production API endpoints
const PRODUCTION_ENDPOINTS = {
  API_URL: 'https://api.ikhokha.com',
  FALLBACK_URL: 'https://secure.ikhokha.com'
};

/**
 * Production credential validation result
 */
interface ProductionSetupResult {
  ready: boolean;
  issues: string[];
  recommendations: string[];
  config?: IkhokhaConfig;
}

/**
 * Get production Ikhokha configuration with security validation
 */
export function getProductionIkhokhaConfig(): IkhokhaConfig {
  const isProduction = process.env.NODE_ENV === 'production' || 
                      import.meta.env.VITE_NODE_ENV === 'production';

  if (!isProduction) {
    throw new Error('Production credentials can only be loaded in production environment');
  }

  // Load credentials from secure environment variables
  const config: IkhokhaConfig = {
    api_url: getSecureEnvVar('IKHOKHA_API_URL', PRODUCTION_ENDPOINTS.API_URL),
    api_key: getSecureEnvVar('IKHOKHA_API_KEY'),
    api_secret: getSecureEnvVar('IKHOKHA_API_SECRET'),
    webhook_secret: getSecureEnvVar('IKHOKHA_WEBHOOK_SECRET'),
    test_mode: false, // Always false in production
    timeout: parseInt(getSecureEnvVar('IKHOKHA_TIMEOUT', '45000'), 10),
    retry_attempts: parseInt(getSecureEnvVar('IKHOKHA_RETRY_ATTEMPTS', '3'), 10),
    retry_delay: parseInt(getSecureEnvVar('IKHOKHA_RETRY_DELAY', '2000'), 10)
  };

  // Validate production configuration
  const validation = validateProductionConfig(config);
  if (!validation.ready) {
    throw new Error(`Production configuration invalid: ${validation.issues.join(', ')}`);
  }

  return config;
}

/**
 * Check production setup readiness
 */
export function checkProductionSetup(): ProductionSetupResult {
  const issues: string[] = [];
  const recommendations: string[] = [];

  try {
    // Check environment
    const isProduction = process.env.NODE_ENV === 'production' || 
                        import.meta.env.VITE_NODE_ENV === 'production';

    if (!isProduction) {
      issues.push('Not running in production environment');
      return { ready: false, issues, recommendations };
    }

    // Check required environment variables
    const requiredVars = [
      'IKHOKHA_API_KEY',
      'IKHOKHA_API_SECRET',
      'IKHOKHA_WEBHOOK_SECRET'
    ];

    for (const varName of requiredVars) {
      if (!process.env[varName] && !import.meta.env[`VITE_${varName}`]) {
        issues.push(`Missing required environment variable: ${varName}`);
      }
    }

    if (issues.length > 0) {
      return { ready: false, issues, recommendations };
    }

    // Load and validate configuration
    const config = getProductionIkhokhaConfig();
    const validation = validateProductionConfig(config);

    return {
      ready: validation.ready,
      issues: validation.issues,
      recommendations: validation.recommendations,
      config: validation.ready ? config : undefined
    };

  } catch (error) {
    issues.push(`Production setup check failed: ${error instanceof Error ? error.message : error}`);
    return { ready: false, issues, recommendations };
  }
}

/**
 * Validate production configuration
 */
function validateProductionConfig(config: IkhokhaConfig): ProductionSetupResult {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Validate API URL
  if (!config.api_url) {
    issues.push('API URL is required');
  } else {
    if (!config.api_url.startsWith('https://')) {
      issues.push('API URL must use HTTPS');
    }
    
    if (!config.api_url.includes('api.ikhokha.com') && 
        !config.api_url.includes('secure.ikhokha.com')) {
      issues.push('API URL must be an official Ikhokha endpoint');
    }

    if (config.api_url.includes('test') || 
        config.api_url.includes('sandbox') || 
        config.api_url.includes('dev')) {
      issues.push('API URL appears to be a test/development endpoint');
    }
  }

  // Validate API key
  if (!config.api_key) {
    issues.push('API key is required');
  } else {
    if (!PRODUCTION_PATTERNS.API_KEY.test(config.api_key)) {
      issues.push('API key format is invalid for production');
    }

    if (config.api_key.includes('test') || 
        config.api_key.includes('dev') || 
        config.api_key.includes('demo')) {
      issues.push('API key appears to be a test/development key');
    }

    if (config.api_key.length < 32) {
      issues.push('API key is too short for production use');
    }
  }

  // Validate API secret
  if (!config.api_secret) {
    issues.push('API secret is required');
  } else {
    if (!PRODUCTION_PATTERNS.API_SECRET.test(config.api_secret)) {
      issues.push('API secret format is invalid for production');
    }

    if (config.api_secret.includes('test') || 
        config.api_secret.includes('dev') || 
        config.api_secret.includes('demo')) {
      issues.push('API secret appears to be a test/development secret');
    }

    if (config.api_secret.length < 32) {
      issues.push('API secret is too short for production use');
    }
  }

  // Validate webhook secret
  if (!config.webhook_secret) {
    issues.push('Webhook secret is required');
  } else {
    if (!PRODUCTION_PATTERNS.WEBHOOK_SECRET.test(config.webhook_secret)) {
      issues.push('Webhook secret format is invalid for production');
    }

    if (config.webhook_secret.includes('test') || 
        config.webhook_secret.includes('dev') || 
        config.webhook_secret.includes('demo')) {
      issues.push('Webhook secret appears to be a test/development secret');
    }

    if (config.webhook_secret.length < 16) {
      issues.push('Webhook secret is too short for production use');
    }
  }

  // Validate test mode
  if (config.test_mode) {
    issues.push('Test mode must be disabled in production');
  }

  // Validate timeout settings
  if (config.timeout < 30000) {
    recommendations.push('Consider increasing timeout to at least 30 seconds for production');
  }

  if (config.retry_attempts < 1) {
    recommendations.push('Consider enabling retry attempts for production resilience');
  }

  if (config.retry_delay < 1000) {
    recommendations.push('Consider increasing retry delay for production stability');
  }

  // Security recommendations
  recommendations.push('Ensure credentials are stored in secure environment variables');
  recommendations.push('Regularly rotate API credentials');
  recommendations.push('Monitor payment processing logs for security issues');
  recommendations.push('Implement rate limiting for payment endpoints');

  return {
    ready: issues.length === 0,
    issues,
    recommendations
  };
}

/**
 * Get secure environment variable with validation
 */
function getSecureEnvVar(name: string, defaultValue?: string): string {
  // Try different environment variable sources
  const value = process.env[name] || 
                import.meta.env[`VITE_${name}`] || 
                import.meta.env[name] ||
                defaultValue;

  if (!value) {
    throw new Error(`Required environment variable ${name} is not set`);
  }

  // Validate that the value is not a placeholder or test value
  const testPatterns = [
    'your_api_key_here',
    'test_key',
    'dev_key',
    'demo_key',
    'placeholder',
    'changeme',
    'default'
  ];

  const lowerValue = value.toLowerCase();
  for (const pattern of testPatterns) {
    if (lowerValue.includes(pattern)) {
      throw new Error(`Environment variable ${name} contains placeholder value`);
    }
  }

  return value;
}

/**
 * Encrypt production credentials for secure storage
 */
export function encryptProductionCredentials(config: IkhokhaConfig): {
  encrypted_api_key: string;
  encrypted_api_secret: string;
  encrypted_webhook_secret: string;
  api_url: string;
  test_mode: boolean;
  timeout: number;
  retry_attempts: number;
  retry_delay: number;
} {
  try {
    return {
      encrypted_api_key: CredentialManager.encryptCredential(config.api_key),
      encrypted_api_secret: CredentialManager.encryptCredential(config.api_secret),
      encrypted_webhook_secret: CredentialManager.encryptCredential(config.webhook_secret),
      api_url: config.api_url,
      test_mode: config.test_mode,
      timeout: config.timeout,
      retry_attempts: config.retry_attempts,
      retry_delay: config.retry_delay
    };
  } catch (error) {
    throw new Error(`Failed to encrypt production credentials: ${error instanceof Error ? error.message : error}`);
  }
}

/**
 * Decrypt production credentials from secure storage
 */
export function decryptProductionCredentials(encryptedConfig: {
  encrypted_api_key: string;
  encrypted_api_secret: string;
  encrypted_webhook_secret: string;
  api_url: string;
  test_mode: boolean;
  timeout: number;
  retry_attempts: number;
  retry_delay: number;
}): IkhokhaConfig {
  try {
    return {
      api_key: CredentialManager.decryptCredential(encryptedConfig.encrypted_api_key),
      api_secret: CredentialManager.decryptCredential(encryptedConfig.encrypted_api_secret),
      webhook_secret: CredentialManager.decryptCredential(encryptedConfig.encrypted_webhook_secret),
      api_url: encryptedConfig.api_url,
      test_mode: encryptedConfig.test_mode,
      timeout: encryptedConfig.timeout,
      retry_attempts: encryptedConfig.retry_attempts,
      retry_delay: encryptedConfig.retry_delay
    };
  } catch (error) {
    throw new Error(`Failed to decrypt production credentials: ${error instanceof Error ? error.message : error}`);
  }
}

/**
 * Validate production environment security
 */
export function validateProductionEnvironment(): {
  secure: boolean;
  issues: string[];
  recommendations: string[];
} {
  const issues: string[] = [];
  const recommendations: string[] = [];

  // Check HTTPS enforcement
  if (typeof window !== 'undefined' && window.location.protocol !== 'https:') {
    issues.push('HTTPS is required for production payment processing');
  }

  // Check for development tools
  if (typeof window !== 'undefined' && (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    recommendations.push('React DevTools detected - ensure disabled in production builds');
  }

  // Check console logging
  if (import.meta.env.VITE_ENABLE_CONSOLE_LOGS === 'true') {
    recommendations.push('Console logging is enabled - consider disabling for production');
  }

  // Check for debug flags
  const debugFlags = [
    'VITE_DEBUG',
    'VITE_DEVELOPMENT',
    'VITE_TEST_MODE'
  ];

  for (const flag of debugFlags) {
    if (import.meta.env[flag] === 'true') {
      issues.push(`Debug flag ${flag} is enabled in production`);
    }
  }

  // Security headers check (if running in browser)
  if (typeof window !== 'undefined') {
    recommendations.push('Ensure security headers are configured (CSP, HSTS, etc.)');
    recommendations.push('Implement proper CORS policies');
    recommendations.push('Use secure cookie settings');
  }

  return {
    secure: issues.length === 0,
    issues,
    recommendations
  };
}

/**
 * Generate production deployment checklist
 */
export function generateProductionChecklist(): {
  category: string;
  items: Array<{
    task: string;
    completed: boolean;
    critical: boolean;
  }>;
}[] {
  const setupResult = checkProductionSetup();
  const envResult = validateProductionEnvironment();

  return [
    {
      category: 'Credentials & Configuration',
      items: [
        {
          task: 'Production API credentials configured',
          completed: setupResult.ready,
          critical: true
        },
        {
          task: 'Test mode disabled',
          completed: !setupResult.issues.some(i => i.includes('test mode')),
          critical: true
        },
        {
          task: 'HTTPS endpoints configured',
          completed: !setupResult.issues.some(i => i.includes('HTTPS')),
          critical: true
        },
        {
          task: 'Webhook secret configured',
          completed: !setupResult.issues.some(i => i.includes('webhook secret')),
          critical: true
        }
      ]
    },
    {
      category: 'Security',
      items: [
        {
          task: 'HTTPS enforced',
          completed: envResult.secure,
          critical: true
        },
        {
          task: 'Debug flags disabled',
          completed: !envResult.issues.some(i => i.includes('Debug flag')),
          critical: true
        },
        {
          task: 'Console logging controlled',
          completed: !envResult.recommendations.some(r => r.includes('Console logging')),
          critical: false
        },
        {
          task: 'Security headers configured',
          completed: false, // This needs manual verification
          critical: true
        }
      ]
    },
    {
      category: 'Testing & Validation',
      items: [
        {
          task: 'Payment flow tested with small amounts',
          completed: false, // This needs manual testing
          critical: true
        },
        {
          task: 'Webhook processing tested',
          completed: false, // This needs manual testing
          critical: true
        },
        {
          task: 'Error handling tested',
          completed: false, // This needs manual testing
          critical: false
        },
        {
          task: 'Refund process tested',
          completed: false, // This needs manual testing
          critical: false
        }
      ]
    }
  ];
}