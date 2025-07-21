import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useAuthOperations = () => {
  const { toast } = useToast();

  const signUp = async (email: string, password: string, firstName: string, lastName: string, role: string) => {
    try {
      console.log('Starting signup process for role:', role);
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            first_name: firstName,
            last_name: lastName,
            role: role,
            email: email
          }
        }
      });

      if (error) {
        console.error('Signup error:', error);
        throw error;
      }

      console.log('Signup successful:', data);

      // The database trigger will automatically create the profile with proper approval status
      // Admins will be automatically approved, others will be pending
      if (data.user && data.session) {
        console.log('User signed up and logged in immediately');
        console.log('Profile will be created automatically by database trigger');
      }

      toast({
        title: "Success!",
        description: role === 'admin' 
          ? "Admin account created successfully. You are now logged in and have full access."
          : "Account created successfully. Please wait for admin approval.",
      });

      return data;
    } catch (error: any) {
      console.error('Auth error details:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create account",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      console.log('Starting signin process');
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Signin error:', error);
        throw error;
      }

      console.log('Signin successful');

      toast({
        title: "Welcome back!",
        description: "You have been logged in successfully.",
      });

      return data;
    } catch (error: any) {
      console.error('Signin error details:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to sign in",
        variant: "destructive",
      });
      throw error;
    }
  };

  const signOut = async () => {
    try {
      console.log('Starting signout process');
      
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      console.log('Signout successful');

      toast({
        title: "Signed out",
        description: "You have been logged out successfully.",
      });

      // Only redirect after explicit logout
      window.location.href = '/';
    } catch (error: any) {
      console.error('Signout error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      toast({
        title: "Reset email sent",
        description: "Check your email for password reset instructions.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send reset email",
        variant: "destructive",
      });
    }
  };

  return {
    signUp,
    signIn,
    signOut,
    resetPassword
  };
};
