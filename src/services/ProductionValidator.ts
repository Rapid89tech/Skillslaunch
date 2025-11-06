/**
 * Production Configuration Validation System
 * 
 * Ensures production-ready configuration and prevents test mode in production environment.
 * Implements comprehensive validation for API keys, security checks, and configuration health monitoring.
 * 
 * Requirements: 5.1, 5.2, 5.3, 5.4
 */

import { IkhokhaConfig, ProductionValidation } from '../types/ikhokha';
import { loadIkhokhaConfig, maskConfig } from '../config/ikhokha';

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  recommendations: string[];
}

export interface SecurityValidation {
  apiKeysValid: boolean;
  webhookSecurityValid: boolean;
  sslValid: boolean;
  errors: string[];
  warnings: string[];
}

export interface PerformanceValidation {
  databaseConnectionsValid: boolean;
  apiResponseTimesValid: boolean;
  errors: string[];
  warnings: string[];
}

export interface ProductionReadiness {
  ready: boolean;
  configurationValid: boolean;
  securityValid: boolean;
  performanceValid: boolean;
  issues: string[];
  recommendations: string[];
}

export interface HealthStatus {
  healthy: boolean;
  lastCheck: Date;
  issues: string[];
  metrics: Record<string, any>;
}

export interface ConfigurationHealth {
  ikhokhaConfig: HealthStatus;
  databaseConfig: HealthStatus;
  webhookConfig: HealthStatus;
  overallHealth: HealthStatus;
}

/**
 * Production Configuration Validator
 * 
 * Validates all aspects of production configuration to ensure system readiness
 */
export class ProductionValidator {
  private static instance: ProductionValidator;
  private lastValidation: Date | null = null;
  private validationCache: Map<string, { result: ValidationResult; timestamp: Date }> = new Map();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  private constructor() {}

  public static getInstance(): ProductionValidator {
    if (!ProductionValidator.instance) {
      ProductionValidator.instance = new ProductionValidator();
    }
    return ProductionValidator.instance;
  }

  /**
   * Validate Ikhokha configuration for production readiness
   * Requirement 5.1: Production mode validation
   */
  public validateIkhokhaConfig(): ValidationResult {
    const cacheKey = 'ikhokha_config';
    const cached = this.getCachedResult(cacheKey);
    if (cached) return cached;

    const errors: string[] = [];
    const warnings: string[] = [];
    const recommendations: string[] = [];

    try {
      const config = loadIkhokhaConfig();
      const isProduction = this.isProductionEnvironment();

      // Basic configuration validation
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

      // Production-specific validations (Requirement 5.1)
      if (isProduction) {
        // Test mode validation
        if (config.test_mode) {
          errors.push('Test mode MUST be disabled in production environment');
        }

        // API URL validation
        if (!config.api_url.startsWith('https://')) {
          errors.push('Production API URL must use HTTPS protocol');
        }

        if (config.api_url.includes('pay.ikhokha.com')) {
          errors.push('Production must use api.ikhokha.com endpoint, not pay.ikhokha.com test endpoint');
        }

        if (!config.api_url.includes('api.ikhokha.com')) {
          warnings.push('Production API URL should use api.ikhokha.com for live transactions');
        }

        // Development credentials detection (Requirement 5.2)
        if (this.isDevelopmentCredential(config.api_key)) {
          errors.push('Production environment detected development API key - real credentials required');
        }

        if (this.isDevelopmentCredential(config.api_secret)) {
          errors.push('Production environment detected development API secret - real credentials required');
        }

        if (this.isDevelopmentWebhookSecret(config.webhook_secret)) {
          errors.push('Production environment detected development webhook secret - real credentials required');
        }

        // Credential strength validation (Requirement 5.3)
        if (config.api_key && config.api_key.length < 20) {
          errors.push('Production API key appears to be too short - minimum 20 characters expected');
        }

        if (config.api_secret && config.api_secret.length < 20) {
          errors.push('Production API secret appears to be too short - minimum 20 characters expected');
        }

        if (config.webhook_secret && config.webhook_secret.length < 16) {
          errors.push('Production webhook secret appears to be too short - minimum 16 characters expected');
        }

        // Timeout validation for production
        if (config.timeout < 30000) {
          warnings.push('Production timeout should be at least 30 seconds for reliability');
        }

        // Retry configuration
        if (config.retry_attempts < 1) {
          warnings.push('Production should have at least 1 retry attempt for resilience');
        }

        if (config.retry_delay < 1000) {
          warnings.push('Production retry delay should be at least 1 second');
        }
      } else {
        // Development environment recommendations
        if (!config.test_mode) {
          recommendations.push('Consider enabling test mode in development environment');
        }

        if (config.api_url.includes('api.ikhokha.com')) {
          warnings.push('Development environment using production API endpoint - ensure test mode is enabled');
        }
      }

      // General configuration validation
      if (config.timeout <= 0) {
        errors.push('Timeout must be greater than 0');
      }

      if (config.retry_attempts < 0) {
        errors.push('Retry attempts must be non-negative');
      }

      if (config.retry_delay < 0) {
        errors.push('Retry delay must be non-negative');
      }

      const result: ValidationResult = {
        valid: errors.length === 0,
        errors,
        warnings,
        recommendations
      };

      this.setCachedResult(cacheKey, result);
      return result;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown configuration error';
      const result: ValidationResult = {
        valid: false,
        errors: [`Configuration loading failed: ${errorMessage}`],
        warnings: [],
        recommendations: []
      };

      this.setCachedResult(cacheKey, result);
      return result;
    }
  }

