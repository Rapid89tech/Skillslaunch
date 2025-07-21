import { useEnrollments } from '@/hooks/useEnrollments';
import { useCourseData } from '@/hooks/useCourseData';
import { useLessonNavigation } from '@/hooks/useLessonNavigation';
import { useQuizState } from '@/hooks/useQuizState';
import { useLessonCompletion } from '@/hooks/useLessonCompletion';
import { useCourseEnrollment } from '@/hooks/useCourseEnrollment';

export const useCourseLogic = () => {
  const { enrollments, enrollInCourse, updateProgress, isEnrolled, getEnrollment } = useEnrollments();
  const { course, allLessons, isLoading } = useCourseData();
  
  // Use the new helper functions
  const enrolled = true;
  const enrollment = course ? getEnrollment(course.id) : null;
  // Always calculate progress based on completed lessons for live updates
  const { completedLessons, lessonContentCompleted, markComplete, markLessonContentComplete } = useLessonCompletion(
    allLessons,
    course,
    enrolled,
    enrollment?.progress || 0,
    updateProgress
  );
  // Calculate progress live
  const progress = allLessons.length > 0 ? (completedLessons.length / allLessons.length) * 100 : 0;

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
  const { enrolling, handleEnroll } = useCourseEnrollment(course, enrollInCourse);

  const handleMarkComplete = async () => {
    await markComplete(
      currentLesson,
      currentLessonData,
      quizAttempts,
      saveQuizAttempts,
      setCurrentLesson
    );
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
    isLoading,
    canAccessLesson,
    handleEnroll,
    handleSetCurrentLesson,
    nextLesson,
    prevLesson,
    markComplete: handleMarkComplete,
    markLessonContentComplete
  };
};
