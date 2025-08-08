import { Lesson } from '@/types/course';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizConfig {
  id: number;
  title: string;
  duration: string;
  type: 'quiz';
  questions: QuizQuestion[];
}

const quizConfig: QuizConfig = {
  id: 5,
  title: 'Quiz: Introduction to Podcasting',
  duration: '15 minutes',
  type: 'quiz',
  questions: [
    {
      id: 'q1',
      question: 'What does the term "podcast" originate from?',
      options: [
        'Podium + Broadcast',
        'iPod + Broadcast',
        'Portable + Cast',
        'Podcast + Audio'
      ],
      correctAnswer: 1,
      explanation: 'The term "podcast" is a blend of "iPod" (Apple\'s portable media player) and "broadcast," coined by Ben Hammersley in 2004.'
    },
    {
      id: 'q2',
      question: 'Who is known as the "Podfather" for pioneering early podcasting technology?',
      options: [
        'Orson Welles',
        'Joe Rogan',
        'Adam Curry',
        'Sarah Koenig'
      ],
      correctAnswer: 2,
      explanation: 'Adam Curry, along with Dave Winer, is credited as a podcasting pioneer. He created iPodder in 2004 and hosted "Daily Source Code."'
    },
    {
      id: 'q3',
      question: 'Which podcast, launched in 2014, played a major role in popularizing the binge-listening model?',
      options: [
        'Welcome to Night Vale',
        'Serial',
        'The Joe Rogan Experience',
        'Radiolab'
      ],
      correctAnswer: 1,
      explanation: 'Serial, hosted by Sarah Koenig, revolutionized podcasting with its gripping true-crime narrative and introduced binge-listening.'
    },
    {
      id: 'q4',
      question: 'True or False: Radio broadcasting had no influence on the development of podcasts.',
      options: [
        'True',
        'False'
      ],
      correctAnswer: 1,
      explanation: 'False. Podcasting evolved from radio broadcasting, especially talk radio and serialized audio shows like War of the Worlds.'
    },
    {
      id: 'q5',
      question: 'What was one limitation of early internet radio platforms like Live365 and Shoutcast?',
      options: [
        'Poor sound quality',
        'No user access',
        'No download or portability options',
        'Limited internet access'
      ],
      correctAnswer: 2,
      explanation: 'Early internet radio platforms lacked downloadability and portability, limiting user control and requiring constant connectivity.'
    },
    {
      id: 'q6',
      question: 'Which major tech company integrated podcasts into its platform in 2005, helping podcasts go mainstream?',
      options: [
        'Google',
        'Apple',
        'Microsoft',
        'Spotify'
      ],
      correctAnswer: 1,
      explanation: 'Apple added podcasts to iTunes 4.9 in 2005, allowing iPod users to easily find and subscribe to podcasts.'
    },
    {
      id: 'q7',
      question: 'Which of the following is NOT a common podcast type by content theme?',
      options: [
        'Interview',
        'Comedy',
        'Cooking Show',
        'True Crime'
      ],
      correctAnswer: 2,
      explanation: 'While cooking shows exist, they are less common than interview, comedy, and true crime podcasts.'
    },
    {
      id: 'q8',
      question: 'What is a key advantage of the solo podcast format?',
      options: [
        'Requires guest coordination',
        'Easier for audience interaction',
        'Easier to produce and build personal branding',
        'Higher sound quality'
      ],
      correctAnswer: 2,
      explanation: 'Solo podcasts are easier to produce, require less coordination, and are effective for building personal brands.'
    },
    {
      id: 'q9',
      question: 'What role is responsible for ensuring sound clarity, mixing, and audio levels in a podcast team?',
      options: [
        'Producer',
        'Scriptwriter',
        'Audio Engineer / Editor',
        'Guest Coordinator'
      ],
      correctAnswer: 2,
      explanation: 'Audio Engineers and Editors are responsible for technical aspects of sound quality, mixing, and audio levels.'
    },
    {
      id: 'q10',
      question: 'Which of the following is a current trend shaping the future of podcasting?',
      options: [
        'Decreasing content diversity',
        'Fewer creators in the industry',
        'Hyper-niche content for smaller audiences',
        'Reduced use of AI tools'
      ],
      correctAnswer: 2,
      explanation: 'Hyper-niche content targeting smaller, specific audiences is a current trend in podcasting.'
    }
  ]
};

const generateQuiz = (config: QuizConfig): Lesson => {
  let textContent = `# 🎙️ Module 1: Introduction to Podcasting

## 📝 Quiz: Introduction to Podcasting

<div style="background:linear-gradient(90deg,#fef3c7 0%,#fde68a 100%);padding:1.5rem;border-radius:12px;margin-bottom:2rem;border-left:5px solid #f59e0b;">
  <h3 style="margin:0 0 1rem 0;color:#92400e;">📋 Quiz Instructions</h3>
  <ul style="margin:0;color:#78350f;">
    <li>This quiz contains <strong>10 questions</strong> about podcasting fundamentals</li>
    <li>Each question has <strong>multiple choice answers</strong></li>
    <li>Take your time to read each question carefully</li>
    <li>Select the best answer based on what you've learned</li>
  </ul>
</div>

`;

  config.questions.forEach((question, idx) => {
    textContent += `---

## Question ${idx + 1}

<div style="background:white;padding:2rem;border-radius:12px;box-shadow:0 4px 6px rgba(0,0,0,0.1);margin-bottom:1rem;">
  <h4 style="color:#2d3748;margin-bottom:1.5rem;">${question.question}</h4>
  
  <div style="space-y-2;">
`;

    question.options.forEach((option, optionIdx) => {
      const optionLetter = String.fromCharCode(65 + optionIdx); // A, B, C, D
      textContent += `
    <div style="padding:1rem;border:2px solid #e2e8f0;border-radius:8px;margin-bottom:0.5rem;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.backgroundColor='#f7fafc'" onmouseout="this.style.backgroundColor='white'">
      <strong style="color:#4a5568;">${optionLetter}.</strong> ${option}
    </div>`;
    });

    textContent += `
  </div>
</div>

<div style="background:linear-gradient(90deg,#e6fffa 0%,#b2f5ea 100%);padding:1rem;border-radius:8px;margin-top:1rem;display:none;" id="explanation-${question.id}">
  <strong style="color:#234e52;">💡 Explanation:</strong>
  <p style="color:#234e52;margin:0.5rem 0 0 0;">${question.explanation || 'This is the correct answer based on the course material.'}</p>
</div>

`;
  });

  textContent += `
---

<div style="text-align:center;margin:3rem 0 1rem 0;">
  <span style="font-size:2rem;font-weight:700;color:#764ba2;">🎉 Congratulations!</span>
  <p style="font-size:1.1rem;color:#4a5568;">You've completed the Introduction to Podcasting quiz! Review your answers and continue to Module 2.</p>
</div>

<div style="background:linear-gradient(90deg,#e0e7ff 0%,#c7d2fe 100%);padding:1.5rem;border-radius:12px;margin-top:2rem;">
  <h3 style="color:#3730a3;margin:0 0 1rem 0;">📚 What's Next?</h3>
  <p style="color:#4338ca;margin:0;">In Module 2, you'll learn about pre-production planning, including developing show concepts, content calendars, guest management, and script writing.</p>
</div>
`;

  return {
    id: config.id,
    title: config.title,
    duration: config.duration,
    type: config.type,
    content: {
      videoUrl: '',
      textContent
    }
  };
};

export const lesson5Quiz: Lesson = generateQuiz(quizConfig);
export { generateQuiz, type QuizConfig, type QuizQuestion };
export default lesson5Quiz; 
