import React from 'react';
import { useAuth } from '@/hooks/AuthContext';
import AdminDashboard from '@/components/admin/AdminDashboard';
import DashboardSkeleton from '@/components/skeletons/DashboardSkeleton';

const AdminDashboardPage = () => {
  console.log('AdminDashboardPage rendering');
  const { user, profile, loading: authLoading } = useAuth();

  console.log('AdminDashboardPage state:', { authLoading, user: !!user, profile: !!profile });
  
  // Show loading while auth is loading
  if (authLoading) {
    console.log('AdminDashboardPage: Showing loading skeleton');
    return <DashboardSkeleton />;
  }

  // If no user, return null (ProtectedRoute should handle this)
  if (!user) {
    console.log('AdminDashboardPage: No user, returning null');
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

  // Admin dashboard doesn't need enrollments/courses data, so don't wait for them

  return <AdminDashboard />;
};

export default AdminDashboardPage;