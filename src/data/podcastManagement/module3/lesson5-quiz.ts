import { QuizLesson } from '@/types/course';

export const lesson5Quiz: QuizLesson = {
  id: 5,
  title: 'Quiz: In-Person vs Remote Podcasting',
  duration: '30 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'Why is it important to understand the difference between in-person and remote podcast recording?',
        options: [
          'So you can reduce your internet bill',
          'It affects equipment, workflow, sound quality, and guest experience',
          'It helps you find more social media followers',
          'So you can avoid editing altogether'
        ],
        correct: 1,
        explanation: 'Understanding the difference between in-person and remote podcasting is crucial because it affects your equipment choices, workflow, sound quality, and guest experience.'
      },
      {
        question: 'What is a defining characteristic of in-person podcast recording?',
        options: [
          'It happens over Zoom',
          'All participants are in the same physical location',
          'It always uses phone microphones',
          'Each participant uses a different software'
        ],
        correct: 1,
        explanation: 'In-person podcast recording is defined by all participants being in the same physical location, using shared recording equipment.'
      },
      {
        question: 'Which of the following is true about remote podcast recording?',
        options: [
          'It\'s only possible with a professional studio',
          'All guests must be in the same city',
          'Participants join from different locations, usually over the internet',
          'It requires zero equipment'
        ],
        correct: 2,
        explanation: 'Remote podcast recording involves participants joining from different locations, usually over the internet, using their own equipment.'
      },
      {
        question: 'True or False: The decision between in-person and remote podcasting does not affect your equipment or workflow.',
        options: [
          'True',
          'False'
        ],
        correct: 1,
        explanation: 'False. The decision between in-person and remote podcasting significantly affects your equipment needs and workflow processes.'
      },
      {
        question: 'Which is a potential benefit of in-person podcast recording?',
        options: [
          'Cheaper and easier scheduling',
          'Automatic syncing of internet connections',
          'Natural conversation flow and stronger engagement',
          'Access to global guests'
        ],
        correct: 2,
        explanation: 'In-person podcast recording offers natural conversation flow and stronger engagement due to physical presence and body language.'
      },
      {
        question: 'What is one downside of remote podcasting?',
        options: [
          'It always requires physical studio space',
          'It limits the variety of guests',
          'Editing can be more complex due to syncing and quality issues',
          'You can\'t record in high definition'
        ],
        correct: 2,
        explanation: 'Remote podcasting can make editing more complex due to syncing issues and variable audio quality from different participants.'
      },
      {
        question: 'What best describes a scenario where remote recording is ideal?',
        options: [
          'You have guests nearby and want perfect audio quality',
          'You\'re hosting a live podcast in a theater',
          'You want to feature global experts from different time zones',
          'You\'re recording with no access to the internet'
        ],
        correct: 2,
        explanation: 'Remote recording is ideal when you want to feature global experts from different time zones, as it eliminates geographic barriers.'
      },
      {
        question: 'Which of the following is not a typical remote podcast recording tool?',
        options: [
          'SquadCast',
          'Riverside.fm',
          'Zoom',
          'Rodecaster Pro'
        ],
        correct: 3,
        explanation: 'Rodecaster Pro is a hardware mixer/recorder designed for in-person recording, not a remote podcasting tool.'
      },
      {
        question: 'What does the "double-ender" method involve?',
        options: [
          'Editing two podcast episodes at once',
          'Using two microphones for one guest',
          'Each participant records their own audio locally and syncs later',
          'Hosting the same show in two different languages'
        ],
        correct: 2,
        explanation: 'The double-ender method involves each participant recording their own audio locally and then syncing the tracks later for optimal quality.'
      },
      {
        question: 'True or False: In-person podcasting always has lower equipment costs than remote podcasting.',
        options: [
          'True',
          'False'
        ],
        correct: 1,
        explanation: 'False. In-person podcasting often has higher equipment costs due to the need for multiple microphones, interfaces, and studio space.'
      }
    ]
  }
}; 