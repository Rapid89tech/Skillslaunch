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
# Online Lecture: Introduction to Hairdressing
## 1.1 Understanding Hair Structure and Types

Hairdressing is both an art and a science. To become a skilled hair professional, it is essential to understand the structure of hair, different hair types, and key characteristics like porosity and elasticity.

## 🧬 Hair Structure: Layers & Roles

**Cuticle:** The tough, outer "shingle" layer formed of overlapping keratin cells. It protects the hair shaft and controls how moisture and substances get in or out.

**Cortex:** The thick middle layer made of fibrous keratin, providing strength, elasticity (via disulfide bonds), and housing melanin which gives hair its color.

**Medulla:** The soft inner core present in coarser hair; it's less structured and not always found in fine hair.

## 💇‍♀️ Hair Types: Shape & Texture

Hair types range from Straight → Wavy → Curly → Coily and are mainly determined by the shape of the hair follicle:
- Round follicles → straight hair
- Oval/slanted follicles → wavy to curly hair
- Flattened, twisted follicles → coily/kinky hair

The cortex shape (round vs flattened) dictates curl pattern.

## 💧 Hair Porosity & Elasticity

**Porosity** describes how readily hair absorbs and retains moisture—it's controlled by the cuticle's openness:
- **High porosity:** Gaps/open cuticle; absorbs moisture fast but loses it quickly → frizz, dryness. Common in curly/coily hair or hair exposed to heat/chemicals.
- **Low porosity:** Tightly closed cuticle; resists moisture entering but retains it well.
- **Medium (normal):** Balanced absorption and retention—ideal.

**Elasticity** is the hair's ability to stretch and return, thanks to cortex protein bonds:
- **Hydrogen bonds:** Temporary, affected by water/heat—allow temporary styling.
- **Disulfide bonds:** Stronger, permanent; give hair its natural shape and resilience.

## 🔄 Recap: Structure → Type → Porosity → Elasticity
Each hair strand is a layered structure whose shape determines your hair type:
- The cuticle regulates moisture flow (porosity).
- The cortex gives strength, color, curl pattern, and elasticity.
- The medulla, when present, is just a soft core in thicker strands.

---

# Anatomy of Hair: Cuticle, Cortex, Medulla

Hair is composed of three main layers that determine its strength, texture, and overall health.

## Cuticle
- The outermost layer of the hair shaft.
- Made of overlapping transparent scales that protect the inner layers.
- Responsible for hair shine and smoothness.
- Can be damaged by excessive heat, chemicals, and rough brushing.

## Cortex
- The thickest layer of the hair strand.
- Contains keratin proteins and melanin, which give hair its strength, elasticity, and color.
- Determines the hair's ability to be styled, curled, or straightened.
- Chemical treatments like coloring and perming affect the cortex.

## Medulla
- The innermost layer, present in some hair types.
- Composed of soft, loosely connected cells.
- More common in thick or coarse hair, often absent in fine hair.

---

# Different Hair Types: Straight, Wavy, Curly, Coily

Hair types vary based on genetic factors and are classified into four primary categories:

## Straight Hair (Type 1)
- Naturally smooth and shiny due to the intact cuticle layer.
- Resistant to curling but can become oily quickly.
- Requires volumizing products for added texture.

## Wavy Hair (Type 2)
- Falls between straight and curly hair.
- Forms loose S-shaped waves.
- Can be prone to frizz and benefits from lightweight moisturizing products.

## Curly Hair (Type 3)
- Defined curls ranging from loose loops to tight spirals.
- Prone to dryness due to the cuticle not lying flat.
- Requires hydrating products and minimal heat styling.

## Coily Hair (Type 4)
- Tightly coiled or kinky with a zig-zag pattern.
- Naturally dry and fragile due to minimal moisture retention.
- Needs deep conditioning and protective styling to maintain health.

---

# Hair Porosity and Elasticity

These characteristics determine how hair reacts to products and styling techniques.

## Hair Porosity
Refers to the hair's ability to absorb and retain moisture.

- **Low Porosity:** Cuticles are tightly closed; resistant to moisture and products.
- **Medium Porosity:** Well-balanced moisture absorption and retention.
- **High Porosity:** Cuticles are lifted; absorbs moisture quickly but loses it fast.

Proper hair care techniques include using lightweight products for low porosity hair and sealing moisture for high porosity hair.

## Hair Elasticity
Measures hair's ability to stretch and return to its original shape.

- **High Elasticity:** Strong and resistant to breakage.
- **Medium Elasticity:** Some flexibility, moderate strength.
- **Low Elasticity:** Weak, prone to snapping and breakage.

Strengthening treatments, such as protein-based conditioners, help improve elasticity.

---

# Conclusion

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