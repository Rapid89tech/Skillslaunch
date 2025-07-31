import { QuizLesson } from '@/types/course';

export const lesson5Quiz: QuizLesson = {
  id: 5,
  title: 'Quiz: Marketing and Promotion',
  duration: '30 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is the primary purpose of podcast branding?',
        options: [
          'To reduce production costs',
          'To create a memorable identity that drives recognition and trust',
          'To increase episode length',
          'To change podcast formats'
        ],
        correct: 1,
        explanation: 'Podcast branding creates a complete identity—look, sound, feel, and connection with listeners—that drives recognition and trust, making episodes easily accessible across platforms.'
      },
      {
        question: 'Which of the following is NOT a core element of a strong podcast brand?',
        options: [
          'Podcast name',
          'Cover art',
          'Episode length',
          'Voice & tone'
        ],
        correct: 2,
        explanation: 'Episode length is not a core branding element. The core elements are: podcast name, cover art, voice & tone, tagline/slogan, and host personality.'
      },
      {
        question: 'What is the recommended character limit for podcast episode titles?',
        options: [
          'Under 30 characters',
          'Under 60 characters',
          'Under 100 characters',
          'No limit'
        ],
        correct: 1,
        explanation: 'Episode titles should be under 60 characters to ensure they fit well on mobile app displays and are easily scannable for listeners.'
      },
      {
        question: 'Which of the following is a best practice for episode descriptions?',
        options: [
          'Start with a hook in the first 1-2 lines',
          'Use only episode numbers',
          'Write in long paragraphs',
          'Avoid including keywords'
        ],
        correct: 0,
        explanation: 'Starting with a hook in the first 1-2 lines grabs attention and drives immediate episode access, making content more discoverable.'
      },
      {
        question: 'What is the main benefit of cross-promotion with other podcasters?',
        options: [
          'To reduce production time',
          'To share audiences and expose episodes to new listeners',
          'To change podcast topics',
          'To increase episode length'
        ],
        correct: 1,
        explanation: 'Cross-promotion exposes your episodes to new listeners through shared audiences, driving streams or downloads and expanding your reach.'
      },
      {
        question: 'Which tool is recommended for creating audiograms for social media promotion?',
        options: [
          'Canva',
          'Headliner',
          'Mailchimp',
          'Discord'
        ],
        correct: 1,
        explanation: 'Headliner is specifically designed for creating audiograms and video teasers with captions, making it ideal for social media promotion.'
      },
      {
        question: 'What is the primary advantage of using newsletters for podcast promotion?',
        options: [
          'They are free to create',
          'They provide direct, algorithm-free audience access',
          'They automatically generate content',
          'They work on all platforms'
        ],
        correct: 1,
        explanation: 'Newsletters provide direct, algorithm-free communication with your audience, ensuring listeners receive episode updates regardless of social media algorithm changes.'
      },
      {
        question: 'Which of the following is a recommended way to build podcast community?',
        options: [
          'Only posting on social media',
          'Creating private groups and live events',
          'Avoiding listener interaction',
          'Posting irregularly'
        ],
        correct: 1,
        explanation: 'Creating private groups, live events, and shoutouts are effective ways to build community and foster listener engagement and loyalty.'
      },
      {
        question: 'What should you include in a collaboration outreach message?',
        options: [
          'Generic templates only',
          'Personalized mentions of their content and clear benefits',
          'Only your podcast statistics',
          'No specific details'
        ],
        correct: 1,
        explanation: 'Personalized outreach that mentions specific episodes or content and clearly explains mutual benefits increases the likelihood of successful collaborations.'
      },
      {
        question: 'Which metric is most important for measuring community engagement success?',
        options: [
          'Only follower count',
          'Growth in group members, engagement, shares, and listener retention',
          'Only social media likes',
          'Only episode downloads'
        ],
        correct: 1,
        explanation: 'A combination of metrics including group growth, engagement (comments, DMs, replies), shares and tags, and listener retention provides a comprehensive view of community success.'
      }
    ]
  }
}; 