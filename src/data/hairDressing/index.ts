import { Course, Module } from '@/types/course';
import { module1IntroductionToHairdressing } from './module1-introductionToHairdressing';
import { module2ToolsAndEquipment } from './module2-toolsAndEquipment';
import { module3SalonSafetyAndHygiene } from './module3-salonSafetyAndHygiene';
import { module4HairCuttingTechniques } from './module4-hairCuttingTechniques';
import { module5AdvancedHairCuttingTechniques } from './module5-advancedHairCuttingTechniques';
import { module6MensHaircutsGrooming } from './module6-mensHaircutsGrooming';
import { module7HairStylingFinishing } from './module7-hairStylingFinishing';
import { module8BraidingUpdos } from './module8-braidingUpdos';
import { module9CurlingAndStraightening } from './module9-curlingAndStraightening';
import { module10HairColoringTreatments } from './module10-hairColoringTreatments';
import { module11ChemicalProcesses } from './module11-chemicalProcesses';
import { module12ClientConsultation } from './module12-clientConsultation';
import { module13SalonManagement } from './module13-salonManagement';
import { module14BuildingCareerInHairdressing } from './module14-buildingCareerInHairdressing';
import { lesson5Certificate } from './module5-certificate';

export const hairDressingCourse: Course = {
  id: 'hair-dressing-course',
  title: 'Professional Hair Dressing Certification',
  description: 'This training course is designed to provide in-depth knowledge and hands-on skills for professional hairdressing. Participants will learn various hairstyling techniques, hair care principles, and client management strategies to excel in the hairdressing industry.',
  instructor: {
    name: 'Sofia Rodriguez',
    title: 'Master Hair Stylist & Educator',
    bio: 'With over 15 years of experience in professional hairdressing and salon management, Sofia has trained hundreds of stylists and owns multiple award-winning salons. She specializes in advanced cutting techniques and color theory.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b977?w=150&h=150&fit=crop&crop=face'
  },
  duration: '16 weeks',
  level: 'Beginner',
  category: 'Beauty & Wellness',
  is_free: false,
  price: 2800,
  currency: 'ZAR',
  students: 892,
  rating: 4.9,
  thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
  learningObjectives: [
    'Understand hair structure, types, porosity, and elasticity',
    'Master fundamental cutting and styling techniques',
    'Learn professional coloring and chemical treatment methods',
    'Develop client consultation and communication skills',
    'Practice salon safety and sanitation protocols',
    'Build expertise in hair care product knowledge',
    'Create diverse hairstyles for different face shapes',
    'Understand business aspects of running a salon',
    'Develop skills in salon management and customer service',
    'Learn advanced styling for special occasions',
    'Develop skills for ongoing professional development'
  ],
  modules: [
    module1IntroductionToHairdressing,
    module2ToolsAndEquipment,
    module3SalonSafetyAndHygiene,
    module4HairCuttingTechniques,
    module5AdvancedHairCuttingTechniques,
    module6MensHaircutsGrooming,
    module7HairStylingFinishing,
    module8BraidingUpdos,
    module9CurlingAndStraightening,
    module10HairColoringTreatments,
    module11ChemicalProcesses,
    module12ClientConsultation,
    module13SalonManagement,
    module14BuildingCareerInHairdressing,
    {
      id: 15,
      title: 'Course Completion',
      description: 'Complete your hair dressing certification',
      lessons: [lesson5Certificate]
    } as Module
  ]
};