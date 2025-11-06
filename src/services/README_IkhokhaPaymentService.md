# Ikhokha Payment Service Documentation

## Overview

The `IkhokhaPaymentService` provides a comprehensive integration with the Ikhokha payment gateway, offering robust payment processing capabilities with proper error handling, retry mechanisms, and webhook support.

## Features

- ✅ **Payment Initialization**: Create secure payment sessions with Ikhokha
- ✅ **Payment Processing**: Handle payment transactions with validation
- ✅ **Payment Verification**: Verify payment status and authenticity
- ✅ **Webhook Handling**: Process Ikhokha webhook notifications
- ✅ **Transaction Management**: Retrieve transaction history and process refunds
- ✅ **Real-time Updates**: Subscribe to payment status changes
- ✅ **Error Handling**: Comprehensive error handling with custom error types
- ✅ **Test Mode**: Full simulation support for development and testing
- ✅ **Configuration Management**: Environment-based configuration
- ✅ **Retry Logic**: Automatic retry for failed API calls
- ✅ **Validation**: Input validation for all payment operations

## Quick Start

### 1. Import the Service

```typescript
import { ikhokhaPaymentService } from '../services/IkhokhaPaymentService';
import { PaymentStatus } from '../types/ikhokha';
```

### 2. Initialize a Payment

```typescript
const paymentSession = await ikhokhaPaymentService.initializePayment(
  299.99, // amount in ZAR
  'ENR_123456', // unique reference
  {
    enrollmentId: 'enr_123',
    courseId: 'course_ai',
    courseName: 'AI Programming',
    userEmail: 'student@example.com',
    userName: 'John Doe'
  }
);

// Redirect user to payment URL
window.location.href = paymentSession.payment_url;
```

### 3. Process Payment

```typescript
const paymentResult = await ikhokhaPaymentService.processPayment({
  sessionId: paymentSession.id,
  amount: 299.99,
  currency: 'ZAR',
  reference: 'ENR_123456',
  customer: {
    email: 'student@example.com',
    name: 'John Doe'
  }
});

if (paymentResult.success) {
  console.log('Payment successful!', paymentResult.payment_id);
}
```

### 4. Verify Payment

```typescript
const verification = await ikhokhaPaymentService.verifyPayment(paymentId);

if (verification.valid && verification.status === PaymentStatus.COMPLETED) {
  // Grant course access
  console.log('Payment verified and completed');
}
```

## Configuration

### Environment Variables

Add these variables to your `.env` file:

```env
# Ikhokha Payment Gateway Configuration
VITE_IKHOKHA_API_URL=https://pay.ikhokha.com
VITE_IKHOKHA_API_KEY=your_api_key_here
VITE_IKHOKHA_API_SECRET=your_api_secret_here
VITE_IKHOKHA_WEBHOOK_SECRET=your_webhook_secret_here
VITE_IKHOKHA_TEST_MODE=true
VITE_IKHOKHA_TIMEOUT=30000
VITE_IKHOKHA_RETRY_ATTEMPTS=3
VITE_IKHOKHA_RETRY_DELAY=1000
```

### Configuration Options

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_IKHOKHA_API_URL` | Ikhokha API base URL | `https://pay.ikhokha.com` |
| `VITE_IKHOKHA_API_KEY` | Your Ikhokha API key | Required |
| `VITE_IKHOKHA_API_SECRET` | Your Ikhokha API secret | Required |
| `VITE_IKHOKHA_WEBHOOK_SECRET` | Webhook signature secret | Required |
| `VITE_IKHOKHA_TEST_MODE` | Enable test mode | `true` |
| `VITE_IKHOKHA_TIMEOUT` | API request timeout (ms) | `30000` |
| `VITE_IKHOKHA_RETRY_ATTEMPTS` | Number of retry attempts | `3` |
| `VITE_IKHOKHA_RETRY_DELAY` | Delay between retries (ms) | `1000` |

## API Reference

### Core Methods

#### `initializePayment(amount, reference, metadata?)`

Creates a new payment session with Ikhokha.

**Parameters:**
- `amount` (number): Payment amount in ZAR
- `reference` (string): Unique payment reference
- `metadata` (PaymentMetadata, optional): Additional payment data

**Returns:** `Promise<PaymentSession>`

**Example:**
```typescript
const session = await ikhokhaPaymentService.initializePayment(
  100.00,
  'PAY_123456',
  { courseId: 'course_1', userId: 'user_1' }
);
```

#### `processPayment(paymentData)`

Processes a payment with the provided data.

**Parameters:**
- `paymentData` (PaymentData): Payment processing data

**Returns:** `Promise<PaymentResult>`

#### `verifyPayment(paymentId)`

Verifies the status of a payment.

**Parameters:**
- `paymentId` (string): Payment ID to verify

**Returns:** `Promise<PaymentVerification>`

#### `handleWebhook(webhookData)`

Processes incoming Ikhokha webhook notifications.

**Parameters:**
- `webhookData` (IkhokhaWebhook): Webhook payload from Ikhokha

**Returns:** `Promise<WebhookResult>`

#### `subscribeToPaymentUpdates(callback)`

Subscribes to real-time payment updates.

**Parameters:**
- `callback` (PaymentUpdateCallback): Function to call on updates

**Returns:** `() => void` (unsubscribe function)

