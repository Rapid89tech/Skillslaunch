import type { Handler } from '@netlify/functions'
import { createClient } from '@supabase/supabase-js'

function generateHmacSha256(path: string, body: string, secret: string): string {
  const crypto = require('crypto') as typeof import('crypto')
  return crypto.createHmac('sha256', secret).update(path + body).digest('hex')
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, ik-appid, ik-sign',
}

const handler: Handler = async (event) => {
  try {
    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers: corsHeaders, body: 'ok' }
    }

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers: corsHeaders, body: 'Method Not Allowed' }
    }

    const appId = process.env.IKHOKHA_APPLICATION_ID || ''
    const appSecret = process.env.IKHOKHA_APPLICATION_SECRET || ''
    if (!appId || !appSecret) {
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ success: false, message: 'Missing iKhokha credentials' }) }
    }

    const headerAppId = (event.headers['ik-appid'] || event.headers['IK-APPID'] || '') as string
    const headerSign = (event.headers['ik-sign'] || event.headers['IK-SIGN'] || '') as string
    const bodyString = event.body || ''

    // Verify app id
    if (headerAppId !== appId) {
      return { statusCode: 401, headers: corsHeaders, body: JSON.stringify({ success: false, message: 'Invalid App ID' }) }
    }

    // Verify signature
    const path = '/.netlify/functions/ikhokha-webhook'
    const expected = generateHmacSha256(path, bodyString, appSecret)
    if (!headerSign || headerSign !== expected) {
      return { statusCode: 401, headers: corsHeaders, body: JSON.stringify({ success: false, message: 'Invalid signature' }) }
    }

    const payload = JSON.parse(bodyString || '{}') as any
    const status = payload?.status
    const externalRef = payload?.externalTransactionID

    // Update Supabase records
    try {
      const supabaseUrl = process.env.SUPABASE_URL
      const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
      if (supabaseUrl && supabaseServiceRoleKey) {
        const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

        // Update payment
        const paymentStatus = status === 'SUCCESS' ? 'completed' : 'failed'
        const { data: payment } = await supabase
          .from('payments')
          .update({ status: paymentStatus, gateway_response: payload, updated_at: new Date().toISOString() })
          .eq('transaction_reference', externalRef)
          .select()
          .single()

        // Auto-approve enrollment if successful
        if (payment && paymentStatus === 'completed') {
          await supabase
            .from('enrollments')
            .update({ status: 'approved', payment_status: 'completed', updated_at: new Date().toISOString() })
            .eq('user_id', payment.user_id)
            .eq('course_id', payment.course_id)
            .eq('status', 'pending')
        }
      }
    } catch (dbErr) {
      console.warn('Webhook DB update error:', dbErr)
    }

    return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ success: true }) }
  } catch (e: any) {
    return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ success: false, message: e?.message || 'Unexpected error' }) }
  }
}

export { handler }

/**
 * Ikhokha Webhook Handler - Netlify Function
 * 
 * Handles incoming webhook notifications from Ikhokha payment gateway
 * Processes payment status updates and enrollment approvals
 */

import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

// Netlify function types (simplified to avoid dependency issues)
interface NetlifyEvent {
  httpMethod: string;
  headers: Record<string, string | undefined>;
  body: string | null;
  path: string;
  queryStringParameters: Record<string, string> | null;
}

interface NetlifyContext {
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  memoryLimitInMB: string;
  getRemainingTimeInMillis: () => number;
}

interface NetlifyResponse {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}

// Types for webhook processing
interface IkhokhaWebhookPayload {
  transaction_id: string;
  reference: string;
  amount: number;
  currency: string;
  status: 'completed' | 'failed' | 'cancelled';
  timestamp: string;
  signature: string;
  auth_code?: string;
  response_code: string;
  response_message: string;
  card_type?: string;
  masked_card_number?: string;
  merchant_reference?: string;
  metadata?: Record<string, any>;
}

interface WebhookProcessingResult {
  processed: boolean;
  payment_updated: boolean;
  enrollment_updated: boolean;
  error?: string;
  details?: Record<string, any>;
}

// Environment configuration
const SUPABASE_URL = process.env.VITE_SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const IKHOKHA_WEBHOOK_SECRET = process.env.VITE_IKHOKHA_WEBHOOK_SECRET || 
                               process.env.IKHOKHA_PRODUCTION_WEBHOOK_SECRET ||
                               'dev_webhook_secret_key';

