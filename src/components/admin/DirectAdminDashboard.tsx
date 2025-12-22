import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Enrollment {
  id: string;
  user_id: string;
  user_email: string;
  course_id: string;
  course_title: string;
  status: string;
  enrolled_at: string;
}

interface Profile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
}

const DirectAdminDashboard: React.FC = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'enrollments' | 'users'>('enrollments');
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Fetch enrollments with a 15 second timeout
      const enrollPromise = supabase
        .from('enrollments')
        .select('*')
        .order('enrolled_at', { ascending: false })
        .limit(100);

      const profilePromise = supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      const [enrollResult, profileResult] = await Promise.all([
        enrollPromise,
        profilePromise
      ]);

      if (enrollResult.error) {
        console.error('Enrollment error:', enrollResult.error);
        setError(`Enrollments: ${enrollResult.error.message}`);
      } else {
        setEnrollments(enrollResult.data || []);
      }

      if (profileResult.error) {
        console.error('Profile error:', profileResult.error);
        setError(prev => prev ? `${prev}, Profiles: ${profileResult.error.message}` : `Profiles: ${profileResult.error.message}`);
      } else {
        setUsers(profileResult.data || []);
      }
    } catch (err: any) {
      console.error('Fetch error:', err);
      setError(err.message || 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleApprove = async (enrollmentId: string) => {
    try {
      const { error } = await supabase
        .from('enrollments')
        .update({ status: 'approved' })
        .eq('id', enrollmentId);

      if (error) throw error;

      setEnrollments(prev => 
        prev.map(e => e.id === enrollmentId ? { ...e, status: 'approved' } : e)
      );

      toast({ title: 'Enrollment approved', description: 'User can now access the course.' });
    } catch (err: any) {
      toast({ title: 'Error', description: err.message, variant: 'destructive' });
    }
  };

  const handleReject = async (enrollmentId: string) => {
    try {
      const { error } = await supabase
        .from('enrollments')
        .update({ status: 'rejected' })
        .eq('id', enrollmentId);

      if (error) throw error;

      setEnrollments(prev => 
        prev.map(e => e.id === enrollmentId ? { ...e, status: 'rejected' } : e)
      );

      toast({ title: 'Enrollment rejected', description: 'User enrollment has been rejected.' });
    } catch (err: any) {
      toast({ title: 'Error', description: err.message, variant: 'destructive' });
    }
  };

  const pendingCount = enrollments.filter(e => e.status === 'pending').length;
  const approvedCount = enrollments.filter(e => e.status === 'approved').length;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage enrollments and users</p>
          </div>
          <Button onClick={fetchData} disabled={loading} className="flex items-center gap-2">
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Loading...' : 'Refresh'}
          </Button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            <strong>Error:</strong> {error}
            <p className="text-sm mt-2">Please run the EMERGENCY-FIX-RLS.sql script in Supabase SQL Editor.</p>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl md:text-3xl font-bold">{users.length}</p>
                </div>
                <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Total Enrollments</p>
                  <p className="text-2xl md:text-3xl font-bold">{enrollments.length}</p>
                </div>
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl md:text-3xl font-bold text-yellow-600">{pendingCount}</p>
                </div>
                <RefreshCw className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs md:text-sm font-medium text-gray-600">Approved</p>
                  <p className="text-2xl md:text-3xl font-bold text-green-600">{approvedCount}</p>
                </div>
                <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('enrollments')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'enrollments'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Enrollments ({enrollments.length})
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Users ({users.length})
            </button>
          </nav>
        </div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin mx-auto text-blue-500 mb-4" />
            <p className="text-gray-600">Loading data...</p>
          </div>
        ) : activeTab === 'enrollments' ? (
          <Card>
            <CardHeader>
              <CardTitle>Enrollments</CardTitle>
            </CardHeader>
            <CardContent>
              {enrollments.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No enrollments found</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {enrollments.map((e) => (
                        <tr key={e.id}>
                          <td className="px-4 py-3 text-sm">{e.user_email || 'N/A'}</td>
                          <td className="px-4 py-3 text-sm">{e.course_title || e.course_id}</td>
                          <td className="px-4 py-3">
                            <Badge className={
                              e.status === 'approved' ? 'bg-green-100 text-green-800' :
                              e.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }>
                              {e.status || 'pending'}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            {e.enrolled_at ? new Date(e.enrolled_at).toLocaleDateString() : 'N/A'}
                          </td>
                          <td className="px-4 py-3">
                            {e.status === 'pending' && (
                              <div className="flex gap-2">
                                <Button size="sm" onClick={() => handleApprove(e.id)} className="bg-green-500 hover:bg-green-600">
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                                <Button size="sm" variant="destructive" onClick={() => handleReject(e.id)}>
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              {users.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No users found</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((u) => (
                        <tr key={u.id}>
                          <td className="px-4 py-3 text-sm">{u.email || 'N/A'}</td>
                          <td className="px-4 py-3 text-sm">{`${u.first_name || ''} ${u.last_name || ''}`.trim() || 'N/A'}</td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            {u.created_at ? new Date(u.created_at).toLocaleDateString() : 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DirectAdminDashboard;
