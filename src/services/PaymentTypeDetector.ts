/**
 * Payment Type Detection Service
 * 
 * Advanced service for detecting payment types (card vs EFT) from webhook data
 * with confidence scoring and detailed analysis methods.
 * 
 * Requirements: 4.1, 4.2, 4.3, 4.4
 */

import {
  IkhokhaWebhook,
  PaymentType,
  PaymentData,
  PaymentMetadata
} from '../types/ikhokha';
import { logger } from '@/utils/logger';

export interface PaymentTypeIndicator {
  field: string;
  value: any;
  weight: number;
  description: string;
}

export interface PaymentTypeMetadata {
  cardType?: string;
  maskedCardNumber?: string;
  authCode?: string;
  processingTime?: number;
  responseCode: string;
  bankReference?: string;
  transferType?: string;
}

export interface PaymentTypeResult {
  type: 'card' | 'eft' | 'unknown';
  confidence: number;
  indicators: PaymentTypeIndicator[];
  metadata: PaymentTypeMetadata;
}

export interface PaymentAnalysisResult {
  primaryType: PaymentType;
  alternativeType?: PaymentType;
  confidence: number;
  analysisDetails: PaymentAnalysisDetails;
  recommendations: string[];
}

export interface PaymentAnalysisDetails {
  webhookAnalysis: WebhookAnalysisResult;
  patternAnalysis: PatternAnalysisResult;
  timingAnalysis: TimingAnalysisResult;
  metadataAnalysis: MetadataAnalysisResult;
}

export interface WebhookAnalysisResult {
  cardIndicators: PaymentTypeIndicator[];
  eftIndicators: PaymentTypeIndicator[];
  responseCodeAnalysis: ResponseCodeAnalysis;
  fieldPresenceAnalysis: FieldPresenceAnalysis;
}

export interface PatternAnalysisResult {
  referencePatterns: ReferencePatternMatch[];
  amountPatterns: AmountPatternMatch[];
  timingPatterns: TimingPatternMatch[];
}

export interface TimingAnalysisResult {
  processingSpeed: 'instant' | 'fast' | 'normal' | 'slow';
  expectedRange: { min: number; max: number };
  actualTime?: number;
  confidence: number;
}

export interface MetadataAnalysisResult {
  paymentMethodHints: string[];
  customerDataAnalysis: CustomerDataAnalysis;
  transactionContextAnalysis: TransactionContextAnalysis;
}

export interface ResponseCodeAnalysis {
  code: string;
  category: 'card_success' | 'card_failure' | 'eft_success' | 'eft_failure' | 'unknown';
  confidence: number;
  description: string;
}

export interface FieldPresenceAnalysis {
  cardSpecificFields: { field: string; present: boolean; weight: number }[];
  eftSpecificFields: { field: string; present: boolean; weight: number }[];
  overallCardScore: number;
  overallEftScore: number;
}

export interface ReferencePatternMatch {
  pattern: string;
  matches: boolean;
  paymentType: PaymentType;
  confidence: number;
}

export interface AmountPatternMatch {
  amount: number;
  pattern: 'round_amount' | 'precise_amount' | 'fee_inclusive';
  paymentType: PaymentType;
  confidence: number;
}

export interface TimingPatternMatch {
  processingTime: number;
  pattern: 'instant_card' | 'delayed_eft' | 'batch_processing';
  paymentType: PaymentType;
  confidence: number;
}

export interface CustomerDataAnalysis {
  emailDomain: string;
  namePattern: string;
  corporateIndicators: boolean;
  personalIndicators: boolean;
}

export interface TransactionContextAnalysis {
  timeOfDay: 'business_hours' | 'after_hours' | 'weekend';
  dayOfWeek: string;
  seasonalFactors: string[];
}

export interface EnrollmentData {
  id: string;
  userId: string;
  courseId: string;
  amount: number;
  currency: string;
  userEmail: string;
  userName: string;
  createdAt: Date;
  metadata?: Record<string, any>;
}

/**
 * Advanced Payment Type Detection Service
 * 
 * Provides sophisticated analysis of payment webhooks to determine
 * whether payments are card-based or EFT-based with confidence scoring.
 */
