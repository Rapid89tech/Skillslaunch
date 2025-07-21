
import type { Module } from '@/types/course';

export const module6DisplayKeyboard: Module = {
  id: 6,
  title: 'Display, Keyboard, and Touchpad Repairs',
  description: 'Identifying and fixing common input and display problems',
  lessons: [
    {
      id: 6,
      title: 'Display and Input Device Repairs',
      duration: '65 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl p-8 text-white">
              <div class="text-center space-y-4">
                <div class="text-6xl mb-4">🖥️</div>
                <h2 class="text-3xl font-bold">Module 6: Display, Keyboard, and Touchpad Repairs</h2>
                <p class="text-xl opacity-90">Diagnosing and fixing input and display problems</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-blue-600 mb-4">🖥️ Display Technology</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Display Technology Overview:</h4>
                  <YouTubeVideoRenderer videoId="vnxqJCFcze4" title="Display Technology" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Display Resolutions:</h4>
                  <YouTubeVideoRenderer videoId="ZJzl4QfJmRU" title="Display Resolutions" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Display Connectors:</h4>
                  <YouTubeVideoRenderer videoId="K2jY4ojHCK0" title="Display Connectors" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Backlight Types:</h4>
                  <YouTubeVideoRenderer videoId="WLHaAgX2iUY" title="Backlight Types" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-blue-700 mb-2">Inverter Board (for LCDs):</h4>
                  <YouTubeVideoRenderer videoId="xGMajNTDrlg" title="LCD Inverter Board" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-green-600 mb-4">🔧 Display Troubleshooting and Replacement</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Display Replacement Considerations:</h4>
                  <YouTubeVideoRenderer videoId="kViZj4WMSiU" title="Display Replacement Considerations" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Common Display Symptoms and Causes:</h4>
                  <YouTubeVideoRenderer videoId="e9iy30J00-k" title="Display Symptoms" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Detailed Troubleshooting by Symptom:</h4>
                  <YouTubeVideoRenderer videoId="u-REPLdpZ70" title="Display Troubleshooting" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Tools Required:</h4>
                  <YouTubeVideoRenderer videoId="AJgHQ4i_mI0" title="Display Repair Tools" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-green-700 mb-2">Step-by-Step Screen Replacement:</h4>
                  <YouTubeVideoRenderer videoId="uMNIHeP3vu4" title="Screen Replacement Procedure" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-purple-600 mb-4">⌨️ Keyboard Repair</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Common Keyboard Issues:</h4>
                  <YouTubeVideoRenderer videoId="HFgNbJl7gSo" title="Common Keyboard Issues" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Keyboard Ribbon Cable Check:</h4>
                  <YouTubeVideoRenderer videoId="3AH3FCj4jhs" title="Keyboard Ribbon Cable" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Install New Keyboard:</h4>
                  <YouTubeVideoRenderer videoId="67-9FNa6HiU" title="Keyboard Installation" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-purple-700 mb-2">Post-Replacement Checklist:</h4>
                  <YouTubeVideoRenderer videoId="L24XtqxwnPU" title="Post-Replacement Checklist" />
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 class="text-2xl font-bold text-indigo-600 mb-4">🖱️ Touchpad Repair</h3>
              <div class="space-y-4">
                <div>
                  <h4 class="text-lg font-semibold text-indigo-700 mb-2">Understanding Touchpad Technology:</h4>
                  <YouTubeVideoRenderer videoId="y9VcGpvrdSQ" title="Touchpad Technology" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-indigo-700 mb-2">Device Manager (Windows):</h4>
                  <YouTubeVideoRenderer videoId="nquyXcktN7Y" title="Device Manager" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-indigo-700 mb-2">BIOS Check:</h4>
                  <YouTubeVideoRenderer videoId="WZ7GrMVUGrg" title="BIOS Touchpad Check" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-indigo-700 mb-2">Hardware Repairs:</h4>
                  <YouTubeVideoRenderer videoId="9CwRAaqqMrc" title="Touchpad Hardware Repair" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-indigo-700 mb-2">Accessing the Touchpad:</h4>
                  <YouTubeVideoRenderer videoId="Ns0iGYL9Eu8" title="Accessing Touchpad" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-indigo-700 mb-2">Cleaning:</h4>
                  <YouTubeVideoRenderer videoId="M_kr3FmsSUE" title="Touchpad Cleaning" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-indigo-700 mb-2">Replacing the Touchpad:</h4>
                  <YouTubeVideoRenderer videoId="twFWB0sp3bk" title="Touchpad Replacement" />
                </div>
                
                <div>
                  <h4 class="text-lg font-semibold text-indigo-700 mb-2">Tools Required:</h4>
                  <YouTubeVideoRenderer videoId="AJgHQ4i_mI0" title="Touchpad Repair Tools" />
                </div>
              </div>
            </div>
          </div>
        `
      }
    }
  ]
};
