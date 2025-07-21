
import { lesson2LaptopParts } from './lesson2-laptop-parts';
import { lesson12Quiz } from './lesson12-quiz';
import type { Module } from '@/types/course';

export const module2Disassembly: Module = {
  id: 2,
  title: 'Laptop Disassembly and Identification',
  description: 'Tools, parts, and safety for disassembling laptops',
  lessons: [
    {
      id: 2,
      title: 'Laptop Components and Tools',
      duration: '65 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/zKAdv-dTL5I',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-8 text-white">
              <div class="text-center space-y-4">
                <div class="text-6xl mb-4">🔧</div>
                <h2 class="text-3xl font-bold">Module 2: Laptop Disassembly and Identification</h2>
                <p class="text-xl opacity-90">Learn about laptop components, tools, and safety procedures</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-blue-600 mb-4">🔋 Laptop Battery</h3>
              <p class="text-gray-700 mb-4">Understanding laptop battery components and functions.</p>
              <YouTubeVideoRenderer videoId="zKAdv-dTL5I" title="Laptop Battery Basics" />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-green-600 mb-4">🌪️ Cooling Fan Systems</h3>
              <p class="text-gray-700 mb-4">Laptop cooling systems and thermal management.</p>
              <YouTubeVideoRenderer videoId="W-cE_s_So4M" title="Laptop Cooling Fans" />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-purple-600 mb-4">⌨️ Keyboard Components</h3>
              <p class="text-gray-700 mb-4">Laptop keyboard mechanisms and repair techniques.</p>
              <YouTubeVideoRenderer videoId="U3AyW96Wdu4" title="Laptop Keyboard Components" />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-indigo-600 mb-4">🖥️ Screen and Display</h3>
              <p class="text-gray-700 mb-4">Laptop display technology and components.</p>
              <YouTubeVideoRenderer videoId="NXvfki7kx0w" title="Laptop Display Technology" />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-yellow-600 mb-4">🛠️ Essential Tools</h3>
              <p class="text-gray-700 mb-4">Tools required for laptop disassembly and repair.</p>
              <YouTubeVideoRenderer videoId="huJFlml1zuM" title="Laptop Repair Tools" />
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-red-600 mb-4">⚡ ESD Safety</h3>
              <p class="text-gray-700 mb-4">Electrostatic discharge prevention and safety measures.</p>
              <YouTubeVideoRenderer videoId="a21aQ9YZPzQ" title="ESD Basics" />
              
              <div class="mt-4">
                <h4 class="text-lg font-semibold text-red-700 mb-2">ESD Safety Precautions</h4>
                <YouTubeVideoRenderer videoId="NAAQfPpbkEw" title="ESD Safety Precautions" />
              </div>
            </div>
          </div>
        `
      }
    },
    lesson12Quiz
  ]
};
