import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, LogOut, RefreshCw } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ApprovalPending = () => {
  const { profile, signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleCheckStatus = async () => {
    // Force a page reload to check the latest approval status
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-yellow-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Account Pending Approval
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Thank you for registering! Your account is currently being reviewed by our administrators.
            </p>
            <p className="text-sm text-gray-500">
              You will receive an email notification once your account has been approved.
            </p>
            
            {profile && (
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="font-medium text-gray-700">Account Details:</p>
                <p className="text-gray-600">Name: {profile.first_name} {profile.last_name}</p>
                <p className="text-gray-600">Email: {profile.email}</p>
                <p className="text-gray-600">Role: {profile.role}</p>
                <p className="text-gray-600">Status: {profile.approved ? 'Approved' : 'Pending'}</p>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            <Button 
              onClick={handleSignOut}
              variant="outline" 
              className="w-full"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
            
            <Button 
              onClick={handleCheckStatus}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Check Approval Status
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApprovalPending; 