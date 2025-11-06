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
const IKHOKHA_API_KEY = process.env.VITE_IKHOKHA_API_KEY || '';
const IKHOKHA_API_SECRET = process.env.VITE_IKHOKHA_API_SECRET || '';

export const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Accept',
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

        const paymentRequest: PaymentLinkRequest = JSON.parse(event.body || '{}');
        const transactionReference = `TXN-${Date.now()}-${Math.random().toString(36).substring(7)}`;
        const baseUrl = process.env.URL || 'https://betaskills.co.za';

        console.log('📝 Creating payment link for:', paymentRequest.customer_email);

        // Call iKhokha API
        const apiUrl = 'https://api.ikhokha.com/public-api/v1/api/payment';
        
        const requestBody = {
            applicationId: IKHOKHA_API_KEY,
            amount: Math.round(paymentRequest.amount * 100),
            currency: 'ZAR',
            externalTransactionID: transactionReference,
            description: paymentRequest.description,
            customerEmail: paymentRequest.customer_email,
            customerName: paymentRequest.customer_name,
            successUrl: `${baseUrl}/payment/success?ref=${transactionReference}`,
            cancelUrl: `${baseUrl}/payment/cancel?ref=${transactionReference}`,
            notifyUrl: `${baseUrl}/.netlify/functions/ikhokha-webhook`
        };

        console.log('🔗 Calling iKhokha API:', apiUrl);

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${IKHOKHA_API_SECRET}`
            },
            body: JSON.stringify(requestBody)
        });

        const responseText = await response.text();
        console.log('📥 iKhokha response:', responseText);

        let responseData: any;
        try {
            responseData = JSON.parse(responseText);
        } catch (e) {
            console.error('❌ Invalid JSON response:', responseText);
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

        const paymentUrl = responseData.paymentUrl || responseData.redirectUrl || responseData.url;

        console.log('✅ Payment link created successfully');

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
