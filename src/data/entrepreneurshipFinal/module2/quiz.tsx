import type { Quiz } from '@/types/course';

export const module2Quiz: Quiz = {
  id: 12,
  title: 'Module 2 Quiz: Market Research',
  duration: '20 min',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is the primary purpose of market research?',
        options: [
          'To increase product price',
          'To identify and understand customer needs',
          'To hire more staff',
          'To reduce taxes'
        ],
        correct: 1,
        explanation: 'Market research focuses on understanding customer needs to ensure your product or service meets market demands.'
      },
      {
        question: 'A "target market" refers to:',
        options: [
          'Everyone in your city',
          'People with the highest income',
          'A specific group most likely to buy your product',
          'Your competitors'
        ],
        correct: 2,
        explanation: 'A target market is a defined group of potential customers most likely to benefit from and purchase your offering.'
      },
      {
        question: 'Which of the following is NOT a method of validating a business idea?',
        options: [
          'Creating a landing page',
          'Building a full product with all features',
          'Conducting surveys',
          'Running a small test campaign'
        ],
        correct: 1,
        explanation: 'Validating a business idea involves testing with minimal resources, not building a complete product.'
      },
      {
        question: 'What is the main purpose of an MVP (Minimum Viable Product)?',
        options: [
          'To impress investors',
          'To test your idea with minimal resources',
          'To make the final version of the product',
          'To copy a competitor\'s product'
        ],
        correct: 1,
        explanation: 'An MVP tests the core concept efficiently, gathering feedback without extensive investment.'
      },
      {
        question: 'Which of the following best describes a focus group?',
        options: [
          'A one-on-one interview with an investor',
          'A group of random people in a public space',
          'A selected group discussing your product to give feedback',
          'An online advertisement group'
        ],
        correct: 2,
        explanation: 'A focus group involves a targeted group providing insights on your product or idea.'
      },
      {
        question: 'Competitor analysis helps you avoid copying other businesses.',
        options: ['True', 'False'],
        correct: 0,
        explanation: 'Competitor analysis helps you understand what others offer, allowing you to differentiate rather than copy.'
      },
      {
        question: 'The feedback collected during the MVP stage should only come from friends and family.',
        options: ['True', 'False'],
        correct: 1,
        explanation: 'Feedback during the MVP stage should come from your target audience, not just friends and family, to ensure objectivity.'
      },
      {
        question: 'A good business idea should always solve a real problem.',
        options: ['True', 'False'],
        correct: 0,
        explanation: 'A good business idea must address a real problem to attract customers and achieve market fit.'
      }
    ]
  }
}; 
