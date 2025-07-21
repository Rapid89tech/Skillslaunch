
import { Course, Module } from '@/types/course';
import { module1Introduction } from './module1-introduction';
import { module2ToolsAndEquipment } from './module2-toolsAndEquipment';
import { module3HardwareComponents } from './module3-hardwareComponents';
import { module4CommonRepairs } from './module4-commonRepairs';
import { module5AdvancedDiagnostics } from './module5-advancedDiagnostics';
import { module6MaintenancePreventiveCare } from './module6-maintenancePreventiveCare';
import { module7BusinessSetup } from './module7-businessSetup';
import { lesson8Certificate } from './module8-certificate';

export const cellphoneRepairsCourse: Course = {
  id: 'cellphone-repairs-course',
  title: 'Cellphone Repairs and Maintenance',
  description: 'This course provides a step-by-step guide to diagnosing, repairing, and maintaining modern smartphones. Participants will learn about hardware components, common issues, troubleshooting techniques, and preventive maintenance practices.',
  instructor: {
    name: 'Michael Rodriguez',
    title: 'Senior Mobile Device Technician & Electronics Specialist',
    bio: 'With over 12 years of experience in mobile device repair and electronics, Michael has worked with all major smartphone brands and specializes in advanced micro-soldering techniques. He has trained hundreds of technicians and owns a successful chain of mobile repair shops.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  duration: '20 weeks',
  level: 'Beginner to Advanced',
  category: 'Technology & Electronics',
  is_free: false,
  price: 2400,
  currency: 'ZAR',
  students: 198,
  rating: 4.9,
  thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  learningObjectives: [
    'Understand the smartphone repair industry and career opportunities',
    'Master basic safety precautions and ESD protection',
    'Learn to handle sensitive electronic components properly',
    'Understand iOS and Android smartphone architectures',
    'Identify and use essential mobile repair tools',
    'Develop systematic troubleshooting approaches',
    'Practice proper disassembly and reassembly techniques',
    'Diagnose common hardware and software issues', 
    'Perform screen, battery, and charging port repairs',
    'Handle water damage and component-level repairs',
    'Apply micro-soldering techniques for advanced repairs',
    'Use diagnostic software for efficient troubleshooting',
    'Replace and program biometric components safely',
    'Implement quality control and testing procedures',
    'Provide professional customer service',
    'Build and manage a mobile repair business',
    'Stay updated with emerging mobile technologies',
    'Apply preventive care and maintenance techniques',
    'Educate customers on proper device care',
    'Extend smartphone lifespan through best practices'
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
    } as Module
  ]
};
