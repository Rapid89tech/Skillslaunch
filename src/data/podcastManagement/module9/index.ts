
import { Module } from '@/types/course';
import { lesson55ProjectManagementTools } from './lesson55-projectManagementTools';
import { lesson56WorkflowAutomation } from './lesson56-workflowAutomation';
import { lesson57GuestManagement } from './lesson57-guestManagement';
import { lesson58SOPsAndReporting } from './lesson58-sopsAndReporting';
import { lesson59Quiz } from './lesson59-quiz';

export const module9ProjectTeamManagement: Module = {
  id: 9,
  title: 'Project and Team Management',
  description: 'Master project management tools, workflow automation, guest coordination, and client reporting for professional podcast operations.',
  lessons: [
    lesson55ProjectManagementTools,
    lesson56WorkflowAutomation,
    lesson57GuestManagement,
    lesson58SOPsAndReporting,
    lesson59Quiz
  ]
};
