import type { Quiz } from '@/types/course';

export const module5Quiz: Quiz = {
  id: 5,
  title: 'Module 5 Quiz: Hosting & Distribution',
  duration: '30 min',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is the primary role of a podcast hosting platform?',
        options: [
          'To promote your podcast on social media',
          'To store and deliver your audio files and generate your RSS feed',
          'To record and edit episodes',
          'To transcribe podcast episodes'
        ],
        correct: 1,
        explanation: 'A podcast hosting platform stores your audio files and delivers them to directories like Spotify, Apple Podcasts, and YouTube Music via an RSS feed. It provides file storage, RSS feed generation, analytics, distribution tools, and monetization options.'
      },
      {
        question: 'Which of the following is NOT typically offered by podcast hosting platforms?',
        options: [
          'Monetization tools',
          'Episode artwork creation',
          'Analytics',
          'RSS feed generation'
        ],
        correct: 1,
        explanation: 'Episode artwork creation is NOT typically offered by podcast hosting platforms. While they may provide templates or guidance, the actual creation of artwork is usually done by the podcaster using external tools like Canva or Photoshop.'
      },
      {
        question: 'Why is RSS feed control important?',
        options: [
          'It reduces audio file sizes',
          'It increases download speed',
          'It allows you to submit your podcast to directories and retain content ownership',
          'It makes your podcast go viral'
        ],
        correct: 2,
        explanation: 'RSS feed control is important because it allows you to submit your podcast to directories like Apple Podcasts and retain ownership of your content. It also enables you to switch hosts without losing subscribers.'
      },
      {
        question: 'Which podcast host is best for beginners seeking an easy-to-use interface and support?',
        options: [
          'Transistor',
          'Captivate',
          'Buzzsprout',
          'Anchor'
        ],
        correct: 3,
        explanation: 'Anchor (now Spotify for Podcasters) is best for beginners seeking an easy-to-use interface and support. It offers 100% free hosting, unlimited storage, seamless Spotify integration, and built-in monetization options.'
      },
      {
        question: 'What is a major con of Anchor by Spotify?',
        options: [
          'Requires payment to start',
          'Only available in the U.S.',
          'Limited analytics and Spotify-centered',
          'No mobile app support'
        ],
        correct: 2,
        explanation: 'A major con of Anchor by Spotify is limited analytics depth and being Spotify-focused. While it offers basic analytics, it lacks the detailed insights provided by other platforms, and its integration is primarily optimized for Spotify.'
      },
      {
        question: 'What tool is used to validate your podcast RSS feed before submission?',
        options: [
          'PodcastFinder',
          'Google Search Console',
          'CastFeedValidator',
          'Audacity'
        ],
        correct: 2,
        explanation: 'CastFeedValidator is used to validate your podcast RSS feed before submission. It checks for missing metadata, formatting errors, and ensures your feed meets platform requirements.'
      },
      {
        question: 'Which of the following is a core element required in a podcast RSS feed?',
        options: [
          'Host biography',
          'Episode transcript',
          'Podcast category',
          'Listener reviews'
        ],
        correct: 2,
        explanation: 'Podcast category is a core element required in a podcast RSS feed. It must match platform taxonomy (e.g., Education, Business, True Crime) and is essential for proper categorization and discoverability.'
      },
      {
        question: 'What could happen if you change your RSS feed URL without updating platforms?',
        options: [
          'Your artwork disappears',
          'Your feed becomes slower',
          'You lose subscribers and break distribution',
          'Your audio files are compressed'
        ],
        correct: 2,
        explanation: 'If you change your RSS feed URL without updating platforms, you could lose subscribers and break distribution. Platforms may stop updating your feed, preventing listeners from accessing new episodes.'
      },
      {
        question: 'How long does it typically take for your podcast to appear on Spotify after submission?',
        options: [
          '5 business days',
          'Within hours',
          '3–4 weeks',
          'Instantaneously on all apps'
        ],
        correct: 1,
        explanation: 'Spotify typically approves podcast submissions within hours, often providing instant listing. This is much faster than other platforms like Apple Podcasts, which can take 1-5 days.'
      },
      {
        question: 'What is a best practice when creating a podcast website?',
        options: [
          'Use free hosting to save money',
          'Only post your most recent episode',
          'Avoid SEO elements to keep it simple',
          'Use a custom domain and mobile-friendly design'
        ],
        correct: 3,
        explanation: 'Using a custom domain and mobile-friendly design is a best practice when creating a podcast website. A custom domain enhances branding and shareability, while mobile-friendly design ensures most listeners can access episodes easily on smartphones.'
      }
    ]
  }
}; 
