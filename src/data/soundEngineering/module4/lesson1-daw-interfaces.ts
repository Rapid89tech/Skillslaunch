
import type { Lesson } from '@/types/course';

export const lesson1DAWInterfaces: Lesson = {
  id: 12,
  title: 'DAW Interfaces (Digital Audio Workstations)',
  duration: '60 min',
  type: 'video',
  content: {
    videoUrl: 'https://www.youtube.com/embed/TT2GBfBgHVo',
    textContent: `
      <div class="space-y-8 animate-fade-in">
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
          <h2 class="text-4xl font-bold text-blue-700 mb-6 flex items-center">
            <span class="mr-4 text-5xl">🎛️</span>
            DAW Interfaces (Digital Audio Workstations)
          </h2>
          
          <div class="bg-white p-6 rounded-xl shadow-md mb-8 border-l-4 border-blue-500">
            <h3 class="text-2xl font-semibold text-blue-800 mb-4 flex items-center">
              <span class="mr-3 text-3xl">🎚️</span>
              What is a DAW?
            </h3>
            <p class="text-gray-700 mb-4 text-lg leading-relaxed">
              A Digital Audio Workstation (DAW) is a software application used to record, edit, mix, and produce audio.
            </p>
            
            <div class="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 class="text-lg font-semibold text-blue-700 mb-3">🔑 Key Functions:</h4>
              <ul class="text-blue-600 space-y-2">
                <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Multitrack recording</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Audio editing (cut, copy, trim, fade)</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">•</span> MIDI sequencing</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Mixing and mastering</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Plug-in support (EQ, compression, effects)</li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-purple-800 mb-4 flex items-center">
              <span class="mr-3 text-3xl">🎯</span>
              Purpose of a DAW Interface
            </h3>
            <p class="text-gray-700 mb-4 text-lg">
              The interface of a DAW refers to the visual layout and control system through which users interact with audio tracks and tools.
            </p>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="text-lg font-semibold text-purple-700 mb-3">Goals of a DAW Interface:</h4>
              <ul class="text-purple-600 space-y-2">
                <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Make audio workflows efficient</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Provide visual feedback of waveforms, levels, automation</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">•</span> Allow users to manipulate sound with precision</li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-green-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🎛️</span>
              Common Components of a DAW Interface
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 class="text-lg font-semibold text-green-700 mb-3 flex items-center">
                  <span class="mr-2 text-2xl">🎚️</span>
                  Track View / Arrangement Window
                </h4>
                <ul class="text-green-600 space-y-1 text-sm">
                  <li>• Timeline-based layout showing audio, MIDI, and automation tracks</li>
                  <li>• Tracks arranged horizontally with waveforms or MIDI data</li>
                  <li>• Users can drag, cut, fade, duplicate, or loop clips</li>
                </ul>
              </div>

              <div class="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 class="text-lg font-semibold text-orange-700 mb-3 flex items-center">
                  <span class="mr-2 text-2xl">🎛️</span>
                  Mixer / Mixing Console
                </h4>
                <ul class="text-orange-600 space-y-1 text-sm">
                  <li>• Visual representation of channel strips</li>
                  <li>• Volume faders and pan knobs</li>
                  <li>• Mute/solo buttons</li>
                  <li>• Plug-in insert slots</li>
                  <li>• Sends/returns for effects</li>
                </ul>
              </div>

              <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 class="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                  <span class="mr-2 text-2xl">⌨️</span>
                  Transport Controls
                </h4>
                <ul class="text-blue-600 space-y-1 text-sm">
                  <li>• Play / Pause / Stop buttons</li>
                  <li>• Record button</li>
                  <li>• Loop / Rewind / Fast Forward</li>
                  <li>• Shows playhead position (timecode)</li>
                </ul>
              </div>

              <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-purple-700 mb-3 flex items-center">
                  <span class="mr-2 text-2xl">🎼</span>
                  MIDI Editor (Piano Roll)
                </h4>
                <ul class="text-purple-600 space-y-1 text-sm">
                  <li>• Program and edit MIDI data</li>
                  <li>• Notes shown on grid with piano keyboard</li>
                  <li>• Essential for virtual instruments</li>
                  <li>• Edit velocity, note length, timing</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-md mb-8">
            <h3 class="text-2xl font-semibold text-indigo-800 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🎯</span>
              Popular DAWs and Their Interfaces
            </h3>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr class="bg-indigo-50">
                    <th class="border border-gray-300 p-3 text-left font-semibold">DAW</th>
                    <th class="border border-gray-300 p-3 text-left font-semibold">Key Interface Strengths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Pro Tools</td>
                    <td class="border border-gray-300 p-3">Industry-standard mixer and editing tools</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Ableton Live</td>
                    <td class="border border-gray-300 p-3">Session View (clip launching) and Arrangement View</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">FL Studio</td>
                    <td class="border border-gray-300 p-3">Pattern-based step sequencer and piano roll</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Logic Pro</td>
                    <td class="border border-gray-300 p-3">Intuitive layout for Mac users with built-in instruments</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="border border-gray-300 p-3 font-medium">Reaper</td>
                    <td class="border border-gray-300 p-3">Highly customizable and lightweight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl shadow-md">
            <h3 class="text-2xl font-semibold text-green-800 mb-4 flex items-center">
              <span class="mr-3 text-3xl">💡</span>
              Tips for Efficient DAW Navigation
            </h3>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <div class="flex items-center text-green-700">
                  <span class="text-green-500 mr-2">✅</span>
                  Learn keyboard shortcuts for your DAW
                </div>
                <div class="flex items-center text-green-700">
                  <span class="text-green-500 mr-2">✅</span>
                  Use templates for recurring projects
                </div>
                <div class="flex items-center text-green-700">
                  <span class="text-green-500 mr-2">✅</span>
                  Label and color-code tracks for clarity
                </div>
              </div>
              <div class="space-y-3">
                <div class="flex items-center text-green-700">
                  <span class="text-green-500 mr-2">✅</span>
                  Monitor levels visually and aurally
                </div>
                <div class="flex items-center text-green-700">
                  <span class="text-green-500 mr-2">✅</span>
                  Save presets and layouts
                </div>
                <div class="flex items-center text-green-700">
                  <span class="text-green-500 mr-2">✅</span>
                  Customize interface to your workflow
                </div>
              </div>
            </div>
          </div>

          <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
            <h3 class="text-xl font-semibold text-yellow-800 mb-3 flex items-center">
              <span class="mr-3 text-2xl">💡</span>
              Key Takeaway
            </h3>
            <p class="text-yellow-700 text-lg">
              The DAW interface is your creative workspace. Mastering its layout and controls is essential for efficient workflow, better sound production, and professional-quality results.
            </p>
          </div>
        </div>
      </div>
    `
  }
};
