import React from 'react';
import { useAuth } from '@/hooks/AuthContext';
import { Navigate } from 'react-router-dom';
import SimpleAdminDashboard from '@/components/admin/SimpleAdminDashboard';

const AdminDashboard: React.FC = () => {
  const { user, profile, loading } = useAuth();

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Hardcoded admin access for specific users
  const isHardcodedAdmin = user?.email === 'ericmnisi007@gmail.com' || user?.email === 'john.doe@gmail.com';

  // Redirect to home if not admin (unless hardcoded admin)
  if (!isHardcodedAdmin && profile?.role !== 'admin') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md p-8 bg-red-50 rounded-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
          <p className="text-gray-700 mb-4">
            You do not have permission to access the admin dashboard.
          </p>
          <p className="text-sm text-gray-600">
            Current role: <span className="font-semibold">{profile?.role || 'unknown'}</span>
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return <SimpleAdminDashboard />;
};

export default AdminDashboard;