# Ikhokha Webhook Handling System

This document describes the comprehensive webhook handling system implemented for Ikhokha payment gateway integration.

## Overview

The webhook handling system provides:

- **Secure webhook processing** with signature validation and security measures
- **Automatic retry mechanism** with exponential backoff for failed webhooks
- **Real-time updates** for payment status changes
- **Comprehensive error handling** and audit logging
- **Rate limiting and IP whitelisting** for security

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Ikhokha API   │───▶│  Netlify Function │───▶│ Webhook Handler │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │ Security Service │    │  Retry Service  │
                       └──────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │   Audit Logs     │    │  Real-time UI   │
                       └──────────────────┘    └─────────────────┘
```

## Components

### 1. Netlify Function (`netlify/functions/ikhokha-webhook.ts`)

**Purpose**: Server-side webhook endpoint that receives notifications from Ikhokha

**Features**:
- Validates webhook signatures using HMAC-SHA256
- Performs security checks (rate limiting, timestamp validation)
- Updates database records (enrollments, payments)
- Triggers real-time updates
- Comprehensive error handling

**Endpoint**: `POST /api/webhooks/ikhokha`

### 2. Webhook Handler Service (`src/services/IkhokhaWebhookHandler.ts`)

**Purpose**: Client-side service for managing webhook subscriptions and processing

**Features**:
- Subscribe to payment updates with filters
- Manual webhook processing for testing
- Real-time subscription management
- Integration with retry service

**Key Methods**:
```typescript
// Subscribe to payment updates
const unsubscribe = ikhokhaWebhookHandler.subscribeToPaymentUpdates(
  (update: PaymentUpdate) => {
    console.log('Payment update:', update);
  },
  { status: [PaymentStatus.COMPLETED] } // Optional filters
);

// Process webhook manually
const result = await ikhokhaWebhookHandler.processWebhook(webhookData);
```

### 3. Retry Service (`src/services/WebhookRetryService.ts`)

**Purpose**: Handles failed webhook processing with intelligent retry logic

**Features**:
- Exponential backoff with jitter
- Configurable retry limits and delays
- Retry queue management
- Statistics and monitoring

**Configuration**:
```typescript
const retryService = new WebhookRetryService({
  maxRetries: 5,
  initialDelay: 1000,
  maxDelay: 300000,
  backoffMultiplier: 2,
  jitterEnabled: true
});
```

### 4. Security Service (`src/services/WebhookSecurityService.ts`)

**Purpose**: Provides comprehensive security measures for webhook processing

**Features**:
- HMAC-SHA256 signature validation
- Rate limiting per IP address
- IP whitelisting support
- Audit logging
- Timestamp validation
- Data validation

**Security Checks**:
- Webhook signature validation
- Rate limiting (10 requests per minute per IP)
- Timestamp freshness (within 5 minutes)
- Amount validation (positive, within limits)
- Required field validation

## Usage Examples

### Basic Webhook Subscription

```typescript
import { ikhokhaWebhookHandler } from './services/IkhokhaWebhookHandler';

// Subscribe to all payment updates
const unsubscribe = ikhokhaWebhookHandler.subscribeToPaymentUpdates(
  (update) => {
    console.log('Payment update:', update);
    
    if (update.status === PaymentStatus.COMPLETED) {
      // Grant course access
      grantCourseAccess(update.metadata?.enrollmentId);
    }
  }
);

// Cleanup when done
unsubscribe();
```

### Filtered Subscriptions

```typescript
// Only listen to completed payments for specific payment
const unsubscribe = ikhokhaWebhookHandler.subscribeToPaymentUpdates(
  (update) => {
    sendConfirmationEmail(update);
  },
  {
    paymentId: 'specific_payment_id',
    status: [PaymentStatus.COMPLETED]
  }
);
```

### Manual Webhook Processing

```typescript
// Process webhook manually (useful for testing)
const webhookData = {
  transaction_id: 'txn_123',
  reference: 'REF_123',
  amount: 299.99,
  currency: 'ZAR',
  status: 'completed',
  timestamp: new Date().toISOString(),
  signature: 'sha256=...',
  response_code: '00',
  response_message: 'Approved'
};

