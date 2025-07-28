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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      console.log('🚨 FORCE CREATING PROFILE for user:', user.id);
      
      const profileData = {
        id: user.id,
        email: user.email,
        first_name: user.user_metadata?.first_name || user.user_metadata?.firstName || 'Student',
        last_name: user.user_metadata?.last_name || user.user_metadata?.lastName || 'User',
        role: user.user_metadata?.role || 'student',
        approved: true,
        approval_status: 'approved'
      };
      
      console.log('🚨 Profile data being inserted:', profileData);
      
      const { data: newProfile, error: createError } = await supabase
        .from('profiles')
        .insert(profileData)
        .select()
        .single();
        
      if (createError) {
        console.error('🚨 PROFILE CREATION ERROR:', createError);
        // If it's a duplicate error, try to fetch existing profile
        if (createError.code === '23505') {
          console.log('🚨 Profile already exists, fetching it...');
          const { data: existingProfile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single();
          return existingProfile;
        }
        return null;
      }
      
      console.log('🚨 PROFILE CREATED SUCCESSFULLY:', newProfile);
      return newProfile;
    } catch (error) {
      console.error('🚨 PROFILE CREATION CATCH ERROR:', error);
      return null;
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (user) {
        console.log('🚨 User found, getting profile...');
        let profileData = await fetchProfile(user.id);
        
        // If NO profile found, force create one
        if (!profileData) {
          console.log('🚨 NO PROFILE FOUND - FORCE CREATING...');
          profileData = await createProfile(user);
        }
        
        console.log('🚨 Final profile data:', profileData);
        setProfile(profileData);
      }
      
      setLoading(false);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      
      if (session?.user) {
        console.log('🚨 Auth state change - getting profile...');
        let profileData = await fetchProfile(session.user.id);
        
        // If NO profile found, force create one
        if (!profileData) {
          console.log('🚨 AUTH CHANGE - NO PROFILE FOUND - FORCE CREATING...');
          profileData = await createProfile(session.user);
        }
        
        console.log('🚨 Auth change final profile data:', profileData);
        setProfile(profileData);
      } else {
        setProfile(null);
      }
      
      setLoading(false);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      
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
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, firstName: string, lastName: string, role: string) => {
    try {
      setError(null);
      setLoading(true);
      
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
    } finally {
      setLoading(false);
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
      setProfile(null);
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

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
