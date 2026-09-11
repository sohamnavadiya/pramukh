// Central content store for the Pramukh Pharma Tech homepage.
// Sourced from current-site/content.md (extracted from the live site) and
// adapted per docs/superpowers/specs/2026-09-10-pramukh-homepage-design.md.

import { products } from "@/lib/products";

export const company = {
  name: "Pramukh Pharma Tech",
  phone: "+91-9099908890",
  phoneHref: "tel:+919099908890",
  email: "pramukhpharmatech@gmail.com",
  emailHref: "mailto:pramukhpharmatech@gmail.com",
  address:
    "66,67 – Mahaveer Industrial Park – 2, Opp. RadheKrishna Gold Estate, Kathawada Village Road, Kathawada, Ahmedabad, Gujarat - 382430",
};

export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/#industries" },
  { label: "Quality", href: "/#quality" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const industries = [
  {
    name: "Pharmaceuticals",
    description:
      "Comprehensive, all-in-one machinery for the oral solid dosage line and tablet manufacturing, built on decades of customer feedback from the global pharmaceutical industry.",
  },
  {
    name: "Ayurveda",
    description:
      "Machinery built for the modernization of traditional Ayurvedic and herbal medicine production, now trusted across manufacturers scaling for global demand.",
  },
  {
    name: "Cosmetics",
    description:
      "Precision blending and mixing equipment for skincare formulations, creams, lotions and cosmetic products, engineered for consistent batch quality.",
  },
  {
    name: "Chemical",
    description:
      "Tablet presses and processing equipment trusted by leading Indian and international chemical companies for high-volume production.",
  },
  {
    name: "Nutraceuticals",
    description:
      "Granulation, blending and tableting machinery purpose-built for nutraceutical production, from prevention-focused supplements to targeted treatments.",
  },
  {
    name: "Food",
    description:
      "Granulation and tableting lines suited for efficient, hygienic production of confectionery and food-grade tablets at scale.",
  },
];

export const capabilities = [
  {
    name: "Tableting",
    description:
      "Rotary and double-sided tablet presses, and coating pans, engineered for high-speed, GMP-compliant compression and finishing.",
  },
  {
    name: "Drying",
    description:
      "Fluid bed and tray dryers delivering uniform, energy-efficient drying with precise temperature and airflow control.",
  },
  {
    name: "Granulation",
    description:
      "Rapid mixer granulators built for high-shear mixing and consistent, uniform granule formation.",
  },
  {
    name: "Blending & Mixing",
    description:
      "Octagonal, double-cone, ribbon and mass mixers for gentle, segregation-free blending across batch sizes.",
  },
  {
    name: "Milling & Size Reduction",
    description:
      "Multi mills and colloid mills for versatile particle-size reduction, emulsification and homogenization.",
  },
  {
    name: "Material Handling",
    description:
      "Dust extractors, de-dusters and vibro sifters maintaining clean, compliant, contamination-controlled production lines.",
  },
  {
    name: "Quality Systems",
    description:
      "GMP-compliant design, stainless steel construction and rigorous quality checks built into every machine we manufacture.",
  },
];

const featuredSlugs = [
  "rotary-tablet-press-machine",
  "fluid-bed-dryer-machine",
  "rapid-mixer-granulator-machine",
  "tablet-coating-pan-machine",
  "octagonal-blender-machine",
  "multi-mill-machines",
  "vibro-sifter-machine",
  "colloid-mill-machines",
];

export const featuredProducts = featuredSlugs.map((slug) => {
  const product = products.find((p) => p.slug === slug);
  if (!product) throw new Error(`Featured product slug not found: ${slug}`);
  return product;
});

export const automationFeatures = [
  {
    name: "Touch-Screen Control Panels",
    description:
      "Intuitive, PLC-driven interfaces give operators precise command over compression force, speed, temperature and tablet size.",
  },
  {
    name: "Automated Feeding & Weight Monitoring",
    description:
      "Calibrated feed mechanisms and automatic weight-monitoring systems hold batch-to-batch uniformity without manual intervention.",
  },
  {
    name: "Safety Interlocks",
    description:
      "Over-pressure protection, emergency-stop mechanisms and automatic shutdown on malfunction, engineered into every machine.",
  },
  {
    name: "Reduced Manual Intervention",
    description:
      "Automated compression, ejection and discharge cycles cut labor dependency while raising line throughput.",
  },
];

export const qualityStandards = [
  {
    name: "GMP Compliance",
    description:
      "Every machine is engineered to meet Good Manufacturing Practice standards for the pharmaceutical, nutraceutical and food industries.",
  },
  {
    name: "SS304 / SS316 Construction",
    description:
      "Corrosion-resistant, hygienic stainless-steel builds designed for long service life and easy cleaning.",
  },
  {
    name: "Safety Systems",
    description:
      "Overload protection, emergency stops and automatic shutdown mechanisms are standard, not optional, across our range.",
  },
  {
    name: "Rigorous Quality Checks",
    description:
      "Every machine is tested before dispatch, with documentation and after-sales support through installation and training.",
  },
];

export const stats = [
  // Placeholder figures — confirm exact numbers with Pramukh Pharma Tech before shipping to production.
  { value: "15+", label: "Years in Operation" },
  { value: "25+", label: "Export Countries" },
  { value: "500+", label: "Machines Delivered" },
  { value: "6", label: "Industries Served" },
];

export const outcomes = [
  {
    name: "Faster Production Cycles",
    description:
      "High-speed, continuous-operation machinery built for large-scale output without sacrificing precision.",
  },
  {
    name: "Consistent Batch Quality",
    description:
      "Precise control over weight, thickness and hardness keeps every batch within specification.",
  },
  {
    name: "Reduced Downtime",
    description:
      "Durable stainless-steel construction and low-maintenance design keep production lines running.",
  },
  {
    name: "Lower Operating Costs",
    description:
      "Automation reduces manual intervention, cutting labor costs while raising throughput.",
  },
];

export const testimonials = [
  {
    name: "Aditya Sharma",
    quote:
      "The Tablet Compression Machine from Pramukh Pharma Tech has streamlined our production processes. Its user-friendly interface and durability make it an invaluable asset.",
    image: "/images/testimonials/testimonial-1.jpg",
  },
  {
    name: "Priya Patel",
    quote:
      "The Rotary Tablet Press Machine from Pramukh Pharma Tech is a game-changer in our production line. Its seamless operation and robust design contribute to our operational excellence.",
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    name: "Siddharth Verma",
    quote:
      "The Fluid Bed Dryer Machine's precise drying capabilities, user-friendly interface, and robust construction make it an invaluable asset to our production.",
    image: "/images/testimonials/testimonial-3.jpg",
  },
  {
    name: "Neha Gupta",
    quote:
      "The RMG Machine has proven to be a reliable and indispensable asset in our production line, with advanced features and a genuinely user-friendly interface.",
    image: "/images/testimonials/testimonial-4.jpg",
  },
];

export const blogPosts = [
  {
    title: "Unmatched Efficiency: Top Fluid Bed Dryer Machine Manufacturers",
    teaser:
      "In pharmaceutical manufacturing, efficiency and precision are paramount. Here's how fluid bed dryer machines suspend material in a fluidized state for uniform drying — and how Pramukh Pharma Tech delivers unmatched efficiency and reliability.",
    image:
      "/images/blog/unmatched-efficiency-top-fluid-bed-dryer-machine-manufacturers.jpg",
  },
  {
    title: "Top-Quality Rotary Tablet Press Machines Manufacturers",
    teaser:
      "Rotary tablet press machines are a cornerstone of tablet production, compressing powdered material into uniform tablets with accurate dosages. Here's what to look for when selecting a manufacturer.",
    image:
      "/images/blog/top-quality-rotary-tablet-press-machines-manufacturers-from-pramukh-pharma.jpg",
  },
  {
    title: "Pharma Machinery: Understanding Tablet Compression Machines",
    teaser:
      "From single-punch presses for small batches to fully automatic rotary presses for mass production — a guide to choosing the right tablet compression machine for your production volume and specifications.",
    image:
      "/images/blog/pharma-machinery-tablet-compression-machine.jpg",
  },
];
