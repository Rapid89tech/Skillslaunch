import React from 'react';
import { Lesson } from '../../../types/course';

const LessonContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Cleaning or Replacing Fuel Filters</h1>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-blue-800">Video Reference: https://youtu.be/ypz-T-Z_roM?si=YrwsAk43p46ZQgLy</p>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-3">Purpose of the Fuel Filter</h3>
            <p className="text-gray-700 mb-4">
              The fuel filter is a critical component that removes dirt, rust, and debris from fuel before it reaches the engine, ensuring clean fuel delivery for optimal combustion. Located typically near the fuel tank or along the frame rail, it protects fuel injectors and carburetors from clogging, which can reduce power and efficiency. A clogged filter, common after 30,000–50,000 kilometres in South African conditions with variable fuel quality, restricts flow, causing misfires or poor acceleration.
            </p>
            <p className="text-gray-700">
              Learners will explore filter functions through virtual simulations, visualizing how contaminants affect injector spray patterns. Regular replacement prevents fuel pump strain and maintains pressure (typically 3–4 bar for petrol engines). Mechanics mastering this skill ensure smooth engine performance, preventing issues like stalling, which can cost clients R5,000+ in repairs. The AI voice tutor can explain filter specifications, diagnose clogging symptoms, or guide filter location in specific vehicles, enhancing maintenance accuracy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-3">Signs of a Clogged Fuel Filter</h3>
            <p className="text-gray-700 mb-4">
              A clogged fuel filter manifests through symptoms like difficulty starting, reduced fuel efficiency (e.g., 10–15% mileage drop), hesitation or stalling during acceleration, and loss of power at high speeds. These issues, often noticeable after 30,000 kilometres, result from restricted fuel flow, starving the engine of fuel and causing incomplete combustion. Additional signs include a whining fuel pump or a check engine light triggered by low pressure (e.g., below 2.5 bar).
            </p>
            <p className="text-gray-700">
              In South Africa, poor fuel quality can accelerate clogging, especially in rural areas. Learners will diagnose these symptoms in virtual scenarios, using tools like OBD2 scanners to read codes (e.g., P0171 for lean mixture). Regular checks every 10,000 kilometres prevent severe engine damage, such as injector failure costing R2,000 per unit. Mechanics mastering this skill address client complaints like sluggish performance, ensuring reliability. The AI voice tutor can guide learners through symptom analysis or scanner use, ensuring precise diagnostics.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-3">Cleaning or Replacing Fuel Filters</h3>
            <p className="text-gray-700 mb-4">
              Fuel filters should be replaced every 30,000–50,000 kilometres for petrol engines, or sooner if symptoms like stalling or misfires occur. The process involves relieving system pressure by removing the fuel pump fuse and running the engine until it stalls, locating the filter (often under the car), and replacing it with a new unit, ensuring correct flow direction. Reusable filters, found in some older vehicles, can be cleaned with fuel or carb cleaner but must be dried completely.
            </p>
            <p className="text-gray-700">
              Learners will simulate replacements, practicing safe handling to avoid fuel spills in virtual scenarios. In South Africa, where dust can contaminate fuel, timely replacement prevents pump strain, which can cost R3,000 to replace. Incorrect orientation can cause fuel starvation, leading to engine damage. Mechanics mastering this task ensure consistent fuel delivery, enhancing vehicle longevity. The AI voice tutor can guide learners through pressure relief, filter orientation, or cleaning procedures, ensuring safe and accurate maintenance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-3">Maintenance Tips for Fuel System Health</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-blue-800">Video Reference: https://youtu.be/5wzzbJa6n94?si=JT2FEyUwWyvlLfjt</p>
            </div>
            <p className="text-gray-700 mb-4">
              Maintaining fuel system health involves using high-quality fuel (95 octane for most South African vehicles), replacing filters every 30,000–50,000 kilometres, inspecting fuel lines annually for leaks or corrosion, and using cleaners every 5,000–10,000 kilometres. Monitoring fuel pump performance (e.g., listening for whining) and testing pressure with a gauge (3–4 bar) prevent issues like hard starting.
            </p>
            <p className="text-gray-700">
              In South Africa's humid coastal areas, corrosion is a risk, requiring vigilant line checks. Learners will practice these tasks in virtual scenarios, using diagnostic tools like pressure gauges. Neglecting maintenance can lead to injector replacement (R2,000–R5,000) or pump failure (R3,000+). Mechanics mastering these practices ensure efficient fuel delivery, reducing emissions and client costs. The AI voice tutor can explain fuel quality impacts, pressure testing, or local maintenance challenges, enhancing practical skills.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-3">Diagnostic Tools and Safety Tips</h3>
            <p className="text-gray-700 mb-4">
              Diagnostic tools like OBD2 scanners (to read codes like P0172 for rich mixtures), fuel pressure gauges (to verify 3–4 bar), and injector pulse testers (to check injector firing) are essential for fuel system health. Safety is critical: fuel is flammable, so work in well-ventilated areas, avoid sparks, and wear gloves and goggles. Depressurize the system before opening lines to prevent sprays, which can cause burns or fires.
            </p>
            <p className="text-gray-700">
              Learners will practice using these tools in virtual scenarios, ensuring safe handling of spilled fuel, common in South African workshops due to high temperatures. Proper disposal of old filters and fuel-soaked rags per local regulations (e.g., National Environmental Management: Waste Act) avoids fines. Mechanics mastering these practices maintain safe, efficient workshops, preventing accidents and ensuring reliability. The AI voice tutor can guide learners through tool usage, safety protocols, or disposal regulations, ensuring compliance and accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const lesson6_1: Lesson = {
  id: '6.1',
  title: 'Cleaning or Replacing Fuel Filters',
  content: LessonContent,
  duration: 60,
  objectives: [
    "Understand the purpose and importance of fuel filters in engine operation",
    "Identify signs and symptoms of a clogged fuel filter",
    "Execute proper fuel filter cleaning and replacement procedures",
    "Apply maintenance tips for optimal fuel system health",
    "Use diagnostic tools safely for fuel system assessment"
  ],
  keyTerms: [
    "Fuel filter",
    "Fuel contamination",
    "System pressure relief",
    "Flow direction",
    "Fuel pump strain",
    "OBD2 scanner",
    "Fuel pressure gauge",
    "Filter orientation"
  ]
};