import { QuizLesson } from '@/types/course';

export const lesson2Quiz: QuizLesson = {
  id: 2,
  title: 'Quiz: Working with Clients and Contracts',
  duration: '30 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'Why is it important to set clear expectations with podcast clients?',
        options: [
          'To avoid having to sign contracts',
          'To limit how often you communicate',
          'To build trust, manage timelines, and prevent scope creep',
          'To avoid having to use management tools'
        ],
        correct: 2,
        explanation: 'Setting clear expectations builds trust, helps manage timelines effectively, and prevents scope creep that can delay episode production and accessibility.'
      },
      {
        question: 'What is the purpose of a discovery call during client onboarding?',
        options: [
          'To pitch upsells only',
          'To download audio files',
          'To understand the client\'s goals, audience, and service needs',
          'To finalize episode titles'
        ],
        correct: 2,
        explanation: 'A discovery call is essential to understand the client\'s goals, target audience, and specific service needs to ensure episodes are tailored for their objectives.'
      },
      {
        question: 'Which of the following should NOT be skipped when starting work with a client?',
        options: [
          'Designing the show logo',
          'Having a signed contract',
          'Publishing the first episode immediately',
          'Asking the client to provide guest bios'
        ],
        correct: 1,
        explanation: 'Having a signed contract is crucial as it protects both parties, defines deliverables, and ensures clear expectations for accessible episode production.'
      },
      {
        question: 'What does the Scope of Work section in a podcast contract typically include?',
        options: [
          'Estimated show downloads',
          'Personal podcast preferences',
          'Services offered, revision limits, and exclusions',
          'Social media platform handles'
        ],
        correct: 2,
        explanation: 'The Scope of Work defines what services are included, limits on revisions, and what is excluded, ensuring clear deliverables for accessible episodes.'
      },
      {
        question: 'What clause defines how either party can cancel the podcast service agreement?',
        options: [
          'Payment clause',
          'Ownership clause',
          'Termination clause',
          'Communication clause'
        ],
        correct: 2,
        explanation: 'The termination clause outlines the conditions and process for either party to cancel the agreement, protecting both client and service provider.'
      },
      {
        question: 'Which of the following tools is best used for legally binding e-signatures on contracts?',
        options: [
          'Trello',
          'Dubsado',
          'Loom',
          'HelloSign'
        ],
        correct: 3,
        explanation: 'HelloSign is specifically designed for legally binding e-signatures, making it the best choice for contract signing in podcast management.'
      },
      {
        question: 'Why should podcast managers avoid working without a contract?',
        options: [
          'It slows down the editing process',
          'It causes file format confusion',
          'It leaves both parties legally unprotected and can lead to disputes',
          'It limits branding creativity'
        ],
        correct: 2,
        explanation: 'Working without a contract leaves both parties legally unprotected and can lead to disputes over deliverables, payments, and expectations.'
      },
      {
        question: 'What is one effective way to manage client expectations?',
        options: [
          'Promise the fastest turnaround without checking your calendar',
          'Allow unlimited revisions',
          'Communicate regularly with status updates and set boundaries',
          'Avoid talking about deadlines'
        ],
        correct: 2,
        explanation: 'Regular communication with status updates and setting clear boundaries is essential for managing client expectations and ensuring smooth episode production.'
      },
      {
        question: 'What should be included in the client intake form?',
        options: [
          'Guest interview questions',
          'Client\'s favorite podcast episodes',
          'Branding assets, style guide, and login info (securely)',
          'Audience survey results'
        ],
        correct: 2,
        explanation: 'The client intake form should collect branding assets, style guides, and login information securely to ensure consistent episode production and accessibility.'
      },
      {
        question: 'What is the benefit of under-promising and over-delivering?',
        options: [
          'It makes contracts unnecessary',
          'It surprises and delights clients, increasing satisfaction and trust',
          'It allows unlimited edits',
          'It shortens the onboarding process'
        ],
        correct: 1,
        explanation: 'Under-promising and over-delivering surprises and delights clients, increasing their satisfaction and building trust for long-term partnerships.'
      }
    ]
  }
}; 