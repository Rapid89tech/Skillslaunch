/**
 * Webhook Validation Utilities
 * 
 * Provides comprehensive validation for webhook data and signatures
 * Ensures security and data integrity for production webhook processing
 */

import { IkhokhaWebhook, WebhookValidationError } from '../types/ikhokha';
import { ikhokhaConfig } from '../config/ikhokha';

export interface WebhookValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  securityScore: number; // 0-100
}

export interface WebhookSecurityCheck {
  signatureValid: boolean;
  timestampValid: boolean;
  dataIntegrityValid: boolean;
  rateLimitOk: boolean;
  ipAllowed: boolean;
}

/**
 * Comprehensive webhook validation
 */
export function validateWebhook(
  webhookData: IkhokhaWebhook,
  signature?: string,
  clientIp?: string,
  headers?: Record<string, string>
): WebhookValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let securityScore = 100;

  try {
    // 1. Data structure validation
    const dataValidation = validateWebhookData(webhookData);
    if (!dataValidation.valid) {
      errors.push(...dataValidation.errors);
      securityScore -= 30;
    }

    // 2. Signature validation
    if (signature) {
      const signatureValid = validateWebhookSignature(webhookData, signature);
      if (!signatureValid) {
        errors.push('Invalid webhook signature');
        securityScore -= 40;
      }
    } else {
      const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
      if (isProduction) {
        errors.push('Missing webhook signature in production');
        securityScore -= 50;
      } else {
        warnings.push('Webhook signature not provided (development mode)');
        securityScore -= 10;
      }
    }

    // 3. Timestamp validation
    const timestampValid = validateWebhookTimestamp(webhookData.timestamp);
    if (!timestampValid) {
      errors.push('Invalid or expired webhook timestamp');
      securityScore -= 20;
    }

    // 4. Rate limiting check
    if (clientIp) {
      const rateLimitOk = checkRateLimit(clientIp);
      if (!rateLimitOk) {
        errors.push('Rate limit exceeded');
        securityScore -= 15;
      }
    }

    // 5. Additional security checks
    const securityChecks = performSecurityChecks(webhookData, headers);
    if (securityChecks.warnings.length > 0) {
      warnings.push(...securityChecks.warnings);
      securityScore -= securityChecks.warnings.length * 5;
    }

    return {
      valid: errors.length === 0,
      errors,
      warnings,
      securityScore: Math.max(0, securityScore)
    };

  } catch (error) {
    return {
      valid: false,
      errors: [`Validation error: ${error instanceof Error ? error.message : error}`],
      warnings,
      securityScore: 0
    };
  }
}

/**
 * Validate webhook data structure and content
 */
