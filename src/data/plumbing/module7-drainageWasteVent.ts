import { Module } from '@/types/course';

export const module7DrainageWasteVent: Module = {
  id: 7,
  title: 'Drainage, Waste, and Vent (DWV) Systems',
  description: 'Learn the principles of wastewater drainage, installing traps and vents, backflow prevention methods, and sewage system connection and maintenance',
  lessons: [
    {
      id: 51,
      title: 'Understanding Wastewater Flow',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: '8jxRn-T_LCs',
        textContent: `# 🌊 Understanding Wastewater Flow

## Flow Principles
- Gravity-driven drainage systems
- Proper slope requirements
- Flow velocity considerations
- Pipe sizing for adequate flow
- System design principles`
      }
    },
    {
      id: 52,
      title: 'The Role of Traps',
      duration: '20 minutes',
      type: 'video',
      content: {
        videoUrl: 'KBsb4s77zSc',
        textContent: `# 🪤 The Role of Traps

## Trap Functions
- Water seal maintenance
- Sewer gas prevention
- Types of traps (P-trap, S-trap, etc.)
- Installation requirements
- Maintenance considerations`
      }
    },
    {
      id: 53,
      title: 'Importance of Vents',
      duration: '22 minutes',
      type: 'video',
      content: {
        videoUrl: 'YWZOrZLnC9M',
        textContent: `# 💨 Importance of Vents

## Venting Principles
- Atmospheric pressure maintenance
- Prevention of trap siphoning
- Air circulation in drain systems
- Vent sizing and placement
- Code requirements for venting`
      }
    },
    {
      id: 54,
      title: 'Understanding Backflow Risks',
      duration: '18 minutes',
      type: 'video',
      content: {
        videoUrl: '5Dm5EPqqqLc',
        textContent: `# ⚠️ Understanding Backflow Risks

## Backflow Hazards
- Cross-connection identification
- Pressure reversal scenarios
- Contamination risks
- Health and safety implications
- Risk assessment methods`
      }
    },
    {
      id: 55,
      title: 'Common Backflow Prevention Devices',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: 'FpZd0ZmBI4A',
        textContent: `# 🛡️ Common Backflow Prevention Devices

## Prevention Equipment
- Check valves and their applications
- Vacuum breakers for outdoor faucets
- Air gaps in plumbing design
- Backflow preventer installation
- Testing and maintenance requirements`
      }
    },
    {
      id: 56,
      title: 'Best Practices for Backflow Prevention',
      duration: '20 minutes',
      type: 'video',
      content: {
        videoUrl: 'RmurigqPS9c',
        textContent: `# ✅ Best Practices for Backflow Prevention

## Prevention Strategies
- System design considerations
- Regular inspection schedules
- Maintenance protocols
- Compliance with local codes
- Documentation requirements`
      }
    },
    {
      id: 57,
      title: 'Connecting to Municipal Sewer System',
      duration: '30 minutes',
      type: 'video',
      content: {
        videoUrl: 'Ih1Pcjx6lwI',
        textContent: `# 🏘️ Connecting to Municipal Sewer System

## Sewer Connection Process
- Permit requirements and applications
- Excavation and installation procedures
- Connection methods and materials
- Inspection requirements
- Compliance with municipal standards`
      }
    },
    {
      id: 58,
      title: 'Septic Systems and Private Sewage Options',
      duration: '35 minutes',
      type: 'video',
      content: {
        videoUrl: 'oAsd7ScjGcs',
        textContent: `# 🏠 Septic Systems and Private Sewage Options

## Private Sewage Treatment
- Septic tank design and sizing
- Drain field requirements
- Soil testing and percolation rates
- Maintenance schedules
- Alternative treatment systems`
      }
    },
    {
      id: 59,
      title: 'Routine Maintenance for DWV Systems',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: 'sPKevJXTXHw',
        textContent: `# 🔧 Routine Maintenance for DWV Systems

## Maintenance Procedures
- Drain cleaning techniques
- Vent inspection and clearing
- Trap maintenance and replacement
- System performance monitoring
- Preventive maintenance schedules`
      }
    },
    {
      id: 60,
      title: 'Quiz: Drainage, Waste, and Vent Systems',
      duration: '30 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the primary role of a trap in a DWV system?',
            options: [
              'To increase water pressure',
              'To prevent sewer gases from entering the building',
              'To connect the vent stack to the drainpipe',
              'To improve water flow through pipes'
            ],
            correct: 1,
            explanation: 'The primary role of a trap is to prevent sewer gases from entering the building by maintaining a water seal in the U-shaped pipe section.'
          },
          {
            question: 'Why is proper venting important in a DWV system?',
            options: [
              'It eliminates the need for traps',
              'It helps maintain atmospheric pressure and proper water flow',
              'It increases the slope of the pipes',
              'It prevents water from entering the sewer line'
            ],
            correct: 1,
            explanation: 'Proper venting is crucial because it helps maintain atmospheric pressure and ensures proper water flow by preventing vacuum conditions that could siphon water from traps.'
          },
          {
            question: 'What is the typical slope recommended for drainpipes to ensure proper flow?',
            options: [
              '1 inch per foot',
              '1/4 inch per foot',
              '1/2 inch per foot',
              'No slope is needed'
            ],
            correct: 1,
            explanation: 'The typical recommended slope for drainpipes is 1/4 inch per foot to ensure proper gravity flow and prevent standing water or blockages.'
          },
          {
            question: 'What is backflow?',
            options: [
              'Water flowing at a higher pressure than normal',
              'The reversal of contaminated water into the clean water supply',
              'A drop in water pressure in the main sewer line',
              'An increase in wastewater flow through the vent pipe'
            ],
            correct: 1,
            explanation: 'Backflow is the reversal of contaminated water or wastewater into the clean water supply, which can pose serious health risks.'
          },
          {
            question: 'Which device is commonly used to prevent backflow?',
            options: [
              'Air gap',
              'Pressure reducer',
              'Ball valve',
              'Water hammer arrestor'
            ],
            correct: 0,
            explanation: 'An air gap is the simplest and most effective backflow prevention device, creating a physical separation between the water supply and potential contamination sources.'
          }
        ]
      }
    }
  ]
};