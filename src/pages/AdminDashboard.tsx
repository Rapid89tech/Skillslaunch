import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useEnrollments } from '@/hooks/useEnrollments';
import { useCourses } from '@/hooks/useCourses';
import AdminDashboard from '@/components/admin/AdminDashboard';
import DashboardSkeleton from '@/components/skeletons/DashboardSkeleton';

const AdminDashboardPage = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const { enrollments, loading: enrollmentsLoading } = useEnrollments();
  const { courses, loading: coursesLoading } = useCourses();

  if (authLoading || enrollmentsLoading || coursesLoading) {
    return <DashboardSkeleton />;
  }

  if (!user || !profile) {
    return null;
  }

  return (
    <AdminDashboard 
      profile={profile}
      enrollments={enrollments}
      courses={courses}
      userId={user.id}
    />
  );
};

export default AdminDashboardPage;