/**
 * Production Webhook Security Validator
 * 
 * Implements comprehensive webhook security validation for production Ikhokha integration.
 * Provides signature validation, timestamp validation, source verification, and security event logging.
 * 
 * Requirements: 4.2, 4.3, 4.4, 5.4, 5.5
 */

import crypto from 'crypto';
import { supabase } from '@/integrations/supabase/client';
import { IkhokhaWebhook, WebhookValidationError } from '@/types/ikhokha';

export interface WebhookSecurityConfig {
  webhookSecret: string;
  signatureAlgorithm: 'sha256' | 'sha512';
  timestampTolerance: number; // seconds
  allowedSourceIPs: string[];
  enableSourceValidation: boolean;
  enableTimestampValidation: boolean;
  enableSignatureValidation: boolean;
  enableSecurityLogging: boolean;
}

export interface WebhookSecurityValidationResult {
  valid: boolean;
  signatureValid: boolean;
  timestampValid: boolean;
  sourceValid: boolean;
  securityViolations: SecurityViolation[];
  validationErrors: string[];
  validationTimestamp: Date;
  processingTimeMs: number;
}

export interface SecurityViolation {
  type: 'invalid_signature' | 'expired_timestamp' | 'invalid_source' | 'malformed_payload' | 'replay_attack' | 'suspicious_activity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  metadata: Record<string, any>;
  timestamp: Date;
  sourceIP?: string;
}

export interface WebhookSecurityEvent {
  id: string;
  eventType: 'webhook_received' | 'validation_success' | 'validation_failure' | 'security_violation' | 'threat_detected';
  severity: 'info' | 'warning' | 'error' | 'critical';
  description: string;
  webhookData: Partial<IkhokhaWebhook>;
  validationResult: WebhookSecurityValidationResult;
  sourceIP: string;
  userAgent?: string;
  timestamp: Date;
  metadata: Record<string, any>;
}

export interface WebhookRequest {
  payload: string;
  signature: string;
  timestamp: string;
  sourceIP: string;
  userAgent?: string;
  headers: Record<string, string>;
}

export class ProductionWebhookSecurity {
  private config: WebhookSecurityConfig;
  private recentWebhooks: Map<string, Date> = new Map();
  private suspiciousIPs: Set<string> = new Set();
  private validationCache: Map<string, WebhookSecurityValidationResult> = new Map();

  constructor() {
    this.config = this.loadProductionConfig();
    this.initializeSecurityMonitoring();
  }

