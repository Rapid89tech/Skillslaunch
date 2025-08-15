
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';
import { useToast } from '@/hooks/use-toast';
import type { Course } from '@/types/course';

export const useCourseEnrollment = (
  course: Course | null,
  enrollInCourse: (courseId: string, courseTitle: string) => Promise<boolean>
) => {
  const [enrolling, setEnrolling] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleEnroll = async () => {
    console.log("handleEnroll called for course:", course?.id);
    
    if (!user) {
      console.log("User not authenticated, redirecting to auth");
      toast({
        title: "Please log in",
        description: "You need to be logged in to enroll in courses",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    if (!course) {
      console.log("No course provided");
      return;
    }

    console.log("Showing payment popup for course:", course.id);
    setShowPaymentPopup(true);
  };

  const handlePaymentPopupClose = () => {
    setShowPaymentPopup(false);
  };

  const handleEnrollmentSuccess = () => {
    setShowPaymentPopup(false);
    toast({
      title: "🎉 Enrollment Successful!",
      description: "Welcome to the course! You can now access all course content.",
    });
    navigate(`/course/${course?.id}`);
  };

  return {
    enrolling,
    showPaymentPopup,
    handleEnroll,
    handlePaymentPopupClose,
    handleEnrollmentSuccess
  };
};
