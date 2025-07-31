
import { Module } from '@/types/course';
import { lesson1WorkflowOptimization } from './lesson1-workflow-optimization';
import { lesson55ProjectManagementTools } from './lesson55-projectManagementTools';
import { lesson56WorkflowAutomation } from './lesson56-workflowAutomation';
import { lesson57GuestManagement } from './lesson57-guestManagement';
import { lesson58SOPsAndReporting } from './lesson58-sopsAndReporting';
import { lesson59Quiz } from './lesson59-quiz';
import { lesson2Quiz } from './lesson2-quiz';

export const module9ProjectManagementAutomation: Module = {
  id: 9,
  title: '⚙️ Module 9: Project Management & Automation',
  description: 'Master workflow optimization, team management, process automation, and project coordination',
  lessons: [
    lesson1WorkflowOptimization,
    lesson55ProjectManagementTools,
    lesson56WorkflowAutomation,
    lesson57GuestManagement,
    lesson58SOPsAndReporting,
    lesson59Quiz,
    lesson2Quiz
  ]
};
