/**
 * Ikhokha Payment Link Creation - Netlify Function
 * Creates payment links for course enrollments
 */



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

        // Build iKhokha payment URL with query parameters
        const amountInCents = Math.round(paymentRequest.amount * 100);
        
        const paymentUrl = `${IKHOKHA_API_URL}?` + new URLSearchParams({
            applicationId: IKHOKHA_API_KEY,
            amount: amountInCents.toString(),
            currency: 'ZAR',
            externalTransactionID: transactionReference,
            description: paymentRequest.description,
            customerEmail: paymentRequest.customer_email,
            customerName: paymentRequest.customer_name,
            successUrl: `${baseUrl}/payment/success?ref=${transactionReference}`,
            cancelUrl: `${baseUrl}/payment/cancel?ref=${transactionReference}`,
            notifyUrl: `${baseUrl}/.netlify/functions/ikhokha-webhook`
        }).toString();

        console.log('✅ Payment link created:', paymentUrl.substring(0, 100) + '...');

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


