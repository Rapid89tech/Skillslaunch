
import type { Course } from '@/types/course';
import { module1IntroductionToRoofing } from './module1-introductionToRoofing';
import { module2RoofingToolsAndEquipment } from './module2';
import { module3RoofingMaterials } from './module3-roofingMaterials';
import { module4RoofStructuresAndComponents } from './module4-roofStructuresAndComponents';
import { module5RoofInstallationTechniques } from './module5-roofInstallationTechniques';
import { module6FlatAndLowSlopeRoofing } from './module6-flatAndLowSlopeRoofing';
import { module7InspectionMaintenanceRepair } from './module7-inspectionMaintenanceRepair';
import { module8RoofingSafetyAndRegulations } from './module8-roofingSafetyAndRegulations';
import { module9ReadingPlansAndEstimating } from './module9-readingPlansAndEstimating';
import { module10SustainableModernRoofing } from './module10-sustainableModernRoofing';
import { module11HandsOnPracticum } from './module11-handsOnPracticum';

export const roofingCourse: Course = {
  id: 'roofing-course',
  title: 'Professional Roofing',
  description: `Professional Roofing is a comprehensive online course designed to provide learners with essential knowledge and practical skills in residential and commercial roofing systems. This course covers fundamental roofing principles, material selection, installation techniques, and maintenance procedures required for professional roofing work.

Through detailed video demonstrations, interactive simulations, and hands-on projects, students will learn to install, repair, and maintain various roofing systems including asphalt shingles, metal roofing, tile roofing, and flat roofing systems. The course emphasizes safety standards, building codes, and professional best practices while preparing learners for real-world roofing scenarios.

Whether you're beginning a career in roofing, enhancing existing skills, or pursuing professional certification, this course provides the foundation for success in the roofing industry.`,
  instructor: {
    name: 'Robert Thompson',
    title: 'Master Roofer and Educator',
    bio: 'Licensed master roofer with 18+ years of experience in residential and commercial roofing, specializing in modern roofing systems and sustainable practices.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  },
  level: 'beginner',
  duration: '12 weeks (6-7 hours/week)',
  students: 756,
  rating: 4.5,
  price: 1599,
  currency: 'ZAR',
  is_free: false,
  thumbnail: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop',
  category: 'Construction',
  learningObjectives: [
    'Understand fundamental roofing principles and system components',
    'Master installation and repair of various roofing materials',
    'Learn to work with different roofing tools and equipment',
    'Develop skills in roof structure analysis and preparation',
    'Acquire knowledge of roofing codes and safety regulations',
    'Gain proficiency in troubleshooting and maintenance procedures',
    'Learn sustainable roofing practices and modern techniques',
    'Prepare for professional roofing certification and licensing'
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
    module11HandsOnPracticum
  ]
};

export const roofingMarkdown = `
<full markdown content from CourseDocuments/Roofing Version 03.md>
`;
