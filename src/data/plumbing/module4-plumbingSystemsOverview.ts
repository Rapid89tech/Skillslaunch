import { Module } from '@/types/course';

export const module4PlumbingSystemsOverview: Module = {
  id: 4,
  title: 'Plumbing Systems Overview',
  description: 'Understanding residential, commercial, and industrial plumbing systems, water supply systems, drainage systems, and venting systems',
  lessons: [
    {
      id: 15,
      title: 'Residential Plumbing Systems',
      duration: '40 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/SsPtZqOAf4s',
        textContent: `# 🏠 Residential Plumbing Systems

## Characteristics
- **Smaller scale**: Serving single-family homes, duplexes, or apartment units
- **Common fixtures**: Kitchen sinks, bathtubs, showers, toilets, and outdoor faucets
- **Simple layouts**: Often using standard pipe sizes and readily available materials

## Key Components
- **Water service line**: From a municipal source or private well
- **Drain-waste-vent (DWV) system**: For removing wastewater and preventing sewer gases from entering the home
- **Hot water systems**: Powered by water heaters`
      }
    },
    {
      id: 16,
      title: 'Commercial Plumbing Systems',
      duration: '35 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/watch?v=Ee7zKBTKB10',
        textContent: `# 🏢 Commercial Plumbing Systems

## Characteristics
- **Larger and more complex**: Than residential systems
- **High usage design**: Multiple fixtures and larger piping
- **Strict code requirements**: Advanced features like backflow preventers, water-saving fixtures, and grease traps

## Examples of Commercial Properties
- Office buildings, schools, hospitals, restaurants, and shopping centers

## Challenges and Considerations
- **Peak demand periods**: Accommodating high usage times
- **Water quality and pressure**: Maintaining across multiple floors or extensive networks
- **Compliance**: Ensuring adherence to local health and safety regulations`
      }
    },
    {
      id: 17,
      title: 'Components of a Water Supply System',
      duration: '30 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/YguEjBQ8ss4',
        textContent: `# 🚰 Components of a Water Supply System

## Cold Water Supply
- **Direct source**: Comes directly from the municipal supply or a private well
- **Main components**: Main water line, service shut-off valve, pressure-reducing valve (if needed), and cold water distribution piping

## Hot Water Supply
- **Water heating**: Cold water feeds into a water heater (tank or tankless)
- **Distribution**: Hot water distribution lines carry heated water to fixtures such as sinks, showers, dishwashers, and washing machines

## Typical Materials Used
- **Piping materials**: Copper, PEX, CPVC, and galvanized steel`
      }
    },
    {
      id: 18,
      title: 'Basics of Drainage Systems',
      duration: '35 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/nO4uDFeLuFM',
        textContent: `# 🚽 Basics of Drainage Systems

## Purpose
- **Wastewater removal**: Remove wastewater from sinks, showers, toilets, and appliances
- **System connection**: Direct it to a municipal sewer or septic system

## Key Components
- **Drain pipes**: Carry water and waste away from fixtures
- **Waste stacks**: Vertical pipes that transport wastewater to the building's main drain
- **Main sewer line**: Connects the building's drainage system to the municipal sewer or septic tank

## Types of Wastewater
- **Gray water**: From sinks, showers, and laundry
- **Black water**: From toilets and kitchen sinks`
      }
    },
    {
      id: 19,
      title: 'Sewer and Wastewater Management',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/H5nn3atpLdY',
        textContent: `# 🌊 Sewer and Wastewater Management

## Wastewater Disposal Methods
- **Municipal sewer systems**: Wastewater is treated at a centralized facility
- **Septic systems**: On-site treatment through a septic tank and drain field

## Common Materials for Drainage Pipes
- **Pipe materials**: PVC, ABS, cast iron, and clay

## Code and Regulatory Requirements
- **Proper slope**: For gravity flow (typically 1/4 inch per foot)
- **Approved materials**: And fittings
- **Cleanouts**: For easy access in case of blockages`
      }
    },
    {
      id: 20,
      title: 'Hot and Cold Water Distribution',
      duration: '30 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/AQC_shrv8KA',
        textContent: `# 🌡️ Hot and Cold Water Distribution

## Cold Water Distribution
- **Universal supply**: Supplies water to all fixtures, appliances, and outdoor taps
- **Consistent service**: Ensures consistent pressure and flow to meet household or building demands

## Hot Water Distribution
- **Temperature maintenance**: Maintains proper temperature and pressure for comfortable usage
- **Recirculation systems**: Includes recirculation lines in larger systems to provide instant hot water and reduce wastage

## Balancing Pressure and Flow
- **Proper sizing**: Proper pipe sizing ensures steady pressure, even when multiple fixtures are in use
- **Contamination prevention**: Backflow prevention devices prevent contamination of the cold water supply`
      }
    },
    {
      id: 21,
      title: 'Purpose of Venting Systems',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/G4SnlSnHH14',
        textContent: `# 💨 Purpose of Venting Systems

## Preventing Traps from Losing Water
- **Trap function**: Each fixture has a trap (U-shaped bend) to prevent sewer gases from entering the building
- **Pressure maintenance**: Venting maintains atmospheric pressure, ensuring that water stays in the trap

## Supporting Drainage Flow
- **Air entry**: Vents allow air to enter the plumbing system, preventing negative pressure that could disrupt water flow

## Releasing Sewer Gases
- **Safe direction**: Vents safely direct sewer gases outside the building`
      }
    },
    {
      id: 22,
      title: 'Types of Venting Systems',
      duration: '20 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/zea-xb7Iz-M',
        textContent: `# 🏗️ Types of Venting Systems

## Individual Vents
- **Dedicated venting**: Each fixture has its own vent that connects to the main vent stack

## Common Vents
- **Shared venting**: One vent shared by multiple fixtures

## Main Vent Stack
- **Primary vent**: Vertical pipe that extends through the roof, releasing gases to the outside

## Design Considerations and Regulations
- **Minimum diameter**: Vent pipe diameter requirements
- **Distance limitations**: From the trap to the vent
- **Roof requirements**: Height and location for vent terminations`
      }
    },
    {
      id: 23,
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
          }
        ]
      }
    }
  ]
};