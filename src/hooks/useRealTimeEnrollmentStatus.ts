import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

/**
 * Senior Developer Implementation: Real-time Enrollment Status Updates
 * This hook provides real-time updates to enrollment status without requiring page refreshes
 */
export const useRealTimeEnrollmentStatus = (courseId: string) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const checkEnrollmentStatus = () => {
    if (!user || !courseId) {
      setIsEnrolled(false);
      setLoading(false);
      return;
    }

    try {
      // Check localStorage enrollments
      const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
      const userEnrollments = localEnrollments.filter((e: any) => {
        const userMatches = e.user_id === user.id || e.userId === user.id;
        const courseMatches = (e.course_id === courseId || e.courseId === courseId);
        const isApproved = e.status === 'approved';
        return userMatches && courseMatches && isApproved;
      });

      // Check cached enrollments
      const cachedEnrollments = localStorage.getItem(`user-enrollments-${user.id}`);
      if (cachedEnrollments) {
        const cached = JSON.parse(cachedEnrollments);
        const cachedEnrollment = cached.find((e: any) => {
          const courseMatches = (e.course_id === courseId || e.courseId === courseId);
          return courseMatches;
        });
        if (cachedEnrollment) {
          userEnrollments.push(cachedEnrollment);
        }
      }

      const enrolled = userEnrollments.length > 0;
      setIsEnrolled(enrolled);
      setLoading(false);

      console.log(`🔍 Real-time enrollment check for ${courseId}:`, enrolled);
    } catch (error) {
      console.error('Error checking enrollment status:', error);
      setIsEnrolled(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial check
    checkEnrollmentStatus();

    // Listen for enrollment events
    const handleEnrollmentSuccess = (event: CustomEvent) => {
      const { courseId: eventCourseId } = event.detail;
      if (eventCourseId === courseId) {
        console.log(`🎯 Enrollment success detected for ${courseId}, updating status...`);
        setTimeout(checkEnrollmentStatus, 500); // Small delay to ensure localStorage is updated
      }
    };

    const handleEnrollmentSubmitted = (event: CustomEvent) => {
      const { courseId: eventCourseId } = event.detail;
      if (eventCourseId === courseId) {
        console.log(`📄 Enrollment submitted for ${courseId}, checking status...`);
        setTimeout(checkEnrollmentStatus, 500);
      }
    };

    const handleCacheInvalidated = () => {
      console.log(`🔄 Cache invalidated, rechecking enrollment for ${courseId}...`);
      checkEnrollmentStatus();
    };

    // Add event listeners
    window.addEventListener('enrollment-success', handleEnrollmentSuccess as EventListener);
    window.addEventListener('enrollment-submitted', handleEnrollmentSubmitted as EventListener);
    window.addEventListener('cache-invalidated', handleCacheInvalidated);

    // Listen for storage changes (in case another tab enrolls)
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'enrollments' || event.key?.startsWith('user-enrollments-')) {
        console.log(`💾 Storage change detected for ${event.key}, rechecking enrollment...`);
        checkEnrollmentStatus();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('enrollment-success', handleEnrollmentSuccess as EventListener);
      window.removeEventListener('enrollment-submitted', handleEnrollmentSubmitted as EventListener);
      window.removeEventListener('cache-invalidated', handleCacheInvalidated);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [user, courseId]);

  return {
    isEnrolled,
    loading,
    recheckStatus: checkEnrollmentStatus
  };
};