  /**
   * Comprehensive webhook security validation
   * Validates signature, timestamp, source, and detects security threats
   */
  async validateWebhookSecurity(request: WebhookRequest): Promise<WebhookSecurityValidationResult> {
    const startTime = Date.now();
    const validationId = this.generateValidationId(request);

    // Check for replay attacks first (before cache check)
    const replayDetected = this.detectReplayAttack(request);
    if (replayDetected) {
      const result: WebhookSecurityValidationResult = {
        valid: false,
        signatureValid: false,
        timestampValid: false,
        sourceValid: false,
        securityViolations: [{
          type: 'replay_attack',
          severity: 'critical',
          description: 'Potential replay attack detected',
          metadata: {
            signature: request.signature,
            timestamp: request.timestamp
          },
          timestamp: new Date(),
          sourceIP: request.sourceIP
        }],
        validationErrors: ['Potential replay attack detected'],
        validationTimestamp: new Date(),
        processingTimeMs: Date.now() - startTime
      };
      
      await this.logSecurityEvent({
        id: crypto.randomUUID(),
        eventType: 'validation_failure',
        severity: 'critical',
        description: 'Replay attack detected',
        webhookData: this.parseWebhookPayload(request.payload),
        validationResult: result,
        sourceIP: request.sourceIP,
        ...(request.userAgent && { userAgent: request.userAgent }),
        timestamp: new Date(),
        metadata: { validationId, replayAttack: true }
      });
      
      return result;
    }

    // Check cache for recent validation (only if not a replay)
    if (this.validationCache.has(validationId)) {
      const cached = this.validationCache.get(validationId)!;
      // Update processing time for cached result
      const cachedResult = {
        ...cached,
        processingTimeMs: Date.now() - startTime,
        validationTimestamp: new Date()
      };
      
      await this.logSecurityEvent({
        id: crypto.randomUUID(),
        eventType: 'validation_success',
        severity: 'info',
        description: 'Webhook validation served from cache',
        webhookData: this.parseWebhookPayload(request.payload),
        validationResult: cachedResult,
        sourceIP: request.sourceIP,
        ...(request.userAgent && { userAgent: request.userAgent }),
        timestamp: new Date(),
        metadata: { cached: true, validationId }
      });
      return cachedResult;
    }

    const result: WebhookSecurityValidationResult = {
      valid: false,
      signatureValid: false,
      timestampValid: false,
      sourceValid: false,
      securityViolations: [],
      validationErrors: [],
      validationTimestamp: new Date(),
      processingTimeMs: 0
    };

    try {
      // 1. Validate webhook signature
      if (this.config.enableSignatureValidation) {
        result.signatureValid = await this.validateWebhookSignature(
          request.payload,
          request.signature,
          this.config.webhookSecret
        );

        if (!result.signatureValid) {
          const violation: SecurityViolation = {
            type: 'invalid_signature',
            severity: 'high',
            description: 'Webhook signature validation failed',
            metadata: {
              providedSignature: request.signature,
              expectedAlgorithm: this.config.signatureAlgorithm
            },
            timestamp: new Date(),
            sourceIP: request.sourceIP
          };
          result.securityViolations.push(violation);
          result.validationErrors.push('Invalid webhook signature');
        }
      } else {
        result.signatureValid = true; // Skip if disabled
      }

      // 2. Validate webhook timestamp
      if (this.config.enableTimestampValidation) {
        result.timestampValid = this.validateWebhookTimestamp(
          request.timestamp,
          this.config.timestampTolerance
        );

        if (!result.timestampValid) {
          const violation: SecurityViolation = {
            type: 'expired_timestamp',
            severity: 'medium',
            description: 'Webhook timestamp is outside acceptable tolerance',
            metadata: {
              providedTimestamp: request.timestamp,
              tolerance: this.config.timestampTolerance,
              currentTime: new Date().toISOString()
            },
            timestamp: new Date(),
            sourceIP: request.sourceIP
          };
          result.securityViolations.push(violation);
          result.validationErrors.push('Webhook timestamp is expired or invalid');
        }
      } else {
        result.timestampValid = true; // Skip if disabled
      }

      // 3. Validate webhook source
      if (this.config.enableSourceValidation) {
        result.sourceValid = await this.validateWebhookSource(request.sourceIP);

        if (!result.sourceValid) {
          const violation: SecurityViolation = {
            type: 'invalid_source',
            severity: 'high',
            description: 'Webhook received from unauthorized source IP',
            metadata: {
              sourceIP: request.sourceIP,
              allowedIPs: this.config.allowedSourceIPs
            },
            timestamp: new Date(),
            sourceIP: request.sourceIP
          };
          result.securityViolations.push(violation);
          result.validationErrors.push('Unauthorized source IP address');
        }
      } else {
        result.sourceValid = true; // Skip if disabled
      }

      // 4. Replay attacks are already handled above, so replayDetected is always false here
      const replayDetected = false;

      // 5. Detect suspicious activity
      const suspiciousActivity = await this.detectSuspiciousActivity(request);
      if (suspiciousActivity.detected) {
        const violation: SecurityViolation = {
          type: 'suspicious_activity',
          severity: suspiciousActivity.severity,
          description: suspiciousActivity.description,
          metadata: suspiciousActivity.metadata,
          timestamp: new Date(),
          sourceIP: request.sourceIP
        };
        result.securityViolations.push(violation);
        result.validationErrors.push(suspiciousActivity.description);
      }

      // 6. Validate payload structure
      const payloadValid = this.validatePayloadStructure(request.payload);
      if (!payloadValid) {
        const violation: SecurityViolation = {
          type: 'malformed_payload',
          severity: 'medium',
          description: 'Webhook payload structure is invalid',
          metadata: {
            payloadLength: request.payload.length,
            contentType: request.headers['content-type']
          },
          timestamp: new Date(),
          sourceIP: request.sourceIP
        };
        result.securityViolations.push(violation);
        result.validationErrors.push('Invalid payload structure');
      }

      // Overall validation result
      result.valid = result.signatureValid && 
                    result.timestampValid && 
                    result.sourceValid && 
                    !replayDetected && 
                    !suspiciousActivity.detected && 
                    payloadValid;

      result.processingTimeMs = Date.now() - startTime;

      // Cache successful validations
      if (result.valid) {
        this.validationCache.set(validationId, result);
        // Clean cache periodically
        if (this.validationCache.size > 1000) {
          this.cleanValidationCache();
        }
      }

      // Log security event
      await this.logSecurityEvent({
        id: crypto.randomUUID(),
        eventType: result.valid ? 'validation_success' : 'validation_failure',
        severity: result.valid ? 'info' : (result.securityViolations.length > 0 ? 'error' : 'warning'),
        description: result.valid ? 'Webhook validation successful' : 'Webhook validation failed',
        webhookData: this.parseWebhookPayload(request.payload),
        validationResult: result,
        sourceIP: request.sourceIP,
        ...(request.userAgent && { userAgent: request.userAgent }),
        timestamp: new Date(),
        metadata: { 
          validationId,
          processingTimeMs: result.processingTimeMs,
          violationCount: result.securityViolations.length
        }
      });

      // Alert on security violations
      if (result.securityViolations.length > 0) {
        await this.alertOnSecurityViolations(result.securityViolations, request);
      }

      return result;

    } catch (error) {
      result.validationErrors.push(`Validation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      result.processingTimeMs = Date.now() - startTime;

      await this.logSecurityEvent({
        id: crypto.randomUUID(),
        eventType: 'validation_failure',
        severity: 'error',
        description: 'Webhook validation failed with exception',
        webhookData: {},
        validationResult: result,
        sourceIP: request.sourceIP,
        ...(request.userAgent && { userAgent: request.userAgent }),
        timestamp: new Date(),
        metadata: { 
          error: error instanceof Error ? error.message : 'Unknown error',
          validationId
        }
      });

      throw new WebhookValidationError(
        `Webhook security validation failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
        { validationResult: result, request: this.sanitizeRequestForLogging(request) }
      );
    }
  }

