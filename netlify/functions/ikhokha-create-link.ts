/**
 * iKhokha Payment Link - Netlify Function
 * Based on iKhokha API documentation
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

const IKHOKHA_APP_ID = process.env.VITE_IKHOKHA_API_KEY || '';
const IKHOKHA_APP_SECRET = process.env.VITE_IKHOKHA_API_SECRET || '';

export const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: corsHeaders, body: '' };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers: corsHeaders,
            body: JSON.stringify({ success: false, error: 'Method not allowed' })
        };
    }

    try {
        console.log('🔑 Checking credentials:', {
            hasAppId: !!IKHOKHA_APP_ID,
            hasSecret: !!IKHOKHA_APP_SECRET,
            appIdLength: IKHOKHA_APP_ID?.length,
            env: process.env.VITE_IKHOKHA_API_KEY ? 'found' : 'missing'
        });
        
        if (!IKHOKHA_APP_ID || !IKHOKHA_APP_SECRET) {
            console.error('❌ Missing credentials');
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

        const paymentRequest: PaymentLinkRequest = JSON.parse(event.body || '{}');
        const transactionRef = `TXN-${Date.now()}-${Math.random().toString(36).substring(7)}`;
        const baseUrl = process.env.URL || 'https://betaskills.co.za';
        const amountInCents = Math.round(paymentRequest.amount * 100);

        // Build iKhokha payment URL according to their documentation
        const paymentUrl = `https://pay.ikhokha.com?` + new URLSearchParams({
            applicationId: IKHOKHA_APP_ID,
            amount: amountInCents.toString(),
            currency: 'ZAR',
            externalTransactionID: transactionRef,
            description: paymentRequest.description,
            customerEmail: paymentRequest.customer_email,
            customerName: paymentRequest.customer_name,
            successUrl: `${baseUrl}/payment/success?ref=${transactionRef}`,
            cancelUrl: `${baseUrl}/payment/cancel?ref=${transactionRef}`,
            notifyUrl: `${baseUrl}/.netlify/functions/ikhokha-webhook`
        }).toString();

        console.log('✅ Payment link created for:', paymentRequest.customer_email);

        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({
                success: true,
                payment_link_url: paymentUrl,
                payment_link_id: transactionRef,
                transaction_reference: transactionRef
            })
        };

    } catch (error: any) {
        console.error('❌ Error:', error);
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