// Production environment detection
const IS_PRODUCTION = process.env.NODE_ENV === 'production' || 
                     process.env.VITE_NODE_ENV === 'production';

// Initialize Supabase client with service role key for admin operations
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

/**
 * Main webhook handler function
 */
export const handler = async (event: NetlifyEvent, context: NetlifyContext): Promise<NetlifyResponse> => {
  console.log('🔔 Ikhokha webhook received:', {
    method: event.httpMethod,
    headers: event.headers,
    timestamp: new Date().toISOString()
  });

  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Allow': 'POST'
      },
      body: JSON.stringify({
        error: 'Method not allowed',
        message: 'Only POST requests are accepted'
      })
    };
  }

  try {
    // Parse webhook payload
    const webhookData: IkhokhaWebhookPayload = JSON.parse(event.body || '{}');
    
    console.log('📨 Processing webhook data:', {
      transaction_id: webhookData.transaction_id,
      reference: webhookData.reference,
      status: webhookData.status,
      amount: webhookData.amount
    });

    // Get client IP for security checks
    const clientIp = getClientIp(event);
    
    // Perform comprehensive security validation
    const securityResult = await validateWebhookSecurity(
      webhookData,
      clientIp,
      event.headers
    );

    if (!securityResult.valid) {
      console.error('❌ Security validation failed:', securityResult.violations);
      return {
        statusCode: 403,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          error: 'Security validation failed',
          message: 'Webhook failed security checks',
          violations: securityResult.violations
        })
      };
    }

    // Process the webhook
    const result = await processWebhookData(webhookData);

    // Return success response
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        message: 'Webhook processed successfully',
        result
      })
    };

  } catch (error) {
    console.error('❌ Webhook processing failed:', error);
    
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        error: 'Internal server error',
        message: 'Failed to process webhook',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};

/**
 * Get client IP address from request
 */
function getClientIp(event: NetlifyEvent): string {
  // Check various headers for client IP
  const headers = event.headers;
  return (
    headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    headers['x-real-ip'] ||
    headers['cf-connecting-ip'] || // Cloudflare
    headers['x-client-ip'] ||
    'unknown'
  );
}

/**
 * Comprehensive webhook security validation
 */
async function validateWebhookSecurity(
  webhookData: IkhokhaWebhookPayload,
  clientIp: string,
  headers: Record<string, string | undefined>
): Promise<{ valid: boolean; violations: string[] }> {
  const violations: string[] = [];

  try {
    // 1. Signature validation
    const signatureValid = await validateWebhookSignature(
      JSON.stringify(webhookData),
      webhookData.signature,
      headers
    );
    
    if (!signatureValid) {
      violations.push('Invalid webhook signature');
    }

    // 2. Rate limiting check (basic implementation)
    if (!checkRateLimit(clientIp)) {
      violations.push('Rate limit exceeded');
    }

    // 3. Timestamp validation (within last 5 minutes)
    const webhookTime = new Date(webhookData.timestamp);
    const now = new Date();
    const timeDiff = now.getTime() - webhookTime.getTime();
    
    // In production, enforce stricter timestamp validation
    const maxAge = IS_PRODUCTION ? 300000 : 600000; // 5 min prod, 10 min dev
    const maxFuture = IS_PRODUCTION ? 60000 : 120000; // 1 min prod, 2 min dev
    
    if (timeDiff > maxAge) {
      violations.push(`Webhook timestamp too old (${Math.round(timeDiff / 1000)}s ago)`);
    }
    
    if (timeDiff < -maxFuture) {
      violations.push(`Webhook timestamp too far in future (${Math.round(-timeDiff / 1000)}s ahead)`);
    }

    // 4. Data validation
    if (webhookData.amount <= 0) {
      violations.push('Invalid amount value');
    }
    
    if (webhookData.amount > 1000000) { // 1M ZAR limit
      violations.push('Amount exceeds maximum limit');
    }

    // 5. Required fields validation
    const requiredFields = ['transaction_id', 'reference', 'amount', 'currency', 'status'];
    for (const field of requiredFields) {
      if (!webhookData[field as keyof IkhokhaWebhookPayload]) {
        violations.push(`Missing required field: ${field}`);
      }
    }

    return {
      valid: violations.length === 0,
      violations
    };

  } catch (error) {
    console.error('❌ Security validation error:', error);
    return {
      valid: false,
      violations: ['Security validation failed']
    };
  }
}

