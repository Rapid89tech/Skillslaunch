import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';
import { Enrollment } from '@/types/enrollment';
import { getSampleEnrollments } from '@/utils/enrollmentStorage';

export const useEnrollmentData = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>(() => {
    try {
      const cached = localStorage.getItem('enrollments');
      return cached ? JSON.parse(cached) : [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { toast } = useToast();
  const hasFetched = useRef<string | null>(null); // store user.id of last fetch

  const loadLocalEnrollments = () => {
    try {
      const storedEnrollments = localStorage.getItem('enrollments');
      const localEnrollments = storedEnrollments ? JSON.parse(storedEnrollments) : [];
      
      // Convert to proper Enrollment format
      const formattedEnrollments: Enrollment[] = localEnrollments.map((enrollment: any) => ({
        id: enrollment.course_id,
        user_id: enrollment.user_id,
        course_id: enrollment.course_id,
        enrolled_at: enrollment.enrollment_date,
        progress: enrollment.progress || 0,
        completed_at: null
      }));
      
      console.log("Local enrollments loaded:", formattedEnrollments);
      return formattedEnrollments;
    } catch (error) {
      console.error("Error loading local enrollments:", error);
      return [];
    }
  };

  const fetchEnrollments = async () => {
    if (!user) {
      setLoading(false);
      console.log('[Enrollments] No user, skipping fetch.');
      return;
    }
    // Prevent repeated fetch/fallback for the same user
    if (hasFetched.current === user.id) {
      setLoading(false);
      console.log('[Enrollments] Already fetched for this user, skipping.');
      return;
    }
    hasFetched.current = user.id;
    try {
      setLoading(true);
      console.log('[Enrollments] Fetching from Supabase for user:', user.id);
      
      // Try to fetch from Supabase with timeout
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 5000)
      );
      
      const dataPromise = supabase
        .from('enrollments')
        .select(`
          *,
          course:courses(title, description, instructor_id)
        `)
        .eq('user_id', user.id)
        .order('enrolled_at', { ascending: false });

      const { data, error } = await Promise.race([dataPromise, timeoutPromise]) as any;

      let enrollmentsToSet: Enrollment[] = [];
      if (error || !data || data.length === 0) {
        console.warn('Supabase enrollment fetch failed or empty:', error);
        // Fallback to local enrollments
        const localEnrollments = loadLocalEnrollments();
        if (localEnrollments.length > 0) {
          enrollmentsToSet = localEnrollments;
        } else {
          // Do NOT fallback to sample data for new users
          enrollmentsToSet = [];
        }
      } else {
        enrollmentsToSet = data;
      }
      setEnrollments(enrollmentsToSet);
      // Only update localStorage if changed
      const current = localStorage.getItem('enrollments');
      const next = JSON.stringify(enrollmentsToSet);
      if (current !== next) {
        localStorage.setItem('enrollments', next);
      }
    } catch (error: any) {
      console.warn('[Enrollments] Error fetching enrollments, using fallback data:', error);
      // Fallback to local enrollments only
      const localEnrollments = loadLocalEnrollments();
      let fallbackEnrollments: Enrollment[] = [];
      if (localEnrollments.length > 0) {
        fallbackEnrollments = localEnrollments;
        console.log('[Enrollments] Using local enrollments as fallback:', fallbackEnrollments);
      } else {
        // Do NOT fallback to sample data for new users
        fallbackEnrollments = [];
        console.log('[Enrollments] No enrollments for user, not using sample data.');
      }
      // Only set enrollments and update localStorage if changed
      const currentState = JSON.stringify(enrollments);
      const nextState = JSON.stringify(fallbackEnrollments);
      if (currentState !== nextState) {
        setEnrollments(fallbackEnrollments);
        console.log('[Enrollments] Set enrollments to fallback:', fallbackEnrollments);
      }
      const current = localStorage.getItem('enrollments');
      if (current !== nextState) {
        localStorage.setItem('enrollments', nextState);
        console.log('[Enrollments] Updated localStorage with fallback.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Debounced storage event handler
  useEffect(() => {
    let debounceTimeout: NodeJS.Timeout | null = null;
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'enrollments') {
        if (debounceTimeout) clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          console.log('[Enrollments] Storage changed, reloading enrollments');
          // Only reload if not already fetched for this user
          if (user && hasFetched.current !== user.id) {
            fetchEnrollments();
          }
        }, 300);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      if (debounceTimeout) clearTimeout(debounceTimeout);
    };
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchEnrollments();
    } else {
      setLoading(false);
      hasFetched.current = null;
      console.log('[Enrollments] No user, cleared hasFetched.');
    }
  }, [user]);

  return {
    enrollments,
    loading,
    refetch: fetchEnrollments
  };
};
