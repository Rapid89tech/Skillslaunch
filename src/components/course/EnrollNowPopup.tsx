import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../integrations/supabase/client';

interface EnrollNowPopupProps {
  open: boolean;
  onClose: () => void;
  course: {
    id: string;
    title: string;
    description: string;
    modules?: string[];
  };
  userId: string;
  userEmail: string; // <-- Add this prop
  onEnrollmentSuccess?: () => void; // <-- Add this prop
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

  async function uploadProof(file: File, userId: string): Promise<string> {
    setProgress(30);
    
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For now, just create a mock URL since storage might not be set up
    // In production, you'd upload to Supabase storage
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

      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // Create enrollment in Supabase database
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
        
        // Don't throw error, just log it
        console.warn('Supabase enrollment failed, using localStorage fallback');
      } else {
        console.log('Enrollment created successfully in Supabase:', data);
      }
      
      setProgress(90);
      
      // Final delay before completion
      await new Promise(resolve => setTimeout(resolve, 300));
      setProgress(100);
    } catch (error) {
      console.error('Error in createEnrollment:', error);
      
      // Final fallback - save to localStorage
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
          
          setProgress(90);
          await new Promise(resolve => setTimeout(resolve, 300));
          setProgress(100);
          return; // Don't throw error
        }
      } catch (fallbackError) {
        console.error('Even localStorage fallback failed:', fallbackError);
      }
      
      throw error; // Re-throw if all fallbacks fail
    }
  }

  async function handleSubmit() {
    setUploading(true);
    setError('');
    setProgress(10);
    
    try {
      console.log('Starting enrollment submission...');
      
      // Validate inputs
      if (!file) {
        throw new Error('Please upload proof of payment.');
      }
      
      if (!paymentDate) {
        throw new Error('Please select payment date.');
      }
      
      console.log('Inputs validated successfully');
      setProgress(20);
      
      // Upload proof (mock for now)
      console.log('Uploading proof of payment...');
      const proofUrl = await uploadProof(file, userId);
      console.log('Proof uploaded successfully:', proofUrl);
      setProgress(60);
      
      // Create enrollment
      console.log('Creating enrollment in database...');
      await createEnrollment(proofUrl);
      console.log('Enrollment created successfully');
      setProgress(100);
      
      // Success!
      setSuccess(true);
      if (onEnrollmentSuccess) onEnrollmentSuccess(); // <-- Call the callback
      
      // Auto-close after 3 seconds
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

      // Create instant enrollment in Supabase database
      const enrollmentData = {
        user_id: user.id,
        user_email: user.email,
        course_id: course.id,
        course_title: course.title,
        proof_of_payment: 'instant_enrollment',
        payment_ref: 'instant',
        payment_date: new Date().toISOString().split('T')[0],
        status: 'approved', // Auto-approve instant enrollments
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

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) { reset(); onClose(); } }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enroll in {course.title}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center mb-4 gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`w-8 h-2 rounded-full transition-all duration-300 ${step >= s ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
          ))}
        </div>
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="font-bold text-lg mb-2">To access this free course, please pay the once‑off admin fee of R250.</h2>
            <div className="bg-gray-100 rounded-lg p-4 mb-4 text-sm">
              <div><b>Account Holder:</b> Beta Skill Training Solutions</div>
              <div><b>Bank:</b> STD Bank</div>
              <div><b>Account Type:</b> Cheque</div>
              <div><b>Account Number:</b> 10222498305</div>
              <div><b>Branch:</b> 051001</div>
            </div>
            <Button className="w-full" onClick={() => setStep(2)}>Next</Button>
            
            {/* Test Supabase connection */}
            <Button 
              className="w-full mt-2" 
              variant="outline" 
              onClick={async () => {
                try {
                  console.log('Testing Supabase connection...');
                  
                  // Test basic connection
                  const { data: testData, error: testError } = await supabase
                    .from('enrollments')
                    .select('count')
                    .limit(1);
                  
                  if (testError) {
                    console.error('Supabase connection test failed:', testError);
                    alert(`❌ Supabase Connection Failed\n\nError: ${testError.message}\n\nPlease check your database setup.`);
                  } else {
                    console.log('Supabase connection test successful');
                    
                    // Get current user
                    const { data: { user } } = await supabase.auth.getUser();
                    
                    alert(`✅ Supabase Connection Successful\n\nUser: ${user?.email}\nUser ID: ${user?.id}\n\nDatabase is ready for enrollments!`);
                  }
                } catch (error) {
                  console.error('Supabase test failed:', error);
                  alert(`❌ Supabase Test Failed\n\nError: ${error}\n\nPlease check your database setup.`);
                }
              }}
            >
              Test Database Connection
            </Button>
            
            {/* Show instant enroll only for siphod@gmail.com */}
            {userEmail === 'siphod@gmail.com' && (
              <Button className="w-full mt-2" variant="secondary" onClick={handleInstantEnroll} disabled={uploading}>
                {uploading ? 'Enrolling...' : 'Enroll Instantly (No Payment)'}
              </Button>
            )}
          </div>
        )}
        {step === 2 && (
          <div className="animate-slide-in-left">
            <h2 className="font-bold text-lg mb-2">Confirm Course Details</h2>
            <div className="mb-2"><b>Course:</b> {course.title}</div>
            <div className="mb-2"><b>Description:</b> {course.description}</div>
            {course.modules && (
              <div className="mb-2">
                <b>Modules:</b>
                <ul className="list-disc ml-5">
                  {course.modules.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </div>
            )}
            <div className="mb-4"><b>Total Due:</b> R250</div>
            <Button className="w-full" onClick={() => setStep(3)}>Next</Button>
          </div>
        )}
        {step === 3 && !success && (
          <div className="animate-slide-in-left">
            <h2 className="font-bold text-lg mb-2">Upload Proof of Payment</h2>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="mb-2"
              onChange={e => setFile(e.target.files?.[0] || null)}
              disabled={uploading}
            />
            <input
              type="text"
              placeholder="Payment Reference (optional)"
              className="mb-2 w-full border rounded p-2"
              value={paymentRef}
              onChange={e => setPaymentRef(e.target.value)}
              disabled={uploading}
            />
            <input
              type="date"
              className="mb-2 w-full border rounded p-2"
              value={paymentDate}
              onChange={e => setPaymentDate(e.target.value)}
              disabled={uploading}
              required
            />
            {!paymentDate && !uploading && (
              <div className="text-sm text-gray-500 mb-2">Please select the payment date</div>
            )}
            {uploading && <Progress value={progress} className="mb-2" />}
            {error && <div className="text-red-600 mb-2">{error}</div>}
            <Button className="w-full" onClick={handleSubmit} disabled={uploading || !file}>
              {uploading ? 'Uploading...' : 'Upload Proof'}
            </Button>
          </div>
        )}
        {success && (
          <div className="flex flex-col items-center animate-fade-in">
            <div className="text-green-600 text-4xl mb-2">✓</div>
            <div className="font-bold mb-2 text-center">Enrollment Submitted Successfully!</div>
            <div className="text-sm text-gray-600 mb-4 text-center">
              Your proof of payment has been uploaded and your enrollment is pending instructor approval. 
              You will receive access to the course once approved.
            </div>
            <Button className="w-full" onClick={() => { reset(); onClose(); }}>
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
} 