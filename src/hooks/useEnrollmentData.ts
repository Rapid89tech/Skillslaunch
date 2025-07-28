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
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const loadEnrollments = async () => {
      if (!user) {
        setEnrollments([]);
        setLoading(false);
        return;
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
        setEnrollments(enrollments || []);
      } catch (error) {
        console.error('Error loading enrollments:', error);
        setEnrollments([]);
      } finally {
        setLoading(false);
      }
    };

    // Add a timeout to prevent infinite loading
    const timeoutId = setTimeout(() => {
      if (loading) {
        setLoading(false);
      }
    }, 10000); // 10 second timeout

    loadEnrollments();

    return () => clearTimeout(timeoutId);
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
      
      setEnrollments(enrollments || []);
    } catch (error) {
      console.error('Error refetching enrollments:', error);
      setEnrollments([]);
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
