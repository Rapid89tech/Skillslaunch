import { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from './AuthContext';
import { useEnrollments } from './useEnrollments';

// Debounced progress hook to prevent excessive re-renders and flashing
export const useStableProgress = (courseId?: string) => {
  const { user } = useAuth();
  const { getEnrollment } = useEnrollments();
  const [progress, setProgress] = useState<number>(0);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Use refs to prevent unnecessary re-renders
  const progressRef = useRef(progress);
  const completedLessonsRef = useRef(completedLessons);
  const debounceRef = useRef<NodeJS.Timeout>();
  
  // Debounced update function
  const debouncedUpdate = useCallback((newProgress: number, newCompletedLessons: number[]) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    
    debounceRef.current = setTimeout(() => {
      // Only update if values actually changed
      if (progressRef.current !== newProgress || 
          JSON.stringify(completedLessonsRef.current) !== JSON.stringify(newCompletedLessons)) {
        
        progressRef.current = newProgress;
        completedLessonsRef.current = newCompletedLessons;
        
        setProgress(newProgress);
        setCompletedLessons(newCompletedLessons);
      }
    }, 100); // 100ms debounce
  }, []);
  
  // Load progress from localStorage immediately (synchronous)
  useEffect(() => {
    if (!user || !courseId) return;
    
    setIsLoading(true);
    
    try {
      // Get from localStorage first (instant)
      const progressKey = `course-progress-${courseId}`;
      const completedKey = `completed-lessons-${courseId}`;
      
      const savedProgress = localStorage.getItem(progressKey);
      const savedCompleted = localStorage.getItem(completedKey);
      
      if (savedProgress && savedCompleted) {
        const parsedProgress = parseInt(savedProgress);
        const parsedCompleted = JSON.parse(savedCompleted);
        
        debouncedUpdate(parsedProgress, parsedCompleted);
      } else {
        // Fallback to enrollment data if no local storage
        const enrollment = getEnrollment(courseId);
        if (enrollment && enrollment.progress > 0) {
          console.log('Using enrollment progress as fallback:', enrollment.progress);
          // Convert progress percentage to completed lessons count (estimate)
          const totalLessons = 20; // Rough estimate, will be updated by actual lesson count
          const completedCount = Math.floor((enrollment.progress / 100) * totalLessons);
          const estimatedCompleted = Array.from({ length: completedCount }, (_, i) => i);
          debouncedUpdate(enrollment.progress, estimatedCompleted);
        }
        
        // Also check for legacy progress data formats
        const legacyProgressKey = `progress-${courseId}`;
        const legacyCompletedKey = `completedLessons-${courseId}`;
        const legacyProgress = localStorage.getItem(legacyProgressKey);
        const legacyCompleted = localStorage.getItem(legacyCompletedKey);
        
        if (legacyProgress && legacyCompleted) {
          try {
            const parsedProgress = parseInt(legacyProgress);
            const parsedCompleted = JSON.parse(legacyCompleted);
            console.log('Migrating legacy progress data:', { parsedProgress, parsedCompleted });
            debouncedUpdate(parsedProgress, parsedCompleted);
            
            // Save to new format and remove legacy
            saveProgress(parsedProgress, parsedCompleted);
            localStorage.removeItem(legacyProgressKey);
            localStorage.removeItem(legacyCompletedKey);
          } catch (error) {
            console.warn('Error migrating legacy progress:', error);
          }
        }
      }
    } catch (error) {
      console.error('Error loading stable progress:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user, courseId, debouncedUpdate]);
  
  // Save progress function (also debounced)
  const saveProgress = useCallback((newProgress: number, newCompletedLessons: number[]) => {
    if (!courseId) return;
    
    try {
      const progressKey = `course-progress-${courseId}`;
      const completedKey = `completed-lessons-${courseId}`;
      
      localStorage.setItem(progressKey, newProgress.toString());
      localStorage.setItem(completedKey, JSON.stringify(newCompletedLessons));
      
      debouncedUpdate(newProgress, newCompletedLessons);
    } catch (error) {
      console.error('Error saving stable progress:', error);
    }
  }, [courseId, debouncedUpdate]);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);
  
  return {
    progress,
    completedLessons,
    isLoading,
    saveProgress
  };
};
