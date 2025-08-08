import { Lesson } from '@/types/course';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface LessonConfig {
  id: number;
  title: string;
  duration: string;
  type: 'video' | 'audio' | 'text' | 'interactive';
  questions: QuizQuestion[];
}

const lessonConfig: LessonConfig = {
  id: 16,
  title: 'Module 4 Quiz: Audio Editing Essentials',
  duration: '30 min',
  type: 'interactive',
  questions: [
    {
      id: 1,
      question: 'Which of the following is a FREE, open-source editing tool ideal for beginners?',
      options: [
        'Adobe Audition',
        'Descript',
        'Audacity',
        'Pro Tools'
      ],
      correctAnswer: 2,
      explanation: 'Audacity is a free, open-source audio editor that is ideal for beginners due to its accessibility and powerful features without cost.'
    },
    {
      id: 2,
      question: 'What is the biggest advantage of using Descript for editing?',
      options: [
        'Advanced spectral editing',
        'Drag-and-drop music tools',
        'Text-based audio editing',
        'Dolby Atmos support'
      ],
      correctAnswer: 2,
      explanation: 'Descript\'s biggest advantage is its text-based audio editing, which allows users to edit audio by editing text transcripts, making it much more intuitive for beginners.'
    },
    {
      id: 3,
      question: 'True or False: Adobe Audition is a free tool best suited for beginners.',
      options: [
        'True',
        'False'
      ],
      correctAnswer: 1,
      explanation: 'False. Adobe Audition is a paid, professional-grade tool with a steep learning curve, making it better suited for experienced editors rather than beginners.'
    },
    {
      id: 4,
      question: 'Which tool would best suit a podcaster who wants fast, text-driven editing with automatic transcription?',
      options: [
        'Audacity',
        'Adobe Audition',
        'Descript',
        'GarageBand'
      ],
      correctAnswer: 2,
      explanation: 'Descript is the best choice for fast, text-driven editing with automatic transcription, as it allows editing audio by editing text and includes AI-powered transcription features.'
    },
    {
      id: 5,
      question: 'In Audacity, which feature helps remove constant background noise?',
      options: [
        'Razor Tool',
        'Studio Sound',
        'Noise Profile + Noise Reduction',
        'Ducking'
      ],
      correctAnswer: 2,
      explanation: 'In Audacity, the Noise Profile + Noise Reduction feature helps remove constant background noise by first capturing a noise profile and then applying reduction to the entire track.'
    },
    {
      id: 6,
      question: 'Which feature is exclusive to Descript among the three tools?',
      options: [
        'Multitrack editing',
        'Export to MP3',
        'Spectral frequency editing',
        'Overdub (AI voice cloning)'
      ],
      correctAnswer: 3,
      explanation: 'Overdub (AI voice cloning) is exclusive to Descript among the three tools, allowing users to generate synthetic voiceovers to fix mistakes or add content.'
    },
    {
      id: 7,
      question: 'What is a major limitation of using Audacity for podcast editing?',
      options: [
        'No support for WAV files',
        'No music support',
        'Outdated interface and limited non-destructive editing',
        'Cannot export MP3 files'
      ],
      correctAnswer: 2,
      explanation: 'A major limitation of Audacity is its outdated interface and limited non-destructive editing capabilities, which can slow workflows for complex projects.'
    },
    {
      id: 8,
      question: 'Which of these is NOT a feature of Adobe Audition?',
      options: [
        'Auto-ducking',
        'Essential Sound panel',
        'Automatic transcription',
        'Spectral frequency editing'
      ],
      correctAnswer: 2,
      explanation: 'Automatic transcription is NOT a feature of Adobe Audition. This feature is available in Descript, while Audition focuses on advanced audio editing tools.'
    },
    {
      id: 9,
      question: 'What\'s the recommended LUFS level for podcast audio loudness?',
      options: [
        '-6 LUFS',
        '-16 LUFS',
        '-30 LUFS',
        '+3 LUFS'
      ],
      correctAnswer: 1,
      explanation: '-16 LUFS (Loudness Units Full Scale) is the recommended target for podcasts, providing competitive volume levels while maintaining good dynamic range.'
    },
    {
      id: 10,
      question: 'Which of the following statements is TRUE about exporting audio for podcast distribution?',
      options: [
        'Use 320 kbps stereo MP3 for all podcasts',
        'Always export in WAV format for streaming',
        'Add ID3 metadata to help with search and discoverability',
        'You must export at 96 kHz for Spotify'
      ],
      correctAnswer: 2,
      explanation: 'Adding ID3 metadata to help with search and discoverability is TRUE. Metadata and ID3 tags make podcasts searchable and organized on platforms like Apple Podcasts.'
    }
  ]
};

const generateLesson = (config: LessonConfig): Lesson => {
  return {
    id: config.id,
    title: config.title,
    duration: config.duration,
    type: config.type,
    content: [
      {
        id: 'quiz-intro',
        type: 'text' as const,
        title: 'Module 4 Quiz: Audio Editing Essentials',
        textContent: `This quiz will test your understanding of the audio editing concepts covered in Module 4. You'll need to answer ${config.questions.length} questions about editing tools, techniques, and best practices.

**Topics Covered:**
- Introduction to editing tools (Audacity, Adobe Audition, Descript)
- Basic editing techniques (cutting, noise removal, levels)
- Adding intros, outros, and music
- Exporting files for distribution

**Instructions:**
- Read each question carefully
- Select the best answer from the options provided
- Review the explanation after answering to understand the correct response
- You must answer all questions to complete the quiz

Good luck!`
      },
      {
        id: 'quiz-questions',
        type: 'quiz' as const,
        title: 'Quiz Questions',
        questions: config.questions
      }
    ]
  };
};

export const lesson4Quiz = generateLesson(lessonConfig); 
