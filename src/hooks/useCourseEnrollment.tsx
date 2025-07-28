
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';
import { useToast } from '@/hooks/use-toast';
import type { Course } from '@/types/course';

export const useCourseEnrollment = (
  course: Course | null,
  enrollInCourse: (courseId: string) => Promise<boolean>
) => {
  const [enrolling, setEnrolling] = useState(false);
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

    console.log("Starting enrollment process...");
    setEnrolling(true);
    
    try {
      const success = await enrollInCourse(course.id);
      console.log("Enrollment completed with result:", success);
      
      if (success) {
        toast({
          title: "🎉 Enrollment Successful!",
          description: "Welcome to the course! You can now access all course content.",
        });
        
        // Navigate immediately to the course content
        navigate(`/course/${course.id}`);
      } else {
        toast({
          title: "Enrollment Failed",
          description: "There was an issue enrolling in the course. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Enrollment error:", error);
      toast({
        title: "Enrollment Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setEnrolling(false);
    }
  };

  return {
    enrolling,
    handleEnroll
  };
};