export class PaymentTypeDetector {
  private static instance: PaymentTypeDetector;
  
  // Card payment response codes (typical success codes for card transactions)
  private readonly CARD_SUCCESS_CODES = ['00', '01', '02', '10', '11'];
  private readonly CARD_FAILURE_CODES = ['05', '14', '41', '43', '51', '54', '61', '62', '65'];
  
  // EFT payment response codes (typical codes for bank transfers)
  private readonly EFT_SUCCESS_CODES = ['000', '001', '100', '200'];
  private readonly EFT_FAILURE_CODES = ['101', '102', '201', '202', '301', '302'];
  
  // Card-specific field indicators
  private readonly CARD_FIELDS = [
    'card_type', 'masked_card_number', 'auth_code', 'card_scheme',
    'card_brand', 'card_issuer', 'cvv_result', 'avs_result'
  ];
  
  // EFT-specific field indicators
  private readonly EFT_FIELDS = [
    'bank_reference', 'bank_code', 'branch_code', 'account_type',
    'transfer_type', 'clearing_code', 'settlement_date'
  ];

  private constructor() {}

  static getInstance(): PaymentTypeDetector {
    if (!PaymentTypeDetector.instance) {
      PaymentTypeDetector.instance = new PaymentTypeDetector();
    }
    return PaymentTypeDetector.instance;
  }

  /**
   * Detect payment type from webhook data with confidence scoring
   * Requirement 4.1: Determine if payment is card payment or EFT payment
   */
  detectPaymentType(webhookData: IkhokhaWebhook): PaymentTypeResult {
    try {
      logger.info('🔍 PaymentTypeDetector: Analyzing webhook for payment type', {
        transactionId: webhookData.transaction_id,
        responseCode: webhookData.response_code
      });

      const indicators: PaymentTypeIndicator[] = [];
      let cardScore = 0;
      let eftScore = 0;

      // Analyze card-specific indicators
      const cardIndicators = this.analyzeCardIndicators(webhookData);
      indicators.push(...cardIndicators);
      cardScore = cardIndicators.reduce((sum, indicator) => sum + indicator.weight, 0);

      // Analyze EFT-specific indicators
      const eftIndicators = this.analyzeEFTIndicators(webhookData);
      indicators.push(...eftIndicators);
      eftScore = eftIndicators.reduce((sum, indicator) => sum + indicator.weight, 0);

      // Analyze response code patterns
      const responseAnalysis = this.analyzeResponseCode(webhookData.response_code);
      if (responseAnalysis.category.startsWith('card_')) {
        cardScore += responseAnalysis.confidence * 0.3;
      } else if (responseAnalysis.category.startsWith('eft_')) {
        eftScore += responseAnalysis.confidence * 0.3;
      }
      // For unknown response codes, don't add any score

      // Analyze timing patterns (only if we have other indicators)
      const timingAnalysis = this.analyzeTransactionTiming(webhookData);
      const hasOtherIndicators = cardIndicators.length > 0 || eftIndicators.length > 0;
      
      if (hasOtherIndicators) {
        if (timingAnalysis.processingSpeed === 'instant' || timingAnalysis.processingSpeed === 'fast') {
          cardScore += 0.2;
        } else if (timingAnalysis.processingSpeed === 'slow') {
          eftScore += 0.2;
        }
      }

      // Determine final type and confidence
      const totalScore = cardScore + eftScore;
      let type: 'card' | 'eft' | 'unknown';
      let confidence: number;

      if (totalScore === 0) {
        type = 'unknown';
        confidence = 0;
      } else if (cardScore > eftScore) {
        type = 'card';
        confidence = Math.min(cardScore / totalScore, 1.0);
      } else if (eftScore > cardScore) {
        type = 'eft';
        confidence = Math.min(eftScore / totalScore, 1.0);
      } else {
        // Tie - check if we have any meaningful indicators
        if (totalScore < 0.1) {
          type = 'unknown';
          confidence = 0;
        } else {
          // Default to card with low confidence
          type = 'card';
          confidence = 0.5;
        }
      }

      // Extract metadata
      const metadata = this.extractPaymentMetadata(webhookData);

      const result: PaymentTypeResult = {
        type,
        confidence,
        indicators,
        metadata
      };

      logger.info('✅ PaymentTypeDetector: Payment type detected', {
        type,
        confidence: Math.round(confidence * 100) + '%',
        cardScore,
        eftScore,
        indicatorCount: indicators.length
      });

      return result;

    } catch (error) {
      logger.error('❌ PaymentTypeDetector: Detection failed', { error });
      
      // Safe fallback
      return {
        type: 'unknown',
        confidence: 0,
        indicators: [],
        metadata: {
          responseCode: (webhookData && webhookData.response_code) ? webhookData.response_code : 'unknown'
        }
      };
    }
  }

