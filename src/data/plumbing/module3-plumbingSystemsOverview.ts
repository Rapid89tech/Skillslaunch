
import { Module } from '@/types/course';

export const module3PlumbingSystemsOverview: Module = {
  id: 3,
  title: 'Plumbing Systems Overview',
  description: 'Understanding residential, commercial, and industrial plumbing systems, water supply systems, drainage systems, and venting systems',
  lessons: [
    {
      id: 10,
      title: 'Residential, Commercial, and Industrial Plumbing Systems',
      duration: '1 hour',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/plumbing-systems-overview',
        textContent: `# 🏠 Section 1: Residential, Commercial, and Industrial Plumbing Systems (1 hour)

## Learning Objectives
- Differentiate between residential, commercial, and industrial plumbing systems
- Understand the components and operation of water supply systems for hot and cold water distribution
- Learn the basics of drainage systems and the management of sewer and wastewater
- Explore the role and importance of venting systems in plumbing

## A. Residential Plumbing Systems

### Characteristics:
- **Smaller scale**: Serving single-family homes, duplexes, or apartment units
- **Common fixtures**: Kitchen sinks, bathtubs, showers, toilets, and outdoor faucets
- **Simple layouts**: Often using standard pipe sizes and readily available materials

### Key Components:
- **Water service line**: From a municipal source or private well
- **Drain-waste-vent (DWV) system**: For removing wastewater and preventing sewer gases from entering the home
- **Hot water systems**: Powered by water heaters

**Reference**: How your House Plumbing Works

## B. Commercial Plumbing Systems

### Characteristics:
- **Larger and more complex**: Than residential systems
- **High usage design**: Multiple fixtures and larger piping
- **Strict code requirements**: Advanced features like backflow preventers, water-saving fixtures, and grease traps

### Examples of Commercial Properties:
- Office buildings, schools, hospitals, restaurants, and shopping centers

### Challenges and Considerations:
- **Peak demand periods**: Accommodating high usage times
- **Water quality and pressure**: Maintaining across multiple floors or extensive networks
- **Compliance**: Ensuring adherence to local health and safety regulations

**Reference**: Basic Commercial Plumbing | How To Plumbing

## C. Industrial Plumbing Systems

### Characteristics:
- **Large-scale operations**: Factories, manufacturing facilities, power plants
- **Specialized materials**: Piping systems to handle corrosive or high-temperature fluids
- **Advanced systems**: Process piping, fire suppression systems, and industrial-grade drainage solutions

### Key Features:
- **Large-scale water distribution**: Sometimes fed from private water sources
- **Advanced treatment systems**: For wastewater and industrial effluents
- **Heavy-duty components**: High-pressure valves, large-diameter pipes, and chemical-resistant materials

### Challenges and Considerations:
- **Environmental regulations**: Meeting stringent requirements
- **System reliability**: In high-demand or hazardous conditions
- **Efficiency solutions**: Energy-efficient solutions and water reclamation systems

**Reference**: What is Process Piping? Very Important Basics for Fresh Piping Engineer`
      }
    },
    {
      id: 11,
      title: 'Water Supply Systems: Hot and Cold Water Distribution',
      duration: '45 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/water-supply-systems',
        textContent: `# 🚰 Section 2: Water Supply Systems: Hot and Cold Water Distribution (45 minutes)

## A. Components of a Water Supply System

### Cold Water Supply:
- **Direct source**: Comes directly from the municipal supply or a private well
- **Main components**: Main water line, service shut-off valve, pressure-reducing valve (if needed), and cold water distribution piping

### Hot Water Supply:
- **Water heating**: Cold water feeds into a water heater (tank or tankless)
- **Distribution**: Hot water distribution lines carry heated water to fixtures such as sinks, showers, dishwashers, and washing machines

### Typical Materials Used:
- **Piping materials**: Copper, PEX, CPVC, and galvanized steel

**Reference**: Rwanda Polytechnic - Plumbing Level 3 - Installing a Cold and Hot Water System - 1 of 3

## B. Hot and Cold Water Distribution

### Cold Water Distribution:
- **Universal supply**: Supplies water to all fixtures, appliances, and outdoor taps
- **Consistent service**: Ensures consistent pressure and flow to meet household or building demands

### Hot Water Distribution:
- **Temperature maintenance**: Maintains proper temperature and pressure for comfortable usage
- **Recirculation systems**: Includes recirculation lines in larger systems to provide instant hot water and reduce wastage

### Balancing Pressure and Flow:
- **Proper sizing**: Proper pipe sizing ensures steady pressure, even when multiple fixtures are in use
- **Contamination prevention**: Backflow prevention devices prevent contamination of the cold water supply

**Reference**: How to Get Hot Water with a Recirculating Pump | Ask This Old House`
      }
    },
    {
      id: 12,
      title: 'Drainage Systems: Sewer and Wastewater Management',
      duration: '45 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/drainage-systems-management',
        textContent: `# 🚽 Section 3: Drainage Systems: Sewer and Wastewater Management (45 minutes)

## A. Basics of Drainage Systems

### Purpose:
- **Wastewater removal**: Remove wastewater from sinks, showers, toilets, and appliances
- **System connection**: Direct it to a municipal sewer or septic system

### Key Components:
- **Drain pipes**: Carry water and waste away from fixtures
- **Waste stacks**: Vertical pipes that transport wastewater to the building's main drain
- **Main sewer line**: Connects the building's drainage system to the municipal sewer or septic tank

**Reference**: Introduction to Drainage System (sanitary and storm drainage system)

## B. Sewer and Wastewater Management

### Types of Wastewater:
- **Gray water**: From sinks, showers, and laundry
- **Black water**: From toilets and kitchen sinks

### Wastewater Disposal Methods:
- **Municipal sewer systems**: Wastewater is treated at a centralized facility
- **Septic systems**: On-site treatment through a septic tank and drain field

### Common Materials for Drainage Pipes:
- **Pipe materials**: PVC, ABS, cast iron, and clay

### Code and Regulatory Requirements:
- **Proper slope**: For gravity flow (typically 1/4 inch per foot)
- **Approved materials**: And fittings
- **Cleanouts**: For easy access in case of blockages

**Reference**: What is a Stormwater Drainage System? | Stormwater Drainage Design`
      }
    },
    {
      id: 13,
      title: 'Venting Systems and Their Importance in Plumbing',
      duration: '30 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/venting-systems-importance',
        textContent: `# 💨 Section 4: Venting Systems and Their Importance in Plumbing (30 minutes)

## A. Purpose of Venting Systems

### Preventing Traps from Losing Water:
- **Trap function**: Each fixture has a trap (U-shaped bend) to prevent sewer gases from entering the building
- **Pressure maintenance**: Venting maintains atmospheric pressure, ensuring that water stays in the trap

### Supporting Drainage Flow:
- **Air entry**: Vents allow air to enter the plumbing system, preventing negative pressure that could disrupt water flow

### Releasing Sewer Gases:
- **Safe direction**: Vents safely direct sewer gases outside the building

**Reference**: What are plumbing vents for...and why you NEED them

## B. Types of Venting Systems

### Individual Vents:
- **Dedicated venting**: Each fixture has its own vent that connects to the main vent stack

### Common Vents:
- **Shared venting**: One vent shared by multiple fixtures

### Main Vent Stack:
- **Primary vent**: Vertical pipe that extends through the roof, releasing gases to the outside

**Reference**: IFGC Chapter 5 Introduction - Vent Categories and Types

## C. Design Considerations and Regulations

### Code Requirements:
- **Minimum diameter**: Vent pipe diameter requirements
- **Distance limitations**: From the trap to the vent
- **Roof requirements**: Height and location for vent terminations

### Maintaining Clear Vents:
- **Regular inspection**: Inspect vents regularly for blockages (e.g., debris, bird nests)
- **Protection**: Keep roof vent openings protected but not sealed

## Conclusion and Q&A (30 minutes)

### A. Recap Key Points:
- Residential plumbing is simpler and smaller scale, while commercial and industrial systems are larger and more complex
- Water supply systems ensure consistent hot and cold water distribution to fixtures
- Drainage systems handle the safe and effective removal of wastewater to sewers or septic systems
- Venting systems are essential for maintaining drainage flow, preventing sewer gases, and ensuring trap integrity

### B. Interactive Q&A Session:
- Invite participants to ask questions about specific systems or components
- Discuss real-world examples of different plumbing systems
- Provide additional resources for further reading and practical application

### C. Practice Assignments:
- Have participants identify and label the water supply and drainage components in their own home or workplace
- Assign a research task: find a recent plumbing code change in their region and explain its impact on system design
- Ask participants to describe how venting helps maintain water flow and prevents sewer gas odors

By understanding the overview of plumbing systems, participants will gain foundational knowledge to further explore specialized topics and hands-on skills.`
      }
    },
    {
      id: 14,
      title: 'Quiz: Plumbing Systems Overview',
      duration: '30 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is one key characteristic of a residential plumbing system?',
            options: [
              'It typically uses industrial-grade pipes',
              'It includes multiple layers of chemical filtration',
              'It serves single-family homes or apartments with a simpler layout',
              'It is designed to handle very large-scale wastewater treatment'
            ],
            correct: 2,
            explanation: 'Residential plumbing systems are characterized by their simpler layouts and smaller scale, serving single-family homes or apartments with standard fixtures and readily available materials.'
          },
          {
            question: 'What is the main purpose of a water heater in a plumbing system?',
            options: [
              'To increase water pressure',
              'To provide hot water to fixtures and appliances',
              'To filter out impurities from the water supply',
              'To maintain the slope of the drain lines'
            ],
            correct: 1,
            explanation: 'The water heater\'s main purpose is to heat cold water and provide hot water to fixtures and appliances throughout the building.'
          },
          {
            question: 'Which type of pipe is commonly used for residential water supply lines due to its flexibility and resistance to freezing?',
            options: [
              'PVC',
              'Cast iron',
              'Copper',
              'PEX'
            ],
            correct: 3,
            explanation: 'PEX (cross-linked polyethylene) is commonly used for residential water supply lines because of its flexibility and resistance to freezing.'
          },
          {
            question: 'What is the primary function of a drain-waste-vent (DWV) system?',
            options: [
              'To supply potable water to fixtures',
              'To regulate water pressure within the pipes',
              'To remove wastewater and prevent sewer gases from entering the building',
              'To heat water before it reaches the fixtures'
            ],
            correct: 2,
            explanation: 'The DWV system\'s primary function is to remove wastewater from fixtures and prevent sewer gases from entering the building through proper venting.'
          },
          {
            question: 'Why is venting important in a plumbing system?',
            options: [
              'It increases the velocity of water flow through the pipes',
              'It prevents sediment from accumulating in the traps',
              'It ensures proper drainage flow and prevents sewer gases from escaping into the building',
              'It keeps the water supply cold during high-temperature weather'
            ],
            correct: 2,
            explanation: 'Venting is crucial for ensuring proper drainage flow by maintaining atmospheric pressure and preventing sewer gases from entering the building.'
          },
          {
            question: 'What is the difference between commercial and residential plumbing systems?',
            options: [
              'Residential plumbing systems are more complex than commercial systems',
              'Commercial plumbing systems are designed for higher usage, larger piping, and stricter code requirements',
              'Commercial plumbing systems only use PVC pipes',
              'Residential plumbing systems require advanced treatment systems for wastewater'
            ],
            correct: 1,
            explanation: 'Commercial plumbing systems are larger and more complex, designed to handle higher usage with larger piping and must meet stricter code requirements.'
          },
          {
            question: 'Which component of a drainage system helps maintain proper flow by preventing blockages caused by negative pressure?',
            options: [
              'Main sewer line',
              'Vent stack',
              'Water heater',
              'Pressure regulator'
            ],
            correct: 1,
            explanation: 'The vent stack allows air to enter the plumbing system, preventing negative pressure that could disrupt drainage flow.'
          },
          {
            question: 'How does a recirculation line improve a hot water supply system?',
            options: [
              'It reduces the need for venting',
              'It eliminates the use of traps',
              'It provides instant hot water and reduces wastage',
              'It increases the slope of the drainage pipes'
            ],
            correct: 2,
            explanation: 'Recirculation lines provide instant hot water at fixtures and reduce water wastage by continuously circulating hot water through the system.'
          },
          {
            question: 'In a typical residential setting, what is the most common material used for sewer and waste pipes?',
            options: [
              'PEX',
              'PVC',
              'Copper',
              'Galvanized steel'
            ],
            correct: 1,
            explanation: 'PVC (polyvinyl chloride) is the most common material used for residential sewer and waste pipes due to its durability and cost-effectiveness.'
          },
          {
            question: 'What does a venting system release safely to the outside of a building?',
            options: [
              'Potable water',
              'Excess heat',
              'Sewer gases',
              'Filtered sediment'
            ],
            correct: 2,
            explanation: 'Venting systems safely release sewer gases to the outside of the building, preventing them from entering the indoor environment.'
          }
        ]
      }
    }
  ]
};
