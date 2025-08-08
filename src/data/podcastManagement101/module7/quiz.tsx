import type { Quiz } from '@/types/course';

export const module7Quiz: Quiz = {
  id: 7,
  title: 'Module 7 Quiz: Monetization Strategies',
  duration: '30 min',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is a host-read ad in podcasting?',
        options: [
          'A pre-recorded ad inserted by an algorithm',
          'An ad read live by the podcast host in their voice',
          'A static banner placed on the podcast\'s website',
          'A jingle played at the start of an episode'
        ],
        correct: 1,
        explanation: 'Host-read ads are ads delivered in the host\'s voice, blending seamlessly with content. They feel more authentic and build on the trust listeners have in the host.'
      },
      {
        question: 'Why do advertisers prefer podcasts for promotions?',
        options: [
          'Podcasts are cheaper than social media',
          'They have the widest reach',
          'Listeners trust hosts and show higher purchase intent',
          'Podcasts guarantee viral trends'
        ],
        correct: 2,
        explanation: 'Podcast listeners are often loyal, and host recommendations feel more personal. Listeners trust hosts and show higher purchase intent, making podcasts attractive to advertisers.'
      },
      {
        question: 'Which ad placement is considered the most valuable due to high listener retention?',
        options: [
          'Pre-roll',
          'Mid-roll',
          'Post-roll',
          'Outro'
        ],
        correct: 1,
        explanation: 'Mid-roll ads are inserted after the listener is already engaged, leading to better ad performance. They are ~30–60 seconds and have the highest retention.'
      },
      {
        question: 'What does CPM stand for in podcast sponsorships?',
        options: [
          'Cost Per Member',
          'Clicks Per Minute',
          'Cost Per Mille (1,000 downloads)',
          'Content Promotion Method'
        ],
        correct: 2,
        explanation: '"Mille" is Latin for 1,000. CPM pricing is standard in podcast advertising, meaning the cost per 1,000 downloads.'
      },
      {
        question: 'If your podcast has 4,000 downloads and your CPM is $20, how much would a sponsor pay per episode?',
        options: [
          '$40',
          '$200',
          '$80',
          '$100'
        ],
        correct: 2,
        explanation: '(4,000 / 1,000) × $20 = $80. The formula is (Total Downloads ÷ 1,000) × CPM Rate.'
      },
      {
        question: 'What is a baked-in ad?',
        options: [
          'An ad posted on your podcast\'s blog',
          'A permanently recorded ad that can\'t be changed later',
          'An ad played only during live shows',
          'A dynamic ad that changes based on location'
        ],
        correct: 1,
        explanation: 'Baked-in ads are embedded into the original audio file and are heard by all listeners, forever. They cannot be changed later.'
      },
      {
        question: 'Which platform is known for connecting podcasters directly with advertisers?',
        options: [
          'Discord',
          'Spotify',
          'Podcorn',
          'Buzzsprout'
        ],
        correct: 2,
        explanation: 'Podcorn is a marketplace that matches sponsors with podcasters, along with other platforms like AdvertiseCast, Gumball, and Acast Marketplace.'
      },
      {
        question: 'Which of the following is a best practice when promoting ads on your podcast?',
        options: [
          'Avoid disclosing that it\'s a paid promotion',
          'Use as many ads as possible per episode',
          'Mention personal experiences with the product',
          'Only use dynamic ads'
        ],
        correct: 2,
        explanation: 'Authentic, personal testimonials help convert listeners more effectively. Best practices include promoting products you believe in and keeping tone authentic.'
      },
      {
        question: 'What tool can help track conversions from podcast ads?',
        options: [
          'Google Docs',
          'Unique discount codes or affiliate links',
          'Regular email newsletters',
          'Embedded video links'
        ],
        correct: 1,
        explanation: 'Promo codes and affiliate links help sponsors measure ROI and podcasters track performance. Other tools include listener surveys.'
      },
      {
        question: 'What is a common mistake podcasters make with ads?',
        options: [
          'Using their own voice',
          'Promoting relevant, high-quality products',
          'Overloading episodes with too many ads',
          'Using baked-in ads'
        ],
        correct: 2,
        explanation: 'Too many ads can frustrate listeners and lead to drop-offs or reduced engagement. Other mistakes include promoting unrelated products and misleading with non-disclosure.'
      },
      {
        question: 'What is the main benefit of listener support for podcasters?',
        options: [
          'It eliminates the need for sponsors',
          'It builds a loyal fan base and keeps content independent',
          'It automatically generates viral content',
          'It reduces production costs'
        ],
        correct: 1,
        explanation: 'Listener support builds a loyal fan base, keeps content independent, encourages recurring revenue, and works for niche audiences.'
      },
      {
        question: 'Which platform is commonly used for ongoing memberships/subscriptions?',
        options: [
          'Only PayPal',
          'Only Ko-fi',
          'Patreon, Supercast, Apple Podcasts Subscriptions',
          'Only Buy Me a Coffee'
        ],
        correct: 2,
        explanation: 'Ongoing memberships via Patreon, Supercast, and Apple Podcasts Subscriptions enhance on-demand access by funding free or exclusive episodes.'
      },
      {
        question: 'What is premium podcast content?',
        options: [
          'Only free episodes',
          'Paid, gated audio or multimedia offering exclusivity and revenue',
          'Only ad-supported content',
          'Only live recordings'
        ],
        correct: 1,
        explanation: 'Premium content is paid, gated audio or multimedia, offering exclusivity and revenue. It generates consistent revenue and rewards engaged listeners.'
      },
      {
        question: 'Which pricing tier is typically $3–$5 per month?',
        options: [
          'High-Value Tier',
          'Mid Tier',
          'Entry Tier',
          'VIP Tier'
        ],
        correct: 2,
        explanation: 'Entry Tier is $3–$5 per month (R54–R90), making it affordable for budget-conscious users and comparable to a cheap streaming service.'
      },
      {
        question: 'What is affiliate marketing for podcasters?',
        options: [
          'Only selling merchandise',
          'A performance-based strategy where podcasters earn commissions by promoting products via unique links',
          'Only accepting donations',
          'Only running ads'
        ],
        correct: 1,
        explanation: 'Affiliate marketing is a performance-based strategy where podcasters earn commissions by promoting products via unique links, driving sales or actions.'
      },
      {
        question: 'Which of the following is NOT a popular affiliate program category?',
        options: [
          'Podcast Tools (Buzzsprout, Riverside.fm, Descript)',
          'Hosting Services (Bluehost, Podbean, Captivate)',
          'Social Media Management',
          'Online Platforms (Amazon Associates, ConvertKit, Skillshare)'
        ],
        correct: 2,
        explanation: 'Social Media Management is not listed as a popular affiliate program category. The main categories are Podcast Tools, Hosting Services, Online Platforms, Gear, and Courses/Apps.'
      },
      {
        question: 'What is the key principle for affiliate marketing success?',
        options: [
          'Promote as many products as possible',
          'Promote what you believe in—listeners will trust you',
          'Only promote the most expensive products',
          'Avoid disclosing affiliate links'
        ],
        correct: 1,
        explanation: 'The key principle is "Promote what you believe in—listeners will trust you." This ensures authentic affiliate promotions and maintains listener trust.'
      },
      {
        question: 'Which commission model pays for leads (e.g., email signups)?',
        options: [
          'CPA (Cost Per Action)',
          'CPL (Cost Per Lead)',
          'Recurring',
          'One-Time'
        ],
        correct: 1,
        explanation: 'CPL (Cost Per Lead) pays for leads like email signups, while CPA pays per sale/sign-up, Recurring pays monthly for subscriptions, and One-Time pays a flat fee per purchase.'
      },
      {
        question: 'What is the main advantage of evergreen content for affiliate marketing?',
        options: [
          'It only works for new episodes',
          'Older episodes generate ongoing income',
          'It requires constant updates',
          'It only works for live shows'
        ],
        correct: 1,
        explanation: 'Evergreen episodes with affiliate links enhance on-demand access by generating ongoing commissions, keeping episodes free and supporting sustained affiliate revenue.'
      },
      {
        question: 'Which of the following is a best practice for affiliate marketing?',
        options: [
          'Hide affiliate links from listeners',
          'Disclose links for FTC compliance',
          'Promote any product regardless of relevance',
          'Ignore program rules'
        ],
        correct: 1,
        explanation: 'Disclosing links builds trust and ensures FTC compliance. Other best practices include promoting relevant products, tracking performance, and personalizing promotions.'
      }
    ]
  }
}; 
