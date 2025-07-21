
import type { Module } from '@/types/course';

export const module5ComponentReplacement: Module = {
  id: 5,
  title: 'Replacing RAM, HDD, SSD, and Motherboards',
  description: 'Upgrading and swapping key hardware components',
  lessons: [
    {
      id: 6,
      title: 'Hardware Component Replacement',
      duration: '70 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-2xl p-8 text-white">
              <div class="text-center space-y-4">
                <div class="text-6xl mb-4">🔧</div>
                <h2 class="text-3xl font-bold">Module 5: Hardware Component Replacement</h2>
                <p class="text-xl opacity-90">Replacing RAM, HDD, SSD, and Motherboards</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-blue-600 mb-4">🧠 RAM Replacement</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">What is RAM:</h4>
                  <YouTubeVideoRenderer videoId="WwwkugPILgY" title="What is RAM" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Physical Installation:</h4>
                  <YouTubeVideoRenderer videoId="fhPYpgLJKtQ" title="RAM Installation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">What is a Form Factor:</h4>
                  <YouTubeVideoRenderer videoId="FU8YDnUtVls" title="RAM Form Factors" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-green-600 mb-4">💾 Storage Upgrades</h3>
              <div>
                <h4 class="text-lg font-semibold text-green-700 mb-2">Understanding Storage Upgrades:</h4>
                <YouTubeVideoRenderer videoId="r3Jy5dHOj3g" title="Storage Upgrade Guide" />
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-purple-600 mb-4">🔌 Motherboard Replacement</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Introduction to the Motherboard:</h4>
                  <YouTubeVideoRenderer videoId="b2pd3Y6aBag" title="Motherboard Introduction" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Precautions Before Starting:</h4>
                  <YouTubeVideoRenderer videoId="NACBQhNmELs" title="Safety Precautions" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Tools Required:</h4>
                  <YouTubeVideoRenderer videoId="9KUsXQ0LuXg" title="Required Tools" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Step-by-Step Motherboard Removal (Desktop):</h4>
                  <YouTubeVideoRenderer videoId="UM-9wAUQCdU" title="Desktop Motherboard Removal" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Step-by-Step Motherboard Removal (Laptop):</h4>
                  <YouTubeVideoRenderer videoId="96vxV8xsXaA" title="Laptop Motherboard Removal" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Replacing the Motherboard:</h4>
                  <YouTubeVideoRenderer videoId="5hT_rpXWYxo" title="Motherboard Replacement" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Common Issues and Troubleshooting:</h4>
                  <YouTubeVideoRenderer videoId="-u8Ioz1EaMc" title="Motherboard Troubleshooting" />
                </div>
              </div>
            </div>
          </div>
        `
      }
    }
  ]
};
