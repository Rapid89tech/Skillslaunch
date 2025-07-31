import { QuizLesson } from '@/types/course';

export const lesson4Quiz: QuizLesson = {
  id: 4,
  title: 'Quiz: Monetization Strategies',
  duration: '30 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What does CPM stand for in podcast advertising?',
        options: [
          'Cost Per Member',
          'Cost Per Mille (1,000 downloads)',
          'Cost Per Minute',
          'Cost Per Month'
        ],
        correct: 1,
        explanation: 'CPM stands for "Cost Per Mille," where "mille" is Latin for 1,000. It represents the cost per 1,000 downloads and is the standard pricing model in podcast advertising.'
      },
      {
        question: 'Which type of podcast ad is considered the most valuable due to high listener retention?',
        options: [
          'Pre-roll ads',
          'Mid-roll ads',
          'Post-roll ads',
          'Baked-in ads'
        ],
        correct: 1,
        explanation: 'Mid-roll ads are inserted after listeners are already engaged with the content, leading to better ad performance and higher retention rates.'
      },
      {
        question: 'What is the primary benefit of listener support for podcasters?',
        options: [
          'Reducing production costs',
          'Building a loyal fan base and keeping content independent',
          'Increasing episode length',
          'Avoiding all advertising'
        ],
        correct: 1,
        explanation: 'Listener support builds a loyal fan base and keeps content independent from sponsor influence, allowing podcasters to maintain creative control while funding their shows.'
      },
      {
        question: 'Which platform is best known for connecting podcasters directly with advertisers?',
        options: [
          'Spotify',
          'Apple Podcasts',
          'Podcorn',
          'Discord'
        ],
        correct: 2,
        explanation: 'Podcorn is a marketplace that matches sponsors with podcasters, making it easier for creators to find advertising opportunities.'
      },
      {
        question: 'What is affiliate marketing in podcasting?',
        options: [
          'Selling podcast merchandise',
          'A performance-based strategy where podcasters earn commissions by promoting products via unique links',
          'Direct sponsorship deals',
          'Crowdfunding campaigns'
        ],
        correct: 1,
        explanation: 'Affiliate marketing is a performance-based strategy where podcasters earn commissions by promoting products via unique links, driving sales or actions.'
      },
      {
        question: 'Which of the following is a best practice for podcast ads?',
        options: [
          'Promote as many products as possible',
          'Promote products you believe in and keep tone authentic',
          'Avoid disclosing paid partnerships',
          'Use only pre-recorded ads'
        ],
        correct: 1,
        explanation: 'Best practices include promoting products you genuinely believe in, maintaining authentic tone, and being transparent about paid partnerships.'
      },
      {
        question: 'What is premium podcast content?',
        options: [
          'Content that costs more to produce',
          'Paid, gated audio or multimedia offering exclusivity and revenue',
          'Content with higher audio quality',
          'Content available only on premium platforms'
        ],
        correct: 1,
        explanation: 'Premium content is paid, gated audio or multimedia that offers exclusivity and generates revenue through subscriptions or one-time payments.'
      },
      {
        question: 'Which pricing tier is typically recommended for entry-level premium content?',
        options: [
          '$15-25 per month',
          '$3-5 per month',
          '$10-15 per month',
          '$25+ per month'
        ],
        correct: 1,
        explanation: 'Entry-level pricing tiers of $3-5 per month ensure broad accessibility and encourage more listeners to support the podcast.'
      },
      {
        question: 'What is a "baked-in" ad?',
        options: [
          'An ad that appears on the podcast website',
          'A permanently recorded ad that cannot be changed later',
          'An ad that only plays during live shows',
          'An ad that changes based on listener location'
        ],
        correct: 1,
        explanation: 'A baked-in ad is permanently recorded into the audio file and cannot be changed later, ensuring it\'s heard by all listeners forever.'
      },
      {
        question: 'Which of the following is NOT a recommended affiliate promotion method?',
        options: [
          'Audio mentions in episodes',
          'Show notes with affiliate links',
          'Email newsletters with links',
          'Spamming social media with links'
        ],
        correct: 3,
        explanation: 'Spamming social media with links is not a recommended method. Instead, use authentic mentions, show notes, and email newsletters to promote affiliate products naturally.'
      }
    ]
  }
}; 