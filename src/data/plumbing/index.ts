
import { Course, Module } from '@/types/course';
import { module1PlumbingFundamentals } from './module1-plumbingFundamentals';
import { module2PipingAndFittings } from './module2-pipingAndFittings';
import { module3HealthAndSafety } from './module3-healthAndSafety';
import { module4PlumbingSystemsOverview } from './module4-plumbingSystemsOverview';
import { module5PipeInstallationAndFittings } from './module5-pipeInstallationAndFittings';
import { module6FixturesAndAppliances } from './module6-fixturesAndAppliances';
import { module7DrainageWasteVent } from './module7-drainageWasteVent';
import { module8RepairsAndMaintenance } from './module8-repairsAndMaintenance';
import { module9BlueprintsAndEstimation } from './module9-blueprintsAndEstimation';
import { lesson5Certificate } from './module5-certificate';

export const plumbingCourse: Course = {
  id: 'plumbing-course',
  title: 'Professional Plumbing Training Program',
  description: 'Comprehensive plumbing training covering residential and commercial systems, pipe installation, fixture repair, safety protocols, building codes compliance, and project management',
  instructor: {
    name: 'Robert Martinez',
    title: 'Master Plumber & Training Instructor',
    bio: 'With over 20 years of experience in residential and commercial plumbing, Robert is a certified master plumber who has trained over 500 apprentices and runs a successful plumbing contracting business.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  duration: '20 weeks',
  level: 'Beginner',
  category: 'Trades & Construction',
  is_free: false,
  price: 3500,
  currency: 'ZAR',
  students: 734,
  rating: 4.8,
  thumbnail: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&h=600&fit=crop',
  learningObjectives: [
    'Understand plumbing system fundamentals and water flow principles',
    'Install and connect various types of pipes and fittings',
    'Design and install proper drainage and venting systems',
    'Repair and maintain plumbing fixtures and appliances',
    'Diagnose and troubleshoot common plumbing problems',
    'Follow safety protocols and building code requirements',
    'Use professional plumbing tools and equipment effectively',
    'Read and interpret plumbing blueprints and schematics',
    'Perform leak detection and pipe locating techniques',
    'Estimate materials and costs for plumbing projects',
    'Plan and execute complete plumbing installations',
    'Develop business skills for independent plumbing work'
  ],
  modules: [
    module1PlumbingFundamentals,
    module2PipingAndFittings,
    module3HealthAndSafety,
    module4PlumbingSystemsOverview,
    module5PipeInstallationAndFittings,
    module6FixturesAndAppliances,
    module7DrainageWasteVent,
    module8RepairsAndMaintenance,
    module9BlueprintsAndEstimation,
    {
      id: 10,
      title: 'Course Completion',
      description: 'Complete your plumbing certification',
      lessons: [lesson5Certificate]
    } as Module
  ]
};