  /**
   * Enhanced payment method analysis with enrollment context
   * Requirement 4.2: Add card payment detection logic based on response codes and metadata
   */
  analyzePaymentMethod(
    webhookData: IkhokhaWebhook,
    enrollmentData: EnrollmentData
  ): PaymentAnalysisResult {
    try {
      logger.info('🔬 PaymentTypeDetector: Performing enhanced analysis', {
        transactionId: webhookData.transaction_id,
        enrollmentId: enrollmentData.id
      });

      // Primary detection
      const primaryDetection = this.detectPaymentType(webhookData);
      
      // Detailed analysis components
      const webhookAnalysis = this.performWebhookAnalysis(webhookData);
      const patternAnalysis = this.performPatternAnalysis(webhookData, enrollmentData);
      const timingAnalysis = this.analyzeTransactionTiming(webhookData);
      const metadataAnalysis = this.performMetadataAnalysis(webhookData, enrollmentData);

      // Calculate alternative type
      const alternativeType = this.calculateAlternativeType(primaryDetection);

      // Generate recommendations
      const recommendations = this.generateRecommendations(
        primaryDetection,
        webhookAnalysis,
        patternAnalysis
      );

      const result: PaymentAnalysisResult = {
        primaryType: this.mapTypeToEnum(primaryDetection.type),
        alternativeType,
        confidence: primaryDetection.confidence,
        analysisDetails: {
          webhookAnalysis,
          patternAnalysis,
          timingAnalysis,
          metadataAnalysis
        },
        recommendations
      };

      logger.info('✅ PaymentTypeDetector: Enhanced analysis completed', {
        primaryType: result.primaryType,
        confidence: Math.round(result.confidence * 100) + '%',
        recommendationCount: recommendations.length
      });

      return result;

    } catch (error) {
      logger.error('❌ PaymentTypeDetector: Enhanced analysis failed', { error });
      
      // Safe fallback
      return {
        primaryType: PaymentType.CARD,
        confidence: 0,
        analysisDetails: {
          webhookAnalysis: this.getEmptyWebhookAnalysis(),
          patternAnalysis: this.getEmptyPatternAnalysis(),
          timingAnalysis: this.getEmptyTimingAnalysis(),
          metadataAnalysis: this.getEmptyMetadataAnalysis()
        },
        recommendations: ['Unable to perform analysis - using default card payment type']
      };
    }
  }

  /**
   * Get confidence score for payment type classification
   * Requirement 4.4: Implement confidence scoring system for payment type classification
   */
  getPaymentTypeConfidence(detection: PaymentTypeResult): number {
    // Confidence is already calculated in the detection result
    return detection.confidence;
  }

  /**
   * Check if payment is identified as card payment
   * Requirement 4.2: Card payment detection logic
   */
  isCardPayment(webhookData: IkhokhaWebhook): boolean {
    const detection = this.detectPaymentType(webhookData);
    return detection.type === 'card' && detection.confidence > 0.6;
  }

  /**
   * Check if payment is identified as EFT payment
   * Requirement 4.3: Create EFT payment detection using transaction patterns and timing
   */
  isEFTPayment(webhookData: IkhokhaWebhook): boolean {
    const detection = this.detectPaymentType(webhookData);
    return detection.type === 'eft' && detection.confidence > 0.6;
  }

