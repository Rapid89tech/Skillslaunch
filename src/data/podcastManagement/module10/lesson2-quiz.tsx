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
  id: 35,
  title: 'Module 10 Quiz: Business Scaling & Client Management',
  duration: '30 min',
  type: 'interactive',
  questions: [
    {
      id: 1,
      question: 'What is the primary benefit of business scaling?',
      options: [
        'To make podcasts shorter',
        'To grow your podcast business sustainably while maintaining quality and profitability',
        'To reduce costs',
        'To improve audio quality'
      ],
      correctAnswer: 1,
      explanation: 'The primary benefit of business scaling is to grow your podcast business sustainably while maintaining quality and profitability.'
    },
    {
      id: 2,
      question: 'Which scaling principle focuses on manageable growth?',
      options: [
        'Quality first',
        'Sustainable growth',
        'Systematic approach',
        'Resource planning'
      ],
      correctAnswer: 1,
      explanation: 'Sustainable growth focuses on manageable, sustainable growth rather than rapid expansion.'
    },
    {
      id: 3,
      question: 'What is the main purpose of client relationship management?',
      options: [
        'To reduce costs',
        'To build and maintain strong relationships with podcast clients and partners',
        'To make podcasts shorter',
        'To improve audio quality'
      ],
      correctAnswer: 1,
      explanation: 'The main purpose of client relationship management is to build and maintain strong relationships with podcast clients and partners.'
    },
    {
      id: 4,
      question: 'Which client management strategy involves providing regular project updates?',
      options: [
        'Quality assurance',
        'Communication excellence',
        'Relationship building',
        'Service delivery'
      ],
      correctAnswer: 1,
      explanation: 'Communication excellence involves providing regular project updates and maintaining clear communication.'
    },
    {
      id: 5,
      question: 'What is the primary goal of business development?',
      options: [
        'To reduce costs',
        'To identify and pursue new opportunities for podcast business growth',
        'To make podcasts shorter',
        'To improve audio quality'
      ],
      correctAnswer: 1,
      explanation: 'The primary goal of business development is to identify and pursue new opportunities for podcast business growth.'
    },
    {
      id: 6,
      question: 'Which business development strategy involves expanding to new audience segments?',
      options: [
        'Partnership development',
        'Market expansion',
        'Revenue diversification',
        'Service expansion'
      ],
      correctAnswer: 1,
      explanation: 'Market expansion involves expanding to new audience segments and markets.'
    },
    {
      id: 7,
      question: 'What is the main challenge of business scaling?',
      options: [
        'Reducing costs',
        'Maintaining quality while growing',
        'Making podcasts shorter',
        'Improving audio quality'
      ],
      correctAnswer: 1,
      explanation: 'The main challenge of business scaling is maintaining quality while growing the business.'
    },
    {
      id: 8,
      question: 'Which client management approach treats clients as partners?',
      options: [
        'Communication excellence',
        'Service delivery',
        'Partnership approach',
        'Quality assurance'
      ],
      correctAnswer: 2,
      explanation: 'The partnership approach treats clients as partners rather than just customers.'
    },
    {
      id: 9,
      question: 'What is the primary benefit of revenue diversification?',
      options: [
        'To reduce costs',
        'To develop multiple revenue streams for business stability',
        'To make podcasts shorter',
        'To improve audio quality'
      ],
      correctAnswer: 1,
      explanation: 'The primary benefit of revenue diversification is to develop multiple revenue streams for business stability.'
    },
    {
      id: 10,
      question: 'Which scaling benefit involves better utilization of resources?',
      options: [
        'Increased revenue',
        'Resource efficiency',
        'Brand recognition',
        'Competitive advantage'
      ],
      correctAnswer: 1,
      explanation: 'Resource efficiency involves better utilization of resources as the business scales.'
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

This quiz will test your understanding of business scaling and client management concepts covered in Module 10. You'll need to answer ${config.questions.length} questions about business scaling strategies, client relationship management, and business development.

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
- **Excellent (90-100%)**: You have mastered the business scaling and client management concepts!
- **Good (80-89%)**: You have a solid understanding of the material.
- **Needs Improvement (Below 80%)**: Review the module content and retake the quiz.

## Course Completion

Congratulations! You have completed the Podcast Management course. You now have comprehensive knowledge of podcast creation, management, monetization, and business scaling.

## Next Steps

Apply your knowledge to create and grow successful podcasts, build sustainable businesses, and achieve your podcasting goals.
      `
    }
  };
};

export const lesson2Quiz = generateLesson(lessonConfig); 