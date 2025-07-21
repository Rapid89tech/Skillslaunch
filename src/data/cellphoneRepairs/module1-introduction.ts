import { Module } from '@/types/course';
import { VideoLesson, QuizLesson } from '@/types/course';

const lesson1IndustryOverview: VideoLesson = {
  id: 1,
  title: 'Overview of the Smartphone Repair Industry and Career Opportunities',
  duration: '45 minutes',
  type: 'video',
  content: {
    videoUrl: 'smartphone-repair-industry-overview',
    textContent: `
# Overview of the Smartphone Repair Industry and Career Opportunities

## Introduction

The smartphone repair industry is a rapidly growing sector fueled by the global dependence on mobile devices, high device replacement costs, and increasing environmental awareness. As smartphones become essential tools for communication, work, and daily life, the demand for fast and affordable repair services has surged. This industry includes both hardware and software repair services, ranging from common fixes like screen and battery replacements to advanced work such as motherboard repair and data recovery.

## Industry Growth and Demand

A typical repair technician uses a wide range of tools, from basic screwdrivers and heat guns to advanced microscopes and soldering stations. As phones become more complex, technicians must continuously learn new methods to stay competitive. Many professionals in this field begin with entry-level positions and can grow into specialized roles like micro-soldering experts or start their own repair businesses. Training is accessible through online platforms and vocational schools, and certifications like CompTIA A+ and Apple's ACiT can boost credibility and earning potential.

## Career Opportunities

Career opportunities in this field are diverse. Technicians can work in:

- **Local repair shops** - Traditional brick-and-mortar locations
- **Repair kiosks** - Mall and shopping center locations
- **Mobile services** - On-site repair for customers
- **Online repair businesses** - Mail-in repair services
- **Entrepreneurial ventures** - Starting your own repair business

Entrepreneurs can expand into related areas like:
- Selling accessories
- Refurbished phone sales
- Services to schools and businesses
- Corporate device management

The industry is appealing for its low startup costs, high scalability, and strong local demand.

## Industry Challenges

However, the industry faces challenges such as:
- Rapidly changing technology
- Counterfeit parts availability
- Limited access to official components
- Regulatory restrictions
- Device complexity increases

## Future Outlook

Despite these challenges, the future of smartphone repair looks promising. Right to Repair movements, the rise of foldable phones, and environmental concerns are expected to increase the value of repair services. Technicians who adapt and specialize in emerging technologies will remain in high demand.

## Conclusion

In summary, smartphone repair is a practical, profitable, and future-proof career path. With the right skills, tools, and mindset, individuals can turn it into a sustainable job or thriving business.
    `
  }
};

const lesson2SafetyPrecautions: VideoLesson = {
  id: 2,
  title: 'Basic Safety Precautions and Handling Sensitive Components',
  duration: '40 minutes',
  type: 'video',
  content: {
    videoUrl: 'xe1mhUmnZwE',
    textContent: `
# Basic Safety Precautions and Handling Sensitive Components

## Introduction

In the smartphone repair industry, safety is essential for protecting both the technician and the sensitive electronic components being serviced. Technicians work with tools, chemicals, and fragile parts that can cause injury or damage if handled improperly.

## Personal Safety

Basic personal safety involves:
- Ensuring the device is unplugged before starting any work
- Wearing protective eyewear and gloves
- Working in a well-ventilated environment
- Using caution with chemicals like isopropyl alcohol or soldering flux

## Electrostatic Discharge (ESD) Protection

A major risk in electronics repair is electrostatic discharge (ESD), which can destroy delicate components such as:
- Logic boards
- IC chips
- Connectors

### ESD Prevention Methods:
- Use anti-static wrist straps
- Use grounding mats
- Store components in anti-static bags
- Avoid synthetic clothing materials
- Handle components by their edges

## Handling Sensitive Components

Sensitive components require special care:

### Fragile Components:
- Flex cables
- Connectors
- Chips

### Best Practices:
- Use appropriate plastic tools
- Apply minimal pressure
- Double-check all connections before reassembly
- Never force connections

## Tool Safety

### Soldering Equipment:
- Use controlled temperatures
- Never leave tools unattended
- Ensure proper ventilation
- Keep fire extinguisher nearby

### Chemical Safety:
- Proper storage and labeling
- Appropriate disposal methods
- Use in well-ventilated areas
- Wear protective equipment

## Workstation Setup

A safe and effective workstation should include:
- Clean, well-lit workspace
- ESD protection equipment
- Organized tool storage
- Fire extinguisher
- Proper ventilation

## Data Protection

Customer data must be treated with respect and confidentiality:
- Avoid accessing data unless necessary
- Always obtain customer consent for data-related procedures
- Maintain strict confidentiality

## Device Testing

Powering on the device should only be done after:
- Ensuring all components are properly connected
- Device is fully reassembled
- All safety checks are complete

## Conclusion

Maintaining safety in smartphone repair is not only about preventing accidents, but also about ensuring the integrity of the device and protecting the customer's data. Good safety practices build trust, reduce costly mistakes, and lay the foundation for a professional and responsible repair business.
    `
  }
};