  /**
   * Analyze card-specific indicators in webhook data
   */
  private analyzeCardIndicators(webhookData: IkhokhaWebhook): PaymentTypeIndicator[] {
    const indicators: PaymentTypeIndicator[] = [];

    // Check for card-specific fields
    this.CARD_FIELDS.forEach(field => {
      if (webhookData[field as keyof IkhokhaWebhook]) {
        indicators.push({
          field,
          value: webhookData[field as keyof IkhokhaWebhook],
          weight: 0.4,
          description: `Card-specific field '${field}' present`
        });
      }
    });

    // Check response code patterns
    if (this.CARD_SUCCESS_CODES.includes(webhookData.response_code)) {
      indicators.push({
        field: 'response_code',
        value: webhookData.response_code,
        weight: 0.3,
        description: 'Response code indicates card transaction success'
      });
    }

    // Check for card type indicators in response message
    const responseMessage = webhookData.response_message?.toLowerCase() || '';
    const cardKeywords = ['visa', 'mastercard', 'amex', 'card', 'credit', 'debit'];
    cardKeywords.forEach(keyword => {
      if (responseMessage.includes(keyword)) {
        indicators.push({
          field: 'response_message',
          value: keyword,
          weight: 0.2,
          description: `Card keyword '${keyword}' found in response message`
        });
      }
    });

    // Check reference patterns
    const reference = webhookData.reference?.toLowerCase() || '';
    if (reference.includes('card') || reference.includes('cc') || reference.includes('visa') || reference.includes('mc')) {
      indicators.push({
        field: 'reference',
        value: reference,
        weight: 0.15,
        description: 'Reference contains card payment indicators'
      });
    }

    return indicators;
  }

  /**
   * Analyze EFT-specific indicators in webhook data
   */
  private analyzeEFTIndicators(webhookData: IkhokhaWebhook): PaymentTypeIndicator[] {
    const indicators: PaymentTypeIndicator[] = [];

    // Check for EFT-specific fields
    this.EFT_FIELDS.forEach(field => {
      if (webhookData[field as keyof IkhokhaWebhook]) {
        indicators.push({
          field,
          value: webhookData[field as keyof IkhokhaWebhook],
          weight: 0.4,
          description: `EFT-specific field '${field}' present`
        });
      }
    });

    // Check response code patterns
    if (this.EFT_SUCCESS_CODES.includes(webhookData.response_code)) {
      indicators.push({
        field: 'response_code',
        value: webhookData.response_code,
        weight: 0.3,
        description: 'Response code indicates EFT transaction success'
      });
    }

    // Check for EFT keywords in response message
    const responseMessage = webhookData.response_message?.toLowerCase() || '';
    const eftKeywords = ['eft', 'transfer', 'bank', 'deposit', 'clearing'];
    eftKeywords.forEach(keyword => {
      if (responseMessage.includes(keyword)) {
        indicators.push({
          field: 'response_message',
          value: keyword,
          weight: 0.2,
          description: `EFT keyword '${keyword}' found in response message`
        });
      }
    });

    // Check reference patterns
    const reference = webhookData.reference?.toLowerCase() || '';
    if (reference.includes('eft') || reference.includes('transfer') || reference.includes('bank')) {
      indicators.push({
        field: 'reference',
        value: reference,
        weight: 0.15,
        description: 'Reference contains EFT payment indicators'
      });
    }

    // Check metadata for EFT indicators
    if (webhookData.metadata) {
      const metadataStr = JSON.stringify(webhookData.metadata).toLowerCase();
      if (metadataStr.includes('eft') || metadataStr.includes('bank') || metadataStr.includes('transfer')) {
        indicators.push({
          field: 'metadata',
          value: 'eft_indicators',
          weight: 0.1,
          description: 'Metadata contains EFT payment indicators'
        });
      }
    }

    return indicators;
  }

