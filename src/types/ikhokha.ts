/**
 * Ikhokha Payment Gateway Types and Interfaces
 * 
 * This file contains all TypeScript interfaces and types for Ikhokha payment integration
 * following the design specification requirements.
 */

// Core Ikhokha Payment Interfaces
export interface IkhokhaPaymentRequest {
  amount: number;
  currency: string;
  description: string;
  reference: string;
  customer_email: string;
  customer_name: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  metadata?: PaymentMetadata;
}

export interface PaymentMetadata {
  enrollmentId?: string;
  courseId?: string;
  userId?: string;
  courseName?: string;
  [key: string]: any;
}

export interface PaymentSession {
  id: string;
  payment_url: string;
  reference: string;
  amount: number;
  currency: string;
  status: PaymentSessionStatus;
  expires_at: Date;
  created_at: Date;
  metadata?: PaymentMetadata;
}

export enum PaymentSessionStatus {
  CREATED = 'created',
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired'
}

export interface PaymentData {
  sessionId: string;
  amount: number;
  currency: string;
  reference: string;
  customer: CustomerData;
  metadata?: PaymentMetadata;
}

export interface CustomerData {
  email: string;
  name: string;
  phone?: string;
  address?: AddressData;
}

export interface AddressData {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
}

export interface PaymentResult {
  success: boolean;
  payment_id?: string;
  transaction_id?: string;
  status: PaymentStatus;
  amount?: number;
  currency?: string;
  reference?: string;
  message?: string;
  error?: PaymentError;
  ikhokha_response?: IkhokhaApiResponse;
}

export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
  PARTIALLY_REFUNDED = 'partially_refunded'
}

export interface PaymentError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface PaymentVerification {
  valid: boolean;
  payment_id: string;
  status: PaymentStatus;
  amount: number;
  currency: string;
  reference: string;
  transaction_date: Date;
  verification_date: Date;
  ikhokha_data?: IkhokhaTransactionData;
}

// Ikhokha API Response Types
export interface IkhokhaApiResponse {
  success: boolean;
  message?: string;
  data?: any;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export interface IkhokhaTransactionData {
  transaction_id: string;
  reference: string;
  amount: number;
  currency: string;
  status: string;
  auth_code?: string;
  response_code: string;
  response_message: string;
  card_type?: string;
  masked_card_number?: string;
  timestamp: string;
  merchant_reference?: string;
}

// Webhook Types
export interface IkhokhaWebhook {
  transaction_id: string;
  reference: string;
  amount: number;
  currency: string;
  status: 'completed' | 'failed' | 'cancelled';
  timestamp: string;
  signature: string;
  auth_code?: string;
  response_code: string;
  response_message: string;
  card_type?: string;
  masked_card_number?: string;
  merchant_reference?: string;
  metadata?: Record<string, any>;
}

export interface WebhookResult {
  processed: boolean;
  payment_updated: boolean;
  enrollment_updated: boolean;
  error?: string;
  details?: Record<string, any>;
}

// Transaction Management Types
export interface Transaction {
  id: string;
  payment_id: string;
  transaction_id: string;
  reference: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  type: TransactionType;
  created_at: Date;
  updated_at: Date;
  completed_at?: Date;
  failed_at?: Date;
  ikhokha_data: IkhokhaTransactionData;
  metadata?: PaymentMetadata;
}

export enum TransactionType {
  PAYMENT = 'payment',
  REFUND = 'refund',
  PARTIAL_REFUND = 'partial_refund',
  CHARGEBACK = 'chargeback',
  REVERSAL = 'reversal'
}

export interface TransactionFilters {
  status?: PaymentStatus[];
  type?: TransactionType[];
  date_from?: Date;
  date_to?: Date;
  amount_min?: number;
  amount_max?: number;
  reference?: string;
  customer_email?: string;
  limit?: number;
  offset?: number;
}

export interface RefundRequest {
  transaction_id: string;
  amount?: number; // If not provided, full refund
  reason: string;
  reference?: string;
  metadata?: Record<string, any>;
}

export interface RefundResult {
  success: boolean;
  refund_id?: string;
  refund_amount: number;
  original_amount: number;
  remaining_amount: number;
  status: RefundStatus;
  message?: string;
  error?: PaymentError;
}

export enum RefundStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled'
}

// Configuration Types
export interface IkhokhaConfig {
  api_url: string;
  api_key: string;
  api_secret: string;
  webhook_secret: string;
  test_mode: boolean;
  timeout: number;
  retry_attempts: number;
  retry_delay: number;
}

