
import type { Module } from '@/types/course';

export const module7BiosFirmware: Module = {
  id: 7,
  title: 'BIOS and Firmware Issues',
  description: 'Accessing BIOS, firmware updates, and reset techniques',
  lessons: [
    {
      id: 7,
      title: 'BIOS Configuration and Firmware Updates',
      duration: '50 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 rounded-2xl p-8 text-white">
              <div class="text-center space-y-4">
                <div class="text-6xl mb-4">⚙️</div>
                <h2 class="text-3xl font-bold">Module 7: BIOS and Firmware Issues</h2>
                <p class="text-xl opacity-90">BIOS configuration, firmware updates, and reset techniques</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-blue-600 mb-4">🔧 BIOS Fundamentals</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">What is BIOS:</h4>
                  <YouTubeVideoRenderer videoId="mzjqbvyDtWs" title="What is BIOS" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">What is UEFI:</h4>
                  <YouTubeVideoRenderer videoId="yjehvavPbMA" title="What is UEFI" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">BIOS vs UEFI – Key Differences:</h4>
                  <YouTubeVideoRenderer videoId="VY3flvge2X0" title="BIOS vs UEFI" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-green-600 mb-4">🖥️ BIOS Access and Configuration</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Accessing BIOS/UEFI Settings:</h4>
                  <YouTubeVideoRenderer videoId="HaFLZKwG4C0" title="Accessing BIOS Settings" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">How to Access BIOS Settings:</h4>
                  <YouTubeVideoRenderer videoId="f4DdtZxZ328" title="BIOS Access Methods" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Navigating the BIOS Interface:</h4>
                  <YouTubeVideoRenderer videoId="QdUnnCzQ5Co" title="BIOS Navigation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Common BIOS Settings to Configure:</h4>
                  <YouTubeVideoRenderer videoId="oJs27kJlhEc" title="BIOS Configuration" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-purple-600 mb-4">🔄 Firmware Updates</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">What is Firmware:</h4>
                  <YouTubeVideoRenderer videoId="7AidNAFjsBw" title="What is Firmware" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Why Update Firmware:</h4>
                  <YouTubeVideoRenderer videoId="NhfAnfVnztM" title="Why Update Firmware" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Understanding Firmware Flashing:</h4>
                  <YouTubeVideoRenderer videoId="pazWRQt-IUE" title="Firmware Flashing" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Firmware Update Methods:</h4>
                  <YouTubeVideoRenderer videoId="Em7SRaG3L_0" title="Firmware Update Methods" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Using Manufacturer Software:</h4>
                  <YouTubeVideoRenderer videoId="YzrjSqZJvOM" title="Manufacturer Update Software" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Bootable Media:</h4>
                  <YouTubeVideoRenderer videoId="6oTRYwB5m_E" title="Bootable Update Media" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Network-Based Updates:</h4>
                  <YouTubeVideoRenderer videoId="2qLcE6Vb_g8" title="Network Firmware Updates" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Troubleshooting Firmware Update Failures:</h4>
                  <YouTubeVideoRenderer videoId="WYSdUPWfoNk" title="Firmware Update Troubleshooting" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-red-600 mb-4">🔧 BIOS Troubleshooting</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">Accessing Firmware (BIOS/UEFI):</h4>
                  <YouTubeVideoRenderer videoId="HaFLZKwG4C0" title="Firmware Access" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">BIOS Setup Navigation:</h4>
                  <YouTubeVideoRenderer videoId="a2GGSb18Zqs" title="BIOS Setup Navigation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">Entering BIOS/UEFI Setup (During Boot):</h4>
                  <YouTubeVideoRenderer videoId="f4DdtZxZ328" title="Boot BIOS Entry" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">Failure to Boot / No POST:</h4>
                  <YouTubeVideoRenderer videoId="rn562A_Xelg" title="Boot Failure Issues" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">BIOS Password Lost or Forgotten:</h4>
                  <YouTubeVideoRenderer videoId="5059FehH3z4" title="BIOS Password Recovery" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">Incorrect BIOS Settings:</h4>
                  <YouTubeVideoRenderer videoId="lPCFuwNbR0U" title="Incorrect BIOS Settings" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">BIOS Update Failure (Failed Flash):</h4>
                  <YouTubeVideoRenderer videoId="WC24Np6H95I" title="BIOS Flash Failure" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-red-700 mb-2">Hardware Not Detected:</h4>
                  <YouTubeVideoRenderer videoId="WEF5JAf6wWI" title="Hardware Detection Issues" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-yellow-600 mb-4">🔄 BIOS Reset Techniques</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-yellow-700 mb-2">Using BIOS Menu:</h4>
                  <YouTubeVideoRenderer videoId="Q0ZJTNSAXF8" title="BIOS Menu Reset" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-yellow-700 mb-2">Clearing CMOS via Motherboard Jumper:</h4>
                  <YouTubeVideoRenderer videoId="jmub7qqP63Q" title="CMOS Jumper Reset" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-yellow-700 mb-2">Removing the CMOS Battery:</h4>
                  <YouTubeVideoRenderer videoId="7oc2MphZurE" title="CMOS Battery Reset" />
                </div>
              </div>
            </div>
          </div>
        `
      }
    }
  ]
};
