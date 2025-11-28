import React from 'react';
import { useAuth } from '@/hooks/AuthContext';
import { Navigate } from 'react-router-dom';
import SimpleAdminDashboard from '@/components/admin/SimpleAdminDashboard';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Hardcoded admin access for specific users - SKIP ALL OTHER CHECKS
  const isHardcodedAdmin = user?.email === 'ericmnisi007@gmail.com' || user?.email === 'john.doe@gmail.com' || user?.email === 'maxmon@gmail.com';

  // If hardcoded admin, show dashboard immediately
  if (isHardcodedAdmin) {
    return <SimpleAdminDashboard />;
  }

  // For non-hardcoded users, show access denied
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-md p-8 bg-red-50 rounded-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Access Denied</h2>
        <p className="text-gray-700 mb-4">
          You do not have permission to access the admin dashboard.
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
};

export default AdminDashboard;