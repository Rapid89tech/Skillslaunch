import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useEnrollments } from '@/hooks/useEnrollments';
import { useCourses } from '@/hooks/useCourses';
import { useToast } from '@/hooks/use-toast';
import DashboardSkeleton from '@/components/skeletons/DashboardSkeleton';
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import AdminInstructorDashboard from '@/components/dashboard/AdminInstructorDashboard';

const Dashboard = () => {
  const { user, profile, loading: authLoading, profileReady } = useAuth();
  const { enrollments, loading: enrollmentsLoading } = useEnrollments();
  const { courses, loading: coursesLoading } = useCourses();
  const { toast } = useToast();

  console.log('Dashboard - authLoading:', authLoading, 'enrollmentsLoading:', enrollmentsLoading, 'coursesLoading:', coursesLoading);
  console.log('Dashboard - user:', !!user, 'profile role:', profile?.role);

  // Show loading only while auth or profile is loading
  if (authLoading || !profileReady) {
    console.log('Dashboard - showing skeleton for auth/profile loading');
    return <DashboardSkeleton />;
  }

  // If no user after auth loading is complete, this shouldn't happen due to ProtectedRoute
  if (!user) {
    console.log('Dashboard - no user found');
    return null;
  }

  // If we have user but no profile yet, show loading with timeout
  if (!profile) {
    console.log('Dashboard - waiting for profile data');
    // Add a timeout to prevent infinite loading
    setTimeout(() => {
      if (!profile) {
        console.warn('Profile loading timeout, this might indicate an RLS issue');
      }
    }, 5000);
    return <DashboardSkeleton />;
  }

  console.log('Dashboard - rendering main content for role:', profile.role);

  // Render based on user role
  if (profile.role === 'student') {
    // For students, wait for enrollments to load before showing content
    if (enrollmentsLoading) {
      console.log('Dashboard - waiting for enrollments data');
      return <DashboardSkeleton />;
    }
    
    return (
      <StudentDashboard 
        profile={profile}
        enrollments={enrollments}
        courses={courses}
        userId={user.id}
      />
    );
  }

  // For instructors/admins, wait for courses to load before showing content
  if (coursesLoading) {
    console.log('Dashboard - waiting for courses data');
    return <DashboardSkeleton />;
  }

  // Admin/Instructor dashboard
  return (
    <AdminInstructorDashboard 
      profile={profile}
      enrollments={enrollments}
      courses={courses}
      userId={user.id}
    />
  );
};

export default Dashboard;
