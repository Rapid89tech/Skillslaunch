/**
 * Payment Utility Functions
 * 
 * Helper functions for payment processing, validation, and formatting.
 */

import { PaymentMetadata, PaymentStatus, IkhokhaPaymentRequest } from '../types/ikhokha';

/**
 * Generate unique payment reference
 */
export function generatePaymentReference(prefix: string = 'PAY'): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substr(2, 6).toUpperCase();
  return `${prefix}_${timestamp}_${random}`;
}

/**
 * Format amount for display
 */
export function formatAmount(amount: number, currency: string = 'ZAR'): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(amount);
}

/**
 * Validate payment amount
 */
export function validatePaymentAmount(amount: number): {
  valid: boolean;
  error?: string;
} {
  if (!amount || isNaN(amount)) {
    return { valid: false, error: 'Amount is required and must be a number' };
  }

  if (amount <= 0) {
    return { valid: false, error: 'Amount must be greater than zero' };
  }

  if (amount > 1000000) {
    return { valid: false, error: 'Amount exceeds maximum limit of R1,000,000' };
  }

  // Check for reasonable decimal places (max 2)
  if (amount.toString().includes('.') && amount.toString().split('.')[1].length > 2) {
    return { valid: false, error: 'Amount cannot have more than 2 decimal places' };
  }

  return { valid: true };
}

/**
 * Validate email address
 */
