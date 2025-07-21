import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Users, Search, Trash2, UserCheck, UserX, Loader2, Eye } from 'lucide-react';
import { Profile } from '@/types/auth';
import { useUsers } from '@/hooks/useUsers';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// Helper for avatar/initials
const getInitials = (user: Profile) => {
  if (user.first_name && user.last_name) return user.first_name[0] + user.last_name[0];
  if (user.first_name) return user.first_name[0];
  return user.email[0];
};

// Status badge
const StatusBadge = ({ approved, status }: { approved?: boolean; status?: string }) => {
  const isApproved = approved || status === 'approved';
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
      isApproved 
        ? 'bg-green-100 text-green-800' 
        : 'bg-yellow-100 text-yellow-800'
    }`}>
      {isApproved ? 'Approved' : 'Pending'}
    </span>
  );
};

// User Details Modal
const UserDetailsModal = ({ user, onClose }: { user: Profile | null; onClose: () => void }) => {
  if (!user) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative animate-fade-in">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700" onClick={onClose} aria-label="Close">×</button>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
            {getInitials(user)}
          </div>
          <div>
            <div className="font-bold text-lg">{user.first_name} {user.last_name}</div>
            <div className="text-sm text-muted-foreground">{user.email}</div>
            <StatusBadge approved={user.approved} status={user.approval_status} />
          </div>
        </div>
        <div className="mb-2"><b>Role:</b> {user.role}</div>
        <div className="mb-2"><b>Registered:</b> {new Date(user.created_at).toLocaleDateString()}</div>
        <div className="mb-2"><b>Last Login:</b> <span className="text-muted-foreground">(not tracked)</span></div>
        <div className="mb-2"><b>Enrollments:</b> <span className="text-muted-foreground">(not tracked)</span></div>
        <div className="mb-2"><b>Contact:</b> {user.contactNumber || <span className="text-muted-foreground">N/A</span>}</div>
      </div>
    </div>
  );
};

const PAGE_SIZE = 10;

const AdminDashboard = () => {
  const { users: fetchedUsers, loading: usersLoading, fetchUsers, updateUser, deleteUser, approveUser } = useUsers();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState<Profile[]>([]);
  const [selectedUser, setSelectedUser] = useState<Profile | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'name' | 'email' | 'role' | 'status' | 'created_at'>('created_at');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(1);

  useEffect(() => { fetchUsers(); }, [fetchUsers]);

  // Only set users from fetchedUsers on initial load
  useEffect(() => {
    setUsers(fetchedUsers);
    // eslint-disable-next-line
  }, []);

  // Filtering
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.last_name?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Sorting
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    let valA, valB;
    switch (sortBy) {
      case 'name': valA = (a.first_name || '') + (a.last_name || ''); valB = (b.first_name || '') + (b.last_name || ''); break;
      case 'email': valA = a.email; valB = b.email; break;
      case 'role': valA = a.role; valB = b.role; break;
      case 'status': valA = a.approval_status || (a.approved ? 'approved' : 'pending'); valB = b.approval_status || (b.approved ? 'approved' : 'pending'); break;
      case 'created_at': valA = a.created_at; valB = b.created_at; break;
      default: valA = a.created_at; valB = b.created_at;
    }
    if (valA < valB) return sortDir === 'asc' ? -1 : 1;
    if (valA > valB) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedUsers.length / PAGE_SIZE);
  const pagedUsers = sortedUsers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Bulk actions
  const handleBulkApprove = async () => {
    for (const id of selectedIds) {
      await approveUser(id);
    }
    toast({ title: 'Users approved', description: `${selectedIds.length} users approved.` });
    setSelectedIds([]);
  };
  const handleBulkDelete = async () => {
    if (!window.confirm(`Delete ${selectedIds.length} users?`)) return;
    for (const id of selectedIds) {
      await deleteUser(id);
    }
    toast({ title: 'Users deleted', description: `${selectedIds.length} users deleted.` });
    setSelectedIds([]);
  };

  // Single actions
  const handleApprove = async (user: Profile) => {
    // Optimistically update UI
    setUsers(prev => prev.map(u => u.id === user.id ? { ...u, approved: true, approval_status: 'approved' } : u));
    try {
      await approveUser(user.id);
      toast({ 
        title: 'User approved', 
        description: `${user.first_name} ${user.last_name} has been approved and can now access the system.` 
      });
      // Refresh the users list to get the latest data
      await fetchUsers();
    } catch (error) {
      // Revert optimistic update on error
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, approved: false, approval_status: 'pending' } : u));
      console.error('Error approving user:', error);
    }
  };

  const handleReject = async (user: Profile) => {
    // Optimistically update UI
    setUsers(prev => prev.map(u => u.id === user.id ? { ...u, approved: false, approval_status: 'pending' } : u));
    try {
      await updateUser(user.id, { approved: false, approval_status: 'pending' });
      toast({ title: 'User rejected', description: `${user.first_name} ${user.last_name} has been rejected.` });
      // Refresh the users list to get the latest data
      await fetchUsers();
    } catch (error) {
      // Revert optimistic update on error
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, approved: true, approval_status: 'approved' } : u));
      console.error('Error rejecting user:', error);
    }
  };

  const handleDelete = async (user: Profile) => {
    if (!window.confirm(`Delete user ${user.email}?`)) return;
    try {
      await deleteUser(user.id);
      toast({ title: 'User deleted', description: `${user.first_name} ${user.last_name} has been deleted.` });
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Accessibility: handle keyboard navigation for modal
  useEffect(() => {
    if (!selectedUser) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedUser(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedUser]);

  // Add a manual refresh button
  const handleRefresh = () => {
    fetchUsers();
    setUsers(fetchedUsers);
  };

  return (
    <div className="container mx-auto px-2 py-8 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
        <Button size="sm" variant="outline" onClick={handleRefresh} aria-label="Refresh user list">Refresh</Button>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Registered Users
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
            <div className="flex-1 relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="pl-10"
                aria-label="Search users"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button size="sm" variant="outline" disabled={selectedIds.length === 0} onClick={handleBulkApprove} aria-label="Bulk approve">
                Approve Selected
              </Button>
              <Button size="sm" variant="destructive" disabled={selectedIds.length === 0} onClick={handleBulkDelete} aria-label="Bulk delete">
                Delete Selected
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg shadow border bg-white">
            {usersLoading ? (
              <div className="flex justify-center items-center py-12"><Loader2 className="animate-spin h-8 w-8 text-primary" /></div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="py-3 px-4 text-left"><input type="checkbox" aria-label="Select all users" checked={selectedIds.length === pagedUsers.length && pagedUsers.length > 0} onChange={e => setSelectedIds(e.target.checked ? pagedUsers.map(u => u.id) : [])} /></th>
                    <th className="py-3 px-4 text-left cursor-pointer" onClick={() => { setSortBy('name'); setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }}>Name</th>
                    <th className="py-3 px-4 text-left cursor-pointer" onClick={() => { setSortBy('email'); setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }}>Email</th>
                    <th className="py-3 px-4 text-left cursor-pointer" onClick={() => { setSortBy('role'); setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }}>Role</th>
                    <th className="py-3 px-4 text-left cursor-pointer" onClick={() => { setSortBy('status'); setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }}>Status</th>
                    <th className="py-3 px-4 text-left cursor-pointer" onClick={() => { setSortBy('created_at'); setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); }}>Registered</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedUsers.map(user => (
                    <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4"><input type="checkbox" aria-label={`Select user ${user.email}`} checked={selectedIds.includes(user.id)} onChange={e => setSelectedIds(e.target.checked ? [...selectedIds, user.id] : selectedIds.filter(id => id !== user.id))} /></td>
                      <td className="py-3 px-4 font-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                            {getInitials(user)}
                          </div>
                          <span className="truncate">{user.first_name} {user.last_name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">
                        <Badge variant={user.role === 'admin' ? 'destructive' : user.role === 'instructor' ? 'default' : 'secondary'}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="py-3 px-4"><StatusBadge approved={user.approved} status={user.approval_status} /></td>
                      <td className="py-3 px-4">{new Date(user.created_at).toLocaleDateString()}</td>
                      <td className="py-3 px-4 text-right flex gap-2 justify-end">
                        <Button size="icon" variant="ghost" aria-label="View details" onClick={() => setSelectedUser(user)}><Eye className="h-4 w-4" /></Button>
                        {!user.approved && (
                          <Button size="sm" className="bg-green-500 text-white" onClick={() => handleApprove(user)} aria-label="Approve user">Approve</Button>
                        )}
                        <Button size="icon" variant="outline" className="text-destructive" onClick={() => handleDelete(user)} aria-label="Delete user"><Trash2 className="h-4 w-4" /></Button>
                      </td>
                    </tr>
                  ))}
                  {pagedUsers.length === 0 && (
                    <tr>
                      <td colSpan={7} className="py-6 text-center text-muted-foreground">No users found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-muted-foreground">Page {page} of {totalPages}</div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" disabled={page === 1} onClick={() => setPage(page - 1)} aria-label="Previous page">Prev</Button>
              <Button size="sm" variant="outline" disabled={page === totalPages} onClick={() => setPage(page + 1)} aria-label="Next page">Next</Button>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* User Details Modal */}
      {selectedUser && <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
};

export default AdminDashboard;