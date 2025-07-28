import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ChevronDown, ChevronRight, BookOpen, Play, CheckCircle, Clock, Target, X, Menu } from 'lucide-react';
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
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        if (window.innerWidth < 768) {
          setSidebarOpen(false);
        }
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen, setSidebarOpen]);

  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedCount = completedLessons.length;

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full z-50 transform transition-all duration-300 ease-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          w-[320px] md:w-[380px] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
          shadow-2xl flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 dark:text-white text-sm">Course Content</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Navigation</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Progress Section */}
        <div className="p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="text-center mb-4">
            <div className="relative inline-block mb-3">
              <svg width="80" height="80" viewBox="0 0 80 80" className="transform -rotate-90">
                <circle
                  cx="40" cy="40" r="36"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                />
                <circle
                  cx="40" cy="40" r="36"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="6"
                  strokeDasharray={2 * Math.PI * 36}
                  strokeDashoffset={2 * Math.PI * 36 * (1 - progress / 100)}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900 dark:text-white">{Math.round(progress)}%</span>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Course Progress</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{completedCount} of {totalLessons} lessons completed</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-300">Overall Progress</span>
              <span className="font-semibold text-green-600 dark:text-green-400">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{completedCount} lessons completed</span>
              <span>{totalLessons} total lessons</span>
            </div>
          </div>
        </div>

        {/* Course Title */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="font-bold text-gray-900 dark:text-white text-sm leading-tight line-clamp-2">
            {course.title}
          </h2>
        </div>

        {/* Modules List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-4">
            {course.modules.map((module, moduleIndex) => {
              const moduleStartIndex = course.modules
                .slice(0, moduleIndex)
                .reduce((acc, m) => acc + m.lessons.length, 0);
              
              const completedInModule = module.lessons.filter((_, lessonIndex) => 
                completedLessons.includes(moduleStartIndex + lessonIndex)
              ).length;
              
              const totalModuleLessons = module.lessons.length;
              const moduleProgress = totalModuleLessons > 0 ? (completedInModule / totalModuleLessons) * 100 : 0;

              return (
                <ModuleCard
                  key={module.id}
                  module={module}
                  moduleIndex={moduleIndex}
                  moduleStartIndex={moduleStartIndex}
                  completedInModule={completedInModule}
                  totalModuleLessons={totalModuleLessons}
                  moduleProgress={moduleProgress}
                  completedLessons={completedLessons}
                  currentLesson={currentLesson}
                  setCurrentLesson={setCurrentLesson}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Toggle Button */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-20 left-4 z-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
          aria-label="Open Course Navigation"
        >
          <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
        </button>
      )}
    </>
  );
};

// Module Card Component
const ModuleCard = ({ 
  module, 
  moduleIndex, 
  moduleStartIndex, 
  completedInModule, 
  totalModuleLessons, 
  moduleProgress,
  completedLessons, 
  currentLesson, 
  setCurrentLesson 
}: any) => {
  const [isExpanded, setIsExpanded] = React.useState(moduleIndex === 0);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Module Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">{moduleIndex + 1}</span>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                Module {moduleIndex + 1}
              </h3>
              <Badge variant={moduleProgress === 100 ? "default" : "secondary"} className="text-xs">
                {completedInModule}/{totalModuleLessons}
              </Badge>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-1">
              {module.title}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              style={{ width: `${moduleProgress}%` }}
            />
          </div>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </button>

      {/* Module Lessons */}
      {isExpanded && (
        <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          {module.lessons.map((lesson: any, lessonIndex: number) => {
            const lessonGlobalIndex = moduleStartIndex + lessonIndex;
            const isCompleted = completedLessons.includes(lessonGlobalIndex);
            const isCurrent = currentLesson === lessonGlobalIndex;

            return (
              <button
                key={lesson.id}
                onClick={() => setCurrentLesson(lessonGlobalIndex)}
                className={`w-full p-3 flex items-center gap-3 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                  isCurrent ? 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-500' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      isCurrent 
                        ? 'border-blue-500 bg-blue-500' 
                        : 'border-gray-300 dark:border-gray-600'
                    }`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium line-clamp-1 ${
                    isCurrent 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : isCompleted 
                        ? 'text-gray-900 dark:text-white' 
                        : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {lesson.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {lesson.duration || '5 min'}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {lesson.type || 'lesson'}
                    </span>
                  </div>
                </div>
                {isCurrent && (
                  <Play className="w-4 h-4 text-blue-500" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CourseSidebar;
