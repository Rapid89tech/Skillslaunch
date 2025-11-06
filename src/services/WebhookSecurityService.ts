/**
 * Webhook Security Service
 * 
 * Provides comprehensive security measures for webhook handling including
 * signature validation, rate limiting, IP whitelisting, and audit logging
 */

import { IkhokhaWebhook, WebhookValidationError, IkhokhaError } from '../types/ikhokha';

export interface SecurityConfig {
  enableSignatureValidation: boolean;
  enableRateLimiting: boolean;
  enableIpWhitelisting: boolean;
  enableAuditLogging: boolean;
  rateLimitWindow: number; // in milliseconds
  rateLimitMaxRequests: number;
  allowedIpRanges: string[];
  webhookSecret: string;
}

export interface SecurityAuditLog {
  id: string;
  timestamp: Date;
  event: 'webhook_received' | 'signature_validation' | 'rate_limit_exceeded' | 'ip_blocked' | 'security_violation';
  source_ip?: string;
  webhook_data?: Partial<IkhokhaWebhook>;
  result: 'success' | 'failure' | 'blocked';
  details?: Record<string, any>;
}

export interface RateLimitEntry {
  ip: string;
  requests: number;
  windowStart: Date;
  lastRequest: Date;
}

/**
 * Webhook Security Service Implementation
 */
export class WebhookSecurityService {
  private config: SecurityConfig;
  private rateLimitMap: Map<string, RateLimitEntry> = new Map();
  private auditLogs: SecurityAuditLog[] = [];
  private cleanupInterval?: NodeJS.Timeout;

  constructor(config?: Partial<SecurityConfig>) {
    this.config = {
      enableSignatureValidation: true,
      enableRateLimiting: true,
      enableIpWhitelisting: false,
      enableAuditLogging: true,
      rateLimitWindow: 60000, // 1 minute
      rateLimitMaxRequests: 10,
      allowedIpRanges: [],
      webhookSecret: process.env.VITE_IKHOKHA_WEBHOOK_SECRET || 'dev_webhook_secret_key',
      ...config
    };

    // Start cleanup interval for rate limiting
    this.startCleanupInterval();

    console.log('🔒 Webhook Security Service initialized:', {
      signatureValidation: this.config.enableSignatureValidation,
      rateLimiting: this.config.enableRateLimiting,
      ipWhitelisting: this.config.enableIpWhitelisting,
      auditLogging: this.config.enableAuditLogging
    });
  }

  /**
   * Validate webhook security before processing
   */
  async validateWebhookSecurity(
    webhookData: IkhokhaWebhook,
    sourceIp?: string,
    headers?: Record<string, string>
  ): Promise<{
    valid: boolean;
    violations: string[];
    auditLogId?: string;
  }> {
    const violations: string[] = [];
    let auditLogId: string | undefined;

    try {
      // Log webhook received
      if (this.config.enableAuditLogging) {
        auditLogId = await this.logSecurityEvent('webhook_received', {
          source_ip: sourceIp,
          webhook_data: {
            transaction_id: webhookData.transaction_id,
            reference: webhookData.reference,
            amount: webhookData.amount,
            status: webhookData.status
          },
          result: 'success'
        });
      }

      // IP Whitelisting Check
      if (this.config.enableIpWhitelisting && sourceIp) {
        if (!this.isIpAllowed(sourceIp)) {
          violations.push('IP address not whitelisted');
          await this.logSecurityEvent('ip_blocked', {
            source_ip: sourceIp,
            result: 'blocked',
            details: { reason: 'IP not in whitelist' }
          });
        }
      }

      // Rate Limiting Check
      if (this.config.enableRateLimiting && sourceIp) {
        if (!this.checkRateLimit(sourceIp)) {
          violations.push('Rate limit exceeded');
          await this.logSecurityEvent('rate_limit_exceeded', {
            source_ip: sourceIp,
            result: 'blocked',
            details: { 
              window: this.config.rateLimitWindow,
              maxRequests: this.config.rateLimitMaxRequests
            }
          });
        }
      }

      // Signature Validation
      if (this.config.enableSignatureValidation) {
        const signatureValid = await this.validateSignature(webhookData, headers);
        if (!signatureValid) {
          violations.push('Invalid webhook signature');
          await this.logSecurityEvent('signature_validation', {
            source_ip: sourceIp,
            result: 'failure',
            details: { reason: 'Signature validation failed' }
          });
        }
      }

      // Additional Security Checks
      const additionalViolations = await this.performAdditionalSecurityChecks(webhookData);
      violations.push(...additionalViolations);

      const isValid = violations.length === 0;

      if (!isValid && this.config.enableAuditLogging) {
        await this.logSecurityEvent('security_violation', {
          source_ip: sourceIp,
          webhook_data: {
            transaction_id: webhookData.transaction_id,
            reference: webhookData.reference
          },
          result: 'blocked',
          details: { violations }
        });
      }

      return {
        valid: isValid,
        violations,
        auditLogId
      };

    } catch (error) {
      console.error('❌ Security validation error:', error);
      
      if (this.config.enableAuditLogging) {
        await this.logSecurityEvent('security_violation', {
          source_ip: sourceIp,
          result: 'failure',
          details: { 
            error: error instanceof Error ? error.message : 'Unknown error',
            violations: ['Security validation failed']
          }
        });
      }

      return {
        valid: false,
        violations: ['Security validation failed'],
        auditLogId
      };
    }
  }

