import crypto from 'crypto';

const IKHOKHA_APP_ID = 'IKW31E1I5WP1HT2KIIB2XZMBXJOFDX5D';
const IKHOKHA_APP_SECRET = '455rtQjghdOHzLN3YZ3AQ81H3KEf7OeS';

// Test with both endpoints
const endpoints = [
    'https://api.ikhokha.com/public-api/v1/api/payment',
    'https://pay.ikhokha.com/public-api/v1/api/payment'
];

function jsStringEscape(str) {
    return str.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

function generateSignature(path, requestBody, appSecret) {
    const payloadToSign = jsStringEscape(path + requestBody);
    return crypto.createHmac('sha256', appSecret).update(payloadToSign).digest('hex');
}

async function testEndpoint(endpoint) {
    console.log('\n===========================================');
    console.log('Testing endpoint:', endpoint);
    console.log('===========================================');
    
    const requestBody = {
        entityID: IKHOKHA_APP_ID,
        externalEntityID: 'test-user-123',
        amount: 10000,
        currency: 'ZAR',
        requesterUrl: 'https://betaskills.co.za',
        mode: 'live',
        description: 'Test Payment',
        externalTransactionID: 'TEST-' + Date.now(),
        urls: {
            callbackUrl: 'https://betaskills.co.za/callback',
            successPageUrl: 'https://betaskills.co.za/success',
            failurePageUrl: 'https://betaskills.co.za/failure',
            cancelUrl: 'https://betaskills.co.za/cancel'
        }
    };

    const requestBodyString = JSON.stringify(requestBody);
    const path = '/public-api/v1/api/payment';
    const signature = generateSignature(path, requestBodyString, IKHOKHA_APP_SECRET);

    console.log('Request body:', requestBodyString);
    console.log('Signature:', signature.substring(0, 20) + '...');

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'IK-APPID': IKHOKHA_APP_ID,
                'IK-SIGN': signature,
                'Accept': 'application/json'
            },
            body: requestBodyString
        });

        const responseText = await response.text();
        console.log('Status:', response.status);
        console.log('Response:', responseText);

        try {
            const responseData = JSON.parse(responseText);
            console.log('Parsed response:', JSON.stringify(responseData, null, 2));
        } catch (e) {
            console.log('Could not parse as JSON');
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function main() {
    console.log('Testing iKhokha credentials...');
    console.log('APP ID:', IKHOKHA_APP_ID);
    console.log('APP SECRET:', IKHOKHA_APP_SECRET.substring(0, 10) + '...');
    
    for (const endpoint of endpoints) {
        await testEndpoint(endpoint);
    }
}

main();
