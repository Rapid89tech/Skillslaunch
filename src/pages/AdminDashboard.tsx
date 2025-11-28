import React from 'react';
import { useAuth } from '@/hooks/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  // Hardcoded admin access for specific users
  const isHardcodedAdmin = user?.email === 'ericmnisi007@gmail.com' || user?.email === 'john.doe@gmail.com' || user?.email === 'maxmon@gmail.com';

  // If hardcoded admin, show simple dashboard
  if (isHardcodedAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-lg mb-4">Welcome, {user?.email}!</p>
            <p className="text-gray-600">Admin dashboard is loading...</p>
            <p className="text-sm text-gray-500 mt-4">
              If you see this message, the admin access is working correctly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/auth" replace />;
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