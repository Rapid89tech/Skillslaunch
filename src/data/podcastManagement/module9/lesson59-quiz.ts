
import { Lesson } from '@/types/course';

export const lesson59Quiz: Lesson = {
  id: 59,
  title: 'Project Management Tools Quiz',
  duration: '15 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'Why is it important to use project management tools in podcasting?',
        options: [
          'To make episodes longer',
          'To automate guest interviews',
          'To manage tasks, content, and collaboration efficiently',
          'To avoid using social media'
        ],
        correct: 2,
        explanation: 'Project management tools help manage tasks, content calendars, guest coordination, and team collaboration efficiently, which is essential for professional podcast production.'
      },
      {
        question: 'Which project management tool is best suited for visual thinkers using Kanban boards?',
        options: [
          'Asana',
          'Notion',
          'Trello',
          'Google Docs'
        ],
        correct: 2,
        explanation: 'Trello uses a Kanban board layout with drag-and-drop cards and columns, making it perfect for visual thinkers who prefer this workflow style.'
      },
      {
        question: 'In Notion, how can you track podcast guests effectively?',
        options: [
          'By using a voice memo',
          'By creating a CRM-style database',
          'By embedding Spotify playlists',
          'By scheduling through Instagram'
        ],
        correct: 1,
        explanation: 'Notion allows you to create CRM-style databases to track guest details, contact information, interview status, and related materials all in one organized system.'
      },
      {
        question: 'What is a key advantage of using Asana for podcast production?',
        options: [
          'Offline editing tools',
          'Social media analytics',
          'Structured task assignment and automation',
          'Audio mixing'
        ],
        correct: 2,
        explanation: 'Asana excels at structured task assignment with deadlines, team collaboration, and workflow automation, making it ideal for larger teams and complex podcast production workflows.'
      },
      {
        question: 'Which tool uses "Butler" to automate task workflows?',
        options: [
          'Notion',
          'Trello',
          'Google Calendar',
          'Buffer'
        ],
        correct: 1,
        explanation: 'Trello\'s "Butler" feature allows users to automate card movements, task assignments, and workflow processes within their Kanban boards.'
      },
      {
        question: 'What should a weekly podcast workflow ideally start with?',
        options: [
          'Promotion',
          'Guest outreach',
          'Script planning',
          'Final review'
        ],
        correct: 2,
        explanation: 'A weekly podcast workflow should start with script planning on Monday, followed by recording, editing, review, and then publishing and promotion.'
      },
      {
        question: 'When using Notion, which of the following is NOT a typical use case?',
        options: [
          'Creating podcast dashboards',
          'Recording interviews',
          'Embedding episode media',
          'Using templates for workflows'
        ],
        correct: 1,
        explanation: 'While Notion is excellent for organization, planning, and content management, it is not a tool for recording interviews - that requires dedicated recording software like Zoom or Riverside.'
      },
      {
        question: 'What is a major benefit of using templates in project management tools?',
        options: [
          'Reduces the number of episodes',
          'Makes podcast titles more creative',
          'Ensures consistency and saves time',
          'Guarantees more downloads'
        ],
        correct: 2,
        explanation: 'Templates ensure consistency across episodes and projects while saving significant time by providing pre-structured workflows and checklists.'
      },
      {
        question: 'Which of the following is a strong reason to choose Asana over Trello or Notion?',
        options: [
          'It\'s the only free tool',
          'You want to track complex team workflows with automation',
          'It has the best audio recording quality',
          'It provides built-in guest scheduling'
        ],
        correct: 1,
        explanation: 'Asana is specifically designed for complex team workflows with advanced automation features, making it superior for larger teams and intricate podcast production processes.'
      },
      {
        question: 'What is a best practice when managing your podcast with any project tool?',
        options: [
          'Avoid labeling tasks',
          'Only assign tasks after publishing',
          'Review weekly progress and archive completed episodes',
          'Never use checklists'
        ],
        correct: 2,
        explanation: 'Regular weekly reviews help track progress, identify bottlenecks, and archiving completed episodes keeps your workspace organized and focused on current work.'
      }
    ]
  }
};
