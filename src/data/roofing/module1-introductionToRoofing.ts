
import { Module } from '@/types/course';

export const module1IntroductionToRoofing: Module = {
  id: 1,
  title: 'Introduction to Roofing',
  description: 'Learn the fundamentals of roofing including definitions, components, types of roofing systems, and career opportunities in the roofing industry.',
  lessons: [
    {
      id: 1,
      title: 'Definition and Importance of Roofing',
      duration: '45 minutes',
      type: 'video',
      content: {
        videoUrl: 'installing-your-own-roof-basics',
        textContent: `
# Definition and Importance of Roofing

## 1. Definition of Roofing

Roofing refers to the process and materials used to construct or cover the top part of a building or structure, known as the roof. The roof serves as the primary protective covering of a structure, shielding it from environmental elements.

**Key Definitions:**
- **Roof:** The external upper covering of a building
- **Roofing System:** Includes all components involved in the structure and weatherproofing of the roof, such as trusses, beams, decking, underlayment, and the outer covering (e.g., tiles, shingles, metal sheets)

## 2. Components of a Roofing System

### Essential Components:
- **Structural framework:** Trusses or rafters that support the roof
- **Decking or sheathing:** Flat panels (plywood, OSB) attached to the framework
- **Underlayment:** A water-resistant layer beneath the final roofing material
- **Roof covering:** The outermost material (e.g., asphalt shingles, tiles, corrugated sheets)
- **Flashing and drainage systems:** Direct water away from seams, joints, and valleys

## 3. Importance of Roofing

### A. Protection from Weather
- Shields the interior from rain, snow, sunlight, wind, and extreme temperatures
- Prevents water leakage that can damage walls, ceilings, and belongings

### B. Structural Integrity
- Provides stability and rigidity to the overall building
- Helps distribute loads (e.g., snow or wind pressure) evenly

### C. Energy Efficiency
- Good roofing contributes to thermal insulation, reducing heating and cooling costs
- Reflective or insulated roofing can lower energy consumption in buildings

### D. Safety and Security
- Prevents the entry of unauthorized persons, animals, and debris
- Reduces the risk of accidents due to falling materials or structural failures

### E. Aesthetic Value
- Enhances the appearance and style of a building
- Various materials and colors are used to match architectural designs

### F. Property Value
- A well-maintained and durable roof increases resale value
- New or upgraded roofing is often a key selling point in real estate

### G. Environmental Protection
- Sustainable roofing (green roofs, solar panels, recycled materials) reduces the environmental footprint
- Helps manage rainwater through proper drainage and harvesting systems

## 4. Summary

- Roofing is essential for protecting, insulating, and enhancing a building
- It involves various components and materials that work together for functionality and durability
- Choosing the right roofing system is critical for safety, longevity, and performance of a structure

## 5. Discussion Questions

1. What are the key factors to consider when selecting roofing materials?
2. How does roofing impact a building's energy efficiency?
3. What are some common roofing materials used in your region, and why?
        `
      }
    },
    {
      id: 2,
      title: 'Types of Roofing Systems',
      duration: '50 minutes',
      type: 'video',
      content: {
        videoUrl: 'roof-types-construction-carpentry',
        textContent: `
# Types of Roofing Systems

## 1. Introduction

Roofing systems vary based on design, materials, structure, and intended function. The choice of roofing system depends on factors like climate, building use, budget, and aesthetic preferences.

## 2. Classification of Roofing Systems

Roofing systems are commonly classified into:
- Based on Roof Shape
- Based on Roofing Materials
- Based on Construction Method

## 3. Types Based on Roof Shape

### A. Pitched (Sloped) Roofing System
- **Description:** Roofs with a noticeable slope or angle
- **Typical Uses:** Residential buildings, cabins, churches
- **Advantages:**
  - Effective water drainage
  - Aesthetic appeal
  - Suitable for snow-prone areas
- **Examples:** Gable Roof, Hip Roof, Gambrel Roof, Mansard Roof

### B. Flat Roofing System
- **Description:** Roofs with a very low slope (usually less than 10°)
- **Typical Uses:** Commercial buildings, modern homes, warehouses
- **Advantages:**
  - Easier to construct and maintain
  - Usable space (for HVAC units, terraces, solar panels)
  - Cost-effective

### C. Curved or Arched Roofing
- **Description:** Roofs with an arched or curved shape
- **Typical Uses:** Sports arenas, warehouses, architectural structures
- **Advantages:**
  - Modern aesthetic
  - Good wind resistance
  - Unique interior space

## 4. Types Based on Roofing Materials

### A. Metal Roofing
- **Materials:** Steel, aluminum, copper, zinc
- **Features:**
  - Lightweight
  - Fire-resistant
  - Durable (up to 50 years)
  - Recyclable

### B. Asphalt Shingle Roofing
- Common in North America
- **Features:**
  - Economical
  - Easy to install
  - Variety of colors and textures
  - Moderate lifespan (15–30 years)

### C. Tile Roofing
- **Materials:** Clay or concrete tiles
- **Features:**
  - Very durable (50+ years)
  - Heavyweight (requires strong support)
  - Good insulation
  - Attractive Mediterranean style

### D. Slate Roofing
- **Features:**
  - Natural stone
  - Extremely durable and long-lasting (75–100 years)
  - Fire-resistant
  - Expensive and heavy

### E. Wood Shingles/Shakes
- **Materials:** Cedar, redwood, pine
- **Features:**
  - Traditional appearance
  - Good insulation
  - Requires maintenance and treatment for fire resistance

### F. Thatch Roofing
- **Materials:** Straw, palm leaves, reeds
- **Features:**
  - Traditional/vernacular architecture
  - Eco-friendly
  - Good insulation but flammable

### G. Membrane Roofing (for Flat Roofs)
- **Materials:** EPDM, TPO, PVC
- **Features:**
  - Waterproof
  - Flexible and lightweight
  - Ideal for commercial buildings

## 5. Types Based on Construction Method

### A. Truss Roofing System
- Prefabricated triangular units
- Efficient load distribution
- Common in residential construction

### B. Rafters Roofing System
- Built on-site
- Suitable for custom shapes and designs
- Requires skilled labor

## 6. Emerging and Specialized Roofing Systems

### A. Green Roofs
- Vegetation planted over a waterproof membrane
- Environmentally friendly
- Provides insulation and rainwater absorption

### B. Solar Roofing
- Roofs integrated with solar photovoltaic (PV) panels
- Dual purpose: protection and energy generation

### C. Cool Roofing
- Reflects more sunlight and absorbs less heat
- Reduces cooling costs in hot climates

## 7. Summary

| Roofing Type | Best For | Key Advantages |
|--------------|----------|----------------|
| Pitched Roof | Homes, snow-prone areas | Water drainage, appearance |
| Flat Roof | Commercial buildings | Usable space, economical |
| Metal Roof | Industrial and residential | Durable, low maintenance |
| Tile/Slate Roof | High-end homes | Longevity, fire-resistant |
| Membrane Roof | Flat roofs | Waterproof, energy-efficient |
| Green/Solar Roof | Sustainable buildings | Energy and environmental benefits |

## 8. Discussion Questions

1. What factors influence the selection of a roofing system for a building?
2. Compare the benefits and limitations of pitched vs. flat roofs.
3. How do modern roofing systems contribute to sustainability?
        `
      }
    },
    {
      id: 3,
      title: 'Roles and Responsibilities of a Roofer',
      duration: '40 minutes',
      type: 'video',
      content: {
        videoUrl: 'essential-roofing-tools-diy',
        textContent: `
# Roles and Responsibilities of a Roofer

## 1. Introduction

A roofer is a skilled tradesperson who specializes in the construction, installation, maintenance, and repair of roofs on residential, commercial, and industrial buildings.

Roofers work with various materials such as shingles, tiles, metal sheets, bitumen, and waterproof membranes to ensure that buildings are properly covered and protected from environmental elements.

## 2. Key Roles of a Roofer

### A. Installation of New Roofs
- Interpret blueprints and specifications for roofing design
- Prepare the roof deck by installing underlayment or insulation
- Install roofing materials (e.g., shingles, metal panels, tiles) according to manufacturer guidelines and safety codes

### B. Roof Maintenance
- Conduct routine inspections to identify wear and tear, leaks, and other potential issues
- Apply protective coatings or sealants to extend roof life
- Clean gutters, downspouts, and drainage systems to prevent clogging

### C. Roof Repair
- Identify the cause of roof damage (e.g., water leaks, wind damage, cracked tiles)
- Replace or patch damaged roofing materials
- Seal joints and flashing to restore waterproofing integrity

### D. Roof Replacement
- Safely remove old roofing materials
- Inspect and repair structural components before new installation
- Dispose of old materials in accordance with environmental regulations

## 3. Specific Responsibilities of a Roofer

| Responsibility | Description |
|----------------|-------------|
| Measuring and Cutting | Measure roof areas accurately and cut materials to fit using hand and power tools |
| Safety Compliance | Follow all safety procedures and use personal protective equipment (PPE) |
| Team Collaboration | Work with other trades (carpenters, electricians) and roofing crew members |
| Material Handling | Load and unload materials safely, sometimes using hoists or cranes |
| Weatherproofing | Apply waterproof membranes, flashing, and sealants to prevent leaks |
| Recordkeeping | Document work done, materials used, and report job progress to supervisors |
| Customer Interaction | Communicate with clients to explain work, timelines, and maintenance tips |

## 4. Skills and Competencies Required

- **Physical Strength & Stamina:** Ability to lift heavy materials and work for long hours
- **Balance and Coordination:** Working at heights requires excellent balance
- **Technical Skills:** Proficient in using tools, applying roofing systems, and reading blueprints
- **Problem-solving Skills:** Quickly assess and fix issues such as leaks or structural problems
- **Attention to Detail:** Precision is key in cutting, fitting, and sealing materials
- **Knowledge of Building Codes:** Understand local regulations and safety standards

## 5. Tools Commonly Used by Roofers

- Roofing hammer or hatchet
- Utility knife
- Roofing nail gun
- Tape measure
- Chalk line
- Ladder and scaffolding
- Sealant and caulking gun
- Roofing shovel (for removal tasks)

## 6. Safety Responsibilities

- Use of fall protection equipment (harnesses, guardrails)
- Inspect ladders, scaffolds, and tools before use
- Maintain a clean, hazard-free work area
- Monitor weather conditions to avoid unsafe work during storms or high winds

## 7. Summary

A roofer plays a critical role in ensuring the structural integrity, safety, and durability of a building's roofing system. Their responsibilities range from installation and repair to safety compliance and customer service. Skilled roofers contribute significantly to the quality and longevity of construction projects.

## 8. Discussion Questions

1. What are the most important safety practices for roofers?
2. How does the role of a roofer change between residential and commercial projects?
3. What skills are essential for becoming a professional roofer?
        `
      }
    },
    {
      id: 4,
      title: 'Career Opportunities in Roofing',
      duration: '35 minutes',
      type: 'video',
      content: {
        videoUrl: 'trusses-vs-rafters-pros-cons',
        textContent: `
# Career Opportunities in Roofing

## 1. Introduction

The roofing industry offers a wide range of career opportunities for individuals interested in construction, building maintenance, and skilled trades. Careers in roofing can range from entry-level positions to specialized trades, supervisory roles, and even entrepreneurial ventures.

## 2. Importance of Roofing Careers

- Roofing is an essential part of the construction and maintenance industry
- Offers job stability due to constant demand for repairs, installations, and replacements
- Opportunities for skill advancement, certification, and business ownership
- Growing interest in green building, energy-efficient roofs, and solar installations has expanded the field

## 3. Entry-Level Opportunities

### A. Roofing Laborer / Helper
- Assists skilled roofers on job sites
- Carries tools and materials, cleans work areas
- Learns basic roofing techniques on the job
- No formal education required; training is often provided

### B. Apprentice Roofer
- Participates in a formal training program (2–4 years)
- Gains hands-on experience and classroom instruction
- Prepares for full certification and licensure as a roofer

## 4. Skilled Trade Positions

### A. Journeyman Roofer
- Fully trained and certified roofer
- Installs and repairs various roofing systems
- Reads blueprints and follows safety and building codes

### B. Roofing Technician / Installer
- Specializes in specific materials (e.g., metal, shingles, flat roof membranes)
- May work on new construction or renovations
- Requires precision and attention to detail

### C. Roof Inspector
- Assesses the condition of roofs for damage, leaks, and wear
- Provides reports for insurance, real estate, or maintenance planning
- Requires technical knowledge and certification in some regions

## 5. Specialized Careers

### A. Sheet Metal Roofer
- Installs metal roofs and flashing
- Works on architectural metal roofing systems

### B. Solar Panel Installer (Rooftop)
- Installs photovoltaic (PV) panels on residential and commercial roofs
- Combines roofing skills with electrical knowledge

### C. Green Roof Specialist
- Works on eco-friendly roof systems that support vegetation
- Requires understanding of waterproofing, drainage, and horticulture

### D. Waterproofing Specialist
- Installs membranes and sealants to prevent leaks
- Often works on flat or commercial roofing systems

## 6. Supervisory and Management Roles

### A. Roofing Foreman / Site Supervisor
- Oversees daily roofing operations and teams
- Ensures safety compliance and project quality

### B. Project Manager
- Plans and manages roofing projects from start to finish
- Coordinates workers, materials, timelines, and budgets

### C. Estimator / Cost Analyst
- Prepares bids and estimates for roofing jobs
- Analyzes labor, materials, and equipment costs

## 7. Business and Entrepreneurial Opportunities

### A. Roofing Contractor / Business Owner
- Starts and manages a roofing company
- Hires workers, markets services, and handles client contracts

### B. Roofing Consultant
- Offers expert advice on roofing materials, designs, and systems
- Works with architects, engineers, and property managers

## 8. Career Development and Certification

### Certifications (depending on region):
- National Roofing Contractors Association (NRCA)
- Construction Skills Certification Scheme (CSCS – UK)
- Red Seal Program (Canada)
- OSHA Safety Certification (US)

### Advancement Paths:
- From helper → apprentice → journeyman → foreman → business owner
- Specialization in inspection, green roofing, or solar installations

## 9. Summary

| Level | Job Title | Description |
|-------|-----------|-------------|
| Entry-Level | Roofing Helper, Apprentice | Assists, trains on-site |
| Skilled Trades | Roofer, Installer, Inspector | Performs core roofing tasks |
| Specialized Roles | Solar Installer, Metal Roofer | Works on advanced or green systems |
| Supervisory | Foreman, Project Manager | Manages crews and projects |
| Entrepreneurial | Contractor, Consultant | Operates roofing business or offers expert advice |

## 10. Discussion Questions

1. What skills and certifications are important for advancing in the roofing industry?
2. How can a roofer transition from tradesperson to business owner?
3. What specialized roofing careers are emerging due to new technologies?
        `
      }
    },
    {
      id: 5,
      title: 'Module 1 Quiz: Introduction to Roofing',
      duration: '20 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the primary function of a roof in a building?',
            options: [
              'To provide space for solar panels',
              'To enhance building aesthetics',
              'To support the walls of the building',
              'To protect the interior from weather elements'
            ],
            correct: 3,
            explanation: 'The primary function of a roof is to protect the interior from weather elements such as rain, snow, wind, and extreme temperatures.'
          },
          {
            question: 'Which of the following best defines a roofing system?',
            options: [
              'A structure made entirely of tiles',
              'A flat surface placed on top of walls',
              'All components involved in the structure and weatherproofing of a roof',
              'A decorative cover for homes'
            ],
            correct: 2,
            explanation: 'A roofing system includes all components involved in the structure and weatherproofing of a roof, including trusses, decking, underlayment, and roof covering.'
          },
          {
            question: 'What component of a roofing system lies directly on the structural framework and supports the roof covering?',
            options: [
              'Truss',
              'Decking or sheathing',
              'Flashing',
              'Underlayment'
            ],
            correct: 1,
            explanation: 'Decking or sheathing consists of flat panels (plywood, OSB) attached to the framework that directly supports the roof covering.'
          },
          {
            question: 'What is the role of underlayment in a roofing system?',
            options: [
              'Acts as a decorative layer',
              'Holds the tiles in place',
              'Provides insulation',
              'Offers a water-resistant barrier beneath the roof covering'
            ],
            correct: 3,
            explanation: 'Underlayment is a water-resistant layer placed beneath the final roofing material to provide additional protection against moisture.'
          },
          {
            question: 'Which component directs water away from seams, joints, and valleys in the roofing system?',
            options: [
              'Underlayment',
              'Decking',
              'Flashing and drainage systems',
              'Roof covering'
            ],
            correct: 2,
            explanation: 'Flashing and drainage systems are specifically designed to direct water away from seams, joints, and valleys to prevent water infiltration.'
          },
          {
            question: 'How does roofing contribute to energy efficiency?',
            options: [
              'It blocks solar energy',
              'It absorbs heat to keep buildings warm',
              'It provides shade for gardens',
              'It helps insulate the building and reduces heating/cooling costs'
            ],
            correct: 3,
            explanation: 'Good roofing contributes to thermal insulation, reducing heating and cooling costs, and reflective or insulated roofing can lower energy consumption.'
          },
          {
            question: 'Which of the following is NOT a function of a good roofing system?',
            options: [
              'Prevents animal intrusion',
              'Enhances structural stability',
              'Reduces indoor air pollution',
              'Increases property value'
            ],
            correct: 2,
            explanation: 'While roofing provides protection, structural stability, and increases property value, it does not directly reduce indoor air pollution.'
          },
          {
            question: 'What is one way roofing adds aesthetic value to a building?',
            options: [
              'By reducing energy use',
              'By offering various colors and styles to match architecture',
              'By allowing for rainwater harvesting',
              'By supporting HVAC systems'
            ],
            correct: 1,
            explanation: 'Roofing adds aesthetic value by offering various materials, colors, and styles that can be matched to architectural designs.'
          },
          {
            question: 'What type of roofing system would be most beneficial for sustainable building practices?',
            options: [
              'Thatched roofing',
              'Insulated metal roofing',
              'Green or solar roofing systems',
              'Asphalt shingles'
            ],
            correct: 2,
            explanation: 'Green or solar roofing systems are most beneficial for sustainable building practices as they reduce environmental footprint and can generate renewable energy.'
          },
          {
            question: 'Why is it important to choose the right roofing system for a structure?',
            options: [
              'To match the neighborhood',
              'For fashion purposes',
              'To ensure safety, durability, and performance',
              'To meet city decoration standards'
            ],
            correct: 2,
            explanation: 'Choosing the right roofing system is critical for safety, longevity, and performance of a structure, ensuring it can withstand environmental conditions and protect the building.'
          }
        ]
      }
    }
  ]
};
