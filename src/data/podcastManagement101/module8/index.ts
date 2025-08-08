import type { Module } from '@/types/course';
import { lesson1UnderstandingPodcastMetrics } from './lesson1-understanding-podcast-metrics';
import { lesson2AnalyticsToolsAndPlatforms } from './lesson2-analytics-tools-and-platforms';
import { lesson3AudienceEngagementStrategies } from './lesson3-audience-engagement-strategies';
import { lesson4ScalingYourPodcast } from './lesson4-scaling-your-podcast';
import { module8Quiz } from './quiz';

const module8: Module = {
  id: 8,
  title: '📊 Module 8: Podcast Analytics & Growth',
  description: 'Master podcast metrics, analytics tools, audience engagement strategies, and scaling techniques for sustainable growth',
  lessons: [
    lesson1UnderstandingPodcastMetrics,
    lesson2AnalyticsToolsAndPlatforms,
    lesson3AudienceEngagementStrategies,
    lesson4ScalingYourPodcast,
    module8Quiz
  ]
};

export default module8; 