  /**
   * Analyze response code to determine payment type
   */
  private analyzeResponseCode(responseCode: string): ResponseCodeAnalysis {
    if (this.CARD_SUCCESS_CODES.includes(responseCode)) {
      return {
        code: responseCode,
        category: 'card_success',
        confidence: 0.8,
        description: 'Response code indicates successful card transaction'
      };
    }

    if (this.CARD_FAILURE_CODES.includes(responseCode)) {
      return {
        code: responseCode,
        category: 'card_failure',
        confidence: 0.7,
        description: 'Response code indicates failed card transaction'
      };
    }

    if (this.EFT_SUCCESS_CODES.includes(responseCode)) {
      return {
        code: responseCode,
        category: 'eft_success',
        confidence: 0.8,
        description: 'Response code indicates successful EFT transaction'
      };
    }

    if (this.EFT_FAILURE_CODES.includes(responseCode)) {
      return {
        code: responseCode,
        category: 'eft_failure',
        confidence: 0.7,
        description: 'Response code indicates failed EFT transaction'
      };
    }

    return {
      code: responseCode,
      category: 'unknown',
      confidence: 0,
      description: 'Response code does not match known patterns'
    };
  }

  /**
   * Analyze transaction timing patterns
   */
  private analyzeTransactionTiming(webhookData: IkhokhaWebhook): TimingAnalysisResult {
    try {
      const webhookTime = new Date(webhookData.timestamp);
      const currentTime = new Date();
      const processingTime = currentTime.getTime() - webhookTime.getTime();

      let processingSpeed: 'instant' | 'fast' | 'normal' | 'slow';
      let confidence: number;

      if (processingTime < 5000) { // Less than 5 seconds
        processingSpeed = 'instant';
        confidence = 0.8; // High confidence for card payments
      } else if (processingTime < 30000) { // Less than 30 seconds
        processingSpeed = 'fast';
        confidence = 0.6; // Medium confidence for card payments
      } else if (processingTime < 300000) { // Less than 5 minutes
        processingSpeed = 'normal';
        confidence = 0.4; // Could be either
      } else {
        processingSpeed = 'slow';
        confidence = 0.7; // Higher confidence for EFT payments
      }

      return {
        processingSpeed,
        expectedRange: { min: 1000, max: 30000 }, // Expected range for card payments
        actualTime: processingTime,
        confidence
      };

    } catch (error) {
      logger.warn('⚠️ PaymentTypeDetector: Failed to analyze timing', { error });
      return {
        processingSpeed: 'normal',
        expectedRange: { min: 1000, max: 30000 },
        confidence: 0
      };
    }
  }

  /**
   * Extract payment metadata from webhook
   */
  private extractPaymentMetadata(webhookData: IkhokhaWebhook): PaymentTypeMetadata {
    return {
      cardType: webhookData.card_type,
      maskedCardNumber: webhookData.masked_card_number,
      authCode: webhookData.auth_code,
      responseCode: webhookData.response_code,
      bankReference: webhookData.merchant_reference,
      transferType: webhookData.metadata?.transfer_type
    };
  }

  /**
   * Perform detailed webhook analysis
   */
  private performWebhookAnalysis(webhookData: IkhokhaWebhook): WebhookAnalysisResult {
    const cardIndicators = this.analyzeCardIndicators(webhookData);
    const eftIndicators = this.analyzeEFTIndicators(webhookData);
    const responseCodeAnalysis = this.analyzeResponseCode(webhookData.response_code);
    const fieldPresenceAnalysis = this.analyzeFieldPresence(webhookData);

    return {
      cardIndicators,
      eftIndicators,
      responseCodeAnalysis,
      fieldPresenceAnalysis
    };
  }

  /**
   * Analyze field presence for payment type indicators
   */
  private analyzeFieldPresence(webhookData: IkhokhaWebhook): FieldPresenceAnalysis {
    const cardSpecificFields = this.CARD_FIELDS.map(field => ({
      field,
      present: !!(webhookData as any)[field],
      weight: 0.4
    }));

    const eftSpecificFields = this.EFT_FIELDS.map(field => ({
      field,
      present: !!(webhookData as any)[field],
      weight: 0.4
    }));

    const overallCardScore = cardSpecificFields
      .filter(f => f.present)
      .reduce((sum, f) => sum + f.weight, 0);

    const overallEftScore = eftSpecificFields
      .filter(f => f.present)
      .reduce((sum, f) => sum + f.weight, 0);

    return {
      cardSpecificFields,
      eftSpecificFields,
      overallCardScore,
      overallEftScore
    };
  }

