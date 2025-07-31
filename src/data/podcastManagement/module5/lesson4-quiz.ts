import { QuizLesson } from '@/types/course';

export const lesson4Quiz: QuizLesson = {
  id: 4,
  title: 'Quiz: Hosting & Distribution',
  duration: '30 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is the primary purpose of an RSS feed for podcasts?',
        options: [
          'To host audio files',
          'To automatically distribute podcast episodes to platforms and apps',
          'To create podcast artwork',
          'To record audio content'
        ],
        correct: 1,
        explanation: 'RSS feeds automatically distribute podcast episodes to platforms and apps, allowing listeners to subscribe and receive new episodes automatically.'
      },
      {
        question: 'Which of the following is NOT a major podcast hosting platform?',
        options: [
          'Libsyn',
          'Anchor',
          'Buzzsprout',
          'Spotify'
        ],
        correct: 3,
        explanation: 'Spotify is a podcast listening platform, not a hosting platform. Libsyn, Anchor, and Buzzsprout are all podcast hosting platforms.'
      },
      {
        question: 'What is the recommended audio format for podcast hosting?',
        options: [
          'WAV (uncompressed)',
          'MP3 (compressed)',
          'AAC (compressed)',
          'Both MP3 and AAC are acceptable'
        ],
        correct: 3,
        explanation: 'Both MP3 and AAC are acceptable formats for podcast hosting. MP3 is more universally compatible, while AAC offers better quality at smaller file sizes.'
      },
      {
        question: 'What is the purpose of podcast analytics?',
        options: [
          'To track listener behavior and optimize content',
          'To host audio files',
          'To create podcast artwork',
          'To record audio content'
        ],
        correct: 0,
        explanation: 'Podcast analytics help track listener behavior, understand audience demographics, and optimize content based on performance data.'
      },
      {
        question: 'Which distribution strategy involves submitting your podcast to multiple platforms?',
        options: [
          'Single platform distribution',
          'Multi-platform distribution',
          'Direct distribution',
          'Local distribution'
        ],
        correct: 1,
        explanation: 'Multi-platform distribution involves submitting your podcast to multiple platforms like Apple Podcasts, Spotify, Google Podcasts, and others to reach a wider audience.'
      },
      {
        question: 'What is the purpose of podcast artwork?',
        options: [
          'To host audio files',
          'To represent your podcast visually and attract listeners',
          'To create RSS feeds',
          'To record audio content'
        ],
        correct: 1,
        explanation: 'Podcast artwork represents your podcast visually and is crucial for attracting listeners and establishing brand recognition.'
      },
      {
        question: 'Which technical optimization improves podcast discoverability?',
        options: [
          'Using high-quality audio equipment',
          'Optimizing episode titles and descriptions with relevant keywords',
          'Recording in a quiet environment',
          'Using professional editing software'
        ],
        correct: 1,
        explanation: 'Optimizing episode titles and descriptions with relevant keywords improves SEO and makes your podcast more discoverable in search results.'
      },
      {
        question: 'What is the recommended file size for podcast episodes?',
        options: [
          'As large as possible for best quality',
          'Under 100MB for most episodes',
          'Over 500MB for professional quality',
          'File size doesn\'t matter'
        ],
        correct: 1,
        explanation: 'Keeping episodes under 100MB ensures faster downloads and better user experience, while maintaining good audio quality.'
      },
      {
        question: 'Which platform is essential for podcast distribution?',
        options: [
          'Apple Podcasts',
          'Spotify',
          'Google Podcasts',
          'All of the above'
        ],
        correct: 3,
        explanation: 'All major platforms (Apple Podcasts, Spotify, Google Podcasts) are essential for reaching the widest possible audience.'
      },
      {
        question: 'What is the purpose of podcast hosting?',
        options: [
          'To record audio content',
          'To store and serve podcast files to listeners',
          'To create podcast artwork',
          'To edit audio content'
        ],
        correct: 1,
        explanation: 'Podcast hosting stores and serves podcast files to listeners, generates RSS feeds, and provides analytics and distribution tools.'
      }
    ]
  }
}; 