const lesson3SmartphoneArchitectures: VideoLesson = {
  id: 3,
  title: 'Understanding Different Smartphone Architectures (iOS, Android)',
  duration: '50 minutes',
  type: 'video',
  content: {
    videoUrl: 'tH-6cchzL5k',
    textContent: `
# Understanding Different Smartphone Architectures (iOS, Android)

## Introduction

Smartphones primarily run on two major operating systems: iOS, developed by Apple, and Android, developed by Google. While both platforms serve similar functions—managing hardware, running apps, and providing a user interface—their underlying architectures differ significantly. For a repair technician or mobile developer, understanding these differences is crucial for diagnosing hardware and software issues accurately, selecting compatible parts, and applying proper repair techniques.

## iOS Architecture

iOS architecture is exclusive to Apple devices such as the iPhone, iPad, and iPod Touch. It is a closed-source operating system, meaning its internal workings are tightly controlled by Apple.

### Key Characteristics:
- **Hardware Consistency**: All iPhones use Apple-designed processors (e.g., A14, A15, A17 chips)
- **Controlled Environment**: Greater control over performance, security, and user experience
- **Limited Hardware Variation**: Consistent design structure simplifies repair procedures

### Technical Details:
- **File System**: Apple File System (APFS)
- **Cloud Integration**: Tight integration with Apple's cloud services
- **Diagnostic Tools**: Apple Configurator or 3uTools (unofficial)
- **Security**: Secure Enclave and Activation Lock systems

### Repair Considerations:
- **Proprietary Components**: Pentalobe screws, specific connectors
- **Authentication Requirements**: Official Apple software often required
- **Tight Integration**: Components more tightly integrated, challenging disassembly

## Android Architecture

Android architecture is more open and diverse. Android is based on the Linux kernel and is open-source, allowing device manufacturers like Samsung, Xiaomi, Huawei, Google, and others to modify and customize it.

### Key Characteristics:
- **Hardware Diversity**: Wide variety of configurations and processors
- **Manufacturer Customization**: Different user interfaces (One UI, MIUI, OxygenOS)
- **Open Source**: Greater flexibility for modifications

### Technical Details:
- **Processors**: Snapdragon, MediaTek, Exynos, Tensor, etc.
- **File Systems**: ext4, F2FS
- **Firmware Tools**: Samsung uses Odin, Xiaomi uses Mi Flash Tool
- **Bootloaders**: Support for custom recoveries like TWRP

### Repair Considerations:
- **Standardized Components**: Often use Phillips or Torx screws
- **Varied Procedures**: Different disassembly methods per brand/model
- **Modular Design**: Some devices feature removable batteries

## App and System Management

### iOS:
- Tightly controlled App Store
- Sandboxed application environments
- Limited system-level access
- Reduced malware risk but challenging troubleshooting

### Android:
- Greater system resource access
- More flexible for custom modifications
- Higher risk of system corruption or malware
- Better for custom repair operations

## Security and Firmware

### iOS:
- Requires official Apple software for firmware updates
- T2 and M-series chip authentication
- Strong anti-theft protection
- Challenges for unauthorized repairs

### Android:
- Manual intervention possible (factory flashing, bootloader unlocking)
- Custom ROM installation capability
- May void warranties or trip security flags (Samsung Knox)
- More flexible recovery options

## Repair Tool Requirements

### iOS Devices:
- Specific tools for Apple components
- Official software authentication
- Consistent procedures across models
- Specialized adhesive removal techniques

### Android Devices:
- Brand-specific diagnostic software
- Varied tool requirements per manufacturer
- Different firmware flashing methods
- Range of disassembly procedures

## Conclusion

While iOS and Android smartphones share many surface-level similarities, their architectures are distinct in ways that deeply affect repair procedures, tool compatibility, diagnostics, and system recovery. Technicians must become familiar with both ecosystems to be versatile and effective. A strong foundational knowledge of each system's structure, tools, file systems, firmware update methods, and component layout will ensure high-quality repairs and reduce risks of device damage or data loss.
    `
  }
};

