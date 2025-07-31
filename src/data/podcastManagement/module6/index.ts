import { Module } from '@/types/course';
import { lesson1PodcastBranding } from './lesson1-podcast-branding';
import { lesson2TitlesAndDescriptions } from './lesson2-titles-and-descriptions';
import { lesson3PromotionStrategies } from './lesson3-promotion-strategies';
import { lesson4CollaborationsAndCommunity } from './lesson4-collaborations-and-community';
import { lesson5Quiz } from './lesson5-quiz';

export const module6MarketingPromotion: Module = {
  id: 6,
  title: '📢 Module 6: Marketing and Promotion',
  description: 'Master podcast branding, compelling titles and descriptions, promotion strategies, and community building',
  lessons: [
    lesson1PodcastBranding,
    lesson2TitlesAndDescriptions,
    lesson3PromotionStrategies,
    lesson4CollaborationsAndCommunity,
    lesson5Quiz
  ]
}; 