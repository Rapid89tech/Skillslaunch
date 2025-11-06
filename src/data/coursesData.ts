/**
 * Courses Data
 * Unified data structure for all courses including featured and regular courses
 */

import { featuredCourses } from './featuredCourses';
import { comingSoonCourses } from './comingSoonCourses';
import { jobReadyCourses } from './jobReadyCourses';
import { UnifiedCourse } from '@/types/unifiedCourse';

// Import individual course data
import { aiAssistedProgrammingCourse } from './aiAssistedProgrammingCourse';
import { aiAssistedWebDevelopmentCourse } from './aiAssistedWebDevelopmentCourse';
import { computerRepairsCourse } from './computerRepairsCourse';
import { entrepreneurshipFinalCourse } from './entrepreneurshipFinalCourse';
import { soundEngineeringCourse } from './soundEngineeringCourse';
import { christianTeacherCourse } from './christianTeacherCourse';
import { roofingCourse } from './roofingCourse';
import { smartHomeAutomationCourse } from './smartHomeAutomationCourse';
import { podcastManagement101Course } from './podcastManagement101Course';
import { socialMediaMarketing101Course } from './socialMediaMarketing101Course';
import { landscaping101Course } from './landscaping101Course';

// Combine all course data
const allCourseData = [
  ...featuredCourses,
  ...comingSoonCourses,
  ...jobReadyCourses,
  aiAssistedProgrammingCourse,
  aiAssistedWebDevelopmentCourse,
  computerRepairsCourse,
  entrepreneurshipFinalCourse,
  soundEngineeringCourse,
  christianTeacherCourse,
  roofingCourse,
  smartHomeAutomationCourse,
  podcastManagement101Course,
  socialMediaMarketing101Course,
  landscaping101Course
];

// Remove duplicates based on ID
const uniqueCourses = new Map<string, UnifiedCourse>();

allCourseData.forEach(course => {
  if (course && course.id) {
    // Use the most complete version if duplicate exists
    const existing = uniqueCourses.get(course.id);
    if (!existing || Object.keys(course).length > Object.keys(existing).length) {
      uniqueCourses.set(course.id, course);
    }
  }
});

// Export unified courses data
export const coursesData: UnifiedCourse[] = Array.from(uniqueCourses.values());

// Export featured courses (already exported from featuredCourses.ts but re-export for convenience)
export { featuredCourses };

// Export coming soon courses
export { comingSoonCourses };

// Export job ready courses
export { jobReadyCourses };

/**
 * Get all courses
 */
export const getAllCourses = (): UnifiedCourse[] => {
  return coursesData;
};

/**
 * Get courses by category
 */
export const getCoursesByCategory = (category: string): UnifiedCourse[] => {
  return coursesData.filter(course => course.category === category);
};

/**
 * Get course by ID
 */
export const getCourseById = (id: string): UnifiedCourse | undefined => {
  return coursesData.find(course => course.id === id || course.courseId === id);
};

/**
 * Get available courses (not coming soon)
 */
export const getAvailableCourses = (): UnifiedCourse[] => {
  return coursesData.filter(course => course.available && !course.isComingSoon);
};

/**
 * Get free courses
 */
export const getFreeCourses = (): UnifiedCourse[] => {
  return coursesData.filter(course => course.price === 0);
};

/**
 * Get paid courses
 */
export const getPaidCourses = (): UnifiedCourse[] => {
  return coursesData.filter(course => course.price > 0);
};

/**
 * Search courses
 */
export const searchCourses = (query: string): UnifiedCourse[] => {
  const lowercaseQuery = query.toLowerCase();
  return coursesData.filter(course => 
    course.title.toLowerCase().includes(lowercaseQuery) ||
    course.description.toLowerCase().includes(lowercaseQuery) ||
    course.category.toLowerCase().includes(lowercaseQuery) ||
    course.instructor.toLowerCase().includes(lowercaseQuery)
  );
};

/**
 * Get courses by level
 */
export const getCoursesByLevel = (level: string): UnifiedCourse[] => {
  return coursesData.filter(course => course.level === level);
};

/**
 * Get all unique categories
 */
export const getAllCategories = (): string[] => {
  const categories = coursesData.map(course => course.category);
  return [...new Set(categories)].sort();
};

/**
 * Get all unique levels
 */
export const getAllLevels = (): string[] => {
  const levels = coursesData.map(course => course.level);
  return [...new Set(levels)].sort();
};

/**
 * Get course statistics
 */
export const getCourseStats = () => {
  return {
    total: coursesData.length,
    featured: featuredCourses.length,
    comingSoon: comingSoonCourses.length,
    jobReady: jobReadyCourses.length,
    free: getFreeCourses().length,
    paid: getPaidCourses().length,
    categories: getAllCategories().length,
    levels: getAllLevels().length
  };
};

export default coursesData;