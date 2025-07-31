import { Module } from '@/types/course';
import { lesson1PodcastHostingPlatforms } from './lesson1-podcast-hosting-platforms';
import { lesson2DistributionStrategies } from './lesson2-distribution-strategies';
import { lesson3TechnicalOptimization } from './lesson3-technical-optimization';
import { lesson4Quiz } from './lesson4-quiz';

export const module5HostingDistribution: Module = {
  id: 5,
  title: '🌐 Module 5: Hosting & Distribution',
  description: 'Master podcast hosting platforms, RSS feeds, distribution strategies, and technical optimization',
  lessons: [
    lesson1PodcastHostingPlatforms,
    lesson2DistributionStrategies,
    lesson3TechnicalOptimization,
    lesson4Quiz
  ]
}; 