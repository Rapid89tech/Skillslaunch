import type { Quiz } from '@/types/course';

export const module1Quiz: Quiz = {
  id: 9,
  title: 'Module 1 Quiz: Introduction to Podcasting',
  duration: '15 min',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What does the term "podcast" originate from?',
        options: [
          'Podium + Broadcast',
          'iPod + Broadcast',
          'Portable + Cast',
          'Podcast + Audio'
        ],
        correct: 1,
        explanation: 'The term "podcast" is a blend of "iPod" (Apple\'s portable media player) and "broadcast," coined by Ben Hammersley in 2004.'
      },
      {
        question: 'Who is known as the "Podfather" for pioneering early podcasting technology?',
        options: [
          'Orson Welles',
          'Joe Rogan',
          'Adam Curry',
          'Sarah Koenig'
        ],
        correct: 2,
        explanation: 'Adam Curry is dubbed the "Podfather" for his contributions to podcasting through iPodder and "Daily Source Code."'
      },
      {
        question: 'Which podcast, launched in 2014, played a major role in popularizing the binge-listening model?',
        options: [
          'Welcome to Night Vale',
          'Serial',
          'The Joe Rogan Experience',
          'Radiolab'
        ],
        correct: 1,
        explanation: 'Serial (2014) revolutionized podcasting with its gripping true-crime narrative and introduced binge-listening.'
      },
      {
        question: 'True or False: Radio broadcasting had no influence on the development of podcasts.',
        options: ['True', 'False'],
        correct: 1,
        explanation: 'False. Podcasting evolved from the long history of radio broadcasting, especially talk radio and serialized audio shows.'
      },
      {
        question: 'What was one limitation of early internet radio platforms like Live365 and Shoutcast?',
        options: [
          'Poor sound quality',
          'No user access',
          'No download or portability options',
          'Limited internet access'
        ],
        correct: 2,
        explanation: 'Early internet radio required constant connectivity and lacked downloadability and portability options.'
      },
      {
        question: 'Which major tech company integrated podcasts into its platform in 2005, helping podcasts go mainstream?',
        options: [
          'Google',
          'Apple',
          'Microsoft',
          'Spotify'
        ],
        correct: 1,
        explanation: 'Apple added podcasts to iTunes 4.9 in 2005, allowing iPod users to easily find and subscribe to podcasts.'
      },
      {
        question: 'Which of the following is NOT a common podcast type by content theme?',
        options: [
          'Interview',
          'Comedy',
          'Cooking Show',
          'True Crime'
        ],
        correct: 2,
        explanation: 'Cooking Show is not a common podcast type. Common types include interviews, comedy, true crime, education, and news.'
      },
      {
        question: 'What is a key advantage of the solo podcast format?',
        options: [
          'Requires guest coordination',
          'Easier for audience interaction',
          'Easier to produce and build personal branding',
          'Higher sound quality'
        ],
        correct: 2,
        explanation: 'Solo podcasts are easier to produce and help build personal branding without requiring guest coordination.'
      },
      {
        question: 'What role is responsible for ensuring sound clarity, mixing, and audio levels in a podcast team?',
        options: [
          'Producer',
          'Scriptwriter',
          'Audio Engineer / Editor',
          'Guest Coordinator'
        ],
        correct: 2,
        explanation: 'The Audio Engineer / Editor is responsible for sound clarity, mixing, and audio levels in podcast production.'
      },
      {
        question: 'Which of the following is a current trend shaping the future of podcasting?',
        options: [
          'Decreasing content diversity',
          'Fewer creators in the industry',
          'Hyper-niche content for smaller audiences',
          'Reduced use of AI tools'
        ],
        correct: 2,
        explanation: 'Hyper-niche content targeting smaller, specific audiences is a current trend in podcasting.'
      }
    ]
  }
}; 
