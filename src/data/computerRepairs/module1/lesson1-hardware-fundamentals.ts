
import type { VideoLesson } from '@/types/course';
import { cpuContent } from './components/cpu-content';
import { ramContent } from './components/ram-content';
import { motherboardContent } from './components/motherboard-content';
import { psuContent } from './components/psu-content';
import { gpuContent } from './components/gpu-content';
import { storageContent } from './components/storage-content';
import { ioPortsContent } from './components/io-ports-content';
import { summaryContent } from './components/summary-content';

export const lesson1HardwareFundamentals: VideoLesson = {
  id: 1,
  title: 'Introduction to Computer Hardware',
  duration: '60 min',
  type: 'video',
  content: {
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    textContent: `
      <div class="space-y-8">
        <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <div class="text-center space-y-4">
            <div class="text-6xl mb-4">🖥️</div>
            <h2 class="text-3xl font-bold">✅ Module 1: Introduction to Computer Hardware</h2>
            <p class="text-xl opacity-90">Topics: CPU, RAM, motherboard, PSU, GPU</p>
          </div>
        </div>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 class="font-bold text-blue-800 mb-2">Key Computer Hardware Components:</h3>
          <ul class="text-blue-700 space-y-1">
            <li>• CPU (Central Processing Unit)</li>
            <li>• RAM (Random Access Memory)</li>
            <li>• Motherboard</li>
            <li>• PSU (Power Supply Unit)</li>
            <li>• GPU (Graphics Processing Unit)</li>
            <li>• Storage Devices: HDD, SSD, NVMe</li>
            <li>• I/O Ports: USB, HDMI, Ethernet, Audio</li>
          </ul>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 class="text-2xl font-bold text-blue-600 mb-4">🔧 CPU (Central Processing Unit)</h3>
          <p class="text-gray-700 mb-4">The CPU is the brain of the computer, executing instructions and managing operations.</p>
          <YouTubeVideoRenderer videoId="mPzcsU8Cpco" title="CPU Overview - Central Processing Unit Explained" />
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 class="text-2xl font-bold text-green-600 mb-4">🧠 RAM (Random Access Memory)</h3>
          <p class="text-gray-700 mb-4">RAM provides temporary storage for data and programs currently in use.</p>
          <YouTubeVideoRenderer videoId="cZdPpXQVtxk" title="RAM Explained - Random Access Memory Guide" />
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 class="text-2xl font-bold text-purple-600 mb-4">🔌 Motherboards</h3>
          <p class="text-gray-700 mb-4">The motherboard connects all components and provides communication pathways.</p>
          <YouTubeVideoRenderer videoId="b2pd3Y6aBag" title="Motherboard Components and Functions" />
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 class="text-2xl font-bold text-yellow-600 mb-4">⚡ Power Supply Unit (PSU)</h3>
          <p class="text-gray-700 mb-4">The PSU converts AC power to DC power for computer components.</p>
          <YouTubeVideoRenderer videoId="T6UhLAXMv5c" title="Power Supply Basics and How PSUs Work" />
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 class="text-2xl font-bold text-red-600 mb-4">🎮 Graphics Processing Unit (GPU)</h3>
          <p class="text-gray-700 mb-4">The GPU handles graphics rendering and parallel processing tasks.</p>
          <YouTubeVideoRenderer videoId="LfdK-v0SbGI" title="GPU Fundamentals - Graphics Card Explained" />
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 class="text-2xl font-bold text-indigo-600 mb-4">💾 Storage Devices</h3>
          <p class="text-gray-700 mb-4">Storage devices provide long-term data storage including HDDs, SSDs, and NVMe drives.</p>
          <YouTubeVideoRenderer videoId="r3Jy5dHOj3g" title="Storage Devices Overview - HDD vs SSD vs NVMe" />
          
          <div class="mt-6">
            <h4 class="text-lg font-semibold text-indigo-700 mb-2">NVMe Storage Technology</h4>
            <YouTubeVideoRenderer videoId="AXoDZF61-c4" title="NVMe Storage Explained - High-Speed SSD Technology" />
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 class="text-2xl font-bold text-teal-600 mb-4">🔌 I/O Ports</h3>
          <p class="text-gray-700 mb-4">Input/Output ports connect external devices to the computer.</p>
          <YouTubeVideoRenderer videoId="Wb0xM_5iYl0" title="Computer I/O Ports Overview and Guide" />
          
          <div class="mt-6 space-y-6">
            <div>
              <h4 class="text-lg font-semibold text-teal-700 mb-2">HDMI Ports and Technology</h4>
              <YouTubeVideoRenderer videoId="9cSdNKj-jd0" title="HDMI Technology Explained - High Definition Multimedia Interface" />
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-teal-700 mb-2">Ethernet Network Connectivity</h4>
              <YouTubeVideoRenderer videoId="gc-1Ump16ig" title="Ethernet Connectivity and Network Ports" />
            </div>
            
            <div>
              <h4 class="text-lg font-semibold text-teal-700 mb-2">Audio Ports and Connections</h4>
              <YouTubeVideoRenderer videoId="PO96PH5BNr4" title="Audio Ports Explained - Sound Connections Guide" />
            </div>
          </div>
        </div>

        ${cpuContent}
        ${ramContent}
        ${motherboardContent}
        ${psuContent}
        ${gpuContent}
        ${storageContent}
        ${ioPortsContent}
        ${summaryContent}
      </div>
    `
  }
};