/**
 * Simple rate limiting implementation
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60000; // 1 minute
  const maxRequests = 10;

  const entry = rateLimitMap.get(ip);
  
  if (!entry || now > entry.resetTime) {
    // New window or expired entry
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) {
    return false;
  }

  entry.count++;
  return true;
}

/**
 * Validate webhook signature for security
 */
async function validateWebhookSignature(
  payload: string,
  signature: string,
  headers: Record<string, string | undefined>
): Promise<boolean> {
  try {
    // In production, signature validation is MANDATORY
    if (IS_PRODUCTION && !signature) {
      console.error('❌ Missing webhook signature in production environment');
      return false;
    }

    // In development/test mode, allow skipping validation if no secret is configured
    if (!IS_PRODUCTION && (!IKHOKHA_WEBHOOK_SECRET || IKHOKHA_WEBHOOK_SECRET === 'dev_webhook_secret_key')) {
      console.log('🧪 Webhook signature validation skipped (development mode)');
      return true;
    }

    if (!signature) {
      console.error('❌ Missing webhook signature');
      return false;
    }

    // Validate signature format
    if (!signature.startsWith('sha256=')) {
      console.error('❌ Invalid signature format - must start with sha256=');
      return false;
    }

    // Generate expected signature using HMAC-SHA256
    const expectedSignature = crypto
      .createHmac('sha256', IKHOKHA_WEBHOOK_SECRET)
      .update(payload)
      .digest('hex');

    // Compare signatures (constant-time comparison for security)
    const providedSignature = signature.replace('sha256=', '');
    
    if (expectedSignature.length !== providedSignature.length) {
      console.error('❌ Signature length mismatch');
      return false;
    }
    
    const isValid = crypto.timingSafeEqual(
      Buffer.from(expectedSignature, 'hex'),
      Buffer.from(providedSignature, 'hex')
    );

    if (!isValid) {
      console.error('❌ Webhook signature validation failed:', {
        expected: expectedSignature.substring(0, 8) + '...',
        provided: providedSignature.substring(0, 8) + '...',
        production: IS_PRODUCTION
      });
      
      // In production, log additional security information
      if (IS_PRODUCTION) {
        console.error('🚨 SECURITY ALERT: Invalid webhook signature in production environment');
      }
    } else {
      console.log('✅ Webhook signature validated successfully');
    }

    return isValid;

  } catch (error) {
    console.error('❌ Webhook signature validation error:', error);
    
    // In production, always fail on validation errors
    if (IS_PRODUCTION) {
      console.error('🚨 SECURITY: Webhook signature validation error in production');
      return false;
    }
    
    // In development, allow validation errors to pass for debugging
    return !IS_PRODUCTION;
  }
}

/**
 * Process webhook data and update database
 */
