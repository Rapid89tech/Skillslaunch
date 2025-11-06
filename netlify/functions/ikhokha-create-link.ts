/**
 * Ikhokha Payment Link Creation - Netlify Function
 * Creates payment links for course enrollments
 */

import crypto from 'crypto';

interface NetlifyEvent {
  httpMethod: string;
  headers: Record<string, string | undefined>;
  body: string | null;
}

interface NetlifyResponse {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
}

interface PaymentLinkRequest {
  amount: number;
  currency: string;
  description: string;
  customer_email: string;
  customer_name: string;
  course_id: string;
  user_id: string;
}

// Environment configuration
const IKHOKHA_API_URL = process.env.VITE_IKHOKHA_API_URL || 'https://pay.ikhokha.com';
const IKHOKHA_API_KEY = process.env.VITE_IKHOKHA_API_KEY || '';
const IKHOKHA_API_SECRET = process.env.VITE_IKHOKHA_API_SECRET || '';

export const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: ''
    };
  }

  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({
        success: false,
        error: 'Method not allowed'
      })
    };
  }

  try {
    // Validate credentials
    if (!IKHOKHA_API_KEY || !IKHOKHA_API_SECRET) {
      console.error('❌ Missing iKhokha credentials');
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({
          success: false,
          error: 'CONFIGURATION_ERROR',
          message: 'Payment gateway not configured'
        })
      };
    }

    // Parse request body
    const paymentRequest: PaymentLinkRequest = JSON.parse(event.body || '{}');

    console.log('📝 Creating payment link:', {
      amount: paymentRequest.amount,
      currency: paymentRequest.currency,
      customer: paymentRequest.customer_email
    });

    // Generate transaction reference
    const transactionReference = `TXN-${Date.now()}-${Math.random().toString(36).substring(7)}`;

    // Get base URL for callbacks
    const baseUrl = process.env.URL || 'https://betaskills.co.za';

    // Prepare iKhokha payment request
    const ikhokhaRequest = {
      amount: Math.round(paymentRequest.amount * 100), // Convert to cents
      currency: paymentRequest.currency || 'ZAR',
      reference: transactionReference,
      description: paymentRequest.description,
      customer: {
        email: paymentRequest.customer_email,
        name: paymentRequest.customer_name
      },
      metadata: {
        course_id: paymentRequest.course_id,
        user_id: paymentRequest.user_id
      },
      return_url: `${baseUrl}/payment/success?ref=${transactionReference}`,
      cancel_url: `${baseUrl}/payment/cancel?ref=${transactionReference}`,
      webhook_url: `${baseUrl}/.netlify/functions/ikhokha-webhook`
    };

    // Generate signature for iKhokha API
    const signature = generateSignature(ikhokhaRequest, IKHOKHA_API_SECRET);

    // Call iKhokha API - using correct endpoint
    const apiEndpoint = `${IKHOKHA_API_URL}/api/v1/pay`;
    
    console.log('🔗 Calling iKhokha API:', apiEndpoint);
    
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': IKHOKHA_API_KEY,
        'X-API-Key': IKHOKHA_API_KEY
      },
      body: JSON.stringify(ikhokhaRequest)
    });

    let responseData: any;
    try {
      responseData = await response.json();
    } catch (e) {
      const text = await response.text();
      console.error('❌ iKhokha API returned non-JSON:', text);
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: JSON.stringify({
          success: false,
          error: 'PAYMENT_GATEWAY_ERROR',
          message: 'Invalid response from payment gateway'
        })
      };
    }

    if (!response.ok) {
      console.error('❌ iKhokha API error:', responseData);
      return {
        statusCode: response.status,
        headers: corsHeaders,
        body: JSON.stringify({
          success: false,
          error: 'PAYMENT_GATEWAY_ERROR',
          message: responseData.message || 'Failed to create payment link'
        })
      };
    }

    console.log('✅ Payment link created successfully:', responseData);

    // iKhokha returns the payment URL directly
    const paymentUrl = responseData.paymentUrl || responseData.payment_url || responseData.url;

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        success: true,
        payment_link_url: paymentUrl,
        payment_link_id: responseData.transactionId || responseData.id,
        transaction_reference: transactionReference
      })
    };

  } catch (error: any) {
    console.error('❌ Payment link creation error:', error);
    
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        success: false,
        error: 'INTERNAL_ERROR',
        message: error.message || 'Failed to create payment link'
      })
    };
  }
};

/**
 * Generate HMAC signature for iKhokha API
 */
function generateSignature(payload: any, secret: string): string {
  const data = JSON.stringify(payload);
  return crypto
    .createHmac('sha256', secret)
    .update(data)
    .digest('hex');
}
