
import { Course, Module } from '@/types/course';
import { module1IntroductionToRoofing } from './module1-introductionToRoofing';
import { module2RoofingToolsAndEquipment } from './module2/index';
import { module3RoofingMaterials } from './module3-roofingMaterials';
import { module4RoofStructuresAndComponents } from './module4-roofStructuresAndComponents';
import { module5RoofInstallationTechniques } from './module5-roofInstallationTechniques';
import { module6FlatAndLowSlopeRoofing } from './module6-flatAndLowSlopeRoofing';
import { module7InspectionMaintenanceRepair } from './module7-inspectionMaintenanceRepair';
import { module8RoofingSafetyAndRegulations } from './module8-roofingSafetyAndRegulations';
import { module9ReadingPlansAndEstimating } from './module9-readingPlansAndEstimating';
import { module10SustainableModernRoofing } from './module10-sustainableModernRoofing';
import { module11HandsOnPracticum } from './module11-handsOnPracticum';
import { lesson5Certificate } from './module5-certificate';

export const roofingCourse: Course = {
  id: 'roofing-course',
  title: 'Professional Roofing Certification',
  description: 'Comprehensive roofing training covering roofing fundamentals, materials, installation techniques, safety protocols, maintenance, sustainable solutions, hands-on practicum, and professional career development in the roofing industry',
  instructor: {
    name: 'David Wilson',
    title: 'Master Roofer & Construction Specialist',
    bio: 'With over 20 years of experience in residential and commercial roofing, David is a certified master roofer who has managed projects ranging from single-family homes to large industrial complexes. He specializes in metal roofing, green roof systems, and sustainable roofing solutions.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  duration: '44 weeks',
  level: 'Beginner',
  category: 'Construction & Trades',
  is_free: false,
  price: 2500,
  currency: 'ZAR',
  students: 324,
  rating: 4.8,
  thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
  learningObjectives: [
    'Understand different types of roofing systems and their applications',
    'Master essential roofing tools and equipment usage',
    'Learn proper safety protocols and fall protection systems',
    'Develop skills in roofing material selection and installation',
    'Practice accurate measuring, cutting, and installation methods',
    'Master weatherproofing and waterproofing techniques',
    'Understand building codes and inspection requirements',
    'Learn to work with various roofing materials safely',
    'Apply specialized techniques for different roof types',
    'Develop troubleshooting skills for common roofing issues',
    'Master repair and maintenance procedures',
    'Apply professional quality control standards',
    'Calculate materials and estimate project costs',
    'Build confidence for independent roofing projects',
    'Conduct thorough roof inspections and assessments',
    'Implement effective preventative maintenance strategies',
    'Read and interpret blueprints and construction plans',
    'Perform accurate material take-offs and waste calculations',
    'Understand sustainable roofing solutions and green technologies',
    'Learn about solar roofing systems and energy-efficient designs',
    'Apply environmental considerations and recycling practices',
    'Gain hands-on experience through practical training exercises',
    'Develop teamwork and communication skills for construction projects',
    'Master safety procedures through drills and simulated scenarios',
    'Practice installation techniques in controlled environments'
  ],
  modules: [
    module1IntroductionToRoofing,
    module2RoofingToolsAndEquipment,
    module3RoofingMaterials,
    module4RoofStructuresAndComponents,
    module5RoofInstallationTechniques,
    module6FlatAndLowSlopeRoofing,
    module7InspectionMaintenanceRepair,
    module8RoofingSafetyAndRegulations,
    module9ReadingPlansAndEstimating,
    module10SustainableModernRoofing,
    module11HandsOnPracticum,
    {
      id: 12,
      title: 'Course Completion',
      description: 'Complete your roofing certification',
      lessons: [lesson5Certificate]
    } as Module
  ]
};