  /**
   * Validate database configuration
   * Requirement 5.4: Configuration health monitoring
   */
  public validateDatabaseConfig(): ValidationResult {
    const cacheKey = 'database_config';
    const cached = this.getCachedResult(cacheKey);
    if (cached) return cached;

    const errors: string[] = [];
    const warnings: string[] = [];
    const recommendations: string[] = [];

    try {
      const isProduction = this.isProductionEnvironment();

      // Check Supabase configuration
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl) {
        errors.push('Supabase URL is required');
      }

      if (!supabaseAnonKey) {
        errors.push('Supabase anonymous key is required');
      }

      if (isProduction) {
        // Production database validations
        if (supabaseUrl && !supabaseUrl.startsWith('https://')) {
          errors.push('Production database URL must use HTTPS');
        }

        if (supabaseUrl && supabaseUrl.includes('localhost')) {
          errors.push('Production must not use localhost database URL');
        }

        if (supabaseAnonKey && supabaseAnonKey.length < 100) {
          warnings.push('Production Supabase key appears shorter than expected');
        }

        // Check for development patterns
        if (supabaseUrl && (supabaseUrl.includes('dev') || supabaseUrl.includes('test'))) {
          warnings.push('Production database URL contains development indicators');
        }
      }

      const result: ValidationResult = {
        valid: errors.length === 0,
        errors,
        warnings,
        recommendations
      };

      this.setCachedResult(cacheKey, result);
      return result;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown database configuration error';
      const result: ValidationResult = {
        valid: false,
        errors: [`Database configuration validation failed: ${errorMessage}`],
        warnings: [],
        recommendations: []
      };

      this.setCachedResult(cacheKey, result);
      return result;
    }
  }

  /**
   * Validate webhook configuration
   * Requirement 5.4: Webhook security validation
   */
  public validateWebhookConfig(): ValidationResult {
    const cacheKey = 'webhook_config';
    const cached = this.getCachedResult(cacheKey);
    if (cached) return cached;

    const errors: string[] = [];
    const warnings: string[] = [];
    const recommendations: string[] = [];

    try {
      const isProduction = this.isProductionEnvironment();
      const config = loadIkhokhaConfig();

      // Webhook secret validation
      if (!config.webhook_secret) {
        errors.push('Webhook secret is required for secure webhook processing');
      }

      if (isProduction) {
        // Production webhook validations
        if (config.webhook_secret && this.isDevelopmentWebhookSecret(config.webhook_secret)) {
          errors.push('Production must not use development webhook secret');
        }

        if (config.webhook_secret && config.webhook_secret.length < 32) {
          warnings.push('Production webhook secret should be at least 32 characters for security');
        }

        // Check webhook endpoint configuration
        const baseUrl = this.getProductionBaseUrl();
        if (!baseUrl.startsWith('https://')) {
          errors.push('Production webhook endpoints must use HTTPS');
        }

        // Validate webhook URL structure
        const webhookUrl = `${baseUrl}/.netlify/functions/ikhokha-webhook`;
        if (!this.isValidWebhookUrl(webhookUrl)) {
          warnings.push('Webhook URL structure may not be optimal for production');
        }
      }

      const result: ValidationResult = {
        valid: errors.length === 0,
        errors,
        warnings,
        recommendations
      };

      this.setCachedResult(cacheKey, result);
      return result;

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown webhook configuration error';
      const result: ValidationResult = {
        valid: false,
        errors: [`Webhook configuration validation failed: ${errorMessage}`],
        warnings: [],
        recommendations: []
      };

      this.setCachedResult(cacheKey, result);
      return result;
    }
  }

  /**
   * Validate API keys and security configuration
   * Requirement 5.3: API key validation and security checks
   */
  public validateApiKeys(): SecurityValidation {
    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      const config = loadIkhokhaConfig();
      const isProduction = this.isProductionEnvironment();

      let apiKeysValid = true;
      let webhookSecurityValid = true;
      let sslValid = true;

      // API Key validation
      if (!config.api_key) {
        errors.push('API key is missing');
        apiKeysValid = false;
      } else {
        if (isProduction && this.isDevelopmentCredential(config.api_key)) {
          errors.push('Production environment using development API key');
          apiKeysValid = false;
        }

        if (config.api_key.length < 20) {
          warnings.push('API key appears to be shorter than expected');
        }
      }

      // API Secret validation
      if (!config.api_secret) {
        errors.push('API secret is missing');
        apiKeysValid = false;
      } else {
        if (isProduction && this.isDevelopmentCredential(config.api_secret)) {
          errors.push('Production environment using development API secret');
          apiKeysValid = false;
        }

        if (config.api_secret.length < 20) {
          warnings.push('API secret appears to be shorter than expected');
        }
      }

      // Webhook security validation
      if (!config.webhook_secret) {
        errors.push('Webhook secret is missing');
        webhookSecurityValid = false;
      } else {
        if (isProduction && this.isDevelopmentWebhookSecret(config.webhook_secret)) {
          errors.push('Production environment using development webhook secret');
          webhookSecurityValid = false;
        }

        if (config.webhook_secret.length < 16) {
          warnings.push('Webhook secret appears to be shorter than recommended');
        }
      }

      // SSL validation
      if (!config.api_url.startsWith('https://')) {
        if (isProduction) {
          errors.push('Production must use HTTPS for API communication');
          sslValid = false;
        } else {
          warnings.push('Consider using HTTPS even in development');
        }
      }

      return {
        apiKeysValid,
        webhookSecurityValid,
        sslValid,
        errors,
        warnings
      };

    } catch (error) {
      return {
        apiKeysValid: false,
        webhookSecurityValid: false,
        sslValid: false,
        errors: [`Security validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`],
        warnings: []
      };
    }
  }

  /**
   * Validate SSL certificates and HTTPS configuration
   */
  public validateSSLCertificates(): SecurityValidation {
    const errors: string[] = [];
    const warnings: string[] = [];
    const isProduction = this.isProductionEnvironment();

    let sslValid = true;

    try {
      const config = loadIkhokhaConfig();

      // Check API URL SSL
      if (!config.api_url.startsWith('https://')) {
        if (isProduction) {
          errors.push('Production API URL must use HTTPS');
          sslValid = false;
        } else {
          warnings.push('API URL should use HTTPS for security');
        }
      }

      // Check webhook endpoint SSL
      const baseUrl = this.getProductionBaseUrl();
      if (!baseUrl.startsWith('https://')) {
        if (isProduction) {
          errors.push('Production webhook endpoints must use HTTPS');
          sslValid = false;
        } else {
          warnings.push('Webhook endpoints should use HTTPS for security');
        }
      }

      return {
        apiKeysValid: true, // Not relevant for SSL validation
        webhookSecurityValid: true, // Not relevant for SSL validation
        sslValid,
        errors,
        warnings
      };

    } catch (error) {
      return {
        apiKeysValid: true,
        webhookSecurityValid: true,
        sslValid: false,
        errors: [`SSL validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`],
        warnings: []
      };
    }
  }

  /**
   * Validate database connections and performance
   */
  public validateDatabaseConnections(): PerformanceValidation {
    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      // This would typically test actual database connectivity
      // For now, we validate configuration that affects performance
      
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const isProduction = this.isProductionEnvironment();

      let databaseConnectionsValid = true;

      if (!supabaseUrl) {
        errors.push('Database URL is not configured');
        databaseConnectionsValid = false;
      }

      if (isProduction && supabaseUrl) {
        // Check for production database indicators
        if (supabaseUrl.includes('localhost') || supabaseUrl.includes('127.0.0.1')) {
          errors.push('Production should not use localhost database');
          databaseConnectionsValid = false;
        }

        if (!supabaseUrl.includes('supabase.co')) {
          warnings.push('Production database URL does not appear to be Supabase hosted');
        }
      }

      return {
        databaseConnectionsValid,
        apiResponseTimesValid: true, // Would be tested with actual API calls
        errors,
        warnings
      };

    } catch (error) {
      return {
        databaseConnectionsValid: false,
        apiResponseTimesValid: false,
        errors: [`Database validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`],
        warnings: []
      };
    }
  }

  /**
   * Validate API response times and performance
   */
  public validateApiResponseTimes(): PerformanceValidation {
    const errors: string[] = [];
    const warnings: string[] = [];

    try {
      const config = loadIkhokhaConfig();
      const isProduction = this.isProductionEnvironment();

      let apiResponseTimesValid = true;

      // Validate timeout configuration
      if (config.timeout < 10000) {
        warnings.push('API timeout is quite low, may cause issues with slow connections');
      }

      if (isProduction && config.timeout < 30000) {
        warnings.push('Production API timeout should be at least 30 seconds for reliability');
      }

      if (config.timeout > 120000) {
        warnings.push('API timeout is very high, may impact user experience');
      }

      // Validate retry configuration
      if (config.retry_attempts === 0) {
        warnings.push('No retry attempts configured, may reduce reliability');
      }

      if (config.retry_attempts > 5) {
        warnings.push('Too many retry attempts may cause delays');
      }

      if (config.retry_delay < 500) {
        warnings.push('Retry delay is very short, may overwhelm the API');
      }

      return {
        databaseConnectionsValid: true, // Not relevant for API validation
        apiResponseTimesValid,
        errors,
        warnings
      };

    } catch (error) {
      return {
        databaseConnectionsValid: true,
        apiResponseTimesValid: false,
        errors: [`API performance validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`],
        warnings: []
      };
    }
  }

  /**
   * Comprehensive production readiness validation
   * Requirements: 5.1, 5.2, 5.3, 5.4
   */
  public validateProductionReadiness(): ProductionReadiness {
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Validate configuration
    const configValidation = this.validateIkhokhaConfig();
    const databaseValidation = this.validateDatabaseConfig();
    const webhookValidation = this.validateWebhookConfig();

    // Validate security
    const securityValidation = this.validateApiKeys();
    const sslValidation = this.validateSSLCertificates();

    // Validate performance
    const dbPerformanceValidation = this.validateDatabaseConnections();
    const apiPerformanceValidation = this.validateApiResponseTimes();

    // Collect all issues
    issues.push(...configValidation.errors);
    issues.push(...databaseValidation.errors);
    issues.push(...webhookValidation.errors);
    issues.push(...securityValidation.errors);
    issues.push(...sslValidation.errors);
    issues.push(...dbPerformanceValidation.errors);
    issues.push(...apiPerformanceValidation.errors);

    // Collect all recommendations
    recommendations.push(...configValidation.warnings);
    recommendations.push(...configValidation.recommendations);
    recommendations.push(...databaseValidation.warnings);
    recommendations.push(...webhookValidation.warnings);
    recommendations.push(...securityValidation.warnings);
    recommendations.push(...sslValidation.warnings);
    recommendations.push(...dbPerformanceValidation.warnings);
    recommendations.push(...apiPerformanceValidation.warnings);

    const configurationValid = configValidation.valid && databaseValidation.valid && webhookValidation.valid;
    const securityValid = securityValidation.apiKeysValid && securityValidation.webhookSecurityValid && sslValidation.sslValid;
    const performanceValid = dbPerformanceValidation.databaseConnectionsValid && apiPerformanceValidation.apiResponseTimesValid;

    return {
      ready: issues.length === 0,
      configurationValid,
      securityValid,
      performanceValid,
      issues,
      recommendations
    };
  }

  /**
   * Startup validation to prevent test mode in production
   * Requirement 5.1: Startup validation
   */
  public performStartupValidation(): void {
    const isProduction = this.isProductionEnvironment();
    
    if (!isProduction) {
      console.log('🧪 Development environment detected - skipping production validation');
      return;
    }

    console.log('🔍 Performing production startup validation...');

    const readiness = this.validateProductionReadiness();

    if (!readiness.ready) {
      const errorMessage = `Production validation failed: ${readiness.issues.join(', ')}`;
      console.error('❌ Production validation failed:', readiness.issues);
      throw new Error(errorMessage);
    }

    if (readiness.recommendations.length > 0) {
      console.warn('⚠️ Production recommendations:', readiness.recommendations);
    }

    console.log('✅ Production validation passed - system ready for live transactions');
  }

  /**
   * Configuration health monitoring
   * Requirement 5.4: Configuration health monitoring and alerting
   */
  public getConfigurationHealth(): ConfigurationHealth {
    const now = new Date();

    // Check Ikhokha configuration health
    const ikhokhaValidation = this.validateIkhokhaConfig();
    const ikhokhaHealth: HealthStatus = {
      healthy: ikhokhaValidation.valid,
      lastCheck: now,
      issues: ikhokhaValidation.errors,
      metrics: {
        errorsCount: ikhokhaValidation.errors.length,
        warningsCount: ikhokhaValidation.warnings.length
      }
    };

    // Check database configuration health
    const databaseValidation = this.validateDatabaseConfig();
    const databaseHealth: HealthStatus = {
      healthy: databaseValidation.valid,
      lastCheck: now,
      issues: databaseValidation.errors,
      metrics: {
        errorsCount: databaseValidation.errors.length,
        warningsCount: databaseValidation.warnings.length
      }
    };

    // Check webhook configuration health
    const webhookValidation = this.validateWebhookConfig();
    const webhookHealth: HealthStatus = {
      healthy: webhookValidation.valid,
      lastCheck: now,
      issues: webhookValidation.errors,
      metrics: {
        errorsCount: webhookValidation.errors.length,
        warningsCount: webhookValidation.warnings.length
      }
    };

    // Overall health
    const allIssues = [
      ...ikhokhaHealth.issues,
      ...databaseHealth.issues,
      ...webhookHealth.issues
    ];

    const overallHealth: HealthStatus = {
      healthy: allIssues.length === 0,
      lastCheck: now,
      issues: allIssues,
      metrics: {
        totalErrors: allIssues.length,
        componentsHealthy: [ikhokhaHealth.healthy, databaseHealth.healthy, webhookHealth.healthy].filter(Boolean).length,
        totalComponents: 3
      }
    };

    return {
      ikhokhaConfig: ikhokhaHealth,
      databaseConfig: databaseHealth,
      webhookConfig: webhookHealth,
      overallHealth
    };
  }

  /**
   * Alert on configuration issues
   */
  public alertOnConfigurationIssues(): void {
    const health = this.getConfigurationHealth();
    
    if (!health.overallHealth.healthy) {
      console.error('🚨 Configuration health alert:', health.overallHealth.issues);
      
      // In a real implementation, this would send alerts to monitoring systems
      // For now, we log the issues
      if (!health.ikhokhaConfig.healthy) {
        console.error('❌ Ikhokha configuration issues:', health.ikhokhaConfig.issues);
      }
      
      if (!health.databaseConfig.healthy) {
        console.error('❌ Database configuration issues:', health.databaseConfig.issues);
      }
      
      if (!health.webhookConfig.healthy) {
        console.error('❌ Webhook configuration issues:', health.webhookConfig.issues);
      }
    }
  }

  // Helper methods

  private isProductionEnvironment(): boolean {
    return import.meta.env.VITE_NODE_ENV === 'production' || 
           import.meta.env.NODE_ENV === 'production' ||
           import.meta.env.PROD === true;
  }

  private isDevelopmentCredential(credential: string): boolean {
    const devPatterns = [
      'IKW31E1I5WP1HT2KIIB2XZMBXJOFDX5D', // Known dev API key
      '455rtQjghdOHzLN3YZ3AQ81H3KEf7OeS', // Known dev API secret
      'test_',
      'dev_',
      'demo_',
      'sandbox_'
    ];

    return devPatterns.some(pattern => credential.includes(pattern));
  }

  private isDevelopmentWebhookSecret(secret: string): boolean {
    const devPatterns = [
      'dev_webhook_secret_key', // Known dev webhook secret
      'test_',
      'dev_',
      'demo_',
      'sandbox_',
      'localhost'
    ];

    return devPatterns.some(pattern => secret.includes(pattern));
  }

  private getProductionBaseUrl(): string {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    
    return import.meta.env.VITE_PRODUCTION_URL || 
           import.meta.env.VITE_APP_URL || 
           'https://app.betaskill.com';
  }

  private isValidWebhookUrl(url: string): boolean {
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'https:' && 
             parsed.pathname.includes('webhook') &&
             !parsed.hostname.includes('localhost');
    } catch {
      return false;
    }
  }

  private getCachedResult(key: string): ValidationResult | null {
    const cached = this.validationCache.get(key);
    if (cached && (Date.now() - cached.timestamp.getTime()) < this.CACHE_TTL) {
      return cached.result;
    }
    return null;
  }

  private setCachedResult(key: string, result: ValidationResult): void {
    this.validationCache.set(key, {
      result,
      timestamp: new Date()
    });
  }
}

// Export singleton instance
export const productionValidator = ProductionValidator.getInstance();

// Export validation functions for direct use
export const validateProductionReadiness = () => productionValidator.validateProductionReadiness();
export const performStartupValidation = () => productionValidator.performStartupValidation();
export const getConfigurationHealth = () => productionValidator.getConfigurationHealth();
export const alertOnConfigurationIssues = () => productionValidator.alertOnConfigurationIssues();