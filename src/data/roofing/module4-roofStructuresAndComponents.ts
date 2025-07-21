
import { Module } from '@/types/course';
import { VideoLesson, QuizLesson } from '@/types/course';

const lesson10RoofShapes: VideoLesson = {
  id: 10,
  title: 'Roof Shapes and Designs',
  duration: '55 minutes',
  type: 'video',
  content: {
    videoUrl: 'roof-types-explained-pros-cons',
    textContent: `
# Roof Shapes and Designs

## 1. Introduction to Roof Shapes

Roof shapes refer to the architectural design and slope configuration of a roof. They are critical for:
- Aesthetics
- Water drainage
- Wind resistance
- Interior space (attic, lofts)
- Structural efficiency

## 2. Common Roof Types

### A. Gable Roof
**Description:** Two sloping sides that meet at a central ridge, forming a triangular wall at each end (the gable)

**Advantages:**
- Simple and cost-effective
- Excellent water and snow runoff
- Good ventilation and attic space

**Disadvantages:**
- Prone to wind damage (can uplift gable ends)

### B. Hip Roof
**Description:** All four sides slope downward to the walls with no vertical ends

**Advantages:**
- Very stable and durable in high winds
- Better rain and snow runoff
- Supports eaves on all sides for shade

**Disadvantages:**
- More complex and expensive to build
- Less attic space compared to gable roofs

### C. Gambrel Roof
**Description:** Similar to a gable, but each side has two slopes - upper slope is shallow, lower slope is steeper

**Advantages:**
- Maximizes headroom and storage (barns, attics)
- Distinctive and historic appearance

**Disadvantages:**
- Complex framing
- Not ideal for heavy snow unless well-engineered

### D. Mansard Roof
**Description:** A four-sided gambrel roof where each side has two slopes, with the lower slope much steeper

**Advantages:**
- Maximizes interior living space (ideal for lofts or attics)
- Classic French architectural style

**Disadvantages:**
- Expensive and complex to construct
- Requires proper drainage design

### E. Flat Roof
**Description:** Low slope or completely flat (usually 1–10° slope)

**Advantages:**
- Economical for large buildings
- Easy to build and access (e.g., HVAC maintenance)
- Can be used as a terrace or green roof

**Disadvantages:**
- Poor drainage — water pooling risk
- Not ideal in heavy rain or snow climates

### F. Shed Roof (Lean-to)
**Description:** A single sloped surface attached to a taller wall

**Advantages:**
- Simple and low-cost
- Ideal for additions or modern designs

**Disadvantages:**
- Limited attic space
- Less traditional appearance

### G. Butterfly Roof
**Description:** Two roof surfaces sloping inward to form a valley

**Advantages:**
- Modern aesthetic
- Rainwater collection potential

**Disadvantages:**
- Complex drainage requirements
- Expensive to construct and maintain

### H. Dormer Roof
**Description:** A small roofed projection from a main sloped roof, often containing a window

**Advantages:**
- Increases natural light and usable attic space
- Adds charm to design

**Disadvantages:**
- Adds complexity and potential leak points

## 3. Comparison Table of Roof Designs

| Roof Type | Slope Sides | Aesthetic | Drainage | Wind Resistance | Interior Space |
|-----------|-------------|-----------|----------|-----------------|----------------|
| Gable | 2 | Classic | Excellent | Moderate | Good |
| Hip | 4 | Elegant | Excellent | High | Limited |
| Gambrel | 2 (double) | Rustic | Good | Moderate | Excellent |
| Mansard | 4 (double) | Formal | Moderate | Low–Moderate | Excellent |
| Flat | 1 (low) | Modern | Poor | Low | Good |
| Shed | 1 | Minimalist | Good | Low–Moderate | Limited |
| Butterfly | 2 (inward) | Ultra-modern | Moderate | Moderate | Good |

## 4. Factors Influencing Roof Design Selection

### Climate:
- Snow = steep slopes (gable, hip)
- Rain = good drainage (avoid flat)
- Wind = aerodynamic shapes (hip, mansard)

### Functionality:
- Living space needs (gambrel, mansard)
- HVAC/solar equipment (flat, shed)

### Aesthetics & Architecture:
- Traditional (gable, hip) vs. modern (flat, butterfly)

### Cost & Complexity:
- Simpler roofs (gable, shed) are cheaper and faster to build
- Complex roofs (mansard, dormer) need skilled labor and more materials

## 5. Discussion Questions

1. Which roof shape is most appropriate for a house in a snowy region and why?
2. How does a gambrel roof benefit agricultural structures?
3. What are the advantages of using a hip roof in a hurricane-prone area?
4. In what situations would a flat roof be the best choice?
5. How do dormers impact both the function and appearance of a roof?
    `
  }
};

