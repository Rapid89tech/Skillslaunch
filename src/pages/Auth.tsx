import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, BookOpen, ArrowLeft, Mail, Lock, User, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState('student');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    resetEmail: ''
  });
  const [localError, setLocalError] = useState('');

  const { signIn, signUp, loading, user, error, profile } = useAuth();
  const navigate = useNavigate();

  const testSupabaseConnection = async () => {
    try {
      console.log('Testing Supabase connection...');
      
      // Test 1: Check if we can connect to Supabase
      const { data: { user } } = await supabase.auth.getUser();
      console.log('Current user:', user);
      
      // Test 2: Check if we can query the profiles table
      const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .limit(5);
      
      if (profilesError) {
        console.error('Profiles table error:', profilesError);
      } else {
        console.log('Profiles table data:', profiles);
      }
      
      // Test 3: Check database connection
      const { data, error } = await supabase
        .from('profiles')
        .select('count(*)', { count: 'exact' });
      
      if (error) {
        console.error('Database connection error:', error);
      } else {
        console.log('Database connection successful, profile count:', data);
      }
      
    } catch (error) {
      console.error('Supabase test error:', error);
    }
  };

  useEffect(() => {
    console.log('Auth useEffect - user:', user, 'loading:', loading, 'profile:', profile);
    if (user && !loading) {
      if (profile) {
      let path = '/dashboard';
      if (profile.role === 'admin') path = '/admin-dashboard';
      else if (profile.role === 'instructor') path = '/instructor-dashboard';
        console.log('Redirecting to:', path);
      setTimeout(() => {
        navigate(path);
      }, 100);
      } else {
        console.log('User exists but profile is null, waiting for profile...');
        // If user exists but profile is null, wait a bit for profile to load
        // or redirect to dashboard with default student role after 3 seconds
        setTimeout(() => {
          if (user && !profile) {
            console.log('Still no profile after wait, redirecting to dashboard anyway');
            navigate('/dashboard');
          }
        }, 3000);
      }
    }
  }, [user, loading, profile, navigate]);

  const roles = [
    { value: 'student', label: 'Student', description: 'Learn new skills' },
    { value: 'instructor', label: 'Instructor', description: 'Teach others' },
    { value: 'admin', label: 'Admin', description: 'Manage platform' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    try {
      if (isLogin) {
        console.log('Attempting login for', formData.email);
        const result = await signIn(formData.email, formData.password);
        console.log('Login success, result:', result);
      } else {
        console.log('Attempting signup for', formData.email, 'with role:', selectedRole);
        const result = await signUp(
          formData.email,
          formData.password,
          formData.firstName,
          formData.lastName,
          selectedRole
        );
        console.log('Signup success, result:', result);
      }
    } catch (error: any) {
      console.error('Auth error:', error);
      setLocalError(error?.message || 'Authentication failed. Please try again.');
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // This function is no longer used as resetPassword is removed from useAuth
      // Keeping it for now, but it will be removed if not used elsewhere.
      // await resetPassword(formData.resetEmail); 
      setShowResetForm(false);
      setFormData({ ...formData, resetEmail: '' });
    } catch (error) {
      // Error handling is already in useAuthOperations
    }
  };

  if (user && !loading && profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>
      <div className="relative z-10 w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <Card className="glass-card animate-scale-in">
          <CardHeader className="text-center pb-2">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">
              {showResetForm ? 'Reset Password' : isLogin ? 'Welcome Back' : 'Join Beta Skill'}
            </CardTitle>
            <p className="text-gray-600">
              {showResetForm 
                ? 'Enter your email to reset your password'
                : isLogin 
                ? 'Sign in to continue your learning journey' 
                : 'Create your account and start learning today'
              }
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {(error || localError) && (
              <div className="text-red-600 text-center font-medium">{error || localError}</div>
            )}
            {showResetForm ? (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="resetEmail">Email</Label>
                  <Input
                    id="resetEmail"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.resetEmail}
                    onChange={(e) => setFormData({ ...formData, resetEmail: e.target.value })}
                    className="h-12"
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12">Send Reset Email</Button>
                <Button type="button" variant="link" className="w-full" onClick={() => setShowResetForm(false)}>
                  Back to Login
                </Button>
              </form>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label>Select Role</Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-full h-12 justify-between">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-2" />
                            {roles.find(r => r.value === selectedRole)?.label}
                          </div>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full">
                        {roles.map((role) => (
                          <DropdownMenuItem
                            key={role.value}
                            onClick={() => setSelectedRole(role.value)}
                            className="cursor-pointer"
                          >
                            <div>
                              <div className="font-medium">{role.label}</div>
                              <div className="text-sm text-gray-500">{role.description}</div>
                            </div>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                )}
                {!isLogin && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12 pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder={isLogin ? 'Enter your password' : 'Create a password'}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="h-12 pl-10 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full h-12" disabled={loading}>
                  {isLogin ? 'Log In' : 'Sign Up'}
                </Button>

                <Button type="button" variant="link" className="w-full" onClick={() => setShowResetForm(true)}>
                  Forgot password?
                </Button>
                <div className="flex justify-center items-center gap-2 mt-2">
                  <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
                  <Button type="button" variant="link" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Sign Up' : 'Log In'}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
