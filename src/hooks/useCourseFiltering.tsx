
import { useState, useMemo } from 'react';
import { Course } from '@/hooks/useCourses';

interface FilterState {
  search: string;
  category: string;
  level: string;
  priceRange: string;
}

export const useCourseFiltering = (courses: Course[]) => {
  const [searchFilters, setSearchFilters] = useState<FilterState>({
    search: '',
    category: '',
    level: '',
    priceRange: ''
  });

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = !searchFilters.search || 
        course.title.toLowerCase().includes(searchFilters.search.toLowerCase()) ||
        course.description?.toLowerCase().includes(searchFilters.search.toLowerCase());
      
      const matchesCategory = !searchFilters.category || course.category === searchFilters.category;
      const matchesLevel = !searchFilters.level || course.level === searchFilters.level;
      
      let matchesPrice = true;
      if (searchFilters.priceRange) {
        if (searchFilters.priceRange === 'free') {
          matchesPrice = course.is_free;
        } else if (searchFilters.priceRange === 'paid') {
          matchesPrice = !course.is_free;
        }
      }

      // Show courses that are approved OR don't have a status (job-ready courses)
      const isVisible = !course.status || course.status === 'approved';

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice && isVisible;
    });
  }, [courses, searchFilters]);

  const handleClearFilters = () => {
    setSearchFilters({ search: '', category: '', level: '', priceRange: '' });
  };

  return {
    searchFilters,
    setSearchFilters,
    filteredCourses,
    handleClearFilters
  };
};
