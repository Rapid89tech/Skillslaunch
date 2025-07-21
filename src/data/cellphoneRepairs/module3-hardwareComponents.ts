
import type { Module } from '@/types/course';

export const module3HardwareComponents: Module = {
  id: 3,
  title: 'Module 3 - Hardware Components and Functions',
  description: 'Comprehensive understanding of smartphone internal components including motherboards, batteries, screens, and buttons, along with their functions and repair considerations.',
  lessons: [
    {
      id: 21,
      title: 'Identifying Internal Parts: Motherboards, Batteries, Screens, and Buttons',
      duration: '45 minutes',
      type: 'video',
      content: {
        videoUrl: 'fCS8jGc3log',
        textContent: `
<div class="lesson-content">
  <h2>Module 3 - Hardware Components and Functions</h2>
  
  <p><strong>Identifying internal parts: motherboards, batteries, screens, and buttons.</strong></p>
  
  <p>Smartphones are intricate electronic devices made up of several key components, each playing a critical role in the device's overall functionality. A skilled repair technician must understand the structure, function, and common issues associated with the motherboard, battery, screen, and buttons, as these are among the most frequently diagnosed and serviced parts. Gaining insight into how these components work together also provides a strong foundation for both basic and advanced repairs.</p>

  <div class="component-section">
    <h3>🔧 Motherboards: The Brain of the Smartphone</h3>
    
    <p>The motherboard, also referred to as the mainboard or logic board, is the central hub of all smartphone operations. It contains the CPU (central processing unit), GPU (graphics processing unit), RAM (memory), storage chips, power management ICs, and communication modules like Wi-Fi, Bluetooth, and cellular radios. Every input or command from the user—whether pressing a button, swiping on the screen, or opening an app—ultimately passes through the motherboard.</p>
    
    <p>Motherboards are densely packed and layered with micro-components, making them both delicate and complex. Damage can occur from liquid spills, impact, overheating, or faulty charging practices. Common repair issues include dead motherboards, short circuits, no power/no boot conditions, charging failures, or signal/network problems. In some cases, micro-soldering is required to replace faulty chips or jump broken traces.</p>
    
    <p>Technicians must handle motherboards with extreme care—using anti-static tools and wristbands—and ensure they're properly grounded during repair. Testing involves visual inspection under a microscope, checking voltages with a multimeter, or using a power supply to analyze current draw behavior. Motherboard-level diagnostics and repair are among the most advanced skills in smartphone repair and often distinguish entry-level techs from experts.</p>
  </div>

  <div class="component-section">
    <h3>🔋 Batteries: Power Source and Safety Component</h3>
    
    <p>The battery supplies the electrical energy needed for the smartphone to function. Most modern smartphones use Li-ion (lithium-ion) or Li-polymer (lithium-polymer) rechargeable batteries. These are compact, powerful, and long-lasting, but also sensitive to heat, overcharging, punctures, or swelling.</p>
    
    <p>Batteries typically connect to the motherboard via a flex cable or connector and are secured in place with strong adhesive. When replacing batteries, it's crucial to first discharge the battery if possible, then gently heat the adhesive area, and use non-metal spudgers to lift it. Improper battery removal can puncture the cell, leading to fire or swelling, so technicians must proceed with caution.</p>
    
    <p>Battery-related issues include rapid draining, failure to charge, overheating, and unexpected shutdowns. Some batteries also degrade over time and may need replacement after 500–1000 charge cycles. Tools like battery testers or software apps (e.g., AccuBattery, CoconutBattery for iOS/Mac) can provide data on battery health. It's also important to use OEM or high-quality replacement batteries to avoid performance or safety issues.</p>
  </div>

  <div class="component-section">
    <h3>📱 Screens: Display and Touch Interface</h3>
    
    <p>The screen assembly is the most physically exposed component and one of the most frequently damaged parts in a smartphone. It usually consists of several layers: the LCD or OLED panel (for displaying images), the digitizer (for touch response), and the protective glass (which includes Gorilla Glass or similar materials). Some displays are laminated, meaning the touch and display layers are fused together, making replacement more technical and expensive.</p>
    
    <p>Common screen issues include cracks, dead pixels, discoloration, ghost touch, or unresponsive display. OLED screens, while offering better contrast and color accuracy, are more fragile and costly than LCDs. Technicians must identify whether a screen assembly is modular (e.g., Samsung's AMOLED units) or needs separation and re-bonding (as in refurbished iPhone displays).</p>
    
    <p>When replacing screens, care must be taken to detach the device safely using a heat gun or hot plate to soften adhesives. Flex cables connecting the screen to the motherboard must be unplugged delicately to avoid tearing or dislodging connectors. After installation, testing the touch, brightness, and sensor functions is essential before sealing the device.</p>
  </div>

  <div class="component-section">
    <h3>🔘 Buttons: Mechanical and Sensor-Based Input Devices</h3>
    
    <p>Smartphones have various physical and capacitive buttons, including power buttons, volume rockers, home buttons, and fingerprint sensors. While newer phones minimize physical buttons in favor of gestures or software-based controls, buttons remain important for essential operations like booting, taking screenshots, or initiating recovery modes.</p>
    
    <p>Buttons may be mechanical (click-based) or electronic (sensor-based like capacitive fingerprint readers). Mechanical buttons can wear out due to usage or water damage. Symptoms of faulty buttons include unresponsiveness, double-clicking, or getting stuck. Button repairs may involve replacing the flex cable or the entire mid-frame, depending on the model. On newer models, like iPhones with Touch ID or Android devices with biometric sensors, some buttons are paired to the device's secure element. This means improper replacement could lead to loss of functionality or security features unless calibrated with proprietary tools.</p>
    
    <p>When repairing or replacing buttons, technicians must be cautious not to damage adjacent components. Adhesives or screws usually hold buttons in place, and heat may be required for removal. After replacement, full functionality should be tested, including response time, click feel, and any integrated functions (like fingerprint unlocking).</p>
  </div>

  <div class="conclusion-section">
    <h3>🧠 Conclusion</h3>
    
    <p>Mastering the structure and function of the motherboard, battery, screen, and buttons is critical to becoming a confident and capable smartphone repair technician. Each component has its unique handling requirements, failure patterns, and replacement techniques. Whether diagnosing a power issue from the motherboard, replacing a swollen battery, swapping a cracked screen, or troubleshooting a dead button, a technician's knowledge of these parts enables safe, efficient, and reliable repairs.</p>
    
    <p>Understanding these core components also lays the groundwork for more advanced skills such as board-level microsoldering, data recovery, or hardware modifications. Ultimately, the better a technician understands these key parts, the more accurately they can diagnose problems, reduce customer wait times, and minimize risks in repair jobs.</p>
  </div>

  📺 YOUTUBE: Power Source and Safety Component - https://youtu.be/pODTCH4VxC4
</div>
        `
      }
    },
    {
      id: 22,
      title: 'The Role of Key Components: Processors, Memory Chips, and Display Modules',
      duration: '40 minutes',
      type: 'video',
      content: {
        videoUrl: 'GDYrCD5KlDg',
        textContent: `
<div class="lesson-content">
  <h2>The role of key components: processors, memory chips, and display modules</h2>
  
  <p>Understanding the function of key internal components is essential for any smartphone repair technician or hardware specialist. Among the most critical components inside a modern smartphone are the processor (CPU/System-on-Chip), memory chips (RAM and storage), and display modules (LCD/OLED). These components not only define a device's performance and user experience but also influence repairability and cost. Mastery of these elements enables technicians to better diagnose issues, recommend upgrades or replacements, and appreciate the engineering behind every phone.</p>

  <div class="component-section">
    <h3>🔄 Processors (CPU/SoC): The Central Nervous System</h3>
    
    <p>The processor, also called the CPU (Central Processing Unit) or more broadly the SoC (System on Chip), acts as the brain of the smartphone. In modern devices, the processor is not a standalone chip—it's a complex integrated circuit that combines multiple functions, including the CPU, GPU (Graphics Processing Unit), modem, image signal processor, neural processing units (for AI tasks), and power control. This compact design is why it's referred to as a "system" on a chip.</p>
    
    <p>Popular smartphone processors include Qualcomm Snapdragon, Apple A-series (e.g., A15, A16 Bionic), MediaTek, Samsung Exynos, and Google Tensor chips. These SoCs determine how fast the phone runs, how well it handles multitasking, gaming, camera performance, and battery management. For example, higher-end processors have more cores, better thermal efficiency, and support for newer wireless standards like 5G.</p>
    
    <p>From a repair perspective, the processor is soldered directly onto the motherboard using BGA (Ball Grid Array) techniques. If the processor fails—due to overheating, physical damage, or manufacturing defects—the phone may not boot, show signs of lagging, or crash frequently. Replacing or reballing a processor is a highly specialized task requiring micro-soldering skills and advanced tools like hot air stations and reflow machines. Most technicians will refer such repairs to board-level specialists or recommend motherboard replacement.</p>
  </div>

  <div class="component-section">
    <h3>🧠 Memory Chips: RAM and Internal Storage</h3>
    
    <p>Smartphones contain two primary types of memory chips: RAM (Random Access Memory) and ROM or internal storage (e.g., NAND Flash memory). These chips are also part of the motherboard and play crucial roles in system performance and data handling.</p>
    
    <p>RAM temporarily holds the data and processes currently in use by apps and the operating system. The more RAM a phone has, the better it can handle multitasking and background processes. Typical smartphones now have 4 GB to 16 GB of RAM, depending on the model. If RAM is faulty, symptoms may include app crashes, freezing, or boot loops.</p>
    
    <p>Internal storage, often mistakenly referred to as ROM, is where the operating system, apps, media, and user data are stored. Storage capacity ranges from 32 GB to over 1 TB in high-end models. When the NAND flash chip fails or becomes corrupted, the device may show errors like "No OS," be stuck on the boot logo, or be unable to read/write data. In severe cases, users may lose access to personal files, which leads to data recovery procedures.</p>
    
    <p>Like processors, memory chips are soldered to the motherboard. Advanced tools like NAND programmers, eMMC/eUFS readers, and reballing stations are required to replace or reprogram them. Technicians may also use software-based diagnostics (e.g., ADB logs or DFU mode) to detect memory issues. For most repairs involving memory failure, the best practice is often to attempt data recovery first, then consider chip-level replacement if feasible.</p>
  </div>

  <div class="component-section">
    <h3>📱 Display Modules: Visual Output and User Interaction</h3>
    
    <p>The display module is the face of the smartphone, combining the visual interface and touch sensitivity into one integrated component. There are two main types of display technologies: LCD (Liquid Crystal Display) and OLED/AMOLED (Organic Light Emitting Diodes).</p>
    
    <p>LCD screens require a backlight to illuminate the image and are generally more affordable. They are used in budget or mid-range phones and are easier to repair or replace. However, they typically offer lower contrast and color accuracy than OLEDs.</p>
    
    <p>OLED displays do not require a backlight; each pixel emits its own light. This allows for deeper blacks, thinner panels, better battery efficiency, and superior visual quality. AMOLED (Active Matrix OLED) is a popular variant used in flagship phones. However, OLED screens are more delicate and costly to replace, and they are more prone to issues like screen burn-in or dead pixels.</p>
    
    <p>Display modules usually consist of three fused layers: the display panel (LCD/OLED), the digitizer (touch layer), and the protective glass. In many phones, these are laminated together, meaning a cracked screen often requires replacement of the entire display assembly. Some devices, like iPhones, also integrate the proximity sensor, ambient light sensor, Face ID module, and Touch ID/home button into the display module, increasing the complexity of repairs.</p>
    
    <p>When a display module malfunctions, it might show no image, distorted visuals, color bleeding, or touch unresponsiveness. Technicians use visual inspection, touch tests, and connector diagnostics to determine whether the screen or the motherboard is at fault. Proper handling of flex cables, use of suction tools, and heating methods is essential to avoid damaging the new display during replacement.</p>
  </div>

  <div class="conclusion-section">
    <h3>🧠 Conclusion</h3>
    
    <p>Processors, memory chips, and display modules form the technological foundation of every smartphone. The processor handles computation and performance, the memory chips store both temporary and permanent data, and the display modules serve as the interactive interface. These components are interconnected on the motherboard and determine the phone's speed, responsiveness, data handling, and visual experience.</p>
    
    <p>For technicians, understanding these parts goes beyond theory—it's the key to successful diagnostics and repairs. While physical replacement of processors or memory chips requires advanced skills, even basic-level technicians must know how these components interact, fail, and can be tested. With this knowledge, repair professionals can better serve their clients, offer accurate diagnoses, and maintain the integrity of the devices they work on.</p>
  </div>
</div>
        `
      }
    },
    {
      id: 24,
      title: 'Display and Touch Interface Components',
      duration: '30 minutes',
      type: 'video',
      content: {
        videoUrl: 'LzWxhatRpN4',
        textContent: `# Display and Touch Interface Components
        
## Understanding Modern Smartphone Displays

The display assembly is one of the most complex and critical components in modern smartphones, combining multiple technologies to provide both visual output and touch input capabilities.

### Display Technologies:
- **LCD (Liquid Crystal Display)** - Requires backlight, more affordable
- **OLED/AMOLED** - Self-emitting pixels, better contrast and colors
- **Super AMOLED** - Samsung's enhanced OLED technology
- **Retina/Super Retina** - Apple's high-resolution displays

### Touch Interface Components:
- **Capacitive Digitizer** - Detects finger touch through electrical changes
- **Force Touch/3D Touch** - Pressure-sensitive input (some models)
- **Haptic Feedback** - Vibration response to touch

### Display Layers:
1. **Protective Glass** - Outer layer (Gorilla Glass, etc.)
2. **Touch Digitizer** - Touch sensing layer
3. **Display Panel** - LCD/OLED for visual output
4. **Backlight** - LED illumination (LCD only)

### Common Issues:
- Cracked glass with functional display
- Dead pixels or color distortion
- Touch responsiveness problems
- Display burn-in (OLED displays)
- Backlight failure (LCD displays)

Understanding these components is essential for accurate diagnosis and successful display repairs.`
      }
    },
    {
      id: 25,
      title: 'Mechanical and Sensor-Based Input Devices',
      duration: '25 minutes',
      type: 'video',
      content: {
        videoUrl: 'E4X6V5nH29A',
        textContent: `# Mechanical and Sensor-Based Input Devices
        
## Button Types and Technologies

Modern smartphones use various input methods beyond the touchscreen, each with unique characteristics and repair considerations.

### Physical Button Types:
- **Power Button** - Main device control, often with fingerprint sensor
- **Volume Rocker** - Audio level control
- **Home Button** - Navigation (older models), may include Touch ID
- **Action Button** - Customizable function (newer models)

### Sensor-Based Inputs:
- **Capacitive Buttons** - Touch-sensitive, no physical movement
- **Fingerprint Sensors** - Biometric authentication
- **Proximity Sensors** - Detect face during calls
- **Ambient Light Sensors** - Auto-brightness adjustment

### Button Construction:
- **Mechanical Switches** - Physical click mechanism
- **Membrane Switches** - Flexible contact layer
- **Sensor Arrays** - Electronic detection without movement

### Common Failures:
- Stuck or unresponsive buttons
- Double-clicking or phantom presses
- Worn-out contact points
- Water damage to button mechanisms
- Failed fingerprint sensor calibration

### Repair Considerations:
- Button replacement may require frame disassembly
- Some sensors are paired to device security features
- Proper calibration needed after replacement
- Flex cable routing and connector alignment critical

Understanding these input devices helps technicians provide comprehensive repair services.`
      }
    },
    {
      id: 26,
      title: 'Internal Layout and Modularity Across Brands',
      duration: '35 minutes',
      type: 'video',
      content: {
        videoUrl: 'xsHpNWBUVIk',
        textContent: `# Internal Layout and Modularity Across Brands
        
## Understanding Brand-Specific Designs

Different smartphone manufacturers employ unique internal layouts and modularity approaches, significantly affecting repair procedures and component accessibility.

### Design Philosophy Differences:
- **Apple**: Minimalistic, proprietary components, strong security integration
- **Samsung**: Modular design with curved displays and extensive flex cable use
- **Google Pixel**: Camera-centric hardware with stock Android optimization
- **Chinese Brands**: High-spec components at lower prices, varied layouts

### Internal Layout Variations:
- **Vertical Layout**: iPhone-style with logic board on one side, battery on other
- **Horizontal Layout**: Many Android phones with motherboard at top, battery below
- **Dual-Layer**: Complex designs with stacked motherboards (newer iPhones)
- **L-Shaped Batteries**: Space optimization in premium models

### Modularity Considerations:
- **High Modularity**: Fairphone, some Motorola models - easy component replacement
- **Low Modularity**: Most flagships - components integrated for space efficiency
- **Hybrid Approach**: Some parts modular, others integrated based on space constraints

Understanding these variations helps technicians adapt their approach for each brand and model.`
      }
    },
    {
      id: 23,
      title: 'Recognizing Variations in Hardware Between Different Brands and Models',
      duration: '35 minutes',
      type: 'video',
      content: {
        videoUrl: 'Z7iBFklVU_I',
        textContent: `
<div class="lesson-content">
  <h2>Recognizing variations in hardware between different brands and models</h2>
  
  <p>As a smartphone technician or repair professional, it is essential to understand that not all smartphones are built the same. While most devices serve the same functions—calling, browsing, photography, and messaging—different brands and models use distinct hardware designs, materials, and internal layouts. Recognizing these variations is crucial for safe disassembly, accurate diagnostics, component replacement, and successful repair outcomes. Familiarity with these differences also improves speed, reduces the risk of errors, and boosts a technician's ability to serve a wider range of customers.</p>

  <div class="component-section">
    <h3>🔧 Design Philosophy: Apple vs. Android Manufacturers</h3>
    
    <p>The most immediate variation in smartphone hardware comes from the philosophy and approach of different manufacturers. For instance, Apple iPhones are known for their minimalistic design, proprietary components, and a strong emphasis on security and ecosystem integration. Most iPhones have a tightly controlled internal structure with custom chips (like the A-series SoCs), unique connectors, and limited modularity. Apple also uses proprietary screws (such as pentalobe), secure Touch ID/Face ID modules tied to the motherboard, and strong adhesive in batteries and screens.</p>
    
    <p>In contrast, Android devices vary widely by brand. Manufacturers like Samsung, Xiaomi, Huawei, Oppo, and Google each have distinct styles. For example, Samsung Galaxy devices often use Super AMOLED displays with curved edges and in-display fingerprint sensors, while Google Pixel phones focus on camera-centric hardware and use a more stock Android experience. Chinese brands like Xiaomi or Realme tend to offer high specs at lower prices, using third-party components and more accessible layouts.</p>
  </div>

  <div class="component-section">
    <h3>🧱 Internal Layout and Modularity</h3>
    
    <p>Smartphone hardware layout can vary significantly depending on the model. iPhones, for instance, typically have a vertical internal layout with the logic board located on one side of the chassis and the battery on the other. Newer models like the iPhone X series and beyond have dual-layered motherboards and L-shaped batteries. On the other hand, many Android phones place the motherboard at the top and the battery below it, making access and repair procedures slightly different.</p>
    
    <p>Modularity also differs by brand. Some phones, like the Fairphone, are designed to be fully modular and easily repairable, with replaceable camera modules, charging ports, and screens. Other brands, like Huawei, integrate many components (e.g., charging ports, microphones, and buttons) directly onto the mainboard or daughterboard, making individual component replacement more difficult and time-consuming.</p>
  </div>

  <div class="component-section">
    <h3>🔌 Connectors and Cable Layouts</h3>
    
    <p>Each brand uses different types of cable connectors and flex arrangements. Apple tends to use small and densely packed FPC (Flexible Printed Circuit) connectors that require precision and care. Android manufacturers use a mix of flex and coaxial cables for antennas, cameras, and displays. Samsung, in particular, uses many ribbon cables and multi-layered connector stacks, especially in foldable phones like the Galaxy Z Flip and Fold series.</p>
    
    <p>It is also important to note that charging ports vary. While most Android phones now use USB-C, older models may still have micro-USB. Apple devices exclusively use Lightning connectors, which have a different pinout and repair method. Some Android models even integrate the charging port with the sub-board, while others have it soldered directly onto the motherboard, affecting replacement difficulty.</p>
  </div>

  <div class="component-section">
    <h3>🔋 Battery Design and Adhesives</h3>
    
    <p>Battery design also varies. Apple uses custom-shaped batteries with strong adhesive strips and provides pull-tabs for safer removal. However, these pull-tabs are not always effective, especially if the battery is swollen. Samsung and other Android manufacturers may use adhesive but often with fewer removal aids, requiring gentle heating and prying techniques.</p>
    
    <p>The battery connectors themselves differ—some use clip-on flex cables, others use ZIF connectors or are soldered. Additionally, battery voltages, capacities, and battery management systems (BMS) are not standardized, so it's important to match replacements carefully to avoid damage or poor performance.</p>
  </div>

  <div class="component-section">
    <h3>📸 Camera Modules and Fingerprint Sensors</h3>
    
    <p>Modern smartphones vary widely in camera module configurations. Flagships often come with multiple rear cameras (wide, ultra-wide, telephoto, macro) and advanced stabilization hardware. These modules may be mounted on individual flex cables or combined into one unit. Some phones—like Huawei's P series or Samsung's S Ultra models—feature periscope lenses or larger sensor sizes, increasing complexity during repair.</p>
    
    <p>Fingerprint sensors also differ. Older devices have physical sensors integrated into the home button or back cover, while newer models have in-display fingerprint readers, which are either optical or ultrasonic. Repairs involving these sensors require brand-specific knowledge and tools. Notably, iPhones tie their Touch ID to the motherboard, and improper replacement will disable the feature entirely unless restored with Apple tools.</p>
  </div>

  <div class="component-section">
    <h3>🖥️ Displays and Screen Technologies</h3>
    
    <p>Displays differ drastically by brand and model in terms of type, structure, and resolution. Apple uses Retina Displays and Super Retina OLEDs, while Samsung uses high-resolution Dynamic AMOLED panels. Mid-range and budget Androids may use TFT or IPS LCDs.</p>
    
    <p>iPhones often have laminated displays, combining the LCD and digitizer, while some Android models have separable layers, allowing partial screen repairs (though less common now). Also, screen replacement in newer devices may affect True Tone (iPhone) or Always-On Display features (Android) unless the correct calibration tools are used.</p>
  </div>

  <div class="component-section">
    <h3>🛠️ Repair Difficulty and Right to Repair</h3>
    
    <p>Not all smartphones are equally repairable. Apple devices are generally more difficult to repair due to their proprietary parts, software restrictions, and strong adhesives. Their "Secure Enclave" links components like Touch ID and Face ID to the logic board, requiring original replacements or specialized tools for calibration.</p>
    
    <p>Android brands like Samsung, OnePlus, and Xiaomi vary—some are highly modular, others are sealed with glue, especially waterproof models. Foldables and flagships are often the hardest to repair due to their tight design and delicate hinges.</p>
    
    <p>The right-to-repair movement has pushed some companies to publish repair guides and offer genuine parts (Apple Self Service Repair Program, Samsung's partnerships with iFixit), but access remains limited for many devices. Understanding which brands are more repair-friendly helps technicians set realistic expectations for customers.</p>
  </div>

  <div class="conclusion-section">
    <h3>✅ Conclusion</h3>
    
    <p>Recognizing hardware variations across smartphone brands and models is a core skill in modern device repair. From internal layout and modularity to connectors, display types, and repairability, each brand offers a unique design that influences how a technician approaches the repair process. The more familiar a technician is with these differences, the more confidently and efficiently they can handle a diverse range of repairs.</p>
    
    <p>In a world of constantly evolving smartphones, continued learning and hands-on experience across multiple brands ensure that a technician remains adaptable, accurate, and ahead of industry trends.</p>
  </div>
</div>
        `
      }
    },
    {
      id: 24,
      title: 'Quiz: Module 3 – Hardware Components and Functions',
      duration: '20 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'Which component serves as the main circuit board and central hub for all connections in a smartphone?',
            options: ['Battery', 'Screen', 'Motherboard', 'SIM tray'],
            correct: 2,
            explanation: 'The motherboard (also called mainboard or logic board) is the central hub that connects all major components in a smartphone, including the CPU, GPU, RAM, storage chips, and communication modules.'
          },
          {
            question: 'What is the primary function of the battery in a smartphone?',
            options: ['Store apps', 'Power the device', 'Cool the system', 'Control the touchscreen'],
            correct: 1,
            explanation: 'The battery supplies the electrical energy needed for the smartphone to function. It powers all components and allows the device to operate.'
          },
          {
            question: 'Which hardware component is responsible for processing data and executing commands?',
            options: ['Display module', 'Button', 'Memory chip', 'Processor'],
            correct: 3,
            explanation: 'The processor (CPU/SoC) acts as the brain of the smartphone, processing data and executing commands from applications and the operating system.'
          },
          {
            question: 'What role do memory chips play in a smartphone?',
            options: ['Power the screen', 'Store and retrieve data', 'Transmit signals', 'Convert voltage'],
            correct: 1,
            explanation: 'Memory chips include RAM (for temporary data storage) and internal storage (for permanent data storage), allowing the device to store and retrieve data as needed.'
          },
          {
            question: 'What does the display module primarily do?',
            options: ['Run applications', 'Charge the device', 'Output visuals and user interface', 'Store data'],
            correct: 2,
            explanation: 'The display module combines visual output (showing images and interface) with touch input capability, serving as the primary user interaction interface.'
          },
          {
            question: 'Which component allows physical interaction such as volume control or power on/off?',
            options: ['Touchscreen', 'Button', 'Microphone', 'Vibration motor'],
            correct: 1,
            explanation: 'Buttons (including power buttons, volume rockers, and home buttons) provide physical interaction points for essential device operations.'
          },
          {
            question: 'A cracked screen most commonly affects which part of the phone?',
            options: ['Processor', 'Battery', 'Display module', 'Speaker'],
            correct: 2,
            explanation: 'A cracked screen directly affects the display module, which includes the LCD/OLED panel, digitizer, and protective glass layers.'
          },
          {
            question: 'True or False: The motherboard connects all major components in a smartphone.',
            options: ['True', 'False'],
            correct: 0,
            explanation: 'True. The motherboard serves as the central hub that connects and coordinates all major components including CPU, GPU, RAM, storage, and communication modules.'
          },
          {
            question: 'True or False: All smartphone batteries are removable and replaceable.',
            options: ['True', 'False'],
            correct: 1,
            explanation: 'False. Many modern smartphones have non-removable batteries that are secured with strong adhesive and require disassembly to replace.'
          },
          {
            question: 'True or False: A malfunctioning processor can cause the phone to freeze or shut down.',
            options: ['True', 'False'],
            correct: 0,
            explanation: 'True. Since the processor is the brain of the smartphone, malfunctions can cause various issues including freezing, crashing, or unexpected shutdowns.'
          },
          {
            question: 'True or False: The screen is only for touch input and does not display images.',
            options: ['True', 'False'],
            correct: 1,
            explanation: 'False. The screen/display module both displays images and interfaces AND provides touch input capability through the integrated digitizer.'
          },
          {
            question: 'True or False: Memory chips can be upgraded easily in most smartphones.',
            options: ['True', 'False'],
            correct: 1,
            explanation: 'False. Memory chips (RAM and storage) are typically soldered directly to the motherboard and cannot be easily upgraded in most smartphones.'
          },
          {
            question: 'True or False: Buttons are usually connected to the motherboard through flex cables.',
            options: ['True', 'False'],
            correct: 0,
            explanation: 'True. Most smartphone buttons connect to the motherboard through flex cables or ribbon cables that carry the electrical signals.'
          },
          {
            question: 'True or False: The display module includes both the LCD and the digitizer.',
            options: ['True', 'False'],
            correct: 0,
            explanation: 'True. The display module typically consists of the LCD/OLED panel (for display), the digitizer (for touch), and protective glass, often laminated together.'
          },
          {
            question: 'True or False: Hardware components are generally the same in all phone brands and models.',
            options: ['True', 'False'],
            correct: 1,
            explanation: 'False. Different brands and models use distinct hardware designs, layouts, connectors, and components, requiring brand-specific knowledge for repairs.'
          }
        ]
      }
    }
  ]
};
