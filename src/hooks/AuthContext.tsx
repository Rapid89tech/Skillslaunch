import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { supabase } from '../integrations/supabase/client';
import { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  approved?: boolean;
  approval_status?: string;
}

interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string, firstName: string, lastName: string, role: string) => Promise<any>;
  signOut: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false); // Start with false to avoid gray out
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const fetchProfile = async (userId: string) => {
    try {
      console.log('🚨 FETCHING PROFILE for userId:', userId);
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.log('🚨 FETCH PROFILE ERROR:', error.code, error.message);
        return null;
      }
      
      console.log('🚨 PROFILE FETCHED SUCCESSFULLY:', data);
      return data;
    } catch (err) {
      console.error('🚨 FETCH PROFILE CATCH ERROR:', err);
      return null;
    }
  };

  const createProfile = async (user: any) => {
    try {
      console.log('🚨 CREATING PROFILE for user:', user.email);
      const { data, error } = await supabase
        .from('profiles')
        .insert({
          id: user.id,
          email: user.email,
          first_name: user.user_metadata?.first_name || 'Student',
          last_name: user.user_metadata?.last_name || 'User',
          role: user.user_metadata?.role || 'student',
          approved: true,
          approval_status: 'approved'
        })
        .select()
        .single();

      if (error) {
        console.error('🚨 CREATE PROFILE ERROR:', error);
        return null;
      }

      console.log('🚨 PROFILE CREATED SUCCESSFULLY:', data);
      return data;
    } catch (err) {
      console.error('🚨 CREATE PROFILE CATCH ERROR:', err);
      return null;
    }
  };

  useEffect(() => {
    let mounted = true;

    const getUser = async () => {
      try {
        // Get current session immediately
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!mounted) return;
        
                 // Set user immediately if session exists
         if (session?.user) {
           console.log('🚨 Session found, user:', session.user.email);
           setUser(session.user);
           setLoading(false); // Stop loading immediately
           setIsInitialized(true);
           
           // Try to get profile from cache first
           const cachedProfile = localStorage.getItem(`user-profile-${session.user.id}`);
           if (cachedProfile) {
             try {
               const profileData = JSON.parse(cachedProfile);
               console.log('📦 Loading cached profile:', profileData);
               setProfile(profileData);
             } catch (error) {
               console.warn('Error parsing cached profile:', error);
             }
           }
          
          // Fetch fresh profile data
          console.log('🚨 Fetching fresh profile...');
          let profileData = await fetchProfile(session.user.id);
          
          // If NO profile found, force create one
          if (!profileData) {
            console.log('🚨 NO PROFILE FOUND - FORCE CREATING...');
            profileData = await createProfile(session.user);
          }
          
          if (mounted && profileData) {
            console.log('🚨 Final profile data:', profileData);
            setProfile(profileData);
            
            // Cache the profile
            localStorage.setItem(`user-profile-${session.user.id}`, JSON.stringify(profileData));
          }
        } else {
          console.log('🚨 No session found');
        }
      } catch (error) {
        console.error('🚨 Error in getUser:', error);
      } finally {
        if (mounted) {
          setIsInitialized(true);
        }
      }
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;
      
      console.log('🚨 Auth state change event:', event, session?.user?.email);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        console.log('🚨 Auth state change - getting profile...');
        let profileData = await fetchProfile(session.user.id);
        
        // If NO profile found, force create one
        if (!profileData) {
          console.log('🚨 AUTH CHANGE - NO PROFILE FOUND - FORCE CREATING...');
          profileData = await createProfile(session.user);
        }
        
        if (mounted && profileData) {
          console.log('🚨 Auth change final profile data:', profileData);
          setProfile(profileData);
          
          // Cache the profile
          localStorage.setItem(`user-profile-${session.user.id}`, JSON.stringify(profileData));
        }
      } else {
        if (mounted) {
          setProfile(null);
          // Clear cached profile on logout
          const keys = Object.keys(localStorage);
          keys.forEach(key => {
            if (key.startsWith('user-profile-')) {
              localStorage.removeItem(key);
            }
          });
        }
      }
      
      if (mounted) {
        setIsInitialized(true);
      }
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      
      const { data, error } = await supabase.auth.signInWithPassword({ 
        email, 
        password 
      });
      
      if (error) {
        setError(error.message);
        throw error;
      }
      
      return data;
    } catch (err: any) {
      setError(err.message || 'Login failed');
      throw err;
    }
  };

  const signUp = async (email: string, password: string, firstName: string, lastName: string, role: string) => {
    try {
      setError(null);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            role: role
          }
        }
      });
      
      if (error) {
        setError(error.message);
        throw error;
      }
      
      return data;
    } catch (err: any) {
      setError(err.message || 'Signup failed');
      throw err;
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      const { error } = await supabase.auth.signOut();
      if (error) {
        setError(error.message);
        throw error;
      }
      
      setUser(null);
      setProfile(null);
      
             // Clear only user profile data on logout, keep course progress and enrollments
       const keys = Object.keys(localStorage);
       keys.forEach(key => {
         if (key.startsWith('user-profile-')) {
           localStorage.removeItem(key);
         }
       });
       console.log('🗑️ Cleared user profile data on logout, kept course progress');
    } catch (err: any) {
      setError(err.message || 'Signout failed');
      throw err;
    }
  };

  const value = {
    user,
    profile,
    loading,
    error,
    signIn,
    signUp,
    signOut,
  };

  // Always render children, but let individual components handle loading states
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
