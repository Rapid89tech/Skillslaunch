
import type { Lesson } from '@/types/course';

export const lesson3PluginsInstruments: Lesson = {
  id: 14,
  title: 'Plug-ins and Virtual Instruments',
  duration: '55 min',
  type: 'video',
  content: {
    videoUrl: 'https://www.youtube.com/embed/zPGAJvI8d0Q',
    textContent: `
      <div class="space-y-8 animate-fade-in">
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
          <h2 class="text-4xl font-bold text-purple-700 mb-6 flex items-center">
            <span class="mr-4 text-5xl">🎚️</span>
            Plug-ins and Virtual Instruments
          </h2>
          
          <div class="bg-white p-6 rounded-xl shadow-md mb-8 border-l-4 border-purple-500">
            <h3 class="text-2xl font-semibold text-purple-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🎛️</span>
              Introduction to Plug-ins and Virtual Instruments
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-purple-700 mb-3">What Are Plug-ins?</h4>
                <p class="text-purple-600 text-sm">
                  Plug-ins are software extensions used within a DAW (Digital Audio Workstation) to process, generate, or manipulate audio. They can modify sound (effects) or produce sound (instruments).
                </p>
              </div>
              
              <div class="bg-pink-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-pink-700 mb-3">What Are Virtual Instruments?</h4>
                <p class="text-pink-600 text-sm">
                  Virtual instruments (VSTi) are software-based instruments that replicate real instruments or create new synthesized sounds using MIDI input.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-blue-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🔌</span>
              Types of Audio Effects Plug-ins
            </h3>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr class="bg-blue-50">
                    <th class="border border-gray-300 p-3 text-left font-semibold">Type</th>
                    <th class="border border-gray-300 p-3 text-left font-semibold">Function</th>
                    <th class="border border-gray-300 p-3 text-left font-semibold">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">EQ (Equalizer)</td>
                    <td class="border border-gray-300 p-3">Adjust frequency content</td>
                    <td class="border border-gray-300 p-3">FabFilter Pro-Q, Logic EQ</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Compression</td>
                    <td class="border border-gray-300 p-3">Controls dynamic range</td>
                    <td class="border border-gray-300 p-3">Waves CLA-2A, SSL Compressor</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Reverb</td>
                    <td class="border border-gray-300 p-3">Adds space/depth</td>
                    <td class="border border-gray-300 p-3">Valhalla Room, Lexicon PCM</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Delay</td>
                    <td class="border border-gray-300 p-3">Creates echo or repeats</td>
                    <td class="border border-gray-300 p-3">EchoBoy, H-Delay</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Distortion/Saturation</td>
                    <td class="border border-gray-300 p-3">Adds warmth, grit, or harmonics</td>
                    <td class="border border-gray-300 p-3">Decapitator, FabFilter Saturn</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Limiter</td>
                    <td class="border border-gray-300 p-3">Prevents clipping, maximizes volume</td>
                    <td class="border border-gray-300 p-3">iZotope Maximizer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-green-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🎹</span>
              Types of Virtual Instruments (VSTi)
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="text-lg font-semibold text-green-700 mb-3">A. Sample-Based Instruments</h4>
                <ul class="text-green-600 space-y-1 text-sm">
                  <li>• Use pre-recorded samples of real instruments</li>
                  <li>• Examples: Kontakt, Spitfire Audio, Addictive Drums</li>
                  <li>• Used for: Orchestral instruments, drums, pianos</li>
                </ul>
              </div>

              <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="text-lg font-semibold text-blue-700 mb-3">B. Synthesizers</h4>
                <ul class="text-blue-600 space-y-1 text-sm">
                  <li>• Generate sound using oscillators, filters, modulation</li>
                  <li>• Types: Subtractive, FM, wavetable, granular</li>
                  <li>• Examples: Serum, Massive X, Sylenth1, Omnisphere</li>
                </ul>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="text-lg font-semibold text-orange-700 mb-3">C. Drum Machines</h4>
                <ul class="text-orange-600 space-y-1 text-sm">
                  <li>• Mimic electronic or acoustic drums</li>
                  <li>• Examples: Battery, Superior Drummer, TR-808 plugins</li>
                  <li>• Essential for beat production and rhythm</li>
                </ul>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-purple-700 mb-3">D. ROMplers</h4>
                <ul class="text-purple-600 space-y-1 text-sm">
                  <li>• Playback instruments with limited tweakability</li>
                  <li>• Examples: Nexus, SampleTank</li>
                  <li>• Quick access to high-quality sounds</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🖥️</span>
              Plug-in Formats
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-indigo-700 mb-3">Common Formats:</h4>
                <ul class="text-indigo-600 space-y-2 text-sm">
                  <li>• <strong>VST/VST3:</strong> Windows, macOS (Cubase, Ableton, FL)</li>
                  <li>• <strong>AU (Audio Units):</strong> macOS only (Logic Pro)</li>
                  <li>• <strong>AAX:</strong> Pro Tools (professional studios)</li>
                  <li>• <strong>RTAS:</strong> Older Pro Tools format (mostly obsolete)</li>
                </ul>
              </div>

              <div class="bg-cyan-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-cyan-700 mb-3">Using Plug-ins in DAWs:</h4>
                <ul class="text-cyan-600 space-y-2 text-sm">
                  <li>• <strong>Insert Effects:</strong> Applied directly on a track</li>
                  <li>• <strong>Send/Return Effects:</strong> Applied via auxiliary track</li>
                  <li>• <strong>Instrument Tracks:</strong> Host virtual instruments</li>
                  <li>• <strong>Plugin Chain:</strong> Order of effects matters</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-pink-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">💡</span>
              Recommended Plug-in Suites
            </h3>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr class="bg-pink-50">
                    <th class="border border-gray-300 p-3 text-left font-semibold">Suite</th>
                    <th class="border border-gray-300 p-3 text-left font-semibold">Contents</th>
                    <th class="border border-gray-300 p-3 text-left font-semibold">Ideal For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Waves Gold/Bundles</td>
                    <td class="border border-gray-300 p-3">EQ, compressor, delay, reverb, etc.</td>
                    <td class="border border-gray-300 p-3">General mixing</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">iZotope RX/Neutron/Ozone</td>
                    <td class="border border-gray-300 p-3">Restoration, mixing, mastering</td>
                    <td class="border border-gray-300 p-3">Post-production</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">FabFilter Suite</td>
                    <td class="border border-gray-300 p-3">High-quality EQ, compression, saturation</td>
                    <td class="border border-gray-300 p-3">Precise editing</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Native Instruments Komplete</td>
                    <td class="border border-gray-300 p-3">Huge library of instruments & effects</td>
                    <td class="border border-gray-300 p-3">Composition, scoring</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-orange-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🧰</span>
              Creative Use of Plug-ins
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-orange-700 mb-3">Creative Techniques:</h4>
                <ul class="text-orange-600 space-y-1 text-sm">
                  <li>• Automate effects: change reverb over time</li>
                  <li>• Parallel compression: blend compressed + dry signals</li>
                  <li>• Layer synths: combine multiple virtual instruments</li>
                  <li>• Sound design: use modulation, filtering, distortion</li>
                </ul>
              </div>

              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-teal-700 mb-3">Selection Criteria:</h4>
                <ul class="text-teal-600 space-y-1 text-sm">
                  <li>• <strong>Purpose:</strong> Mixing, mastering, sound design</li>
                  <li>• <strong>CPU Usage:</strong> Some plugins are resource-heavy</li>
                  <li>• <strong>User Interface:</strong> Intuitive layout helps workflow</li>
                  <li>• <strong>Compatibility:</strong> Ensure DAW and OS support</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
            <h3 class="text-xl font-semibold text-red-800 mb-4 flex items-center">
              <span class="mr-3 text-2xl">⚠️</span>
              Common Mistakes with Plug-ins
            </h3>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div class="text-red-700">
                  <strong>Over-processing:</strong> Unnatural or fatiguing sound
                </div>
                <div class="text-red-700">
                  <strong>Using too many plug-ins:</strong> Confuses mix and wastes CPU
                </div>
              </div>
              <div class="space-y-3">
                <div class="text-red-700">
                  <strong>Wrong plug-in for source:</strong> Mismatched application
                </div>
                <div class="text-red-700">
                  <strong>Ignoring gain staging:</strong> Causes distortion
                </div>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
            <h3 class="text-xl font-semibold text-green-800 mb-3 flex items-center">
              <span class="mr-3 text-2xl">✅</span>
              Key Takeaway
            </h3>
            <p class="text-green-700 text-lg">
              Plug-ins and virtual instruments expand the creative and technical power of a DAW. Use audio effects for mixing and processing, virtual instruments for sound generation via MIDI. Always balance creative intent with technical clarity—trust your ears over visuals!
            </p>
          </div>
        </div>
      </div>
    `
  }
};
