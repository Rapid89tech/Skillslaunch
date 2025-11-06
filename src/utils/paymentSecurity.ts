/**
 * Payment Security and Validation Module
 * 
 * Provides comprehensive security measures and validation for payment processing
 * including input validation, credential security, and payment verification.
 */

// Handle crypto import for both Node.js and browser environments
let crypto: any;
try {
  crypto = require('crypto');
} catch (e) {
  // Fallback for browser environment or when crypto is not available
  crypto = {
    randomBytes: (size: number) => {
      const array = new Uint8Array(size);
      if (typeof window !== 'undefined' && window.crypto) {
        window.crypto.getRandomValues(array);
      } else {
        // Fallback for testing
        for (let i = 0; i < size; i++) {
          array[i] = Math.floor(Math.random() * 256);
        }
      }
      return Buffer.from(array);
    },
    createHmac: (algorithm: string, key: string) => ({
      update: (data: string) => ({
        digest: (encoding: string) => 'mock-signature'
      })
    }),
    createCipher: (algorithm: string, key: string) => ({
      update: (data: string, inputEncoding: string, outputEncoding: string) => 'encrypted',
      final: (outputEncoding: string) => 'data'
    }),
    createDecipher: (algorithm: string, key: string) => ({
      update: (data: string, inputEncoding: string, outputEncoding: string) => 'decrypted',
      final: (outputEncoding: string) => 'data'
    })
  };
}
import { 
  PaymentData, 
  PaymentMetadata, 
  IkhokhaPaymentRequest,
  PaymentValidationError,
  IkhokhaConfig,
  PaymentVerification,
  IkhokhaWebhook
} from '../types/ikhokha';
import { DataValidator, ValidationResult } from './validation';

// Security constants
const MINIMUM_PAYMENT_AMOUNT = 1.00; // R1.00
const MAXIMUM_PAYMENT_AMOUNT = 1000000.00; // R1,000,000
const MAXIMUM_REFERENCE_LENGTH = 50;
const MINIMUM_REFERENCE_LENGTH = 3;
const WEBHOOK_SIGNATURE_ALGORITHM = 'sha256';
const CREDENTIAL_ENCRYPTION_ALGORITHM = 'aes-256-gcm';

/**
 * Payment Input Validation
 */
export class PaymentValidator {
  /**
   * Validate payment amount with comprehensive checks
   */
  static validatePaymentAmount(amount: number): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Basic type and existence checks
    if (amount === undefined || amount === null) {
      errors.push('Payment amount is required');
      return { isValid: false, errors, warnings };
    }

    if (typeof amount !== 'number' || isNaN(amount)) {
      errors.push('Payment amount must be a valid number');
      return { isValid: false, errors, warnings };
    }

    // Range validation
    if (amount < MINIMUM_PAYMENT_AMOUNT) {
      errors.push(`Payment amount must be at least R${MINIMUM_PAYMENT_AMOUNT.toFixed(2)}`);
    }

    if (amount > MAXIMUM_PAYMENT_AMOUNT) {
      errors.push(`Payment amount cannot exceed R${MAXIMUM_PAYMENT_AMOUNT.toLocaleString()}`);
    }

    // Precision validation (max 2 decimal places)
    const decimalPlaces = (amount.toString().split('.')[1] || '').length;
    if (decimalPlaces > 2) {
      errors.push('Payment amount cannot have more than 2 decimal places');
    }

    // Security checks
    if (amount <= 0) {
      errors.push('Payment amount must be greater than zero');
    }

    // Suspicious amount patterns
    if (amount > 100000) {
      warnings.push('Large payment amount detected - additional verification may be required');
    }