const lesson4BasicRepairPrinciples: VideoLesson = {
  id: 4,
  title: 'Introduction to Mobile Phone Repairing Tools and Basic Repair Principles',
  duration: '35 minutes',
  type: 'video',
  content: {
    videoUrl: 'FG7R94sSSMo',
    textContent: `
# Introduction to Mobile Phone Repairing Tools and Basic Repair Principles

## Essential Repair Tools

### Basic Hand Tools:
- **Screwdrivers**: Phillips, flathead, pentalobe, Torx
- **Plastic Opening Tools**: Spudgers, plastic picks, suction cups
- **Tweezers**: Anti-static, precision tips
- **Heat Sources**: Heat gun, hair dryer, heating pad

### Specialized Equipment:
- **Microscope**: For detailed component inspection
- **Soldering Station**: Temperature-controlled soldering iron
- **Hot Air Rework Station**: For component removal/installation
- **Ultrasonic Cleaner**: For cleaning water-damaged components

### Safety Equipment:
- **Anti-static Wrist Strap**: ESD protection
- **Safety Glasses**: Eye protection
- **Gloves**: Nitrile or anti-static gloves
- **Ventilation**: Fume extractor for soldering

### Diagnostic Tools:
- **Multimeter**: Voltage, current, resistance testing
- **Power Supply**: Variable voltage testing
- **Oscilloscope**: Signal analysis (advanced repairs)

## Basic Repair Principles

### 1. Proper Diagnosis
- Listen to customer complaint
- Visual inspection of device
- Functional testing
- Component-level testing if needed

### 2. Safety First
- Power off device
- Disconnect battery
- Use ESD protection
- Work in clean environment

### 3. Systematic Approach
- Follow proper disassembly order
- Keep screws organized
- Document connections
- Take photos for reference

### 4. Quality Parts
- Use genuine or high-quality replacement parts
- Verify compatibility
- Test components before installation

### 5. Testing Procedures
- Test functionality after each repair step
- Full device testing before customer pickup
- Warranty and quality assurance

## Common Repair Procedures

### Screen Replacement:
1. Remove screws and adhesive
2. Disconnect flex cables
3. Transfer components to new screen
4. Reassemble and test

### Battery Replacement:
1. Power down device
2. Remove back cover
3. Disconnect battery connector
4. Remove adhesive strips
5. Install new battery

### Charging Port Repair:
1. Disassemble device
2. Locate charging port
3. Desolder old port (if necessary)
4. Install new port
5. Test charging functionality

## Workstation Organization

### Clean Workspace:
- Adequate lighting
- Anti-static mat
- Organized tool storage
- Component trays for screws

### Documentation:
- Repair logs
- Part numbers
- Customer information
- Warranty tracking

## Quality Control

### Pre-Repair Testing:
- Document all issues
- Test all functions
- Photo documentation

### Post-Repair Testing:
- Verify repair completion
- Test all device functions
- Customer acceptance testing

## Customer Service

### Communication:
- Clear explanation of issues
- Realistic timelines
- Cost transparency
- Follow-up service

### Professional Standards:
- Data privacy protection
- Warranty policies
- Fair pricing
- Quality guarantee

## Conclusion

Successful smartphone repair requires the right tools, proper techniques, and a systematic approach. Understanding basic repair principles and maintaining high standards ensures customer satisfaction and business success.
    `
  }
};

