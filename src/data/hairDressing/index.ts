import type { Course } from '@/types/course';
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

export const hairDressingCourse: Course = {
  id: 'hair-dressing-course',
  title: 'Hair Dressing',
  description: `Professional Hair Dressing is a comprehensive online course designed to equip learners with essential skills and knowledge for a successful career in hairdressing. This course covers fundamental techniques, advanced styling methods, chemical services, and business management skills needed in the modern beauty industry.

Through interactive video lessons, practical demonstrations, and hands-on projects, students will master hair cutting, coloring, styling, and treatment techniques. The course emphasizes safety, hygiene, client consultation, and professional standards while preparing learners for real-world salon environments.

Whether you're a beginner looking to start a career in hairdressing or an experienced stylist seeking to enhance your skills, this course provides the foundation for professional excellence in the beauty industry.`,
  instructor: {
    name: 'Sarah Johnson',
    title: 'Master Hair Stylist and Educator',
    bio: 'Certified hair stylist with 15+ years of experience in professional hairdressing, specializing in cutting-edge techniques and salon management.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  level: 'beginner',
  duration: '12 weeks (6-8 hours/week)',
  students: 1247,
  rating: 4.8,
  price: 1499,
  currency: 'ZAR',
  is_free: false,
  thumbnail: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop',
  category: 'Beauty and Health',
  learningObjectives: [
    'Master fundamental hairdressing techniques and safety procedures',
    'Develop proficiency in hair cutting, styling, and coloring methods',
    'Understand hair analysis, consultation, and client communication',
    'Learn chemical services including perming, relaxing, and straightening',
    'Acquire skills in hair treatments, extensions, and specialized services',
    'Gain knowledge of salon management, hygiene, and professional standards',
    'Build confidence in client consultation and service delivery',
    'Prepare for professional hairdressing certification and career advancement'
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
    module14BuildingCareerInHairdressing
  ]
};

export const hairDressingMarkdown = `
<full markdown content from CourseDocuments/Hair Dressing Volume 3.md>
`;