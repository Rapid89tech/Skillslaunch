import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/hooks/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { useCourses } from '@/hooks/useCourses';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Upload, CheckCircle, Calendar, Clock } from 'lucide-react';

const Enrollment = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { courses } = useCourses();
  
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [paymentRef, setPaymentRef] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const course = courses.find(c => c.id === courseId);

  useEffect(() => {
    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to enroll in courses",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    if (!course) {
      toast({
        title: "Course not found",
        description: "The course you're looking for doesn't exist",
        variant: "destructive",
      });
      navigate('/courses');
      return;
    }
  }, [user, course, navigate, toast]);

  if (!user || !course) {
    return null;
  }

  async function uploadProof(file: File, userId: string): Promise<string> {
    setProgress(30);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mockUrl = `proof_${userId}_${Date.now()}_${file.name}`;
    setProgress(50);
    return mockUrl;
  }

  async function createEnrollment(proofUrl: string) {
    setProgress(70);
    
    try {
      let currentUserId = user.id || `user_${Date.now()}`;
      
      const { data, error } = await supabase
        .from('enrollments')
        .insert([
          {
            course_id: course.id,
            user_id: currentUserId,
            status: 'pending',
            payment_proof: proofUrl,
            payment_reference: paymentRef,
            payment_date: paymentDate,
            enrollment_date: new Date().toISOString(),
          }
        ])
        .select()
        .single();

      if (error) throw error;

      setProgress(100);
      setSuccess(true);
      
      toast({
        title: "✅ Enrollment Submitted!",
        description: "Your enrollment request has been submitted for review. You'll be notified once approved.",
      });
      
      setTimeout(() => {
        navigate(`/course/${course.id}`);
      }, 2000);
      
    } catch (e: any) {
      console.error('Enrollment error:', e);
      const errorMessage = e.message || 'Enrollment failed. Please try again.';
      setError(errorMessage);
      setProgress(0);
      
      toast({
        title: "❌ Enrollment Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit() {
    if (!file) {
      setError('Please select a payment proof file');
      return;
    }

    if (!paymentRef.trim()) {
      setError('Please enter your payment reference');
      return;
    }

    if (!paymentDate) {
      setError('Please select your payment date');
      return;
    }

    setUploading(true);
    setError('');
    setProgress(0);

    try {
      const proofUrl = await uploadProof(file, user.id);
      await createEnrollment(proofUrl);
    } catch (e: any) {
      console.error('Submit error:', e);
      setError(e.message || 'Submission failed');
      setProgress(0);
    }
  }

  const reset = () => {
    setStep(1);
    setFile(null);
    setPaymentRef('');
    setPaymentDate('');
    setUploading(false);
    setProgress(0);
    setError('');
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(`/course/${courseId}`)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Enroll in {course.title}
          </h1>
          <p className="text-gray-600">
            Complete your enrollment by providing payment proof
          </p>
        </div>

        {/* Progress Bar */}
        {uploading && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Processing enrollment...</span>
              <span className="text-sm text-gray-500">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Success Message */}
        {success && (
          <Card className="mb-6 border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="font-semibold text-green-800">Enrollment Submitted Successfully!</h3>
                  <p className="text-green-700 text-sm">Redirecting to course...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Enrollment Form */}
        {!success && (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Enrollment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              {/* Course Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <span>•</span>
                  <span>Free Course</span>
                </div>
              </div>

              {/* Payment Reference */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Reference *
                </label>
                <input
                  type="text"
                  value={paymentRef}
                  onChange={(e) => setPaymentRef(e.target.value)}
                  placeholder="Enter your payment reference number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={uploading}
                />
              </div>

              {/* Payment Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Date *
                </label>
                <input
                  type="date"
                  value={paymentDate}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={uploading}
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Proof *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    id="file-upload"
                    disabled={uploading}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      {file ? file.name : 'Click to upload payment proof (PDF, JPG, PNG)'}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Max file size: 5MB
                    </p>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                disabled={uploading || !file || !paymentRef || !paymentDate}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {uploading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Processing...
                  </div>
                ) : (
                  'Submit Enrollment'
                )}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Enrollment;
