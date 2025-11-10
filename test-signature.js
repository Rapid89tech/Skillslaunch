const crypto = require('crypto');

// Your credentials
const IKHOKHA_APP_ID = 'IKW31E1I5WP1HT2KIIB2XZMBXJOFDX5D';
const IKHOKHA_APP_SECRET = '455rtQjghdOHzLN3YZ3AQ81H3KEf7OeS';

// Test request
const requestBody = {
  entityID: IKHOKHA_APP_ID,
  externalEntityID: 'test-user-123',
  amount: 29000,
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

// Method 1: Without escaping (what we were doing)
const payload1 = path + requestBodyString;
const signature1 = crypto.createHmac('sha256', IKHOKHA_APP_SECRET).update(payload1).digest('hex');

// Method 2: With escaping (per iKhokha docs)
function jsStringEscape(str) {
  return str.replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}
const payload2 = jsStringEscape(path + requestBodyString);
const signature2 = crypto.createHmac('sha256', IKHOKHA_APP_SECRET).update(payload2).digest('hex');

console.log('Request Body:', requestBodyString);
console.log('\n--- Method 1 (No escaping) ---');
console.log('Payload:', payload1.substring(0, 100) + '...');
console.log('Signature:', signature1);

console.log('\n--- Method 2 (With escaping) ---');
console.log('Payload:', payload2.substring(0, 100) + '...');
console.log('Signature:', signature2);

console.log('\n--- Test API Call ---');
console.log('curl -X POST "https://api.ikhokha.com/public-api/v1/api/payment" \\');
console.log('  -H "Content-Type: application/json" \\');
console.log('  -H "IK-APPID: ' + IKHOKHA_APP_ID + '" \\');
console.log('  -H "IK-SIGN: ' + signature2 + '" \\');
console.log('  -d \'' + requestBodyString + '\'');
