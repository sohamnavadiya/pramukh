// Full product catalog for Pramukh Pharma Tech.
// Content sourced and adapted from current-site/content.md (extracted from the
// live site). Where the source flagged two pages as literal or inconsistent
// duplicates (Rotary Tablet Press <-> Tablet Compression, Fluid Bed Dryer <->
// FBD Machine, Rapid Mixer Granulator <-> RMG Machine), each page here has been
// given a distinct angle and non-duplicate copy rather than reusing the same
// body text under two names.

export type Category =
  | "Tableting"
  | "Drying"
  | "Granulation"
  | "Blending & Mixing"
  | "Milling & Size Reduction"
  | "Material Handling";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  image: string;
  tagline: string;
  intro: string;
  keyFeatures: string[];
  applications: string[];
  workingPrinciple?: { summary: string; steps: string[] };
  whyChooseUs: string[];
};

export const products: Product[] = [
  {
    slug: "rotary-tablet-press-machine",
    name: "Rotary Tablet Press Machine",
    category: "Tableting",
    image: "/images/products/rotary-tablet-press-machine.jpg",
    tagline:
      "High-speed, GMP-compliant compression with precise weight, thickness and hardness control.",
    intro:
      "Our Rotary Tablet Press Machine is built around a rotating turret carrying multiple punch-and-die stations, so compression and ejection happen continuously and simultaneously — the machine of choice when production volume, not just precision, is the requirement.",
    keyFeatures: [
      "High-speed, continuous tablet compression for large-scale production",
      "Precise control over tablet weight, thickness and hardness across the batch",
      "Corrosion-resistant stainless steel construction, GMP-compliant",
      "Automated feeding, compression and ejection reduce manual intervention",
      "Compact footprint despite high throughput",
      "Intuitive control panel for compression force, speed and tablet size",
      "Over-pressure protection, emergency stop and automatic shutdown on malfunction",
    ],
    applications: [
      "Pharmaceutical: solid-dose medications with precise API dosages, from small batches to large-volume production",
      "Nutraceutical: dietary supplements, vitamins and other health-related tablets",
      "Food: energy tablets, effervescent tablets and other food-grade compressed products",
    ],
    workingPrinciple: {
      summary:
        "A rotating turret holds multiple punch-and-die stations, so several tablets are compressed and ejected on every revolution.",
      steps: [
        "Loading: the powder or granule blend (APIs, excipients, binders) is loaded into the hopper.",
        "Feeding: a calibrated feed mechanism delivers a constant flow into each die cavity.",
        "Pre-compression (where fitted): a light tamping stage removes air pockets from inconsistent-flow materials.",
        "Compression: upper and lower punches apply tuned pressure inside the die to set thickness, hardness and weight.",
        "Rotary motion: the turret's continuous rotation brings each station through fill, compression and ejection in sequence.",
        "Ejection: the lower punch pushes the finished tablet onto a collection tray or conveyor.",
        "Quality control: automatic weight-monitoring adjusts compression force to hold uniformity across the run.",
      ],
    },
    whyChooseUs: [
      "Pan-India and global export reach",
      "Single-station or multi-station configurations tailored to your tablet size, shape and compression force",
      "Rigorous quality checks built for high-volume demands",
      "Full compliance with GMP standards",
    ],
  },
  {
    slug: "tablet-compression-machine",
    name: "Tablet Compression Machine",
    category: "Tableting",
    image: "/images/products/tablet-compression-machine.jpg",
    tagline:
      "The full tablet compression range — from single-punch machines to fully automatic rotary lines.",
    intro:
      "\"Tablet compression machine\" covers our full range for converting powder blends into solid tablets, spanning single-punch machines for small-batch and R&D work through to fully automatic rotary presses for mass production — sized and configured to your production volume and tablet specification.",
    keyFeatures: [
      "Available as single-punch, rotary or small-scale configurations",
      "High compression force with consistent, repeatable output",
      "User-friendly controls suited to operators at every experience level",
      "Modular design that adapts to different tablet shapes and sizes",
      "Durable, easy-to-clean stainless steel construction",
      "Automated weight and thickness monitoring for batch consistency",
    ],
    applications: [
      "Pharmaceuticals: medications and supplements at any batch size",
      "Nutraceuticals: dietary and herbal supplement tablets",
      "Cosmetics: compact tablet-form products",
      "Research & Development: small-scale formulation testing before scale-up",
    ],
    whyChooseUs: [
      "Guidance on choosing between single-punch, rotary and small-scale formats based on your production volume and budget",
      "Machines engineered to international performance standards",
      "Spare parts availability and after-sales technical support",
      "A genuine growth path — start on a compact machine and scale up to a full rotary line",
    ],
  },
  {
    slug: "double-sided-rotary-tablet-press-machine",
    name: "Double-Sided Rotary Tablet Press Machine",
    category: "Tableting",
    image: "/images/products/double-sided-rotary-tablet-press-machine.jpg",
    tagline:
      "Simultaneous compression from both sides of the turret for significantly higher throughput.",
    intro:
      "Our Double-Sided Rotary Tablet Press Machine compresses tablets from two compression stations simultaneously, built for large-scale manufacturing where a single-sided press can't keep pace with demand.",
    keyFeatures: [
      "Double-sided compression significantly increases capacity over single-sided presses",
      "High-speed, continuous production with reduced cycle times",
      "Adjustable compression force for tablet thickness, hardness and weight",
      "Advanced weight-monitoring system for regulatory-grade uniformity",
      "Durable, hygienic, GMP-compliant stainless steel construction",
      "Touch-screen control panel for compression force, tablet weight and speed",
      "Emergency stop, overload protection and automatic shutdown",
    ],
    applications: [
      "Pharmaceutical: standard and effervescent tablets, and other solid dosage forms",
      "Nutraceutical: supplements and vitamins at scale",
      "Food: tablets and energy bars",
      "Cosmetic: face packs and effervescent bath tablets",
    ],
    whyChooseUs: [
      "Pan-India and global export reach",
      "Custom configurations for size, shape, compression force and speed",
      "Manufacturing built for sustained high-volume runs",
      "Technical support from installation through after-sales",
      "Full GMP compliance",
    ],
  },
  {
    slug: "fluid-bed-dryer-machine",
    name: "Fluid Bed Dryer Machine",
    category: "Drying",
    image: "/images/products/fluid-bed-dryer-machine.jpg",
    tagline:
      "Uniform fluidized-bed drying with precise temperature and airflow control, no hotspots.",
    intro:
      "Our Fluid Bed Dryer suspends solid particles in a stream of heated air — a fluidized state — so every particle dries evenly without the hotspots or over-drying risk of static-tray methods.",
    keyFeatures: [
      "Airflow and heat suspend material in a fluidized state for uniform drying",
      "Precise temperature and airflow control reduces the risk of product degradation",
      "Energy-efficient — hot air passed through the material bed evaporates moisture directly",
      "Compact, space-saving footprint with high throughput",
      "Easy-to-clean design with a quick-maintenance cleaning system",
      "Stainless steel construction, durable and GMP-compliant",
      "Customizable airflow, temperature control and handling capacity",
    ],
    applications: [
      "Pharmaceutical: drying granules, powders and wet cakes after granulation",
      "Food: herbs, spices and other dehydrated products",
      "Chemical: fine powders",
      "Nutraceutical: supplements, vitamins and herbal extracts",
      "Cosmetics: powders and pigments",
    ],
    whyChooseUs: [
      "Pan-India and global export reach",
      "Customizable solutions matched to your batch size and material",
      "Superior build quality for long service life",
      "Expert support through installation, training and maintenance",
    ],
  },
  {
    slug: "fbd-machine",
    name: "FBD Machine",
    category: "Drying",
    image: "/images/products/fbd-machine.jpg",
    tagline:
      "Multi-stage drying and cooling in a single unit, engineered for industrial batch throughput.",
    intro:
      "Our FBD (Fluid Bed Dryer) units are configured for industrial batch production: drying and cooling happen in the same unit back-to-back, cutting cycle time between granulation and the next processing step.",
    keyFeatures: [
      "Multi-stage operation — drying and cooling in one unit, reducing overall cycle time",
      "Uniform temperature control across the batch",
      "Energy-efficient hot-air drying with minimal heat loss",
      "User-friendly control panel with quick-maintenance cleaning",
      "Stainless steel, corrosion-resistant, GMP-compliant construction",
      "Configurable airflow and capacity for different batch sizes",
    ],
    applications: [
      "Pharmaceutical: post-granulation drying ahead of compression or encapsulation",
      "Food: dehydrated product lines",
      "Chemical: fine powder drying",
      "Nutraceutical: supplement and herbal-extract drying",
    ],
    whyChooseUs: [
      "Sized to fit directly into an existing granulation-to-compression line",
      "Pan-India and global export reach",
      "Superior build quality with low maintenance overhead",
      "Installation, training and after-sales support included",
    ],
  },
  {
    slug: "rapid-mixer-granulator-machine",
    name: "Rapid Mixer Granulator Machine",
    category: "Granulation",
    image: "/images/products/rapid-mixer-granulator-machine.jpg",
    tagline:
      "High-shear mixing and granulation for uniform granules and reduced processing time.",
    intro:
      "Our Rapid Mixer Granulator (RMG) delivers efficient, uniform mixing, granulation and high-quality output for the pharmaceutical, food and chemical industries, with a strong presence across India and international exports.",
    keyFeatures: [
      "Advanced high-shear mixing technology for quick, homogeneous blending of powders with liquids",
      "Efficient granulation that reduces cycle times",
      "Versatile across pharmaceuticals, food processing and chemicals",
      "Quick setup with minimal maintenance",
      "Durable, high-quality stainless steel construction",
      "Hygienic, low-contamination design meeting international safety standards",
    ],
    applications: [
      "Pharmaceutical: granulating tablets, capsules and powders",
      "Food processing: granulated food products",
      "Chemical: uniform granulation of chemical powders",
    ],
    workingPrinciple: {
      summary:
        "High-shear mixing and granulation blends dry powders with a liquid binder into uniform granules.",
      steps: [
        "Loading: dry powders (APIs, excipients) are loaded into the mixing chamber.",
        "High-shear mixing: the impeller rotates at high speed for rapid, thorough mixing that breaks up agglomerates.",
        "Binder addition: liquid binder is sprayed or poured in and evenly dispersed by the impeller.",
        "Granulation: the impeller and chopper blade shear forces break the wet mass into granules.",
        "Granule formation: the binder causes powders to bind together into the desired granule size.",
        "Discharge: finished granules are discharged into a fluid bed dryer or other downstream equipment.",
      ],
    },
    whyChooseUs: [
      "Pan-India and global export reach",
      "Rigorous quality assurance on every unit",
      "Customization to your batch size and formulation",
      "Ongoing technical support",
    ],
  },
  {
    slug: "rmg-machine",
    name: "RMG Machine",
    category: "Granulation",
    image: "/images/products/rmg-machine.jpg",
    tagline:
      "A compact, single-pot high-shear granulator sized for focused pharma-scale batches.",
    intro:
      "Our RMG Machine brings the same high-shear mixing and granulation principle as our full Rapid Mixer Granulator line to a more compact, single-pot format — built for teams that need dependable granulation without a large-batch footprint.",
    keyFeatures: [
      "Independently adjustable impeller and chopper speeds for fine control over granule size",
      "Uniform product through consistent shear and impaction forces",
      "Energy-efficient, environmentally considerate design",
      "Flexible configuration to suit varying materials and batch sizes",
      "User-friendly interface for fast changeovers between products",
    ],
    applications: [
      "Pharmaceutical: granulation and mixing for small-to-mid batch production",
      "Nutraceutical: supplement granulation",
      "Chemical: uniform granulation of specialty powders",
    ],
    whyChooseUs: [
      "A right-sized alternative to our full Rapid Mixer Granulator line for focused production",
      "Pan-India and global export reach",
      "Straightforward operation with a shallow learning curve",
      "Backed by the same after-sales support as our full product range",
    ],
  },
  {
    slug: "tablet-coating-pan-machine",
    name: "Tablet Coating Pan Machine",
    category: "Tableting",
    image: "/images/products/tablet-coating-pan-machine.jpg",
    tagline:
      "Uniform film and sugar coating with adjustable spray nozzles and drum-speed control.",
    intro:
      "Our Tablet Coating Pan Machine rotates tablets in a drum while spraying a coating solution and simultaneously drying with hot air, producing uniform, high-quality coating for tablets and pellets.",
    keyFeatures: [
      "Uniform coating across every tablet in the batch",
      "Advanced spray technology with adjustable nozzles",
      "Temperature and humidity control for consistent film formation",
      "Adjustable drum speed and automatic process control",
      "Durable, hygienic stainless steel design",
      "Energy-efficient hot-air circulation system",
    ],
    applications: [
      "Pharmaceutical: sugar, film and enteric coatings for appearance, taste-masking and controlled release",
      "Nutraceutical: dietary supplement and vitamin coating",
      "Food: coated food tablets and pellets",
    ],
    whyChooseUs: [
      "Pan-India and global export reach",
      "Quality assurance on every batch cycle",
      "Customization options for drum size and spray configuration",
      "Full compliance with GMP standards",
    ],
  },
  {
    slug: "mass-mixer-machine",
    name: "Mass Mixer Machine",
    category: "Blending & Mixing",
    image: "/images/products/mass-mixer-machine.jpg",
    tagline:
      "Heavy-duty mixing for large batches of pharmaceutical powders and bulk materials.",
    intro:
      "Our Mass Mixer Machine efficiently mixes large batches of pharmaceutical powders, granules and other bulk materials, widely used across pharmaceutical, food and chemical production lines.",
    keyFeatures: [
      "Heavy-duty mixing built for high-volume batches",
      "High-efficiency blades and agitator design",
      "Consistent uniformity across the full batch",
      "Simple, effective U-shaped mixing drum with rotating paddle",
      "Sturdy stainless steel construction",
      "Auto shut-off, emergency stop and over-temperature protection",
    ],
    applications: [
      "Pharmaceutical: blends for tablet and capsule production",
      "Food: spices, powdered drinks and snacks",
      "Chemical: chemicals and pigments",
      "Nutraceutical: vitamins and supplements",
    ],
    whyChooseUs: [
      "Pan-India and global export reach",
      "High-capacity manufacturing for demanding production schedules",
      "Custom batch sizes and configurations",
      "GMP compliance and energy-efficient operation",
    ],
  },
  {
    slug: "tray-dryer-machine",
    name: "Tray Dryer Machine",
    category: "Drying",
    image: "/images/products/tray-dryer-machine.jpg",
    tagline: "Multi-tray drying with uniform air circulation for large batches.",
    intro:
      "Our Tray Dryer Machine uses advanced heating and forced air circulation across a multi-tray design, drying large batches of pharmaceutical, chemical and food materials evenly.",
    keyFeatures: [
      "Efficient drying via advanced heating systems",
      "Multi-tray design processes large batches at once",
      "Adjustable temperature control",
      "Uniform air circulation via forced-air design",
      "Sturdy, durable stainless steel construction",
      "Over-temperature and overload protection with emergency stop",
    ],
    applications: [
      "Pharmaceutical: powders, granules and tablets",
      "Food processing: herbs, fruits, vegetables and snacks",
      "Chemical: chemicals and pigments",
      "Cosmetic: powders and emulsions",
    ],
    whyChooseUs: [
      "Pan-India and global export reach",
      "Customized solutions for your tray count and capacity",
      "Rigorous quality assurance",
      "Expert after-sales support and GMP compliance",
    ],
  },
  {
    slug: "octagonal-blender-machine",
    name: "Octagonal Blender Machine",
    category: "Blending & Mixing",
    image: "/images/products/octagonal-blender-machine.jpg",
    tagline: "360-degree tumbling action for gentle, segregation-free blending.",
    intro:
      "Our Octagonal Blender Machine's eight-sided drum geometry prevents material segregation during blending, giving gentle, uniform mixing across powders, granules and bulk materials.",
    keyFeatures: [
      "Octagonal geometry prevents segregation for more efficient mixing",
      "360-degree tumbling action for thorough blending",
      "Gentle motion preserves delicate ingredients",
      "Variable-speed drive for rotational speed control",
      "GMP-compliant stainless steel construction",
      "Quick disassembly and washable parts for easy maintenance",
      "Optional vacuum loading and dust-free operation",
    ],
    applications: [
      "Pharmaceutical: APIs and excipients",
      "Food: spices and flavorings",
      "Chemical: powders and pigments",
      "Cosmetics: face powders, lotions and creams",
    ],
    whyChooseUs: [
      "Pan-India and global export reach",
      "Superior build quality at a competitive cost",
      "Customizable capacity and loading configuration",
      "Ongoing after-sales support",
    ],
  },
  {
    slug: "double-cone-blender-machine",
    name: "Double-Cone Blender Machine",
    category: "Blending & Mixing",
    image: "/images/products/double-cone-blender-machine.jpg",
    tagline: "Smooth, homogeneous blending for materials of varying density.",
    intro:
      "Our Double-Cone Blender Machine's cone-on-cone geometry handles materials of varying densities and particle sizes, producing smooth, homogeneous blends for batch processing.",
    keyFeatures: [
      "Double-cone shape handles varying densities and particle sizes",
      "Smooth, homogeneous blending action",
      "Gentle mixing preserves delicate and heat-sensitive ingredients",
      "Easy to operate with reduced maintenance needs",
      "GMP-compliant stainless steel construction",
      "Sealed design for dust-free operation",
    ],
    applications: [
      "Pharmaceutical: APIs and excipients for tablets and capsules",
      "Food: powdered ingredients, spices and flavorings",
      "Chemical: dry chemicals, powders and pigments",
      "Cosmetics: powders, pigments and fillers",
      "Nutraceutical: dietary supplement powders",
    ],
    whyChooseUs: [
      "Pan-India and global presence",
      "Superior quality construction",
      "Efficient, reliable performance batch after batch",
      "Customization options available",
    ],
  },
  {
    slug: "vibro-sifter-machine",
    name: "Vibro Sifter Machine",
    category: "Material Handling",
    image: "/images/products/vibro-sifter-machine.jpg",
    tagline: "Multi-deck vibratory sieving for consistent, accurate particle-size separation.",
    intro:
      "Our Vibro Sifter is highly efficient, versatile sieving equipment that ensures the quality and consistency of powders and granules, serving clients across India and internationally.",
    keyFeatures: [
      "High-efficiency vibrating screen mechanism",
      "Multi-deck design performs several separations in one operation",
      "Adjustable vibration intensity",
      "Low noise and vibration in operation",
      "Easy to clean and maintain",
      "Durable, sturdy stainless steel construction",
      "Compact, space-saving footprint",
    ],
    applications: [
      "Pharmaceutical: particle-size control for tablets and capsules",
      "Food processing: flour and spices",
      "Chemical: segregating chemicals and materials by size",
      "Cosmetics: cosmetic powders and pigments",
    ],
    workingPrinciple: {
      summary:
        "Motor-driven eccentric weights create a circular or elliptical vibratory motion that moves material across mesh screens.",
      steps: [
        "Vibration setup: the vibration system is tuned to the material and desired outcome.",
        "Feeding: material is fed into the center of the sifting chamber and distributed across the screens.",
        "Screening: vibration moves material across mesh screens of varying pore sizes.",
        "Separation: finer particles pass through to a discharge outlet while larger particles remain on the screen.",
        "Multi-deck grading (optional): layered mesh screens perform several grade separations at once.",
        "Discharge: oversize and undersize material is discharged from separate outlets.",
      ],
    },
    whyChooseUs: [
      "Pan-India and global export reach",
      "Quality assurance on every unit",
      "Customizable screen sizes, deck counts and vibration settings",
      "Efficient after-sales support",
    ],
  },
  {
    slug: "ribbon-blender-machines",
    name: "Ribbon Blender Machines",
    category: "Blending & Mixing",
    image: "/images/products/ribbon-blender-machines.jpg",
    tagline: "Counter-current ribbon agitation for uniform, consistent mixing results.",
    intro:
      "Our Ribbon Blender Machines deliver high-performance mixing through a counter-current ribbon-agitator design, giving uniform, consistent results across pharmaceutical, food and chemical materials.",
    keyFeatures: [
      "SS 304 / SS 316 construction, corrosion-resistant",
      "Ribbon-shaped agitator design for efficient blending",
      "Versatile across pharmaceutical, food and chemical manufacturing",
      "Low maintenance, user-friendly operation",
    ],
    applications: [
      "Pharmaceutical: APIs, excipients and dry granules",
      "Food: powders and spices",
      "Chemicals: chemical powders and pigments",
      "Cosmetics: cosmetic powders and personal care products",
    ],
    workingPrinciple: {
      summary:
        "Outer and inner ribbon agitators move material in counter-current motion for thorough, even mixing.",
      steps: [
        "Feeding: dry powders or granules are loaded via an inlet.",
        "Ribbon agitation: the outer ribbon moves material end-to-end while the inner ribbon returns it to center.",
        "Mixing: shear and tumbling forces blend the material evenly while minimizing heat generation.",
        "Discharge: mixed material is discharged via an outlet, optionally assisted by a vacuum system or scraper.",
      ],
    },
    whyChooseUs: [
      "Cutting-edge machinery exceeding industry standards",
      "Trusted across India with expanding global exports",
      "Motor and overload protection with emergency-stop safety",
    ],
  },
  {
    slug: "paste-kettle-machines",
    name: "Paste Kettle Machines",
    category: "Blending & Mixing",
    image: "/images/products/paste-kettle-machines.jpg",
    tagline: "Precision-controlled heating and mixing for pastes, creams and gels.",
    intro:
      "Our Paste Kettle Machines are built for pharmaceutical, food processing and chemical industries that need precise, closed-system heating and mixing of pastes, creams, gels and semi-solid products.",
    keyFeatures: [
      "High-quality, corrosion-resistant stainless steel build",
      "Electric, steam or oil heating options",
      "Versatile across pastes, creams, gels, sauces and semi-solid products",
      "User-friendly panels for temperature, time and mixing speed",
      "Customizable configurations for scale and formulation",
    ],
    applications: [
      "Pharmaceutical: ointments, gels and creams with precise API temperature control",
      "Food processing: sauces and semi-solid formulations",
      "Chemical: heated mixing of specialty formulations",
    ],
    whyChooseUs: [
      "Precise temperature control that avoids overheating sensitive APIs",
      "Homogeneous mixing with reduced contamination via closed-system, controlled discharge",
      "Vacuum application removes air bubbles for a smooth finish",
      "Adaptable to small and large-scale production",
    ],
  },
  {
    slug: "multi-mill-machines",
    name: "Multi Mill Machine",
    category: "Milling & Size Reduction",
    image: "/images/products/multi-mill-machines.jpg",
    tagline: "Versatile size reduction, granulation and pulverization with interchangeable screens.",
    intro:
      "Our Multi Mill Machine handles granulation, pulverization, chopping and size reduction in a single compact unit, serving pharmaceutical, food and chemical production domestically and internationally.",
    keyFeatures: [
      "Versatile functionality across granulation, pulverization, chopping and size reduction",
      "High-speed operation",
      "Uniform particle size via adjustable speed and interchangeable screens",
      "Compact design, easy to operate",
      "Sturdy, GMP-compliant stainless steel construction",
      "Auto shut-off, overload protection and emergency stop",
    ],
    applications: [
      "Pharmaceutical: APIs, excipients and granules for tablets and capsules",
      "Food: spices, herbs, dried fruits and sugar",
      "Chemical: chemicals and pigments",
      "Cosmetic: cosmetic powders and pigments",
    ],
    whyChooseUs: [
      "Pan-India and global export reach",
      "Customization to your screen and speed requirements",
      "High-quality manufacturing with low maintenance",
      "Expert support and full GMP compliance",
    ],
  },
  {
    slug: "dust-extractor-machines",
    name: "Dust Extractor Machine",
    category: "Material Handling",
    image: "/images/products/dust-extractor-machines.jpg",
    tagline: "High-filtration dust collection for clean, compliant production environments.",
    intro:
      "Our Dust Extractor Machines maintain clean, safe working environments across pharmaceutical, food processing and chemical facilities, reducing fire and explosion risk in sensitive production areas.",
    keyFeatures: [
      "Efficient dust collection across a wide application range",
      "High filtration efficiency: HEPA filters, carbon filters and cyclone separation",
      "User-friendly design with adjustable airflow",
      "Quiet operation",
      "Compact and portable, in stationary or mobile configurations",
      "Low maintenance",
    ],
    applications: [
      "Pharmaceutical: GMP-compliant clean production environments",
      "Food processing: flour and sugar dust",
      "Chemical industry: hazardous chemicals and fumes",
      "Woodworking and metalworking",
      "Cosmetics industry",
    ],
    whyChooseUs: [
      "Pan-India and global export reach",
      "Custom filtration and airflow configurations",
      "Superior quality manufacturing",
      "Compliance with workplace safety standards",
    ],
  },
  {
    slug: "de-duster-machine",
    name: "De-Duster Machine",
    category: "Material Handling",
    image: "/images/products/de-duster-machine.jpg",
    tagline: "Precision dust removal from powders and granules with minimal product loss.",
    intro:
      "Our De-Duster Machine effectively removes dust particles from powders, granules and other bulk materials, trusted across India and worldwide for clean, efficient operations.",
    keyFeatures: [
      "Effective dust removal with minimal product loss",
      "High-efficiency airflow via powerful suction",
      "User-friendly operation",
      "Durable SS 304 / SS 316 construction",
      "Customizable sizes and configurations",
    ],
    applications: [
      "Pharmaceutical: regulatory-compliant clean production",
      "Food processing: powders, spices and flour",
      "Chemical industry: chemical powders and granules",
      "Cosmetics: dust-free personal care formulations",
    ],
    whyChooseUs: [
      "Reliable, high-performance machines",
      "Trusted after-sales support",
      "A leading manufacturer and exporter of blending and dust-removal machinery",
    ],
  },
  {
    slug: "colloid-mill-machines",
    name: "Colloid Mill Machine",
    category: "Milling & Size Reduction",
    image: "/images/products/colloid-mill-machines.jpg",
    tagline: "High-shear emulsification and grinding for fine, stable suspensions.",
    intro:
      "Our Colloid Mill Machine produces fine, uniform mixtures for emulsifying, homogenizing and grinding liquids, pastes and semi-solids, serving pharmaceutical, cosmetic, food and biotechnology applications.",
    keyFeatures: [
      "High-shear emulsification for fine, uniform mixtures",
      "Rotor/stator design reduces particles down to microns",
      "Adjustable grinding gap for control over final particle size",
      "Compact, durable stainless steel design",
      "High productivity with low maintenance and easy operation",
      "Enhanced homogenization for stable emulsions and suspensions",
    ],
    applications: [
      "Pharmaceutical: fine suspensions, emulsions, ointments and syrups — improving API bioavailability",
      "Cosmetic: creams, lotions and serums",
      "Food processing: sauces, mayonnaise, ketchup and pastes",
      "Chemical industry: chemicals and pigments",
      "Nutraceutical industry: herbs, powders and extracts",
    ],
    whyChooseUs: [
      "Leading manufacturer and exporter",
      "GMP-standard quality and durability",
      "Customization to your formulation and viscosity range",
      "Cost-effective with exceptional customer support",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const categories: Category[] = [
  "Tableting",
  "Drying",
  "Granulation",
  "Blending & Mixing",
  "Milling & Size Reduction",
  "Material Handling",
];