const lesson11DeckingSheathing: VideoLesson = {
  id: 11,
  title: 'Decking and Sheathing',
  duration: '45 minutes',
  type: 'video',
  content: {
    videoUrl: 'roof-sheathing-installation-guide',
    textContent: `
# Decking / Sheathing

## 1. Definition of Decking (Sheathing)

Decking (also called roof sheathing) is the structural base layer that is attached to the roof framing. It provides a flat, stable surface for installing roofing materials such as underlayment, shingles, metal panels, or tiles.

## 2. Functions of Roof Decking

- **Structural Support:** Distributes weight evenly across roof trusses or rafters
- **Fastening Base:** Provides a surface to which roofing materials are nailed or screwed
- **Weather Barrier:** Helps prevent wind uplift and adds some resistance against moisture when properly sealed
- **Fire Rating & Insulation:** Can improve fire resistance and thermal performance when using special types of sheathing

## 3. Common Types of Decking Materials

| Material Type | Description | Typical Uses |
|---------------|-------------|--------------|
| Plywood | Layers of wood veneer glued together, strong and dimensionally stable | Residential and commercial roofs |
| OSB (Oriented Strand Board) | Compressed wood strands and adhesives, cost-effective and widely used | Most common modern choice |
| Plank Sheathing | Solid wood boards (1x6 or 1x8), used in older construction | Historical homes, tile roofs |
| Tongue-and-Groove | Interlocking planks for added support and aesthetics | Exposed beam ceilings, upscale roofs |
| Metal Decking | Corrugated steel panels used in commercial flat roofs | Industrial and large commercial roofs |
| Concrete Decking | Poured or precast concrete slabs | High-rise buildings or flat roofs |

## 4. Thickness and Span Ratings

Decking must meet span and load ratings depending on:
- Roof load (snow, wind, live/dead loads)
- Rafter spacing (typically 16" or 24" on center)

**Typical thickness:**
- Plywood/OSB: 3/8", 7/16", 1/2", or 5/8"
- Minimum code requirement: 7/16" OSB or 15/32" plywood for standard asphalt roofing

## 5. Installation Considerations

### A. Nailing & Fasteners
- Nails or screws are spaced along edges and field (usually 6" on edges, 12" in the center)
- Proper fastening prevents warping and uplift

### B. Ventilation Gaps
- Gaps (about 1/8") are often left between panels to allow for expansion due to moisture

### C. Underlayment
- Installed above decking to protect against moisture before and during roofing installation

### D. Sheathing Clips
- Metal clips used between panels to improve alignment and strength (especially with OSB or plywood)

## 6. Signs of Decking Damage or Failure

- Sagging or soft spots in the roof
- Leaks or water stains inside the building
- Rotting or delaminated wood
- Mold or mildew due to trapped moisture
- Damaged decking must be replaced before re-roofing

## 7. Sheathing for Different Roofing Types

| Roofing Type | Recommended Decking |
|--------------|-------------------|
| Asphalt Shingles | Plywood or OSB (minimum 7/16") |
| Metal Roofing | Solid decking (OSB or plywood), may allow for spaced sheathing in some cases |
| Tile (Clay or Concrete) | Plywood, OSB, or plank decking (with underlayment) |
| Slate | Strong plywood or plank decking with high load capacity |
| Wood Shingles/Shakes | Spaced plank decking (allows air flow) or solid decking with battens |

## 8. Building Codes and Best Practices

- Follow local building codes for material, thickness, span, and fastening
- APA-rated panels should be used (marked for span/load requirements)
- Sheathing must be dry and clean before installing roofing materials
- Do not install over rotted or compromised framing

## 9. Safety Precautions

- Ensure fall protection when walking on roof decking
- Check for loose panels or weak areas before proceeding with roofing
- Use PPE: gloves, safety glasses, hard hats

## 10. Discussion Questions

1. What are the benefits of OSB compared to plywood for roof decking?
2. Why is it important to leave gaps between decking panels?
3. How does decking choice change with different roofing systems?
4. What are the consequences of installing new shingles over rotted decking?
5. What safety practices are necessary when installing or inspecting roof sheathing?
    `
  }
};

