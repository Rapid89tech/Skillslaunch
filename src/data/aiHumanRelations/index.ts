
import type { Course } from '@/types/course';
import { module1FoundationsOfAI } from './module1-foundationsOfAI';
import { module2CommunicationEmotionalIntelligence } from './module2-communicationEmotionalIntelligence';
import { module3AIInWorkplace } from './module3-aiInWorkplace';
import { module4EthicsEmpathy } from './module4-ethicsEmpathy';
import { module5EducationLearningAI } from './module5/index';
import { module6LegalPsychological } from './module6-legalPsychological';
import { module7DesigningHumanCenteredAI } from './module7-designingHumanCenteredAI';

export const aiHumanRelationsCourse: Course = {
  id: 'ai-human-relations',
  title: 'AI and Human Relations',
  description: 'Explore the intersection of artificial intelligence and human interaction. Learn about AI fundamentals, human-AI collaboration, ethical implications, legal considerations, and the transformative impact of AI on education and society.',
  instructor: {
    name: 'Dr. Elena Rodriguez',
    title: 'AI Ethics Researcher & Human-Computer Interaction Specialist',
    bio: 'Dr. Elena Rodriguez is a leading expert in AI ethics and human-computer interaction with over 10 years of experience in research and industry. She holds a PhD in Computer Science with a focus on AI ethics and has published extensively on human-AI collaboration.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c63c?w=150&h=150&fit=crop&crop=face'
  },
  level: 'Beginner to Intermediate',
  duration: '16 weeks',
  students: 1847,
  rating: 4.8,
  price: 899,
  currency: 'ZAR',
  is_free: false,
  thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  category: 'Technology',
  learningObjectives: [
    'Understand the fundamentals of artificial intelligence and its types',
    'Analyze the evolution of human-AI interaction throughout history',
    'Compare and contrast human intelligence with machine intelligence',
    'Explore real-world applications of AI in human relations',
    'Evaluate ethical considerations in AI development and deployment',
    'Develop skills for effective human-AI collaboration',
    'Assess the impact of AI on society and workplace dynamics',
    'Understand AI in conversational interfaces and emotional intelligence',
    'Analyze limitations and risks of AI in emotional contexts',
    'Explore AI applications in therapy and mental health',
    'Master AI implementation in HR processes and recruitment',
    'Learn strategies for managing human-AI teams effectively',
    'Understand emotional labor and automation in the workplace',
    'Develop skills for productive human-AI collaboration',
    'Examine bias, fairness, and transparency in AI systems',
    'Navigate ethical dilemmas in AI decision-making',
    'Understand the possibilities and limitations of empathetic AI',
    'Learn to design AI systems that align with human values',
    'Explore cultural perspectives on AI across different societies',
    'Anticipate future social norms in an AI-driven world',
    'Analyze the role of AI tutors and adaptive learning systems in education',
    'Understand the impact of AI on teacher-student relationships',
    'Learn strategies for humanizing digital education environments',
    'Evaluate ethical considerations in AI-enhanced learning',
    'Explore the future of AI in educational contexts',
    'Understand legal frameworks for AI responsibility and accountability',
    'Analyze trust dynamics and over-reliance risks in human-AI interaction',
    'Examine the psychological impact of AI on human identity and behavior',
    'Evaluate emerging legal approaches to AI liability',
    'Explore the ethical implications of AI companionship and emotional attachment',
    'Master UX/UI design principles for AI applications',
    'Apply human-centered design approaches to AI systems',
    'Understand how AI can enhance human well-being and social connection',
    'Explore the future co-evolution of humans and machines',
    'Analyze philosophical perspectives on consciousness and artificial intelligence',
    'Design effective human-AI collaboration scenarios'
  ],
  modules: [
    module1FoundationsOfAI,
    module2CommunicationEmotionalIntelligence,
    module3AIInWorkplace,
    module4EthicsEmpathy,
    module5EducationLearningAI,
    module6LegalPsychological,
    module7DesigningHumanCenteredAI
  ]
};
