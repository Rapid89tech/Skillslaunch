import type { Module } from '@/types/course';
import { lesson1ClientRelationshipsAndOnboarding } from './lesson1-client-relationships-and-onboarding';
import { lesson2PricingStrategyAndModels } from './lesson2-pricing-strategy-and-models';
import { lesson3MultiShowManagement } from './lesson3-multi-show-management';
import { lesson4CaseStudiesAndMockProjects } from './lesson4-case-studies-and-mock-projects';
import { module10Quiz } from './quiz';

const module10: Module = {
  id: 10,
  title: '🚀 Module 10: Launching and Managing Client Shows',
  description: 'Master client relationships, pricing strategies, multi-show management, and practical case studies for professional podcast management',
  lessons: [
    lesson1ClientRelationshipsAndOnboarding,
    lesson2PricingStrategyAndModels,
    lesson3MultiShowManagement,
    lesson4CaseStudiesAndMockProjects,
    module10Quiz
  ]
};

export default module10; 