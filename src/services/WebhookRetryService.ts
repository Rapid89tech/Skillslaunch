/**
 * Webhook Retry Service
 * 
 * Handles webhook retry logic with exponential backoff and error handling
 */

import { IkhokhaWebhook, WebhookResult, IkhokhaError } from '../types/ikhokha';

export interface RetryConfig {
  maxRetries: number;
  initialDelay: number;
  maxDelay: number;
  backoffMultiplier: number;
  jitterEnabled: boolean;
}

export interface RetryItem {
  id: string;
  webhook: IkhokhaWebhook;
  attempts: number;
  lastAttempt: Date;
  nextAttempt: Date;
  errors: string[];
  createdAt: Date;
}

export interface RetryStats {
  totalItems: number;
  pendingItems: number;
  failedItems: number;
  successfulRetries: number;
  averageRetryTime: number;
}

/**
 * Webhook Retry Service Implementation
 */
export class WebhookRetryService {
  private retryQueue: Map<string, RetryItem> = new Map();
  private config: RetryConfig;
  private isProcessing = false;
  private processingInterval?: NodeJS.Timeout;
  private stats = {
    totalProcessed: 0,
    successfulRetries: 0,
    failedRetries: 0,
    totalRetryTime: 0
  };

  constructor(config?: Partial<RetryConfig>) {
    this.config = {
      maxRetries: 5,
      initialDelay: 1000, // 1 second
      maxDelay: 300000, // 5 minutes
      backoffMultiplier: 2,
      jitterEnabled: true,
      ...config
    };

    console.log('🔄 Webhook Retry Service initialized:', this.config);
  }

  /**
   * Add webhook to retry queue
   */
  async addToRetryQueue(
    webhook: IkhokhaWebhook,
    error: Error | string,
    retryId?: string
  ): Promise<string> {
    const id = retryId || this.generateRetryId(webhook);
    
    const existingItem = this.retryQueue.get(id);
    
    if (existingItem) {
      // Update existing retry item
      existingItem.attempts++;
      existingItem.lastAttempt = new Date();
      existingItem.nextAttempt = this.calculateNextAttempt(existingItem.attempts);
      existingItem.errors.push(error instanceof Error ? error.message : error);
      
      console.log(`🔄 Updated retry item ${id} (attempt ${existingItem.attempts})`);
    } else {
      // Create new retry item
      const retryItem: RetryItem = {
        id,
        webhook,
        attempts: 1,
        lastAttempt: new Date(),
        nextAttempt: this.calculateNextAttempt(1),
        errors: [error instanceof Error ? error.message : error],
        createdAt: new Date()
      };
      
      this.retryQueue.set(id, retryItem);
      console.log(`📋 Added webhook to retry queue: ${id}`);
    }

    // Start processing if not already running
    this.startProcessing();
    
    return id;
  }

  /**
   * Remove item from retry queue
   */
  removeFromRetryQueue(retryId: string): boolean {
    const removed = this.retryQueue.delete(retryId);
    if (removed) {
      console.log(`🗑️ Removed retry item: ${retryId}`);
    }
    return removed;
  }

  /**
   * Get retry item by ID
   */
  getRetryItem(retryId: string): RetryItem | undefined {
    return this.retryQueue.get(retryId);
  }

  /**
   * Get all retry items
   */
  getAllRetryItems(): RetryItem[] {
    return Array.from(this.retryQueue.values());
  }

  /**
   * Get retry statistics
   */
  getRetryStats(): RetryStats {
    const items = Array.from(this.retryQueue.values());
    const now = new Date();
    
    return {
      totalItems: items.length,
      pendingItems: items.filter(item => 
        item.nextAttempt <= now && item.attempts < this.config.maxRetries
      ).length,
      failedItems: items.filter(item => item.attempts >= this.config.maxRetries).length,
      successfulRetries: this.stats.successfulRetries,
      averageRetryTime: this.stats.totalProcessed > 0 
        ? this.stats.totalRetryTime / this.stats.totalProcessed 
        : 0
    };
  }

  /**
   * Clear retry queue
   */
  clearRetryQueue(): number {
    const count = this.retryQueue.size;
    this.retryQueue.clear();
    console.log(`🧹 Cleared retry queue (${count} items)`);
    return count;
  }

  /**
   * Start retry processing
   */
  startProcessing(): void {
    if (this.isProcessing) return;

    this.isProcessing = true;
    console.log('▶️ Starting webhook retry processing');

    // Process immediately
    this.processRetryQueue();

    // Set up interval for continuous processing
    this.processingInterval = setInterval(() => {
      this.processRetryQueue();
    }, 10000); // Check every 10 seconds
  }

