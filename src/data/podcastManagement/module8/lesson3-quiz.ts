import { QuizLesson } from '@/types/course';

export const lesson3Quiz: QuizLesson = {
  id: 3,
  title: 'Quiz: Analytics and Growth',
  duration: '30 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What does a podcast "download" measure?',
        options: [
          'When someone listens to the full episode',
          'When an episode is requested from the hosting server',
          'When someone subscribes to your show',
          'When a podcast is shared on social media'
        ],
        correct: 1,
        explanation: 'A download occurs when the media file is requested from the server, regardless of whether it is fully played. This is a key metric for sponsors and tracking episode interest.'
      },
      {
        question: 'Which metric is most accurate for measuring how much of your episode was consumed?',
        options: [
          'Downloads',
          'Subscriber count',
          'Listener retention',
          'Ratings and reviews'
        ],
        correct: 2,
        explanation: 'Listener retention shows how long people actually listen, providing deeper insight than just downloads. It reveals drop-off points and engagement levels.'
      },
      {
        question: 'Which is the most common podcast metric used by sponsors?',
        options: [
          'Retention rate',
          'Downloads',
          'Social shares',
          'Comments'
        ],
        correct: 1,
        explanation: 'Sponsors typically evaluate reach using total downloads as a key performance indicator, as it shows the potential audience size for their ads.'
      },
      {
        question: 'What is a recommended best practice for tracking downloads?',
        options: [
          'Only look at the first 24 hours',
          'Track downloads across all devices separately',
          'Measure downloads at 7, 30, and 90 days',
          'Count only international downloads'
        ],
        correct: 2,
        explanation: 'Checking at multiple intervals (7, 30, and 90 days) gives a better sense of long-term performance and listener growth patterns.'
      },
      {
        question: 'What does a high listener retention rate indicate?',
        options: [
          'That your show has many episodes',
          'That people are listening all the way through',
          'That you have a large social media following',
          'That your ad placement is optimized'
        ],
        correct: 1,
        explanation: 'High retention means engaging content that keeps listeners tuned in till the end, indicating strong content quality and audience engagement.'
      },
      {
        question: 'Which tool would you use to track podcast ad performance and smart links?',
        options: [
          'Google Forms',
          'Chartable',
          'PodInbox',
          'Anchor'
        ],
        correct: 1,
        explanation: 'Chartable tracks listener behavior and links performance across platforms, making it ideal for measuring ad effectiveness and audience engagement.'
      },
      {
        question: 'Which of the following is a form of audience engagement?',
        options: [
          'Bitly link clicks',
          'Retention rates',
          'Listener voice messages',
          'Episode length'
        ],
        correct: 2,
        explanation: 'Voice messages from listeners are a direct form of audience participation and engagement, showing active involvement with the content.'
      },
      {
        question: 'What is a good retention rate benchmark to aim for?',
        options: [
          '25–35%',
          '40–50%',
          '60–70%',
          '70–80%'
        ],
        correct: 3,
        explanation: '70–80% listener retention is considered excellent for podcasts, indicating high engagement and content quality.'
      },
      {
        question: 'Which of the following is NOT an effective tool for collecting listener feedback?',
        options: [
          'SpeakPipe',
          'Apple Podcasts Connect',
          'Typeform',
          'Google Forms'
        ],
        correct: 1,
        explanation: 'Apple Podcasts Connect is primarily used for managing show listings and analytics, not gathering direct listener feedback.'
      },
      {
        question: 'What is a common mistake in using podcast analytics?',
        options: [
          'Tracking retention weekly',
          'Monitoring drop-off points',
          'Ignoring platform-specific insights',
          'Using more than one analytics platform'
        ],
        correct: 2,
        explanation: 'Each platform (e.g., Spotify, Apple) provides unique insights—ignoring them can lead to blind spots in understanding your audience and content performance.'
      }
    ]
  }
}; 