  /**
   * Validate webhook signature using HMAC-SHA256
   */
  async validateSignature(
    webhookData: IkhokhaWebhook,
    headers?: Record<string, string>
  ): Promise<boolean> {
    try {
      // Skip validation in development mode
      if (process.env.NODE_ENV === 'development') {
        return true;
      }

      if (!webhookData.signature) {
        return false;
      }

      // Create payload for signature validation
      const payload = this.createSignaturePayload(webhookData);
      
      // Generate expected signature
      const expectedSignature = await this.generateHmacSignature(payload, this.config.webhookSecret);
      
      // Extract provided signature (remove 'sha256=' prefix if present)
      const providedSignature = webhookData.signature.replace(/^sha256=/, '');
      
      // Constant-time comparison to prevent timing attacks
      return this.constantTimeCompare(expectedSignature, providedSignature);

    } catch (error) {
      console.error('❌ Signature validation error:', error);
      return false;
    }
  }

  /**
   * Check if IP address is within allowed ranges
   */
  isIpAllowed(ip: string): boolean {
    if (this.config.allowedIpRanges.length === 0) {
      return true; // No restrictions if no ranges specified
    }

    // For development, allow localhost
    if (process.env.NODE_ENV === 'development' && 
        (ip === '127.0.0.1' || ip === '::1' || ip === 'localhost')) {
      return true;
    }

    // Check against allowed IP ranges
    return this.config.allowedIpRanges.some(range => {
      return this.isIpInRange(ip, range);
    });
  }

  /**
   * Check rate limiting for IP address
   */
  checkRateLimit(ip: string): boolean {
    const now = new Date();
    const entry = this.rateLimitMap.get(ip);

    if (!entry) {
      // First request from this IP
      this.rateLimitMap.set(ip, {
        ip,
        requests: 1,
        windowStart: now,
        lastRequest: now
      });
      return true;
    }

    // Check if we're in a new window
    const windowElapsed = now.getTime() - entry.windowStart.getTime();
    if (windowElapsed >= this.config.rateLimitWindow) {
      // Reset window
      entry.requests = 1;
      entry.windowStart = now;
      entry.lastRequest = now;
      return true;
    }

    // Check if within rate limit
    if (entry.requests >= this.config.rateLimitMaxRequests) {
      return false;
    }

    // Increment request count
    entry.requests++;
    entry.lastRequest = now;
    return true;
  }

  /**
   * Get security audit logs
   */
  getAuditLogs(limit?: number): SecurityAuditLog[] {
    const logs = [...this.auditLogs].sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    return limit ? logs.slice(0, limit) : logs;
  }

  /**
   * Get rate limiting statistics
   */
  getRateLimitStats(): {
    totalIps: number;
    activeWindows: number;
    totalRequests: number;
    blockedRequests: number;
  } {
    const now = new Date();
    let totalRequests = 0;
    let activeWindows = 0;
    let blockedRequests = 0;

    for (const entry of this.rateLimitMap.values()) {
      totalRequests += entry.requests;
      
      const windowElapsed = now.getTime() - entry.windowStart.getTime();
      if (windowElapsed < this.config.rateLimitWindow) {
        activeWindows++;
        if (entry.requests >= this.config.rateLimitMaxRequests) {
          blockedRequests++;
        }
      }
    }

    return {
      totalIps: this.rateLimitMap.size,
      activeWindows,
      totalRequests,
      blockedRequests
    };
  }

  /**
   * Clear rate limiting data (for maintenance)
   */
  clearRateLimitData(): void {
    this.rateLimitMap.clear();
    console.log('🧹 Rate limiting data cleared');
  }

