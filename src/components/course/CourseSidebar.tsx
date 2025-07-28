import React, { useEffect, useRef } from 'react';
import SidebarHeader from './sidebar/SidebarHeader';
import SidebarProgress from './sidebar/SidebarProgress';
import ModuleSection from './sidebar/ModuleSection';
import type { Course } from '@/types/course';

interface CourseSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  course: Course;
  progress: number;
  currentLesson: number;
  setCurrentLesson: (lesson: number) => void;
  completedLessons: number[];
}

const CourseSidebar = ({ 
  sidebarOpen, 
  setSidebarOpen, 
  course, 
  progress, 
  currentLesson, 
  setCurrentLesson, 
  completedLessons 
}: CourseSidebarProps) => {
  // For entry animation
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.add('animate-slide-in-left');
    }
  }, []);

  // Sidebar slide-in/out logic
  return (
    <>
      {/* Sidebar Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close Sidebar Overlay"
        />
      )}
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          w-80 md:w-96 bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/60 dark:from-gray-900/90 dark:via-blue-900/40 dark:to-purple-900/40 border-r border-gray-200 dark:border-gray-700 flex-shrink-0 overflow-hidden shadow-2xl glassmorphism-card backdrop-blur-xl`}
      >
        <SidebarHeader setSidebarOpen={setSidebarOpen} courseName={course.title} />
        {/* Animated Circular Progress at Top */}
        <div className="sticky top-0 z-10 p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white/80 to-blue-50/60 dark:from-gray-900/80 dark:to-blue-900/30 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-2 animate-fade-in">
            <svg width="80" height="80" viewBox="0 0 80 80" className="mb-2">
              <circle cx="40" cy="40" r="36" fill="#f3f4f6" />
              <circle
                cx="40" cy="40" r="36" fill="none" stroke="#a5b4fc" strokeWidth="6"
                strokeDasharray={2 * Math.PI * 36}
                strokeDashoffset={2 * Math.PI * 36 * (1 - (progress / 100))}
                strokeLinecap="round"
                className="transition-all duration-700"
              />
            </svg>
            <span className="text-2xl font-bold text-blue-700 animate-scale-in">{Math.round(progress)}%</span>
            <span className="text-xs text-gray-500">Course Progress</span>
          </div>
        </div>
        {/* Progress Section (keep for details) */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white/80 to-blue-50/60 dark:from-gray-900/80 dark:to-blue-900/30 backdrop-blur-xl">
          <SidebarProgress 
            progress={progress}
            completedLessons={completedLessons}
            course={course}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            {course.modules.map((module, moduleIndex) => {
              const moduleStartIndex = course.modules.slice(0, moduleIndex)
                .reduce((acc, m) => acc + m.lessons.length, 0);
              return (
                <div className="animate-fade-in-up" key={module.id}>
                  <ModuleSection
                    module={module}
                    moduleIndex={moduleIndex}
                    moduleStartIndex={moduleStartIndex}
                    completedLessons={completedLessons}
                    currentLesson={currentLesson}
                    setCurrentLesson={setCurrentLesson}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Floating Open Sidebar Button (visible when sidebar is closed) */}
      {!sidebarOpen && (
        <button
          className="fixed top-6 left-3 z-50 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-xl border-2 border-white/40 hover:scale-105 active:scale-95 transition-all duration-200 md:top-8 md:left-6"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open Course Navigation"
        >
          <span className="hidden md:inline">Course Content</span>
          <span className="md:hidden">☰</span>
        </button>
      )}
    </>
  );
};

export default CourseSidebar;
