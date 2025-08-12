
import { useState } from 'react';

interface Enrollment {
  course_id: string;
  user_id: string;
  enrollment_date: string;
  progress: number;
}

interface UseEnrollmentOperationsResult {
  enrollments: Enrollment[];
  enrollInCourse: (courseId: string) => Promise<boolean>;
  updateProgress: (courseId: string, progress: number) => Promise<boolean>;
  isLoading: boolean;
}

export const useEnrollmentOperations = (): UseEnrollmentOperationsResult => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Load enrollments from localStorage with better error handling
  const loadEnrollments = (): Enrollment[] => {
    try {
      const storedEnrollments = localStorage.getItem('enrollments');
      const parsed = storedEnrollments ? JSON.parse(storedEnrollments) : [];
      console.log("Loaded enrollments from localStorage:", parsed);
      return parsed;
    } catch (error) {
      console.error("Failed to load enrollments from localStorage:", error);
      return [];
    }
  };

  const [enrollments, setEnrollments] = useState<Enrollment[]>(loadEnrollments);

  const persistEnrollments = (newEnrollments: Enrollment[]) => {
    try {
      localStorage.setItem('enrollments', JSON.stringify(newEnrollments));
      console.log("Enrollments saved successfully:", newEnrollments);
      return true;
    } catch (error) {
      console.error("Failed to save enrollments to localStorage:", error);
      return false;
    }
  };

  const enrollInCourse = async (courseId: string): Promise<boolean> => {
    console.log("Starting enrollment for course:", courseId);
    setIsLoading(true);
    
    // Load fresh enrollments to check
    const currentEnrollments = loadEnrollments();
    
    // Check if already enrolled
    const existingEnrollment = currentEnrollments.find(e => e.course_id === courseId);
    if (existingEnrollment) {
      console.log("User already enrolled in course:", courseId);
      setEnrollments(currentEnrollments);
      setIsLoading(false);
      return true;
    }
    
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          const newEnrollment: Enrollment = {
            course_id: courseId,
            user_id: 'user-local',
            enrollment_date: new Date().toISOString(),
            progress: 0,
          };

          console.log("Creating new enrollment:", newEnrollment);

          const updatedEnrollments = [...currentEnrollments, newEnrollment];
          const success = persistEnrollments(updatedEnrollments);
          
          if (success) {
            setEnrollments(updatedEnrollments);
            console.log("Enrollment successful! Updated enrollments:", updatedEnrollments);
            
            // Force a storage event to notify other parts of the app
            window.dispatchEvent(new StorageEvent('storage', {
              key: 'enrollments',
              newValue: JSON.stringify(updatedEnrollments),
              oldValue: JSON.stringify(currentEnrollments)
            }));
            
            // 🛡️ Trigger bulletproof backup
            window.dispatchEvent(new CustomEvent('enrollment-success', {
              detail: { courseId, enrollment: newEnrollment }
            }));
            
            setIsLoading(false);
            resolve(true);
          } else {
            console.error("Failed to persist enrollment");
            setIsLoading(false);
            resolve(false);
          }
        } catch (error) {
          console.error("Failed to enroll in course:", error);
          setIsLoading(false);
          resolve(false);
        }
      }, 800);
    });
  };

  const updateProgress = async (courseId: string, progress: number): Promise<boolean> => {
    setIsLoading(true);
    const currentEnrollments = loadEnrollments();
    
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          let updateSuccess = false;
          const updatedEnrollments = currentEnrollments.map(enrollment => {
            if (enrollment.course_id === courseId) {
              updateSuccess = true;
              return { ...enrollment, progress: Math.min(100, Math.max(0, progress)) };
            }
            return enrollment;
          });
          
          if (updateSuccess) {
            const success = persistEnrollments(updatedEnrollments);
            if (success) {
              setEnrollments(updatedEnrollments);
              
              // Force a storage event
              window.dispatchEvent(new StorageEvent('storage', {
                key: 'enrollments',
                newValue: JSON.stringify(updatedEnrollments),
                oldValue: JSON.stringify(currentEnrollments)
              }));
            }
            setIsLoading(false);
            resolve(success);
          } else {
            setIsLoading(false);
            resolve(false);
          }
        } catch (error) {
          console.error("Failed to update progress:", error);
          setIsLoading(false);
          resolve(false);
        }
      }, 300);
    });
  };

  return { enrollments, enrollInCourse, updateProgress, isLoading };
};
