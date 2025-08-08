import type { Quiz } from '@/types/course';

export const module12Quiz: Quiz = {
  id: 1,
  title: 'Quiz: Written and Practical Exam in Roofing',
  questions: [
    {
      id: 1,
      question: 'What is the primary purpose of a written roofing exam?',
      options: [
        'To test physical strength',
        'To assess theoretical knowledge and critical thinking',
        'To evaluate tool handling',
        'To measure teamwork skills'
      ],
      correctAnswer: 1,
      explanation: 'Written exams test understanding of materials, codes, and safety protocols.'
    },
    {
      id: 2,
      question: 'Which topic is commonly included in a written roofing exam?',
      options: [
        'Cooking techniques',
        'Building codes and slope requirements',
        'Marketing strategies',
        'Interior design principles'
      ],
      correctAnswer: 1,
      explanation: 'Exams cover codes like IBC (e.g., 1/4 inch per foot slope for flat roofs).'
    },
    {
      id: 3,
      question: 'What is a key evaluation criterion in a practical roofing exam?',
      options: [
        'Writing speed',
        'Accuracy in installation and alignment',
        'Social media skills',
        'Financial planning'
      ],
      correctAnswer: 1,
      explanation: 'Practical exams assess correct techniques, such as shingle alignment and fastening.'
    },
    {
      id: 4,
      question: 'What is a common mistake to avoid in a practical roofing exam?',
      options: [
        'Using too many diagrams',
        'Incorrect fastener placement',
        'Writing in complete sentences',
        'Studying safety regulations'
      ],
      correctAnswer: 1,
      explanation: 'Overdriven or misplaced nails can damage materials or cause leaks.'
    },
    {
      id: 5,
      question: 'Name three topics typically covered in a written roofing exam.',
      type: 'short-answer',
      correctAnswer: 'Roofing materials, installation procedures, and safety practices.',
      explanation: 'These are fundamental topics that assess comprehensive roofing knowledge.'
    },
    {
      id: 6,
      question: 'List two tasks that might be included in a practical roofing exam.',
      type: 'short-answer',
      correctAnswer: 'Installing asphalt shingles with correct nailing patterns and applying flashing around a vent.',
      explanation: 'These tasks demonstrate essential hands-on roofing skills.'
    },
    {
      id: 7,
      question: 'What are two evaluation criteria for a practical roofing exam?',
      type: 'short-answer',
      correctAnswer: 'Safety: Proper use of PPE and fall protection. Workmanship: Neatness and proper sealing of joints.',
      explanation: 'Safety and workmanship are critical aspects of professional roofing work.'
    },
    {
      id: 8,
      question: 'Why is it important to review diagrams and safety regulations before a written exam?',
      type: 'short-answer',
      correctAnswer: 'Diagrams help understand roof components and symbols, while safety regulations (e.g., OSHA 1926.501) ensure compliance and safe practices.',
      explanation: 'Understanding visual elements and safety requirements is essential for roofing professionals.'
    },
    {
      id: 9,
      question: 'What is one tip for preparing for a practical roofing exam?',
      type: 'short-answer',
      correctAnswer: 'Rehearse installation techniques in a lab setting to build muscle memory and ensure accuracy.',
      explanation: 'Practice builds confidence and improves performance in practical assessments.'
    },
    {
      id: 10,
      question: 'How can feedback after an exam help a learner?',
      type: 'short-answer',
      correctAnswer: 'Feedback highlights strengths and areas for improvement, guiding further practice and building confidence for future tasks.',
      explanation: 'Constructive feedback is essential for continuous learning and skill development.'
    }
  ]
}; 
