import { useState, useCallback, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Profile } from '@/types/auth';
import { toast } from '@/components/ui/use-toast';

export const useUsers = () => {
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );
      
      const fetchPromise = supabase
        .from('profiles')
        .select('*, approved, approval_status')
        .order('created_at', { ascending: false });

      const { data, error } = await Promise.race([fetchPromise, timeoutPromise]) as any;

      if (error) throw error;
      setUsers((data as Profile[]) || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      // Set empty array on error to prevent infinite loading
      setUsers([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(async (userData: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role: string;
    contactNumber?: string;
  }) => {
    try {
      // Create user in auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            first_name: userData.first_name,
            last_name: userData.last_name,
            role: userData.role,
            contactNumber: userData.contactNumber || ''
          }
        }
      });

      if (authError) throw authError;

      if (authData.user) {
        // Create profile manually if needed
        const { error: profileError } = await supabase
          .from('profiles')
          .upsert({
            id: authData.user.id,
            email: userData.email,
            first_name: userData.first_name,
            last_name: userData.last_name,
            role: userData.role,
            contactNumber: userData.contactNumber || ''
          });

        if (profileError) throw profileError;

        // Refresh users list
        await fetchUsers();
      }
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }, [fetchUsers]);

  const updateUser = useCallback(async (userId: string, userData: Partial<Profile>) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update(userData)
        .eq('id', userId);

      if (error) throw error;
      await fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }, [fetchUsers]);

  const deleteUser = useCallback(async (userId: string) => {
    try {
      // Fetch user to check if already deleted
      const { data: user, error: fetchError } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .single();
      if (fetchError) throw fetchError;
      if (!user) throw new Error('User already deleted.');
      const { error: profileError } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId);
      if (profileError) throw profileError;
      // @ts-ignore: user_audit is a custom table not in generated types
      await supabase.from('user_audit').insert({ user_id: userId, action: 'delete', timestamp: new Date().toISOString() });
      await fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }, [fetchUsers]);

  const approveUser = useCallback(async (userId: string) => {
    try {
      // Fetch user to check current status
      const { data: user, error: fetchError } = await supabase
        .from('profiles')
        .select('approved, approval_status')
        .eq('id', userId)
        .single();
      if (fetchError) throw fetchError;
      if (user?.approved) throw new Error('User is already approved.');
      
      // Update approval status
      const { error } = await supabase
        .from('profiles')
        .update({ approved: true, approval_status: 'approved' })
        .eq('id', userId);
      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      // Log the approval action
      await supabase.from('user_audit').insert({ 
        user_id: userId, 
        action: 'approve', 
        timestamp: new Date().toISOString() 
      });
      
      // Refresh the users list
      await fetchUsers();
    } catch (error) {
      console.error('Error approving user:', error);
      toast({ title: 'Error', description: error.message || 'Failed to approve user.', variant: 'destructive' });
      throw error;
    }
  }, [fetchUsers]);

  // Remove this problematic useEffect that was causing infinite loops

  return {
    users,
    loading,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
    approveUser
  };
};

// NOTE: You must create a 'user_audit' table in Supabase with columns: user_id (string), action (string), timestamp (timestamp).