import { Module } from '@/types/course';

export const module12ClientConsultation: Module = {
  id: 12,
  title: 'Client Consultation and Business Skills', 
  description: 'Master professional client consultation techniques, understanding client needs, recommending suitable styles and treatments, and managing client concerns effectively.',
  lessons: [
    {
      id: 48,
      title: 'Conducting a Professional Client Consultation',
      duration: '50 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/watch?v=nbkg5VuWunk',
        textContent: `# **Module 12: Client Consultation and Business Skills**

## 💼 Client Consultation and Business Skills

Professional client consultation is the foundation of successful hair services. This comprehensive lesson will teach you how to understand client needs, recommend appropriate treatments, and manage concerns effectively to build lasting client relationships.

## 🎯 Learning Objectives

• Understand how to identify and address client needs and expectations
• Learn to recommend appropriate hairstyles and treatments based on client preferences
• Develop strategies for managing client concerns and handling hair-related challenges

## 🤝 Understanding Client Needs and Expectations

### The Consultation Process

• Initial Interaction: Welcome clients in a professional and friendly manner, create a comfortable, relaxed environment where clients feel heard, and establish trust from the first moment of contact.
• Active Listening Techniques: Use open-ended questions to learn about lifestyle, preferences, and hair goals, confirm understanding by paraphrasing what the client says, and note any past experiences—positive or negative—with previous stylists.
• Identifying Key Needs: Determine what the client wants to change or maintain, recognize hair-related challenges (dryness, frizz, thinning, color fading), and establish client priorities (easy maintenance, trendy style, hair health).

### Managing Expectations

• Setting Realistic Outcomes: Be transparent about what's achievable in one session, explain factors that influence results, and discuss hair texture and previous treatments.
• Providing Visual Examples: Use photos, charts, or color swatches, show potential outcomes clearly, and clarify ongoing upkeep requirements.

## ✨ Recommending Suitable Styles and Treatments

### Matching Styles to Personalities and Lifestyles

• Lifestyle Considerations: Recommend low-maintenance styles for busy clients and intricate options for those who enjoy frequent styling.
• Face Shape and Features: Suggest cuts that complement facial structure and enhance natural features using highlights or layers.
• Hair Texture and Length: Choose styles that work with natural texture and discuss options for desired length changes.

### Treatment Recommendations

• Addressing Common Conditions: Conditioning treatments for dry/damaged hair, smoothing systems for frizz control, color services for enhancement or correction.
• Explaining Benefits: Educate on home maintenance, highlight professional follow-up importance, and provide realistic timeline expectations.

## 🛡️ Managing Client Concerns and Hair Conditions

### Common Client Concerns

• Previous Bad Experiences: Listen empathetically and reassure with examples of expertise and clear action plans.
• Uncertainty or Indecision: Guide clients by presenting tailored options and explaining pros and cons of each approach.
• Time and Budget Constraints: Be upfront about costs and suggest phased approaches when budget or time is limited.

### Handling Hair Conditions

• Damage or Breakage: Identify over-processed hair and offer strengthening treatments with gentle care instructions.
• Thinning or Hair Loss: Discuss causes, suggest volumizing styles, and refer to specialists when appropriate.
• Color Issues: Correct uneven tones with appropriate toners and propose subtle enhancements.

## 🏆 Tips for Building Client Trust and Retention

• Professional Practices: Maintain professional demeanor throughout consultation, follow up after appointments to check satisfaction, keep detailed records of client preferences and services, and provide personalized experiences on return visits.
• Communication Excellence: Listen actively and understand client goals completely, recommend treatments based on hair type and lifestyle, manage concerns with empathy and clear communication, and continuously improve consultation skills.

## 🌟 Key Takeaways

• Client consultation is the foundation of professional hair services
• Active listening and empathy build trust and understanding
• Matching recommendations to lifestyle ensures client satisfaction
• Professional follow-up and record-keeping enhance client relationships
        `
      }
    },
    {
      id: 49,
      title: 'Client Consultation Quiz',
      duration: '15 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the first step in a professional client consultation?',
            options: [
              'Recommending a style you think would look good',
              'Listening to the client\'s needs and preferences',
              'Starting the haircut or treatment right away'
            ],
            correct: 1,
            explanation: 'Listening to the client\'s needs and preferences is the foundation of a successful consultation and builds trust from the beginning.'
          },
          {
            question: 'Why is it important to understand a client\'s lifestyle before suggesting a style?',
            options: [
              'So you can give them a style that suits their everyday routine',
              'To ensure the client comes back for more frequent appointments',
              'So you know what products to sell them after the appointment'
            ],
            correct: 0,
            explanation: 'Understanding lifestyle ensures the recommended style will be practical and maintainable for the client\'s daily routine.'
          },
          {
            question: 'When a client mentions a past negative experience with another stylist, what is the best approach?',
            options: [
              'Reassure them and clearly outline your plan to achieve their desired look',
              'Quickly move on and start the treatment',
              'Tell them that the previous stylist likely used the wrong technique'
            ],
            correct: 0,
            explanation: 'Reassuring the client and providing a clear plan helps rebuild trust and confidence in your professional abilities.'
          },
          {
            question: 'If a client has damaged or brittle hair, what would be the most suitable recommendation?',
            options: [
              'Proceed with any color or chemical treatment as planned',
              'Suggest a strengthening treatment and advise on gentle at-home care',
              'Recommend a permanent straightening treatment'
            ],
            correct: 1,
            explanation: 'Damaged hair requires strengthening treatments and gentle care to restore health before any further chemical processes.'
          },
          {
            question: 'What is a key benefit of using open-ended questions during the consultation?',
            options: [
              'It encourages the client to provide detailed information about their preferences',
              'It helps you save time by getting quick "yes" or "no" answers',
              'It allows you to select the products you think the client should buy'
            ],
            correct: 0,
            explanation: 'Open-ended questions encourage clients to share detailed information, helping you understand their needs better.'
          },
          {
            question: 'What would you do if a client is unsure about the style they want?',
            options: [
              'Make a decision for them and begin the service',
              'Present a few tailored options and explain the benefits of each',
              'Postpone the consultation until they can decide'
            ],
            correct: 1,
            explanation: 'Presenting tailored options with explanations helps guide indecisive clients toward the best choice for their needs.'
          },
          {
            question: 'How should you address a client\'s concerns about the cost of a recommended treatment?',
            options: [
              'Offer a detailed explanation of the benefits and suggest a phased approach',
              'Insist on the treatment as the only option',
              'Ignore the concern and proceed with the appointment'
            ],
            correct: 0,
            explanation: 'Explaining benefits and suggesting phased approaches shows understanding and provides flexible solutions.'
          },
          {
            question: 'When recommending a new style, why is it important to consider the client\'s natural hair texture?',
            options: [
              'It helps ensure the style will be easy to maintain',
              'It allows you to sell them more styling products',
              'It prevents you from having to adjust the style after the appointment'
            ],
            correct: 0,
            explanation: 'Considering natural hair texture ensures the recommended style works with the hair\'s natural characteristics for easier maintenance.'
          },
          {
            question: 'What should you do if you discover during the consultation that the client\'s hair is thinning?',
            options: [
              'Suggest a scalp treatment or volume-boosting style and provide supportive guidance',
              'Tell them to seek help from a medical professional and end the consultation',
              'Avoid mentioning it and proceed with the appointment'
            ],
            correct: 0,
            explanation: 'Offering supportive treatments and styling options while being sensitive to the client\'s concerns shows professional care.'
          },
          {
            question: 'What is one of the most important factors in ensuring a successful client consultation?',
            options: [
              'Quickly recommending a trendy style before listening to the client',
              'Being empathetic, communicative, and fully understanding the client\'s needs',
              'Offering as many products as possible during the consultation'
            ],
            correct: 1,
            explanation: 'Empathy, clear communication, and understanding client needs are fundamental to successful consultations and client satisfaction.'
          }
        ]
      }
    }
  ]
};