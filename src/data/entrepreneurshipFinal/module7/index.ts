import type { Module } from '@/types/course';
import { lesson1LaunchingStrategies } from './lesson1-launching-strategies';
import { lesson2ScalingStrategies } from './lesson2-scaling-strategies';
import { module7Quiz } from './quiz';

const module7: Module = {
  id: 7,
  title: 'Launching and Scaling the Business',
  description: 'Launching and scaling a business marks the transition from planning to execution and growth. This module covers the critical steps of launching—through soft launches and full launches—and scaling strategies, including expanding product lines, entering new markets, automating operations, building strategic partnerships, and leveraging data analytics. These approaches ensure startups validate operations, optimize processes, and grow sustainably while maintaining quality, profitability, and customer satisfaction in competitive markets.',
  lessons: [
    lesson1LaunchingStrategies,
    lesson2ScalingStrategies,
    module7Quiz
  ]
};

export default module7; 