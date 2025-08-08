import type { Quiz } from '@/types/course';

export const module11Quiz: Quiz = {
  id: 1,
  title: 'Quiz: Simulated Installations of Various Roof Types',
  questions: [
    {
      id: 1,
      question: 'What is the primary purpose of conducting simulated roofing installations?',
      options: [
        'To increase project costs',
        'To provide hands-on training in a safe environment',
        'To replace on-site projects entirely',
        'To test roofing materials in extreme weather'
      ],
      correctAnswer: 1,
      explanation: 'Simulations allow practice of installation techniques in a risk-free setting before on-site work.'
    },
    {
      id: 2,
      question: 'Which roofing system simulation involves panel alignment, seam locking, and managing expansion gaps?',
      options: [
        'Asphalt shingle roofs',
        'Metal roofs',
        'Flat roof membranes',
        'Tile roofs'
      ],
      correctAnswer: 1,
      explanation: 'Metal roof simulations focus on aligning panels, locking seams, and accommodating thermal expansion.'
    },
    {
      id: 3,
      question: 'In flat roof membrane simulations, what are two critical focus areas for ensuring durability?',
      options: [
        'Shingle overlap and nailing patterns',
        'Seam integrity and proper drainage slopes',
        'Tile alignment and batten installation',
        'Plant selection and irrigation setup'
      ],
      correctAnswer: 1,
      explanation: 'Strong seams and correct slopes (1/4 inch per foot) prevent leaks and ensure membrane durability.'
    },
    {
      id: 4,
      question: 'During a simulated tile roof installation, what two aspects are particularly important?',
      options: [
        'Weight support and tile overlap',
        'Seam welding and panel alignment',
        'Growing medium and root barriers',
        'Nailing patterns and ventilation setup'
      ],
      correctAnswer: 0,
      explanation: 'Tile roofs require structural support for weight (8–12 lbs/sq ft) and proper overlap for waterproofing.'
    },
    {
      id: 5,
      question: 'Name three common roof types used in simulated installations.',
      type: 'short-answer',
      correctAnswer: 'Asphalt shingle roofs, metal roofs, and flat roof membranes.',
      explanation: 'These are the most common roof types practiced in lab-based simulations.'
    },
    {
      id: 6,
      question: 'What key skills are emphasized when simulating an asphalt shingle roof installation?',
      type: 'short-answer',
      correctAnswer: 'Proper overlap techniques (5–6 inches), valley and ridge detailing, starter course installation, and correct nailing patterns.',
      explanation: 'These skills ensure watertightness and wind resistance for asphalt shingle roofs.'
    },
    {
      id: 7,
      question: 'List three essential safety practices to follow during simulated roofing installations.',
      type: 'short-answer',
      correctAnswer: 'Use fall protection (harnesses, guardrails) even on low mock-ups. Wear appropriate PPE (gloves, goggles, hard hats). Maintain clear work areas to prevent trips or falls.',
      explanation: 'Safety practices are critical even in controlled lab environments.'
    },
    {
      id: 8,
      question: 'Why is flashing installation important in simulated roofing projects?',
      type: 'short-answer',
      correctAnswer: 'Flashing seals joints and penetrations (e.g., vents, chimneys), preventing water leaks and ensuring roof integrity.',
      explanation: 'Flashing is critical for preventing leaks at vulnerable points in the roof system.'
    },
    {
      id: 9,
      question: 'What are two common issues encountered in simulated installations?',
      type: 'short-answer',
      correctAnswer: 'Improper overlap leading to potential leaks. Incorrect fastener placement causing material damage.',
      explanation: 'These are common mistakes that trainees learn to avoid through practice.'
    },
    {
      id: 10,
      question: 'What is one key benefit of repeating simulated roofing exercises?',
      type: 'short-answer',
      correctAnswer: 'Repeating exercises improves proficiency by allowing error correction and mastery of installation techniques.',
      explanation: 'Practice builds muscle memory and confidence for on-site applications.'
    }
  ]
}; 
