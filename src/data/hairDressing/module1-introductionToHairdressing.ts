import { Module } from '@/types/course';

export const module1IntroductionToHairdressing: Module = {
  id: 1,
  title: 'Introduction to Hairdressing',
  description: 'Understanding hair structure, types, porosity, and elasticity fundamentals',
  lessons: [
    {
      id: 1,
      title: 'Understanding Hair Structure and Types',
      duration: '45 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/0pUd9qHtfMU',
        textContent: `
# **1.1 Understanding Hair Structure and Types**

Hairdressing is both an art and a science. To become a skilled hair professional, it is essential to understand the structure of hair, different hair types, and key characteristics like porosity and elasticity.

🧬 Hair Structure: Layers & Roles

https://youtu.be/0pUd9qHtfMU  
Hair is composed of three main layers that determine its strength, texture, and overall health. These layers work together to protect the hair, provide structural integrity, and influence how it responds to styling and treatments.

Cuticle: The Protective Outer Layer

https://youtu.be/5zqN7kX0ZfA  
The cuticle is the outermost layer of the hair shaft, acting as a barrier against environmental damage.  
// ... (continues with the full markdown for this lesson, as previewed above) ...
Conclusion  
Understanding hair structure, types, porosity, and elasticity is fundamental in hairdressing. By identifying these characteristics, hair professionals can choose the right products, techniques, and treatments to enhance hair health and styling outcomes. Mastery of these concepts lays the foundation for becoming a skilled hairdresser.
        `
      }
    },
    {
      id: 2,
      title: 'Online Quiz: Introduction to Hairdressing',
      duration: '15 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the outermost layer of the hair called?',
            options: ['Cortex', 'Medulla', 'Cuticle', 'Keratin'],
            correct: 2,
            explanation: 'The cuticle is the outermost protective layer of the hair shaft, made of overlapping scales that protect the inner layers.'
          },
          {
            question: 'Which layer of the hair contains keratin and melanin?',
            options: ['Cuticle', 'Cortex', 'Medulla', 'Follicle'],
            correct: 1,
            explanation: 'The cortex is the thickest layer that contains keratin proteins for strength and melanin for color.'
          },
          {
            question: 'Which hair type is naturally the most resistant to curling?',
            options: ['Wavy', 'Straight', 'Curly', 'Coily'],
            correct: 1,
            explanation: 'Straight hair (Type 1) is naturally resistant to curling due to its round follicle shape and smooth cuticle.'
          },
          {
            question: 'What type of hair porosity absorbs and retains moisture well?',
            options: ['Low Porosity', 'Medium Porosity', 'High Porosity', 'No Porosity'],
            correct: 1,
            explanation: 'Medium porosity hair has a well-balanced ability to absorb and retain moisture, making it the ideal porosity level.'
          },
          {
            question: 'What is a common characteristic of coily hair?',
            options: ['Lies flat and smooth', 'Forms an S-shaped wave', 'Naturally dry and fragile', 'Resistant to breakage'],
            correct: 2,
            explanation: 'Coily hair (Type 4) is naturally dry and fragile due to minimal moisture retention caused by its tightly coiled structure.'
          },
          {
            question: 'What is the primary role of the cuticle in hair structure?',
            options: ['Determines hair color', 'Protects the inner layers', 'Provides moisture to the scalp', 'Affects hair elasticity'],
            correct: 1,
            explanation: 'The cuticle serves as the protective outer layer that shields the inner cortex and medulla from damage.'
          },
          {
            question: 'Which of the following describes low porosity hair?',
            options: ['Quickly absorbs moisture', 'Retains moisture but resists absorption', 'Lacks elasticity', 'Becomes greasy within minutes'],
            correct: 1,
            explanation: 'Low porosity hair has tightly closed cuticles that resist moisture absorption but retain it well once absorbed.'
          },
          {
            question: 'Which hair type is most prone to dryness due to minimal moisture retention?',
            options: ['Straight', 'Wavy', 'Curly', 'Coily'],
            correct: 3,
            explanation: 'Coily hair is most prone to dryness because its structure makes it difficult for natural oils to travel down the hair shaft.'
          },
          {
            question: 'What does hair elasticity refer to?',
            options: ['The ability of hair to stretch and return to its original shape', 'The ability of hair to absorb water', 'The way hair holds color', 'The level of natural oils in hair'],
            correct: 0,
            explanation: 'Hair elasticity measures the hair\'s ability to stretch and return to its original shape without breaking.'
          },
          {
            question: 'How can high porosity hair be best maintained?',
            options: ['Avoiding all moisture', 'Using heavy creams and sealing with oils', 'Applying heat frequently', 'Washing hair daily'],
            correct: 1,
            explanation: 'High porosity hair benefits from heavy creams and sealing with oils to help retain moisture that it loses quickly.'
          }
        ]
      }
    }
  ]
};