const lesson5Quiz: QuizLesson = {
  id: 5,
  title: 'Module 1 Quiz: Introduction to Cell Phone Repair',
  duration: '20 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is the main objective of cell phone repair?',
        options: [
          'Sell new phones',
          'Modify hardware permanently',
          'Restore devices to proper working condition',
          'Install new software features'
        ],
        correct: 2,
        explanation: 'The main objective of cell phone repair is to restore devices to proper working condition, fixing issues and returning functionality to the device.'
      },
      {
        question: 'Which of the following is not considered a common repair issue?',
        options: [
          'Cracked screen',
          'Water damage',
          'Lost SIM card',
          'Battery failure'
        ],
        correct: 2,
        explanation: 'A lost SIM card is not a repair issue but rather a replacement item. Common repair issues include hardware problems like cracked screens, water damage, and battery failure.'
      },
      {
        question: 'What is the first step before starting any phone repair job?',
        options: [
          'Remove the screen',
          'Discharge the battery',
          'Power off the device and disconnect the battery',
          'Plug in a new charger'
        ],
        correct: 2,
        explanation: 'The first step should always be to power off the device and disconnect the battery to ensure safety and prevent electrical damage during repair.'
      },
      {
        question: 'Which of the following best describes the smartphone repair industry today?',
        options: [
          'Declining and outdated',
          'Growing and full of opportunity',
          'Illegal in most countries',
          'Only applicable to engineers'
        ],
        correct: 1,
        explanation: 'The smartphone repair industry is rapidly growing and full of opportunity due to global device dependence and environmental awareness.'
      },
      {
        question: 'Which skill is most important for becoming a successful repair technician?',
        options: [
          'Cooking',
          'Micro-soldering',
          'Hardware and software troubleshooting',
          'Public speaking'
        ],
        correct: 2,
        explanation: 'Hardware and software troubleshooting skills are fundamental for diagnosing and repairing smartphone issues effectively.'
      },
      {
        question: 'What type of damage is usually not visible from the outside of the phone?',
        options: [
          'Cracked glass',
          'Water damage to motherboard',
          'Broken button',
          'Missing back cover'
        ],
        correct: 1,
        explanation: 'Water damage to the motherboard is internal damage that cannot be seen from the outside, unlike visible damage such as cracked glass or broken buttons.'
      },
      {
        question: 'Why is it important to stay updated with new phone models and technologies?',
        options: [
          'To impress customers',
          'To compete effectively and adapt repair skills',
          'To use more expensive tools',
          'To watch more unboxing videos'
        ],
        correct: 1,
        explanation: 'Staying updated with new technologies is essential to compete effectively and adapt repair skills to new models and emerging technologies.'
      },
      {
        question: 'What is the benefit of repairing a phone instead of replacing it?',
        options: [
          'Creates e-waste',
          'Saves money and the environment',
          'Helps phone manufacturers',
          'Takes more time'
        ],
        correct: 1,
        explanation: 'Repairing phones saves money for customers and helps the environment by reducing electronic waste and extending device lifecycles.'
      },
      {
        question: 'Static electricity can damage internal smartphone components.',
        options: [
          'True',
          'False'
        ],
        correct: 0,
        explanation: 'True. Static electricity (ESD) can damage sensitive electronic components like processors, memory chips, and connectors.'
      },
      {
        question: 'Water damage is always easy to detect by just looking.',
        options: [
          'True',
          'False'
        ],
        correct: 1,
        explanation: 'False. Water damage to internal components like the motherboard may not be visible from the outside and requires internal inspection.'
      },
      {
        question: 'A technician must be careful when handling internal parts like the processor or RAM.',
        options: [
          'True',
          'False'
        ],
        correct: 0,
        explanation: 'True. Internal components are extremely sensitive to static electricity, force, and improper handling, requiring careful techniques.'
      },
      {
        question: 'It is unnecessary to remove the battery before starting a repair.',
        options: [
          'True',
          'False'
        ],
        correct: 1,
        explanation: 'False. Removing or disconnecting the battery is a critical safety step to prevent electrical damage and ensure technician safety.'
      },
      {
        question: 'Good communication and honesty improve customer trust.',
        options: [
          'True',
          'False'
        ],
        correct: 0,
        explanation: 'True. Clear communication and honest assessment of issues and costs builds customer trust and leads to repeat business.'
      },
      {
        question: 'All phones have identical internal layouts.',
        options: [
          'True',
          'False'
        ],
        correct: 1,
        explanation: 'False. Different manufacturers and models have varying internal layouts, requiring technicians to learn different disassembly procedures.'
      },
      {
        question: 'Diagnosing problems is a key part of successful repair.',
        options: [
          'True',
          'False'
        ],
        correct: 0,
        explanation: 'True. Proper diagnosis is essential for identifying the root cause of problems and applying the correct repair solution.'
      }
    ]
  }
};

export const module1Introduction: Module = {
  id: 1,
  title: 'Introduction to Cell Phone Repair',
  description: 'Overview of the smartphone repair industry, safety precautions, smartphone architectures, and basic repair principles.',
  lessons: [
    lesson1IndustryOverview,
    lesson2SafetyPrecautions,
    lesson3SmartphoneArchitectures,
    lesson4BasicRepairPrinciples,
    lesson5Quiz
  ]
};