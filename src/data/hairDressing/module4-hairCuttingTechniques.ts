import { Module } from '@/types/course';

export const module4HairCuttingTechniques: Module = {
  id: 4,
  title: 'Hair Cutting Techniques',
  description: 'Master basic hair cutting styles including one-length cuts, layered cuts, bob and pixie cuts with proper technique and precision',
  lessons: [
    {
      id: 11,
      title: 'Basic Hair Cutting Styles',
      duration: '60 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://youtu.be/Hrv0q_xLXFo',
        textContent: `# ✂️ Basic Hair Cutting Styles

Hair cutting is a fundamental skill in hairdressing that requires precision, technique, and creativity. This lecture explores the key basic cutting styles, including the one-length cut, layered cut, and short styles like bob and pixie cuts.

## 1. One-Length Cut

### Definition
A one-length cut, also known as a blunt cut, involves trimming all hair to the same length without adding layers or texture. It is commonly used for straight and sleek hairstyles.

### Features and Benefits
- **Provides a strong, structured shape**
- **Adds weight and density** to fine or thin hair
- **Works well for medium to long hair lengths**
- **Easy to maintain and style**

### Technique
1. **Sectioning** – Divide the hair into clean, even sections for precision
2. **Cutting** – Use a straight cutting technique with sharp scissors to ensure uniform length
3. **Checking Symmetry** – Compare both sides and refine the cut if needed
4. **Finalizing** – Blow-dry and use finishing shears for a polished look

## 2. Layered Cut

### Definition
A layered cut involves cutting different lengths throughout the hair to create dimension, movement, and volume. It is popular among clients seeking a dynamic and lightweight style.

### Features and Benefits
- **Enhances natural waves and curls**
- **Reduces bulk in thick hair** while adding volume to thin hair
- **Provides versatility** for styling and updos
- **Suitable for all hair lengths and textures**

### Technique
1. **Determine Layering Type** – Choose from short, medium, or long layers based on the client's hair texture and desired look
2. **Section the Hair** – Divide the hair into top, middle, and bottom sections for precision
3. **Cut at an Angle** – Use point cutting or slide cutting to create seamless layers
4. **Blend the Layers** – Soften the transitions to avoid harsh lines
5. **Style and Finish** – Blow-dry and refine with texturizing shears if needed

## 3. Bob and Pixie Cuts

### Bob Cut

#### Definition
A bob cut is a short-to-medium length style where the hair is typically cut straight around the head at jaw level. There are variations such as the blunt bob, asymmetrical bob, and textured bob.

#### Features and Benefits
- **Frames the face beautifully**
- **Suitable for all hair textures**
- **Can be styled sleek or wavy**
- **Easy to maintain and professional-looking**

#### Technique
1. **Section the Hair** – Start from the nape and work upwards
2. **Establish the Length** – Use a guide at the back and cut in sections
3. **Precision Cutting** – Ensure the front and back are symmetrical
4. **Styling Options** – Blow-dry smooth for a sleek look or add waves for texture

### Pixie Cut

#### Definition
A pixie cut is an ultra-short style, often tapered at the back and sides, with slightly longer layers on top for styling versatility.

#### Features and Benefits
- **Low-maintenance and stylish**
- **Highlights facial features and bone structure**
- **Can be styled in various ways**, from sleek to tousled
- **Works well with different hair textures**

#### Technique
1. **Determine the Desired Length** – Customize the cut based on the client's face shape and preference
2. **Use Clippers or Scissors** – For a tapered effect, use clippers on the sides and scissors for the top
3. **Texturizing** – Create movement by point cutting the top layers
4. **Styling** – Use pomades, waxes, or lightweight gels to achieve different looks

## Professional Tips

### ✂️ Cutting Fundamentals:
- Always use sharp, professional scissors
- Maintain proper sectioning for precision
- Check symmetry frequently during the cut
- Consider the client's face shape and hair texture

### 🎯 Style Considerations:
- One-length cuts work best for straight, fine hair
- Layered cuts enhance natural texture and movement
- Bob cuts are versatile and suit most face shapes
- Pixie cuts require confidence and proper styling products

## Conclusion

Mastering basic hair cutting techniques is essential for any professional hairdresser. Whether performing a one-length cut for structure, layered cuts for movement, or short styles like bobs and pixie cuts for versatility, understanding these styles allows for personalized and professional haircuts that meet client expectations.

### Key Takeaways:
- Precision and technique are fundamental to successful cuts
- Different cuts serve different hair types and client needs
- Proper sectioning and symmetry checking are crucial
- Practice and patience lead to mastery of these essential skills`
      }
    },
    {
      id: 12,
      title: 'Quiz: Hair Cutting Techniques',
      duration: '20 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the outermost layer of the hair called?',
            options: [
              'Cortex',
              'Medulla',
              'Cuticle',
              'Keratin'
            ],
            correct: 2,
            explanation: 'The cuticle is the outermost protective layer of the hair shaft that protects the inner layers from damage.'
          },
          {
            question: 'Which layer of the hair contains keratin and melanin?',
            options: [
              'Cuticle',
              'Cortex',
              'Medulla',
              'Follicle'
            ],
            correct: 1,
            explanation: 'The cortex is the middle layer of the hair shaft that contains keratin (protein) and melanin (pigment that gives hair its color).'
          },
          {
            question: 'Which hair type is naturally the most resistant to curling?',
            options: [
              'Wavy',
              'Straight',
              'Curly',
              'Coily'
            ],
            correct: 1,
            explanation: 'Straight hair has a smooth structure that makes it naturally resistant to curling and tends to hold curls for shorter periods.'
          },
          {
            question: 'What type of hair porosity absorbs and retains moisture well?',
            options: [
              'Low Porosity',
              'Medium Porosity',
              'High Porosity',
              'No Porosity'
            ],
            correct: 1,
            explanation: 'Medium porosity hair has a balanced ability to absorb moisture and retain it, making it the most manageable hair type.'
          },
          {
            question: 'What is a common characteristic of coily hair?',
            options: [
              'Lies flat and smooth',
              'Forms an S-shaped wave',
              'Naturally dry and fragile',
              'Resistant to breakage'
            ],
            correct: 2,
            explanation: 'Coily hair has tight curls or coils that make it naturally dry and fragile because natural oils have difficulty traveling down the hair shaft.'
          },
          {
            question: 'What is the primary role of the cuticle in hair structure?',
            options: [
              'Determines hair color',
              'Protects the inner layers',
              'Provides moisture to the scalp',
              'Affects hair elasticity'
            ],
            correct: 1,
            explanation: 'The cuticle acts as a protective barrier for the inner layers of the hair shaft, preventing damage and moisture loss.'
          },
          {
            question: 'Which of the following describes low porosity hair?',
            options: [
              'Quickly absorbs moisture',
              'Retains moisture but resists absorption',
              'Lacks elasticity',
              'Becomes greasy within minutes'
            ],
            correct: 1,
            explanation: 'Low porosity hair has tightly closed cuticles that resist moisture absorption but once moisturized, it retains moisture well.'
          },
          {
            question: 'Which hair type is most prone to dryness due to minimal moisture retention?',
            options: [
              'Straight',
              'Wavy',
              'Curly',
              'Coily'
            ],
            correct: 3,
            explanation: 'Coily hair is most prone to dryness because its tight curl pattern prevents natural oils from traveling down the hair shaft effectively.'
          },
          {
            question: 'What does hair elasticity refer to?',
            options: [
              'The ability of hair to stretch and return to its original shape',
              'The ability of hair to absorb water',
              'The way hair holds color',
              'The level of natural oils in hair'
            ],
            correct: 0,
            explanation: 'Hair elasticity refers to the hair\'s ability to stretch when wet and return to its original length without breaking, indicating healthy hair.'
          },
          {
            question: 'How can high porosity hair be best maintained?',
            options: [
              'Avoiding all moisture',
              'Using heavy creams and sealing with oils',
              'Applying heat frequently',
              'Washing hair daily'
            ],
            correct: 1,
            explanation: 'High porosity hair requires heavy moisturizers and oils to seal the cuticles and prevent rapid moisture loss.'
          }
        ]
      }
    }
  ]
};