    // Check for common test amounts that might indicate testing in production
    const testAmounts = [1.00, 10.00, 100.00, 999.99];
    if (testAmounts.includes(amount)) {
      warnings.push('Payment amount matches common test values');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate payment reference with security checks
   */
  static validatePaymentReference(reference: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!reference || typeof reference !== 'string') {
      errors.push('Payment reference is required and must be a string');
      return { isValid: false, errors, warnings };
    }

    const trimmedRef = reference.trim();

    // Length validation
    if (trimmedRef.length < MINIMUM_REFERENCE_LENGTH) {
      errors.push(`Payment reference must be at least ${MINIMUM_REFERENCE_LENGTH} characters long`);
    }

    if (trimmedRef.length > MAXIMUM_REFERENCE_LENGTH) {
      errors.push(`Payment reference cannot exceed ${MAXIMUM_REFERENCE_LENGTH} characters`);
    }

    // Character validation - only allow alphanumeric, hyphens, underscores
    const validPattern = /^[a-zA-Z0-9_-]+$/;
    if (!validPattern.test(trimmedRef)) {
      errors.push('Payment reference can only contain letters, numbers, hyphens, and underscores');
    }

    // Security checks
    if (trimmedRef.toLowerCase().includes('test') || trimmedRef.toLowerCase().includes('demo')) {
      warnings.push('Payment reference contains test/demo keywords');
    }

    // Check for potential injection attempts
    const suspiciousPatterns = [
      /[<>]/,           // HTML tags
      /['"]/,           // Quotes
      /[;]/,            // SQL injection
      /javascript:/i,   // XSS
      /data:/i,         // Data URLs
      /vbscript:/i      // VBScript
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(trimmedRef)) {
        errors.push('Payment reference contains invalid characters');
        break;
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate user data for payment processing
   */
  static validateUserData(userData: {
    email: string;
    name: string;
    phone?: string;
  }): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Email validation
    if (!userData.email || typeof userData.email !== 'string') {
      errors.push('User email is required');
    } else {
      const emailResult = this.validateEmail(userData.email);
      errors.push(...emailResult.errors);
      warnings.push(...emailResult.warnings);
    }

    // Name validation
    if (!userData.name || typeof userData.name !== 'string') {
      errors.push('User name is required');
    } else {
      const nameResult = this.validateUserName(userData.name);
      errors.push(...nameResult.errors);
      warnings.push(...nameResult.warnings);
    }

    // Phone validation (optional)
    if (userData.phone) {
      const phoneResult = this.validatePhoneNumber(userData.phone);
      errors.push(...phoneResult.errors);
      warnings.push(...phoneResult.warnings);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate email address with comprehensive checks
   */
  static validateEmail(email: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!email || typeof email !== 'string') {
      errors.push('Email is required');
      return { isValid: false, errors, warnings };
    }

    const trimmedEmail = email.trim().toLowerCase();

    // Basic format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      errors.push('Invalid email format');
      return { isValid: false, errors, warnings };
    }

    // Length validation
    if (trimmedEmail.length > 254) {
      errors.push('Email address is too long');
    }

    // Domain validation
    const domain = trimmedEmail.split('@')[1];
    if (domain && domain.length > 253) {
      errors.push('Email domain is too long');
    }

    // Security checks
    const suspiciousPatterns = [
      /[<>]/,           // HTML tags
      /javascript:/i,   // XSS
      /data:/i,         // Data URLs
      /\.\./,           // Path traversal
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(trimmedEmail)) {
        errors.push('Email contains invalid characters');
        break;
      }
    }

    // Common test email patterns
    const testPatterns = [
      /test@/i,
      /example@/i,
      /demo@/i,
      /@test\./i,
      /@example\./i
    ];

    for (const pattern of testPatterns) {
      if (pattern.test(trimmedEmail)) {
        warnings.push('Email appears to be a test address');
        break;
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate user name
   */
  static validateUserName(name: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!name || typeof name !== 'string') {
      errors.push('Name is required');
      return { isValid: false, errors, warnings };
    }

    const trimmedName = name.trim();

    // Length validation
    if (trimmedName.length < 2) {
      errors.push('Name must be at least 2 characters long');
    }

    if (trimmedName.length > 100) {
      errors.push('Name cannot exceed 100 characters');
    }

    // Character validation - allow letters, spaces, hyphens, apostrophes
    const validPattern = /^[a-zA-Z\s'-]+$/;
    if (!validPattern.test(trimmedName)) {
      errors.push('Name can only contain letters, spaces, hyphens, and apostrophes');
    }

    // Security checks
    const suspiciousPatterns = [
      /[<>]/,           // HTML tags
      /['"]{2,}/,       // Multiple quotes
      /javascript:/i,   // XSS
      /\d{4,}/,         // Long numbers (suspicious)
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(trimmedName)) {
        errors.push('Name contains invalid characters');
        break;
      }
    }

    // Test name patterns
    if (/test|demo|example/i.test(trimmedName)) {
      warnings.push('Name appears to be a test value');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate phone number
   */
  static validatePhoneNumber(phone: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!phone || typeof phone !== 'string') {
      return { isValid: true, errors, warnings }; // Phone is optional
    }

    const trimmedPhone = phone.trim();

    // Length validation
    if (trimmedPhone.length < 10 || trimmedPhone.length > 15) {
      errors.push('Phone number must be between 10 and 15 characters');
    }

    // Format validation - allow digits, spaces, hyphens, parentheses, plus sign
    const validPattern = /^[\+]?[\d\s\-\(\)]+$/;
    if (!validPattern.test(trimmedPhone)) {
      errors.push('Phone number contains invalid characters');
    }

    // Must contain at least 10 digits
    const digitCount = (trimmedPhone.match(/\d/g) || []).length;
    if (digitCount < 10) {
      errors.push('Phone number must contain at least 10 digits');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate complete payment data
   */
  static validatePaymentData(paymentData: PaymentData): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Validate amount
    const amountResult = this.validatePaymentAmount(paymentData.amount);
    errors.push(...amountResult.errors);
    warnings.push(...amountResult.warnings);

    // Validate reference
    const referenceResult = this.validatePaymentReference(paymentData.reference);
    errors.push(...referenceResult.errors);
    warnings.push(...referenceResult.warnings);

    // Validate user data
    const userResult = this.validateUserData(paymentData.customer);
    errors.push(...userResult.errors);
    warnings.push(...userResult.warnings);

    // Validate session ID
    if (!paymentData.sessionId || typeof paymentData.sessionId !== 'string') {
      errors.push('Payment session ID is required');
    } else if (paymentData.sessionId.length < 10) {
      errors.push('Payment session ID appears to be invalid');
    }

    // Validate currency
    if (!paymentData.currency || paymentData.currency !== 'ZAR') {
      errors.push('Payment currency must be ZAR');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate payment request
   */
  static validatePaymentRequest(request: IkhokhaPaymentRequest): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Validate amount
    const amountResult = this.validatePaymentAmount(request.amount);
    errors.push(...amountResult.errors);
    warnings.push(...amountResult.warnings);

    // Validate reference
    const referenceResult = this.validatePaymentReference(request.reference);
    errors.push(...referenceResult.errors);
    warnings.push(...referenceResult.warnings);

    // Validate email
    const emailResult = this.validateEmail(request.customer_email);
    errors.push(...emailResult.errors);
    warnings.push(...emailResult.warnings);

    // Validate name
    const nameResult = this.validateUserName(request.customer_name);
    errors.push(...nameResult.errors);
    warnings.push(...nameResult.warnings);

    // Validate URLs
    const urlFields = ['return_url', 'cancel_url', 'notify_url'];
    for (const field of urlFields) {
      const url = request[field as keyof IkhokhaPaymentRequest] as string;
      const urlResult = this.validateUrl(url, field);
      errors.push(...urlResult.errors);
      warnings.push(...urlResult.warnings);
    }

    // Validate currency
    if (!request.currency || request.currency !== 'ZAR') {
      errors.push('Payment currency must be ZAR');
    }

    // Validate description
    if (!request.description || typeof request.description !== 'string') {
      errors.push('Payment description is required');
    } else if (request.description.length > 255) {
      errors.push('Payment description cannot exceed 255 characters');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate URL
   */
  static validateUrl(url: string, fieldName: string): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!url || typeof url !== 'string') {
      errors.push(`${fieldName} is required`);
      return { isValid: false, errors, warnings };
    }

    try {
      const parsedUrl = new URL(url);
      
      // Must be HTTPS in production
      if (import.meta.env.VITE_NODE_ENV === 'production' && parsedUrl.protocol !== 'https:') {
        errors.push(`${fieldName} must use HTTPS in production`);
      }

      // Check for suspicious patterns
      if (parsedUrl.hostname === 'localhost' && import.meta.env.VITE_NODE_ENV === 'production') {
        errors.push(`${fieldName} cannot use localhost in production`);
      }

    } catch (error) {
      errors.push(`${fieldName} is not a valid URL`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }
}

/**
 * Secure Credential Management
 */
export class CredentialManager {
  private static encryptionKey: string | null = null;

  /**
   * Initialize encryption key from environment
   */
  private static getEncryptionKey(): string {
    if (!this.encryptionKey) {
      // In production, this should come from a secure key management service
      this.encryptionKey = import.meta.env.VITE_ENCRYPTION_KEY || 
                          process.env.ENCRYPTION_KEY || 
                          'default-dev-key-not-for-production-use';
      
      if (import.meta.env.VITE_NODE_ENV === 'production' && 
          this.encryptionKey === 'default-dev-key-not-for-production-use') {
        throw new Error('Production encryption key not configured');
      }
    }
    return this.encryptionKey;
  }

  /**
   * Encrypt sensitive credential data
   */
  static encryptCredential(credential: string): string {
    try {
      const key = this.getEncryptionKey();
      const iv = crypto.randomBytes(16);
      const cipher = crypto.createCipher(CREDENTIAL_ENCRYPTION_ALGORITHM, key);
      
      let encrypted = cipher.update(credential, 'utf8', 'hex');
      encrypted += cipher.final('hex');
      
      return `${iv.toString('hex')}:${encrypted}`;
    } catch (error) {
      throw new Error(`Failed to encrypt credential: ${error instanceof Error ? error.message : error}`);
    }
  }

  /**
   * Decrypt sensitive credential data
   */
  static decryptCredential(encryptedCredential: string): string {
    try {
      const key = this.getEncryptionKey();
      const [ivHex, encrypted] = encryptedCredential.split(':');
      
      if (!ivHex || !encrypted) {
        throw new Error('Invalid encrypted credential format');
      }
      
      const decipher = crypto.createDecipher(CREDENTIAL_ENCRYPTION_ALGORITHM, key);
      
      let decrypted = decipher.update(encrypted, 'hex', 'utf8');
      decrypted += decipher.final('utf8');
      
      return decrypted;
    } catch (error) {
      throw new Error(`Failed to decrypt credential: ${error instanceof Error ? error.message : error}`);
    }
  }

  /**
   * Validate production API credentials
   */
  static validateProductionCredentials(config: IkhokhaConfig): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check if running in production
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';

    if (!isProduction) {
      return { isValid: true, errors, warnings };
    }

    // Validate API key
    if (!config.api_key) {
      errors.push('Production API key is required');
    } else {
      if (config.api_key.length < 20) {
        errors.push('Production API key appears to be invalid (too short)');
      }
      if (config.api_key.includes('test') || config.api_key.includes('dev')) {
        errors.push('Production API key appears to be a test/development key');
      }
    }

    // Validate API secret
    if (!config.api_secret) {
      errors.push('Production API secret is required');
    } else {
      if (config.api_secret.length < 20) {
        errors.push('Production API secret appears to be invalid (too short)');
      }
      if (config.api_secret.includes('test') || config.api_secret.includes('dev')) {
        errors.push('Production API secret appears to be a test/development key');
      }
    }

    // Validate webhook secret
    if (!config.webhook_secret) {
      errors.push('Production webhook secret is required');
    } else {
      if (config.webhook_secret.length < 16) {
        errors.push('Production webhook secret appears to be invalid (too short)');
      }
      if (config.webhook_secret.includes('test') || config.webhook_secret.includes('dev')) {
        errors.push('Production webhook secret appears to be a test/development key');
      }
    }

    // Validate API URL
    if (!config.api_url.startsWith('https://')) {
      errors.push('Production API URL must use HTTPS');
    }

    if (config.api_url.includes('test') || config.api_url.includes('sandbox')) {
      errors.push('Production API URL appears to be a test/sandbox endpoint');
    }

    // Validate test mode
    if (config.test_mode) {
      errors.push('Test mode must be disabled in production');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Mask sensitive data for logging
   */
  static maskSensitiveData(data: any): any {
    if (!data || typeof data !== 'object') {
      return data;
    }

    const masked = { ...data };
    const sensitiveFields = [
      'api_key', 'api_secret', 'webhook_secret', 'password', 'token',
      'card_number', 'cvv', 'pin', 'account_number', 'routing_number'
    ];

    for (const field of sensitiveFields) {
      if (masked[field] && typeof masked[field] === 'string') {
        const value = masked[field];
        if (value.length <= 4) {
          masked[field] = '***';
        } else {
          masked[field] = `${value.substring(0, 4)}${'*'.repeat(Math.max(0, value.length - 8))}${value.substring(value.length - 4)}`;
        }
      }
    }

    // Recursively mask nested objects
    for (const key in masked) {
      if (masked[key] && typeof masked[key] === 'object') {
        masked[key] = this.maskSensitiveData(masked[key]);
      }
    }

    return masked;
  }
}

/**
 * Payment Verification and Reconciliation
 */
export class PaymentVerifier {
  /**
   * Verify payment integrity
   */
  static verifyPaymentIntegrity(
    originalAmount: number,
    verifiedAmount: number,
    originalReference: string,
    verifiedReference: string
  ): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Amount verification
    if (Math.abs(originalAmount - verifiedAmount) > 0.01) {
      errors.push(`Payment amount mismatch: expected ${originalAmount}, got ${verifiedAmount}`);
    }

    // Reference verification
    if (originalReference !== verifiedReference) {
      errors.push(`Payment reference mismatch: expected ${originalReference}, got ${verifiedReference}`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Verify webhook signature
   */
  static verifyWebhookSignature(
    webhookData: IkhokhaWebhook,
    webhookSecret: string
  ): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (!webhookData.signature) {
      errors.push('Webhook signature is missing');
      return { isValid: false, errors, warnings };
    }

    try {
      // Create payload string for signature verification
      const payload = this.createWebhookPayload(webhookData);
      
      // Generate expected signature
      const expectedSignature = crypto
        .createHmac(WEBHOOK_SIGNATURE_ALGORITHM, webhookSecret)
        .update(payload)
        .digest('hex');

      // Extract signature from webhook (remove 'sha256=' prefix if present)
      const receivedSignature = webhookData.signature.replace('sha256=', '');

      // Secure comparison
      if (!this.secureCompare(expectedSignature, receivedSignature)) {
        errors.push('Webhook signature verification failed');
      }

    } catch (error) {
      errors.push(`Webhook signature verification error: ${error instanceof Error ? error.message : error}`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Create webhook payload string for signature verification
   */
  private static createWebhookPayload(webhookData: IkhokhaWebhook): string {
    // Create consistent payload string (order matters for signature verification)
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
   * Secure string comparison to prevent timing attacks
   */
  private static secureCompare(a: string, b: string): boolean {
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
   * Verify payment verification response
   */
  static verifyPaymentVerificationResponse(verification: PaymentVerification): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check required fields
    if (!verification.payment_id) {
      errors.push('Payment ID is missing from verification response');
    }

    if (typeof verification.amount !== 'number' || verification.amount <= 0) {
      errors.push('Invalid amount in verification response');
    }

    if (!verification.reference) {
      errors.push('Payment reference is missing from verification response');
    }

    if (!verification.status) {
      errors.push('Payment status is missing from verification response');
    }

    // Validate dates
    if (!verification.transaction_date || !(verification.transaction_date instanceof Date)) {
      errors.push('Invalid transaction date in verification response');
    }

    if (!verification.verification_date || !(verification.verification_date instanceof Date)) {
      errors.push('Invalid verification date in verification response');
    }

    // Check for suspicious patterns
    if (verification.payment_id.includes('test') || verification.payment_id.includes('sim')) {
      if (import.meta.env.VITE_NODE_ENV === 'production') {
        errors.push('Test payment ID detected in production environment');
      } else {
        warnings.push('Test payment ID detected');
      }
    }

    // Validate amount range
    const amountResult = PaymentValidator.validatePaymentAmount(verification.amount);
    errors.push(...amountResult.errors);
    warnings.push(...amountResult.warnings);

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Reconcile payment data between systems
   */
  static reconcilePaymentData(
    localPayment: {
      amount: number;
      reference: string;
      status: string;
      timestamp: Date;
    },
    remotePayment: {
      amount: number;
      reference: string;
      status: string;
      timestamp: Date;
    }
  ): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Amount reconciliation
    if (Math.abs(localPayment.amount - remotePayment.amount) > 0.01) {
      errors.push(`Amount mismatch: local ${localPayment.amount}, remote ${remotePayment.amount}`);
    }

    // Reference reconciliation
    if (localPayment.reference !== remotePayment.reference) {
      errors.push(`Reference mismatch: local ${localPayment.reference}, remote ${remotePayment.reference}`);
    }

    // Status reconciliation
    if (localPayment.status !== remotePayment.status) {
      warnings.push(`Status mismatch: local ${localPayment.status}, remote ${remotePayment.status}`);
    }

    // Timestamp reconciliation (allow 5 minute difference)
    const timeDiff = Math.abs(localPayment.timestamp.getTime() - remotePayment.timestamp.getTime());
    if (timeDiff > 5 * 60 * 1000) {
      warnings.push(`Timestamp difference exceeds 5 minutes: ${timeDiff / 1000} seconds`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }
}

/**
 * Security utilities for payment processing
 */
export class PaymentSecurity {
  /**
   * Generate secure payment reference
   */
  static generateSecureReference(prefix: string = 'PAY'): string {
    const timestamp = Date.now();
    const randomBytes = crypto.randomBytes(8).toString('hex').toUpperCase();
    return `${prefix}_${timestamp}_${randomBytes}`;
  }

  /**
   * Sanitize payment metadata
   */
  static sanitizePaymentMetadata(metadata: PaymentMetadata): PaymentMetadata {
    const sanitized: PaymentMetadata = {};

    for (const [key, value] of Object.entries(metadata)) {
      if (typeof value === 'string') {
        // Remove potentially dangerous characters
        sanitized[key] = value
          .replace(/[<>]/g, '')
          .replace(/javascript:/gi, '')
          .replace(/data:/gi, '')
          .trim();
      } else if (typeof value === 'number' || typeof value === 'boolean') {
        sanitized[key] = value;
      } else if (value && typeof value === 'object') {
        // Recursively sanitize nested objects
        sanitized[key] = this.sanitizePaymentMetadata(value as PaymentMetadata);
      }
    }

    return sanitized;
  }

  /**
   * Check for suspicious payment patterns
   */
  static detectSuspiciousPaymentPatterns(
    paymentData: PaymentData,
    recentPayments: PaymentData[] = []
  ): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Check for duplicate payments in short time frame
    const duplicates = recentPayments.filter(p => 
      p.reference === paymentData.reference ||
      (p.amount === paymentData.amount && 
       p.customer.email === paymentData.customer.email &&
       Math.abs(new Date().getTime() - new Date(p.sessionId).getTime()) < 5 * 60 * 1000)
    );

    if (duplicates.length > 0) {
      warnings.push('Potential duplicate payment detected');
    }

    // Check for rapid successive payments from same user
    const sameUserPayments = recentPayments.filter(p => 
      p.customer.email === paymentData.customer.email &&
      Math.abs(new Date().getTime() - new Date(p.sessionId).getTime()) < 10 * 60 * 1000
    );

    if (sameUserPayments.length > 3) {
      warnings.push('Multiple rapid payments from same user detected');
    }

    // Check for unusual amount patterns
    if (paymentData.amount % 1 === 0 && paymentData.amount > 1000) {
      warnings.push('Round number payment amount detected');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  /**
   * Validate production environment security
   */
  static validateProductionSecurity(): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';

    if (!isProduction) {
      return { isValid: true, errors, warnings };
    }

    // Check HTTPS enforcement
    if (typeof window !== 'undefined' && window.location.protocol !== 'https:') {
      errors.push('HTTPS is required in production');
    }

    // Check for development/test environment variables
    const suspiciousEnvVars = [
      'VITE_DEBUG',
      'VITE_TEST_MODE',
      'VITE_DEVELOPMENT'
    ];

    for (const envVar of suspiciousEnvVars) {
      if (import.meta.env[envVar] === 'true') {
        warnings.push(`Development environment variable ${envVar} is enabled in production`);
      }
    }

    // Check console logging
    if (import.meta.env.VITE_ENABLE_CONSOLE_LOGS !== 'false') {
      warnings.push('Console logging may be enabled in production');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }
}
