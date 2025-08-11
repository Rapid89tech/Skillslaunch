import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';
import { useEnrollments } from '@/hooks/useEnrollments';
import { useCourses } from '@/hooks/useCourses';
import { useToast } from '@/hooks/use-toast';
import DashboardSkeleton from '@/components/skeletons/DashboardSkeleton';
import StudentDashboard from '@/components/dashboard/StudentDashboard';
import AdminInstructorDashboard from '@/components/dashboard/AdminInstructorDashboard';
import TutorDashboard from '@/components/dashboard/TutorDashboard';
import AdminDashboardComponent from '@/components/dashboard/AdminDashboard';

const Dashboard = () => {
  const { user, loading: authLoading, profile } = useAuth();
  const { enrollments, loading: enrollmentsLoading } = useEnrollments();
  const { courses, loading: coursesLoading } = useCourses();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Show loading while auth is loading
  if (authLoading) {
    return <DashboardSkeleton />;
  }

  // If no user, return null (ProtectedRoute should handle this)
  if (!user) {
    return null;
  }

  // Create a more meaningful default profile if none exists
  const defaultProfile = profile || {
    id: user.id,
    email: user.email,
    first_name: user.user_metadata?.first_name || user.email?.split('@')[0] || 'Student',
    last_name: user.user_metadata?.last_name || '',
    role: 'student',
    approved: true,
    approval_status: 'approved'
  };

  // Wait for enrollments/courses to load before showing content
  if (enrollmentsLoading || coursesLoading) {
    return <DashboardSkeleton />;
  }

  // Role-based dashboard rendering
  if (defaultProfile.role === 'student') {
    return (
      <StudentDashboard
        profile={defaultProfile}
        enrollments={enrollments || []}
        courses={courses || []}
        userId={user.id}
      />
    );
  }
  
  if (defaultProfile.role === 'instructor') {
    return (
      <TutorDashboard
        profile={defaultProfile}
        enrollments={enrollments || []}
        courses={courses || []}
        userId={user.id}
      />
    );
  }
  
  if (defaultProfile.role === 'admin') {
    return (
      <AdminDashboardComponent
        profile={defaultProfile}
        enrollments={enrollments || []}
        courses={courses || []}
        userId={user.id}
      />
    );
  }

  // Default to student dashboard for any other case
  return (
    <StudentDashboard
      profile={defaultProfile}
      enrollments={enrollments || []}
      courses={courses || []}
      userId={user.id}
    />
  );
};

export default Dashboard;
