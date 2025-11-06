/**
 * Webhook Testing Utilities
 * 
 * Provides comprehensive testing capabilities for webhook endpoints
 * Includes load testing, security testing, and integration testing
 */

import { IkhokhaWebhook, WebhookResult, IkhokhaError } from '../types/ikhokha';
import { validateWebhook } from './webhookValidator';
import { productionWebhookService } from '../services/ProductionWebhookService';

export interface WebhookTestResult {
  success: boolean;
  responseTime: number;
  statusCode?: number;
  error?: string;
  validationResult?: any;
  processingResult?: WebhookResult;
}

export interface WebhookLoadTestResult {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageResponseTime: number;
  minResponseTime: number;
  maxResponseTime: number;
  requestsPerSecond: number;
  errors: Array<{
    error: string;
    count: number;
  }>;
}

export interface WebhookSecurityTestResult {
  signatureValidation: boolean;
  timestampValidation: boolean;
  rateLimitingWorks: boolean;
  malformedDataHandling: boolean;
  securityScore: number;
  vulnerabilities: string[];
}

/**
 * Test webhook endpoint connectivity
 */
export async function testWebhookConnectivity(webhookUrl: string): Promise<WebhookTestResult> {
  const startTime = Date.now();
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'BetaSkill-Webhook-Test/1.0'
      }
    });

    const responseTime = Date.now() - startTime;

    return {
      success: response.status === 405, // Should return 405 for GET requests
      responseTime,
      statusCode: response.status,
      error: response.status !== 405 ? `Expected 405, got ${response.status}` : undefined
    };

  } catch (error) {
    return {
      success: false,
      responseTime: Date.now() - startTime,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Test webhook processing with sample data
 */
export async function testWebhookProcessing(
  webhookUrl: string,
  testData?: Partial<IkhokhaWebhook>
): Promise<WebhookTestResult> {
  const startTime = Date.now();
  
  try {
    // Create test webhook data
    const webhookData: IkhokhaWebhook = {
      transaction_id: `test_${Date.now()}`,
      reference: `test_ref_${Date.now()}`,
      amount: 100,
      currency: 'ZAR',
      status: 'completed',
      timestamp: new Date().toISOString(),
      signature: 'sha256=test_signature_for_processing',
      response_code: '00',
      response_message: 'Test Success',
      ...testData
    };

    // Validate webhook data first
    const validationResult = validateWebhook(webhookData, webhookData.signature);

    // Send webhook to endpoint
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'BetaSkill-Webhook-Test/1.0'
      },
      body: JSON.stringify(webhookData)
    });

    const responseTime = Date.now() - startTime;
    const responseData = await response.json();

    return {
      success: response.ok && responseData.success,
      responseTime,
      statusCode: response.status,
      validationResult,
      processingResult: responseData.result,
      error: !response.ok ? responseData.message : undefined
    };

  } catch (error) {
    return {
      success: false,
      responseTime: Date.now() - startTime,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Perform load testing on webhook endpoint
 */
export async function performWebhookLoadTest(
  webhookUrl: string,
  options: {
    concurrentRequests: number;
    totalRequests: number;
    requestDelay?: number;
  }
): Promise<WebhookLoadTestResult> {
  console.log('🔧 Starting webhook load test:', options);
  
  const results: WebhookTestResult[] = [];
  const errors = new Map<string, number>();
  const startTime = Date.now();

  // Create batches of concurrent requests
  const batchSize = options.concurrentRequests;
  const totalBatches = Math.ceil(options.totalRequests / batchSize);

  for (let batch = 0; batch < totalBatches; batch++) {
    const batchPromises: Promise<WebhookTestResult>[] = [];
    const requestsInBatch = Math.min(batchSize, options.totalRequests - batch * batchSize);

    // Create concurrent requests for this batch
    for (let i = 0; i < requestsInBatch; i++) {
      const testData = {
        transaction_id: `load_test_${batch}_${i}_${Date.now()}`,
        reference: `load_test_ref_${batch}_${i}`,
        amount: Math.floor(Math.random() * 1000) + 100
      };

      batchPromises.push(testWebhookProcessing(webhookUrl, testData));
    }

    // Wait for batch to complete
    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);

    // Count errors
    batchResults.forEach(result => {
      if (!result.success && result.error) {
        const count = errors.get(result.error) || 0;
        errors.set(result.error, count + 1);
      }
    });

    // Add delay between batches if specified
    if (options.requestDelay && batch < totalBatches - 1) {
      await new Promise(resolve => setTimeout(resolve, options.requestDelay));
    }

    console.log(`📊 Completed batch ${batch + 1}/${totalBatches}`);
  }

  const totalTime = Date.now() - startTime;
  const successfulRequests = results.filter(r => r.success).length;
  const failedRequests = results.length - successfulRequests;
  const responseTimes = results.map(r => r.responseTime);

  return {
    totalRequests: results.length,
    successfulRequests,
    failedRequests,
    averageResponseTime: responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length,
    minResponseTime: Math.min(...responseTimes),
    maxResponseTime: Math.max(...responseTimes),
    requestsPerSecond: (results.length / totalTime) * 1000,
    errors: Array.from(errors.entries()).map(([error, count]) => ({ error, count }))
  };
}

/**
 * Perform security testing on webhook endpoint
 */
export async function performWebhookSecurityTest(webhookUrl: string): Promise<WebhookSecurityTestResult> {
  console.log('🔒 Starting webhook security test');
  
  const vulnerabilities: string[] = [];
  let securityScore = 100;

  // Test 1: Invalid signature handling
  console.log('🔧 Testing signature validation...');
  const invalidSignatureTest = await testWebhookProcessing(webhookUrl, {
    signature: 'sha256=invalid_signature'
  });
  
  const signatureValidation = !invalidSignatureTest.success;
  if (!signatureValidation) {
    vulnerabilities.push('Webhook accepts invalid signatures');
    securityScore -= 30;
  }

  // Test 2: Missing signature handling
  const missingSignatureTest = await testWebhookProcessing(webhookUrl, {
    signature: ''
  });
  
  if (missingSignatureTest.success) {
    vulnerabilities.push('Webhook accepts requests without signatures');
    securityScore -= 25;
  }

  // Test 3: Timestamp validation
  console.log('🔧 Testing timestamp validation...');
  const oldTimestampTest = await testWebhookProcessing(webhookUrl, {
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() // 24 hours ago
  });
  
  const timestampValidation = !oldTimestampTest.success;
  if (!timestampValidation) {
    vulnerabilities.push('Webhook accepts old timestamps (replay attack vulnerability)');
    securityScore -= 20;
  }

  // Test 4: Rate limiting
  console.log('🔧 Testing rate limiting...');
  const rateLimitPromises = Array.from({ length: 50 }, (_, i) => 
    testWebhookProcessing(webhookUrl, {
      transaction_id: `rate_limit_test_${i}`,
      reference: `rate_limit_ref_${i}`
    })
  );
  
  const rateLimitResults = await Promise.all(rateLimitPromises);
  const rateLimitFailures = rateLimitResults.filter(r => !r.success && r.statusCode === 429);
  const rateLimitingWorks = rateLimitFailures.length > 0;
  
  if (!rateLimitingWorks) {
    vulnerabilities.push('No rate limiting detected');
    securityScore -= 15;
  }

  // Test 5: Malformed data handling
  console.log('🔧 Testing malformed data handling...');
  const malformedTests = [
    // Missing required fields
    { transaction_id: '', reference: '', amount: 0 },
    // Invalid data types
    { amount: 'invalid', currency: 123 },
    // Extremely large values
    { amount: Number.MAX_SAFE_INTEGER },
    // SQL injection attempts
    { reference: "'; DROP TABLE enrollments; --" },
    // XSS attempts
    { response_message: '<script>alert("xss")</script>' }
  ];

  let malformedDataHandling = true;
  for (const testData of malformedTests) {
    try {
      const result = await testWebhookProcessing(webhookUrl, testData as any);
      if (result.success) {
        malformedDataHandling = false;
        vulnerabilities.push(`Webhook accepts malformed data: ${JSON.stringify(testData)}`);
        break;
      }
    } catch (error) {
      // Expected to fail, which is good
    }
  }

  if (!malformedDataHandling) {
    securityScore -= 10;
  }

  return {
    signatureValidation,
    timestampValidation,
    rateLimitingWorks,
    malformedDataHandling,
    securityScore: Math.max(0, securityScore),
    vulnerabilities
  };
}

/**
 * Test production webhook configuration
 */
export async function testProductionWebhookConfig(): Promise<{
  configurationValid: boolean;
  endpointReachable: boolean;
  processingWorks: boolean;
  securityScore: number;
  issues: string[];
  recommendations: string[];
}> {
  console.log('🔧 Testing production webhook configuration');
  
  const status = productionWebhookService.getProductionWebhookStatus();
  const issues: string[] = [...status.issues];
  const recommendations: string[] = [];

  // Test endpoint connectivity
  let endpointTest;
  try {
    endpointTest = await productionWebhookService.testWebhookEndpoint();
    
    if (!endpointTest.reachable) {
      issues.push(`Webhook endpoint not reachable: ${endpointTest.error}`);
    }
  } catch (error) {
    issues.push(`Endpoint test failed: ${error instanceof Error ? error.message : error}`);
    endpointTest = { reachable: false, responseTime: 0 };
  }

  // Test webhook processing
  let processingTest;
  try {
    processingTest = await testWebhookProcessing(status.endpoint);
    
    if (!processingTest.success) {
      issues.push(`Webhook processing failed: ${processingTest.error}`);
    }
  } catch (error) {
    issues.push(`Processing test failed: ${error instanceof Error ? error.message : error}`);
    processingTest = { success: false };
  }

  // Test security
  let securityTest;
  try {
    securityTest = await performWebhookSecurityTest(status.endpoint);
    
    if (securityTest.vulnerabilities.length > 0) {
      issues.push(...securityTest.vulnerabilities);
    }
  } catch (error) {
    issues.push(`Security test failed: ${error instanceof Error ? error.message : error}`);
    securityTest = { securityScore: 0 };
  }

  // Generate recommendations
  if (endpointTest.reachable && endpointTest.responseTime > 5000) {
    recommendations.push('Webhook response time is slow, consider optimization');
  }

  if (securityTest && securityTest.securityScore < 80) {
    recommendations.push('Webhook security score is low, address security vulnerabilities');
  }

  if (issues.length === 0) {
    recommendations.push('Webhook configuration is healthy');
    recommendations.push('Consider setting up monitoring and alerting');
  }

  return {
    configurationValid: status.configured,
    endpointReachable: endpointTest.reachable,
    processingWorks: processingTest?.success || false,
    securityScore: securityTest?.securityScore || 0,
    issues,
    recommendations
  };
}

/**
 * Generate comprehensive webhook test report
 */
export async function generateWebhookTestReport(webhookUrl: string): Promise<string> {
  console.log('📊 Generating comprehensive webhook test report');
  
  const lines: string[] = [];
  
  lines.push('=== Comprehensive Webhook Test Report ===');
  lines.push(`Webhook URL: ${webhookUrl}`);
  lines.push(`Generated at: ${new Date().toISOString()}`);
  lines.push('');

  // Connectivity Test
  lines.push('🔗 Connectivity Test:');
  const connectivityTest = await testWebhookConnectivity(webhookUrl);
  lines.push(`  Status: ${connectivityTest.success ? '✅ PASS' : '❌ FAIL'}`);
  lines.push(`  Response Time: ${connectivityTest.responseTime}ms`);
  if (connectivityTest.statusCode) {
    lines.push(`  Status Code: ${connectivityTest.statusCode}`);
  }
  if (connectivityTest.error) {
    lines.push(`  Error: ${connectivityTest.error}`);
  }
  lines.push('');

  // Processing Test
  lines.push('⚙️ Processing Test:');
  const processingTest = await testWebhookProcessing(webhookUrl);
  lines.push(`  Status: ${processingTest.success ? '✅ PASS' : '❌ FAIL'}`);
  lines.push(`  Response Time: ${processingTest.responseTime}ms`);
  if (processingTest.error) {
    lines.push(`  Error: ${processingTest.error}`);
  }
  lines.push('');

  // Security Test
  lines.push('🔒 Security Test:');
  const securityTest = await performWebhookSecurityTest(webhookUrl);
  lines.push(`  Security Score: ${securityTest.securityScore}/100`);
  lines.push(`  Signature Validation: ${securityTest.signatureValidation ? '✅' : '❌'}`);
  lines.push(`  Timestamp Validation: ${securityTest.timestampValidation ? '✅' : '❌'}`);
  lines.push(`  Rate Limiting: ${securityTest.rateLimitingWorks ? '✅' : '❌'}`);
  lines.push(`  Malformed Data Handling: ${securityTest.malformedDataHandling ? '✅' : '❌'}`);
  
  if (securityTest.vulnerabilities.length > 0) {
    lines.push('  Vulnerabilities:');
    securityTest.vulnerabilities.forEach(vuln => lines.push(`    - ${vuln}`));
  }
  lines.push('');

  // Load Test (light)
  lines.push('📈 Load Test (10 concurrent requests):');
  const loadTest = await performWebhookLoadTest(webhookUrl, {
    concurrentRequests: 5,
    totalRequests: 10
  });
  
  lines.push(`  Total Requests: ${loadTest.totalRequests}`);
  lines.push(`  Successful: ${loadTest.successfulRequests}`);
  lines.push(`  Failed: ${loadTest.failedRequests}`);
  lines.push(`  Success Rate: ${((loadTest.successfulRequests / loadTest.totalRequests) * 100).toFixed(1)}%`);
  lines.push(`  Average Response Time: ${loadTest.averageResponseTime.toFixed(0)}ms`);
  lines.push(`  Requests/Second: ${loadTest.requestsPerSecond.toFixed(2)}`);
  
  if (loadTest.errors.length > 0) {
    lines.push('  Errors:');
    loadTest.errors.forEach(error => lines.push(`    - ${error.error} (${error.count} times)`));
  }
  lines.push('');

  // Overall Assessment
  const overallScore = (
    (connectivityTest.success ? 25 : 0) +
    (processingTest.success ? 25 : 0) +
    (securityTest.securityScore / 100 * 25) +
    ((loadTest.successfulRequests / loadTest.totalRequests) * 25)
  );

  lines.push('📊 Overall Assessment:');
  lines.push(`  Overall Score: ${overallScore.toFixed(1)}/100`);
  
  if (overallScore >= 90) {
    lines.push('  Status: ✅ EXCELLENT - Webhook is production ready');
  } else if (overallScore >= 75) {
    lines.push('  Status: ✅ GOOD - Webhook is ready with minor improvements needed');
  } else if (overallScore >= 60) {
    lines.push('  Status: ⚠️ FAIR - Webhook needs improvements before production');
  } else {
    lines.push('  Status: ❌ POOR - Webhook is not ready for production');
  }

  return lines.join('\n');
}

/**
 * Run quick webhook health check
 */
export async function quickWebhookHealthCheck(webhookUrl: string): Promise<{
  healthy: boolean;
  responseTime: number;
  issues: string[];
}> {
  const issues: string[] = [];
  
  // Test connectivity
  const connectivityTest = await testWebhookConnectivity(webhookUrl);
  if (!connectivityTest.success) {
    issues.push(`Connectivity failed: ${connectivityTest.error}`);
  }

  // Test basic processing
  const processingTest = await testWebhookProcessing(webhookUrl);
  if (!processingTest.success) {
    issues.push(`Processing failed: ${processingTest.error}`);
  }

  // Check response time
  const avgResponseTime = (connectivityTest.responseTime + processingTest.responseTime) / 2;
  if (avgResponseTime > 10000) {
    issues.push('Response time is too slow (>10s)');
  }

  return {
    healthy: issues.length === 0,
    responseTime: avgResponseTime,
    issues
  };
}