const lesson12Underlayment: VideoLesson = {
  id: 12,
  title: 'Underlayment in Roofing',
  duration: '40 minutes',
  type: 'video',
  content: {
    videoUrl: 'roof-underlayment-installation',
    textContent: `
# Underlayment in Roofing

## 1. Definition of Underlayment

Underlayment is a protective layer of material installed directly over the roof decking (sheathing) and beneath the roofing material (e.g., shingles, tiles, metal panels). It acts as a secondary water barrier, shielding the roof structure from moisture, wind, and other elements if the outer roofing fails.

## 2. Functions of Roof Underlayment

- **Waterproofing:** Prevents water intrusion due to wind-driven rain, snow, or leaks
- **Moisture Barrier:** Helps control condensation buildup under the roof covering
- **Protection During Installation:** Shields the decking before the final roofing is installed
- **Improved Fire Resistance:** Some underlayments add a fire-retardant layer
- **Smooth Surface:** Creates an even base for installing roofing materials

## 3. Types of Roofing Underlayment

| Type | Description | Pros | Typical Use |
|------|-------------|------|-------------|
| Asphalt-Saturated Felt | Traditional "felt paper" made from cellulose or fiberglass, saturated with asphalt | Inexpensive, widely available | Asphalt shingles, general |
| Synthetic Underlayment | Made of polymers (e.g., polypropylene or polyethylene), lightweight and durable | Strong, water-resistant, UV-resistant | Modern residential/commercial |
| Rubberized Asphalt (Self-Adhering) | Waterproof membrane with adhesive backing, flexible and self-sealing | Best for waterproofing, ice dams | Low-slope roofs, valleys, eaves |
| Peel-and-Stick Membranes | Similar to rubberized asphalt, sticks directly to decking and seals around nails | Superior leak protection | High-risk water areas |

## 4. Underlayment Weight and Ratings

Measured in "#15" or "#30" (for felt) based on weight per square:
- **#15 Felt:** Lighter, used for steep-slope roofs with minimal exposure
- **#30 Felt:** Thicker, more durable, better for longer exposure or high winds
- **Synthetic Underlayment** is rated by mils (thickness) or grams per square meter (gsm)

## 5. Underlayment Installation Guidelines

### A. Preparation
- Roof deck must be clean, dry, and smooth
- Start at the eaves and work upward, overlapping each row

### B. Overlapping
- Horizontal overlap: Typically 2" to 4"
- Vertical overlap: Minimum 6"
- Chalk lines are used for alignment

### C. Fastening
- Use roofing nails or cap staples (for synthetic/felt)
- Peel-and-stick types require no fasteners

### D. Special Areas
- Use self-adhering membranes in valleys, eaves, hips, and rakes
- Flashings go over underlayment to direct water off the roof

## 6. Underlayment for Different Roofing Systems

| Roofing Type | Recommended Underlayment |
|--------------|-------------------------|
| Asphalt Shingles | Synthetic or #15/#30 felt |
| Metal Roofing | Synthetic underlayment with high-temperature tolerance |
| Clay/Concrete Tiles | Two layers of #30 felt or synthetic + self-adhesive base |
| Wood Shakes/Shingles | Felt with skip sheathing (for ventilation) |
| Slate | Premium synthetic or rubberized underlayment |

## 7. Weather and Exposure Considerations

- Some synthetic underlayments can remain exposed for 90–180 days without degradation
- Felt is generally limited to 7–14 days of exposure
- UV-resistant coatings on synthetic membranes help extend exposure time before final roofing is installed

## 8. Code Requirements and Best Practices

- Local building codes determine type, thickness, and installation standards
- Ice and water shields are often required in colder climates
- Ensure proper integration with roof flashing, vents, and penetrations to avoid leaks

## 9. Safety and Handling

- Underlayment rolls can be heavy and slippery—use proper PPE (gloves, footwear, fall protection)
- Avoid wrinkles or bubbles during installation to prevent uneven surfaces
- Ensure synthetic underlayments are anchored in high winds during construction

## 10. Discussion Questions

1. Why is underlayment important even if the outer roofing material is waterproof?
2. Compare the advantages and disadvantages of felt and synthetic underlayments.
3. What underlayment is best for tile roofs in cold climates?
4. How does underlayment improve a roof's fire resistance and energy efficiency?
5. Why is it important to overlap underlayment sheets during installation?
    `
  }
};

