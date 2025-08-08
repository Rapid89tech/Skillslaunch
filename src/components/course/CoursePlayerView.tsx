import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseSidebar from './CourseSidebar';
import CourseHeader from './CourseHeader';
import LessonContent from './LessonContent';
import CourseControls from './CourseControls';
import ScoreDisplay from './ScoreDisplay';
import { Menu, BookOpen } from 'lucide-react';
import type { Course, Lesson } from '@/types/course';
import { getLessonPosition } from '@/utils/lessonMapping';
import { useModuleScores } from '@/hooks/useModuleScores';
import { useCourseCompletion } from '@/hooks/useCourseCompletion';
import { useNavigate } from 'react-router-dom';
import { Trophy, Download } from 'lucide-react';
// Import markdown exports for each course
import { hairDressingMarkdown } from '@/data/hairDressing';
import { computerRepairsMarkdown } from '@/data/computerRepairs';
import { cellphoneRepairsMarkdown } from '@/data/cellphoneRepairs';
import plumbing101 from '@/data/plumbing101';
import roofing101 from '@/data/roofing101';
import { tilingMarkdown } from '@/data/tiling';

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

const sidebarVariants = {
  open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 18 } },
  closed: { x: '-100%', opacity: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } },
};

const contentVariants = {
  open: { marginLeft: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 18 } },
  closed: { marginLeft: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 18 } },
};

const buttonVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3, ease: 'easeIn' } },
};

const CoursePlayerView = ({
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
  const navigate = useNavigate();
  const isCurrentLessonCompleted = completedLessons.includes(currentLesson);
  const { scores, courseSummary, getGradeColor, dbAvailable, lastError } = useModuleScores(course.id);
  const { isCompleted, certificateGenerated } = useCourseCompletion(course);
  const lessonPosition = getLessonPosition(course, currentLesson);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Course Completion Notification */}
      {isCompleted && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-4">
            <Trophy className="w-6 h-6 text-yellow-300" />
            <div>
              <div className="font-bold text-lg">🎉 Course Completed!</div>
              <div className="text-sm opacity-90">Congratulations! You've successfully completed {course.title}</div>
            </div>
            <button
              onClick={() => navigate(`/course/${course.id}/certificate`)}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Get Certificate
            </button>
          </div>
        </div>
      )}
      
      {/* Sidebar - Animated slide in/out */}
      <AnimatePresence initial={false}>
        {sidebarOpen && (
          <motion.div
            key="sidebar"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="h-full"
            style={{ position: 'relative', zIndex: 50 }}
          >
            <CourseSidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              course={course}
              progress={progress}
              currentLesson={currentLesson}
              setCurrentLesson={setCurrentLesson}
              completedLessons={completedLessons}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Animated slide/fade */}
      <motion.div
        key="main-content"
        className={`flex-1 overflow-y-auto bg-white dark:bg-gray-900 transition-all duration-300 ease-out relative`}
        animate={sidebarOpen ? 'open' : 'closed'}
        variants={contentVariants}
      >
        {/* Animated Floating Toggle Button - Only show when sidebar is closed */}
        <AnimatePresence>
          {!sidebarOpen && (
            <motion.button
              key="sidebar-toggle"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={buttonVariants}
              onClick={() => setSidebarOpen(true)}
              className="fixed top-20 left-6 z-50 flex items-center gap-3 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 border-0 rounded-full px-4 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
              aria-label="Open Course Navigation"
              style={{
                boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.4), 0 10px 10px -5px rgba(236, 72, 153, 0.3)',
              }}
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
              {/* Icon container */}
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                <BookOpen className="w-5 h-5 text-white group-hover:scale-110 group-active:scale-90 transition-transform duration-200" />
              </div>
              {/* Text - Hidden on mobile */}
              <span className="relative text-white font-semibold text-sm hidden md:block group-hover:text-white/90 transition-colors duration-200">
                Course Content
              </span>
              {/* Arrow indicator - Hidden on mobile */}
              <div className="relative hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                <Menu className="w-3 h-3 text-white group-hover:scale-110 transition-transform duration-200" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        <div className="container mx-auto px-6 py-8 pb-24 max-w-4xl">
          {/* Lesson Content */}
          {currentLessonData && (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="animate-fade-in"
            >
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
                markdownContent={
                  course.id === 'hair-dressing-course' ? hairDressingMarkdown :
                  course.id === 'computer-repairs-course' ? computerRepairsMarkdown :
                  course.id === 'cellphone-repairs-course' ? cellphoneRepairsMarkdown :
                  course.id === 'plumbing-course' ? plumbingMarkdown :
                  course.id === 'roofing-course' ? roofingMarkdown :
                  course.id === 'tiling-course' ? tilingMarkdown :
                  undefined
                }
              />
            </motion.div>
          )}
          {/* Show ScoreDisplay after lesson content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            className="mt-12 animate-fade-in"
          >
            <ScoreDisplay
              courseSummary={courseSummary}
              moduleScores={scores}
              getGradeColor={getGradeColor}
              courseTitle={course.title}
              dbAvailable={dbAvailable}
              lastError={lastError}
            />
          </motion.div>
        </div>
        {/* Bottom Controls - Fixed position */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          className="container mx-auto px-6 max-w-4xl"
        >
          <CourseControls
            markComplete={markComplete}
            completedLessons={completedLessons}
            currentLesson={currentLesson}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
            allLessons={allLessons}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoursePlayerView;
