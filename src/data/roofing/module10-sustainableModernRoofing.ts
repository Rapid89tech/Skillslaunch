
import type { Module } from '@/types/course';

export const module10SustainableModernRoofing: Module = {
  id: 10,
  title: 'Sustainable and Modern Roofing Solutions',
  description: 'Explore green roofs, cool roofs, solar systems, energy-efficient roofing, and environmental considerations for sustainable construction practices.',
  lessons: [
    {
      id: 37,
      title: 'Green Roofs and Cool Roofs',
      duration: '45 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <h2>🌿 Green Roofs and Cool Roofs</h2>
          
          <h3>1. Introduction</h3>
          <p>As cities grow and temperatures rise, sustainable roofing systems like green roofs and cool roofs help reduce energy use, manage stormwater, and improve environmental quality.</p>
          
          <h3>2. Definition of Green Roofs and Cool Roofs</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Roof Type</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Description</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;"><strong>Green Roof</strong></td>
              <td style="border: 1px solid #ddd; padding: 12px;">A vegetated roofing system with soil, plants, and waterproof layers</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;"><strong>Cool Roof</strong></td>
              <td style="border: 1px solid #ddd; padding: 12px;">A reflective roofing system that reduces heat absorption and indoor temps</td>
            </tr>
          </table>
          
          <h3>3. Green Roofs</h3>
          <h4>A. Components of a Green Roof</h4>
          <ul>
            <li><strong>Vegetation layer</strong> – Grasses, shrubs, or even small trees</li>
            <li><strong>Growing medium</strong> – Lightweight soil or substrate</li>
            <li><strong>Filter fabric</strong> – Prevents soil erosion</li>
            <li><strong>Drainage layer</strong> – Manages water runoff</li>
            <li><strong>Root barrier</strong> – Stops plant roots from penetrating the roof</li>
            <li><strong>Waterproofing membrane</strong> – Protects the roof structure</li>
          </ul>
          
          <h4>B. Types of Green Roofs</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Type</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Description</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Maintenance</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;"><strong>Extensive</strong></td>
              <td style="border: 1px solid #ddd; padding: 12px;">Light, shallow (2–6 inches), low-maintenance</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Low</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;"><strong>Intensive</strong></td>
              <td style="border: 1px solid #ddd; padding: 12px;">Deep soil (6+ inches), supports shrubs/trees</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;"><strong>Semi-intensive</strong></td>
              <td style="border: 1px solid #ddd; padding: 12px;">Mix of both types</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Moderate</td>
            </tr>
          </table>
          
          <h4>C. Benefits of Green Roofs</h4>
          <ul>
            <li>Insulation (reduces heating/cooling costs)</li>
            <li>Reduces urban heat island effect</li>
            <li>Improves air quality</li>
            <li>Manages stormwater runoff</li>
            <li>Extends roof lifespan</li>
            <li>Provides biodiversity and green space</li>
          </ul>
          
          <h4>D. Limitations of Green Roofs</h4>
          <ul>
            <li>Higher initial cost</li>
            <li>Structural load requirements</li>
            <li>Maintenance needs</li>
            <li>Requires skilled installation</li>
          </ul>
          
          <h3>4. Cool Roofs</h3>
          <h4>A. What Makes a Roof "Cool"?</h4>
          <p>A cool roof reflects more sunlight and absorbs less heat than a standard roof. Its performance is measured by:</p>
          <ul>
            <li><strong>Solar Reflectance (Albedo):</strong> Ability to reflect sunlight (0 = absorbs all, 1 = reflects all)</li>
            <li><strong>Thermal Emittance:</strong> Ability to release absorbed heat</li>
          </ul>
          
          <h4>B. Cool Roof Materials</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Material Type</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Description</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Reflectance Rating</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">White roof coatings</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Elastomeric, acrylic, silicone</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High (0.8–0.9)</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Reflective shingles</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Asphalt with reflective granules</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Medium (0.25–0.4)</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Metal roofs (coated)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Painted or bare metal</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Medium–High (0.3–0.7)</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Tiles (clay/concrete)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Naturally reflective or glazed coatings</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Medium–High</td>
            </tr>
          </table>
          
          <h4>C. Benefits of Cool Roofs</h4>
          <ul>
            <li>Reduces roof surface temperature (by up to 50°F)</li>
            <li>Lowers indoor temperature and cooling costs</li>
            <li>Increases occupant comfort</li>
            <li>Extends roof and HVAC system lifespan</li>
            <li>Helps mitigate urban heat island effect</li>
          </ul>
          
          <h4>D. Limitations of Cool Roofs</h4>
          <ul>
            <li>Less effective in cold climates</li>
            <li>Reflective glare (especially metal roofs)</li>
            <li>Coating may degrade over time</li>
            <li>Doesn't manage stormwater like green roofs</li>
          </ul>
          
          <h3>5. Comparison: Green Roof vs. Cool Roof</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Feature</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Green Roof</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Cool Roof</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Primary Benefit</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Stormwater, insulation, aesthetics</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Heat reflection, cooling costs</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Maintenance</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Moderate to High</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Low to Moderate</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Installation Cost</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Low to Moderate</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Lifespan</td>
              <td style="border: 1px solid #ddd; padding: 12px;">30–50+ years</td>
              <td style="border: 1px solid #ddd; padding: 12px;">15–25 years</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Weight Load</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High (needs structural support)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Low</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Urban Heat Island</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Reduces</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Reduces</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Environmental Impact</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Very Positive</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Positive</td>
            </tr>
          </table>
          
          <h3>6. Applications and Suitability</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Building Type</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Best Roof Type</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Residential (hot climate)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Cool roof</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Urban apartment or school</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Green roof</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Industrial facility</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Cool roof</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Commercial office rooftop</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Green or hybrid system</td>
            </tr>
          </table>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
            <h4>🌱 Pro Tip</h4>
            <p><em>"Think of the roof not just as a cover—but as a climate control system and environmental partner."</em></p>
          </div>
        `
      }
    },
    {
      id: 38,
      title: 'Solar Roofing Systems',
      duration: '40 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <h2>🧾 Solar Roofing Systems</h2>
          
          <h3>1. Introduction</h3>
          <p>Solar roofing systems are innovative solutions that integrate solar energy technologies with traditional roofing materials to generate electricity from sunlight. As renewable energy becomes more essential, solar roofs offer sustainable power while reducing utility costs and carbon emissions.</p>
          
          <h4>🔋 Key Benefits:</h4>
          <ul>
            <li>Converts sunlight into electricity</li>
            <li>Reduces energy bills</li>
            <li>Increases property value</li>
            <li>Supports environmental sustainability</li>
          </ul>
          
          <h3>2. Types of Solar Roofing Systems</h3>
          <h4>A. Photovoltaic (PV) Panels (Racked Systems)</h4>
          <ul>
            <li>Mounted on top of existing roofing</li>
            <li>Most common type</li>
            <li>Can be tilted or flush with the roof surface</li>
          </ul>
          
          <h4>B. Building-Integrated Photovoltaics (BIPV)</h4>
          <ul>
            <li>Solar cells integrated directly into roofing materials like shingles or tiles</li>
            <li>Aesthetically appealing and dual-purpose (roof + solar)</li>
          </ul>
          
          <h4>C. Solar Shingles (Solar Roof Tiles)</h4>
          <ul>
            <li>Mimic traditional asphalt shingles or tiles</li>
            <li>Contain embedded solar cells</li>
            <li>Provide both roofing protection and energy production</li>
          </ul>
          
          <h3>3. Key Components of a Solar Roofing System</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Component</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Function</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Solar Panels/Shingles</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Capture sunlight and convert it into DC electricity</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Inverter</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Converts DC to AC for home or grid use</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Mounting System</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Attaches panels to roof structure</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Electrical Wiring</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Connects system components</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Monitoring System</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Tracks energy production and performance</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Battery Storage (Optional)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Stores excess energy for later use</td>
            </tr>
          </table>
          
          <h3>4. Roof Suitability for Solar Installation</h3>
          <h4>🏠 Factors to Assess:</h4>
          <ul>
            <li><strong>Orientation:</strong> South-facing roofs receive most sunlight (Northern Hemisphere)</li>
            <li><strong>Tilt Angle:</strong> Ideal between 15–40° depending on latitude</li>
            <li><strong>Shading:</strong> Minimal shade from trees, chimneys, or nearby buildings</li>
            <li><strong>Roof Condition:</strong> Should be structurally sound and not due for replacement soon</li>
          </ul>
          
          <h3>5. Installation Considerations</h3>
          <ul>
            <li><strong>Structural Load:</strong> Ensure roof can support additional weight</li>
            <li><strong>Permitting and Codes:</strong> Follow local regulations and obtain required permits</li>
            <li><strong>Wiring and Safety:</strong> Proper grounding, fire safety measures, disconnects</li>
            <li><strong>Coordination with Roofing:</strong> Preferably install solar with new or re-roofing projects</li>
          </ul>
          
          <h3>6. Energy and Cost Savings</h3>
          <h4>📉 Potential Benefits:</h4>
          <ul>
            <li>Lower monthly electricity bills</li>
            <li>Payback period typically 5–10 years</li>
            <li>Eligible for government incentives and tax credits (e.g., ITC)</li>
          </ul>
          
          <h3>7. Maintenance of Solar Roofing Systems</h3>
          <ul>
            <li><strong>Minimal upkeep:</strong> No moving parts</li>
            <li><strong>Periodic inspection:</strong> Clean panels, check wiring and mounts</li>
            <li><strong>Monitoring systems:</strong> Help identify performance issues quickly</li>
          </ul>
          
          <h3>8. Advantages and Disadvantages</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Advantages</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Disadvantages</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Reduces reliance on grid power</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High upfront cost</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Low maintenance</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Dependent on sunlight availability</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Long lifespan (25+ years)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Requires suitable roof orientation</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Incentives and rebates available</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Roof repairs require panel removal</td>
            </tr>
          </table>
          
          <h3>9. Case Study: Tesla Solar Roof</h3>
          <ul>
            <li><strong>Integrated design:</strong> Looks like conventional roofing</li>
            <li><strong>Durability:</strong> Tempered glass shingles</li>
            <li><strong>Monitoring via app:</strong> Real-time performance tracking</li>
            <li><strong>Bundled with Powerwall:</strong> Battery storage option</li>
          </ul>
          
          <h3>10. Environmental Impact</h3>
          <ul>
            <li>Solar roofs help reduce carbon footprint</li>
            <li>Support clean energy transition</li>
            <li>Offset greenhouse gas emissions over the system's lifetime</li>
          </ul>
          
          <div style="background-color: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; margin: 20px 0;">
            <h4>🔧 Pro Tip</h4>
            <p><em>"Always assess roof condition and solar potential before installation to ensure long-term performance and safety."</em></p>
          </div>
        `
      }
    },
    {
      id: 39,
      title: 'Energy-Efficient Roofing',
      duration: '35 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <h2>🧾 Energy-Efficient Roofing</h2>
          
          <h3>1. Introduction</h3>
          <p>Energy-efficient roofing refers to roofing systems designed to reduce heat gain, improve indoor comfort, and lower energy consumption. These roofs play a key role in sustainable construction and climate control, particularly in hot or variable climates.</p>
          
          <h4>🎯 Objectives of Energy-Efficient Roofing:</h4>
          <ul>
            <li>Reduce air conditioning (cooling) loads</li>
            <li>Improve building insulation</li>
            <li>Lower utility bills</li>
            <li>Extend roof and HVAC system life</li>
            <li>Enhance environmental performance</li>
          </ul>
          
          <h3>2. Key Characteristics of Energy-Efficient Roofs</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Feature</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Benefit</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">High solar reflectance (albedo)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Reflects more sunlight, reduces heat gain</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">High thermal emittance</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Radiates absorbed heat away from the roof</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Good insulation</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Reduces heat transfer to building interior</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Durable and weather-resistant</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Minimizes maintenance and repairs</td>
            </tr>
          </table>
          
          <h3>3. Types of Energy-Efficient Roofing Systems</h3>
          <h4>A. Cool Roofs</h4>
          <p>Use materials that reflect more sunlight and absorb less heat. Can be white, light-colored, or coated with reflective materials.</p>
          
          <h5>Common Cool Roof Materials:</h5>
          <ul>
            <li>White thermoplastic (TPO, PVC)</li>
            <li>Coated metal roofs</li>
            <li>Elastomeric roof coatings</li>
            <li>Cool asphalt shingles (light-colored or reflective granules)</li>
          </ul>
          
          <h4>B. Green Roofs (Vegetative Roofs)</h4>
          <ul>
            <li>Roofs covered with plants and a growing medium</li>
            <li>Provide insulation, absorb rainwater, and reduce urban heat island effect</li>
          </ul>
          
          <h4>C. Insulated Roofing Panels</h4>
          <ul>
            <li>Structural panels with built-in insulation (e.g., SIPs)</li>
            <li>Used in energy-efficient buildings and retrofits</li>
          </ul>
          
          <h3>4. Roofing Material Comparison</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Material</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Reflectivity</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Insulation</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Lifespan</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Notes</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">White TPO Membrane</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Low</td>
              <td style="border: 1px solid #ddd; padding: 12px;">20–30 yrs</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Ideal for flat/commercial roofs</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Metal (coated)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Medium–High</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Low</td>
              <td style="border: 1px solid #ddd; padding: 12px;">40–70 yrs</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Durable, recyclable</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Asphalt Shingles</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Low–Medium</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Low</td>
              <td style="border: 1px solid #ddd; padding: 12px;">15–30 yrs</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Cool shingles available</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Tile (Clay/Concrete)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Medium</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Medium</td>
              <td style="border: 1px solid #ddd; padding: 12px;">50+ yrs</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Heavy; good for hot climates</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Green Roof</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High (indirect)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Varies</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Needs structural reinforcement</td>
            </tr>
          </table>
          
          <h3>5. Insulation and R-Value</h3>
          <p>Insulation improves energy efficiency by slowing heat transfer. R-Value is a measure of thermal resistance – higher values mean better insulation.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Insulation Type</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">R-Value per Inch</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Application</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Polyisocyanurate (Polyiso)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">R-6 to R-6.5</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Common in commercial roofs</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Extruded Polystyrene (XPS)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">R-5</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Below membrane or deck</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Expanded Polystyrene (EPS)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">R-3.5 to R-4.5</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Less expensive, widely used</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Spray Foam (SPF)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">R-6 to R-7</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Provides seamless coverage</td>
            </tr>
          </table>
          
          <h3>6. Climate Considerations</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Climate Type</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Recommended Roofing Feature</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Hot & Sunny</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High-reflectivity roofing (e.g., white TPO)</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Cold</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High insulation; dark roofs may aid in heat gain</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Mixed/Variable</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Balance between reflectivity and insulation</td>
            </tr>
          </table>
          
          <div style="background-color: #fff3e0; padding: 15px; border-left: 4px solid #ff9800; margin: 20px 0;">
            <h4>🔧 Pro Tip</h4>
            <p><em>"The most energy-efficient roof is one that reflects, insulates, and breathes."</em></p>
          </div>
        `
      }
    },
    {
      id: 40,
      title: 'Environmental Considerations and Recycling',
      duration: '38 min',
      type: 'video',
      content: {
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        textContent: `
          <h2>🧾 Environmental Considerations and Recycling</h2>
          
          <h3>1. Introduction</h3>
          <p>Environmental sustainability has become a major priority in the construction industry. With increasing awareness of climate change, resource scarcity, and pollution, builders and contractors must consider the environmental impact of their materials, processes, and waste. Recycling plays a key role in reducing the ecological footprint of construction activities.</p>
          
          <h3>2. What Are Environmental Considerations in Construction?</h3>
          <p>Environmental considerations refer to decisions made during the planning, design, construction, and demolition phases that aim to reduce negative environmental impact.</p>
          
          <h4>🌍 Key Goals:</h4>
          <ul>
            <li>Conserve natural resources</li>
            <li>Reduce greenhouse gas emissions</li>
            <li>Minimize waste and pollution</li>
            <li>Improve indoor air quality</li>
            <li>Promote energy efficiency and sustainability</li>
          </ul>
          
          <h3>3. Key Environmental Concerns in Roofing and Construction</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Concern</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Impact</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Material extraction</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Depletes natural resources, habitat loss</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Manufacturing emissions</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Releases CO₂ and pollutants</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Construction waste</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Fills landfills; costly to dispose of</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Toxic materials</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Affects health and environment</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Energy usage</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Increases carbon footprint</td>
            </tr>
          </table>
          
          <h3>4. Sustainable Material Selection</h3>
          <p>Choosing environmentally responsible materials is the first step in reducing impact.</p>
          
          <h4>✅ Sustainable Material Criteria:</h4>
          <ul>
            <li>Recycled content</li>
            <li>Locally sourced</li>
            <li>Renewable or rapidly renewable</li>
            <li>Low VOCs (Volatile Organic Compounds)</li>
            <li>Durable and long-lasting</li>
          </ul>
          
          <h4>Examples:</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Material</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Sustainable Feature</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Metal roofing</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Recyclable, long lifespan</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Recycled rubber shingles</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Made from old tires</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Bamboo decking</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Rapidly renewable</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Cellulose insulation</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Made from recycled paper</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Low-VOC adhesives</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Improve indoor air quality</td>
            </tr>
          </table>
          
          <h3>5. Construction Waste Statistics</h3>
          <ul>
            <li>Construction and demolition (C&D) activities generate over 500 million tons of waste annually in the U.S.</li>
            <li>Up to 75% of this waste is recyclable, yet much ends up in landfills.</li>
          </ul>
          
          <h3>6. Recycling in Construction</h3>
          <p>Recycling helps minimize landfill use and resource extraction.</p>
          
          <h4>♻️ Commonly Recycled Construction Materials:</h4>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Material</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Recycled Use</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Asphalt shingles</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Road paving, new shingles</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Concrete and bricks</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Road base, backfill</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Wood</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Mulch, engineered wood products</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Metals (steel, copper)</td>
              <td style="border: 1px solid #ddd; padding: 12px;">New metal products</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Cardboard</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Packaging reuse, paper production</td>
            </tr>
          </table>
          
          <h3>7. Roofing Material Recycling</h3>
          <p>Roofing produces a significant amount of waste—especially during re-roofing and demolition.</p>
          
          <h4>Asphalt Shingles:</h4>
          <ul>
            <li>Can be ground and reused in hot-mix asphalt for roads</li>
            <li>Reduces need for virgin asphalt and oil</li>
          </ul>
          
          <h4>Metal Roofing:</h4>
          <ul>
            <li>Fully recyclable at end of life</li>
            <li>Often made from recycled materials already</li>
          </ul>
          
          <h3>8. Deconstruction vs. Demolition</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Method</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Description</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Environmental Impact</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Demolition</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Rapid tearing down of structures</td>
              <td style="border: 1px solid #ddd; padding: 12px;">High waste generation</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Deconstruction</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Careful dismantling to salvage materials</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Reduces waste, supports reuse</td>
            </tr>
          </table>
          
          <h3>9. LEED and Green Building Certification</h3>
          <p>Environmental considerations can earn points toward LEED (Leadership in Energy and Environmental Design) certification.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Category</th>
              <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">LEED Credit Example</th>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Materials and Resources</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Construction Waste Management</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Energy and Atmosphere</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Use of reflective roofing</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Indoor Environmental Quality</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Use of low-VOC materials</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ddd; padding: 12px;">Sustainable Sites</td>
              <td style="border: 1px solid #ddd; padding: 12px;">Reuse of existing materials</td>
            </tr>
          </table>
          
          <h3>10. On-Site Waste Management Practices</h3>
          <h4>📦 Best Practices:</h4>
          <ul>
            <li>Separate recyclable from non-recyclable waste</li>
            <li>Use labeled bins for sorting</li>
            <li>Track and report waste diversion rates</li>
            <li>Train workers on sustainable practices</li>
            <li>Partner with local recycling facilities</li>
          </ul>
          
          <h3>11. Benefits of Recycling and Environmental Design</h3>
          <h4>🌱 Environmental:</h4>
          <ul>
            <li>Conserves resources</li>
            <li>Reduces landfill use</li>
            <li>Lowers emissions and pollution</li>
          </ul>
          
          <h4>💰 Economic:</h4>
          <ul>
            <li>Saves disposal costs</li>
            <li>Reduces need for new materials</li>
            <li>Can qualify for tax credits or green incentives</li>
          </ul>
          
          <h4>🧠 Social:</h4>
          <ul>
            <li>Promotes corporate responsibility</li>
            <li>Improves worker and occupant health</li>
            <li>Enhances company image and community relations</li>
          </ul>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
            <h4>🔧 Pro Tip</h4>
            <p><em>"Every shingle, board, or brick you recycle is a step toward a cleaner, more sustainable future."</em></p>
          </div>
        `
      }
    },
    {
      id: 41,
      title: 'Energy-Efficient Roofing Knowledge Quiz',
      duration: '15 min',
      type: 'quiz',
      content: {
        questions: [
          {
            question: 'What is the main goal of energy-efficient roofing?',
            options: [
              'Increase heating needs',
              'Reduce heat gain and lower energy consumption',
              'Increase roof weight',
              'Use the cheapest materials'
            ],
            correct: 1,
            explanation: 'The main goal of energy-efficient roofing is to reduce heat gain and lower energy consumption, which helps improve indoor comfort and reduces utility costs.'
          },
          {
            question: 'Which of the following roofing materials is commonly used in cool roofs?',
            options: [
              'Black asphalt shingles',
              'White thermoplastic (TPO) membrane',
              'Untreated wood shingles',
              'Clay tiles without coating'
            ],
            correct: 1,
            explanation: 'White thermoplastic (TPO) membrane is commonly used in cool roofs because of its high solar reflectance properties that help reduce heat absorption.'
          },
          {
            question: 'What does a high solar reflectance (albedo) roof material do?',
            options: [
              'Absorbs more heat',
              'Reflects more sunlight to reduce heat gain',
              'Increases indoor temperature',
              'Increases roof weight'
            ],
            correct: 1,
            explanation: 'High solar reflectance (albedo) materials reflect more sunlight away from the roof surface, reducing heat gain and keeping buildings cooler.'
          },
          {
            question: 'Which roofing type involves covering the roof with plants and a growing medium?',
            options: [
              'Cool roof',
              'Green roof',
              'Metal roof',
              'Asphalt shingle roof'
            ],
            correct: 1,
            explanation: 'Green roofs are vegetated roofing systems that include plants and growing medium, providing insulation and environmental benefits.'
          },
          {
            question: 'What is the purpose of insulation in roofing, and what does a higher R-value indicate?',
            options: [
              'Increase heat transfer; lower insulation',
              'Reduce heat transfer; better insulation',
              'Reflect sunlight; lower durability',
              'Absorb moisture; poor insulation'
            ],
            correct: 1,
            explanation: 'Insulation reduces heat transfer between the interior and exterior of a building. A higher R-value indicates better thermal resistance and insulation performance.'
          },
          {
            question: 'Which climate is best suited for roofs with high reflectivity and light colors?',
            options: [
              'Cold and snowy',
              'Hot and sunny',
              'Mixed/variable',
              'Rainy and humid'
            ],
            correct: 1,
            explanation: 'Hot and sunny climates benefit most from high-reflectivity, light-colored roofs that reflect solar radiation and reduce cooling loads.'
          },
          {
            question: 'Why is attic ventilation important in energy-efficient roofing?',
            options: [
              'To increase roof weight',
              'To prevent heat buildup and maintain insulation effectiveness',
              'To reduce solar reflectance',
              'To store rainwater'
            ],
            correct: 1,
            explanation: 'Attic ventilation prevents heat buildup in summer, helps maintain insulation effectiveness, and reduces cooling demand by allowing hot air to escape.'
          },
          {
            question: 'Which of these is NOT an environmental benefit of energy-efficient roofing?',
            options: [
              'Reduces greenhouse gas emissions',
              'Mitigates urban heat island effect',
              'Increases peak electricity demand',
              'Lowers cooling energy consumption'
            ],
            correct: 2,
            explanation: 'Energy-efficient roofing actually reduces peak electricity demand, not increases it. It helps lower overall energy consumption during peak cooling periods.'
          },
          {
            question: 'What is a common certification program that evaluates reflective roofing products?',
            options: [
              'ENERGY STAR®',
              'OSHA',
              'EPA Lead Program',
              'NFPA 70'
            ],
            correct: 0,
            explanation: 'ENERGY STAR® is a widely recognized certification program that evaluates and labels energy-efficient products, including reflective roofing materials.'
          },
          {
            question: 'Which of the following is a maintenance tip for energy-efficient roofs?',
            options: [
              'Use dark, heat-absorbing materials in hot climates',
              'Ignore local building codes',
              'Maintain clean roof surfaces for consistent performance',
              'Avoid ventilation installation'
            ],
            correct: 2,
            explanation: 'Maintaining clean roof surfaces is important for energy-efficient roofs to ensure consistent performance, especially for reflective surfaces that can lose effectiveness when dirty.'
          }
        ]
      }
    }
  ]
};
