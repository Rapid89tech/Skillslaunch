
import { Course, Module } from '@/types/course';
import { module1IntroductionToTiling } from './module1-introductionToTiling';
import { module2SurfacePreparationAndLayout } from './module2-surfacePreparationAndLayout';
import { module3TileInstallationTechniques } from './module3-tileInstallationTechniques';
import { module4GroutingAndFinishing } from './module4-groutingAndFinishing';
import { module5SpecializedApplications } from './module5-specializedApplications';
import { module9ReadingPlansAndEstimating } from './module9-readingPlansAndEstimating';
import { lesson6Certificate } from './module6-certificate';

export const tilingCourse: Course = {
  id: 'tiling-course',
  title: 'Professional Tiling Certification',
  description: 'Comprehensive tiling training covering tile materials, installation techniques, surface preparation, layout planning, grouting, finishing methods, specialized applications, troubleshooting, and professional quality control for floors, walls, and specialty applications',
  instructor: {
    name: 'Marcus Thompson',
    title: 'Master Tiler & Construction Specialist',
    bio: 'With over 18 years of experience in residential and commercial tiling, Marcus is a certified master tiler who has completed projects ranging from luxury home renovations to large commercial installations. He specializes in natural stone, porcelain, and decorative tile work.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  duration: '20 weeks',
  level: 'Beginner',
  category: 'Construction & Trades',
  is_free: false,
  price: 2200,
  currency: 'ZAR',
  students: 456,
  rating: 4.7,
  thumbnail: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop',
  learningObjectives: [
    'Understand different types of tiles and their applications',
    'Master essential tiling tools and equipment usage',
    'Learn proper surface preparation and waterproofing techniques',
    'Develop skills in tile layout planning and design',
    'Practice accurate tile cutting and installation methods',
    'Master grouting and finishing techniques',
    'Understand expansion joints and movement management',
    'Learn to work with different substrates safely',
    'Apply specialized techniques for wet and outdoor environments',
    'Develop troubleshooting skills for common tiling issues',
    'Master repair and maintenance procedures',
    'Apply professional quality control standards',
    'Calculate materials and estimate project costs',
    'Build confidence for independent tiling projects',
    'Read and interpret blueprints and construction plans',
    'Perform accurate material take-offs and waste calculations'
  ],
  modules: [
    module1IntroductionToTiling,
    module2SurfacePreparationAndLayout,
    module3TileInstallationTechniques,
    module4GroutingAndFinishing,
    module5SpecializedApplications,
    module9ReadingPlansAndEstimating,
    {
      id: 6,
      title: 'Course Completion',
      description: 'Complete your professional tiling certification',
      lessons: [lesson6Certificate]
    } as Module
  ]
};
