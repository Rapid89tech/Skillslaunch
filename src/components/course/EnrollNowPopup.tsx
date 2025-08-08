import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../integrations/supabase/client';
import type { SimplifiedCourse } from '@/hooks/useCourses';

interface EnrollNowPopupProps {
  open: boolean;
  onClose: () => void;
  course: SimplifiedCourse;
  userId: string;
  userEmail: string;
  onEnrollmentSuccess?: () => void;
}

export default function EnrollNowPopup({ open, onClose, course, userId, userEmail, onEnrollmentSuccess }: EnrollNowPopupProps) {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [paymentRef, setPaymentRef] = useState('');
  const [paymentDate, setPaymentDate] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  console.log('EnrollNowPopup rendered:', { open, course: course?.title, step, userEmail, courseId: course?.id });

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
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        throw new Error('User not authenticated');
      }

      console.log('Creating enrollment for user:', user.id, user.email);

      await new Promise(resolve => setTimeout(resolve, 500));

      const enrollmentData = {
        user_id: user.id,
        user_email: user.email,
        course_id: course.id,
        course_title: course.title,
        proof_of_payment: proofUrl,
        payment_ref: paymentRef || '',
        payment_date: paymentDate || '',
        status: 'pending',
        enrolled_at: new Date().toISOString()
      };
      
      console.log('Creating enrollment with data:', enrollmentData);
      
      const { data, error } = await supabase
        .from('enrollments')
        .insert(enrollmentData)
        .select();
      
      if (error) {
        console.error('Error creating enrollment in Supabase:', error);
        
        // Fallback to localStorage if Supabase fails
        console.log('Falling back to localStorage...');
        const existingEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        const fallbackEnrollment = {
          id: `enrollment_${Date.now()}`,
          ...enrollmentData
        };
        existingEnrollments.push(fallbackEnrollment);
        localStorage.setItem('enrollments', JSON.stringify(existingEnrollments));
        console.log('Enrollment saved to localStorage as fallback:', fallbackEnrollment);
        
        console.warn('Supabase enrollment failed, using localStorage fallback');
      } else {
        console.log('Enrollment created successfully in Supabase:', data);
      }
      
      setProgress(90);
      await new Promise(resolve => setTimeout(resolve, 300));
      setProgress(100);
    } catch (error) {
      console.error('Error in createEnrollment:', error);
      
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const enrollmentData = {
            id: `enrollment_${Date.now()}`,
            user_id: user.id,
            user_email: user.email,
            course_id: course.id,
            course_title: course.title,
            proof_of_payment: proofUrl,
            payment_ref: paymentRef || '',
            payment_date: paymentDate || '',
            status: 'pending',
            enrolled_at: new Date().toISOString()
          };
          
          const existingEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
          existingEnrollments.push(enrollmentData);
          localStorage.setItem('enrollments', JSON.stringify(existingEnrollments));
          console.log('Enrollment saved to localStorage as final fallback:', enrollmentData);
        }
      } catch (fallbackError) {
        console.error('Final fallback failed:', fallbackError);
      }
    }
  }

  async function handleSubmit() {
    if (!file) {
      setError('Please select a file');
      return;
    }

    if (!paymentDate) {
      setError('Please select payment date');
      return;
    }

    setUploading(true);
    setError('');
    
    try {
      const proofUrl = await uploadProof(file, userId);
      await createEnrollment(proofUrl);
      console.log('Enrollment created successfully');
      setProgress(100);
      
      setSuccess(true);
      if (onEnrollmentSuccess) onEnrollmentSuccess();
      
      setTimeout(() => {
        reset();
        onClose();
      }, 3000);
      
    } catch (e: any) {
      console.error('Enrollment error:', e);
      const errorMessage = e.message || 'Upload failed. Please try again.';
      console.error('Setting error message:', errorMessage);
      setError(errorMessage);
      setProgress(0);
    } finally {
      setUploading(false);
    }
  }

  const handleInstantEnroll = async () => {
    setUploading(true);
    setError('');
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error('User not authenticated');

      const enrollmentData = {
        user_id: user.id,
        user_email: user.email,
        course_id: course.id,
        course_title: course.title,
        proof_of_payment: 'instant_enrollment',
        payment_ref: 'instant',
        payment_date: new Date().toISOString().split('T')[0],
        status: 'approved',
        enrolled_at: new Date().toISOString(),
        approved_at: new Date().toISOString()
      };

      console.log('Creating instant enrollment with data:', enrollmentData);

      const { data, error } = await supabase
        .from('enrollments')
        .insert(enrollmentData)
        .select();
      
      if (error) {
        console.error('Error creating instant enrollment in Supabase:', error);
        throw new Error(`Instant enrollment failed: ${error.message}`);
      }
      
      console.log('Instant enrollment created successfully in Supabase:', data);
      setSuccess(true);
      if (onEnrollmentSuccess) onEnrollmentSuccess();
      
      setTimeout(() => {
        navigate(`/course/${course.id}`);
      }, 1500);
    } catch (e: any) {
      setError(e.message || 'Instant enrollment failed.');
    } finally {
      setUploading(false);
    }
  };

  function reset() {
    setStep(1);
    setFile(null);
    setPaymentRef('');
    setPaymentDate('');
    setUploading(false);
    setProgress(0);
    setError('');
    setSuccess(false);
  }

  console.log('Rendering modal with open:', open);
  
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80"
        onClick={() => {
          if (!uploading) {
            console.log('Backdrop clicked');
            reset();
            onClose();
          }
        }}
      />
      
      {/* Modal Content */}
      <div className="relative z-[10000] bg-white rounded-lg p-6 max-w-md mx-4 border-2 border-gray-200 shadow-2xl max-h-[90vh] overflow-y-auto transform -translate-y-1/2">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-black mb-2">
            Enroll in {course?.title}
          </h2>
        </div>
        
        <div className="space-y-4">
          {/* Step indicator */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`w-8 h-2 rounded-full transition-all duration-300 ${step >= s ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
            ))}
          </div>
          
          {/* Step 1: Payment Instructions */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-black">
                Course Fee: R{course?.price || 250}
              </h3>
              <div className="bg-gray-100 rounded-lg p-4 text-sm">
                <div><b>Account Holder:</b> Beta Skill Training Solutions</div>
                <div><b>Bank:</b> STD Bank</div>
                <div><b>Account Type:</b> Cheque</div>
                <div><b>Account Number:</b> 10222498305</div>
                <div><b>Branch:</b> 051001</div>
              </div>
              <Button className="w-full" onClick={() => setStep(2)}>
                Next
              </Button>
              <Button 
                className="w-full" 
                variant="outline" 
                onClick={handleInstantEnroll} 
                disabled={uploading}
              >
                {uploading ? 'Enrolling...' : 'Enroll Instantly (Test)'}
              </Button>
            </div>
          )}
          
          {/* Step 2: Course Details */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-black">
                Confirm Course Details
              </h3>
              <div className="space-y-2 text-sm">
                <div><b>Course:</b> {course.title}</div>
                <div><b>Description:</b> {course.description.substring(0, 100)}...</div>
                <div><b>Total Due:</b> R{course?.price || 250}</div>
              </div>
              <Button className="w-full" onClick={() => setStep(3)}>
                Next
              </Button>
            </div>
          )}
          
          {/* Step 3: Upload Proof */}
          {step === 3 && !success && (
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-black">
                Upload Proof of Payment
              </h3>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="w-full border rounded p-2"
                onChange={e => setFile(e.target.files?.[0] || null)}
                disabled={uploading}
              />
              <input
                type="text"
                placeholder="Payment Reference (optional)"
                className="w-full border rounded p-2"
                value={paymentRef}
                onChange={e => setPaymentRef(e.target.value)}
                disabled={uploading}
              />
              <input
                type="date"
                className="w-full border rounded p-2"
                value={paymentDate}
                onChange={e => setPaymentDate(e.target.value)}
                disabled={uploading}
                required
              />
              {uploading && <Progress value={progress} />}
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <Button 
                className="w-full" 
                onClick={handleSubmit} 
                disabled={uploading || !file}
              >
                {uploading ? 'Uploading...' : 'Upload Proof'}
              </Button>
            </div>
          )}
          
          {/* Success */}
          {success && (
            <div className="text-center space-y-4">
              <div className="text-green-600 text-4xl">✓</div>
              <div className="font-bold text-black">
                Enrollment Successful!
              </div>
              <div className="text-sm text-gray-600">
                You can now access the course content.
              </div>
              <Button className="w-full" onClick={() => { reset(); onClose(); }}>
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 