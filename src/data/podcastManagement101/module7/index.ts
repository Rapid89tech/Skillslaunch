import type { Module } from '@/types/course';
import { lesson1SponsorshipsAds } from './lesson1-sponsorships-ads';
import { lesson2ListenerSupport } from './lesson2-listener-support';
import { lesson3PremiumContent } from './lesson3-premium-content';
import { lesson4AffiliateMarketing } from './lesson4-affiliate-marketing';
import { module7Quiz } from './quiz';

const module7: Module = {
  id: 7,
  title: '💰 Module 7: Monetization Strategies',
  description: 'Master sponsorships, listener support, premium content, and affiliate marketing for sustainable podcast revenue',
  lessons: [
    lesson1SponsorshipsAds,
    lesson2ListenerSupport,
    lesson3PremiumContent,
    lesson4AffiliateMarketing,
    module7Quiz
  ]
};

export default module7; 