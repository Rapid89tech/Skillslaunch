import { Module } from '@/types/course';
import { lesson1MonetizationFundamentals } from './lesson1-monetization-fundamentals';
import { lesson2SponsorshipsAds } from './lesson2-sponsorships-ads';
import { lesson3ListenerSupportPremium } from './lesson3-listener-support-premium';
import { lesson4Quiz } from './lesson4-quiz';

export const module7MonetizationStrategies: Module = {
  id: 7,
  title: '💰 Module 7: Monetization Strategies',
  description: 'Master podcast monetization fundamentals, sponsorships, listener support, premium content, and revenue optimization',
  lessons: [
    lesson1MonetizationFundamentals,
    lesson2SponsorshipsAds,
    lesson3ListenerSupportPremium,
    lesson4Quiz
  ]
}; 