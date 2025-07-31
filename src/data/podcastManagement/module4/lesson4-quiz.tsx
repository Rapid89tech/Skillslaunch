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
      question: 'Which of the following is NOT a common Digital Audio Workstation (DAW) for podcast editing?',
      options: [
        'Audacity',
        'Adobe Audition',
        'Microsoft Word',
        'GarageBand'
      ],
      correctAnswer: 2,
      explanation: 'Microsoft Word is a word processing application, not a Digital Audio Workstation. Audacity, Adobe Audition, and GarageBand are all popular DAWs used for podcast editing.'
    },
    {
      id: 2,
      question: 'What is the primary purpose of noise reduction in podcast editing?',
      options: [
        'To make the audio louder',
        'To remove unwanted background sounds',
        'To add music to the podcast',
        'To change the pitch of voices'
      ],
      correctAnswer: 1,
      explanation: 'Noise reduction is used to remove unwanted background sounds like air conditioning, traffic, or room echo to create cleaner, more professional audio.'
    },
    {
      id: 3,
      question: 'Which compression parameter determines how quickly the compressor responds to audio above the threshold?',
      options: [
        'Ratio',
        'Attack',
        'Release',
        'Knee'
      ],
      correctAnswer: 1,
      explanation: 'The attack parameter determines how quickly the compressor responds to audio that exceeds the threshold. A fast attack responds quickly, while a slow attack allows transients to pass through.'
    },
    {
      id: 4,
      question: 'What frequency range should you typically cut to remove room rumble from voice recordings?',
      options: [
        '2-4 kHz',
        '8-12 kHz',
        '80-120 Hz',
        '200-400 Hz'
      ],
      correctAnswer: 2,
      explanation: 'Room rumble typically occurs in the 80-120 Hz range. Using a high-pass filter in this range can effectively remove low-frequency noise while preserving voice clarity.'
    },
    {
      id: 5,
      question: 'Which of the following is the recommended loudness target for podcasts?',
      options: [
        '-6 LUFS',
        '-16 LUFS',
        '-26 LUFS',
        '-36 LUFS'
      ],
      correctAnswer: 1,
      explanation: '-16 LUFS (Loudness Units Full Scale) is the recommended target for podcasts, providing competitive volume levels while maintaining good dynamic range.'
    },
    {
      id: 6,
      question: 'What is the purpose of a high-pass filter in podcast editing?',
      options: [
        'To boost high frequencies',
        'To remove low-frequency noise',
        'To add reverb',
        'To compress audio'
      ],
      correctAnswer: 1,
      explanation: 'A high-pass filter removes frequencies below a certain point, effectively eliminating low-frequency noise like room rumble, air conditioning, and electrical hum.'
    },
    {
      id: 7,
      question: 'Which editing technique involves creating smooth transitions between audio segments?',
      options: [
        'Compression',
        'Fade in/out',
        'Noise reduction',
        'Equalization'
      ],
      correctAnswer: 1,
      explanation: 'Fade in/out creates smooth transitions between audio segments, preventing abrupt changes that can be jarring to listeners.'
    },
    {
      id: 8,
      question: 'What is the primary benefit of multi-track editing?',
      options: [
        'Faster processing',
        'Working with multiple audio sources simultaneously',
        'Smaller file sizes',
        'Better compression'
      ],
      correctAnswer: 1,
      explanation: 'Multi-track editing allows you to work with multiple audio sources (voice, music, effects) simultaneously, providing greater control and flexibility in creating complex audio productions.'
    },
    {
      id: 9,
      question: 'Which of the following is NOT a recommended backup strategy for podcast projects?',
      options: [
        'Cloud backup',
        'Local external drive backup',
        'Keeping only one copy on your computer',
        'Multiple storage locations'
      ],
      correctAnswer: 2,
      explanation: 'Keeping only one copy on your computer is not a recommended backup strategy. You should always have multiple backups in different locations to protect against data loss.'
    },
    {
      id: 10,
      question: 'What is the purpose of automation in podcast editing?',
      options: [
        'To automatically edit your podcast',
        'To create dynamic changes in audio parameters over time',
        'To compress audio automatically',
        'To add effects automatically'
      ],
      correctAnswer: 1,
      explanation: 'Automation allows you to create dynamic changes in audio parameters (volume, pan, effects) over time, enabling precise control and creating engaging, professional-sounding podcasts.'
    }
  ]
};

const generateLesson = (config: LessonConfig): Lesson => {
  return {
    id: config.id,
    title: config.title,
    duration: config.duration,
    type: config.type,
    content: {
      videoUrl: '',
      textContent: `
# ${config.title}

## Quiz Instructions

This quiz will test your understanding of the audio editing concepts covered in Module 4. You'll need to answer ${config.questions.length} questions about editing tools, techniques, and best practices.

**Time Limit**: ${config.duration}
**Passing Score**: 80% (${Math.ceil(config.questions.length * 0.8)} out of ${config.questions.length} questions)

---

${config.questions.map((question, index) => `
### Question ${index + 1}

**${question.question}**

${question.options.map((option, optionIndex) => `${optionIndex + 1}. ${option}`).join('\n')}

**Correct Answer**: ${question.correctAnswer}

**Explanation**: ${question.explanation}

---
`).join('\n')}

## Quiz Results

**Your Score**: [Calculated based on answers]

**Performance Analysis**:
- **Excellent (90-100%)**: You have mastered the audio editing concepts!
- **Good (80-89%)**: You have a solid understanding of the material.
- **Needs Improvement (Below 80%)**: Review the module content and retake the quiz.

## Next Steps

After completing this quiz, you'll be ready to move on to Module 5: Hosting & Distribution, where you'll learn how to publish and distribute your podcast effectively.
      `
    }
  };
};

export const lesson4Quiz = generateLesson(lessonConfig); 