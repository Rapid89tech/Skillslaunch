
import { useEnrollmentData } from './useEnrollmentData';
import { useEnrollmentOperations } from './useEnrollmentOperations';

export const useEnrollments = () => {
  const { enrollments, loading, refetch } = useEnrollmentData();
  const { enrollInCourse, updateProgress } = useEnrollmentOperations();

  const handleEnrollInCourse = async (courseId: string) => {
    console.log("useEnrollments: Enrolling in course", courseId);
    const success = await enrollInCourse(courseId);
    if (success) {
      console.log("useEnrollments: Enrollment successful, refetching data");
      // Small delay to ensure localStorage is updated
      setTimeout(() => {
        refetch();
      }, 100);
    }
    return success;
  };

  const handleUpdateProgress = async (courseId: string, progress: number) => {
    console.log("useEnrollments: Updating progress for", courseId, "to", progress);
    const success = await updateProgress(courseId, progress);
    if (success) {
      setTimeout(() => {
        refetch();
      }, 100);
    }
    return success;
  };

  // Check if user is enrolled in a specific course
  const isEnrolled = (courseId: string) => {
    const enrolled = enrollments.some(enrollment => enrollment.course_id === courseId);
    console.log(`useEnrollments: Checking enrollment for ${courseId}:`, enrolled, "Total enrollments:", enrollments.length);
    return enrolled;
  };

  // Get enrollment details for a specific course
  const getEnrollment = (courseId: string) => {
    const enrollment = enrollments.find(enrollment => enrollment.course_id === courseId);
    console.log(`useEnrollments: Getting enrollment for ${courseId}:`, enrollment);
    return enrollment;
  };

  return {
    enrollments,
    loading,
    enrollInCourse: handleEnrollInCourse,
    updateProgress: handleUpdateProgress,
    isEnrolled,
    getEnrollment,
    refetch
  };
};

// Re-export the Enrollment type for backward compatibility
export type { Enrollment } from '@/types/enrollment';
