/**
 * iKhokha Payment Link - Netlify Function
 * Creates payment session via iKhokha API
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

        console.log('📝 Creating payment session for:', paymentRequest.customer_email);

        // Call iKhokha API to create payment session
        const apiUrl = 'https://api.ikhokha.com/public-api/v1/api/payment';

        // Correct iKhokha API request - urls must be in nested object
        const requestBody = {
            entityID: IKHOKHA_APP_ID,
            mode: 'test', // Use test mode for now
            amount: amountInCents,
            currency: 'ZAR',
            externalTransactionID: transactionRef,
            description: paymentRequest.description,
            requesterUrl: baseUrl,
            urls: {
                successPageUrl: `${baseUrl}/payment/success?ref=${transactionRef}`,
                failurePageUrl: `${baseUrl}/payment/cancel?ref=${transactionRef}`,
                cancelUrl: `${baseUrl}/payment/cancel?ref=${transactionRef}`,
                callbackUrl: `${baseUrl}/.netlify/functions/ikhokha-webhook`
            }
        };

        console.log('🔗 Calling iKhokha API:', apiUrl);
        console.log('📤 Request body:', JSON.stringify(requestBody, null, 2));

        // Add timeout to prevent hanging
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 second timeout

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-application-id': IKHOKHA_APP_ID,
                    'x-application-secret': IKHOKHA_APP_SECRET
                },
                body: JSON.stringify(requestBody),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            const responseText = await response.text();
            console.log('📥 iKhokha response status:', response.status);
            console.log('📥 iKhokha response:', responseText.substring(0, 500));

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
                console.error('❌ iKhokha API error:', {
                    status: response.status,
                    data: responseData,
                    requestBody: requestBody
                });

                // Return detailed error for debugging
                return {
                    statusCode: 200, // Return 200 so frontend gets the error details
                    headers: corsHeaders,
                    body: JSON.stringify({
                        success: false,
                        error: 'PAYMENT_GATEWAY_ERROR',
                        message: responseData.message || responseData.error || JSON.stringify(responseData),
                        details: responseData
                    })
                };
            }

            // Extract payment URL from response
            const paymentUrl = responseData.paymentUrl || responseData.redirectUrl || responseData.url || responseData.payment_url;

            if (!paymentUrl) {
                console.error('❌ No payment URL in response:', responseData);
                return {
                    statusCode: 500,
                    headers: corsHeaders,
                    body: JSON.stringify({
                        success: false,
                        error: 'PAYMENT_GATEWAY_ERROR',
                        message: 'No payment URL returned from gateway'
                    })
                };
            }

            console.log('✅ Payment link created successfully');

            return {
                statusCode: 200,
                headers: corsHeaders,
                body: JSON.stringify({
                    success: true,
                    payment_link_url: paymentUrl,
                    payment_link_id: responseData.transactionId || responseData.id || transactionRef,
                    transaction_reference: transactionRef
                })
            };
        } catch (fetchError: any) {
            clearTimeout(timeoutId);
            if (fetchError.name === 'AbortError') {
                console.error('❌ Request timeout');
                return {
                    statusCode: 504,
                    headers: corsHeaders,
                    body: JSON.stringify({
                        success: false,
                        error: 'TIMEOUT',
                        message: 'Payment gateway request timed out'
                    })
                };
            }
            throw fetchError;
        }

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
