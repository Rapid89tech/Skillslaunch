import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import LoadingSpinner from './LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('student' | 'instructor' | 'admin')[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  console.log('ProtectedRoute - user:', !!user, 'profile:', !!profile, 'loading:', loading);

  useEffect(() => {
    // Only check auth after loading is complete
    if (!loading) {
      console.log('ProtectedRoute - auth loading complete, user:', !!user);
      
      if (!user) {
        console.log('No user found, redirecting to auth');
        navigate('/auth');
        return;
      }

      // Check approval status for non-admin users
      if (profile && profile.role !== 'admin') {
        if (!profile.approved || profile.approval_status !== 'approved') {
          console.log('User not approved, redirecting to approval pending page');
          navigate('/approval-pending');
          return;
        }
      }

      // If specific roles are required and user doesn't have the right role
      if (allowedRoles && profile && !allowedRoles.includes(profile.role)) {
        console.log('User role not allowed for this route:', profile.role, 'allowed:', allowedRoles);
        // Redirect to appropriate dashboard based on role
        const dashboardRoute = profile.role === 'instructor' ? '/instructor-dashboard' : 
                              profile.role === 'admin' ? '/admin-dashboard' : '/dashboard';
        navigate(dashboardRoute);
        return;
      }
    }
  }, [user, profile, loading, navigate, allowedRoles]);

  // Show loading spinner while auth is being determined
  if (loading) {
    console.log('ProtectedRoute - showing loading spinner');
    return <LoadingSpinner />;
  }

  // If no user after loading is complete, don't render anything (redirect will happen)
  if (!user) {
    console.log('ProtectedRoute - no user, returning null');
    return null;
  }

  // If we have a user but waiting for profile and it's needed for role checking
  if (user && !profile && allowedRoles) {
    console.log('ProtectedRoute - waiting for profile data');
    return <LoadingSpinner />;
  }

  console.log('ProtectedRoute - rendering children');
  return <>{children}</>;
};

export default ProtectedRoute;
