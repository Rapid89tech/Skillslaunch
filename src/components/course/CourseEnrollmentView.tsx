
import React from 'react';
import CourseHeader from './enrollment/CourseHeader';
import EnrollmentSidebar from './enrollment/EnrollmentSidebar';
import CourseOverview from './enrollment/CourseOverview';
import CourseCurriculum from './enrollment/CourseCurriculum';
import LearningObjectives from './enrollment/LearningObjectives';
import type { Course } from '@/types/course';

interface CourseEnrollmentViewProps {
  course: Course;
  handleEnroll: () => void;
  enrolling: boolean;
}

const CourseEnrollmentView = ({ course, handleEnroll, enrolling }: CourseEnrollmentViewProps) => {
  const totalDuration = course.duration || "7 weeks";
  const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 py-8">
        {/* Standard Header for All Courses */}
        <CourseHeader 
          course={course} 
          totalDuration={totalDuration}
          totalLessons={totalLessons}
        />

        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <CourseOverview courseId={course.id} />
              <LearningObjectives objectives={course.learningObjectives} />
              <CourseCurriculum 
                modules={course.modules} 
                totalLessons={totalLessons}
                totalDuration={totalDuration}
              />
            </div>
            
            {/* Enrollment Sidebar */}
            <div className="lg:col-span-1">
              <EnrollmentSidebar 
                course={course}
                handleEnroll={handleEnroll}
                enrolling={enrolling}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollmentView;
