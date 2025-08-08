import type { Module } from '@/types/course';
import { lesson1PodcastFormat } from './lesson1-podcast-format';
import { lesson2HostsGuests } from './lesson2-hosts-guests';
import { lesson3Budget } from './lesson3-budget';
import { lesson4EditingSkills } from './lesson4-editing-skills';
import { lesson5PublishingPlan } from './lesson5-publishing-plan';
import { lesson6Microphones } from './lesson6-microphones';
import { lesson7AudioInterfaces } from './lesson7-audio-interfaces';
import { lesson8Headphones } from './lesson8-headphones';
import { lesson9RecordingSoftware } from './lesson9-recording-software';
import { lesson10RemoteRecording } from './lesson10-remote-recording';
import { lesson11Accessories } from './lesson11-accessories';
import { lesson12ExportManagement } from './lesson12-export-management';
import { lesson13ToolSelection } from './lesson13-tool-selection';
import { module3Quiz } from './quiz';

const module3: Module = {
  id: 3,
  title: 'Recording & Production Workflow',
  description: 'Learn how to choose the right recording tools and software, set up your recording environment, and master the production workflow for professional podcast quality.',
  lessons: [
    lesson1PodcastFormat,
    lesson2HostsGuests,
    lesson3Budget,
    lesson4EditingSkills,
    lesson5PublishingPlan,
    lesson6Microphones,
    lesson7AudioInterfaces,
    lesson8Headphones,
    lesson9RecordingSoftware,
    lesson10RemoteRecording,
    lesson11Accessories,
    lesson12ExportManagement,
    lesson13ToolSelection,
    module3Quiz
  ]
};

export default module3; 