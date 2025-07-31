import { QuizLesson } from '@/types/course';

export const lesson2Quiz: QuizLesson = {
  id: 2,
  title: 'Quiz: Project Management & Automation',
  duration: '30 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is the primary benefit of workflow optimization in podcast production?',
        options: [
          'Increased efficiency and reduced errors',
          'Higher audio quality',
          'More creative content',
          'Lower production costs'
        ],
        correct: 0,
        explanation: 'Workflow optimization primarily increases efficiency and reduces errors by streamlining processes and standardizing procedures.'
      },
      {
        question: 'Which phase of podcast production involves content planning and guest coordination?',
        options: [
          'Recording Phase',
          'Planning Phase',
          'Post-Production Phase',
          'Publication Phase'
        ],
        correct: 1,
        explanation: 'The Planning Phase involves content planning, guest coordination, research preparation, equipment setup, and schedule coordination.'
      },
      {
        question: 'What is the purpose of Standard Operating Procedures (SOPs) in podcasting?',
        options: [
          'To increase production costs',
          'To ensure consistency and reduce errors',
          'To limit creativity',
          'To slow down production'
        ],
        correct: 1,
        explanation: 'SOPs ensure consistency in production, help onboard team members, minimize errors, save time, and maintain professional quality.'
      },
      {
        question: 'Which tool is best for visual task management in podcast workflows?',
        options: [
          'Trello',
          'Slack',
          'Google Drive',
          'Audacity'
        ],
        correct: 0,
        explanation: 'Trello is best for visual task management with its Kanban board layout, making it ideal for visual thinkers and simple workflows.'
      },
      {
        question: 'What is the main purpose of client reporting in podcast management?',
        options: [
          'To increase costs',
          'To show transparency and build trust',
          'To complicate processes',
          'To reduce communication'
        ],
        correct: 1,
        explanation: 'Client reporting shows transparency in work, demonstrates results from podcast efforts, and builds trust and long-term relationships.'
      },
      {
        question: 'Which automation opportunity can help reduce manual work in podcast production?',
        options: [
          'Manual file organization',
          'Automated social media posting',
          'Hand-written notes',
          'Manual quality checks'
        ],
        correct: 1,
        explanation: 'Automated social media posting can significantly reduce manual work and increase efficiency in podcast promotion.'
      },
      {
        question: 'What is the purpose of quality control processes in podcast production?',
        options: [
          'To slow down production',
          'To ensure consistent quality across episodes',
          'To increase costs',
          'To reduce creativity'
        ],
        correct: 1,
        explanation: 'Quality control processes ensure consistent quality across all podcast episodes by maintaining standards throughout production.'
      },
      {
        question: 'Which communication strategy is essential for effective team coordination?',
        options: [
          'Avoiding meetings',
          'Regular team meetings',
          'No communication',
          'Random communication'
        ],
        correct: 1,
        explanation: 'Regular team meetings are essential for effective team coordination, allowing for updates, feedback, and problem resolution.'
      },
      {
        question: 'What is the benefit of process automation in podcast production?',
        options: [
          'Increased manual work',
          'Reduced efficiency',
          'Reduced manual work and increased efficiency',
          'Higher costs'
        ],
        correct: 2,
        explanation: 'Process automation reduces manual work and increases efficiency by handling repetitive tasks automatically.'
      },
      {
        question: 'Which quality metric helps track podcast performance?',
        options: [
          'Audio quality metrics',
          'Random guessing',
          'No tracking',
          'Ignoring feedback'
        ],
        correct: 0,
        explanation: 'Audio quality metrics help track podcast performance and ensure consistent quality standards are maintained.'
      }
    ]
  }
}; 