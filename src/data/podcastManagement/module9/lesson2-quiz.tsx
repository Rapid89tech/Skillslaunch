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
  id: 33,
  title: 'Module 9 Quiz: Project Management & Automation',
  duration: '30 min',
  type: 'interactive',
  questions: [
    {
      id: 1,
      question: 'What is the primary benefit of workflow optimization?',
      options: [
        'To make podcasts shorter',
        'To maximize productivity, reduce errors, and ensure consistent quality',
        'To reduce costs',
        'To improve audio quality'
      ],
      correctAnswer: 1,
      explanation: 'The primary benefit of workflow optimization is to maximize productivity, reduce errors, and ensure consistent quality in podcast production.'
    },
    {
      id: 2,
      question: 'Which phase involves planning episode topics and coordinating with guests?',
      options: [
        'Recording phase',
        'Planning phase',
        'Post-production phase',
        'Publication phase'
      ],
      correctAnswer: 1,
      explanation: 'The planning phase involves planning episode topics and coordinating with guests, as well as research preparation and equipment setup.'
    },
    {
      id: 3,
      question: 'What is the main responsibility of an Audio Engineer in a podcast team?',
      options: [
        'Handle promotion and audience growth',
        'Handle technical audio aspects',
        'Manage content planning',
        'Handle administrative tasks'
      ],
      correctAnswer: 1,
      explanation: 'The Audio Engineer is responsible for handling technical audio aspects of podcast production.'
    },
    {
      id: 4,
      question: 'Which workflow tool helps with task assignment and deadline management?',
      options: [
        'Audio editing software',
        'Project management platforms',
        'Social media tools',
        'Email platforms'
      ],
      correctAnswer: 1,
      explanation: 'Project management platforms help with task assignment, deadline management, and progress tracking.'
    },
    {
      id: 5,
      question: 'What is the primary purpose of team coordination strategies?',
      options: [
        'To reduce costs',
        'To ensure effective coordination and collaboration among team members',
        'To improve audio quality',
        'To make podcasts shorter'
      ],
      correctAnswer: 1,
      explanation: 'Team coordination strategies ensure effective coordination and collaboration among podcast team members.'
    },
    {
      id: 6,
      question: 'Which phase involves uploading to hosting platforms and social media promotion?',
      options: [
        'Planning phase',
        'Recording phase',
        'Post-production phase',
        'Publication phase'
      ],
      correctAnswer: 3,
      explanation: 'The publication phase involves uploading to hosting platforms, social media promotion, and analytics tracking.'
    },
    {
      id: 7,
      question: 'What is the main benefit of workflow automation?',
      options: [
        'To reduce costs',
        'To automate repetitive tasks and increase efficiency',
        'To improve audio quality',
        'To make podcasts shorter'
      ],
      correctAnswer: 1,
      explanation: 'The main benefit of workflow automation is to automate repetitive tasks and increase efficiency.'
    },
    {
      id: 8,
      question: 'Which team role is responsible for managing content planning and coordination?',
      options: [
        'Host/Producer',
        'Audio Engineer',
        'Content Manager',
        'Marketing Manager'
      ],
      correctAnswer: 2,
      explanation: 'The Content Manager is responsible for managing content planning and coordination.'
    },
    {
      id: 9,
      question: 'What is the primary purpose of quality control checkpoints?',
      options: [
        'To reduce costs',
        'To ensure quality standards are maintained throughout production',
        'To make podcasts shorter',
        'To improve audio quality'
      ],
      correctAnswer: 1,
      explanation: 'Quality control checkpoints ensure quality standards are maintained throughout the production process.'
    },
    {
      id: 10,
      question: 'Which optimization principle involves identifying and addressing bottlenecks?',
      options: [
        'Process mapping',
        'Bottleneck identification',
        'Automation opportunities',
        'Standardization'
      ],
      correctAnswer: 1,
      explanation: 'Bottleneck identification involves identifying and addressing bottlenecks in the workflow process.'
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

This quiz will test your understanding of project management and automation concepts covered in Module 9. You'll need to answer ${config.questions.length} questions about workflow optimization, team management, and process automation.

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
- **Excellent (90-100%)**: You have mastered the project management and automation concepts!
- **Good (80-89%)**: You have a solid understanding of the material.
- **Needs Improvement (Below 80%)**: Review the module content and retake the quiz.

## Next Steps

After completing this quiz, you'll be ready to move on to Module 10: Business Scaling & Client Management, where you'll learn how to scale your podcast business and manage client relationships.
      `
    }
  };
};

export const lesson2Quiz = generateLesson(lessonConfig); 