  /**
   * Perform pattern analysis on webhook and enrollment data
   */
  private performPatternAnalysis(
    webhookData: IkhokhaWebhook,
    enrollmentData: EnrollmentData
  ): PatternAnalysisResult {
    const referencePatterns = this.analyzeReferencePatterns(webhookData.reference);
    const amountPatterns = this.analyzeAmountPatterns(webhookData.amount, enrollmentData.amount);
    const timingPatterns = this.analyzeTimingPatterns(webhookData);

    return {
      referencePatterns,
      amountPatterns,
      timingPatterns
    };
  }

  /**
   * Analyze reference patterns for payment type indicators
   */
  private analyzeReferencePatterns(reference?: string): ReferencePatternMatch[] {
    if (!reference) return [];

    const patterns: ReferencePatternMatch[] = [];
    const ref = reference.toLowerCase();

    // Card patterns
    if (/card|cc|visa|mastercard|mc|amex/i.test(ref)) {
      patterns.push({
        pattern: 'card_keywords',
        matches: true,
        paymentType: PaymentType.CARD,
        confidence: 0.7
      });
    }

    // EFT patterns
    if (/eft|transfer|bank|deposit/i.test(ref)) {
      patterns.push({
        pattern: 'eft_keywords',
        matches: true,
        paymentType: PaymentType.EFT,
        confidence: 0.7
      });
    }

    return patterns;
  }

  /**
   * Analyze amount patterns
   */
  private analyzeAmountPatterns(webhookAmount: number, enrollmentAmount: number): AmountPatternMatch[] {
    const patterns: AmountPatternMatch[] = [];

    // Check if amounts match exactly (typical for card payments)
    if (webhookAmount === enrollmentAmount) {
      patterns.push({
        amount: webhookAmount,
        pattern: 'precise_amount',
        paymentType: PaymentType.CARD,
        confidence: 0.6
      });
    }

    // Check for round amounts (more common in EFT)
    if (webhookAmount % 100 === 0) {
      patterns.push({
        amount: webhookAmount,
        pattern: 'round_amount',
        paymentType: PaymentType.EFT,
        confidence: 0.3
      });
    }

    return patterns;
  }

  /**
   * Analyze timing patterns
   */
  private analyzeTimingPatterns(webhookData: IkhokhaWebhook): TimingPatternMatch[] {
    const patterns: TimingPatternMatch[] = [];
    const timingAnalysis = this.analyzeTransactionTiming(webhookData);

    if (timingAnalysis.processingSpeed === 'instant' || timingAnalysis.processingSpeed === 'fast') {
      patterns.push({
        processingTime: timingAnalysis.actualTime || 0,
        pattern: 'instant_card',
        paymentType: PaymentType.CARD,
        confidence: 0.7
      });
    } else if (timingAnalysis.processingSpeed === 'slow') {
      patterns.push({
        processingTime: timingAnalysis.actualTime || 0,
        pattern: 'delayed_eft',
        paymentType: PaymentType.EFT,
        confidence: 0.6
      });
    }

    return patterns;
  }

  /**
   * Perform metadata analysis
   */
  private performMetadataAnalysis(
    webhookData: IkhokhaWebhook,
    enrollmentData: EnrollmentData
  ): MetadataAnalysisResult {
    const paymentMethodHints = this.extractPaymentMethodHints(webhookData);
    const customerDataAnalysis = this.analyzeCustomerData(enrollmentData);
    const transactionContextAnalysis = this.analyzeTransactionContext(webhookData);

    return {
      paymentMethodHints,
      customerDataAnalysis,
      transactionContextAnalysis
    };
  }

  /**
   * Extract payment method hints from webhook metadata
   */
  private extractPaymentMethodHints(webhookData: IkhokhaWebhook): string[] {
    const hints: string[] = [];
    
    if (webhookData.card_type) hints.push(`card_type: ${webhookData.card_type}`);
    if (webhookData.masked_card_number) hints.push('masked_card_present');
    if (webhookData.auth_code) hints.push('auth_code_present');
    
    return hints;
  }

