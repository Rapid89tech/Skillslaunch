/**
 * React Hook for Real-Time Payment Sync
 * 
 * Provides easy access to real-time enrollment and payment status updates
 * with automatic cleanup and error handling.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4
 */

import { useEffect, useCallback, useRef } from 'react';
import { realTimePaymentSync } from '@/services/RealTimePaymentSync';
import { EnrollmentStatus, PaymentStatus } from '@/types/ikhokha';

interface StatusUpdate {
  type: 'enrollment' | 'payment' | 'approval';
  target_user_id: string;
  enrollment_id: string;
  course_id: string;
  old_status?: string;
  new_status: string;
  payment_info?: any;
  approval_info?: any;
  timestamp: Date;
  source: 'payment_webhook' | 'admin_action' | 'system';
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

interface UseRealTimePaymentSyncOptions {
  userId?: string;
  courseId?: string;
  enrollmentId?: string;
  isAdmin?: boolean;
}

interface UseRealTimePaymentSyncReturn {
  // Status sync methods
  syncPaymentStatus: (paymentId: string, status: PaymentStatus) => Promise<void>;
  syncEnrollmentStatus: (enrollmentId: string, status: EnrollmentStatus) => Promise<void>;
  
  // Health status
  isConnected: boolean;
  healthStatus: any;
  
