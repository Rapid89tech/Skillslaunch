/**
 * Test iKhokha API Connection
 */

export const handler = async (event: any) => {
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers: corsHeaders, body: '' };
    }

    const IKHOKHA_APP_ID = process.env.VITE_IKHOKHA_API_KEY || '';
    const IKHOKHA_APP_SECRET = process.env.VITE_IKHOKHA_API_SECRET || '';

    console.log('Testing iKhokha connection...');
    console.log('Has App ID:', !!IKHOKHA_APP_ID, 'Length:', IKHOKHA_APP_ID.length);
    console.log('Has Secret:', !!IKHOKHA_APP_SECRET, 'Length:', IKHOKHA_APP_SECRET.length);

    try {
        const testBody = {
            entityID: IKHOKHA_APP_ID,
            mode: 'test',
            amount: 10000, // R100.00
            currency: 'ZAR',
            externalTransactionID: `TEST-${Date.now()}`,
            description: 'Test Payment',
            requesterUrl: 'https://betaskills.co.za',
            urls: {
                successPageUrl: 'https://betaskills.co.za/success',
                failurePageUrl: 'https://betaskills.co.za/failure',
                cancelUrl: 'https://betaskills.co.za/cancel',
                callbackUrl: 'https://betaskills.co.za/callback'
            }
        };

        console.log('Request:', JSON.stringify(testBody, null, 2));

        // Generate HMAC SHA256 signature
        const requestBodyString = JSON.stringify(testBody);
        const path = '/public-api/v1/api/payment';
        const dataToSign = path + requestBodyString;
        
        const encoder = new TextEncoder();
        const keyData = encoder.encode(IKHOKHA_APP_SECRET);
        const dataToSignEncoded = encoder.encode(dataToSign);
        
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
        const timeoutId = setTimeout(() => controller.abort(), 20000);

        const response = await fetch('https://pay.ikhokha.com/public-api/v1/api/payment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'ik-appid': IKHOKHA_APP_ID,
                'ik-sign': signature,
                'accept': 'application/json'
            },
            body: requestBodyString,
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        const responseText = await response.text();
        console.log('Status:', response.status);
        console.log('Response:', responseText);

        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({
                status: response.status,
                response: responseText,
                hasCredentials: {
                    appId: !!IKHOKHA_APP_ID,
                    secret: !!IKHOKHA_APP_SECRET
                }
            })
        };
    } catch (error: any) {
        console.error('Error:', error);
        return {
            statusCode: 200,
            headers: corsHeaders,
            body: JSON.stringify({
                error: error.message,
                name: error.name,
                hasCredentials: {
                    appId: !!IKHOKHA_APP_ID,
                    secret: !!IKHOKHA_APP_SECRET
                }
            })
        };
    }
};
