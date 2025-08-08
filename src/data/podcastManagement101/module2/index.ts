import type { Module } from '@/types/course';
import { lesson1DefineConcept } from './lesson1-define-concept';
import { lesson2ChooseFormat } from './lesson2-choose-format';
import { lesson3EpisodeStructure } from './lesson3-episode-structure';
import { lesson4EpisodeDetails } from './lesson4-episode-details';
import { lesson5PilotTest } from './lesson5-pilot-test';
import { lesson6ContentCalendar } from './lesson6-content-calendar';
import { lesson7GuestIdentification } from './lesson7-guest-identification';
import { lesson8GuestResearch } from './lesson8-guest-research';
import { module2Quiz } from './quiz';

const module2: Module = {
  id: 2,
  title: 'Pre-Production Planning 🎙️',
  description: 'Learn the essential planning and preparation steps for creating a successful podcast, including concept development, audience research, content strategy, and guest management.',
  lessons: [
    lesson1DefineConcept,
    lesson2ChooseFormat,
    lesson3EpisodeStructure,
    lesson4EpisodeDetails,
    lesson5PilotTest,
    lesson6ContentCalendar,
    lesson7GuestIdentification,
    lesson8GuestResearch,
    module2Quiz
  ]
};

export default module2; 