  // Manual refresh
  refreshConnection: () => Promise<void>;
}

export const useRealTimePaymentSync = (
  options: UseRealTimePaymentSyncOptions = {}
): UseRealTimePaymentSyncReturn => {
  const { userId, courseId, enrollmentId, isAdmin = false } = options;
  const unsubscribeFunctions = useRef<(() => void)[]>([]);

  /**
   * Sync payment status
   */
  const syncPaymentStatus = useCallback(async (paymentId: string, status: PaymentStatus) => {
    try {
      await realTimePaymentSync.syncPaymentStatus(paymentId, status);
    } catch (error) {
      console.error('Error syncing payment status:', error);
      throw error;
    }
  }, []);

  /**
   * Sync enrollment status
   */
  const syncEnrollmentStatus = useCallback(async (enrollmentId: string, status: EnrollmentStatus) => {
    try {
      await realTimePaymentSync.syncEnrollmentStatus(enrollmentId, status);
    } catch (error) {
      console.error('Error syncing enrollment status:', error);
      throw error;
    }
  }, []);

  /**
   * Refresh connection
   */
  const refreshConnection = useCallback(async () => {
    try {
      await realTimePaymentSync.initialize();
    } catch (error) {
      console.error('Error refreshing connection:', error);
      throw error;
    }
  }, []);

  /**
   * Setup subscriptions based on options
   */
  useEffect(() => {
    const setupSubscriptions = async () => {
      try {
        // Initialize the service
        await realTimePaymentSync.initialize();

        // Subscribe to general status updates
        const statusUnsubscribe = realTimePaymentSync.subscribeToStatusUpdates((update: StatusUpdate) => {
          console.log('Status update received:', update);
          
          // Filter updates based on options
          if (userId && update.target_user_id !== userId) return;
          if (courseId && update.course_id !== courseId) return;
          if (enrollmentId && update.enrollment_id !== enrollmentId) return;

          // Dispatch filtered events for components to handle
          window.dispatchEvent(new CustomEvent('filtered-status-update', {
            detail: update
          }));
        });
        unsubscribeFunctions.current.push(statusUnsubscribe);

        // Subscribe to user-specific updates if userId is provided
        if (userId) {
          const userUnsubscribe = realTimePaymentSync.subscribeToUserUpdates(userId, (update: UserUpdate) => {
            console.log('User update received:', update);
            
            // Dispatch user-specific events
            window.dispatchEvent(new CustomEvent('user-specific-update', {
              detail: update
            }));
          });
          unsubscribeFunctions.current.push(userUnsubscribe);
        }

        // Subscribe to admin updates if user is admin
        if (isAdmin) {
          const adminUnsubscribe = realTimePaymentSync.subscribeToAdminUpdates((update: AdminUpdate) => {
            console.log('Admin update received:', update);
            
            // Dispatch admin-specific events
            window.dispatchEvent(new CustomEvent('admin-specific-update', {
              detail: update
            }));
          });
          unsubscribeFunctions.current.push(adminUnsubscribe);
        }

      } catch (error) {
        console.error('Error setting up real-time payment sync subscriptions:', error);
      }
    };

    setupSubscriptions();

    // Cleanup function
    return () => {
      unsubscribeFunctions.current.forEach(unsubscribe => {
        try {
          unsubscribe();
        } catch (error) {
          console.error('Error unsubscribing:', error);
        }
      });
      unsubscribeFunctions.current = [];
    };
  }, [userId, courseId, enrollmentId, isAdmin]);

  // Get health status
  const healthStatus = realTimePaymentSync.getHealthStatus();
  const isConnected = healthStatus.initialized && healthStatus.supabaseConnected;

  return {
    syncPaymentStatus,
    syncEnrollmentStatus,
    isConnected,
    healthStatus,
    refreshConnection
  };
};

/**
 * Hook for course-specific enrollment updates
 */
export const useRealTimeEnrollmentUpdates = (courseId: string, userId?: string) => {
  const { syncEnrollmentStatus, isConnected } = useRealTimePaymentSync({ 
    courseId, 
    userId 
  });

  useEffect(() => {
    const handleEnrollmentUpdate = (event: CustomEvent) => {
      const { courseId: eventCourseId, userId: eventUserId } = event.detail;
      
      // Only handle updates for this course and user
      if (eventCourseId === courseId && (!userId || eventUserId === userId)) {
        console.log('Course enrollment update:', event.detail);
      }
    };

    window.addEventListener('filtered-status-update', handleEnrollmentUpdate as EventListener);
    
    return () => {
      window.removeEventListener('filtered-status-update', handleEnrollmentUpdate as EventListener);
    };
  }, [courseId, userId]);

  return {
    syncEnrollmentStatus,
    isConnected
  };
};

/**
 * Hook for admin dashboard real-time updates
 */
export const useRealTimeAdminUpdates = () => {
  const { isConnected, healthStatus } = useRealTimePaymentSync({ isAdmin: true });

  useEffect(() => {
    const handleAdminUpdate = (event: CustomEvent) => {
      const update = event.detail;
      console.log('Admin dashboard update:', update);
      
      // Dispatch specific events based on update type
      switch (update.type) {
        case 'new_eft_enrollment':
          window.dispatchEvent(new CustomEvent('new-pending-enrollment', {
            detail: update
          }));
          break;
        
        case 'enrollment_requires_approval':
          window.dispatchEvent(new CustomEvent('enrollment-needs-approval', {
            detail: update
          }));
          break;
      }
    };

    window.addEventListener('admin-specific-update', handleAdminUpdate as EventListener);
    
    return () => {
      window.removeEventListener('admin-specific-update', handleAdminUpdate as EventListener);
    };
  }, []);

  return {
    isConnected,
    healthStatus
  };
};

/**
 * Hook for cross-tab synchronization
 */
export const useCrossTabSync = (userId: string) => {
  useEffect(() => {
    const handleCrossTabSync = (event: CustomEvent) => {
      const { userId: eventUserId, data } = event.detail;
      
      if (eventUserId === userId) {
        console.log('Cross-tab sync received:', data);
        
        // Dispatch event for components to handle
        window.dispatchEvent(new CustomEvent('enrollment-synced-across-tabs', {
          detail: data
        }));
      }
    };

    window.addEventListener('cross-tab-enrollment-sync', handleCrossTabSync as EventListener);
    
    return () => {
      window.removeEventListener('cross-tab-enrollment-sync', handleCrossTabSync as EventListener);
    };
  }, [userId]);
};