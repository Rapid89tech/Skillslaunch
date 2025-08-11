import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/AuthContext';

interface RealTimeEnrollmentButtonProps {
  courseId: string;
  onEnrollClick: () => void;
  className?: string;
}

/**
 * Real-time enrollment button that updates immediately when enrollment status changes
 */
export const RealTimeEnrollmentButton: React.FC<RealTimeEnrollmentButtonProps> = ({
  courseId,
  onEnrollClick,
  className = ""
}) => {
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
      console.log(`🔍 RealTime: Checking enrollment for ${courseId}...`);
      
      // Check localStorage enrollments
      const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
      const userEnrollments = localEnrollments.filter((e: any) => {
        const userMatches = e.user_id === user.id || e.userId === user.id;
        const courseMatches = (e.course_id === courseId || e.courseId === courseId);
        const isApproved = e.status === 'approved';
        const match = userMatches && courseMatches && isApproved;
        
        if (match) {
          console.log(`✅ RealTime: Found enrollment match for ${courseId}:`, e);
        }
        
        return match;
      });

      // Also check cached enrollments
      const cachedEnrollments = localStorage.getItem(`user-enrollments-${user.id}`);
      if (cachedEnrollments && userEnrollments.length === 0) {
        try {
          const cached = JSON.parse(cachedEnrollments);
          const cachedEnrollment = cached.find((e: any) => {
            const courseMatches = (e.course_id === courseId || e.courseId === courseId);
            return courseMatches;
          });
          
          if (cachedEnrollment) {
            userEnrollments.push(cachedEnrollment);
            console.log(`✅ RealTime: Found cached enrollment for ${courseId}:`, cachedEnrollment);
          }
        } catch (error) {
          console.warn('Error parsing cached enrollments:', error);
        }
      }

      const enrolled = userEnrollments.length > 0;
      setIsEnrolled(enrolled);
      setLoading(false);

      console.log(`🎯 RealTime: Final enrollment status for ${courseId}:`, enrolled);
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
        console.log(`🎯 RealTime: Enrollment success detected for ${courseId}, updating button...`);
        setTimeout(checkEnrollmentStatus, 200);
      }
    };

    const handleEnrollmentVerified = (event: CustomEvent) => {
      const { courseId: eventCourseId } = event.detail;
      if (eventCourseId === courseId) {
        console.log(`📄 RealTime: Enrollment verified for ${courseId}, updating button...`);
        setTimeout(checkEnrollmentStatus, 200);
      }
    };

    const handleCacheInvalidated = () => {
      console.log(`🔄 RealTime: Cache invalidated, rechecking enrollment for ${courseId}...`);
      checkEnrollmentStatus();
    };

    // Add event listeners
    window.addEventListener('enrollment-success', handleEnrollmentSuccess as EventListener);
    window.addEventListener('enrollment-verified', handleEnrollmentVerified as EventListener);
    window.addEventListener('cache-invalidated', handleCacheInvalidated);

    // Listen for storage changes
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'enrollments' || event.key?.startsWith('user-enrollments-')) {
        console.log(`💾 RealTime: Storage change detected for ${event.key}, rechecking enrollment...`);
        setTimeout(checkEnrollmentStatus, 100);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('enrollment-success', handleEnrollmentSuccess as EventListener);
      window.removeEventListener('enrollment-verified', handleEnrollmentVerified as EventListener);
      window.removeEventListener('cache-invalidated', handleCacheInvalidated);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [user, courseId]);

  if (loading) {
    return (
      <Button disabled className={className}>
        Loading...
      </Button>
    );
  }

  if (isEnrolled) {
    return (
      <Button 
        className={`bg-green-600 hover:bg-green-700 text-white ${className}`}
        onClick={() => window.location.href = `/course/${courseId}`}
      >
        ✅ Continue Course
      </Button>
    );
  }

  return (
    <Button 
      onClick={onEnrollClick}
      className={`bg-red-600 hover:bg-red-700 text-white ${className}`}
    >
      Enroll Now
    </Button>
  );
};

export default RealTimeEnrollmentButton;
