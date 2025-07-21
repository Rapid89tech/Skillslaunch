import { User, Session } from '@supabase/supabase-js';

export interface Profile {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  role: 'student' | 'instructor' | 'admin';
  avatar_url?: string;
  created_at: string;
  updated_at: string;
  deleted?: boolean;
  contactNumber?: string;
  approved?: boolean;
  approval_status?: string;
}

export interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  profileReady: boolean;
  signUp: (email: string, password: string, firstName: string, lastName: string, role: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  refreshProfile: () => Promise<void>;
}
