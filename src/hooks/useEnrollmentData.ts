import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '@/integrations/supabase/client';

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

      // Load cached enrollments immediately
      const cachedEnrollments = localStorage.getItem(`user-enrollments-${user.id}`);
      if (cachedEnrollments) {
        try {
          const parsed = JSON.parse(cachedEnrollments);
          console.log('📦 Loading cached enrollments:', parsed);
          setEnrollments(parsed);
          setLoading(false);
        } catch (error) {
          console.warn('Error parsing cached enrollments:', error);
        }
      }

      try {
        console.log('Loading enrollments for user:', user.id);
        
        // Query Supabase for user's approved enrollments
        const { data: enrollments, error } = await supabase
          .from('enrollments')
          .select('*')
          .eq('user_id', user.id)
          .eq('status', 'approved')
          .order('enrolled_at', { ascending: false });
        
        if (error) {
          console.error('Error fetching enrollments from Supabase:', error);
          throw new Error(`Failed to fetch enrollments: ${error.message}`);
        }
        
        console.log('Found approved enrollments from Supabase:', enrollments?.length || 0);
        const enrollmentsData = enrollments || [];
        setEnrollments(enrollmentsData);
        
        // Cache the enrollments
        localStorage.setItem(`user-enrollments-${user.id}`, JSON.stringify(enrollmentsData));
        console.log('💾 Cached enrollments to localStorage');
      } catch (error) {
        console.error('Error loading enrollments:', error);
        // Don't clear enrollments if we have cached data
        if (!cachedEnrollments) {
          setEnrollments([]);
        }
      } finally {
        setLoading(false);
      }
    };

    loadEnrollments();
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
      
      // Query Supabase for user's approved enrollments
      const { data: enrollments, error } = await supabase
        .from('enrollments')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'approved')
        .order('enrolled_at', { ascending: false });
      
      if (error) {
        console.error('Error refetching enrollments from Supabase:', error);
        throw new Error(`Failed to refetch enrollments: ${error.message}`);
      }
      
      const enrollmentsData = enrollments || [];
      setEnrollments(enrollmentsData);
      
      // Cache the updated enrollments
      localStorage.setItem(`user-enrollments-${user.id}`, JSON.stringify(enrollmentsData));
      console.log('💾 Updated cached enrollments');
    } catch (error) {
      console.error('Error refetching enrollments:', error);
      // Don't clear enrollments on error, keep existing data
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
