import type { Module } from '@/types/course';
import { lesson1PodcastBranding } from './lesson1-podcast-branding';
import { lesson2TitlesAndDescriptions } from './lesson2-titles-and-descriptions';
import { lesson3PromotionStrategies } from './lesson3-promotion-strategies';
import { lesson4CollaborationsCommunity } from './lesson4-collaborations-community';
import { module6Quiz } from './quiz';

const module6: Module = {
  id: 6,
  title: '📣 Module 6: Marketing and Promotion',
  description: 'Master podcast branding, compelling titles/descriptions, promotion strategies, and community building for audience growth',
  lessons: [
    lesson1PodcastBranding,
    lesson2TitlesAndDescriptions,
    lesson3PromotionStrategies,
    lesson4CollaborationsCommunity,
    module6Quiz
  ]
};

export default module6; 