async function processWebhookData(webhookData: IkhokhaWebhookPayload): Promise<WebhookProcessingResult> {
  const result: WebhookProcessingResult = {
    processed: false,
    payment_updated: false,
    enrollment_updated: false
  };

  try {
    // Find the enrollment by reference
    const { data: enrollment, error: enrollmentError } = await supabase
      .from('enrollments')
      .select(`
        *,
        users (id, email, name),
        courses (id, title)
      `)
      .eq('payment_reference', webhookData.reference)
      .single();

    if (enrollmentError || !enrollment) {
      console.error('❌ Enrollment not found for reference:', webhookData.reference);
      result.error = 'Enrollment not found';
      return result;
    }

    console.log('📋 Found enrollment:', {
      id: enrollment.id,
      user: enrollment.users?.email,
      course: enrollment.courses?.title,
      current_status: enrollment.status
    });

    // Update payment status based on webhook data
    const paymentStatus = mapIkhokhaStatusToPaymentStatus(webhookData.status);
    const enrollmentStatus = determineEnrollmentStatus(webhookData.status, enrollment.status);

    // Update enrollment with payment information
    const { error: updateError } = await supabase
      .from('enrollments')
      .update({
        payment_status: paymentStatus,
        status: enrollmentStatus,
        ikhokha_transaction_id: webhookData.transaction_id,
        ikhokha_response_code: webhookData.response_code,
        ikhokha_response_message: webhookData.response_message,
        payment_completed_at: webhookData.status === 'completed' ? new Date().toISOString() : null,
        updated_at: new Date().toISOString()
      })
      .eq('id', enrollment.id);

    if (updateError) {
      console.error('❌ Failed to update enrollment:', updateError);
      result.error = 'Database update failed';
      return result;
    }

    result.payment_updated = true;
    result.enrollment_updated = true;

    // Log payment transaction
    await logPaymentTransaction(webhookData, enrollment);

    // Activate enrollment and send notification if payment completed
    if (webhookData.status === 'completed') {
      await activateEnrollmentAfterPayment(enrollment, webhookData);
      await sendPaymentCompletedNotification(enrollment, webhookData);
    }

    // Trigger real-time updates
    await triggerRealTimeUpdate(enrollment.id, {
      type: 'payment_status_updated',
      payment_status: paymentStatus,
      enrollment_status: enrollmentStatus,
      transaction_id: webhookData.transaction_id
    });

    result.processed = true;
    console.log('✅ Webhook processed successfully:', {
      enrollment_id: enrollment.id,
      payment_status: paymentStatus,
      enrollment_status: enrollmentStatus
    });

    return result;

  } catch (error) {
    console.error('❌ Webhook processing error:', error);
    result.error = error instanceof Error ? error.message : 'Unknown error';
    return result;
  }
}

/**
 * Map Ikhokha status to internal payment status
 */
function mapIkhokhaStatusToPaymentStatus(ikhokhaStatus: string): string {
  switch (ikhokhaStatus.toLowerCase()) {
    case 'completed':
    case 'success':
    case 'approved':
      return 'completed';
    case 'failed':
    case 'declined':
    case 'error':
      return 'failed';
    case 'cancelled':
    case 'canceled':
      return 'cancelled';
    case 'pending':
    case 'processing':
      return 'pending';
    default:
      return 'pending';
  }
}

/**
 * Determine enrollment status based on payment status
 */
function determineEnrollmentStatus(paymentStatus: string, currentStatus: string): string {
  if (paymentStatus === 'completed') {
    // Auto-approve enrollment for successful payments
    return 'approved';
  } else if (paymentStatus === 'failed' || paymentStatus === 'cancelled') {
    // Keep as pending for failed payments (admin can still manually approve)
    return currentStatus === 'approved' ? currentStatus : 'pending';
  }
  
  return currentStatus;
}

/**
 * Log payment transaction for audit trail
 */
async function logPaymentTransaction(
  webhookData: IkhokhaWebhookPayload,
  enrollment: any
): Promise<void> {
  try {
    const { error } = await supabase
      .from('payment_transactions')
      .insert({
        enrollment_id: enrollment.id,
        transaction_id: webhookData.transaction_id,
        reference: webhookData.reference,
        amount: webhookData.amount,
        currency: webhookData.currency,
        status: mapIkhokhaStatusToPaymentStatus(webhookData.status),
        payment_method: 'ikhokha',
        ikhokha_data: {
          auth_code: webhookData.auth_code,
          response_code: webhookData.response_code,
          response_message: webhookData.response_message,
          card_type: webhookData.card_type,
          masked_card_number: webhookData.masked_card_number,
          timestamp: webhookData.timestamp
        },
        created_at: new Date().toISOString()
      });

    if (error) {
      console.error('❌ Failed to log payment transaction:', error);
    } else {
      console.log('📝 Payment transaction logged successfully');
    }
  } catch (error) {
    console.error('❌ Payment logging error:', error);
  }
}

/**
 * Send payment completed notification
 */
async function sendPaymentCompletedNotification(
  enrollment: any,
  webhookData: IkhokhaWebhookPayload
): Promise<void> {
  try {
    // Insert notification record
    const { error } = await supabase
      .from('notifications')
      .insert({
        user_id: enrollment.user_id,
        type: 'payment_completed',
        title: 'Payment Successful',
        message: `Your payment for ${enrollment.courses?.title} has been processed successfully. You now have access to the course.`,
        data: {
          enrollment_id: enrollment.id,
          course_id: enrollment.course_id,
          transaction_id: webhookData.transaction_id,
          amount: webhookData.amount
        },
        created_at: new Date().toISOString()
      });

    if (error) {
      console.error('❌ Failed to create notification:', error);
    } else {
      console.log('📧 Payment notification created successfully');
    }
  } catch (error) {
    console.error('❌ Notification error:', error);
  }
}

