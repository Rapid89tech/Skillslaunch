import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Users, BookOpen, RefreshCw, CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';

const SimpleAdminDashboard: React.FC = () => {
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'enrollments' | 'users'>('enrollments');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchedRef = useRef(false);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFrom, setDateFrom] = useState<Date | undefined>(undefined);
  const [dateTo, setDateTo] = useState<Date | undefined>(undefined);

  const fetchData = async () => {
    // Prevent duplicate fetches
    if (fetchedRef.current && dataLoaded) return;
    
    setLoading(true);
    setError(null);

    console.log('🔄 Admin Dashboard: Fetching data...');

    try {
      // Fetch enrollments directly - don't call getUser() as it hangs
      const { data: enrollData, error: enrollError } = await supabase
        .from('enrollments')
        .select('*')
        .limit(100);

      console.log('📊 Enrollments result:', enrollData?.length, enrollError);
      
      if (enrollError) {
        console.error('❌ Enrollment error:', enrollError);
        setError(`Failed to load enrollments: ${enrollError.message}`);
      } else {
        console.log('✅ Enrollments loaded:', enrollData?.length);
        setEnrollments(enrollData || []);
      }

      // Fetch profiles
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .limit(100);

      console.log('👥 Profiles result:', profileData?.length, profileError);

      if (profileError) {
        console.error('❌ Profile error:', profileError);
        setError(`Failed to load profiles: ${profileError.message}`);
      } else {
        console.log('✅ Profiles loaded:', profileData?.length);
        const userData = profileData || [];
        setUsers(userData);
        setFilteredUsers(userData);
      }

      setDataLoaded(true);
      fetchedRef.current = true;
    } catch (err: any) {
      console.error('❌ Fetch error:', err);
      setError(err.message || 'Failed to load data');
      setDataLoaded(true);
    } finally {
      setLoading(false);
    }
  };

  // Filter users based on search query and date range
  useEffect(() => {
    let filtered = [...users];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(user => {
        const email = (user.email || '').toLowerCase();
        const firstName = (user.first_name || '').toLowerCase();
        const lastName = (user.last_name || '').toLowerCase();
        const fullName = `${firstName} ${lastName}`.trim();
        
        return email.includes(query) || fullName.includes(query);
      });
    }

    // Apply date range filter
    if (dateFrom) {
      filtered = filtered.filter(user => {
        if (!user.created_at) return false;
        const userDate = new Date(user.created_at);
        return userDate >= dateFrom;
      });
    }

    if (dateTo) {
      filtered = filtered.filter(user => {
        if (!user.created_at) return false;
        const userDate = new Date(user.created_at);
        // Set time to end of day for dateTo
        const endOfDay = new Date(dateTo);
        endOfDay.setHours(23, 59, 59, 999);
        return userDate <= endOfDay;
      });
    }

    setFilteredUsers(filtered);
  }, [users, searchQuery, dateFrom, dateTo]);

  const clearFilters = () => {
    setSearchQuery('');
    setDateFrom(undefined);
    setDateTo(undefined);
  };

  useEffect(() => {
    console.log('🚀 SimpleAdminDashboard mounted');
    
    // Small delay to ensure auth is ready
    const timer = setTimeout(() => {
      console.log('⏰ Timer fired, calling fetchData');
      fetchData();
    }, 500);
    
    return () => {
      console.log('🔚 SimpleAdminDashboard unmounting');
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Manage enrollments and users</p>
          </div>
          <Button onClick={fetchData} disabled={loading} className="flex items-center gap-2">
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Loading...' : 'Refresh'}
          </Button>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Enrollments</p>
                  <p className="text-3xl font-bold text-gray-900">{enrollments.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">{users.length}</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
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
                  : 'border-transparent text-gray-500'
              }`}
            >
              Enrollments ({enrollments.length})
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'users'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Users ({users.length})
            </button>
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'enrollments' && (
          <Card>
            <CardHeader>
              <CardTitle>Enrollments</CardTitle>
            </CardHeader>
            <CardContent>
              {enrollments.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  {dataLoaded ? 'No enrollments found' : 'Loading...'}
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {enrollments.map((e) => (
                        <tr key={e.id}>
                          <td className="px-4 py-3 text-sm">{e.user_email || 'N/A'}</td>
                          <td className="px-4 py-3 text-sm">{e.course_title || e.course_id}</td>
                          <td className="px-4 py-3">
                            <Badge>{e.status || 'active'}</Badge>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500">
                            {e.enrolled_at ? new Date(e.enrolled_at).toLocaleDateString() : 'N/A'}
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

        {activeTab === 'users' && (
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Filter Section */}
              <div className="mb-6 space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search Input */}
                  <div className="flex-1">
                    <Input
                      placeholder="Search by email or name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* Date From */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full md:w-[200px] justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateFrom ? format(dateFrom, 'PPP') : 'From date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateFrom}
                        onSelect={setDateFrom}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  {/* Date To */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full md:w-[200px] justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateTo ? format(dateTo, 'PPP') : 'To date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={dateTo}
                        onSelect={setDateTo}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  {/* Clear Filters Button */}
                  {(searchQuery || dateFrom || dateTo) && (
                    <Button
                      variant="ghost"
                      onClick={clearFilters}
                      className="w-full md:w-auto"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Clear
                    </Button>
                  )}
                </div>

                {/* Filter Summary */}
                {(searchQuery || dateFrom || dateTo) && (
                  <div className="text-sm text-gray-600">
                    Showing {filteredUsers.length} of {users.length} users
                  </div>
                )}
              </div>

              {/* Users Table */}
              {users.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  {dataLoaded ? 'No users found' : 'Loading...'}
                </p>
              ) : filteredUsers.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No users match the current filters
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Registered</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredUsers.map((u) => (
                        <tr key={u.id}>
                          <td className="px-4 py-3 text-sm">{u.email || 'N/A'}</td>
                          <td className="px-4 py-3 text-sm">
                            {u.first_name || u.last_name 
                              ? `${u.first_name || ''} ${u.last_name || ''}`.trim()
                              : 'N/A'}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {u.contact_number || 'Not provided'}
                          </td>
                          <td className="px-4 py-3">
                            <Badge>{u.role || 'student'}</Badge>
                          </td>
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

export default SimpleAdminDashboard;