  /**
   * Stop retry processing
   */
  stopProcessing(): void {
    if (!this.isProcessing) return;

    this.isProcessing = false;
    
    if (this.processingInterval) {
      clearInterval(this.processingInterval);
      this.processingInterval = undefined;
    }

    console.log('⏹️ Stopped webhook retry processing');
  }

  /**
   * Manually retry a specific webhook
   */
  async retryWebhook(retryId: string): Promise<WebhookResult> {
    const retryItem = this.retryQueue.get(retryId);
    
    if (!retryItem) {
      throw new IkhokhaError('Retry item not found', 'RETRY_NOT_FOUND');
    }

    if (retryItem.attempts >= this.config.maxRetries) {
      throw new IkhokhaError('Maximum retry attempts exceeded', 'MAX_RETRIES_EXCEEDED');
    }

    return await this.executeRetry(retryItem);
  }

  // Private Methods

  /**
   * Generate unique retry ID
   */
  private generateRetryId(webhook: IkhokhaWebhook): string {
    return `retry_${webhook.transaction_id}_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
  }

  /**
   * Calculate next attempt time with exponential backoff
   */
  private calculateNextAttempt(attemptNumber: number): Date {
    let delay = this.config.initialDelay * Math.pow(this.config.backoffMultiplier, attemptNumber - 1);
    
    // Apply maximum delay limit
    delay = Math.min(delay, this.config.maxDelay);
    
    // Add jitter to prevent thundering herd
    if (this.config.jitterEnabled) {
      const jitter = delay * 0.1 * Math.random(); // Up to 10% jitter
      delay += jitter;
    }
    
    return new Date(Date.now() + delay);
  }

  /**
   * Process retry queue
   */
  private async processRetryQueue(): Promise<void> {
    if (this.retryQueue.size === 0) return;

    const now = new Date();
    const itemsToRetry = Array.from(this.retryQueue.values())
      .filter(item => item.nextAttempt <= now && item.attempts < this.config.maxRetries);

    if (itemsToRetry.length === 0) return;

    console.log(`🔄 Processing ${itemsToRetry.length} retry items`);

    // Process retries in parallel with concurrency limit
    const concurrencyLimit = 3;
    const chunks = this.chunkArray(itemsToRetry, concurrencyLimit);

    for (const chunk of chunks) {
      await Promise.allSettled(
        chunk.map(item => this.executeRetry(item))
      );
    }

    // Clean up failed items that exceeded max retries
    this.cleanupFailedItems();
  }

  /**
   * Execute retry for a specific item
   */
  private async executeRetry(retryItem: RetryItem): Promise<WebhookResult> {
    const startTime = Date.now();
    
    try {
      console.log(`🔄 Retrying webhook ${retryItem.id} (attempt ${retryItem.attempts + 1})`);

      // Import webhook handler to avoid circular dependencies
      const { ikhokhaWebhookHandler } = await import('./IkhokhaWebhookHandler');
      
      // Execute the retry
      const result = await ikhokhaWebhookHandler.processWebhook(retryItem.webhook);
      
      // Update statistics
      const retryTime = Date.now() - startTime;
      this.stats.successfulRetries++;
      this.stats.totalProcessed++;
      this.stats.totalRetryTime += retryTime;
      
      // Remove from retry queue on success
      this.retryQueue.delete(retryItem.id);
      
      console.log(`✅ Webhook retry successful: ${retryItem.id} (${retryTime}ms)`);
      
      return result;

    } catch (error) {
      const retryTime = Date.now() - startTime;
      this.stats.totalProcessed++;
      this.stats.totalRetryTime += retryTime;
      
      // Update retry item
      retryItem.attempts++;
      retryItem.lastAttempt = new Date();
      retryItem.errors.push(error instanceof Error ? error.message : String(error));
      
      if (retryItem.attempts < this.config.maxRetries) {
        // Schedule next retry
        retryItem.nextAttempt = this.calculateNextAttempt(retryItem.attempts);
        console.log(`⚠️ Webhook retry failed, scheduling next attempt: ${retryItem.id}`);
      } else {
        // Max retries exceeded
        this.stats.failedRetries++;
        console.error(`❌ Webhook retry failed permanently: ${retryItem.id}`);
      }
      
      throw error;
    }
  }

  /**
   * Clean up items that exceeded max retries
   */
  private cleanupFailedItems(): void {
    const itemsToRemove: string[] = [];
    
    for (const [id, item] of this.retryQueue.entries()) {
      if (item.attempts >= this.config.maxRetries) {
        itemsToRemove.push(id);
      }
    }
    
    itemsToRemove.forEach(id => {
      this.retryQueue.delete(id);
      console.log(`🗑️ Removed permanently failed retry item: ${id}`);
    });
  }

  /**
   * Utility method to chunk array
   */
  private chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
}

// Export singleton instance
export const webhookRetryService = new WebhookRetryService();