/**
 * Activate enrollment after successful payment
 */
async function activateEnrollmentAfterPayment(
  enrollment: any,
  webhookData: IkhokhaWebhookPayload
): Promise<void> {
  try {
    console.log('🎓 Activating enrollment after successful payment:', {
      enrollmentId: enrollment.id,
      transactionId: webhookData.transaction_id
    });

    const activatedAt = new Date();

    // Auto-approve enrollment for successful payments
    const { error: activationError } = await supabase
      .from('enrollments')
      .update({
        status: 'approved',
        payment_status: 'completed',
        approved_by: 'system_webhook',
        approved_at: activatedAt.toISOString(),
        approval_reason: 'Automatic activation after successful payment',
        ikhokha_transaction_id: webhookData.transaction_id,
        payment_completed_at: activatedAt.toISOString(),
        updated_at: activatedAt.toISOString()
      })
      .eq('id', enrollment.id);

    if (activationError) {
      console.error('❌ Failed to activate enrollment:', activationError);
      throw new Error(`Enrollment activation failed: ${activationError.message}`);
    } else {
      console.log('✅ Enrollment activated successfully:', enrollment.id);
      
      // Create course access record
      await grantCourseAccess(enrollment);
      
      // Log activation for audit trail
      await logEnrollmentActivation(enrollment, webhookData);
    }
  } catch (error) {
    console.error('❌ Enrollment activation error:', error);
    throw error; // Re-throw to ensure webhook processing fails if activation fails
  }
}

/**
 * Grant course access to user
 */
async function grantCourseAccess(enrollment: any): Promise<void> {
  try {
    // Create course access record (if table exists)
    const { error: accessError } = await supabase
      .from('course_access')
      .upsert({
        enrollment_id: enrollment.id,
        user_id: enrollment.user_id,
        course_id: enrollment.course_id,
        access_level: 'full',
        granted_at: new Date().toISOString(),
        features: ['videos', 'materials', 'assessments', 'certificate']
      }, {
        onConflict: 'enrollment_id'
      });

    if (accessError) {
      console.warn('⚠️ Course access table may not exist:', accessError.message);
      // Don't throw error as this table might be optional
    } else {
      console.log('🎓 Course access granted successfully');
    }
  } catch (error) {
    console.error('❌ Course access grant error:', error);
  }
}

/**
 * Log enrollment activation for audit trail
 */
async function logEnrollmentActivation(
  enrollment: any,
  webhookData: IkhokhaWebhookPayload
): Promise<void> {
  try {
    const { error } = await supabase
      .from('enrollment_audit_log')
      .insert({
        enrollment_id: enrollment.id,
        user_id: enrollment.user_id,
        course_id: enrollment.course_id,
        action: 'activated',
        performed_by: 'system_webhook',
        reason: 'Automatic activation after successful payment',
        transaction_id: webhookData.transaction_id,
        payment_amount: webhookData.amount,
        metadata: {
          webhook_timestamp: webhookData.timestamp,
          response_code: webhookData.response_code,
          response_message: webhookData.response_message
        },
        created_at: new Date().toISOString()
      });

    if (error) {
      console.warn('⚠️ Failed to log enrollment activation (non-critical):', error);
    } else {
      console.log('📝 Enrollment activation logged successfully');
    }
  } catch (error) {
    console.warn('⚠️ Enrollment activation logging error (non-critical):', error);
  }
}

/**
 * Trigger real-time update for connected clients
 */
async function triggerRealTimeUpdate(
  enrollmentId: string,
  updateData: Record<string, any>
): Promise<void> {
  try {
    // Use Supabase real-time to broadcast the update
    const channel = supabase.channel('enrollment_updates');
    
    await channel.send({
      type: 'broadcast',
      event: 'payment_status_updated',
      payload: {
        enrollment_id: enrollmentId,
        ...updateData,
        timestamp: new Date().toISOString()
      }
    });

    console.log('📡 Real-time update triggered successfully');
  } catch (error) {
    console.error('❌ Real-time update error:', error);
  }
}