  /**
   * Clear audit logs (for maintenance)
   */
  clearAuditLogs(): number {
    const count = this.auditLogs.length;
    this.auditLogs = [];
    console.log(`🧹 Cleared ${count} audit logs`);
    return count;
  }

  // Private Methods

  /**
   * Log security event for audit trail
   */
  private async logSecurityEvent(
    event: SecurityAuditLog['event'],
    data: Partial<SecurityAuditLog>
  ): Promise<string> {
    const logId = `audit_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
    
    const auditLog: SecurityAuditLog = {
      id: logId,
      timestamp: new Date(),
      event,
      result: 'success',
      ...data
    };

    this.auditLogs.push(auditLog);

    // Keep only last 1000 logs to prevent memory issues
    if (this.auditLogs.length > 1000) {
      this.auditLogs = this.auditLogs.slice(-1000);
    }

    return logId;
  }

  /**
   * Create consistent payload for signature validation
   */
  private createSignaturePayload(webhookData: IkhokhaWebhook): string {
    // Create deterministic payload for signature validation
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
   * Generate HMAC-SHA256 signature
   */
  private async generateHmacSignature(payload: string, secret: string): Promise<string> {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
      // Browser environment - use Web Crypto API
      const encoder = new TextEncoder();
      const keyData = encoder.encode(secret);
      const messageData = encoder.encode(payload);

      const cryptoKey = await window.crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );

      const signature = await window.crypto.subtle.sign('HMAC', cryptoKey, messageData);
      return Array.from(new Uint8Array(signature))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    } else {
      // Node.js environment or fallback
      try {
        const crypto = require('crypto');
        return crypto.createHmac('sha256', secret).update(payload).digest('hex');
      } catch {
        // Fallback for environments without crypto
        return this.simpleFallbackHash(payload + secret);
      }
    }
  }

  /**
   * Simple fallback hash for environments without crypto support
   */
  private simpleFallbackHash(input: string): string {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }

  /**
   * Constant-time string comparison to prevent timing attacks
   */
  private constantTimeCompare(a: string, b: string): boolean {
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
   * Check if IP is within a given range (basic implementation)
   */
  private isIpInRange(ip: string, range: string): boolean {
    // Simple implementation - in production, use a proper IP range library
    if (range === ip) {
      return true;
    }

    // Handle CIDR notation (basic implementation)
    if (range.includes('/')) {
      // For production, implement proper CIDR matching
      const [rangeIp] = range.split('/');
      return ip.startsWith(rangeIp.split('.').slice(0, 3).join('.'));
    }

    return false;
  }

  /**
   * Perform additional security checks
   */
  private async performAdditionalSecurityChecks(webhookData: IkhokhaWebhook): Promise<string[]> {
    const violations: string[] = [];

    // Check for suspicious patterns
    if (webhookData.amount <= 0) {
      violations.push('Invalid amount value');
    }

    if (webhookData.amount > 1000000) { // 1M ZAR limit
      violations.push('Amount exceeds maximum limit');
    }

    // Check timestamp freshness (within last 5 minutes)
    const webhookTime = new Date(webhookData.timestamp);
    const now = new Date();
    const timeDiff = now.getTime() - webhookTime.getTime();
    
    if (timeDiff > 300000) { // 5 minutes
      violations.push('Webhook timestamp too old');
    }

    if (timeDiff < -60000) { // 1 minute in future
      violations.push('Webhook timestamp in future');
    }

    // Check for required fields
    const requiredFields = ['transaction_id', 'reference', 'amount', 'currency', 'status'];
    for (const field of requiredFields) {
      if (!webhookData[field as keyof IkhokhaWebhook]) {
        violations.push(`Missing required field: ${field}`);
      }
    }

    return violations;
  }

  /**
   * Start cleanup interval for rate limiting
   */
  private startCleanupInterval(): void {
    // Clean up old rate limit entries every 5 minutes
    this.cleanupInterval = setInterval(() => {
      this.cleanupRateLimitEntries();
    }, 300000);
  }

  /**
   * Clean up old rate limit entries
   */
  private cleanupRateLimitEntries(): void {
    const now = new Date();
    const cutoff = now.getTime() - (this.config.rateLimitWindow * 2); // Keep entries for 2x window

    for (const [ip, entry] of this.rateLimitMap.entries()) {
      if (entry.lastRequest.getTime() < cutoff) {
        this.rateLimitMap.delete(ip);
      }
    }
  }

  /**
   * Cleanup resources
   */
  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = undefined;
    }
  }
}

// Export singleton instance
export const webhookSecurityService = new WebhookSecurityService();