// Payment Update Callback Types
export type PaymentUpdateCallback = (update: PaymentUpdate) => void;

export interface PaymentUpdate {
  payment_id: string;
  status: PaymentStatus;
  transaction_id?: string;
  amount?: number;
  currency?: string;
  reference?: string;
  timestamp: Date;
  metadata?: PaymentMetadata;
}

// Enhanced Enrollment with Ikhokha Integration
export interface IkhokhaEnrollment {
  id: string;
  userId: string;
  courseId: string;
  status: 'pending' | 'approved' | 'rejected' | 'completed';
  paymentType: 'ikhokha' | 'eft' | 'manual';
  paymentStatus: PaymentStatus;
  
  // Ikhokha specific fields
  ikhokhaTransactionId?: string;
  ikhokhaReference?: string;
  ikhokhaAmount?: number;
  ikhokhaStatus?: string;
  ikhokhaPaymentId?: string;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  approvedAt?: Date;
  
  // Metadata
  approvedBy?: string;
  rejectionReason?: string;
  paymentMetadata?: PaymentMetadata;
  
  // Related data
  user?: {
    id: string;
    email: string;
    name: string;
  };
  course?: {
    id: string;
    title: string;
    description?: string;
  };
  paymentHistory?: IkhokhaPayment[];
}

export interface IkhokhaPayment {
  id: string;
  enrollmentId: string;
  transactionId: string;
  reference: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  
  // Ikhokha response data
  ikhokhaResponse: IkhokhaTransactionData;
  
  // Webhook data
  webhookReceived: boolean;
  webhookData?: IkhokhaWebhook;
  
  // Timestamps
  initiatedAt: Date;
  completedAt?: Date;
  failedAt?: Date;
  
  // Metadata
  metadata: PaymentMetadata;
}

// Error Types
export class IkhokhaError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: Record<string, any>
  ) {
    super(message);
    this.name = 'IkhokhaError';
  }
}

export class PaymentValidationError extends IkhokhaError {
  constructor(message: string, details?: Record<string, any>) {
    super(message, 'PAYMENT_VALIDATION_ERROR', details);
    this.name = 'PaymentValidationError';
  }
}

export class WebhookValidationError extends IkhokhaError {
  constructor(message: string, details?: Record<string, any>) {
    super(message, 'WEBHOOK_VALIDATION_ERROR', details);
    this.name = 'WebhookValidationError';
  }
}

export class NetworkError extends IkhokhaError {
  constructor(message: string, details?: Record<string, any>) {
    super(message, 'NETWORK_ERROR', details);
    this.name = 'NetworkError';
  }
}

// Production Payment Orchestrator Types
export interface ProductionEnrollmentRequest {
  courseId: string;
  userId: string;
  userEmail: string;
  userName: string;
  courseName: string;
  coursePrice: number;
}

export interface ProductionEnrollmentResult {
  success: boolean;
  enrollmentId?: string;
  paymentUrl?: string;
  status: EnrollmentStatus;
  message: string;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export enum EnrollmentStatus {
  PENDING = 'pending',
  PAYMENT_REQUIRED = 'payment_required',
  PAYMENT_PROCESSING = 'payment_processing',
  PENDING_APPROVAL = 'pending_approval',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  COMPLETED = 'completed',
  FAILED = 'failed'
}

export enum PaymentType {
  CARD = 'card',
  EFT = 'eft',
  MANUAL = 'manual'
}

export interface ProductionEnrollment {
  id: string;
  user_id: string;
  user_email: string;
  course_id: string;
  course_title: string;
  status: EnrollmentStatus;
  
  // Payment information
  payment_type: PaymentType;
  payment_status: PaymentStatus;
  payment_reference?: string;
  ikhokha_transaction_id?: string;
  
  // Approval workflow
  requires_approval: boolean;
  approved_by?: string;
  approved_at?: Date;
  rejection_reason?: string;
  
  // Timestamps
  created_at: Date;
  updated_at: Date;
  
  // Access control
  course_access_granted: boolean;
  access_granted_at?: Date;
}

export interface ProductionValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export interface EnrollmentStatusUpdate {
  enrollmentId: string;
  userId: string;
  courseId: string;
  status: EnrollmentStatus;
  eventType: 'enrollment_created' | 'enrollment_updated' | 'payment_completed' | 'admin_approved';
  timestamp: Date;
  metadata?: any;
}