
import { useEnrollmentData } from './useEnrollmentData';
import { useEnrollmentOperations } from './useEnrollmentOperations';
import { useAuth } from '@/hooks/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';

export const useEnrollments = () => {
  const { enrollments, loading, refetch } = useEnrollmentData();
  const { enrollInCourse, updateProgress } = useEnrollmentOperations();
  const { user } = useAuth();

  // Create a new enrollment request using our Edge Function
  const requestEnrollment = async (courseId: string, courseTitle: string) => {
    if (!user) return;
    
    const enrollmentData = {
      userId: user.id,
      userEmail: user.email,
      courseId,
      courseTitle,
      proofOfPayment: '', // Will be filled when proof is uploaded
      paymentRef: '',
      paymentDate: '',
    };

    const notificationData = {
      type: 'NEW_ENROLLMENT',
      courseTitle,
      userEmail: user.email,
      read: false,
    };

    const { error } = await supabase.functions.invoke('create-enrollment', {
      body: { enrollmentData, notificationData },
    });

    if (error) throw error;
  };

  const handleEnrollInCourse = async (courseId: string, courseTitle: string) => {
    try {
      await requestEnrollment(courseId, courseTitle);
      return true;
    } catch (error) {
      console.error('Error enrolling in course:', error);
      return false;
    }
  };

  const handleUpdateProgress = async (courseId: string, progress: number) => {
    console.log("useEnrollments: Updating progress for", courseId, "to", progress);
    const success = await updateProgress(courseId, progress);
    if (success) {
      setTimeout(() => {
        refetch();
      }, 100);
    }
    return success;
  };

  // Check if user is enrolled in a specific course
  const isEnrolled = (courseId: string) => {
    // BULLETPROOF enrollment check - check multiple sources
    if (!user || !courseId) return false;
    
    // Check 1: Current enrollments array
    const enrollmentMatch = enrollments.some(enrollment => {
      const enrollmentCourseId = enrollment.course_id || enrollment.courseId;
      return enrollmentCourseId === courseId;
    });
    
    // Check 2: Direct localStorage check
    const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
    const localMatch = localEnrollments.some((e: any) => {
      const userMatches = e.user_id === user.id || e.userId === user.id;
      const courseMatches = e.course_id === courseId || e.courseId === courseId;
      const isApproved = e.status === 'approved';
      return userMatches && courseMatches && isApproved;
    });
    
    // Check 3: User-specific cache
    const userCache = localStorage.getItem(`user-enrollments-${user.id}`);
    let cacheMatch = false;
    if (userCache) {
      try {
        const cached = JSON.parse(userCache);
        cacheMatch = cached.some((e: any) => {
          const courseMatches = e.course_id === courseId || e.courseId === courseId;
          return courseMatches;
        });
      } catch (error) {
        console.warn('Error parsing user cache:', error);
      }
    }
    
    const enrolled = enrollmentMatch || localMatch || cacheMatch;
    
    console.log(`🔍 BULLETPROOF enrollment check for "${courseId}":`, {
      enrollmentMatch,
      localMatch,
      cacheMatch,
      finalResult: enrolled,
      totalEnrollments: enrollments.length
    });
    
    if (enrolled) {
      console.log(`✅ CONFIRMED: User is enrolled in ${courseId}`);
    } else {
      console.log(`❌ NOT ENROLLED: User not enrolled in ${courseId}`);
      console.log(`📋 Available course IDs:`, enrollments.map(e => e.course_id || e.courseId));
    }
    
    return enrolled;
  };

  // Check if user has a pending enrollment for a specific course
  const hasPendingEnrollment = async (courseId: string) => {
    if (!user) return false;
    
    try {
      // Query Supabase for pending enrollment
      const { data: pendingEnrollment, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', user.id)
        .eq('course_id', courseId)
        .eq('status', 'pending')
        .single();
      
      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        console.error('Error checking pending enrollment:', error);
        throw new Error(`Failed to check pending enrollment: ${error.message}`);
      }
      
      return !!pendingEnrollment;
    } catch (error) {
      console.error('Error in hasPendingEnrollment:', error);
      return false;
    }
  };

  // Get enrollment details for a specific course
  const getEnrollment = (courseId: string) => {
    const enrollment = enrollments.find(enrollment => {
      const enrollmentCourseId = enrollment.course_id || enrollment.courseId;
      return enrollmentCourseId === courseId;
    });
    console.log(`🔍 useEnrollments: Getting enrollment for "${courseId}":`, enrollment);
    return enrollment;
  };

  // Real-time hook for instructor dashboard
  const usePendingEnrollments = () => {
    const [pending, setPending] = useState([]);
    
    useEffect(() => {
      const fetchPendingEnrollments = async () => {
        const { data, error } = await supabase
          .from('Enrollment')
          .select('*')
          .eq('status', 'pending');
        
        if (!error && data) {
          setPending(data);
        }
      };

      fetchPendingEnrollments();

      // Set up real-time subscription
      const channel = supabase
        .channel('pending-enrollments')
        .on('postgres_changes', 
          { event: 'INSERT', schema: 'public', table: 'Enrollment' }, 
          (payload) => {
            if (payload.new.status === 'pending') {
              setPending(current => [...current, payload.new]);
            }
          }
        )
        .on('postgres_changes', 
          { event: 'UPDATE', schema: 'public', table: 'Enrollment' }, 
          (payload) => {
            setPending(current => 
              current.map(item => 
                item.id === payload.new.id ? payload.new : item
              ).filter(item => item.status === 'pending')
            );
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }, []);

    return pending;
  };

  return {
    enrollments,
    loading,
    enrollInCourse: handleEnrollInCourse,
    updateProgress: handleUpdateProgress,
    isEnrolled,
    hasPendingEnrollment,
    getEnrollment,
    refetch,
    usePendingEnrollments,
  };
};

// Re-export the Enrollment type for backward compatibility
export type { Enrollment } from '@/types/enrollment';
