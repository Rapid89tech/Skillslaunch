
import { Course } from '@/types/course';
import { module1PodcastBasics } from './module1-podcastBasics';
import { module2ContentStrategy } from './module2-contentStrategy';
import { module3RecordingProduction } from './module3-recordingProduction';
import { module4PodcastMarketing } from './module4-podcastMarketing';
import { module5HostingDistribution } from './module5-hostingDistribution';
import { module6MarketingPromotion } from './module6-marketingPromotion';
import { module6AnalyticsOptimization } from './module6-analyticsOptimization';
import { module7MonetizationStrategies } from './module7-monetizationStrategies';
import { module9ProjectTeamManagement } from './module9/index';
import { module10LaunchingClientShows } from './module10-launchingClientShows';

export const podcastManagementCourse: Course = {
  id: 'podcast-management',
  title: 'Mastering Podcast Management',
  description: 'Master the complete podcast lifecycle from concept to monetization. Learn technical skills, content strategy, guest coordination, marketing, and revenue optimization.',
  instructor: {
    name: 'Sarah Mitchell',
    title: 'Senior Podcast Producer & Digital Media Strategist',
    bio: 'With over 8 years in digital media and podcast production, Sarah has managed top-ranking shows across multiple genres, helping creators grow their audiences and revenue streams.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c63c?w=150&h=150&fit=crop&crop=face'
  },
  duration: '10 weeks',
  level: 'Intermediate',
  category: 'Media Production',
  is_free: false,
  price: 1200,
  currency: 'ZAR',
  students: 892,
  rating: 4.8,
  thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop',
  learningObjectives: [
    'Develop comprehensive podcast content strategies',
    'Master technical aspects of podcast production',
    'Build effective guest coordination systems',
    'Create powerful marketing and promotion campaigns',
    'Implement multiple monetization strategies',
    'Set up professional hosting and distribution systems',
    'Use analytics to optimize podcast performance',
    'Master project management and team collaboration',
    'Launch and manage successful podcast projects',
    'Work professionally with clients and manage contracts',
    'Price services effectively and manage multiple shows'
  ],
  modules: [
    module1PodcastBasics,
    module2ContentStrategy,
    module3RecordingProduction,
    module4PodcastMarketing,
    module5HostingDistribution,
    module6MarketingPromotion,
    module6AnalyticsOptimization,
    module7MonetizationStrategies,
    module9ProjectTeamManagement,
    module10LaunchingClientShows
  ]
};
