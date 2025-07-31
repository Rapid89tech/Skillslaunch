
import type { Course } from '@/types/course';
import { module1PlumbingFundamentals } from './module1-plumbingFundamentals';
import { module2PipingAndFittings } from './module2-pipingAndFittings';
import { module3PlumbingSystemsOverview } from './module3-plumbingSystemsOverview';
import { module4PlumbingSystemsOverview } from './module4-plumbingSystemsOverview';
import { module5PipeInstallationAndFittings } from './module5-pipeInstallationAndFittings';
import { module6FixturesAndAppliances } from './module6-fixturesAndAppliances';
import { module7DrainageWasteVent } from './module7-drainageWasteVent';
import { module8RepairsAndMaintenance } from './module8-repairsAndMaintenance';
import { module9BlueprintsAndEstimation } from './module9-blueprintsAndEstimation';

export const plumbingMarkdown = `
<full markdown content from CourseDocuments/Plumbing Version 03.docx.md>
`;

export const plumbingCourse: Course = {
  id: 'plumbing-course',
  title: 'Professional Plumbing',
  description: `Professional Plumbing is a comprehensive online course designed to provide learners with essential knowledge and practical skills in residential and commercial plumbing systems. This course covers fundamental plumbing principles, installation techniques, maintenance procedures, and safety protocols required for professional plumbing work.

Through detailed video demonstrations, interactive simulations, and hands-on projects, students will learn to install, repair, and maintain various plumbing systems including water supply, drainage, fixtures, and appliances. The course emphasizes safety standards, building codes, and professional best practices while preparing learners for real-world plumbing scenarios.

Whether you're beginning a career in plumbing, enhancing existing skills, or pursuing professional certification, this course provides the foundation for success in the plumbing industry.`,
  instructor: {
    name: 'Michael Rodriguez',
    title: 'Master Plumber and Educator',
    bio: 'Licensed master plumber with 20+ years of experience in residential and commercial plumbing, specializing in system design and code compliance.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  level: 'beginner',
  duration: '14 weeks (7-8 hours/week)',
  students: 892,
  rating: 4.6,
  price: 1699,
  currency: 'ZAR',
  is_free: false,
  thumbnail: 'https://images.unsplash.com/photo-1581092335878-c4d7f76f3c8f?w=400&h=300&fit=crop',
  category: 'Construction',
  learningObjectives: [
    'Understand fundamental plumbing principles and system components',
    'Master installation and repair of plumbing fixtures and appliances',
    'Learn to work with various piping materials and connection methods',
    'Develop skills in water supply and drainage system installation',
    'Acquire knowledge of plumbing codes and safety regulations',
    'Gain proficiency in troubleshooting and maintenance procedures',
    'Learn business management and customer service skills',
    'Prepare for professional plumbing certification and licensing'
  ],
  modules: [
    module1PlumbingFundamentals,
    module2PipingAndFittings,
    module3PlumbingSystemsOverview,
    module4PlumbingSystemsOverview,
    module5PipeInstallationAndFittings,
    module6FixturesAndAppliances,
    module7DrainageWasteVent,
    module8RepairsAndMaintenance,
    module9BlueprintsAndEstimation
  ]
};
