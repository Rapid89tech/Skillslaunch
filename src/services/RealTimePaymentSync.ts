/**
 * Real-Time Payment Sync Service
 * 
 * Handles real-time enrollment status synchronization across components,
 * cross-tab synchronization, and WebSocket integration for instant updates.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4
 */

import { supabase } from '@/integrations/supabase/client';
import { EnrollmentStatusUpdate, PaymentStatus, EnrollmentStatus } from '@/types/ikhokha';

interface StatusUpdate {
  type: 'enrollment' | 'payment' | 'approval';
  target_user_id: string;
  enrollment_id: string;
  course_id: string;
  old_status?: string;
  new_status: string;
  payment_info?: PaymentInfo;
  approval_info?: ApprovalInfo;
  timestamp: Date;
  source: 'payment_webhook' | 'admin_action' | 'system';
}

interface PaymentInfo {
  payment_id?: string;
  transaction_id?: string;
  payment_type: 'card' | 'eft';
  amount?: number;
  currency?: string;
}

interface ApprovalInfo {
  approved_by: string;
  approved_at: Date;
  rejection_reason?: string;
}

interface SyncData {
  userId: string;
  enrollmentId: string;
  courseId: string;
  status: EnrollmentStatus;
  timestamp: Date;
  source: string;
}

interface UserUpdate {
  userId: string;
  type: 'enrollment_status_changed' | 'payment_completed' | 'course_access_granted';
  data: any;
  timestamp: Date;
}

interface AdminUpdate {
  type: 'new_eft_enrollment' | 'enrollment_requires_approval';
  enrollmentId: string;
  userEmail: string;
  courseName: string;
  timestamp: Date;
}

type StatusUpdateCallback = (update: StatusUpdate) => void;
type UserUpdateCallback = (update: UserUpdate) => void;
type AdminUpdateCallback = (update: AdminUpdate) => void;

export class RealTimePaymentSync {
  private static instance: RealTimePaymentSync;
  private statusListeners: Set<StatusUpdateCallback> = new Set();
  private userListeners: Map<string, Set<UserUpdateCallback>> = new Map();
  private adminListeners: Set<AdminUpdateCallback> = new Set();
  private broadcastChannel: BroadcastChannel;
  private supabaseSubscription: any;
  private isInitialized = false;

  private constructor() {
    try {
      this.broadcastChannel = new BroadcastChannel('payment-sync');
      this.setupBroadcastChannelListener();
    } catch (error) {
      console.warn('BroadcastChannel not supported, cross-tab sync will use localStorage only:', error);
      // Create a mock BroadcastChannel for fallback
      this.broadcastChannel = {
        postMessage: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        close: () => {}
      } as any;
    }
  }

  static getInstance(): RealTimePaymentSync {
    if (!RealTimePaymentSync.instance) {
      RealTimePaymentSync.instance = new RealTimePaymentSync();
    }
    return RealTimePaymentSync.instance;
  }

