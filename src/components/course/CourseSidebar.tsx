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
          w-[320px] md:w-[380px] bg-[linear-gradient(135deg,_rgba(239,68,68,0.8)_0%,_rgba(244,63,94,0.8)_100%)] border-r border-gray-200 dark:border-gray-800
          shadow-2xl flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
          <div className="flex items-center gap-3 animate-fade-in-down">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500/80 to-pink-500/80 rounded-xl flex items-center justify-center shadow-md">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-white text-sm">Course Content</h2>
              <p className="text-xs text-white/80">Navigation</p>
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
        <div className="p-6 bg-[linear-gradient(135deg,_rgba(239,68,68,0.16)_0%,_rgba(244,63,94,0.16)_100%)] border-b border-gray-200 dark:border-gray-700 animate-fade-in-up">
          <div className="text-center mb-4">
            <div className="relative inline-block mb-3 animate-scale-in">
              <svg width="100" height="100" viewBox="0 0 100 100" className="drop-shadow-lg">
                <defs>
                  <linearGradient id="progressRedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#fca5a5"/>
                  </filter>
                </defs>
                {/* Background ring */}
                <circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="#fca5a5"
                  strokeWidth="12"
                  opacity="0.25"
                />
                {/* Foreground progress ring */}
                <circle
                  cx="50" cy="50" r="40"
                  fill="none"
                  stroke="url(#progressRedGradient)"
                  strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 40}
                  strokeDashoffset={2 * Math.PI * 40 * (1 - progress / 100)}
                  strokeLinecap="round"
                  filter="url(#shadow)"
                  style={{ transition: 'stroke-dashoffset 1s cubic-bezier(.4,2,.3,1)' }}
                />
                {/* 3D effect inner shadow */}
                <circle
                  cx="50" cy="50" r="34"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-extrabold text-white drop-shadow-md">{Math.round(progress)}%</span>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">Course Progress</h3>
            <p className="text-xs text-white/80">{completedCount} of {totalLessons} lessons completed</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/90">Overall Progress</span>
              <span className="font-semibold text-white">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" style={{ background: 'linear-gradient(90deg, #000 0%, #ef4444 100%)', opacity: 0.8 }} />
            <div className="flex items-center justify-between text-xs text-white/80">
              <span>{completedCount} lessons completed</span>
              <span>{totalLessons} total lessons</span>
            </div>
          </div>
        </div>

        {/* Course Title */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="font-bold text-white text-sm leading-tight line-clamp-2">
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
    <div className="bg-gray-50/80 dark:bg-gray-800/80 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up" style={{ animationDelay: `${moduleIndex * 80}ms` }}>
      {/* Module Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500/80 to-pink-500/80 rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white text-xs font-bold">{moduleIndex + 1}</span>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-white text-sm">
                Module {moduleIndex + 1}
              </h3>
              <Badge variant={moduleProgress === 100 ? "default" : "secondary"} className="text-xs bg-gradient-to-r from-red-500/80 to-pink-500/80 text-white border-0 shadow-md">
                {completedInModule}/{totalModuleLessons}
              </Badge>
            </div>
            <p className="text-xs text-white/80 line-clamp-1">
              {module.title}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-1.5 bg-black/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-black to-red-500 transition-all duration-300"
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
        <div className="border-t border-gray-200 dark:border-gray-700 bg-white/10">
          {module.lessons.map((lesson: any, lessonIndex: number) => {
            const lessonGlobalIndex = moduleStartIndex + lessonIndex;
            const isCompleted = completedLessons.includes(lessonGlobalIndex);
            const isCurrent = currentLesson === lessonGlobalIndex;

            return (
              <button
                key={lesson.id}
                onClick={() => setCurrentLesson(lessonGlobalIndex)}
                className={`w-full p-3 flex items-center gap-3 text-left hover:bg-white/10 transition-colors ${
                  isCurrent ? 'bg-white/20 border-r-2 border-white' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-green-300" />
                  ) : (
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      isCurrent 
                        ? 'border-white bg-white' 
                        : 'border-white/60'
                    }`} />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-medium line-clamp-1 ${
                    isCurrent 
                      ? 'text-white' 
                      : isCompleted 
                        ? 'text-white/90' 
                        : 'text-white/80'
                  }`}>
                    {lesson.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3 text-white/60" />
                    <span className="text-xs text-white/80">
                      {lesson.duration || '5 min'}
                    </span>
                    <span className="text-xs text-white/60">•</span>
                    <span className="text-xs text-white/80 capitalize">
                      {lesson.type || 'lesson'}
                    </span>
                  </div>
                </div>
                {isCurrent && (
                  <Play className="w-4 h-4 text-white" />
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
