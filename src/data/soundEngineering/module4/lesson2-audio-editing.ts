
import type { Lesson } from '@/types/course';

export const lesson2AudioEditing: Lesson = {
  id: 13,
  title: 'Audio Editing and Arrangement',
  duration: '65 min',
  type: 'video',
  content: {
    videoUrl: 'https://www.youtube.com/embed/qJq7TgHsXqE',
    textContent: `
      <div class="space-y-8 animate-fade-in">
        <div class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
          <h2 class="text-4xl font-bold text-green-700 mb-6 flex items-center">
            <span class="mr-4 text-5xl">🎧</span>
            Audio Editing and Arrangement
          </h2>
          
          <div class="bg-white p-6 rounded-xl shadow-md mb-8 border-l-4 border-green-500">
            <h3 class="text-2xl font-semibold text-green-800 mb-4 flex items-center">
              <span class="mr-3 text-3xl">🎙️</span>
              Introduction to Audio Editing and Arrangement
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-green-700 mb-3">🔊 What is Audio Editing?</h4>
                <p class="text-green-600 text-sm">
                  Audio editing refers to the process of manipulating recorded sound to enhance quality, correct errors, and structure content. This includes cutting, trimming, fading, noise removal, pitch correction, etc.
                </p>
              </div>
              
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-blue-700 mb-3">🎼 What is Audio Arrangement?</h4>
                <p class="text-blue-600 text-sm">
                  Arrangement involves structuring audio clips (music, voice, effects) on a timeline to create a coherent and intentional flow. It's the storytelling side of audio production.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-purple-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">✂️</span>
              Core Audio Editing Techniques
            </h3>
            
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-purple-700 mb-2">A. Cutting and Trimming</h4>
                <ul class="text-purple-600 space-y-1 text-sm">
                  <li>• Removes unwanted parts of a clip (silence, mistakes, noise)</li>
                  <li>• Essential for tight pacing</li>
                  <li>• Creates clean entry and exit points</li>
                </ul>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="text-lg font-semibold text-orange-700 mb-2">B. Fades and Crossfades</h4>
                <ul class="text-orange-600 space-y-1 text-sm">
                  <li>• <strong>Fade In/Out:</strong> Smooth entry/exit of audio</li>
                  <li>• <strong>Crossfade:</strong> Smooth transition between clips</li>
                  <li>• Prevents pops, clicks, and abrupt changes</li>
                </ul>
              </div>

              <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="text-lg font-semibold text-blue-700 mb-2">C. Time Stretching</h4>
                <ul class="text-blue-600 space-y-1 text-sm">
                  <li>• Change length of audio without altering pitch</li>
                  <li>• Used in syncing voice or music to timing requirements</li>
                  <li>• Maintains natural sound quality</li>
                </ul>
              </div>

              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="text-lg font-semibold text-green-700 mb-2">D. Noise Reduction / Cleanup</h4>
                <ul class="text-green-600 space-y-1 text-sm">
                  <li>• Remove background noise, hum, clicks</li>
                  <li>• Tools: Noise gates, spectral repair, de-essers</li>
                  <li>• Improves overall audio quality</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🎚️</span>
              Arrangement Techniques in DAWs
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-indigo-700 mb-3">A. Working in the Timeline</h4>
                <ul class="text-indigo-600 space-y-1 text-sm">
                  <li>• Main workspace for arranging audio clips</li>
                  <li>• Position music, vocals, effects in sync</li>
                  <li>• Layer tracks for complex arrangements</li>
                </ul>
              </div>

              <div class="bg-pink-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-pink-700 mb-3">B. Track Organization</h4>
                <ul class="text-pink-600 space-y-1 text-sm">
                  <li>• <strong>Grouping:</strong> Similar tracks together</li>
                  <li>• <strong>Color Coding:</strong> Improves navigation</li>
                  <li>• <strong>Labeling:</strong> Name each track clearly</li>
                </ul>
              </div>

              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-yellow-700 mb-3">C. Markers and Regions</h4>
                <ul class="text-yellow-600 space-y-1 text-sm">
                  <li>• Mark important points (intro, chorus, ad break)</li>
                  <li>• Helps navigation and automation</li>
                  <li>• Facilitates collaboration</li>
                </ul>
              </div>

              <div class="bg-teal-50 p-4 rounded-lg">
                <h4 class="text-lg font-semibold text-teal-700 mb-3">D. Layering</h4>
                <ul class="text-teal-600 space-y-1 text-sm">
                  <li>• Combine multiple audio clips</li>
                  <li>• Voice + background music + SFX</li>
                  <li>• Balance is crucial for clarity</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-red-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🎤</span>
              Audio Editing for Podcasting or Voice
            </h3>
            
            <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 class="text-lg font-semibold text-red-700 mb-3">Voice Cleanup Checklist:</h4>
              <ul class="text-red-600 space-y-2">
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✅</span>
                  Trim start/end silence
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✅</span>
                  Remove breaths or filler words ("uh," "um")
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✅</span>
                  Apply EQ and compression
                </li>
                <li class="flex items-center">
                  <span class="text-green-500 mr-2">✅</span>
                  Normalize loudness to broadcasting standard (-16 LUFS)
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-cyan-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🎧</span>
              Automation in Editing and Arrangement
            </h3>
            
            <div class="bg-cyan-50 p-4 rounded-lg">
              <h4 class="text-lg font-semibold text-cyan-700 mb-3">What is Automation?</h4>
              <p class="text-cyan-600 mb-4">
                Automation allows you to program changes over time for volume, panning, effects, etc.
              </p>
              
              <h4 class="text-lg font-semibold text-cyan-700 mb-3">Common Uses:</h4>
              <ul class="text-cyan-600 space-y-1 text-sm">
                <li>• Fade music in/out</li>
                <li>• Lower music during voiceover (ducking)</li>
                <li>• Pan sounds from left to right</li>
                <li>• Add echo only during specific phrases</li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-amber-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🛠️</span>
              Essential Editing Tools
            </h3>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr class="bg-amber-50">
                    <th class="border border-gray-300 p-3 text-left font-semibold">Tool</th>
                    <th class="border border-gray-300 p-3 text-left font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Razor Tool / Split Tool</td>
                    <td class="border border-gray-300 p-3">Cut clips at precise points</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Move Tool</td>
                    <td class="border border-gray-300 p-3">Shift audio clips on timeline</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Envelope Tool</td>
                    <td class="border border-gray-300 p-3">Draw volume or pan automation</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Magnify / Zoom</td>
                    <td class="border border-gray-300 p-3">Fine editing of waveforms</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Snap/Grid Settings</td>
                    <td class="border border-gray-300 p-3">Align edits to time grid</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
            <h3 class="text-xl font-semibold text-red-800 mb-4 flex items-center">
              <span class="mr-3 text-2xl">⚠️</span>
              Common Audio Editing Mistakes
            </h3>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div class="text-red-700">
                  <strong>Hard cuts without fades:</strong> Creates pops/clicks
                </div>
                <div class="text-red-700">
                  <strong>Over-editing:</strong> Robotic or unnatural feel
                </div>
              </div>
              <div class="space-y-3">
                <div class="text-red-700">
                  <strong>Poor volume balance:</strong> Distracting to listeners
                </div>
                <div class="text-red-700">
                  <strong>Misaligned music/effects:</strong> Feels off-beat
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
              Audio editing and arrangement are at the heart of professional audio production. Mastery of these skills results in clean, smooth, clear audio with polished and engaging content.
            </p>
          </div>
        </div>
      </div>
    `
  }
};
