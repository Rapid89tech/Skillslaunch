import type { Module } from '@/types/course';
import { lesson1MarketResearchOverview } from './lesson1-market-research-overview';
import { lesson2IdentifyingTargetCustomers } from './lesson2-identifying-target-customers';
import { lesson3UnderstandingCustomerNeeds } from './lesson3-understanding-customer-needs';
import { lesson4MethodsToIdentifyCustomers } from './lesson4-methods-to-identify-customers';
import { lesson5CreatingCustomerPersonas } from './lesson5-creating-customer-personas';
import { lesson6UsingNeedsToShapeBusiness } from './lesson6-using-needs-to-shape-business';
import { lesson7AnalyzingCompetitors } from './lesson7-analyzing-competitors';
import { lesson8AssessingDemand } from './lesson8-assessing-demand';
import { lesson9IdeaValidation } from './lesson9-idea-validation';
import { lesson10CreatingMvp } from './lesson10-creating-mvp';
import { lesson11GatheringFeedback } from './lesson11-gathering-feedback';
import { module1Quiz } from './quiz';

const module1: Module = {
  id: 1,
  title: 'Market Research',
  description: 'Market research is the foundation of any successful entrepreneurial venture, enabling you to identify your target customers, understand their needs, and validate your business idea. This module explores the critical steps of defining your audience, assessing demand, analyzing competitors, and gathering feedback to ensure your product or service aligns with market realities.',
  lessons: [
    lesson1MarketResearchOverview,
    lesson2IdentifyingTargetCustomers,
    lesson3UnderstandingCustomerNeeds,
    lesson4MethodsToIdentifyCustomers,
    lesson5CreatingCustomerPersonas,
    lesson6UsingNeedsToShapeBusiness,
    lesson7AnalyzingCompetitors,
    lesson8AssessingDemand,
    lesson9IdeaValidation,
    lesson10CreatingMvp,
    lesson11GatheringFeedback,
    module1Quiz
  ]
};

export default module1; 