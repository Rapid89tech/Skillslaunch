import type { Module } from '@/types/course';
import { lesson1SelectingHostingPlatform } from './lesson1-selecting-hosting-platform';
import { lesson2SettingUpRssFeeds } from './lesson2-setting-up-rss-feeds';
import { lesson3SubmittingToDirectories } from './lesson3-submitting-to-directories';
import { lesson4CreatingPodcastWebsite } from './lesson4-creating-podcast-website';
import { module5Quiz } from './quiz';

const module5: Module = {
  id: 5,
  title: '🌐 Module 5: Hosting & Distribution',
  description: 'Master hosting platforms, RSS feeds, directory submissions, and website creation for effective podcast distribution',
  lessons: [
    lesson1SelectingHostingPlatform,
    lesson2SettingUpRssFeeds,
    lesson3SubmittingToDirectories,
    lesson4CreatingPodcastWebsite,
    module5Quiz
  ]
};

export default module5; 