
import type { Module } from '@/types/course';

export const module8OperatingSystem: Module = {
  id: 8,
  title: 'Operating System Installation and Configuration',
  description: 'Complete OS installation, configuration, and troubleshooting procedures',
  lessons: [
    {
      id: 8,
      title: 'OS Installation and Configuration',
      duration: '80 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl p-8 text-white">
              <div class="text-center space-y-4">
                <div class="text-6xl mb-4">💻</div>
                <h2 class="text-3xl font-bold">Module 8: Operating System Installation and Configuration</h2>
                <p class="text-xl opacity-90">Complete OS installation, configuration, and troubleshooting</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-blue-600 mb-4">💿 Installation Media Preparation</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">What is Installation Media?:</h4>
                  <YouTubeVideoRenderer videoId="zBkzqMYGcZ0" title="Installation Media Overview" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Why Use USB or DVD Installation Media?:</h4>
                  <YouTubeVideoRenderer videoId="R7VLs8FwD2M" title="USB vs DVD Installation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Requirements for Preparing Installation Media:</h4>
                  <YouTubeVideoRenderer videoId="TKIT9hyQooA" title="Installation Media Requirements" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Obtaining the OS Image (ISO):</h4>
                  <YouTubeVideoRenderer videoId="5aUQ_D_4KBg" title="Obtaining OS ISO" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Creating a Bootable USB Drive:</h4>
                  <YouTubeVideoRenderer videoId="c0TK0ynXLOo" title="Bootable USB Creation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Creating a Bootable DVD:</h4>
                  <YouTubeVideoRenderer videoId="oPEk6-kZZSQ" title="Bootable DVD Creation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Installation Steps:</h4>
                  <YouTubeVideoRenderer videoId="RNp6yCOvAIY" title="Installation Steps" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Verifying Installation Media:</h4>
                  <YouTubeVideoRenderer videoId="4cwWR4h6uy8" title="Media Verification" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-green-600 mb-4">🚀 Operating System Installation</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Booting from Installation Media:</h4>
                  <YouTubeVideoRenderer videoId="pQShmMEMqQc" title="Boot from Installation Media" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Installing Windows:</h4>
                  <YouTubeVideoRenderer videoId="WDws3T_tRpg" title="Windows Installation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Installing Linux:</h4>
                  <YouTubeVideoRenderer videoId="pwWfJwlZLWg" title="Linux Installation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Installing macOS:</h4>
                  <YouTubeVideoRenderer videoId="HCrl_4k0aqo" title="macOS Installation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Common Installation Considerations:</h4>
                  <YouTubeVideoRenderer videoId="1-7E3Je6qhc" title="Installation Considerations" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-purple-600 mb-4">💾 Disk Partitioning and Formatting</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">What is Disk Partitioning?:</h4>
                  <YouTubeVideoRenderer videoId="eSMMs4cfMqY" title="Disk Partitioning Explained" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Types of Partitions:</h4>
                  <YouTubeVideoRenderer videoId="wnfyb1nKHpQ" title="Partition Types" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Disk Formatting:</h4>
                  <YouTubeVideoRenderer videoId="crBKyQ_hfOg" title="Disk Formatting" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Steps for Partitioning and Formatting:</h4>
                  <YouTubeVideoRenderer videoId="0Rj2gWlOn30" title="Partitioning Steps" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Importance in OS Installation:</h4>
                  <YouTubeVideoRenderer videoId="djqrTRA9v0E" title="Partitioning in OS Installation" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-yellow-600 mb-4">🔧 Driver Installation and Management</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-yellow-700 mb-2">What Are Drivers?:</h4>
                  <YouTubeVideoRenderer videoId="GpCqSP4v4c4" title="What Are Drivers" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-yellow-700 mb-2">When to Install or Update Drivers:</h4>
                  <YouTubeVideoRenderer videoId="Pw6xZuR_yE8" title="Driver Installation Timing" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-yellow-700 mb-2">Uninstalling and Rolling Back Drivers:</h4>
                  <YouTubeVideoRenderer videoId="JY9eKErO4o0" title="Driver Rollback" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-yellow-700 mb-2">Troubleshooting Driver Issues:</h4>
                  <YouTubeVideoRenderer videoId="UmTRoh0sx-g" title="Driver Troubleshooting" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-red-600 mb-4">🚨 Installation Error Troubleshooting</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">Common Causes of Installation Errors:</h4>
                  <YouTubeVideoRenderer videoId="3D4CkPNDUf8" title="Installation Error Causes" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">Diagnosing Installation Errors:</h4>
                  <YouTubeVideoRenderer videoId="i-QHtJGAXgI" title="Error Diagnosis" />
                </div>
              </div>
            </div>
          </div>
        `
      }
    }
  ]
};
