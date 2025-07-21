import React from 'react';
import { useCourses } from '@/hooks/useCourses';
import { useCourseFiltering } from '@/hooks/useCourseFiltering';
import Footer from '@/components/Footer';
import CourseFilters from '@/components/courses/CourseFilters';
import CoursesGrid from '@/components/courses/CoursesGrid';
import EmptyCoursesState from '@/components/courses/EmptyCoursesState';
import CoursesPageHeader from '@/components/courses/CoursesPageHeader';
import CoursesLoadingState from '@/components/courses/CoursesLoadingState';

const Courses = () => {
  const { courses, loading } = useCourses();

  const {
    searchFilters,
    setSearchFilters,
    filteredCourses,
    handleClearFilters
  } = useCourseFiltering(courses);

  if (loading && courses.length === 0) {
    return <CoursesLoadingState />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="pt-8 pb-16">
        <div className="container mx-auto px-6 py-8">
          <CoursesPageHeader />

          {filteredCourses.length === 0 ? (
            <div className="animate-fade-in">
              <EmptyCoursesState onClearFilters={handleClearFilters} />
            </div>
          ) : (
            <div className="animate-slide-in-right delay-200">
              <CoursesGrid courses={filteredCourses} />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
