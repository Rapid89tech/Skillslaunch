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
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg border-l-4 border-pink-500">
              <h2 class="text-2xl font-bold text-gray-800 mb-4">🧪 Chemical Processes in Hairdressing</h2>
              <p class="text-gray-700 leading-relaxed">
                Chemical processes are fundamental to professional hairdressing, allowing stylists to permanently alter hair texture, create stunning curls, straighten hair, and correct color issues. This comprehensive lesson covers the essential chemical treatments every professional stylist should master.
              </p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">🎯 Lesson Objectives</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-pink-500 font-bold">•</span>
                  <span>Understand the fundamentals of perming and relaxing hair</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-pink-500 font-bold">•</span>
                  <span>Explore keratin treatments and smoothing systems</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-pink-500 font-bold">•</span>
                  <span>Learn color correction techniques for professional results</span>
                </li>
              </ul>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">💫 Perming Hair</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">What Is Perming?</h4>
                  <p class="text-gray-700">
                    A chemical process that alters hair's natural texture, creating curls or waves by restructuring the protein bonds in hair using perm rods and chemical solutions (alkaline or acid-based).
                  </p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">The Perming Process:</h4>
                  <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                    <li>Hair is wound onto perm rods</li>
                    <li>Waving lotion is applied, breaking down natural bonds</li>
                    <li>Hair is reshaped into the curl pattern of the rods</li>
                    <li>Neutralizer is applied to set the new shape and restore pH balance</li>
                  </ol>
                </div>

                <div class="bg-blue-100 p-4 rounded-lg">
                  <h4 class="font-semibold text-gray-800 mb-2">⚠️ Key Considerations:</h4>
                  <ul class="space-y-1 text-gray-700">
                    <li>• Hair health and porosity assessment</li>
                    <li>• Proper timing to avoid over-processing</li>
                    <li>• Always conduct strand tests</li>
                    <li>• Use quality products and follow manufacturer guidelines</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">🌿 Relaxing Hair</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">What Is Relaxing?</h4>
                  <p class="text-gray-700">
                    A chemical process used to straighten curly or textured hair by breaking down disulfide bonds in the hair shaft, using sodium hydroxide (lye) or calcium hydroxide (no-lye) relaxers.
                  </p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">The Relaxing Process:</h4>
                  <ol class="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                    <li>Apply relaxer evenly, avoiding scalp contact</li>
                    <li>Smooth hair to desired straightness</li>
                    <li>Rinse thoroughly and neutralize to halt the chemical process</li>
                  </ol>
                </div>

                <div class="bg-green-100 p-4 rounded-lg">
                  <h4 class="font-semibold text-gray-800 mb-2">✅ Best Practices:</h4>
                  <ul class="space-y-1 text-gray-700">
                    <li>• Always neutralize properly</li>
                    <li>• Avoid overlapping applications on previously relaxed hair</li>
                    <li>• Use post-relaxer treatments to restore moisture and protein</li>
                    <li>• Consider scalp sensitivity and timing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">✨ Keratin Treatments & Smoothing Systems</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">Keratin Treatments:</h4>
                  <p class="text-gray-700 mb-3">
                    Treatments that infuse hair with keratin (natural protein) to reduce frizz, improve manageability, and add shine. Applied with heat sealing using a flat iron.
                  </p>
                  
                  <div class="grid md:grid-cols-2 gap-4">
                    <div class="bg-purple-100 p-4 rounded-lg">
                      <h5 class="font-semibold text-gray-800 mb-2">💫 Benefits:</h5>
                      <ul class="space-y-1 text-gray-700 text-sm">
                        <li>• Smoother, more manageable hair</li>
                        <li>• Reduces blow-drying time</li>
                        <li>• Lasts several weeks to months</li>
                        <li>• Adds natural shine</li>
                      </ul>
                    </div>
                    
                    <div class="bg-purple-100 p-4 rounded-lg">
                      <h5 class="font-semibold text-gray-800 mb-2">⚠️ Considerations:</h5>
                      <ul class="space-y-1 text-gray-700 text-sm">
                        <li>• Some contain formaldehyde compounds</li>
                        <li>• Results vary by hair type</li>
                        <li>• Requires professional application</li>
                        <li>• Use sulfate-free maintenance products</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">Smoothing Systems:</h4>
                  <p class="text-gray-700">
                    Non-permanent treatments designed to eliminate frizz and enhance shine without completely altering natural curl patterns. Gentler alternative with temporary results lasting several weeks.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">🎨 Color Correction Techniques</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="font-semibold text-gray-800 mb-2">What Is Color Correction?</h4>
                  <p class="text-gray-700">
                    The process of fixing unwanted hair color results, such as brassy tones, uneven application, or incorrect shades. Often requires multiple steps and sessions.
                  </p>
                </div>
                
                <div>
                  <h4 class="font-semibold text-gray-800 mb-3">Common Issues & Solutions:</h4>
                  <div class="space-y-3">
                    <div class="bg-orange-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-gray-800">🧡 Brassy or Warm Tones:</h5>
                      <p class="text-gray-700 text-sm">Use blue or purple-based toners to neutralize orange or yellow undertones</p>
                    </div>
                    
                    <div class="bg-orange-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-gray-800">⚫ Overly Dark Results:</h5>
                      <p class="text-gray-700 text-sm">Gradual lightening with gentle lightener; use filler before darkening too-light hair</p>
                    </div>
                    
                    <div class="bg-orange-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-gray-800">🎭 Uneven Color:</h5>
                      <p class="text-gray-700 text-sm">Strand tests and sectioning to target specific areas; layer glazes for seamless blending</p>
                    </div>
                    
                    <div class="bg-orange-100 p-3 rounded-lg">
                      <h5 class="font-semibold text-gray-800">🌫️ Faded or Patchy Color:</h5>
                      <p class="text-gray-700 text-sm">Refresh with semi-permanent glosses; deep condition for even application</p>
                    </div>
                  </div>
                </div>

                <div class="bg-red-100 p-4 rounded-lg">
                  <h4 class="font-semibold text-gray-800 mb-2">🔑 Key Considerations:</h4>
                  <ul class="space-y-1 text-gray-700">
                    <li>• Always start with thorough consultation</li>
                    <li>• Work slowly and in stages</li>
                    <li>• Use gentle, high-quality products</li>
                    <li>• Understand client's hair history and goals</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">📚 Professional Development</h3>
              <div class="space-y-3">
                <p class="text-gray-700">
                  Chemical processes require continuous learning and practice. Consider pursuing advanced certifications and staying updated with the latest techniques and products.
                </p>
                
                <div class="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">📖 Recommended Resources:</h4>
                    <ul class="space-y-1 text-gray-700 text-sm">
                      <li>• Professional development classes</li>
                      <li>• Advanced certifications</li>
                      <li>• Trusted product brand training</li>
                      <li>• Online tutorials and workshops</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="font-semibold text-gray-800 mb-2">🎯 Practice Tips:</h4>
                    <ul class="space-y-1 text-gray-700 text-sm">
                      <li>• Always perform strand tests</li>
                      <li>• Document successful formulas</li>
                      <li>• Practice on mannequins first</li>
                      <li>• Stay updated on safety protocols</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-gray-800 mb-3">🌟 Key Takeaways</h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-pink-500 font-bold">✓</span>
                  <span>Chemical processes require thorough understanding of hair structure and chemistry</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-pink-500 font-bold">✓</span>
                  <span>Always prioritize hair health and client safety</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-pink-500 font-bold">✓</span>
                  <span>Proper consultation and strand testing are essential</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-pink-500 font-bold">✓</span>
                  <span>Color correction requires patience and skill</span>
                </li>
              </ul>
            </div>
          </div>
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