  /**
   * Validate webhook signature using HMAC
   */
  private async validateWebhookSignature(
    payload: string,
    providedSignature: string,
    secret: string
  ): Promise<boolean> {
    try {
      // Remove any prefix from signature (e.g., "sha256=")
      const cleanSignature = providedSignature.replace(/^sha256=/, '');
      
      // Generate expected signature
      const expectedSignature = crypto
        .createHmac(this.config.signatureAlgorithm, secret)
        .update(payload, 'utf8')
        .digest('hex');

      // Use timing-safe comparison to prevent timing attacks
      return crypto.timingSafeEqual(
        Buffer.from(cleanSignature, 'hex'),
        Buffer.from(expectedSignature, 'hex')
      );
    } catch (error) {
      console.error('Signature validation error:', error);
      return false;
    }
  }

  /**
   * Validate webhook timestamp with configurable tolerance
   */
  private validateWebhookTimestamp(timestamp: string, tolerance: number): boolean {
    try {
      const webhookTime = new Date(timestamp).getTime();
      const currentTime = Date.now();
      const toleranceMs = tolerance * 1000;

      // Check if timestamp is within acceptable range
      const timeDiff = Math.abs(currentTime - webhookTime);
      return timeDiff <= toleranceMs;
    } catch (error) {
      console.error('Timestamp validation error:', error);
      return false;
    }
  }

  /**
   * Validate webhook source IP against whitelist
   */
  private async validateWebhookSource(sourceIP: string): Promise<boolean> {
    try {
      // Check against suspicious IPs
      if (this.suspiciousIPs.has(sourceIP)) {
        return false;
      }

      // Check against allowed IPs (if configured)
      if (this.config.allowedSourceIPs.length > 0) {
        return this.config.allowedSourceIPs.includes(sourceIP);
      }

      // If no whitelist configured, allow all (not recommended for production)
      return true;
    } catch (error) {
      console.error('Source validation error:', error);
      return false;
    }
  }

  /**
   * Detect replay attacks by tracking recent webhook signatures
   */
  private detectReplayAttack(request: WebhookRequest): boolean {
    const signatureKey = `${request.signature}_${request.timestamp}`;
    
    if (this.recentWebhooks.has(signatureKey)) {
      return true; // Replay detected
    }

    // Store signature with timestamp
    this.recentWebhooks.set(signatureKey, new Date());

    // Clean old entries (older than tolerance)
    const cutoffTime = Date.now() - (this.config.timestampTolerance * 1000 * 2);
    for (const [key, timestamp] of this.recentWebhooks.entries()) {
      if (timestamp.getTime() < cutoffTime) {
        this.recentWebhooks.delete(key);
      }
    }

    return false;
  }

