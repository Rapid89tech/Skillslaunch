import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { debugEnrollmentData } from '@/utils/enrollmentDebug';

interface Enrollment {
  id: string;
  user_id: string;
  user_email: string;
  course_id: string;
  course_title: string;
  status: string;
  enrolled_at: string;
  approved_at?: string;
  progress?: number;
  // Support alternative field names for compatibility
  userId?: string;
  courseId?: string;
}

export const useEnrollmentData = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(false); // Start with false to avoid loading delays
  const { user } = useAuth();

  useEffect(() => {
    const loadEnrollments = async () => {
      if (!user) {
        setEnrollments([]);
        setLoading(false);
        return;
      }

      // Smart cache management - always fetch fresh data but show cached while loading
      const cacheKey = `user-enrollments-${user.id}`;
      const cachedEnrollments = localStorage.getItem(cacheKey);
      const cacheTimestamp = localStorage.getItem(`${cacheKey}-timestamp`);
      const currentTime = Date.now();
      const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
      
      // Check if cache is stale
      const cacheIsStale = !cacheTimestamp || (currentTime - parseInt(cacheTimestamp)) > CACHE_DURATION;
      
      if (cachedEnrollments && !cacheIsStale) {
        try {
          const parsed = JSON.parse(cachedEnrollments);
          console.log('📦 Loading fresh cached enrollments:', parsed);
          setEnrollments(parsed);
          setLoading(false);
          return; // Use cache if it's fresh
        } catch (error) {
          console.warn('Error parsing cached enrollments:', error);
        }
      } else if (cachedEnrollments) {
        try {
          const parsed = JSON.parse(cachedEnrollments);
          console.log('⏳ Loading stale cache while fetching fresh data:', parsed);
          setEnrollments(parsed); // Show stale cache while we fetch fresh data
        } catch (error) {
          console.warn('Error parsing cached enrollments:', error);
        }
      }

      try {
        console.log('Loading enrollments for user:', user.id);
        
        // First, check localStorage for enrollments (fallback or instant enrollments)
        const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        console.log('📦 Raw localStorage enrollments:', localEnrollments);
        
        // Debug enrollment data structure
        debugEnrollmentData();
        
        const userLocalEnrollments = localEnrollments.filter((e: any) => {
          // Support both user_id formats and approved status
          const userMatches = e.user_id === user.id || e.userId === user.id;
          const isApproved = e.status === 'approved';
          console.log(`🔍 Checking enrollment: user_id=${e.user_id}, userId=${e.userId}, status=${e.status}, userMatches=${userMatches}, isApproved=${isApproved}`);
          return userMatches && isApproved;
        });
        
        console.log('Found local enrollments:', userLocalEnrollments.length);
        
        let supabaseEnrollments: any[] = [];
        
        // Try to get enrollments from Supabase if available
        try {
          const { data: enrollments, error } = await supabase
            .from('enrollments')
            .select('*')
            .eq('user_id', user.id)
            .eq('status', 'approved')
            .order('enrolled_at', { ascending: false });
          
          if (!error && enrollments) {
            supabaseEnrollments = enrollments;
            console.log('Found approved enrollments from Supabase:', supabaseEnrollments.length);
          }
        } catch (supabaseError) {
          console.warn('Supabase not available, using localStorage only:', supabaseError);
        }
        
        // Merge enrollments from both sources, removing duplicates
        const allEnrollments = [...supabaseEnrollments];
        userLocalEnrollments.forEach((localEnrollment: any) => {
          // Support both course_id and courseId field names
          const localCourseId = localEnrollment.course_id || localEnrollment.courseId;
          const existsInSupabase = supabaseEnrollments.some(
            (supabaseEnrollment: any) => {
              const supabaseCourseId = supabaseEnrollment.course_id || supabaseEnrollment.courseId;
              return supabaseCourseId === localCourseId;
            }
          );
          if (!existsInSupabase) {
            // Normalize the enrollment object to ensure consistent field names
            const normalizedEnrollment = {
              ...localEnrollment,
              course_id: localCourseId, // Ensure course_id field exists
              courseId: localCourseId   // Also keep courseId for compatibility
            };
            allEnrollments.push(normalizedEnrollment);
          }
        });
        
        console.log('Total enrollments found:', allEnrollments.length);
        setEnrollments(allEnrollments);
        
        // Cache the merged enrollments with timestamp
        const cacheKey = `user-enrollments-${user.id}`;
        localStorage.setItem(cacheKey, JSON.stringify(allEnrollments));
        localStorage.setItem(`${cacheKey}-timestamp`, currentTime.toString());
        console.log('💾 Cached merged enrollments with timestamp to localStorage');
      } catch (error) {
        console.error('Error loading enrollments:', error);
        
        // Fallback to localStorage enrollments only
        const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        const userLocalEnrollments = localEnrollments.filter((e: any) => {
          const userMatches = e.user_id === user.id || e.userId === user.id;
          const isApproved = e.status === 'approved';
          return userMatches && isApproved;
        }).map((e: any) => ({
          ...e,
          course_id: e.course_id || e.courseId,
          courseId: e.course_id || e.courseId
        }));
        
        console.log('Fallback: Using local enrollments only:', userLocalEnrollments.length);
        setEnrollments(userLocalEnrollments);
      } finally {
        setLoading(false);
      }
    };

    loadEnrollments();

    // Listen for enrollment success events to invalidate cache
    const handleEnrollmentSuccess = (event: CustomEvent) => {
      console.log('🔄 Enrollment success detected, FORCING immediate refresh...');
      const cacheKey = `user-enrollments-${user.id}`;
      
      // Clear ALL enrollment cache
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(`${cacheKey}-timestamp`);
      
      // Force immediate reload with no cache
      setLoading(true);
      setTimeout(() => {
        loadEnrollments(); // Reload fresh data
        console.log('✅ Forced enrollment refresh completed');
      }, 100);
    };

    // Also listen for enrollment verification events
    const handleEnrollmentVerified = (event: CustomEvent) => {
      console.log('🔄 Enrollment verification detected, FORCING immediate refresh...');
      const cacheKey = `user-enrollments-${user.id}`;
      
      // Clear ALL enrollment cache
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(`${cacheKey}-timestamp`);
      
      // Force immediate reload with no cache
      setLoading(true);
      setTimeout(() => {
        loadEnrollments(); // Reload fresh data
        console.log('✅ Forced enrollment verification refresh completed');
      }, 100);
    };

    window.addEventListener('enrollment-success', handleEnrollmentSuccess as EventListener);
    window.addEventListener('enrollment-verified', handleEnrollmentVerified as EventListener);
    
    return () => {
      window.removeEventListener('enrollment-success', handleEnrollmentSuccess as EventListener);
      window.removeEventListener('enrollment-verified', handleEnrollmentVerified as EventListener);
    };
  }, [user]);

  // Refetch function with database query
  const refetch = async () => {
    if (!user) {
      setEnrollments([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      
      // First, check localStorage for enrollments
      const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
      console.log('📦 Refetch: Raw localStorage enrollments:', localEnrollments);
      
      const userLocalEnrollments = localEnrollments.filter((e: any) => {
        // Support both user_id formats and approved status
        const userMatches = e.user_id === user.id || e.userId === user.id;
        const isApproved = e.status === 'approved';
        return userMatches && isApproved;
      });
      
      let supabaseEnrollments: any[] = [];
      
      // Try to get enrollments from Supabase if available
      try {
        const { data: enrollments, error } = await supabase
          .from('enrollments')
          .select('*')
          .eq('user_id', user.id)
          .eq('status', 'approved')
          .order('enrolled_at', { ascending: false });
        
        if (!error && enrollments) {
          supabaseEnrollments = enrollments;
        }
      } catch (supabaseError) {
        console.warn('Supabase not available during refetch, using localStorage only');
      }
      
      // Merge enrollments from both sources, removing duplicates
      const allEnrollments = [...supabaseEnrollments];
      userLocalEnrollments.forEach((localEnrollment: any) => {
        // Support both course_id and courseId field names
        const localCourseId = localEnrollment.course_id || localEnrollment.courseId;
        const existsInSupabase = supabaseEnrollments.some(
          (supabaseEnrollment: any) => {
            const supabaseCourseId = supabaseEnrollment.course_id || supabaseEnrollment.courseId;
            return supabaseCourseId === localCourseId;
          }
        );
        if (!existsInSupabase) {
          // Normalize the enrollment object
          const normalizedEnrollment = {
            ...localEnrollment,
            course_id: localCourseId,
            courseId: localCourseId
          };
          allEnrollments.push(normalizedEnrollment);
        }
      });
      
      setEnrollments(allEnrollments);
      
      // Cache the updated enrollments
      localStorage.setItem(`user-enrollments-${user.id}`, JSON.stringify(allEnrollments));
      console.log('💾 Updated cached enrollments');
    } catch (error) {
      console.error('Error refetching enrollments:', error);
      
      // Fallback to localStorage enrollments only
      const localEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
      const userLocalEnrollments = localEnrollments.filter((e: any) => 
        e.user_id === user.id && e.status === 'approved'
      );
      
      setEnrollments(userLocalEnrollments);
    } finally {
      setLoading(false);
    }
  };

  return {
    enrollments,
    loading,
    refetch
  };
};