const result = await ikhokhaWebhookHandler.processWebhook(webhookData);
console.log('Webhook processed:', result);
```

### Retry Management

```typescript
import { webhookRetryService } from './services/WebhookRetryService';

// Get retry statistics
const stats = webhookRetryService.getRetryStats();
console.log('Retry stats:', stats);

// Retry specific webhook
await webhookRetryService.retryWebhook('retry_id');

// Clear retry queue
webhookRetryService.clearRetryQueue();
```

### Security Validation

```typescript
import { webhookSecurityService } from './services/WebhookSecurityService';

// Validate webhook security
const result = await webhookSecurityService.validateWebhookSecurity(
  webhookData,
  clientIp,
  headers
);

if (!result.valid) {
  console.error('Security violations:', result.violations);
}
```

## Configuration

### Environment Variables

```bash
# Ikhokha Configuration
VITE_IKHOKHA_API_URL=https://pay.ikhokha.com
VITE_IKHOKHA_API_KEY=your_api_key
VITE_IKHOKHA_API_SECRET=your_api_secret
VITE_IKHOKHA_WEBHOOK_SECRET=your_webhook_secret
VITE_IKHOKHA_TEST_MODE=true

# Supabase Configuration (for database updates)
VITE_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Netlify Configuration

The `netlify.toml` file includes redirects for webhook endpoints:

```toml
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

## Database Schema

### Enrollments Table Updates

The webhook system updates the following fields in the enrollments table:

```sql
-- Payment status tracking
payment_status VARCHAR -- 'pending', 'completed', 'failed', 'cancelled'
payment_completed_at TIMESTAMP

-- Ikhokha transaction data
ikhokha_transaction_id VARCHAR
ikhokha_response_code VARCHAR
ikhokha_response_message VARCHAR

-- Enrollment status (auto-approved for successful payments)
status VARCHAR -- 'pending', 'approved', 'rejected'
```

### Payment Transactions Table

```sql
CREATE TABLE payment_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enrollment_id UUID REFERENCES enrollments(id),
  transaction_id VARCHAR NOT NULL,
  reference VARCHAR NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) NOT NULL,
  status VARCHAR NOT NULL,
  payment_method VARCHAR NOT NULL,
  ikhokha_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Notifications Table

```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  type VARCHAR NOT NULL,
  title VARCHAR NOT NULL,
  message TEXT NOT NULL,
  data JSONB,
  read_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Security Considerations

### Signature Validation

All webhooks are validated using HMAC-SHA256 signatures:

```typescript
const expectedSignature = crypto
  .createHmac('sha256', webhookSecret)
  .update(payload)
  .digest('hex');

const isValid = crypto.timingSafeEqual(
  Buffer.from(expectedSignature, 'hex'),
  Buffer.from(providedSignature, 'hex')
);
```

### Rate Limiting

- **Limit**: 10 requests per minute per IP address
- **Window**: Rolling 1-minute window
- **Action**: Reject requests with 429 status code

### IP Whitelisting

Configure allowed IP ranges in the security service:

```typescript
const securityService = new WebhookSecurityService({
  enableIpWhitelisting: true,
  allowedIpRanges: [
    '192.168.1.0/24',
    '10.0.0.0/8'
  ]
});
```

### Audit Logging

All webhook events are logged for security auditing:

```typescript
interface SecurityAuditLog {
  id: string;
  timestamp: Date;
  event: 'webhook_received' | 'signature_validation' | 'rate_limit_exceeded';
  source_ip?: string;
  result: 'success' | 'failure' | 'blocked';
  details?: Record<string, any>;
}
```

## Error Handling

### Retry Logic

Failed webhooks are automatically retried with exponential backoff:

- **Initial Delay**: 1 second
- **Backoff Multiplier**: 2x
- **Maximum Delay**: 5 minutes
- **Maximum Retries**: 5 attempts
- **Jitter**: ±10% to prevent thundering herd

### Error Types

1. **Validation Errors**: Not retried (permanent failure)
2. **Network Errors**: Retried with backoff
3. **Database Errors**: Retried with backoff
4. **Security Violations**: Not retried, logged for audit

### Fallback Processing

If the webhook handler fails, a fallback mechanism ensures basic acknowledgment:

```typescript
private async processWebhookDataFallback(webhookData: IkhokhaWebhook): Promise<WebhookResult> {
  return {
    processed: true,
    payment_updated: false,
    enrollment_updated: false,
    details: { fallback: true }
  };
}
```

## Monitoring and Observability

### Health Checks

```typescript
// Get system health
const health = {
  webhookStats: ikhokhaWebhookHandler.getWebhookStats(),
  retryStats: webhookRetryService.getRetryStats(),
  securityStats: webhookSecurityService.getRateLimitStats()
};
```

### Metrics

- **Active Subscriptions**: Number of active webhook subscriptions
- **Pending Retries**: Number of webhooks waiting for retry
- **Success Rate**: Percentage of successful webhook processing
- **Average Processing Time**: Time taken to process webhooks
- **Security Violations**: Number of blocked requests

### Alerts

Set up alerts for:
- High retry queue size
- Repeated security violations
- Processing failures
- Unusual traffic patterns

## Testing

### Unit Tests

Run the comprehensive test suite:

```bash
# Test webhook handler
npm test src/services/__tests__/IkhokhaWebhookHandler.test.ts

