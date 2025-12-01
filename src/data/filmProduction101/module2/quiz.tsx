import type { Quiz } from '@/types/course';

export const module2Quiz: Quiz = {
  id: 2,
  title: 'Module 2 Quiz: Film Theory and Storytelling',
  description: 'Test your knowledge of storytelling elements, narrative structures, genres, screenwriting, and storyboarding.',
  questions: [
    {
      id: 1,
      question: 'What are the four key elements of storytelling?',
      options: [
        'Plot, Character, Conflict, Resolution',
        'Setting, Theme, Mood, Tone',
        'Beginning, Middle, End, Epilogue',
        'Dialogue, Action, Music, Effects'
      ],
      correctAnswer: 0,
      explanation: 'The four key elements of storytelling are Plot, Character, Conflict, and Resolution.'
    },
    {
      id: 2,
      question: 'Which narrative structure presents events in chronological order?',
      options: [
        'Non-linear',
        'Circular',
        'Linear',
        'Fragmented'
      ],
      correctAnswer: 2,
      explanation: 'Linear narrative structure presents events in chronological order from beginning to end.'
    },
    {
      id: 3,
      question: 'What is a circular narrative structure?',
      options: [
        'A story that never ends',
        'A story that begins and ends at the same point',
        'A story told backwards',
        'A story with multiple timelines'
      ],
      correctAnswer: 1,
      explanation: 'A circular narrative begins and ends at the same point, creating a sense of return or completion.'
    },
    {
      id: 4,
      question: 'Which genre focuses on realistic narratives exploring human emotions and relationships?',
      options: [
        'Horror',
        'Action',
        'Drama',
        'Science Fiction'
      ],
      correctAnswer: 2,
      explanation: 'Drama focuses on realistic narratives that explore human emotions, relationships, and conflicts.'
    },
    {
      id: 5,
      question: 'What is the typical page count for a feature film screenplay?',
      options: [
        '30-60 pages',
        '60-90 pages',
        '90-120 pages',
        '120-180 pages'
      ],
      correctAnswer: 2,
      explanation: 'A typical feature film script spans 90–120 pages, with each page roughly equating to one minute of screen time.'
    },
    {
      id: 6,
      question: 'What is the three-act structure in screenwriting?',
      options: [
        'Introduction, Conflict, Conclusion',
        'Setup, Confrontation, Resolution',
        'Beginning, Climax, Ending',
        'Exposition, Action, Denouement'
      ],
      correctAnswer: 1,
      explanation: 'The three-act structure consists of Setup (Act One), Confrontation (Act Two), and Resolution (Act Three).'
    },
    {
      id: 7,
      question: 'What does "show, don\'t tell" mean in screenwriting?',
      options: [
        'Use more dialogue than action',
        'Describe internal thoughts extensively',
        'Use visuals and actions to convey the story',
        'Avoid using camera directions'
      ],
      correctAnswer: 2,
      explanation: 'Show, don\'t tell means using visuals and actions to convey the story rather than relying on exposition.'
    },
    {
      id: 8,
      question: 'What is the purpose of storyboarding?',
      options: [
        'To write the screenplay',
        'To create a visual blueprint of scenes before filming',
        'To edit the final film',
        'To market the film'
      ],
      correctAnswer: 1,
      explanation: 'Storyboarding creates a visual blueprint for a film, illustrating key moments, camera angles, and compositions.'
    },
    {
      id: 9,
      question: 'What information is typically included in a shot list?',
      options: [
        'Actor salaries and schedules',
        'Camera angles, lens types, and shot duration',
        'Marketing strategies',
        'Distribution channels'
      ],
      correctAnswer: 1,
      explanation: 'A shot list details every shot needed for a scene, including camera angle, lens type, framing, and duration.'
    },
    {
      id: 10,
      question: 'Which film is an example of non-linear storytelling?',
      options: [
        'The Shawshank Redemption',
        'Pulp Fiction',
        'The Lion King',
        'Star Wars: A New Hope'
      ],
      correctAnswer: 1,
      explanation: 'Pulp Fiction uses non-linear storytelling, presenting scenes out of chronological order.'
    }
  ]
};
