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

// Escape function matching the working test
function escapePayload(str: string): string {
    return str.split('\\').join('\\\\').split('"').join('\\"').split("'").join("\\'").split('\u0000').join('\\0');
}

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
        if (!IKHOKHA_APP_ID || !IKHOKHA_APP_SECRET) {
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

        const apiUrl = 'https://api.ikhokha.com/public-api/v1/api/payment';

        const requestBody = {
            entityID: IKHOKHA_APP_ID,
            externalEntityID: paymentRequest.user_id,
            amount: amountInCents,
            currency: 'ZAR',
            requesterUrl: baseUrl,
            mode: 'live',
            description: paymentRequest.description,
            externalTransactionID: transactionRef,
            urls: {
                callbackUrl: `${baseUrl}/.netlify/functions/ikhokha-webhook`,
                successPageUrl: `${baseUrl}/payment/success?ref=${transactionRef}`,
                failurePageUrl: `${baseUrl}/payment/cancel?ref=${transactionRef}`,
                cancelUrl: `${baseUrl}/payment/cancel?ref=${transactionRef}`
            }
        };

        const requestBodyString = JSON.stringify(requestBody);
        const path = '/public-api/v1/api/payment';
        const payloadToSign = escapePayload(path + requestBodyString);
        
        const encoder = new TextEncoder();
        const keyData = encoder.encode(IKHOKHA_APP_SECRET);
        const dataToSignEncoded = encoder.encode(payloadToSign);
        
        const cryptoKey = await crypto.subtle.importKey(
            'raw',
            keyData,
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['sign']
        );
        
        const signatureBuffer = await crypto.subtle.sign('HMAC', cryptoKey, dataToSignEncoded);
        const hashArray = Array.from(new Uint8Array(signatureBuffer));
        const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 25000);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'IK-APPID': IKHOKHA_APP_ID,
                    'IK-SIGN': signature,
                    'Accept': 'application/json'
                },
                body: requestBodyString,
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            const responseText = await response.text();
            let responseData: any;
            try {
                responseData = JSON.parse(responseText);
            } catch (e) {
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
                return {
                    statusCode: 200,
                    headers: corsHeaders,
                    body: JSON.stringify({
                        success: false,
                        error: 'PAYMENT_GATEWAY_ERROR',
                        message: responseData.message || responseData.error || JSON.stringify(responseData),
                        details: responseData
                    })
                };
            }

            if (responseData.responseCode === '00') {
                const paymentUrl = responseData.paylinkUrl;
                
                if (!paymentUrl) {
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

                return {
                    statusCode: 200,
                    headers: corsHeaders,
                    body: JSON.stringify({
                        success: true,
                        payment_link_url: paymentUrl,
                        payment_link_id: responseData.paylinkID || transactionRef,
                        transaction_reference: transactionRef,
                        message: 'Payment link created successfully'
                    })
                };
            } else {
                return {
                    statusCode: 200,
                    headers: corsHeaders,
                    body: JSON.stringify({
                        success: false,
                        error: 'PAYMENT_LINK_FAILED',
                        message: responseData.message || 'Failed to create payment link',
                        response_code: responseData.responseCode,
                        details: responseData
                    })
                };
            }
        } catch (fetchError: any) {
            clearTimeout(timeoutId);
            if (fetchError.name === 'AbortError') {
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