  /**
   * Analyze customer data for payment type indicators
   */
  private analyzeCustomerData(enrollmentData: EnrollmentData): CustomerDataAnalysis {
    const emailDomain = enrollmentData.userEmail.split('@')[1] || '';
    const namePattern = enrollmentData.userName.includes(' ') ? 'full_name' : 'single_name';
    
    // Simple corporate vs personal indicators
    const corporateIndicators = /\.(com|co\.za|org|gov)$/.test(emailDomain);
    const personalIndicators = /\.(gmail|yahoo|hotmail|outlook)/.test(emailDomain);

    return {
      emailDomain,
      namePattern,
      corporateIndicators,
      personalIndicators
    };
  }

  /**
   * Analyze transaction context
   */
  private analyzeTransactionContext(webhookData: IkhokhaWebhook): TransactionContextAnalysis {
    const timestamp = new Date(webhookData.timestamp);
    const hour = timestamp.getHours();
    const dayOfWeek = timestamp.toLocaleDateString('en-US', { weekday: 'long' });
    
    let timeOfDay: 'business_hours' | 'after_hours' | 'weekend';
    if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
      timeOfDay = 'weekend';
    } else if (hour >= 9 && hour <= 17) {
      timeOfDay = 'business_hours';
    } else {
      timeOfDay = 'after_hours';
    }

    return {
      timeOfDay,
      dayOfWeek,
      seasonalFactors: [] // Could be expanded with seasonal analysis
    };
  }

  /**
   * Calculate alternative payment type
   */
  private calculateAlternativeType(detection: PaymentTypeResult): PaymentType | undefined {
    if (detection.confidence < 0.8) {
      return detection.type === 'card' ? PaymentType.EFT : PaymentType.CARD;
    }
    return undefined;
  }

  /**
   * Generate recommendations based on analysis
   */
  private generateRecommendations(
    detection: PaymentTypeResult,
    webhookAnalysis: WebhookAnalysisResult,
    patternAnalysis: PatternAnalysisResult
  ): string[] {
    const recommendations: string[] = [];

    if (detection.confidence < 0.6) {
      recommendations.push('Low confidence detection - consider manual review');
    }

    if (webhookAnalysis.cardIndicators.length === 0 && webhookAnalysis.eftIndicators.length === 0) {
      recommendations.push('No clear payment type indicators found - enhance webhook data');
    }

    if (detection.type === 'unknown') {
      recommendations.push('Payment type could not be determined - default to manual approval');
    }

    return recommendations;
  }

  /**
   * Map string type to PaymentType enum
   */
  private mapTypeToEnum(type: 'card' | 'eft' | 'unknown'): PaymentType {
    switch (type) {
      case 'card':
        return PaymentType.CARD;
      case 'eft':
        return PaymentType.EFT;
      default:
        return PaymentType.MANUAL;
    }
  }

  /**
   * Get empty analysis results for fallback scenarios
   */
  private getEmptyWebhookAnalysis(): WebhookAnalysisResult {
    return {
      cardIndicators: [],
      eftIndicators: [],
      responseCodeAnalysis: {
        code: 'unknown',
        category: 'unknown',
        confidence: 0,
        description: 'No response code analysis available'
      },
      fieldPresenceAnalysis: {
        cardSpecificFields: [],
        eftSpecificFields: [],
        overallCardScore: 0,
        overallEftScore: 0
      }
    };
  }

  private getEmptyPatternAnalysis(): PatternAnalysisResult {
    return {
      referencePatterns: [],
      amountPatterns: [],
      timingPatterns: []
    };
  }

  private getEmptyTimingAnalysis(): TimingAnalysisResult {
    return {
      processingSpeed: 'normal',
      expectedRange: { min: 0, max: 0 },
      confidence: 0
    };
  }

  private getEmptyMetadataAnalysis(): MetadataAnalysisResult {
    return {
      paymentMethodHints: [],
      customerDataAnalysis: {
        emailDomain: '',
        namePattern: '',
        corporateIndicators: false,
        personalIndicators: false
      },
      transactionContextAnalysis: {
        timeOfDay: 'business_hours',
        dayOfWeek: '',
        seasonalFactors: []
      }
    };
  }
}

// Export singleton instance
export const paymentTypeDetector = PaymentTypeDetector.getInstance();