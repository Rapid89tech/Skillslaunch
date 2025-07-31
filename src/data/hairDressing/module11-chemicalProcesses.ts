import { Module } from '@/types/course';

export const module11ChemicalProcesses: Module = {
  id: 11,
  title: 'Chemical Processes in Hairdressing',
  description: 'Master chemical processes including perming, relaxing, keratin treatments, and color correction techniques for professional hair styling.',
  lessons: [
    {
      id: 46,
      title: 'Chemical Processes in Hairdressing',
      duration: '45 minutes',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/watch?v=8X4LeI1TsKQ',
        textContent: `# **Module 11: Chemical Processes in Hairdressing**

## 🧪 Understanding Chemical Processes

Chemical processes are fundamental to professional hairdressing, allowing stylists to permanently alter hair texture, create stunning curls, straighten hair, and correct color issues. This comprehensive lesson covers the essential chemical treatments every professional stylist should master.

### 🎯 Lesson Objectives

- Understand the fundamentals of perming and relaxing hair
- Explore keratin treatments and smoothing systems
- Learn color correction techniques for professional results

### 💫 Perming Hair

**What Is Perming?**
A chemical process that alters hair's natural texture, creating curls or waves by restructuring the protein bonds in hair using perm rods and chemical solutions (alkaline or acid-based).

**The Perming Process:**
1. Hair is wound onto perm rods
2. Waving lotion is applied, breaking down natural bonds
3. Hair is reshaped into the curl pattern of the rods
4. Neutralizer is applied to set the new shape and restore pH balance

**⚠️ Key Considerations:**
- Hair health and porosity assessment
- Proper timing to avoid over-processing
- Always conduct strand tests
- Use quality products and follow manufacturer guidelines

### 🌿 Relaxing Hair

**What Is Relaxing?**
A chemical process used to straighten curly or textured hair by breaking down disulfide bonds in the hair shaft, using sodium hydroxide (lye) or calcium hydroxide (no-lye) relaxers.

**The Relaxing Process:**
1. Apply relaxer evenly, avoiding scalp contact
2. Smooth hair to desired straightness
3. Rinse thoroughly and neutralize to halt the chemical process

**✅ Best Practices:**
- Always neutralize properly
- Avoid overlapping applications on previously relaxed hair
- Use post-relaxer treatments to restore moisture and protein
- Consider scalp sensitivity and timing

### ✨ Keratin Treatments & Smoothing Systems

**Keratin Treatments:**
Treatments that infuse hair with keratin (natural protein) to reduce frizz, improve manageability, and add shine. Applied with heat sealing using a flat iron.

**Benefits:**
- Smoother, more manageable hair
- Reduces blow-drying time
- Lasts several weeks to months
- Adds natural shine

**Considerations:**
- Some contain formaldehyde compounds
- Results vary by hair type
- Requires professional application
- Use sulfate-free maintenance products

**Smoothing Systems:**
Non-permanent treatments designed to eliminate frizz and enhance shine without completely altering natural curl patterns. Gentler alternative with temporary results lasting several weeks.

### 🎨 Color Correction Techniques

**What Is Color Correction?**
The process of fixing unwanted hair color results, such as brassy tones, uneven application, or incorrect shades. Often requires multiple steps and sessions.

**Common Issues & Solutions:**
- **Brassy or Warm Tones:** Use blue or purple-based toners to neutralize orange or yellow undertones
- **Overly Dark Results:** Gradual lightening with gentle lightener; use filler before darkening too-light hair
- **Uneven Color:** Strand tests and sectioning to target specific areas; layer glazes for seamless blending
- **Faded or Patchy Color:** Refresh with semi-permanent glosses; deep condition for even application

**🔑 Key Considerations:**
- Always start with thorough consultation
- Work slowly and in stages
- Use gentle, high-quality products
- Understand client's hair history and goals

## 📚 Professional Development

Chemical processes require continuous learning and practice. Consider pursuing advanced certifications and staying updated with the latest techniques and products.

### 📖 Recommended Resources:
- Professional development classes
- Advanced certifications
- Trusted product brand training
- Online tutorials and workshops

### 🎯 Practice Tips:
- Always perform strand tests
- Document successful formulas
- Practice on mannequins first
- Stay updated on safety protocols

## 🌟 Key Takeaways

- Chemical processes require thorough understanding of hair structure and chemistry
- Always prioritize hair health and client safety
- Proper consultation and strand testing are essential
- Color correction requires patience and skill
        `
      }
    },
    {
      id: 47,
      title: 'Chemical Processes Quiz',
      duration: '15 minutes',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the primary purpose of perming hair?',
            options: [
              'To straighten the hair permanently',
              'To create curls or waves by altering the hair\'s protein structure',
              'To improve hair\'s natural shine and texture'
            ],
            correct: 1,
            explanation: 'Perming creates curls or waves by restructuring the protein bonds in hair using chemical solutions and perm rods.'
          },
          {
            question: 'Which type of relaxer is known to be more gentle on the scalp?',
            options: [
              'Sodium hydroxide (lye) relaxer',
              'Ammonium thioglycolate relaxer',
              'Calcium hydroxide (no-lye) relaxer'
            ],
            correct: 2,
            explanation: 'No-lye relaxers (calcium hydroxide) are generally considered gentler on the scalp compared to lye relaxers.'
          },
          {
            question: 'What is a key benefit of a keratin treatment?',
            options: [
              'Permanently straightens the hair',
              'Reduces frizz and adds shine without altering natural curl patterns',
              'Changes the natural hair color'
            ],
            correct: 1,
            explanation: 'Keratin treatments reduce frizz and add shine while maintaining the hair\'s natural texture, unlike permanent straightening.'
          },
          {
            question: 'What is the main difference between a keratin treatment and a smoothing system?',
            options: [
              'Keratin treatments contain more chemicals than smoothing systems',
              'Smoothing systems provide longer-lasting results than keratin treatments',
              'Smoothing systems tend to be less intense and more temporary than keratin treatments'
            ],
            correct: 2,
            explanation: 'Smoothing systems are generally gentler and more temporary than keratin treatments, offering shorter-term results.'
          },
          {
            question: 'What is the most common issue addressed by color correction?',
            options: [
              'Enhancing natural shine',
              'Fixing unwanted brassy or uneven tones',
              'Completely changing the hair\'s texture'
            ],
            correct: 1,
            explanation: 'Color correction primarily addresses unwanted brassy tones, uneven color application, and incorrect shades.'
          },
          {
            question: 'Which technique is best for neutralizing orange or yellow undertones?',
            options: [
              'Applying a blue or purple-based toner',
              'Using a high-lift permanent color',
              'Adding a filler before lightening'
            ],
            correct: 0,
            explanation: 'Blue and purple-based toners neutralize orange and yellow undertones respectively, following color theory principles.'
          },
          {
            question: 'Why is a strand test important before performing chemical treatments?',
            options: [
              'It helps determine the best application method',
              'It shows how the hair will react to the treatment without risking all the hair',
              'It reduces the overall processing time'
            ],
            correct: 1,
            explanation: 'Strand tests allow you to assess how the hair will react to chemicals without risking damage to the entire head of hair.'
          },
          {
            question: 'What should you always do after applying a relaxer?',
            options: [
              'Rinse and neutralize to stop the chemical process',
              'Apply heat to help the relaxer set',
              'Use a deep conditioning treatment immediately'
            ],
            correct: 0,
            explanation: 'Neutralizing is crucial after relaxing to stop the chemical process and prevent over-processing or damage.'
          },
          {
            question: 'Which of the following is NOT a key step in color correction?',
            options: [
              'Applying a pre-lightening agent',
              'Strand testing for accurate results',
              'Skipping the conditioning step to avoid altering the new color'
            ],
            correct: 2,
            explanation: 'Conditioning is essential in color correction to maintain hair health and ensure even color application.'
          },
          {
            question: 'When performing a keratin treatment, why is it important to follow manufacturer\'s instructions carefully?',
            options: [
              'To avoid overprocessing the hair',
              'To ensure the product lasts as long as possible',
              'Both a and b'
            ],
            correct: 2,
            explanation: 'Following manufacturer instructions prevents overprocessing and ensures optimal, long-lasting results from keratin treatments.'
          }
        ]
      }
    }
  ]
};