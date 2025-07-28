import React from 'react';
import CourseSidebar from './CourseSidebar';
import CourseHeader from './CourseHeader';
import LessonContent from './LessonContent';
import CourseControls from './CourseControls';
import ScoreDisplay from './ScoreDisplay';
import type { Course, Lesson } from '@/types/course';
import { getLessonPosition } from '@/utils/lessonMapping';
import { useModuleScores } from '@/hooks/useModuleScores';

interface CoursePlayerViewProps {
  course: Course;
  enrollment: any;
  progress: number;
  allLessons: Lesson[];
  currentLesson: number;
  currentLessonData: Lesson | undefined;
  completedLessons: number[];
  quizAttempts: Record<number, boolean>;
  canAccessLesson: (lessonIndex: number) => boolean;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setCurrentLesson: (lesson: number) => void;
  nextLesson: () => void;
  prevLesson: () => void;
  markComplete: () => void;
}

const CoursePlayerView = ({ // ... keep existing code (parameter destructuring)
  course,
  enrollment,
  progress,
  allLessons,
  currentLesson,
  currentLessonData,
  completedLessons,
  quizAttempts,
  canAccessLesson,
  isPlaying,
  setIsPlaying,
  sidebarOpen,
  setSidebarOpen,
  setCurrentLesson,
  nextLesson,
  prevLesson,
  markComplete
}: CoursePlayerViewProps) => {
  const isCurrentLessonCompleted = completedLessons.includes(currentLesson);
  const { scores, courseSummary, getGradeColor } = useModuleScores(course.id);
  const lessonPosition = getLessonPosition(course, currentLesson);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex relative overflow-hidden">
      {/* Sidebar */}
      <CourseSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        course={course}
        progress={progress}
        currentLesson={currentLesson}
        setCurrentLesson={setCurrentLesson}
        completedLessons={completedLessons}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-8 pb-24 max-w-4xl">
          {/* Lesson Content */}
          {currentLessonData && (
            <div className="animate-fade-in">
              <LessonContent
                lesson={currentLessonData}
                course={course}
                isCompleted={isCurrentLessonCompleted}
                hasAttempted={quizAttempts[currentLesson] || false}
                onMarkComplete={markComplete}
                onNext={nextLesson}
                progress={progress}
                moduleId={lessonPosition?.moduleId || 1}
                lessonId={lessonPosition?.lessonId || 1}
              />
            </div>
          )}
          {/* Show ScoreDisplay after lesson content */}
          <div className="mt-12 animate-fade-in">
            <ScoreDisplay
              courseSummary={courseSummary}
              moduleScores={scores}
              getGradeColor={getGradeColor}
              courseTitle={course.title}
            />
          </div>
        </div>
        {/* Bottom Controls - Fixed position */}
        <div className="container mx-auto px-6 max-w-4xl">
          <CourseControls
            markComplete={markComplete}
            completedLessons={completedLessons}
            currentLesson={currentLesson}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
            allLessons={allLessons}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePlayerView;
