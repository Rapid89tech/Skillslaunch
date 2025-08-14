import type { Module } from '@/types/course';
import { lesson1ProjectManagementTools } from './lesson1-project-management-tools';
import { lesson2WorkflowAutomation } from './lesson2-workflow-automation';
import { lesson3GuestManagement } from './lesson3-guest-management';
import { lesson4SOPsAndClientReporting } from './lesson4-sops-and-client-reporting';
import { module9Quiz } from './quiz';

const module9: Module = {
  id: 9,
  title: '• Module 9: Project and Team Management',
  description: 'Master project management tools, workflow automation, guest management, and SOPs for professional podcast production',
  lessons: [
    lesson1ProjectManagementTools,
    lesson2WorkflowAutomation,
    lesson3GuestManagement,
    lesson4SOPsAndClientReporting,
    module9Quiz
  ]
};

export default module9; 