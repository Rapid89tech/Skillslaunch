
import { Course } from '@/types/course';
import { module1IntroductionToPodcasting } from './module1/index';
import { module2PreProductionPlanning } from './module2/index';
import { module3RecordingProduction } from './module3/index';
import { module4AudioEditingEssentials } from './module4/index';
import { module5HostingDistribution } from './module5/index';
import { module6MarketingPromotion } from './module6/index';
import { module7MonetizationStrategies } from './module7/index';
import { module8AnalyticsGrowth } from './module8/index';
import { module9ProjectManagementAutomation } from './module9/index';
import { module10BusinessScaling } from './module10/index';

export const podcastManagementCourse: Course = {
  id: 'podcast-management',
  title: 'Podcast Management',
  description: 'Master the complete podcast creation, management, and business development process',
  instructor: {
    name: 'Podcast Management Expert',
    title: 'Senior Podcast Consultant',
    avatar: '/avatars/podcast-expert.jpg',
    bio: 'Experienced podcast consultant with over 10 years in the industry, helping creators build successful shows and businesses.'
  },
  level: 'Intermediate',
  duration: '40 hours',
  students: 1250,
  rating: 4.8,
  price: 500,
  currency: 'USD',
  is_free: false,
  thumbnail: '/thumbnails/podcast-management.jpg',
  category: 'Business',
  learningObjectives: [
    'Understand the podcast industry landscape and opportunities',
    'Develop compelling show concepts and content strategies',
    'Master professional recording and production techniques',
    'Learn effective marketing and audience growth strategies',
    'Build sustainable monetization and business models'
  ],
  modules: [
    module1IntroductionToPodcasting,
    module2PreProductionPlanning,
    module3RecordingProduction,
    module4AudioEditingEssentials,
    module5HostingDistribution,
    module6MarketingPromotion,
    module7MonetizationStrategies,
    module8AnalyticsGrowth,
    module9ProjectManagementAutomation,
    module10BusinessScaling
  ]
};