const lesson13FlashingAndDripEdges: VideoLesson = {
  id: 13,
  title: 'Flashing and Drip Edges',
  duration: '50 minutes',
  type: 'video',
  content: {
    videoUrl: 'roof-flashing-installation-guide',
    textContent: `
# Flashing and Drip Edges in Roofing

## 1. Introduction

Flashing and drip edges are essential parts of the roof waterproofing system. They protect vulnerable joints and edges where water can seep into the roof structure.

## 2. What Is Flashing?

Flashing is a thin material (usually metal) installed to prevent water from penetrating the junctions or intersections in a roofing system.

**Common Materials:**
- Galvanized steel
- Aluminum
- Copper
- Lead
- Rubber or plastic (in specific applications)

## 3. Purpose of Flashing

- Directs water away from roof joints or openings (e.g., chimneys, skylights)
- Prevents leaks at weak points of the roof
- Protects the underlayment and decking from water damage
- Essential in areas where two surfaces meet

## 4. Types of Roof Flashing

| Type of Flashing | Location/Use |
|------------------|--------------|
| Step Flashing | Along roof-to-wall intersections, such as chimneys or dormers |
| Valley Flashing | In the valleys where two roof planes meet |
| Vent Pipe Flashing | Around plumbing vents and exhaust pipes |
| Chimney Flashing | Around the base of chimneys (combination of step and counter flashing) |
| Skylight Flashing | Around skylights to prevent leaks |
| Drip Edge Flashing | Along roof edges to guide water into gutters |
| Kick-out Flashing | At roof-wall intersections to divert water away from siding |
| Continuous Flashing | Long pieces used where a roof joins a vertical wall |

## 5. Installation Best Practices for Flashing

- Install under roofing materials but over underlayment in many areas
- Use compatible metals to prevent corrosion (e.g., don't mix copper with steel)
- Secure tightly but allow for thermal expansion
- Seal joints using roofing cement or specialized sealants
- Overlap flashing pieces in the direction of water flow to ensure drainage

## 6. What Are Drip Edges?

A drip edge is a type of metal flashing installed along the roof edges (eaves and rakes) to direct water away from the fascia and into gutters.

**Material:** Typically made of galvanized steel, aluminum, or copper, available in L-shaped or T-shaped profiles

## 7. Purpose of Drip Edges

Prevents water from:
- Wicking under the roofing material
- Damaging the fascia and roof decking
- Causing rot and mold
- Guides water into the gutter system
- Enhances the durability and clean appearance of the roof edge

## 8. Installation Guidelines for Drip Edges

### At Eaves (Bottom Roof Edge):
- Drip edge is installed under underlayment and under shingles

### At Rakes (Sloped Ends of Gable Roof):
- Drip edge is installed over underlayment and under shingles

### General Tips:
- Use corrosion-resistant nails or screws
- Overlap drip edge pieces by at least 2 inches
- Extend drip edge ½ to 1 inch beyond the roof deck to ensure proper water runoff
- Seal corners and junctions to prevent water intrusion

## 9. Common Flashing and Drip Edge Issues

| Problem | Cause | Solution |
|---------|-------|----------|
| Water intrusion at joints | Improper installation or sealing | Reseal or replace flashing |
| Rust or corrosion | Incompatible or old materials | Use proper, rust-resistant metals |
| Ice damming or leaks | Missing or poorly installed drip edge | Add or replace drip edge |
| Loose flashing | Fastener failure or expansion movement | Re-nail and reseal |

## 10. Building Codes and Standards

- Most building codes require drip edges and flashing for all new and replacement roofs
- Flashing must meet material thickness and fastener spacing requirements
- Flashing must be integrated with underlayment and roofing material

## 11. Safety and Handling Tips

- Wear gloves when handling metal flashing to avoid cuts
- Use ladder safety when working on roof edges
- Cut flashing with tin snips or a metal brake for precision
- Always inspect installed flashing for gaps, bends, or lifting edges

## 12. Discussion Questions

1. Why is flashing essential at roof penetrations like chimneys and vents?
2. What problems can arise from missing or improperly installed drip edges?
3. How do you decide whether to use step flashing or continuous flashing?
4. Why should flashing materials be compatible with each other?
5. What safety practices should be followed during flashing installation?
    `
  }
};

