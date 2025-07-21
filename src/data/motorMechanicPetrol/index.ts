
import { module1Fundamentals } from './module1-fundamentals';
import { module2FuelSystems } from './module2-fuelSystems';
import { module3IgnitionSystem } from './module3-ignitionSystem';
import { module4CoolingSystem } from './module4-coolingSystem';
import { module5Diagnostics } from './module5-diagnostics';
import { module6Maintenance } from './module6-maintenance';
import { module7Assessment } from './module7-assessment';
import type { Course } from '@/types/course';

export const motorMechanicPetrolCourse: Course = {
  id: 'a7b6c5d4-e3f2-8391-a2b3-c4d5e6f7a8b9',
  title: 'Motor Mechanic - Petrol Engine Professional Certification',
  description: 'Comprehensive training in petrol engine repair, diagnostics, and maintenance for automotive technicians working with gasoline engines.',
  instructor: {
    name: 'Master Technician David Smith',
    title: 'Certified Petrol Engine Specialist',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Over 18 years of experience in petrol engine repair and diagnostics. Certified by major automotive manufacturers including Toyota, Honda, Ford, and Volkswagen.'
  },
  level: 'intermediate',
  duration: '14 weeks',
  students: 1543,
  rating: 4.7,
  price: 2200,
  currency: 'ZAR',
  is_free: false,
  thumbnail: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=800&h=600&fit=crop',
  category: 'Automotive',
  learningObjectives: [
    'Understand petrol engine principles and operation',
    'Master fuel system diagnostics and repair',
    'Diagnose and repair ignition system problems',
    'Perform cooling system maintenance and repairs',
    'Use diagnostic equipment effectively',
    'Conduct comprehensive engine diagnostics',
    'Implement preventive maintenance procedures',
    'Troubleshoot complex engine performance issues'
  ],
  modules: [
    module1Fundamentals,
    module2FuelSystems,
    module3IgnitionSystem,
    module4CoolingSystem,
    module5Diagnostics,
    module6Maintenance,
    module7Assessment
  ]
};