export function validateWebhookData(webhookData: IkhokhaWebhook): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Required fields validation
  const requiredFields: (keyof IkhokhaWebhook)[] = [
    'transaction_id',
    'reference',
    'amount',
    'currency',
    'status',
    'timestamp',
    'response_code',
    'response_message'
  ];

  for (const field of requiredFields) {
    if (!webhookData[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Data type and format validation
  if (webhookData.amount !== undefined) {
    if (typeof webhookData.amount !== 'number' || webhookData.amount <= 0) {
      errors.push('Amount must be a positive number');
    }
    
    if (webhookData.amount > 10000000) { // 10M ZAR limit
      errors.push('Amount exceeds maximum allowed limit');
    }
  }

  // Currency validation
  if (webhookData.currency && webhookData.currency !== 'ZAR') {
    errors.push('Only ZAR currency is supported');
  }

  // Status validation
  if (webhookData.status) {
    const validStatuses = ['completed', 'failed', 'cancelled', 'pending', 'processing'];
    if (!validStatuses.includes(webhookData.status)) {
      errors.push(`Invalid status: ${webhookData.status}`);
    }
  }

  // Transaction ID format validation
  if (webhookData.transaction_id) {
    if (typeof webhookData.transaction_id !== 'string' || webhookData.transaction_id.length < 5) {
      errors.push('Invalid transaction ID format');
    }
  }

  // Reference validation
  if (webhookData.reference) {
    if (typeof webhookData.reference !== 'string' || webhookData.reference.length < 3) {
      errors.push('Invalid reference format');
    }
  }

  // Response code validation
  if (webhookData.response_code) {
    if (typeof webhookData.response_code !== 'string') {
      errors.push('Response code must be a string');
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate webhook signature
 */
export function validateWebhookSignature(
  webhookData: IkhokhaWebhook,
  signature: string
): boolean {
  try {
    const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
    
    // In development, allow bypassing signature validation
    if (!isProduction && !signature) {
      return true;
    }

    if (!signature) {
      return false;
    }

    // Check signature format
    if (!signature.startsWith('sha256=')) {
      return false;
    }

    // Extract signature value
    const signatureValue = signature.replace('sha256=', '');
    
    // Validate signature length (SHA256 produces 64 character hex string)
    if (signatureValue.length !== 64) {
      return false;
    }

    // Validate hex format
    if (!/^[a-f0-9]{64}$/i.test(signatureValue)) {
      return false;
    }

    // In browser environment, we can't perform actual HMAC validation
    // The real validation happens server-side in the Netlify function
    // This is just a format check
    return true;

  } catch (error) {
    console.error('❌ Signature validation error:', error);
    return false;
  }
}

/**
 * Validate webhook timestamp
 */
export function validateWebhookTimestamp(timestamp: string): boolean {
  try {
    const webhookTime = new Date(timestamp);
    const now = new Date();
    
    // Check if timestamp is valid
    if (isNaN(webhookTime.getTime())) {
      return false;
    }
    
    // Check if timestamp is within acceptable range (5 minutes)
    const timeDiff = Math.abs(now.getTime() - webhookTime.getTime());
    const maxDiff = 5 * 60 * 1000; // 5 minutes in milliseconds
    
    return timeDiff <= maxDiff;
    
  } catch (error) {
    return false;
  }
}

/**
 * Rate limiting check
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(clientIp: string): boolean {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 30; // 30 requests per minute per IP

  const entry = rateLimitMap.get(clientIp);
  
  if (!entry || now > entry.resetTime) {
    // New window or expired entry
    rateLimitMap.set(clientIp, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count++;
  return true;
}

/**
 * Perform additional security checks
 */
export function performSecurityChecks(
  webhookData: IkhokhaWebhook,
  headers?: Record<string, string>
): {
  warnings: string[];
  recommendations: string[];
} {
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Check for suspicious patterns
  if (webhookData.amount && webhookData.amount > 100000) {
    warnings.push('High value transaction detected');
    recommendations.push('Consider additional verification for high-value transactions');
  }

  // Check for repeated transactions
  if (isRepeatedTransaction(webhookData)) {
    warnings.push('Potential duplicate transaction detected');
    recommendations.push('Verify transaction uniqueness');
  }

  // Check headers for security indicators
  if (headers) {
    if (!headers['user-agent'] || headers['user-agent'].length < 5) {
      warnings.push('Missing or suspicious User-Agent header');
    }

    if (headers['x-forwarded-for'] && headers['x-forwarded-for'].split(',').length > 5) {
      warnings.push('Suspicious proxy chain detected');
    }
  }

  // Check for test data in production
  const isProduction = import.meta.env.VITE_NODE_ENV === 'production';
  if (isProduction) {
    if (webhookData.transaction_id?.includes('test_') || 
        webhookData.reference?.includes('test_')) {
      warnings.push('Test data detected in production environment');
    }
  }

  return { warnings, recommendations };
}

/**
 * Check for repeated transactions (basic implementation)
 */
const recentTransactions = new Map<string, number>();

function isRepeatedTransaction(webhookData: IkhokhaWebhook): boolean {
  const key = `${webhookData.transaction_id}_${webhookData.amount}`;
  const now = Date.now();
  const lastSeen = recentTransactions.get(key);
  
  if (lastSeen && (now - lastSeen) < 60000) { // Within 1 minute
    return true;
  }
  
  recentTransactions.set(key, now);
  
  // Clean up old entries
  if (recentTransactions.size > 1000) {
    const cutoff = now - 300000; // 5 minutes ago
    for (const [k, timestamp] of recentTransactions.entries()) {
      if (timestamp < cutoff) {
        recentTransactions.delete(k);
      }
    }
  }
  
  return false;
}

/**
 * Generate webhook validation report
 */
export function generateWebhookValidationReport(
  webhookData: IkhokhaWebhook,
  validationResult: WebhookValidationResult
): string {
  const lines: string[] = [];
  
  lines.push('=== Webhook Validation Report ===');
  lines.push(`Transaction ID: ${webhookData.transaction_id}`);
  lines.push(`Reference: ${webhookData.reference}`);
  lines.push(`Amount: ${webhookData.amount} ${webhookData.currency}`);
  lines.push(`Status: ${webhookData.status}`);
  lines.push(`Timestamp: ${webhookData.timestamp}`);
  lines.push('');
  
  lines.push(`Validation Result: ${validationResult.valid ? '✅ VALID' : '❌ INVALID'}`);
  lines.push(`Security Score: ${validationResult.securityScore}/100`);
  lines.push('');
  
  if (validationResult.errors.length > 0) {
    lines.push('❌ Errors:');
    validationResult.errors.forEach(error => lines.push(`  - ${error}`));
    lines.push('');
  }
  
  if (validationResult.warnings.length > 0) {
    lines.push('⚠️ Warnings:');
    validationResult.warnings.forEach(warning => lines.push(`  - ${warning}`));
    lines.push('');
  }
  
  lines.push(`Generated at: ${new Date().toISOString()}`);
  
  return lines.join('\n');
}

/**
 * Clear rate limit cache (for testing or maintenance)
 */
export function clearRateLimitCache(): void {
  rateLimitMap.clear();
  recentTransactions.clear();
  console.log('🧹 Webhook validation caches cleared');
}