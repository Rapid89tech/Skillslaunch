import React, { useState, useMemo } from 'react';
import { useCourses } from '@/hooks/useCourses';
import { useCourseFiltering } from '@/hooks/useCourseFiltering';
import Footer from '@/components/Footer';
import CourseFilters from '@/components/courses/CourseFilters';
import CoursesGrid from '@/components/courses/CoursesGrid';
import EmptyCoursesState from '@/components/courses/EmptyCoursesState';
import CoursesPageHeader from '@/components/courses/CoursesPageHeader';
import CoursesLoadingState from '@/components/courses/CoursesLoadingState';
import CourseFilter from '@/components/CourseFilter';
import bgImage from '../../Videos/generation-fe264dfe-3951-43ef-8551-b98c8d6229fa.png';
import { Filter } from 'lucide-react';

const Courses = () => {
  const { courses, loading } = useCourses();
  const [filterOpen, setFilterOpen] = useState(false);
  const [horizontalFilters, setHorizontalFilters] = useState({
    keyword: '',
    category: '',
    availability: ''
  });

  // Define all possible categories, including the new ones
  const allStaticCategories = [
    "Audio Technology",
    "Beauty and Health",
    "Business & Entrepreneurship",
    "Construction",
    "Information Communication and technology",
    "Mechanical Repairs",
    "Media & Content Creation",
    "Religion",
    "Hospitality and Culinary",
    "Office and Admin",
    "Construction and Civil",
    "Motor Vehicles",
    "Appliances",
    "Professional Services",
    "Film & Broadcasting"
  ];

  // Get unique categories from courses and combine with static categories
  const categories = useMemo(() => {
    const dynamicCategories = courses.map(course => course.category);
    const combinedCategories = [...new Set([...allStaticCategories, ...dynamicCategories])];
    return combinedCategories.sort();
  }, [courses]);

  // Filter courses based on horizontal filters
  const horizontallyFilteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesKeyword = !horizontalFilters.keyword || 
        course.title.toLowerCase().includes(horizontalFilters.keyword.toLowerCase()) ||
        course.description.toLowerCase().includes(horizontalFilters.keyword.toLowerCase());
      
      const matchesCategory = !horizontalFilters.category || course.category === horizontalFilters.category;
      
      const matchesAvailability = !horizontalFilters.availability || 
        (horizontalFilters.availability === 'available' && course.available) ||
        (horizontalFilters.availability === 'coming-soon' && !course.available) ||
        (horizontalFilters.availability === 'enrolled' && course.status === 'enrolled');
      
      return matchesKeyword && matchesCategory && matchesAvailability;
    });
  }, [courses, horizontalFilters]);

  const {
    searchFilters,
    setSearchFilters,
    filteredCourses,
    handleClearFilters
  } = useCourseFiltering(horizontallyFilteredCourses);

  if (loading && courses.length === 0) {
    return <CoursesLoadingState />;
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* Floating Filter Button */}
      <button
        className="fixed top-1/2 left-6 z-40 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full px-3 py-2 shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-400/60 animate-ripple flex items-center gap-2"
        style={{ transform: 'translateY(-50%)' }}
        onClick={() => setFilterOpen(true)}
        aria-label="Open Filters"
      >
        <Filter className="w-4 h-4" />
        <span className="text-xs font-semibold">Filter Courses</span>
      </button>
      {/* Sliding Filter Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full max-w-xs z-50 flex items-center transition-transform duration-500 ease-in-out ${filterOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} animate-filter-slide`}
        style={{ borderTopRightRadius: '2rem', borderBottomRightRadius: '2rem', pointerEvents: filterOpen ? 'auto' : 'none' }}
      >
        <div className="relative w-full h-[90vh] mx-2 my-auto flex flex-col justify-center items-center bg-white/70 backdrop-blur-2xl shadow-2xl border-0"
          style={{ borderTopRightRadius: '2rem', borderBottomRightRadius: '2rem', minWidth: '320px', maxWidth: '360px' }}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-[2rem] pointer-events-none z-0 animate-gradient-border" style={{ border: '3px solid transparent', background: 'linear-gradient(120deg, #ff3c3c 0%, #ff7b7b 50%, #ff3c3c 100%)', opacity: 0.18 }} />
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-2xl font-bold focus:outline-none transition-colors duration-200 z-10 bg-white/70 rounded-full p-1 shadow-md"
            onClick={() => setFilterOpen(false)}
            aria-label="Close Filters"
          >
            ×
          </button>
          {/* Filter Content */}
          <div className="w-full flex flex-col items-center justify-center gap-6 px-6 py-8 z-10">
            <h2 className="text-lg font-bold text-red-700 mb-2 tracking-wide">Filter Courses</h2>
            <CourseFilters onFiltersChange={setSearchFilters} hideLevel hidePrice />
          </div>
        </div>
        <style>{`
          .animate-filter-slide {
            transition: transform 0.5s cubic-bezier(.4,2,.3,1), opacity 0.5s cubic-bezier(.4,2,.3,1);
          }
          .animate-gradient-border {
            background-size: 200% 200%;
            animation: gradientBorder 4s ease-in-out infinite alternate;
          }
          @keyframes gradientBorder {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}</style>
      </div>
      {/* Fixed animated background */}
      <div
        className="fixed inset-0 w-full h-full z-0 will-change-transform animate-bg-fade"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-white/80" />
      </div>
      <div className="relative z-10">
      <div className="pt-8 pb-16">
        <div className="container mx-auto px-6 py-8">
          <CoursesPageHeader />
          
          {/* Horizontal Course Filter */}
          <div className="mb-8">
            <CourseFilter 
              onFilterChange={setHorizontalFilters}
              categories={categories}
            />
          </div>
          
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
      <style>{`
        .animate-bg-fade {
          animation: bgFadeIn 1.5s cubic-bezier(.4,2,.3,1);
        }
        @keyframes bgFadeIn {
          from { opacity: 0; filter: blur(8px); }
          to { opacity: 1; filter: blur(0); }
        }
      `}</style>
    </div>
  );
};

export default Courses;
