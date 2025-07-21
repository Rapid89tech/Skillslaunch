
import { Module } from '@/types/course';

export const module5SanitationSafetyConsultation: Module = {
  id: 5,
  title: 'Sanitation, Safety, and Client Consultation',
  description: 'Learn essential health and safety standards, proper sterilization protocols, and effective client consultation techniques',
  lessons: [
    {
      id: 22,
      title: 'Health and Safety Standards',
      duration: '3 hours',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/Public-Health-You-Salon-Spa-Safety',
        textContent: `# 🛡️ Module 5.1: Health and Safety Standards

## Learning Objectives
- Understand the importance of maintaining a clean, safe workspace
- Learn proper sterilization and disinfection protocols
- Understand the role of personal protective equipment (PPE) and ventilation in ensuring safety while working with chemicals

## Section 1: Importance of Maintaining a Clean and Safe Work Environment (1 hour)

### A. Why Cleanliness Matters:

#### Client Health and Trust:
- Prevents cross-contamination and infections
- Instills confidence in clients that the salon adheres to professional standards

#### Technician Well-Being:
- Protects staff from exposure to harmful pathogens
- Maintains a safe environment for repeated use

#### Regulatory Compliance:
- Ensures adherence to local health department regulations
- Helps avoid fines, shutdowns, or legal issues

<iframe width="560" height="315" src="https://www.youtube.com/embed/Public-Health-You-Salon-Spa-Safety" title="Public Health & You: Salon & Spa Safety" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### B. Common Hazards in Nail Salons:

#### Biological Hazards:
- Bacteria, fungi, and viruses that can spread through shared tools or surfaces

#### Chemical Hazards:
- Fumes, dust, and residues from nail products that can cause respiratory irritation or allergic reactions

#### Physical Hazards:
- Accidental cuts or punctures from sharp tools

<iframe width="560" height="315" src="https://www.youtube.com/embed/Chemical-Hazards-in-Nail-Salons" title="Chemical Hazards in Nail Salons" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### C. Establishing and Maintaining a Safe Workspace:
- Clean all surfaces before and after every client
- Keep tools, polishes, and chemicals organized and labeled
- Dispose of single-use items properly and promptly
- Ensure handwashing stations and sanitizers are readily available

## Section 2: Proper Sterilization and Disinfection Protocols (1 hour)

### A. Levels of Cleanliness:

#### Sanitization:
- The removal of visible debris and reduction of bacteria on surfaces
- Example: Using soap and water to clean tools

#### Disinfection:
- The use of chemical agents to kill most bacteria and viruses on non-porous surfaces
- Example: Wiping workstations and tools with hospital-grade disinfectants

#### Sterilization:
- The complete elimination of all forms of microbial life, including spores
- Example: Using an autoclave to sterilize metal implements

<iframe width="560" height="315" src="https://www.youtube.com/embed/What-is-Sanitization-Sterilization-and-Disinfection" title="What is Sanitization, Sterilization and Disinfection" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### B. Cleaning Tools and Surfaces:

#### Tools:
- Pre-clean tools by removing visible dirt and residue
- Soak metal tools in an EPA-registered disinfectant for the manufacturer's recommended time
- Rinse and dry tools before using or storing
- Consider using an autoclave for high-risk tools to ensure full sterilization

#### Surfaces:
- Disinfect tables, chairs, UV/LED lamps, and armrests between clients
- Mop floors and clean frequently touched areas, such as door handles and light switches, regularly
- Use disposable covers or protective barriers on high-contact surfaces

### C. Storage and Maintenance:
- Keep cleaned tools in a covered container, clearly labeled
- Replace single-use items such as files and buffers after each client
- Ensure disinfectants are fresh and stored according to the manufacturer's instructions

## Section 3: Personal Protective Equipment (PPE) and Proper Ventilation (1 hour)

### A. Personal Protective Equipment (PPE):

#### Gloves:
- Protect hands from direct contact with clients' nails and potentially infectious materials
- Use nitrile or latex gloves for comfort and flexibility

#### Face Masks and Respirators:
- Masks can filter out fine dust and reduce inhalation of harmful fumes
- Respirators provide extra protection when working with strong chemicals
- Replace masks regularly and ensure respirators are properly fitted

#### Safety Goggles:
- Shield eyes from chemical splashes, dust, and small debris

### B. Proper Ventilation and Air Quality Control:

#### Local Exhaust Ventilation (LEV):
- Install vents or fume extractors near workstations
- Directly capture and remove fumes and dust at the source

#### Air Filtration Systems:
- Use HEPA filters to trap airborne particles and ensure clean, breathable air
- Maintain and replace filters regularly

#### Room Layout and Airflow:
- Arrange workstations to allow fresh air circulation
- Open windows or doors (if possible) to improve ventilation

### C. Best Practices for Handling Chemicals Safely:
- Always read and follow the Material Safety Data Sheets (MSDS) for each product
- Keep chemical containers tightly sealed when not in use
- Store products in a cool, dry place, away from direct sunlight or heat sources
- Mix and use products according to manufacturer guidelines to avoid dangerous reactions

## Key Takeaways
- A clean and safe environment protects both clients and technicians
- Proper sterilization and disinfection prevent the spread of pathogens
- PPE and adequate ventilation reduce exposure to chemicals and other hazards`
      }
    },
    {
      id: 23,
      title: 'Quiz: Health and Safety Standards',
      duration: '30 min',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'Why is it important to maintain a clean work environment?',
            options: [
              'It reduces service time.',
              'It prevents cross-contamination and protects clients\' health.',
              'It eliminates the need for personal protective equipment.'
            ],
            correct: 1,
            explanation: 'Maintaining a clean work environment is crucial for preventing cross-contamination and protecting both client and technician health.'
          },
          {
            question: 'Which of the following is the most thorough method of cleaning tools?',
            options: [
              'Washing with soap and water',
              'Wiping down with alcohol wipes',
              'Sterilization using an autoclave'
            ],
            correct: 2,
            explanation: 'Sterilization using an autoclave provides the most thorough cleaning by eliminating all forms of microbial life, including spores.'
          },
          {
            question: 'What is the difference between sanitization and disinfection?',
            options: [
              'Sanitization removes all microbial life, while disinfection reduces debris.',
              'Disinfection kills most bacteria and viruses, while sanitization removes visible debris and reduces bacteria.',
              'Sanitization is only used on tools, while disinfection is only used on surfaces.'
            ],
            correct: 1,
            explanation: 'Disinfection uses chemical agents to kill most bacteria and viruses, while sanitization removes visible debris and reduces bacterial count.'
          },
          {
            question: 'Which of these items should be replaced after every client?',
            options: [
              'Reusable metal tools',
              'Disposable nail files and buffers',
              'Nail clippers'
            ],
            correct: 1,
            explanation: 'Disposable nail files and buffers should be replaced after every client to prevent cross-contamination.'
          },
          {
            question: 'What is the purpose of personal protective equipment (PPE) in the salon?',
            options: [
              'To reduce the time needed for cleaning.',
              'To protect the technician and client from pathogens and chemical exposure.',
              'To avoid using disinfectants.'
            ],
            correct: 1,
            explanation: 'PPE protects both technicians and clients from exposure to pathogens and harmful chemicals during nail services.'
          },
          {
            question: 'What type of ventilation system is recommended near workstations?',
            options: [
              'General air conditioning',
              'Local exhaust ventilation (LEV)',
              'Floor fans'
            ],
            correct: 1,
            explanation: 'Local exhaust ventilation (LEV) directly captures and removes fumes and dust at the source, providing the most effective protection.'
          },
          {
            question: 'How often should you clean and disinfect your workstation?',
            options: [
              'Once a day',
              'Once a week',
              'After every client'
            ],
            correct: 2,
            explanation: 'Workstations should be cleaned and disinfected after every client to prevent cross-contamination.'
          },
          {
            question: 'Why is it important to follow the manufacturer\'s recommended time for soaking tools in disinfectant?',
            options: [
              'To ensure the disinfectant solution is not wasted.',
              'To properly kill bacteria and viruses on the tools.',
              'To avoid damaging the tools\' surface.'
            ],
            correct: 1,
            explanation: 'Following the recommended soaking time ensures that bacteria and viruses are properly killed by the disinfectant.'
          },
          {
            question: 'What should you do before applying disinfectant to a surface or tool?',
            options: [
              'Heat the surface with a blow dryer.',
              'Remove all visible debris and dirt.',
              'Apply a top coat to protect the surface.'
            ],
            correct: 1,
            explanation: 'All visible debris and dirt must be removed before disinfection for the disinfectant to be effective.'
          },
          {
            question: 'When should gloves be worn during a nail service?',
            options: [
              'Only when using gel polish.',
              'Always, to prevent direct contact with the client\'s nails and any chemicals.',
              'Only when the client requests it.'
            ],
            correct: 1,
            explanation: 'Gloves should always be worn to prevent direct contact with clients\' nails and protect from chemical exposure.'
          }
        ]
      }
    },
    {
      id: 24,
      title: 'Client Consultation and Record Keeping',
      duration: '3 hours',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/Client-Consultation-Best-Practices',
        textContent: `# 📋 Module 5.2: Client Consultation and Record Keeping

## Learning Objectives
- Learn how to conduct thorough client consultations to understand preferences and assess nail health
- Understand the importance of maintaining detailed client records
- Discover best practices for handling client concerns and ensuring client satisfaction

## Section 1: Conducting Thorough Consultations (1 hour)

### A. The Purpose of a Client Consultation

#### Understanding Client Preferences:
- Identify the client's desired nail shape, length, and style
- Determine if they prefer natural-looking nails, bold designs, or a specific maintenance schedule

#### Assessing Nail Health:
- Examine the natural nail plate for signs of damage, weakness, or infection
- Discuss any prior issues with lifting, peeling, or allergic reactions
- Take note of any medical conditions, medications, or lifestyle factors that might affect nail health

#### Establishing Trust and Communication:
- Build rapport by actively listening and showing genuine interest in the client's needs
- Clarify expectations and explain the steps involved in the chosen service

### B. Key Questions to Ask During a Consultation
- What are your nail goals? (e.g., length, shape, color preference)
- Have you had any nail enhancements or treatments in the past?
- Do you have any allergies to products like acrylic, gel, or certain chemicals?
- How do you typically care for your nails between appointments?
- Are you looking for a long-term solution, or is this for a special occasion?

### C. Documenting Consultation Results
- Use a standardized form or digital system to record the client's responses
- Include notes on preferred products, nail conditions, and any specific requests
- Update this information at each visit to track changes and improvements

## Section 2: Keeping Detailed Client Records (1 hour)

### A. What to Include in Client Records:

#### Basic Information:
- Name, contact details, and preferred appointment times

#### Service History:
- Dates of past appointments
- Types of services performed (e.g., gel overlays, acrylic fills, nail art)

#### Product Usage:
- Brands and specific products used (base coats, top coats, gel colors, etc.)
- Notes on any product reactions or preferences

#### Client Preferences and Feedback:
- Favorite nail shapes, lengths, and color palettes
- Any designs or embellishments they particularly enjoyed

### B. Benefits of Detailed Record Keeping:

#### Improved Customer Service:
- Being able to recall past services and preferences shows clients that you value their loyalty
- Helps ensure consistent results, even if a different technician is involved

#### Better Troubleshooting:
- If a client experiences lifting, cracking, or other issues, reviewing their record can help identify possible causes

#### Legal and Compliance Needs:
- In case of complaints or disputes, having well-maintained records provides clarity and protection

### C. Tips for Maintaining Accurate Records:

#### Use a Reliable System:
- Choose digital software designed for salons, or keep organized, easily accessible physical records

#### Update Regularly:
- Add notes after each appointment to capture details while they're fresh

#### Protect Privacy:
- Follow local data protection regulations
- Keep client information secure and only share it with authorized personnel

## Section 3: Handling Client Concerns and Ensuring Satisfaction (1 hour)

### A. Common Client Concerns:

#### Product Sensitivities:
- Some clients may experience irritation or allergies
- Always ask about past reactions during the consultation and adjust products accordingly

#### Service Longevity Issues:
- Clients may report lifting, chipping, or cracking
- Review their records to see if a product switch, preparation method, or aftercare adjustment is needed

#### Design or Shape Preferences:
- Clients may feel a design doesn't match their original vision
- Ensure clear communication during the consultation, and don't hesitate to confirm details before starting

### B. Techniques for Resolving Concerns:

#### Listen and Validate:
- Let the client explain their issue without interruption
- Acknowledge their concerns and reassure them that you will address them

#### Propose Solutions:
- Offer to adjust the service at no extra charge (if reasonable) to meet their expectations
- Provide guidance on proper aftercare to improve results next time

#### Follow Up:
- After resolving the concern, follow up with the client within a week to ensure satisfaction
- Encourage them to provide feedback and update their records based on the solution provided

### C. Ensuring Ongoing Satisfaction:

#### Consistent Communication:
- Keep clients informed about new products, techniques, and promotions
- Send reminders for upcoming appointments and offer loyalty discounts

#### Continual Improvement:
- Stay up to date on new nail technologies and trends
- Offer clients new options for designs, finishes, and treatments

## Key Takeaways
- A thorough consultation helps identify client preferences and nail health conditions
- Keeping detailed records ensures consistent results, better troubleshooting, and improved customer service
- Handling client concerns with empathy and professionalism leads to better retention and positive word-of-mouth`
      }
    },
    {
      id: 25,
      title: 'Quiz: Client Consultation and Record Keeping',
      duration: '30 min',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the primary goal of conducting a client consultation?',
            options: [
              'To sell the most expensive products.',
              'To understand the client\'s preferences and assess their nail health.',
              'To reduce service time.',
              'To document the products available in the salon.'
            ],
            correct: 1,
            explanation: 'The primary goal of a client consultation is to understand their preferences and assess nail health to provide appropriate services.'
          },
          {
            question: 'What should you always examine during a client consultation?',
            options: [
              'The client\'s shoes.',
              'The condition of the natural nails.',
              'The client\'s choice of jewelry.',
              'The current salon\'s stock of nail polish.'
            ],
            correct: 1,
            explanation: 'Examining the condition of natural nails is essential to assess health and determine appropriate treatments.'
          },
          {
            question: 'Why is it important to ask clients about past product reactions?',
            options: [
              'To find out if they have used high-end products before.',
              'To ensure that any products used won\'t cause irritation or allergies.',
              'To encourage them to try a different brand of polish.',
              'To speed up the application process.'
            ],
            correct: 1,
            explanation: 'Asking about past reactions helps prevent allergic reactions and ensures client safety during services.'
          },
          {
            question: 'What key information should be included in a client\'s record?',
            options: [
              'Their favorite holiday destination.',
              'Services performed, products used, and preferred nail styles.',
              'The names of other salons they\'ve visited.',
              'The last time they purchased a nail file.'
            ],
            correct: 1,
            explanation: 'Client records should include service history, product usage, and preferences to ensure consistent quality service.'
          },
          {
            question: 'Why is it beneficial to keep detailed client records?',
            options: [
              'It reduces the time spent on consultations.',
              'It helps ensure consistent results and improves customer service.',
              'It allows the salon to charge higher fees.',
              'It eliminates the need for follow-up appointments.'
            ],
            correct: 1,
            explanation: 'Detailed records ensure consistent service quality and help build better customer relationships.'
          },
          {
            question: 'What is the best way to handle a client\'s concern about a service?',
            options: [
              'Ignore the concern and hope it resolves on its own.',
              'Offer to adjust the service and listen to their feedback.',
              'Blame the client for improper nail care.',
              'Suggest they visit another technician.'
            ],
            correct: 1,
            explanation: 'Listening to concerns and offering solutions demonstrates professionalism and builds client trust.'
          },
          {
            question: 'How often should you update a client\'s record?',
            options: [
              'Once every six months.',
              'Only if the client complains.',
              'After every appointment.',
              'Whenever the client tries a new polish color.'
            ],
            correct: 2,
            explanation: 'Client records should be updated after every appointment to maintain accurate, current information.'
          },
          {
            question: 'What is a key step in ensuring client satisfaction during the consultation?',
            options: [
              'Showing them the salon\'s latest social media post.',
              'Asking open-ended questions to fully understand their needs.',
              'Explaining why their preferences are not realistic.',
              'Offering them the most expensive treatment package.'
            ],
            correct: 1,
            explanation: 'Open-ended questions help understand client needs and ensure their expectations are met.'
          },
          {
            question: 'Why is it important to keep client records secure and private?',
            options: [
              'To prevent competitors from accessing client information.',
              'To comply with data protection regulations and maintain trust.',
              'To ensure the records can\'t be used by anyone else in the salon.',
              'To keep the salon\'s product information confidential.'
            ],
            correct: 1,
            explanation: 'Protecting client privacy complies with legal requirements and maintains professional trust.'
          },
          {
            question: 'What is the best way to handle a client who is unsure about what design or color they want?',
            options: [
              'Pick a design for them without consultation.',
              'Show them examples of past designs, suggest options, and let them decide.',
              'Tell them to come back after they\'ve decided.',
              'Use a neutral color so they don\'t have to make a decision.'
            ],
            correct: 1,
            explanation: 'Providing examples and suggestions while letting clients decide ensures they get what they want and feel involved in the process.'
          }
        ]
      }
    }
  ]
};