const lesson14VentilationSystems: VideoLesson = {
  id: 14,
  title: 'Roof Ventilation Systems',
  duration: '48 minutes',
  type: 'video',
  content: {
    videoUrl: 'roof-ventilation-explained',
    textContent: `
# Roof Ventilation Systems

## 1. Introduction to Roof Ventilation

Roof ventilation is the process of allowing fresh air to flow into and out of the attic or roof space. A properly ventilated roof:
- Reduces heat buildup
- Prevents moisture accumulation
- Extends roof lifespan

Ventilation systems involve a balance of intake vents (usually at the eaves or soffits) and exhaust vents (at or near the roof ridge).

## 2. Purpose of Roof Ventilation

| Benefits | Explanation |
|----------|-------------|
| Heat Reduction | Venting hot air lowers attic temperature and reduces A/C load |
| Moisture Control | Prevents condensation that causes mold, mildew, or wood rot |
| Ice Dam Prevention | Cold air flow maintains uniform roof temp and reduces ice dam risk |
| Improved Indoor Comfort | Balances attic temps for a more comfortable living environment |
| Roof Durability | Prevents premature shingle damage from heat and moisture |

## 3. Types of Roof Ventilation Systems

### Passive Ventilation
Uses natural airflow (wind and temperature differences) to circulate air.

| Type | Location | Function |
|------|----------|----------|
| Ridge Vent | Along roof peak | Exhaust vent; allows hot air to escape |
| Soffit Vent | Under eaves | Intake vent; allows cool air into attic |
| Gable Vent | On gable ends | Horizontal air flow across attic |
| Roof Louvers | Near roof top | Simple static exhaust vent |

### Active Ventilation
Uses mechanical means (motors or turbines) to enhance airflow.

| Type | Description |
|------|-------------|
| Power Ventilator Fans | Electrically powered exhaust fans |
| Solar-Powered Vents | Eco-friendly; powered by sunlight |
| Turbine Vents (Whirlybirds) | Wind-powered spinning exhaust vents |

## 4. Components of a Ventilation System

| Component | Role |
|-----------|------|
| Intake Vents | Draw fresh air into attic space |
| Exhaust Vents | Release hot/moist air to the outside |
| Ventilation Baffles | Prevent insulation from blocking soffit vents |
| Thermostat/Humidistat Controls | Regulate fan operation based on temp or humidity |

## 5. Balanced Ventilation

A balanced system provides equal intake and exhaust to maintain airflow. Common guideline:
- 1 sq. ft. of ventilation per 150 sq. ft. of attic space
- Half of that should be intake, half exhaust (1:1 ratio)
- Example: 1200 sq. ft. attic → 8 sq. ft. total vent area (4 intake, 4 exhaust)

## 6. Signs of Poor Ventilation

- High attic temperatures
- Condensation or frost in attic
- Mold or mildew on rafters or insulation
- Ice dams on roof edges in winter
- Sagging or damaged shingles

## 7. Ventilation and Building Codes

Most modern building codes require roof ventilation, especially in insulated attic spaces. Requirements vary based on:
- Climate zone
- Roof type (flat vs. pitched)
- Attic insulation method

Always check local codes for specific vent area ratios and placement rules.

## 8. Installation Considerations

- Install intake vents low on the roof (e.g., soffits)
- Install exhaust vents high on the roof (e.g., ridges)
- Do not mix different types of exhaust vents (e.g., ridge and turbine) as it can short-circuit airflow
- Keep insulation clear of soffit vents by using baffles
- Ensure air can flow freely through the attic (no blocked vents or pathways)

## 9. Ventilation for Different Roof Types

| Roof Type | Recommended Ventilation |
|-----------|------------------------|
| Gable Roof | Soffit and gable or ridge vents |
| Hip Roof | Continuous soffit and ridge vents |
| Cathedral Ceiling | Continuous ridge with air chutes in rafter bays |
| Flat Roof | Special low-profile or mechanical vents |

## 10. Maintenance Tips

- Inspect vents at least once a year
- Remove debris, nests, or blockages from soffits and ridge vents
- Check for rust or wear on turbine and powered vents
- Confirm electrical connections for power vents are secure and safe
- Replace damaged screens to keep out pests

## 11. Discussion Questions

1. Why is balanced ventilation important in roofing?
2. How does ventilation help prevent ice dams in cold climates?
3. What are the risks of poor ventilation in a roofing system?
4. What is the difference between passive and active ventilation?
5. How should soffit and ridge vents be installed to work together?
    `
  }
};

