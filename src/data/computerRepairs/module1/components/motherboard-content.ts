
export const motherboardContent = `
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h3 class="text-2xl font-bold text-indigo-600 mb-4">3. Motherboard</h3>
    
    <div class="bg-indigo-50 p-4 rounded-lg mb-4">
      <h4 class="font-semibold text-indigo-800 mb-2">The Main Circuit Board</h4>
      <p class="text-indigo-700 text-sm mb-3">The main printed circuit board (PCB) connecting and allowing communication between all hardware components.</p>
      <p class="text-indigo-700 text-sm"><strong>Function:</strong> Houses the CPU socket, RAM slots, expansion slots (PCIe), power connectors, storage connectors (SATA, M.2), and I/O ports.</p>
    </div>

    <div class="bg-purple-50 p-4 rounded-lg mb-4">
      <h5 class="font-semibold text-purple-800 mb-2">Chipset - The Traffic Controller</h5>
      <p class="text-purple-700 text-sm mb-3">Let's go back to our busy computer kitchen with the CPU (Chef), the RAM (Fast Workspace), and the Hard Drive (Big Storage Pantry). Now, imagine our kitchen is HUGE, with lots of different stations. The Chipset is like the kitchen's super smart traffic controller or a helpful manager. Here's why:</p>
      
      <div class="space-y-3">
        <div class="bg-white p-3 rounded border">
          <p class="text-purple-700 text-sm"><strong>🔌 Connecting Everyone:</strong> All the different parts of the kitchen (the chef, the workspace, the pantry, the keyboard, the screen) need to talk to each other to make the cake. The CPU needs ingredients from the pantry, and it needs to send the finished cake to the "eating table" (your screen!).</p>
        </div>
        <div class="bg-white p-3 rounded border">
          <p class="text-purple-700 text-sm"><strong>📡 The Chipset's Job:</strong> When the Chef (CPU) says, "I need flour from the Pantry (Hard Drive)!", the Chipset makes sure that message goes to the pantry, and the flour is delivered to the Chef's Workspace (RAM) super fast.</p>
        </div>
        <div class="bg-white p-3 rounded border">
          <p class="text-purple-700 text-sm"><strong>🛣️ Making Things Smooth:</strong> Without the Chipset, everything would be chaotic! The Chef would have to run around trying to find ingredients and deliver things himself, which would be very slow. The Chipset makes sure all the "data" flow smoothly and quickly between all the different parts of the computer.</p>
        </div>
      </div>
      
      <p class="text-purple-700 text-sm mt-3">So, the Chipset is the essential helper that connects everything in your computer and makes sure they can all talk to each other properly and quickly! It's like the main highway system of your computer, guiding all the information where it needs to go.</p>
    </div>

    <div class="bg-yellow-50 p-4 rounded-lg mb-4">
      <h5 class="font-semibold text-yellow-800 mb-2">BIOS/UEFI - The Startup Manual</h5>
      <p class="text-yellow-700 text-sm mb-3">Firmware interface stored on the motherboard to initialize hardware during boot. Let's go back to our computer kitchen!</p>
      <p class="text-yellow-700 text-sm mb-3">Remember the CPU is the chef, and the RAM is the fast, temporary workspace for making the cake. Now, imagine that when you first walk into the kitchen, it's completely dark. You can't see anything! You can't even find the light switch.</p>
      <p class="text-yellow-700 text-sm mb-3">This is where BIOS (B-I-O-S) or UEFI (U-E-F-I) comes in! It's like the kitchen's "Instruction Manual" and "Power-Up Helper":</p>
      
      <div class="space-y-3">
        <div class="bg-white p-3 rounded border">
          <strong class="text-yellow-800">First Check Everything:</strong>
          <p class="text-sm text-yellow-700">Like you turning on the lights and checking if all the ingredients are there and the oven is plugged in. BIOS/UEFI checks if your keyboard is connected, if your mouse is working, if the screen is plugged in, and if the hard drive is ready.</p>
        </div>
        <div class="bg-white p-3 rounded border">
          <strong class="text-yellow-800">Find the Big Brain:</strong>
          <p class="text-sm text-yellow-700">After checking everything, BIOS/UEFI tells the computer, "Okay, all the basic parts are ready! Now, go find the 'big brain' – that's the operating system, like Windows or macOS – on the hard drive."</p>
        </div>
        <div class="bg-white p-3 rounded border">
          <strong class="text-yellow-800">BIOS vs UEFI:</strong>
          <p class="text-sm text-yellow-700">BIOS is like an old, paper manual - good, but slow. UEFI is like a shiny new digital tablet with a touch screen - much faster and can do more cool things!</p>
        </div>
      </div>
    </div>

    <div class="bg-red-50 p-4 rounded-lg mb-4">
      <h5 class="font-semibold text-red-800 mb-2">Common Issues:</h5>
      <ul class="text-red-700 text-sm space-y-1">
        <li>• Damaged circuits, failing capacitors</li>
        <li>• BIOS corruption</li>
        <li>• Faulty ports or connectors</li>
      </ul>
    </div>

    <div class="bg-gray-100 p-4 rounded-lg">
      <h5 class="font-semibold text-gray-800 mb-2">📺 Educational Video:</h5>
      <p class="text-gray-700 text-sm">Motherboards Explained</p>
    </div>
  </div>
`;
