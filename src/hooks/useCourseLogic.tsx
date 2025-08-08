import { useEnrollments } from '@/hooks/useEnrollments';
import { useCourseData } from '@/hooks/useCourseData';
import { useLessonNavigation } from '@/hooks/useLessonNavigation';
import { useQuizState } from '@/hooks/useQuizState';
import { useLessonCompletion } from '@/hooks/useLessonCompletion';
import { useCourseEnrollment } from '@/hooks/useCourseEnrollment';
import { useUserProgress } from '@/hooks/useUserProgress';

export const useCourseLogic = () => {
  const { enrollments, enrollInCourse, updateProgress, isEnrolled, getEnrollment } = useEnrollments();
  const { course, allLessons, isLoading } = useCourseData();
  const { progress: userProgress, updateCurrentPosition, markLessonCompleted } = useUserProgress(course?.id);
  
  // Use the new helper functions
  const enrolled = course ? isEnrolled(course.id) : false;
  const enrollment = course ? getEnrollment(course.id) : null;
  // Always calculate progress based on completed lessons for live updates
  const { completedLessons, lessonContentCompleted, markComplete, markLessonContentComplete } = useLessonCompletion(
    allLessons,
    course,
    enrolled,
    enrollment?.progress || 0,
    updateProgress
  );
  // Calculate progress live - use user progress if available, otherwise fallback to enrollment progress
  const progress = userProgress?.progress_percentage || (allLessons.length > 0 ? (completedLessons.length / allLessons.length) * 100 : 0);

  console.log("useCourseLogic: Course:", course?.id, "Enrolled:", enrolled, "Progress:", progress);

  const {
    currentLesson,
    setCurrentLesson,
    currentLessonData,
    isPlaying,
    setIsPlaying,
    sidebarOpen,
    setSidebarOpen,
    canAccessLesson,
    handleSetCurrentLesson,
    nextLesson,
    prevLesson
  } = useLessonNavigation(allLessons, completedLessons);

  const { quizAttempts, saveQuizAttempts } = useQuizState(course, enrolled);
  const { 
    enrolling, 
    showPaymentPopup, 
    handleEnroll, 
    handlePaymentPopupClose, 
    handleEnrollmentSuccess 
  } = useCourseEnrollment(course, enrollInCourse);

  const handleMarkComplete = async () => {
    await markComplete(
      currentLesson,
      currentLessonData,
      quizAttempts,
      saveQuizAttempts,
      setCurrentLesson
    );
    
    // Also save to permanent user progress
    if (course && currentLessonData) {
      // Find the module and lesson IDs by searching through the course structure
      let moduleId = 1;
      let lessonId = currentLessonData.id;
      
      for (const module of course.modules) {
        const lessonIndex = module.lessons.findIndex(lesson => lesson.id === currentLessonData.id);
        if (lessonIndex !== -1) {
          moduleId = module.id;
          lessonId = module.lessons[lessonIndex].id;
          break;
        }
      }
      
      await markLessonCompleted(moduleId, lessonId);
      await updateCurrentPosition(moduleId, lessonId);
    }
  };

  return {
    course,
    enrollment,
    isEnrolled: enrolled,
    progress,
    allLessons,
    currentLesson,
    currentLessonData,
    completedLessons,
    lessonContentCompleted,
    quizAttempts,
    isPlaying,
    setIsPlaying,
    sidebarOpen,
    setSidebarOpen,
    enrolling,
    showPaymentPopup,
    isLoading,
    canAccessLesson,
    handleEnroll,
    handlePaymentPopupClose,
    handleEnrollmentSuccess,
    handleSetCurrentLesson,
    nextLesson,
    prevLesson,
    markComplete: handleMarkComplete,
    markLessonContentComplete
  };
};
