
import type { Course } from '@/types/course';
import { module1Introduction } from './module1-introduction';
import { module2ToolsAndEquipment } from './module2-toolsAndEquipment';
import { module3HardwareComponents } from './module3-hardwareComponents';
import { module4CommonRepairs } from './module4-commonRepairs';
import { module5AdvancedDiagnostics } from './module5-advancedDiagnostics';
import { module6MaintenancePreventiveCare } from './module6-maintenancePreventiveCare';
import { module7BusinessSetup } from './module7-businessSetup';
import { lesson8Certificate } from './module8-certificate';

export const cellphoneRepairsMarkdown = `
<full markdown content from CourseDocuments/Cellphone Repairs and Maintenance Version 3.md>
`;

export const cellphoneRepairsCourse: Course = {
  id: 'cellphone-repairs-course',
  title: 'Cellphone Repairs and Maintenance',
  description: `Cellphone Repairs and Maintenance is a comprehensive online course designed to equip learners with the skills and knowledge needed to diagnose, repair, and maintain smartphones and mobile devices. This course covers essential repair techniques, hardware diagnostics, software troubleshooting, and business management for mobile device repair services.

Through detailed video tutorials, hands-on demonstrations, and practical exercises, students will learn to repair common issues including screen replacements, battery servicing, charging port repairs, and software problems. The course emphasizes safety procedures, proper tool usage, and professional service delivery while preparing learners for real-world repair scenarios.

Whether you're looking to start a mobile repair business, enhance your technical skills, or pursue a career in mobile device servicing, this course provides the foundation for professional excellence in the growing mobile repair industry.`,
  instructor: {
    name: 'David Chen',
    title: 'Mobile Device Repair Specialist',
    bio: 'Certified mobile device technician with 12+ years of experience in smartphone and tablet repair, specializing in hardware diagnostics and business development.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  level: 'beginner',
  duration: '10 weeks (5-6 hours/week)',
  students: 1568,
  rating: 4.7,
  price: 1299,
  currency: 'ZAR',
  is_free: false,
  thumbnail: '/images/generation-f3a5d1c2-fed5-4324-be4b-7b9c526b3455.png',
  category: 'Information Communication and technology',
  learningObjectives: [
    'Master mobile device hardware components and their functions',
    'Develop proficiency in smartphone disassembly and reassembly',
    'Learn to diagnose and repair common mobile device issues',
    'Understand software troubleshooting and system recovery',
    'Acquire skills in screen replacement and component repair',
    'Gain knowledge of battery servicing and charging systems',
    'Learn business management and customer service skills',
    'Prepare for professional mobile device repair certification'
  ],
  modules: [
    module1Introduction,
    module2ToolsAndEquipment,
    module3HardwareComponents,
    module4CommonRepairs,
    module5AdvancedDiagnostics,
    module6MaintenancePreventiveCare,
    module7BusinessSetup,
    {
      id: 8,
      title: 'Course Completion',
      description: 'Complete your cellphone repairs certification',
      lessons: [lesson8Certificate]
    }
  ]
};