  /**
   * Detect suspicious activity patterns
   */
  private async detectSuspiciousActivity(request: WebhookRequest): Promise<{
    detected: boolean;
    severity: SecurityViolation['severity'];
    description: string;
    metadata: Record<string, any>;
  }> {
    const suspiciousPatterns = [];

    // Check for unusual payload size
    if (request.payload.length > 10000) {
      suspiciousPatterns.push('Unusually large payload');
    }

    // Check for malicious patterns in payload
    const maliciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\s*\(/i,
      /document\./i,
      /window\./i
    ];

    for (const pattern of maliciousPatterns) {
      if (pattern.test(request.payload)) {
        suspiciousPatterns.push('Potential XSS attempt in payload');
        break;
      }
    }

    // Check for SQL injection patterns
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)\b)/i,
      /(UNION\s+SELECT)/i,
      /(\bOR\b\s+\d+\s*=\s*\d+)/i
    ];

    for (const pattern of sqlPatterns) {
      if (pattern.test(request.payload)) {
        suspiciousPatterns.push('Potential SQL injection attempt');
        break;
      }
    }

    // Check user agent
    if (request.userAgent && (
      request.userAgent.includes('bot') ||
      request.userAgent.includes('crawler') ||
      request.userAgent.includes('scanner')
    )) {
      suspiciousPatterns.push('Suspicious user agent');
    }

    return {
      detected: suspiciousPatterns.length > 0,
      severity: suspiciousPatterns.length > 1 ? 'high' : 'medium',
      description: suspiciousPatterns.join(', '),
      metadata: {
        patterns: suspiciousPatterns,
        payloadSize: request.payload.length,
        userAgent: request.userAgent
      }
    };
  }

  /**
   * Validate webhook payload structure
   */
  private validatePayloadStructure(payload: string): boolean {
    try {
      const parsed = JSON.parse(payload);
      
      // Check for required Ikhokha webhook fields
      const requiredFields = ['transaction_id', 'reference', 'amount', 'status', 'timestamp'];
      
      for (const field of requiredFields) {
        if (!(field in parsed)) {
          return false;
        }
      }

      // Validate field types
      if (typeof parsed.amount !== 'number' || parsed.amount <= 0) {
        return false;
      }

      if (!['completed', 'failed', 'cancelled'].includes(parsed.status)) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Log security events to audit system
   */
  private async logSecurityEvent(event: WebhookSecurityEvent): Promise<void> {
    if (!this.config.enableSecurityLogging) {
      return;
    }

    try {
      await supabase
        .from('security_events')
        .insert([{
          id: event.id,
          type: 'webhook_security',
          event_type: event.eventType,
          severity: event.severity,
          description: event.description,
          metadata: {
            ...event.metadata,
            webhook_data: event.webhookData,
            validation_result: {
              valid: event.validationResult.valid,
              violations_count: event.validationResult.securityViolations.length,
              processing_time_ms: event.validationResult.processingTimeMs
            }
          },
          timestamp: event.timestamp.toISOString(),
          source_ip: event.sourceIP,
          user_agent: event.userAgent
        }]);
    } catch (error) {
      console.error('Failed to log webhook security event:', error);
    }
  }

  /**
   * Alert on security violations
   */
  private async alertOnSecurityViolations(
    violations: SecurityViolation[],
    request: WebhookRequest
  ): Promise<void> {
    const criticalViolations = violations.filter(v => v.severity === 'critical');
    const highViolations = violations.filter(v => v.severity === 'high');

    // Add IP to suspicious list for repeated violations
    if (criticalViolations.length > 0 || highViolations.length > 2) {
      this.suspiciousIPs.add(request.sourceIP);
    }

    // Log individual violations
    for (const violation of violations) {
      await supabase
        .from('security_events')
        .insert([{
          id: crypto.randomUUID(),
          type: 'webhook_security_violation',
          event_type: 'security_violation',
          severity: violation.severity,
          description: violation.description,
          metadata: {
            violation_type: violation.type,
            ...violation.metadata,
            source_ip: violation.sourceIP
          },
          timestamp: violation.timestamp.toISOString(),
          source_ip: violation.sourceIP
        }]);
    }

    // Send alerts for critical violations
    if (criticalViolations.length > 0) {
      console.error('CRITICAL WEBHOOK SECURITY VIOLATION:', {
        violations: criticalViolations,
        sourceIP: request.sourceIP,
        timestamp: new Date().toISOString()
      });
    }
  }

  /**
   * Load production configuration
   */
  private loadProductionConfig(): WebhookSecurityConfig {
    return {
      webhookSecret: process.env.VITE_IKHOKHA_WEBHOOK_SECRET || '455rtQjghdOHzLN3YZ3AQ81H3KEf7OeS',
      signatureAlgorithm: 'sha256',
      timestampTolerance: parseInt(process.env.VITE_WEBHOOK_TIMESTAMP_TOLERANCE || '300'),
      allowedSourceIPs: process.env.VITE_IKHOKHA_ALLOWED_IPS?.split(',') || [],
      enableSourceValidation: process.env.VITE_ENABLE_WEBHOOK_SOURCE_VALIDATION === 'true',
      enableTimestampValidation: process.env.VITE_ENABLE_WEBHOOK_TIMESTAMP_VALIDATION !== 'false',
      enableSignatureValidation: process.env.VITE_ENABLE_WEBHOOK_SIGNATURE_VALIDATION !== 'false',
      enableSecurityLogging: process.env.VITE_ENABLE_WEBHOOK_SECURITY_LOGGING !== 'false'
    };
  }

  /**
   * Initialize security monitoring
   */
  private initializeSecurityMonitoring(): void {
    // Clean up old entries periodically
    setInterval(() => {
      this.cleanValidationCache();
      this.cleanRecentWebhooks();
    }, 5 * 60 * 1000); // Every 5 minutes
  }

  /**
   * Utility methods
   */
  private generateValidationId(request: WebhookRequest): string {
    return crypto
      .createHash('sha256')
      .update(`${request.signature}_${request.timestamp}_${request.sourceIP}`)
      .digest('hex');
  }

  private parseWebhookPayload(payload: string): Partial<IkhokhaWebhook> {
    try {
      return JSON.parse(payload);
    } catch {
      return {};
    }
  }

  private sanitizeRequestForLogging(request: WebhookRequest): any {
    return {
      payloadLength: request.payload.length,
      signature: request.signature.substring(0, 10) + '...',
      timestamp: request.timestamp,
      sourceIP: request.sourceIP,
      userAgent: request.userAgent,
      headers: Object.keys(request.headers)
    };
  }

  private cleanValidationCache(): void {
    const cutoffTime = Date.now() - (this.config.timestampTolerance * 1000 * 2);
    for (const [key, result] of this.validationCache.entries()) {
      if (result.validationTimestamp.getTime() < cutoffTime) {
        this.validationCache.delete(key);
      }
    }
  }

  private cleanRecentWebhooks(): void {
    const cutoffTime = Date.now() - (this.config.timestampTolerance * 1000 * 2);
    for (const [key, timestamp] of this.recentWebhooks.entries()) {
      if (timestamp.getTime() < cutoffTime) {
        this.recentWebhooks.delete(key);
      }
    }
  }

  /**
   * Public methods for external use
   */
  
  /**
   * Get current security configuration
   */
  getSecurityConfig(): WebhookSecurityConfig {
    return { ...this.config };
  }

  /**
   * Update security configuration
   */
  updateSecurityConfig(updates: Partial<WebhookSecurityConfig>): void {
    this.config = { ...this.config, ...updates };
  }

  /**
   * Get security statistics
   */
  getSecurityStats(): {
    cacheSize: number;
    recentWebhooksCount: number;
    suspiciousIPsCount: number;
  } {
    return {
      cacheSize: this.validationCache.size,
      recentWebhooksCount: this.recentWebhooks.size,
      suspiciousIPsCount: this.suspiciousIPs.size
    };
  }

  /**
   * Clear security caches (for testing/maintenance)
   */
  clearSecurityCaches(): void {
    this.validationCache.clear();
    this.recentWebhooks.clear();
    this.suspiciousIPs.clear();
  }
}

// Export singleton instance
export const productionWebhookSecurity = new ProductionWebhookSecurity();