# Test retry service
npm test src/services/__tests__/WebhookRetryService.test.ts

# Test payment service integration
npm test src/services/__tests__/IkhokhaPaymentService.test.ts
```

### Integration Testing

Use the example file for integration testing:

```typescript
import { exampleUsage } from './examples/webhookHandlingExample';

// Run complete webhook system test
await exampleUsage();
```

### Manual Testing

Test webhook processing manually:

```typescript
import { processTestWebhook } from './examples/webhookHandlingExample';

// Process a test webhook
const result = await processTestWebhook();
console.log('Test result:', result);
```

## Deployment

### Production Checklist

1. **Environment Variables**: Set all required environment variables
2. **Webhook Secret**: Use a strong, unique webhook secret
3. **Database Permissions**: Ensure service role key has proper permissions
4. **Rate Limiting**: Configure appropriate rate limits
5. **Monitoring**: Set up monitoring and alerting
6. **Backup**: Implement backup strategy for audit logs

### Netlify Deployment

The webhook function is automatically deployed with the application:

```bash
# Build and deploy
npm run build
netlify deploy --prod
```

### Webhook URL

After deployment, configure Ikhokha to send webhooks to:
```
https://your-domain.netlify.app/api/webhooks/ikhokha
```

## Troubleshooting

### Common Issues

1. **Signature Validation Failures**
   - Check webhook secret configuration
   - Verify payload format
   - Check for encoding issues

2. **Rate Limiting Issues**
   - Review IP whitelisting configuration
   - Check for unusual traffic patterns
   - Adjust rate limits if needed

3. **Retry Queue Buildup**
   - Check database connectivity
   - Review error logs
   - Verify Supabase permissions

4. **Real-time Updates Not Working**
   - Check Supabase real-time configuration
   - Verify subscription setup
   - Check browser console for errors

### Debug Mode

Enable debug logging:

```typescript
// Set debug mode in environment
process.env.DEBUG = 'webhook:*';

// Or enable verbose logging
console.log('Webhook debug info:', {
  config: webhookSecurityService.getConfig(),
  stats: ikhokhaWebhookHandler.getWebhookStats()
});
```

### Support

For issues with the webhook system:

1. Check the audit logs for security violations
2. Review retry statistics for processing failures
3. Verify environment configuration
4. Check Netlify function logs
5. Review Supabase database logs

## Future Enhancements

Planned improvements:

1. **Webhook Replay**: Ability to replay historical webhooks
2. **Advanced Filtering**: More sophisticated subscription filters
3. **Batch Processing**: Process multiple webhooks in batches
4. **Webhook Forwarding**: Forward webhooks to external systems
5. **Dashboard Integration**: Real-time webhook monitoring dashboard
6. **Webhook Simulation**: Built-in webhook simulation for testing