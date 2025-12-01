import type { Quiz } from '@/types/course';

export const module3Quiz: Quiz = {
  id: 3,
  title: 'Module 3 Quiz: Sound Design',
  description: 'Test your knowledge of sound in storytelling, microphone types, dialogue recording, sound editing and mixing, and music scoring.',
  questions: [
    {
      id: 1,
      question: 'What is the primary purpose of sound design in storytelling?',
      options: [
        'To replace dialogue entirely',
        'To create realistic, immersive environments and enhance mood',
        'To serve only as background music',
        'To distract viewers from visuals'
      ],
      correctAnswer: 1,
      explanation: 'Sound design creates realistic, immersive environments and enhances mood, enriching the narrative experience.'
    },
    {
      id: 2,
      question: 'Which technique involves recording everyday sounds to add authenticity?',
      options: [
        'Ambience',
        'Foley',
        'Leitmotif',
        'Contrapuntal scoring'
      ],
      correctAnswer: 1,
      explanation: 'Foley is the art of creating and recording everyday sounds like footsteps or doors to add authenticity.'
    },
    {
      id: 3,
      question: 'What is the role of music in storytelling?',
      options: [
        'Only to fill silent gaps',
        'To guide audience emotions and reinforce narrative tone',
        'To replace sound effects',
        'To confuse viewers'
      ],
      correctAnswer: 1,
      explanation: 'Music guides audience emotions and reinforces the narrative tone, serving as the story\'s emotional backbone.'
    },
    {
      id: 4,
      question: 'In dialogue recording, what is the purpose of ADR?',
      options: [
        'To create sound effects',
        'To re-record dialogue for clarity when on-set audio is unusable',
        'To generate music tracks',
        'To add ambient noise'
      ],
      correctAnswer: 1,
      explanation: 'ADR (Automated Dialogue Replacement) re-records dialogue in post-production for clarity when on-set audio is compromised.'
    },
    {
      id: 5,
      question: 'How is silence used effectively in storytelling?',
      options: [
        'To fill time without purpose',
        'To heighten tension, focus attention, or emphasize emotions',
        'To eliminate the need for music',
        'To replace dialogue'
      ],
      correctAnswer: 1,
      explanation: 'Silence heightens tension, focuses attention, or emphasizes emotions through contrast with sound.'
    },
    {
      id: 6,
      question: 'Which type of microphone is ideal for capturing loud outdoor sounds?',
      options: [
        'Condenser',
        'Ribbon',
        'Lavalier',
        'Dynamic'
      ],
      correctAnswer: 3,
      explanation: 'Dynamic microphones are robust and excel at capturing loud sources like action sequences or outdoor dialogue.'
    },
    {
      id: 7,
      question: 'What is the key use of condenser microphones?',
      options: [
        'Recording loud explosions outdoors',
        'Capturing detailed dialogue or subtle Foley sounds in controlled environments',
        'For hidden, hands-free dialogue',
        'To add vintage tone to voiceovers'
      ],
      correctAnswer: 1,
      explanation: 'Condenser microphones offer high-fidelity and sensitivity, perfect for capturing detailed dialogue or subtle sounds in studios.'
    },
    {
      id: 8,
      question: 'What is a leitmotif in music scoring?',
      options: [
        'Random background noise',
        'A recurring musical theme tied to a character or idea',
        'Silence used for dramatic effect',
        'A microphone placement technique'
      ],
      correctAnswer: 1,
      explanation: 'A leitmotif is a recurring musical theme associated with a specific character, idea, or emotion.'
    },
    {
      id: 9,
      question: 'How do sound editing and mixing work together?',
      options: [
        'Editing removes music; mixing adds visuals',
        'Editing refines audio tracks; mixing balances layers for clarity and impact',
        'Mixing replaces Foley; editing replaces dialogue',
        'Both are used only for music'
      ],
      correctAnswer: 1,
      explanation: 'Sound editing refines and organizes audio tracks, while mixing balances all layers for clarity and emotional impact.'
    },
    {
      id: 10,
      question: 'Which software is industry standard for sound editing and mixing?',
      options: [
        'Avid Pro Tools',
        'Adobe After Effects',
        'Final Cut Pro',
        'Cinema 4D'
      ],
      correctAnswer: 0,
      explanation: 'Avid Pro Tools is the industry-standard software for professional sound editing and mixing.'
    }
  ]
};
