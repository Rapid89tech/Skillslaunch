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
  id: 20,
  title: 'Module 5 Quiz: Hosting & Distribution',
  duration: '30 min',
  type: 'interactive',
  questions: [
    {
      id: 1,
      question: 'What is the primary function of a podcast hosting platform?',
      options: [
        'To record audio files',
        'To store and distribute podcast files via RSS feeds',
        'To edit podcast episodes',
        'To create podcast artwork'
      ],
      correctAnswer: 1,
      explanation: 'Podcast hosting platforms store audio files and generate RSS feeds that distribute your podcast to various directories and platforms. They serve as the central hub for podcast distribution.'
    },
    {
      id: 2,
      question: 'Which of the following is NOT a major podcast hosting platform?',
      options: [
        'Libsyn',
        'Buzzsprout',
        'Microsoft Word',
        'Anchor'
      ],
      correctAnswer: 2,
      explanation: 'Microsoft Word is a word processing application, not a podcast hosting platform. Libsyn, Buzzsprout, and Anchor are all popular podcast hosting platforms.'
    },
    {
      id: 3,
      question: 'What does RSS stand for in podcast distribution?',
      options: [
        'Really Simple Syndication',
        'Radio Streaming Service',
        'Remote Sound System',
        'Real-time Sound Sharing'
      ],
      correctAnswer: 0,
      explanation: 'RSS stands for "Really Simple Syndication." It\'s an XML format that allows podcast directories to automatically read and display your podcast information and episodes.'
    },
    {
      id: 4,
      question: 'What is the recommended minimum size for podcast artwork?',
      options: [
        '500x500 pixels',
        '1000x1000 pixels',
        '1400x1400 pixels',
        '2000x2000 pixels'
      ],
      correctAnswer: 2,
      explanation: 'The recommended minimum size for podcast artwork is 1400x1400 pixels. This ensures the artwork displays clearly across all platforms and devices.'
    },
    {
      id: 5,
      question: 'Which podcast directory has the largest audience?',
      options: [
        'Spotify',
        'Apple Podcasts (iTunes)',
        'Google Podcasts',
        'Amazon Music'
      ],
      correctAnswer: 1,
      explanation: 'Apple Podcasts (iTunes) has the largest podcast audience, particularly due to its integration with the iOS ecosystem and being one of the first major podcast platforms.'
    },
    {
      id: 6,
      question: 'What is the purpose of metadata optimization in podcast distribution?',
      options: [
        'To make audio files smaller',
        'To improve discoverability through search and recommendations',
        'To reduce hosting costs',
        'To speed up file uploads'
      ],
      correctAnswer: 1,
      explanation: 'Metadata optimization improves discoverability by making your podcast more likely to appear in search results and recommendations across podcast platforms.'
    },
    {
      id: 7,
      question: 'Which of the following is a benefit of consistent release scheduling?',
      options: [
        'Reduced hosting costs',
        'Building audience expectations and loyalty',
        'Faster file uploads',
        'Smaller file sizes'
      ],
      correctAnswer: 1,
      explanation: 'Consistent release scheduling builds audience expectations and loyalty. Listeners know when to expect new content, which helps build a reliable, engaged audience.'
    },
    {
      id: 8,
      question: 'What is the primary benefit of multi-platform distribution?',
      options: [
        'Reduced hosting costs',
        'Maximum audience reach across different platforms',
        'Simplified analytics tracking',
        'Faster content creation'
      ],
      correctAnswer: 1,
      explanation: 'Multi-platform distribution ensures maximum audience reach by making your podcast available on all major listening platforms, increasing discoverability and potential listeners.'
    },
    {
      id: 9,
      question: 'Which of the following is NOT a recommended bitrate for podcast audio files?',
      options: [
        '64 kbps',
        '128 kbps',
        '256 kbps',
        '320 kbps'
      ],
      correctAnswer: 0,
      explanation: '64 kbps is too low for podcast audio quality. The recommended bitrates are 128 kbps for voice-focused content and 256-320 kbps for music-heavy content.'
    },
    {
      id: 10,
      question: 'What is the purpose of RSS feed validation?',
      options: [
        'To reduce file sizes',
        'To ensure proper XML structure and required elements',
        'To speed up distribution',
        'To reduce hosting costs'
      ],
      correctAnswer: 1,
      explanation: 'RSS feed validation ensures proper XML structure and includes all required elements, which is essential for reliable distribution across podcast platforms.'
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

This quiz will test your understanding of podcast hosting and distribution concepts covered in Module 5. You'll need to answer ${config.questions.length} questions about hosting platforms, RSS feeds, distribution strategies, and technical optimization.

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
- **Excellent (90-100%)**: You have mastered the hosting and distribution concepts!
- **Good (80-89%)**: You have a solid understanding of the material.
- **Needs Improvement (Below 80%)**: Review the module content and retake the quiz.

## Next Steps

After completing this quiz, you'll be ready to move on to Module 6: Marketing and Promotion, where you'll learn how to effectively promote your podcast and grow your audience.
      `
    }
  };
};

export const lesson4Quiz = generateLesson(lessonConfig); 