const lesson15GuttersAndDownspouts: VideoLesson = {
  id: 15,
  title: 'Gutters and Downspouts',
  duration: '42 minutes',
  type: 'video',
  content: {
    videoUrl: 'gutter-installation-maintenance',
    textContent: `
# Gutters and Downspouts

## 1. Introduction

Gutters and downspouts are crucial elements of a roofing system that direct rainwater away from the structure to protect the building's foundation, siding, and landscaping.

- **Gutter:** A horizontal channel installed along the roof edge to collect rainwater
- **Downspout:** A vertical pipe connected to the gutter that carries the water to the ground or a drainage system

## 2. Purpose and Importance

| Function | Description |
|----------|-------------|
| Foundation Protection | Prevents water from pooling near the base of the building, reducing erosion and structural damage |
| Wall Protection | Prevents water from running down exterior walls, reducing staining, rot, and mold growth |
| Basement Flood Prevention | Proper water diversion helps prevent basement leaks and flooding |
| Landscape Preservation | Prevents water from damaging landscaping or washing away soil |
| Roof Longevity | Reduces roof water load and helps prevent fascia and soffit damage |

## 3. Types of Gutters

| Type | Description |
|------|-------------|
| K-Style Gutters | Most common residential type; flat back and bottom with decorative front resembling crown molding |
| Half-Round Gutters | Rounded, U-shaped profile; traditional look, often used on historic homes |
| Box Gutters | Built into the roof edge for a hidden appearance; common in commercial or flat roofs |
| Custom Fascia Gutters | Integrated into the fascia board for a seamless appearance; often used in modern architecture |

## 4. Gutter Materials

| Material | Features & Pros | Cons |
|----------|----------------|------|
| Aluminum | Lightweight, rust-resistant, affordable | Can dent easily |
| Galvanized Steel | Strong, durable | May rust without proper coating |
| Copper | Extremely durable, attractive appearance | Expensive |
| Vinyl (PVC) | Inexpensive, easy to install | Becomes brittle over time in cold climates |
| Zinc | Long-lasting, requires little maintenance | High cost |

## 5. Downspout Options

| Type | Use |
|------|-----|
| Rectangular | Common in residential applications |
| Round | Often used with half-round gutters |
| Flexible | Used in tight spaces or for temporary drainage |
| Splash Blocks/Extensions | Used to redirect water away from the foundation |

## 6. Key Components of Gutter Systems

| Component | Function |
|-----------|----------|
| Gutter Hangers/Brackets | Secure gutters to fascia |
| End Caps | Seal off the ends of gutters |
| Gutter Guards (Screens/Filters) | Prevent debris from clogging gutters |
| Miters/Corners | Connect gutters at roof corners |
| Outlets | Connect gutter to downspout opening |
| Elbows | Allow directional changes in downspouts |
| Straps | Anchor downspouts to walls |

## 7. Installation Considerations

- **Slope:** Gutters must be slightly sloped (about 1/4 inch every 10 feet) toward the downspout for proper drainage
- **Spacing:** Hangers should be installed every 2–3 feet
- **Sealing:** Use waterproof sealant at joints and seams to prevent leaks
- **Fastening:** Proper anchoring is critical to withstand wind and water load

## 8. Maintenance Guidelines

| Task | Importance |
|------|------------|
| Regular Cleaning | Remove leaves and debris at least twice a year (spring and fall) |
| Check for Leaks | Inspect seams, joints, and downspouts for leakage |
| Secure Loose Gutters | Reattach or replace sagging or detached sections |
| Install Gutter Guards | Reduces frequency of cleaning by keeping out leaves and debris |
| Ice Dam Prevention | Ensure proper attic ventilation and insulation to minimize freezing in gutters |

## 9. Common Problems & Solutions

| Problem | Cause | Solution |
|---------|-------|----------|
| Overflowing Gutters | Clogs or inadequate sizing | Clean gutters, consider upsizing |
| Sagging Gutters | Loose brackets or too much weight | Reinforce or replace brackets |
| Water Not Draining | Improper slope or clogged downspouts | Adjust slope, clear blockage |
| Leaking Joints | Failed sealant or poor connection | Reseal or reconnect joints |
| Ice Buildup in Winter | Poor ventilation/insulation | Improve attic insulation and ventilation |

## 10. Safety During Installation and Maintenance

- Always use a stable ladder with ladder stabilizers
- Wear gloves to avoid sharp debris or metal edges
- Use safety goggles to protect from flying debris
- Avoid working on gutters in wet or icy conditions

## 11. Discussion Questions

1. What are the benefits of installing gutter guards?
2. How does improper gutter slope affect performance?
3. Why is regular gutter maintenance essential in rainy climates?
4. What factors influence the choice of gutter material?
5. How can gutters prevent structural damage to buildings?
    `
  }
};

