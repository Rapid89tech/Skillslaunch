import { useState, useEffect, useContext, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { AuthContext } from '@/contexts/AuthContext';
import { AuthContextType } from '@/types/auth';
import { useAuthOperations } from './useAuthOperations';
import { useProfileData } from './useProfileData';
import { useNavigate } from 'react-router-dom';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileReady, setProfileReady] = useState(false);
  const navigate = useNavigate();
  
  const { profile, fetchProfile, clearProfile } = useProfileData();
  const authOperations = useAuthOperations();

  useEffect(() => {
    console.log('Setting up auth state listener');
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.email);
        setSession(session);
        setUser(session?.user ?? null);
        // Ensure session is attached for RLS
        if (session) {
          supabase.auth.setSession(session);
        }
        
        if (session?.user) {
          console.log('User authenticated, fetching profile');
          setTimeout(async () => {
            await fetchProfile(session.user.id);
            setProfileReady(true);
          }, 0);
        } else if (event === 'SIGNED_OUT') {
          console.log('User not authenticated, clearing profile');
          clearProfile();
          setProfileReady(false);
          // Only redirect to home if we're on protected pages and it's an explicit sign out
          const currentPath = window.location.pathname;
          if (currentPath.includes('/dashboard')) {
            console.log('Redirecting to home after sign out (SPA navigation)');
            navigate('/');
          }
        }
        // Set loading to false after processing auth state
        setLoading(false);
      }
    );

    // Check for existing session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session) {
        supabase.auth.setSession(session);
      }
      if (session?.user) {
        fetchProfile(session.user.id);
        setProfileReady(true);
      } else {
        setProfileReady(false);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Check approval status and redirect if needed
  useEffect(() => {
    if (profile && !loading && profileReady) {
      console.log('Profile loaded, checking approval status:', profile.approval_status, 'approved:', profile.approved);
      
      // If user is not approved and not an admin, redirect to approval pending page
      if (!profile.approved && profile.role !== 'admin' && profile.approval_status !== 'approved') {
        console.log('User not approved, redirecting to approval pending page');
        navigate('/approval-pending');
        return;
      }
      
      // If user is approved but on approval pending page, redirect to dashboard
      if (profile.approved && window.location.pathname === '/approval-pending') {
        console.log('User approved, redirecting to dashboard');
        navigate('/dashboard');
        return;
      }
    }
  }, [profile, loading, profileReady, navigate]);

  // Refresh profile periodically to check for approval status changes
  useEffect(() => {
    if (user && profile) {
      const interval = setInterval(async () => {
        console.log('Refreshing profile to check approval status...');
        await fetchProfile(user.id);
      }, 30000); // Check every 30 seconds

      return () => clearInterval(interval);
    }
  }, [user, profile, fetchProfile]);

  const handleSignUp = async (email: string, password: string, firstName: string, lastName: string, role: string) => {
    setLoading(true);
    try {
      console.log('Handling signup for role:', role);
      await authOperations.signUp(email, password, firstName, lastName, role);
    } catch (error) {
      console.error('Signup failed:', error);
      setLoading(false);
      throw error;
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log('Handling signin');
      await authOperations.signIn(email, password);
    } catch (error) {
      console.error('Signin failed:', error);
      setLoading(false);
      throw error;
    }
  };

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      clearProfile();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const refreshProfile = async () => {
    if (user) {
      console.log('Manually refreshing profile...');
      await fetchProfile(user.id);
    }
  };

  const value: AuthContextType = {
    user,
    profile,
    session,
    loading,
    profileReady,
    signUp: handleSignUp,
    signIn: handleSignIn,
    signOut: handleSignOut,
    resetPassword: authOperations.resetPassword,
    refreshProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
