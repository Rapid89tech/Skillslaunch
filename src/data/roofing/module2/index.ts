
import { Module } from '@/types/course';
import { lesson5HandTools } from './lesson5-handTools';
import { lesson6PowerTools } from './lesson6-powerTools';
import { lesson7SafetyGear } from './lesson7-safetyGear';
import { lesson8ToolMaintenance } from './lesson8-toolMaintenance';
import { lesson9Quiz } from './lesson9-quiz';

export const module2RoofingToolsAndEquipment: Module = {
  id: 2,
  title: 'Roofing Tools and Equipment',
  description: 'Master the essential tools and equipment used in roofing, including hand tools, power tools, safety gear, and proper maintenance practices for efficient and safe roofing work.',
  lessons: [
    lesson5HandTools,
    lesson6PowerTools,
    lesson7SafetyGear,
    lesson8ToolMaintenance,
    lesson9Quiz
  ]
};
