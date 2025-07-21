import { Module } from '@/types/course';

export const module6FixturesAndAppliances: Module = {
  id: 6,
  title: 'Fixtures and Appliances Installation',
  description: 'Learn to install common plumbing fixtures, connect appliances, and prevent leaks',
  lessons: [
    {
      id: 41,
      title: 'Sink Installation',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: 'nahIYGUO_6g',
        textContent: `# 🚰 Sink Installation

## Installation Process
- Measuring and template placement
- Cutout preparation
- Mounting methods for different sink types
- Sealing and finishing
- Connection to plumbing systems`
      }
    },
    {
      id: 42,
      title: 'Faucet Installation',
      duration: '20 minutes',
      type: 'video',
      content: {
        videoUrl: '9HQDG8S8Clc',
        textContent: `# 🚿 Faucet Installation

## Faucet Connection Process
- Supply line connections
- Hot and cold water hookup
- Proper sealing techniques
- Handle and spout assembly
- Operational testing`
      }
    },
    {
      id: 43,
      title: 'Testing for Leaks',
      duration: '15 minutes',
      type: 'video',
      content: {
        videoUrl: 'Yib1pfnF6Os',
        textContent: `# 🔍 Testing for Leaks

## Leak Detection Methods
- Visual inspection techniques
- Pressure testing procedures
- Common leak locations
- Repair methods for minor leaks
- Documentation and reporting`
      }
    },
    {
      id: 44,
      title: 'Toilet Installation',
      duration: '30 minutes',
      type: 'video',
      content: {
        videoUrl: '9tvEMbwRWB4',
        textContent: `# 🚽 Toilet Installation

## Complete Toilet Installation
- Flange preparation and wax ring placement
- Bowl positioning and securing
- Tank installation and connections
- Water supply hookup
- Testing and adjustment procedures`
      }
    },
    {
      id: 45,
      title: 'Showers and Bathtubs',
      duration: '35 minutes',
      type: 'video',
      content: {
        videoUrl: 'Cu-_IjiHlC8',
        textContent: `# 🛁 Showers and Bathtubs

## Shower and Tub Installation
- Rough-in requirements
- Valve and fixture placement
- Waterproofing considerations
- Tile and finishing work coordination
- Testing and commissioning`
      }
    },
    {
      id: 46,
      title: 'Water Heater Installation',
      duration: '40 minutes',
      type: 'video',
      content: {
        videoUrl: 'pqKR1D9gkyg',
        textContent: `# 🔥 Water Heater Installation

## Water Heater Setup
- Location requirements and clearances
- Gas and electrical connections
- Water line connections
- Venting requirements
- Safety valve installation and testing`
      }
    },
    {
      id: 47,
      title: 'Boiler Installation',
      duration: '45 minutes',
      type: 'video',
      content: {
        videoUrl: 'gVM0Ib0KdFc',
        textContent: `# 🏠 Boiler Installation

## Boiler System Installation
- Sizing and placement considerations
- Piping connections for heating systems
- Control system installation
- Expansion tank requirements
- Commissioning and startup procedures`
      }
    },
    {
      id: 48,
      title: 'Dishwasher Installation',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: 'Y_-T72WXZag',
        textContent: `# 🍽️ Dishwasher Installation

## Dishwasher Connection
- Space preparation and access
- Water supply connections
- Drain line installation
- Electrical hookup requirements
- Testing and operational verification`
      }
    },
    {
      id: 49,
      title: 'Washing Machine Installation',
      duration: '20 minutes',
      type: 'video',
      content: {
        videoUrl: 'QKNn6AhRQ1Y',
        textContent: `# 👕 Washing Machine Installation

## Washing Machine Setup
- Location requirements and leveling
- Hot and cold water connections
- Drain connection methods
- Electrical requirements
- Testing and troubleshooting`
      }
    },
    {
      id: 50,
      title: 'Quiz: Fixtures and Appliances Installation',
      duration: '30 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the purpose of a wax ring when installing a toilet?',
            options: [
              'To secure the tank to the bowl',
              'To create a seal between the toilet base and the closet flange, preventing leaks',
              'To attach the seat to the bowl',
              'To reinforce the bolts in the flange'
            ],
            correct: 1,
            explanation: 'A wax ring creates a watertight seal between the toilet base and the closet flange, preventing sewage gases and water leaks.'
          },
          {
            question: 'When connecting a water heater, what is the first step before turning on the power or gas?',
            options: [
              'Secure the gas line with plumber\'s tape',
              'Fill the tank with water to prevent the heating element from burning out',
              'Set the thermostat to the maximum setting',
              'Apply solder to the electrical connections'
            ],
            correct: 1,
            explanation: 'The tank must be filled with water before turning on power or gas to prevent the heating elements from burning out or damage to the unit.'
          },
          {
            question: 'Which tool is most commonly used to tighten water supply connections for faucets and sinks?',
            options: [
              'Channel-lock pliers',
              'Screwdriver',
              'Hacksaw',
              'Pipe threader'
            ],
            correct: 0,
            explanation: 'Channel-lock pliers provide the proper grip and leverage needed to tighten water supply connections without damaging fittings.'
          },
          {
            question: 'What is the primary function of a T&P (temperature and pressure) relief valve on a water heater?',
            options: [
              'To regulate the water temperature',
              'To prevent pressure buildup that could cause the tank to burst',
              'To increase water flow to the heater',
              'To filter out impurities from the incoming water supply'
            ],
            correct: 1,
            explanation: 'The T&P relief valve is a safety device that releases pressure and prevents the tank from bursting due to excessive temperature or pressure.'
          },
          {
            question: 'How should the dishwasher drain hose be connected to prevent backflow into the appliance?',
            options: [
              'Attach the hose directly to the main sewer line',
              'Secure the hose to a high loop or air gap above the flood level of the sink',
              'Insert the hose into the garbage disposal drain with no additional fitting',
              'Use a crimp ring to seal the hose to the water supply line'
            ],
            correct: 1,
            explanation: 'A high loop or air gap prevents contaminated water from flowing back into the dishwasher, maintaining sanitary conditions.'
          }
        ]
      }
    }
  ]
};