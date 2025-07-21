import { Module } from '@/types/course';

export const module9BlueprintsAndEstimation: Module = {
  id: 9,
  title: 'Reading Plumbing Blueprints and Estimation',
  description: 'Learn to understand plumbing drawings and symbols, measure materials, estimate costs, and plan plumbing projects effectively',
  lessons: [
    {
      id: 72,
      title: 'What are Plumbing Blueprints?',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: 'g8VyP4fFWbg',
        textContent: `# 📐 What are Plumbing Blueprints?

## Blueprint Fundamentals
- Purpose and importance in construction
- Types of plumbing drawings
- Standard scales and measurements
- Blueprint symbols and legends
- Reading and interpreting plans`
      }
    },
    {
      id: 73,
      title: 'Plumbing Symbols and Their Meanings',
      duration: '30 minutes',
      type: 'video',
      content: {
        videoUrl: 'ip1Vvz4Kbio',
        textContent: `# 🔣 Plumbing Symbols and Their Meanings

## Symbol Recognition
- Water supply symbols
- Drainage and vent symbols
- Fixture representations
- Valve and control symbols
- Material identification symbols`
      }
    },
    {
      id: 74,
      title: 'Reading Blueprint Layers and Notes',
      duration: '22 minutes',
      type: 'video',
      content: {
        videoUrl: 'gxHAT-6GQ9s',
        textContent: `# 📋 Reading Blueprint Layers and Notes

## Blueprint Components
- Layer organization and purpose
- Annotation and dimension reading
- Specification references
- Detail drawings and sections
- Revision tracking and updates`
      }
    },
    {
      id: 75,
      title: 'Calculating Material Quantities',
      duration: '35 minutes',
      type: 'video',
      content: {
        videoUrl: 'jti86FkyZ-E',
        textContent: `# 📊 Calculating Material Quantities

## Quantity Takeoff
- Pipe length calculations
- Fitting and valve counts
- Support and accessory requirements
- Waste factors and contingencies
- Accuracy verification methods`
      }
    },
    {
      id: 76,
      title: 'Adjusting for Project Scope',
      duration: '20 minutes',
      type: 'video',
      content: {
        videoUrl: 'SJfl8Y8Lea0',
        textContent: `# 📈 Adjusting for Project Scope

## Scope Considerations
- Residential vs commercial differences
- Complexity factors
- Site-specific conditions
- Code and permit requirements
- Timeline considerations`
      }
    },
    {
      id: 77,
      title: 'Interpreting Site Plans and Layouts',
      duration: '28 minutes',
      type: 'video',
      content: {
        videoUrl: 'y_07j2A1DmQ',
        textContent: `# 🗺️ Interpreting Site Plans and Layouts

## Site Plan Analysis
- Property boundaries and utilities
- Building placement and orientation
- Service connection locations
- Grading and drainage considerations
- Coordination with other systems`
      }
    },
    {
      id: 78,
      title: 'Scheduling and Sequencing',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: 'k595Yi9FSfg',
        textContent: `# 📅 Scheduling and Sequencing

## Project Planning
- Work phase identification
- Critical path analysis
- Resource allocation
- Trade coordination
- Milestone planning`
      }
    },
    {
      id: 79,
      title: 'Quality Control and Inspections',
      duration: '30 minutes',
      type: 'video',
      content: {
        videoUrl: '6zge3fLeMKk',
        textContent: `# ✅ Quality Control and Inspections

## Quality Assurance
- Inspection checkpoint planning
- Testing requirements
- Documentation protocols
- Code compliance verification
- Final commissioning procedures`
      }
    },
    {
      id: 80,
      title: 'Final Quiz: Blueprints and Estimation',
      duration: '45 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the primary purpose of plumbing blueprints?',
            options: [
              'To show electrical layouts',
              'To provide detailed diagrams of water supply, drainage, and venting systems',
              'To display architectural features only',
              'To indicate landscaping plans'
            ],
            correct: 1,
            explanation: 'Plumbing blueprints provide detailed diagrams showing the layout of water supply lines, drainage systems, venting, and fixtures to ensure proper installation and code compliance.'
          },
          {
            question: 'Which symbol typically represents a water closet (toilet) on plumbing blueprints?',
            options: [
              'A circle with WC inside',
              'A rectangular shape with diagonal lines',
              'A triangle pointing downward',
              'A square with an X through it'
            ],
            correct: 0,
            explanation: 'A water closet (toilet) is typically represented by a circle or oval with "WC" marked inside on plumbing blueprints.'
          },
          {
            question: 'What information is typically found in blueprint annotations and notes?',
            options: [
              'Pipe sizes, materials, and installation specifications',
              'Color schemes for fixtures',
              'Furniture placement options',
              'Window and door schedules'
            ],
            correct: 0,
            explanation: 'Blueprint annotations and notes provide crucial information about pipe sizes, materials, installation specifications, and code references necessary for proper installation.'
          },
          {
            question: 'When calculating material quantities, what should be added to account for potential waste and changes?',
            options: [
              'Nothing extra is needed',
              'A 5-10% contingency factor',
              'Exactly double the calculated amount',
              'An additional 50% of all materials'
            ],
            correct: 1,
            explanation: 'A 5-10% contingency factor is typically added to material calculations to account for waste, cuts, mistakes, and minor design changes during installation.'
          },
          {
            question: 'What is the typical recommended slope for horizontal drain pipes shown on blueprints?',
            options: [
              '1 inch per foot',
              '1/2 inch per foot',
              '1/4 inch per foot',
              'No slope required'
            ],
            correct: 2,
            explanation: 'A 1/4 inch per foot slope is the standard minimum slope for horizontal drain pipes to ensure proper gravity flow and prevent standing water.'
          }
        ]
      }
    }
  ]
};