**Example:**
```typescript
const unsubscribe = ikhokhaPaymentService.subscribeToPaymentUpdates((update) => {
  console.log('Payment update:', update.status);
});

// Later, unsubscribe
unsubscribe();
```

### Transaction Management

#### `getTransactionHistory(filters?)`

Retrieves transaction history with optional filtering.

**Parameters:**
- `filters` (TransactionFilters, optional): Filter criteria

**Returns:** `Promise<Transaction[]>`

#### `refundTransaction(transactionId, amount?)`

Processes a refund for a transaction.

**Parameters:**
- `transactionId` (string): Transaction ID to refund
- `amount` (number, optional): Refund amount (full refund if not specified)

**Returns:** `Promise<RefundResult>`

### Validation Methods

#### `validateWebhookSignature(webhookData)`

Validates the signature of a webhook payload.

**Parameters:**
- `webhookData` (IkhokhaWebhook): Webhook data to validate

**Returns:** `boolean`

## Error Handling

The service uses custom error types for better error handling:

### Error Types

- **`IkhokhaError`**: Base error class for Ikhokha-related errors
- **`PaymentValidationError`**: Validation errors (invalid amount, reference, etc.)
- **`WebhookValidationError`**: Webhook signature validation errors
- **`NetworkError`**: Network and API communication errors

### Error Handling Example

```typescript
try {
  const session = await ikhokhaPaymentService.initializePayment(amount, reference);
} catch (error) {
  if (error instanceof PaymentValidationError) {
    console.error('Validation error:', error.message);
  } else if (error instanceof NetworkError) {
    console.error('Network error:', error.message);
  } else {
    console.error('Unknown error:', error.message);
  }
}
```

## Test Mode

The service supports comprehensive test mode functionality:

### Test Mode Features

- ✅ Payment simulation without real API calls
- ✅ Configurable success/failure rates
- ✅ Mock transaction data
- ✅ Webhook simulation
- ✅ Full verification support

### Enabling Test Mode

Set `VITE_IKHOKHA_TEST_MODE=true` in your environment variables.

In test mode:
- All payments are simulated
- No real API calls are made to Ikhokha
- Payments complete instantly
- All verification methods work with mock data

## Webhook Integration

### Setting Up Webhooks

1. Configure your webhook endpoint URL in Ikhokha dashboard
2. Set the webhook secret in your environment variables
3. Handle incoming webhooks in your API route

### Webhook Handler Example

```typescript
// API route: /api/webhooks/ikhokha
export async function POST(request: Request) {
  try {
    const webhookData = await request.json();
    
    const result = await ikhokhaPaymentService.handleWebhook(webhookData);
    
    if (result.processed) {
      return new Response('OK', { status: 200 });
    } else {
      return new Response('Processing failed', { status: 400 });
    }
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response('Error', { status: 500 });
  }
}
```

## Utilities

The service comes with helpful utility functions:

### Payment Utils

```typescript
import {
  generatePaymentReference,
  formatAmount,
  validatePaymentAmount,
  createPaymentMetadata,
  extractPaymentInfoFromUrl
} from '../utils/paymentUtils';

// Generate unique reference
const reference = generatePaymentReference('ENR');

// Format amount for display
const formatted = formatAmount(299.99, 'ZAR'); // "R 299.99"

// Validate amount
const validation = validatePaymentAmount(100);
if (!validation.valid) {
  console.error(validation.error);
}
```

## Testing

The service includes comprehensive tests:

```bash
# Run Ikhokha service tests
npm test -- src/services/__tests__/IkhokhaPaymentService.test.ts
```

### Test Coverage

- ✅ Payment initialization
- ✅ Payment processing
- ✅ Payment verification
- ✅ Webhook handling
- ✅ Transaction management
- ✅ Error handling
- ✅ Validation methods

## Examples

See `src/examples/ikhokhaPaymentExample.ts` for comprehensive usage examples:

```typescript
import { runAllExamples } from '../examples/ikhokhaPaymentExample';

// Run all examples
await runAllExamples();
```

## Security Considerations

### Best Practices

1. **Environment Variables**: Never commit API keys to version control
2. **Webhook Validation**: Always validate webhook signatures
3. **HTTPS**: Use HTTPS for all payment-related communications
4. **Input Validation**: Validate all payment inputs
5. **Error Logging**: Log errors securely without exposing sensitive data
6. **Rate Limiting**: Implement rate limiting for payment endpoints

### Data Protection

- Sensitive data is automatically masked in logs
- API keys and secrets are never exposed in client-side code
- Payment data is validated before processing
- Webhook signatures are verified for authenticity

## Troubleshooting

### Common Issues

1. **API Key Issues**: Verify your Ikhokha API credentials
2. **Network Errors**: Check your internet connection and Ikhokha API status
3. **Webhook Failures**: Verify webhook URL and signature validation
4. **Test Mode**: Ensure test mode is properly configured for development

### Debug Mode

Enable debug logging by setting the log level in your configuration:

```typescript
console.log('🔧 Ikhokha Configuration:', maskConfig(ikhokhaConfig));
```

## Support

For issues related to:
- **Ikhokha API**: Contact Ikhokha support
- **Service Implementation**: Check the test files and examples
- **Configuration**: Review the environment variables section

## Changelog

### Version 1.0.0
- ✅ Initial implementation
- ✅ Complete Ikhokha integration
- ✅ Test mode support
- ✅ Comprehensive error handling
- ✅ Webhook processing
- ✅ Transaction management
- ✅ Full test coverage