/**
 * Ikhokha Payment Service Usage Example
 * 
 * This file demonstrates how to use the IkhokhaPaymentService for processing payments.
 */

import { ikhokhaPaymentService } from '../services/IkhokhaPaymentService';
import { PaymentStatus } from '../types/ikhokha';
import { generatePaymentReference, createPaymentMetadata } from '../utils/paymentUtils';

/**
 * Example: Initialize and process a course enrollment payment
 */
export async function processEnrollmentPayment() {
  try {
    console.log('🚀 Starting enrollment payment example...');

    // Step 1: Prepare payment data
    const enrollmentData = {
      enrollmentId: 'enr_123456789',
      courseId: 'course_ai_programming',
      courseName: 'AI Assisted Programming',
      userId: 'user_123',
      userEmail: 'student@example.com',
      userName: 'John Doe',
      amount: 299.99
    };

    // Step 2: Generate payment reference and metadata
    const reference = generatePaymentReference('ENR');
    const metadata = createPaymentMetadata(
      enrollmentData.enrollmentId,
      enrollmentData.courseId,
      enrollmentData.userId,
      enrollmentData.courseName,
      enrollmentData.userEmail,
      enrollmentData.userName
    );

    console.log('📋 Payment Details:', {
      reference,
      amount: enrollmentData.amount,
      course: enrollmentData.courseName,
      student: enrollmentData.userName
    });

    // Step 3: Initialize payment session
    const paymentSession = await ikhokhaPaymentService.initializePayment(
      enrollmentData.amount,
      reference,
      metadata
    );

    console.log('✅ Payment session created:', {
      sessionId: paymentSession.id,
      paymentUrl: paymentSession.payment_url,
      status: paymentSession.status,
      expiresAt: paymentSession.expires_at
    });

    // Step 4: Simulate payment processing (in real app, user would be redirected)
    const paymentData = {
      sessionId: paymentSession.id,
      amount: enrollmentData.amount,
      currency: 'ZAR',
      reference: reference,
      customer: {
        email: enrollmentData.userEmail,
        name: enrollmentData.userName
      },
      metadata
    };

    const paymentResult = await ikhokhaPaymentService.processPayment(paymentData);

    console.log('💳 Payment processed:', {
      success: paymentResult.success,
      status: paymentResult.status,
      paymentId: paymentResult.payment_id,
      transactionId: paymentResult.transaction_id
    });

    // Step 5: Verify payment if successful
    if (paymentResult.success && paymentResult.payment_id) {
      const verification = await ikhokhaPaymentService.verifyPayment(paymentResult.payment_id);
      
      console.log('🔍 Payment verification:', {
        valid: verification.valid,
        status: verification.status,
        amount: verification.amount,
        verificationDate: verification.verification_date
      });

      if (verification.valid && verification.status === PaymentStatus.COMPLETED) {
        console.log('🎉 Payment completed successfully! Student can now access the course.');
        return {
          success: true,
          enrollmentId: enrollmentData.enrollmentId,
          paymentId: paymentResult.payment_id,
          transactionId: paymentResult.transaction_id
        };
      }
    }

    console.log('❌ Payment was not successful');
    return {
      success: false,
      error: paymentResult.error?.message || 'Payment failed'
    };

  } catch (error) {
    console.error('❌ Payment example failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Example: Handle webhook notification
 */
export async function handleWebhookExample() {
  try {
    console.log('📨 Webhook handling example...');

    // Simulate incoming webhook data
    const webhookData = {
      transaction_id: 'txn_987654321',
      reference: 'ENR_1735669200000_ABC123',
      amount: 299.99,
      currency: 'ZAR',
      status: 'completed' as const,
      timestamp: new Date().toISOString(),
      signature: 'webhook_signature_hash',
      response_code: '00',
      response_message: 'Approved',
      auth_code: 'AUTH123456',
      card_type: 'VISA',
      masked_card_number: '****1234'
    };

    console.log('📋 Webhook Data:', {
      transactionId: webhookData.transaction_id,
      reference: webhookData.reference,
      status: webhookData.status,
      amount: webhookData.amount
    });

    // Process webhook
    const webhookResult = await ikhokhaPaymentService.handleWebhook(webhookData);

    console.log('✅ Webhook processed:', {
      processed: webhookResult.processed,
      paymentUpdated: webhookResult.payment_updated,
      enrollmentUpdated: webhookResult.enrollment_updated
    });

    return webhookResult;

  } catch (error) {
    console.error('❌ Webhook example failed:', error);
    return {
      processed: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Example: Subscribe to payment updates
 */
export function subscribeToPaymentUpdatesExample() {
  console.log('🔔 Setting up payment update subscription...');

  const unsubscribe = ikhokhaPaymentService.subscribeToPaymentUpdates((update) => {
    console.log('📢 Payment Update Received:', {
      paymentId: update.payment_id,
      status: update.status,
      transactionId: update.transaction_id,
      amount: update.amount,
      timestamp: update.timestamp
    });

    // Handle payment update (e.g., update UI, notify user, update database)
    switch (update.status) {
      case PaymentStatus.COMPLETED:
        console.log('✅ Payment completed - granting course access');
        break;
      case PaymentStatus.FAILED:
        console.log('❌ Payment failed - notifying user');
        break;
      case PaymentStatus.PENDING:
        console.log('⏳ Payment pending - showing loading state');
        break;
      default:
        console.log('ℹ️ Payment status updated:', update.status);
    }
  });

  console.log('✅ Subscription active. Call unsubscribe() to stop listening.');
  
  return unsubscribe;
}

/**
 * Example: Get transaction history
 */
export async function getTransactionHistoryExample() {
  try {
    console.log('📊 Fetching transaction history...');

    const transactions = await ikhokhaPaymentService.getTransactionHistory({
      status: [PaymentStatus.COMPLETED, PaymentStatus.FAILED],
      limit: 10
    });

    console.log(`📋 Found ${transactions.length} transactions:`);
    transactions.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction.reference} - ${transaction.status} - R${transaction.amount}`);
    });

    return transactions;

  } catch (error) {
    console.error('❌ Transaction history example failed:', error);
    return [];
  }
}

/**
 * Example: Process refund
 */
export async function processRefundExample() {
  try {
    console.log('💰 Processing refund example...');

    const transactionId = 'txn_987654321';
    const refundAmount = 150.00; // Partial refund

    const refundResult = await ikhokhaPaymentService.refundTransaction(transactionId, refundAmount);

    console.log('✅ Refund processed:', {
      success: refundResult.success,
      refundId: refundResult.refund_id,
      refundAmount: refundResult.refund_amount,
      remainingAmount: refundResult.remaining_amount,
      status: refundResult.status
    });

    return refundResult;

  } catch (error) {
    console.error('❌ Refund example failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Run all examples
 */
export async function runAllExamples() {
  console.log('🎯 Running all Ikhokha Payment Service examples...\n');

  // Example 1: Process enrollment payment
  console.log('=== Example 1: Process Enrollment Payment ===');
  await processEnrollmentPayment();
  console.log('\n');

  // Example 2: Handle webhook
  console.log('=== Example 2: Handle Webhook ===');
  await handleWebhookExample();
  console.log('\n');

  // Example 3: Subscribe to updates
  console.log('=== Example 3: Subscribe to Payment Updates ===');
  const unsubscribe = subscribeToPaymentUpdatesExample();
  // Unsubscribe after a short delay
  setTimeout(unsubscribe, 1000);
  console.log('\n');

  // Example 4: Get transaction history
  console.log('=== Example 4: Get Transaction History ===');
  await getTransactionHistoryExample();
  console.log('\n');

  // Example 5: Process refund
  console.log('=== Example 5: Process Refund ===');
  await processRefundExample();
  console.log('\n');

  console.log('✅ All examples completed!');
}

// Export for use in other files
export default {
  processEnrollmentPayment,
  handleWebhookExample,
  subscribeToPaymentUpdatesExample,
  getTransactionHistoryExample,
  processRefundExample,
  runAllExamples
};