import { QuizLesson } from '@/types/course';

export const lesson8Quiz: QuizLesson = {
  id: 8,
  title: 'Quiz: Introduction to Podcasting',
  duration: '30 minutes',
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
        explanation: 'The term "podcast" is a blend of "iPod" (Apple\'s portable media player) and "broadcast." It was coined by Ben Hammersley in 2004 when Adam Curry created iPodder to download internet radio to iPods.'
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
        explanation: 'Adam Curry is known as the "Podfather" for his pioneering work in podcasting. He created iPodder in 2004 and hosted one of the first podcasts, "Daily Source Code."'
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
        explanation: 'Serial, launched in 2014 by Sarah Koenig, revolutionized podcasting with its gripping true-crime narrative and introduced the binge-listening model to podcasting.'
      },
      {
        question: 'True or False: Radio broadcasting had no influence on the development of podcasts.',
        options: [
          'True',
          'False'
        ],
        correct: 1,
        explanation: 'False. Radio broadcasting, especially talk radio and serialized audio shows, laid the groundwork for podcasting\'s conversational and narrative formats.'
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
        explanation: 'Early internet radio platforms lacked downloadability and portability, requiring constant connectivity unlike podcasts\' offline options.'
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
        explanation: 'Apple added podcasts to iTunes 4.9 in 2005, allowing iPod users to easily find and subscribe to podcasts, which helped podcasting go mainstream.'
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
        explanation: 'Cooking Show is not a common podcast type. Common podcast types include Interview, Comedy, True Crime, Education, News, and Fiction.'
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
        explanation: 'The solo podcast format is easier to produce and helps build personal branding, as the host can focus on their expertise and create consistent content without coordinating with guests.'
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
        explanation: 'The Audio Engineer / Editor is responsible for ensuring sound clarity, mixing, and audio levels in a podcast team.'
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
        explanation: 'Hyper-niche content for smaller audiences is a current trend shaping the future of podcasting, as creators target specific, passionate audiences with specialized content.'
      }
    ]
  }
}; 