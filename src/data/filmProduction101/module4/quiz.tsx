import type { Quiz } from '@/types/course';

export const module4Quiz: Quiz = {
  id: 4,
  title: 'Module 4 Quiz: Directing',
  description: 'Test your knowledge of the director\'s role, scene blocking, rehearsal techniques, and collaboration with cinematographers and production designers.',
  questions: [
    {
      id: 1,
      question: 'What is the primary role of a film director?',
      options: [
        'Managing the film\'s budget and schedules',
        'Shaping the story\'s artistic and emotional vision',
        'Editing the film\'s soundtrack',
        'Operating the camera'
      ],
      correctAnswer: 1,
      explanation: 'The director shapes the story\'s artistic and emotional vision, guiding all creative aspects of the film.'
    },
    {
      id: 2,
      question: 'Which film used intimate framing to convey vulnerability?',
      options: [
        'Inception (2010)',
        'Moonlight (2016)',
        'Mad Max: Fury Road (2015)',
        'Parasite (2019)'
      ],
      correctAnswer: 1,
      explanation: 'Moonlight (2016) used intimate framing to convey vulnerability and emotional depth.'
    },
    {
      id: 3,
      question: 'What is a director\'s main responsibility when working with actors?',
      options: [
        'Choosing costumes',
        'Designing the lighting',
        'Guiding performances for authenticity',
        'Editing the dialogue'
      ],
      correctAnswer: 2,
      explanation: 'Directors guide actor performances, offering feedback to draw out authentic emotions and align with the story.'
    },
    {
      id: 4,
      question: 'Which tool helps directors visualize and plan shots before filming?',
      options: [
        'Foley sound effects',
        'Storyboards',
        'Foley pits',
        'Color grading software'
      ],
      correctAnswer: 1,
      explanation: 'Storyboards are visual blueprints that help directors plan shots, camera angles, and compositions before filming.'
    },
    {
      id: 5,
      question: 'Scene blocking refers to:',
      options: [
        'Editing transitions between film scenes',
        'Choreographing actor and camera movements in a scene',
        'Selecting costumes for characters',
        'Mixing sound effects with dialogue'
      ],
      correctAnswer: 1,
      explanation: 'Scene blocking choreographs the movement and positioning of actors and cameras within a scene.'
    },
    {
      id: 6,
      question: 'Which film used intricate blocking to create a single continuous take illusion?',
      options: [
        'Birdman (2014)',
        'The Social Network (2010)',
        'Parasite (2019)',
        '1917 (2019)'
      ],
      correctAnswer: 3,
      explanation: '1917 (2019) used intricate blocking and choreography to create the illusion of a single continuous take.'
    },
    {
      id: 7,
      question: 'What is the purpose of rehearsal techniques like table reads?',
      options: [
        'To adjust lighting and set design',
        'To refine performances and timing before filming',
        'To finalize distribution strategies',
        'To design costumes and props'
      ],
      correctAnswer: 1,
      explanation: 'Rehearsal techniques like table reads and blocking rehearsals refine performances and timing before filming.'
    },
    {
      id: 8,
      question: 'What is the main role of a cinematographer?',
      options: [
        'Directing actors during rehearsals',
        'Designing sets and props',
        'Managing camera work, lighting, and framing',
        'Writing the screenplay'
      ],
      correctAnswer: 2,
      explanation: 'Cinematographers (DPs) manage camera work, lighting, and framing to capture the film\'s visual style.'
    },
    {
      id: 9,
      question: 'In Parasite (2019), production design was used to:',
      options: [
        'Create suspense through continuous tracking shots',
        'Contrast the basement and mansion to highlight class differences',
        'Experiment with nonlinear storytelling',
        'Blend CGI and live-action effects'
      ],
      correctAnswer: 1,
      explanation: 'Parasite\'s production design contrasted the stark basement with the opulent mansion to underscore class divides.'
    },
    {
      id: 10,
      question: 'Why is collaboration between directors, cinematographers, and production designers essential?',
      options: [
        'It reduces the need for actors in a film',
        'It ensures a cohesive and immersive visual narrative',
        'It eliminates the need for post-production editing',
        'It guarantees higher box office returns'
      ],
      correctAnswer: 1,
      explanation: 'Collaboration ensures a cohesive and immersive visual narrative, aligning all visual elements with the director\'s vision.'
    }
  ]
};