export function validateEmail(email: string): {
  valid: boolean;
  error?: string;
} {
  if (!email || email.trim().length === 0) {
    return { valid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  return { valid: true };
}

/**
 * Create payment metadata from enrollment data
 */
export function createPaymentMetadata(
  enrollmentId: string,
  courseId: string,
  userId: string,
  courseName: string,
  userEmail: string,
  userName: string
): PaymentMetadata {
  return {
    enrollmentId,
    courseId,
    userId,
    courseName,
    userEmail,
    userName,
    timestamp: new Date().toISOString(),
    source: 'web_app'
  };
}

/**
 * Extract payment information from URL parameters
 */
export function extractPaymentInfoFromUrl(): {
  success: boolean;
  payment_id?: string;
  reference?: string;
  status?: string;
  amount?: number;
  simulated?: boolean;
  error?: string;
} {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    
    const success = urlParams.get('status') === 'success' || 
                   urlParams.get('simulated') === 'true' ||
                   urlParams.get('payment_status') === 'completed';

    return {
      success,
      payment_id: urlParams.get('payment_id') || urlParams.get('id') || undefined,
      reference: urlParams.get('reference') || urlParams.get('ref') || undefined,
      status: urlParams.get('status') || urlParams.get('payment_status') || undefined,
      amount: urlParams.get('amount') ? parseFloat(urlParams.get('amount')!) : undefined,
      simulated: urlParams.get('simulated') === 'true',
      error: urlParams.get('error') || urlParams.get('error_message') || undefined
    };
  } catch (error) {
    console.error('❌ Failed to extract payment info from URL:', error);
    return {
      success: false,
      error: 'Failed to parse payment information from URL'
    };
  }
}

/**
 * Get payment status display information
 */
export function getPaymentStatusDisplay(status: PaymentStatus): {
  label: string;
  color: string;
  icon: string;
} {
  switch (status) {
    case PaymentStatus.COMPLETED:
      return {
        label: 'Completed',
        color: 'green',
        icon: '✅'
      };
    case PaymentStatus.PENDING:
      return {
        label: 'Pending',
        color: 'yellow',
        icon: '⏳'
      };
    case PaymentStatus.PROCESSING:
      return {
        label: 'Processing',
        color: 'blue',
        icon: '🔄'
      };
    case PaymentStatus.FAILED:
      return {
        label: 'Failed',
        color: 'red',
        icon: '❌'
      };
    case PaymentStatus.CANCELLED:
      return {
        label: 'Cancelled',
        color: 'gray',
        icon: '🚫'
      };
    case PaymentStatus.REFUNDED:
      return {
        label: 'Refunded',
        color: 'orange',
        icon: '💰'
      };
    default:
      return {
        label: 'Unknown',
        color: 'gray',
        icon: '❓'
      };
  }
}

/**
 * Calculate payment processing fee (if applicable)
 */
export function calculateProcessingFee(amount: number, feePercentage: number = 0.035): {
  fee: number;
  total: number;
  feeFormatted: string;
  totalFormatted: string;
} {
  const fee = Math.round(amount * feePercentage * 100) / 100; // Round to 2 decimal places
  const total = amount + fee;

  return {
    fee,
    total,
    feeFormatted: formatAmount(fee),
    totalFormatted: formatAmount(total)
  };
}

/**
 * Check if payment is in final state
 */
export function isPaymentFinal(status: PaymentStatus): boolean {
  return [
    PaymentStatus.COMPLETED,
    PaymentStatus.FAILED,
    PaymentStatus.CANCELLED,
    PaymentStatus.REFUNDED
  ].includes(status);
}

/**
 * Check if payment is successful
 */
export function isPaymentSuccessful(status: PaymentStatus): boolean {
  return status === PaymentStatus.COMPLETED;
}

/**
 * Generate payment description
 */
export function generatePaymentDescription(courseName: string, userName?: string): string {
  const baseDescription = `Course Enrollment: ${courseName}`;
  return userName ? `${baseDescription} - ${userName}` : baseDescription;
}

/**
 * Sanitize payment reference for Ikhokha
 */
export function sanitizePaymentReference(reference: string): string {
  // Remove special characters and limit length
  return reference
    .replace(/[^a-zA-Z0-9_-]/g, '')
    .substring(0, 50)
    .toUpperCase();
}

/**
 * Create payment request from enrollment data
 */
export function createPaymentRequestFromEnrollment(
  enrollmentId: string,
  courseId: string,
  courseName: string,
  amount: number,
  userEmail: string,
  userName: string,
  returnUrl: string,
  cancelUrl: string,
  notifyUrl: string
): IkhokhaPaymentRequest {
  const reference = generatePaymentReference('ENR');
  const metadata = createPaymentMetadata(
    enrollmentId,
    courseId,
    '', // userId will be set by the calling service
    courseName,
    userEmail,
    userName
  );

  return {
    amount,
    currency: 'ZAR',
    description: generatePaymentDescription(courseName, userName),
    reference: sanitizePaymentReference(reference),
    customer_email: userEmail,
    customer_name: userName,
    return_url: returnUrl,
    cancel_url: cancelUrl,
    notify_url: notifyUrl,
    metadata
  };
}

/**
 * Parse Ikhokha webhook timestamp
 */
export function parseIkhokhaTimestamp(timestamp: string): Date {
  try {
    // Handle various timestamp formats that Ikhokha might send
    if (timestamp.includes('T')) {
      return new Date(timestamp);
    } else if (timestamp.includes(' ')) {
      return new Date(timestamp.replace(' ', 'T'));
    } else {
      // Assume Unix timestamp
      const parsed = parseInt(timestamp, 10);
      return new Date(parsed * 1000);
    }
  } catch (error) {
    console.warn('⚠️ Failed to parse Ikhokha timestamp:', timestamp);
    return new Date(); // Fallback to current time
  }
}

/**
 * Mask sensitive payment data for logging
 */
export function maskPaymentData(data: any): any {
  if (!data || typeof data !== 'object') {
    return data;
  }

  const masked = { ...data };
  
  // Mask sensitive fields
  const sensitiveFields = [
    'api_key',
    'api_secret',
    'webhook_secret',
    'card_number',
    'cvv',
    'pin',
    'password'
  ];

  sensitiveFields.forEach(field => {
    if (masked[field]) {
      if (typeof masked[field] === 'string') {
        masked[field] = masked[field].length > 4 
          ? `${masked[field].substring(0, 4)}***`
          : '***';
      } else {
        masked[field] = '***';
      }
    }
  });

  // Recursively mask nested objects
  Object.keys(masked).forEach(key => {
    if (masked[key] && typeof masked[key] === 'object') {
      masked[key] = maskPaymentData(masked[key]);
    }
  });

  return masked;
}