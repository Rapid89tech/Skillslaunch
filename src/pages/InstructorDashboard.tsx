import React, { useState } from 'react';
import { useAuth } from '@/hooks/AuthContext';
import { useEnrollments } from '@/hooks/useEnrollments';
import { useCourses } from '@/hooks/useCourses';
import InstructorDashboard from '@/components/dashboard/InstructorDashboard';
import DashboardSkeleton from '@/components/skeletons/DashboardSkeleton';

const InstructorDashboardPage = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const { enrollments, loading: enrollmentsLoading } = useEnrollments();
  const { courses, loading: coursesLoading } = useCourses();
  const [renderError, setRenderError] = useState<string | null>(null);

  // Error boundary for rendering errors
  React.useEffect(() => {
    window.onerror = (msg, url, line, col, error) => {
      setRenderError(error ? error.toString() : String(msg));
      return false;
    };
    return () => {
      window.onerror = null;
    };
  }, []);

  if (renderError) {
    return (
      <div style={{ color: 'red', padding: 32, fontWeight: 'bold', fontSize: 18 }}>
        Dashboard Error: {renderError}
      </div>
    );
  }

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
    first_name: 'Instructor',
    last_name: 'User',
    role: 'instructor',
    approved: true,
    approval_status: 'approved'
  };

  // Wait for enrollments/courses to load before showing content
  if (enrollmentsLoading || coursesLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <InstructorDashboard
      profile={defaultProfile}
      enrollments={enrollments || []}
      courses={courses || []}
      userId={user.id}
    />
  );
};

export default InstructorDashboardPage; 