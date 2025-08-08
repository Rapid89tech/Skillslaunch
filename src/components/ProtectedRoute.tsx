import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';
import LoadingSpinner from './LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: ('student' | 'instructor' | 'admin')[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { user, loading, profile } = useAuth();
  const navigate = useNavigate();
  const [shouldRender, setShouldRender] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    // Prevent multiple navigations
    if (hasNavigated) return;

    if (!loading) {
      if (!user) {
        setHasNavigated(true);
        navigate('/auth');
        return;
      }
      
      // If allowedRoles is specified and we have a profile, check role permissions
      if (allowedRoles && allowedRoles.length > 0 && profile) {
        if (!allowedRoles.includes(profile.role as any)) {
          setHasNavigated(true);
          navigate('/dashboard');
          return;
        }
      }

      // All checks passed, safe to render
      setShouldRender(true);
    }
  }, [user, loading, profile, navigate, allowedRoles, hasNavigated]);

  // Show loading spinner only during initial auth check
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <LoadingSpinner />
      </div>
    );
  }

  // Don't render anything if we're navigating away
  if (hasNavigated) {
    return null;
  }

  // Don't render until we've confirmed the user is authorized
  if (!shouldRender) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
