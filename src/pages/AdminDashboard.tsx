import React from 'react';
import { useAuth } from '@/hooks/AuthContext';
import { useEnrollments } from '@/hooks/useEnrollments';
import { useCourses } from '@/hooks/useCourses';
import AdminDashboard from '@/components/admin/AdminDashboard';
import DashboardSkeleton from '@/components/skeletons/DashboardSkeleton';

const AdminDashboardPage = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const { enrollments, loading: enrollmentsLoading } = useEnrollments();
  const { courses, loading: coursesLoading } = useCourses();

  // Show loading while auth is loading
  if (authLoading) {
    return <DashboardSkeleton />;
  }

  // If no user, return null (ProtectedRoute should handle this)
  if (!user) {
    return null;
  }

  // Create a default profile if none exists
  const defaultProfile = profile || {
    id: user.id,
    email: user.email,
    first_name: 'Admin',
    last_name: 'User',
    role: 'admin',
    approved: true,
    approval_status: 'approved'
  };

  // Wait for enrollments/courses to load before showing content
  if (enrollmentsLoading || coursesLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <AdminDashboard 
      profile={defaultProfile}
      enrollments={enrollments || []}
      courses={courses || []}
      userId={user.id}
    />
  );
};

export default AdminDashboardPage;