  /**
   * Initialize the service
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Setup real-time subscriptions
      this.setupSupabaseSubscription();
      this.isInitialized = true;
      console.log('RealTimePaymentSync initialized successfully');
    } catch (error) {
      console.error('Failed to initialize RealTimePaymentSync:', error);
      throw error;
    }
  }

  /**
   * Sync payment status across components
   * Requirement 3.1: Real-time event broadcasting for enrollment status changes
   */
  async syncPaymentStatus(paymentId: string, status: PaymentStatus): Promise<void> {
    try {
      // Fetch enrollment data associated with this payment
      const { data: enrollment, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('ikhokha_payment_id', paymentId)
        .single();

      if (error || !enrollment) {
        console.error('Failed to find enrollment for payment:', paymentId, error);
        return;
      }

      const update: StatusUpdate = {
        type: 'payment',
        target_user_id: enrollment.user_id,
        enrollment_id: enrollment.id,
        course_id: enrollment.course_id,
        old_status: enrollment.payment_status,
        new_status: status,
        payment_info: {
          payment_id: paymentId,
          payment_type: enrollment.payment_type,
          amount: enrollment.amount,
          currency: enrollment.currency
        },
        timestamp: new Date(),
        source: 'payment_webhook'
      };

      // Broadcast the update
      this.broadcastStatusUpdate(update);

      // Update database
      await supabase
        .from('enrollments')
        .update({ 
          payment_status: status,
          updated_at: new Date().toISOString()
        })
        .eq('id', enrollment.id);

    } catch (error) {
      console.error('Error syncing payment status:', error);
      throw error;
    }
  }

  /**
   * Sync enrollment status across components
   * Requirement 3.2: Cross-component status updates
   */
  async syncEnrollmentStatus(enrollmentId: string, status: EnrollmentStatus): Promise<void> {
    try {
      // Fetch current enrollment data
      const { data: enrollment, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('id', enrollmentId)
        .single();

      if (error || !enrollment) {
        console.error('Failed to find enrollment:', enrollmentId, error);
        return;
      }

      const update: StatusUpdate = {
        type: 'enrollment',
        target_user_id: enrollment.user_id,
        enrollment_id: enrollmentId,
        course_id: enrollment.course_id,
        old_status: enrollment.status,
        new_status: status,
        timestamp: new Date(),
        source: 'system'
      };

      // Broadcast the update
      this.broadcastStatusUpdate(update);

      // Update database
      await supabase
        .from('enrollments')
        .update({ 
          status: status,
          updated_at: new Date().toISOString(),
          ...(status === 'approved' && { 
            course_access_granted: true,
            access_granted_at: new Date().toISOString()
          })
        })
        .eq('id', enrollmentId);

    } catch (error) {
      console.error('Error syncing enrollment status:', error);
      throw error;
    }
  }

  /**
   * Broadcast status update to all listeners
   * Requirement 3.1: Real-time event broadcasting
   */
  broadcastStatusUpdate(update: StatusUpdate): void {
    // Notify local listeners
    this.statusListeners.forEach(callback => {
      try {
        callback(update);
      } catch (error) {
        console.error('Error in status update callback:', error);
      }
    });

    // Broadcast to other tabs
    this.syncAcrossTabs(update.target_user_id, {
      userId: update.target_user_id,
      enrollmentId: update.enrollment_id,
      courseId: update.course_id,
      status: update.new_status as EnrollmentStatus,
      timestamp: update.timestamp,
      source: update.source
    });

    // Dispatch custom events for backward compatibility
    this.dispatchCustomEvents(update);
  }

  /**
   * Broadcast update to specific user
   * Requirement 3.2: User-specific real-time updates
   */
  broadcastToUser(userId: string, update: UserUpdate): void {
    const userListeners = this.userListeners.get(userId);
    if (userListeners) {
      userListeners.forEach(callback => {
        try {
          callback(update);
        } catch (error) {
          console.error('Error in user update callback:', error);
        }
      });
    }

    // Broadcast to other tabs for this user
    try {
      this.broadcastChannel.postMessage({
        type: 'user_update',
        userId,
        update,
        timestamp: new Date()
      });
    } catch (error) {
      console.warn('BroadcastChannel not available for user update:', error);
    }

    // Dispatch user-specific custom event
    window.dispatchEvent(new CustomEvent('user-enrollment-update', {
      detail: { userId, update }
    }));
  }

  /**
   * Broadcast update to admin users
   * Requirement 3.4: Instant admin approval notifications
   */
  broadcastToAdmins(update: AdminUpdate): void {
    this.adminListeners.forEach(callback => {
      try {
        callback(update);
      } catch (error) {
        console.error('Error in admin update callback:', error);
      }
    });

    // Broadcast to other tabs
    try {
      this.broadcastChannel.postMessage({
        type: 'admin_update',
        update,
        timestamp: new Date()
      });
    } catch (error) {
      console.warn('BroadcastChannel not available for admin update:', error);
    }

    // Dispatch admin-specific custom event
    window.dispatchEvent(new CustomEvent('admin-enrollment-update', {
      detail: update
    }));
  }

  /**
   * Cross-tab synchronization using localStorage and broadcast channels
   * Requirement 3.3: Cross-tab synchronization
   */
  syncAcrossTabs(userId: string, data: SyncData): void {
    // Use BroadcastChannel for modern browsers
    try {
      this.broadcastChannel.postMessage({
        type: 'enrollment_sync',
        userId,
        data,
        timestamp: new Date()
      });
    } catch (error) {
      console.warn('BroadcastChannel not available, using localStorage fallback:', error);
    }

    // Fallback to localStorage for older browsers
    const syncKey = `enrollment_sync_${userId}_${Date.now()}`;
    localStorage.setItem(syncKey, JSON.stringify(data));
    
    // Clean up old sync data
    setTimeout(() => {
      localStorage.removeItem(syncKey);
    }, 5000);
  }

  /**
   * Subscribe to status updates
   */
  subscribeToStatusUpdates(callback: StatusUpdateCallback): () => void {
    this.statusListeners.add(callback);
    
    return () => {
      this.statusListeners.delete(callback);
    };
  }

  /**
   * Subscribe to user-specific updates
   */
  subscribeToUserUpdates(userId: string, callback: UserUpdateCallback): () => void {
    if (!this.userListeners.has(userId)) {
      this.userListeners.set(userId, new Set());
    }
    
    this.userListeners.get(userId)!.add(callback);
    
    return () => {
      const listeners = this.userListeners.get(userId);
      if (listeners) {
        listeners.delete(callback);
        if (listeners.size === 0) {
          this.userListeners.delete(userId);
        }
      }
    };
  }

  /**
   * Subscribe to admin updates
   */
  subscribeToAdminUpdates(callback: AdminUpdateCallback): () => void {
    this.adminListeners.add(callback);
    
    return () => {
      this.adminListeners.delete(callback);
    };
  }

  /**
   * Setup BroadcastChannel listener for cross-tab communication
   * Requirement 3.3: Cross-tab synchronization
   */
  private setupBroadcastChannelListener(): void {
    this.broadcastChannel.addEventListener('message', (event) => {
      const { type, userId, data, update } = event.data;

      switch (type) {
        case 'enrollment_sync':
          this.handleCrossTabSync(userId, data);
          break;
        
        case 'user_update':
          this.handleCrossTabUserUpdate(userId, update);
          break;
        
        case 'admin_update':
          this.handleCrossTabAdminUpdate(update);
          break;
      }
    });

    // Also listen to localStorage changes for fallback
    window.addEventListener('storage', (event) => {
      if (event.key?.startsWith('enrollment_sync_') && event.newValue) {
        try {
          const data = JSON.parse(event.newValue);
          this.handleCrossTabSync(data.userId, data);
        } catch (error) {
          console.error('Error parsing cross-tab sync data:', error);
        }
      }
    });
  }

  /**
   * Setup Supabase real-time subscription
   * Requirement 3.4: WebSocket integration for instant notifications
   */
  private setupSupabaseSubscription(): void {
    try {
      this.supabaseSubscription = supabase
        .channel('enrollment_changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'enrollments'
          },
          (payload) => {
            this.handleSupabaseChange(payload);
          }
        )
        .subscribe((status) => {
          console.log('Supabase subscription status:', status);
        });
    } catch (error) {
      console.error('Error setting up Supabase subscription:', error);
      throw error;
    }
  }

  /**
   * Handle Supabase real-time changes
   */
  private handleSupabaseChange(payload: any): void {
    const { eventType, new: newRecord, old: oldRecord } = payload;
    
    if (!newRecord && !oldRecord) return;

    const record = newRecord || oldRecord;
    
    const update: StatusUpdate = {
      type: 'enrollment',
      target_user_id: record.user_id,
      enrollment_id: record.id,
      course_id: record.course_id,
      old_status: oldRecord?.status,
      new_status: record.status,
      timestamp: new Date(),
      source: 'system'
    };

    // Only broadcast if this is a status change
    if (eventType === 'UPDATE' && oldRecord?.status !== record.status) {
      this.broadcastStatusUpdate(update);
    } else if (eventType === 'INSERT') {
      this.broadcastStatusUpdate(update);
      
      // If it's an EFT payment, notify admins
      if (record.payment_type === 'eft' && record.status === 'pending') {
        this.broadcastToAdmins({
          type: 'new_eft_enrollment',
          enrollmentId: record.id,
          userEmail: record.user_email,
          courseName: record.course_title,
          timestamp: new Date()
        });
      }
    }
  }

  /**
   * Handle cross-tab synchronization
   */
  private handleCrossTabSync(userId: string, data: SyncData): void {
    // Dispatch event for components to handle
    window.dispatchEvent(new CustomEvent('cross-tab-enrollment-sync', {
      detail: { userId, data }
    }));
  }

  /**
   * Handle cross-tab user updates
   */
  private handleCrossTabUserUpdate(userId: string, update: UserUpdate): void {
    const userListeners = this.userListeners.get(userId);
    if (userListeners) {
      userListeners.forEach(callback => {
        try {
          callback(update);
        } catch (error) {
          console.error('Error in cross-tab user update callback:', error);
        }
      });
    }
  }

  /**
   * Handle cross-tab admin updates
   */
  private handleCrossTabAdminUpdate(update: AdminUpdate): void {
    this.adminListeners.forEach(callback => {
      try {
        callback(update);
      } catch (error) {
        console.error('Error in cross-tab admin update callback:', error);
      }
    });
  }

  /**
   * Dispatch custom events for backward compatibility
   */
  private dispatchCustomEvents(update: StatusUpdate): void {
    // Dispatch enrollment-specific events
    switch (update.type) {
      case 'enrollment':
        window.dispatchEvent(new CustomEvent('enrollment-status-changed', {
          detail: {
            enrollmentId: update.enrollment_id,
            courseId: update.course_id,
            userId: update.target_user_id,
            oldStatus: update.old_status,
            newStatus: update.new_status,
            source: update.source
          }
        }));
        break;
      
      case 'payment':
        window.dispatchEvent(new CustomEvent('payment-status-changed', {
          detail: {
            enrollmentId: update.enrollment_id,
            courseId: update.course_id,
            userId: update.target_user_id,
            paymentInfo: update.payment_info,
            source: update.source
          }
        }));
        break;
      
      case 'approval':
        window.dispatchEvent(new CustomEvent('enrollment-approved', {
          detail: {
            enrollmentId: update.enrollment_id,
            courseId: update.course_id,
            userId: update.target_user_id,
            approvalInfo: update.approval_info,
            source: update.source
          }
        }));
        break;
    }
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    this.statusListeners.clear();
    this.userListeners.clear();
    this.adminListeners.clear();
    
    if (this.broadcastChannel) {
      this.broadcastChannel.close();
    }
    
    if (this.supabaseSubscription) {
      this.supabaseSubscription.unsubscribe();
    }
    
    this.isInitialized = false;
  }

  /**
   * Get service health status
   */
  getHealthStatus(): {
    initialized: boolean;
    listenersCount: number;
    userListenersCount: number;
    adminListenersCount: number;
    supabaseConnected: boolean;
  } {
    return {
      initialized: this.isInitialized,
      listenersCount: this.statusListeners.size,
      userListenersCount: Array.from(this.userListeners.values()).reduce((sum, set) => sum + set.size, 0),
      adminListenersCount: this.adminListeners.size,
      supabaseConnected: !!this.supabaseSubscription
    };
  }
}

// Export singleton instance
export const realTimePaymentSync = RealTimePaymentSync.getInstance();