const lesson16Quiz: QuizLesson = {
  id: 16,
  title: 'Module 4 Quiz: Roof Structures and Components',
  duration: '30 minutes',
  type: 'quiz',
  content: {
    questions: [
      {
        question: 'What is the primary purpose of roof flashing?',
        options: [
          'To improve the roof\'s appearance',
          'To insulate the attic space',
          'To prevent water from penetrating joints or openings',
          'To support the roofing material'
        ],
        correct: 2,
        explanation: 'Roof flashing is installed to prevent water from penetrating junctions or intersections in a roofing system, protecting vulnerable joints and edges.'
      },
      {
        question: 'Which roof type offers the best wind resistance?',
        options: [
          'Gable roof',
          'Hip roof',
          'Flat roof',
          'Shed roof'
        ],
        correct: 1,
        explanation: 'Hip roofs have all four sides sloping downward with no vertical ends, making them very stable and durable in high winds.'
      },
      {
        question: 'What is the minimum recommended thickness for OSB roof decking with standard asphalt shingles?',
        options: [
          '3/8 inch',
          '7/16 inch',
          '1/2 inch',
          '5/8 inch'
        ],
        correct: 1,
        explanation: 'The minimum code requirement is 7/16" OSB or 15/32" plywood for standard asphalt roofing applications.'
      },
      {
        question: 'What is the correct placement of drip edge at the eaves of a roof?',
        options: [
          'Over the underlayment and under the shingles',
          'Under the underlayment and under the shingles',
          'Over the shingles and under the underlayment',
          'Under the roof deck'
        ],
        correct: 1,
        explanation: 'At eaves (bottom roof edge), drip edge is installed under underlayment and under shingles to properly direct water away from the fascia.'
      },
      {
        question: 'What is the recommended ratio for balanced roof ventilation?',
        options: [
          '2:1 intake to exhaust',
          '1:1 intake to exhaust',
          '1:2 intake to exhaust',
          '3:1 intake to exhaust'
        ],
        correct: 1,
        explanation: 'A balanced ventilation system provides equal intake and exhaust (1:1 ratio) to maintain proper airflow through the attic space.'
      },
      {
        question: 'Which underlayment type is best for areas prone to ice dams?',
        options: [
          '#15 asphalt-saturated felt',
          'Synthetic underlayment',
          'Rubberized asphalt (self-adhering)',
          'Peel-and-stick membranes'
        ],
        correct: 2,
        explanation: 'Rubberized asphalt (self-adhering) underlayment is best for waterproofing and ice dam protection due to its flexible, self-sealing properties.'
      },
      {
        question: 'What slope should gutters have for proper drainage?',
        options: [
          '1/8 inch every 10 feet',
          '1/4 inch every 10 feet',
          '1/2 inch every 10 feet',
          '1 inch every 10 feet'
        ],
        correct: 1,
        explanation: 'Gutters must be slightly sloped at about 1/4 inch every 10 feet toward the downspout for proper water drainage.'
      },
      {
        question: 'Which roof shape maximizes interior living space?',
        options: [
          'Hip roof',
          'Gable roof',
          'Mansard roof',
          'Shed roof'
        ],
        correct: 2,
        explanation: 'Mansard roofs have four sides with two slopes each, with the lower slope much steeper, maximizing interior living space ideal for lofts or attics.'
      },
      {
        question: 'Step flashing is most commonly used at which location?',
        options: [
          'Roof valleys',
          'Skylights',
          'Roof-to-wall intersections',
          'Eaves and rakes'
        ],
        correct: 2,
        explanation: 'Step flashing is specifically designed for roof-to-wall intersections, such as along chimneys or dormers, to prevent water penetration.'
      },
      {
        question: 'What is a sign of poor roof ventilation?',
        options: [
          'Cold attic temperatures',
          'Ice dams on roof edges in winter',
          'Dry insulation',
          'Low energy bills'
        ],
        correct: 1,
        explanation: 'Ice dams on roof edges in winter indicate poor ventilation, as proper airflow maintains uniform roof temperature and reduces ice dam risk.'
      }
    ]
  }
};

export const module4RoofStructuresAndComponents: Module = {
  id: 4,
  title: 'Roof Structures and Components',
  description: 'Comprehensive understanding of roof structures, components, and systems including shapes, decking, underlayment, flashing, ventilation, and drainage systems for professional roofing applications.',
  lessons: [
    lesson10RoofShapes,
    lesson11DeckingSheathing,
    lesson12Underlayment,
    lesson13FlashingAndDripEdges,
    lesson14VentilationSystems,
    lesson15GuttersAndDownspouts,
    lesson16Quiz
  ]
};
