import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { X, Upload, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/AuthContext';
import { enrollmentNotificationService } from '@/services/enrollmentNotificationService';
import { logger } from '@/utils/logger';
import EnrollmentErrorBoundary from '@/components/error/EnrollmentErrorBoundary';

interface ProofOfPaymentFormProps {
  courseId: string;
  reference: string;
  amount: number;
  onClose: () => void;
  onSuccess: (paymentData: any) => void;
}

const ProofOfPaymentForm: React.FC<ProofOfPaymentFormProps> = ({
  courseId,
  reference,
  amount,
  onClose,
  onSuccess
}) => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    transactionId: '',
    transactionDate: '',
    notes: '',
    file: null as File | null
  });
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive"
        });
        return;
      }
      
      setFormData({
        ...formData,
        file
      });
      
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.file) {
      toast({
        title: "Missing proof of payment",
        description: "Please upload your proof of payment document before submitting.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.transactionId.trim()) {
      toast({
        title: "Missing transaction number",
        description: "Please enter your transaction/reference number.",
        variant: "destructive"
      });
      return;
    }

    if (!user) {
      toast({
        title: "Not authenticated",
        description: "You must be logged in to submit proof of payment.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload proof of payment file to Supabase storage
      console.log('📤 Uploading proof of payment file...');
      const fileExt = formData.file.name.split('.').pop();
      const fileName = `${user.id}_${courseId}_${Date.now()}.${fileExt}`;
      const filePath = `payment-proofs/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('payment-proofs')
        .upload(filePath, formData.file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('❌ File upload error:', uploadError);
        throw new Error(`Failed to upload file: ${uploadError.message}`);
      }

      // Get public URL for the uploaded file
      const { data: { publicUrl } } = supabase.storage
        .from('payment-proofs')
        .getPublicUrl(filePath);

      console.log('✅ File uploaded successfully:', publicUrl);

      // Show success immediately
      toast({
        title: "Proof of Payment Submitted!",
        description: "Your enrollment is now pending approval. Admin will review your payment proof.",
      });

      // Create enrollment for immediate UI update
      const enrollmentData = {
        id: `pending-${Date.now()}`,
        user_id: user.id,
        user_email: user.email || formData.email,
        course_id: courseId,
        status: 'pending',
        payment_ref: formData.transactionId,
        enrolled_at: new Date().toISOString(),
        payment_method: 'eft',
        proof_of_payment: publicUrl,
        payment_date: formData.transactionDate || new Date().toISOString().split('T')[0],
        notes: formData.notes
      };

      // Update UI immediately
      setIsSubmitting(false);
      onSuccess(enrollmentData);

      // Save to localStorage immediately for course card
      try {
        const existingEnrollments = JSON.parse(localStorage.getItem('enrollments') || '[]');
        existingEnrollments.push(enrollmentData);
        localStorage.setItem('enrollments', JSON.stringify(existingEnrollments));
        console.log('✅ Saved to localStorage for immediate UI update');
      } catch (e) {
        console.error('❌ localStorage save failed:', e);
      }

      // Force UI refresh
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('force-course-card-refresh'));
        window.dispatchEvent(new CustomEvent('enrollment-success'));
      }, 100);

      // Save to database in background
      setTimeout(async () => {
        try {
          console.log('🔄 Submitting EFT enrollment to database...');

          const enrollmentPayload = {
            userId: user.id,
            userEmail: user.email || formData.email,
            courseId: courseId,
            paymentRef: formData.transactionId,
            courseTitle: (window as any).__current_course_title__ || undefined,
            proofOfPayment: publicUrl,
            paymentDate: formData.transactionDate,
            notes: formData.notes,
            transactionId: formData.transactionId
          };

          console.log('📋 Payload:', enrollmentPayload);

          const { data, error } = await supabase.functions.invoke('submit-eft-enrollment', {
            body: enrollmentPayload,
          });
          
        if (error) {
          console.error('❌ Edge Function invocation failed:', error);
        } else {
          console.log('✅ EFT Enrollment submitted successfully via Edge Function:', data);
          
          // Send admin notifications for new EFT enrollment
          try {
            // Get admin users (you might want to get this from a dedicated admin table)
            const { data: adminUsers, error: adminError } = await supabase
              .from('profiles')
              .select('id')
              .eq('role', 'admin');
            
            if (!adminError && adminUsers && adminUsers.length > 0) {
              const adminIds = adminUsers.map(admin => admin.id);
              await enrollmentNotificationService.notifyAdminNewEFTEnrollment(
                adminIds,
                user.email || formData.email,
                (window as any).__current_course_title__ || 'Course',
                courseId,
                data?.id || `pending-${Date.now()}`,
                reference,
                amount,
                'ZAR'
              );
              logger.info('✅ Admin notifications sent for new EFT enrollment');
            }
          } catch (notificationError) {
            logger.error('❌ Failed to send admin notifications:', notificationError);
          }
          
          try {
            window.dispatchEvent(new CustomEvent('refresh-admin-dashboard', { detail: { source: 'eft-edge' } }));
          } catch {}
        }
      } catch (e) {
        console.error('❌ Background save exception:', e);
      }
    }, 1000);
    } catch (error: any) {
      console.error('❌ Submission error:', error);
      setIsSubmitting(false);
      toast({
        title: "Submission failed",
        description: error.message || "Failed to submit proof of payment. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <EnrollmentErrorBoundary
      enrollmentContext={{
        courseId: courseId,
        userId: user?.id || undefined,
        operation: 'payment'
      }}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-lg w-full bg-white max-h-[90vh] overflow-y-auto">
        <CardHeader className="bg-gradient-to-r from-red-500 to-red-700 text-white sticky top-0 z-10">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl">Submit Proof of Payment</CardTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="h-8 w-8 text-white hover:bg-red-600 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Full Name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="transactionId">
                  Transaction/Reference Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="transactionId"
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleInputChange}
                  required
                  placeholder="Transaction ID"
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="transactionDate">
                  Transaction Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="transactionDate"
                  name="transactionDate"
                  type="date"
                  value={formData.transactionDate}
                  onChange={handleInputChange}
                  required
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Any additional information about your payment"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="proofFile" className="text-base font-semibold">
                Upload Proof of Payment <span className="text-red-500">*</span>
              </Label>
              <div className="border-2 border-dashed border-red-300 rounded-md p-4 text-center bg-red-50">
                <input
                  type="file"
                  id="proofFile"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                />
                
                {!filePreview ? (
                  <label 
                    htmlFor="proofFile" 
                    className="flex flex-col items-center justify-center cursor-pointer py-4"
                  >
                    <Upload className="h-8 w-8 text-red-500 mb-2" />
                    <p className="text-sm font-bold text-red-700">Click to upload proof of payment (Required)</p>
                    <p className="text-xs text-gray-600 mt-1">PDF, JPG or PNG (max 5MB)</p>
                  </label>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 bg-gray-200 rounded flex items-center justify-center">
                          {formData.file?.name.endsWith('.pdf') ? (
                            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          ) : (
                            <img 
                              src={filePreview} 
                              alt="Preview" 
                              className="h-10 w-10 object-cover rounded"
                            />
                          )}
                        </div>
                        <div className="ml-3 truncate">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {formData.file?.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {formData.file ? (formData.file.size / 1024 / 1024).toFixed(2) + ' MB' : ''}
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setFormData({...formData, file: null});
                          setFilePreview(null);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-center text-gray-500">
                      Click the file to change it
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Important:</strong> Please ensure your proof of payment clearly shows the transaction details, including the reference number: <strong className="text-yellow-900">{reference}</strong>. 
                    Admin will review this document before approving your enrollment.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        
        <CardFooter className="flex justify-between space-x-4 pt-2 sticky bottom-0 bg-white border-t">
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Submit Proof
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
    </EnrollmentErrorBoundary>
  );
};

export default ProofOfPaymentForm;