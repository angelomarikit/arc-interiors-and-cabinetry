import type { ProjectCategory, ProjectFilter } from "../types/project";

export const filters: ProjectFilter[] = [
  "Bedroom",
  "Cabinets",
  "Kitchen",
  "Living Room / Dining Room",
  "Toilet",
];

export const spaces: Array<{
  name: ProjectCategory;
  description: string;
  imageId: string;
}> = [
  {
    name: "Bedroom",
    description: "Comfort-led bedroom interiors with integrated storage and a composed, uncluttered finish.",
    imageId: "bedroom-bedroom",
  },
  {
    name: "Cabinets",
    description: "Purpose-built cabinetry shaped around available space, storage needs, and interior character.",
    imageId: "cabinets-p08",
  },
  {
    name: "Kitchen",
    description: "Functional kitchens with custom cabinetry, considered work zones, and clean modern finishes.",
    imageId: "kitchen-kitchen-f-r1",
  },
  {
    name: "Living Room / Dining Room",
    description: "Connected living spaces designed for everyday comfort, display, storage, and visual continuity.",
    imageId: "living-dining-living-fa",
  },
  {
    name: "Toilet",
    description: "Refined toilet interiors with practical vanity storage and well-integrated cabinetry.",
    imageId: "toilet-2f-master-bathroom-a",
  },
];

export const faqs = [
  {
    question: "What types of spaces does ARC Interiors & Cabinetry work on?",
    answer: "We showcase interior and cabinetry work for bedrooms, kitchens, cabinets, living and dining areas, and toilets.",
    short: "Bedrooms, kitchens, cabinets, living and dining areas, and toilets.",
  },
  {
    question: "Do you create custom cabinetry?",
    answer: "Yes. We provide custom cabinetry solutions based on the available space, storage needs, and preferred interior style.",
    short: "Yes. Cabinetry is planned around your available space, storage needs, and preferred style.",
  },
  {
    question: "Can you work on bedroom interiors?",
    answer: "Yes. Bedroom projects may include cabinetry, wardrobes, storage, and other built-in interior elements depending on the project requirements.",
    short: "Yes. Bedroom work may include wardrobes, cabinetry, storage, and built-in elements.",
  },
  {
    question: "Do you handle kitchen cabinetry?",
    answer: "Yes. Kitchen projects can include custom cabinetry and storage solutions designed around the available space and functional requirements.",
    short: "Yes. We create custom kitchen cabinetry and storage around the space and its daily use.",
  },
  {
    question: "Do you work on living and dining areas?",
    answer: "Yes. Living and dining spaces may include cabinetry, entertainment units, storage, and custom interior elements.",
    short: "Yes. Work may include entertainment units, cabinetry, storage, and custom interior elements.",
  },
  {
    question: "Do you work on toilets?",
    answer: "Yes. Toilet projects may include vanity cabinetry, storage, and other custom interior elements.",
    short: "Yes. Toilet work may include vanity cabinetry, storage, and custom interior elements.",
  },
  {
    question: "Where are you located?",
    answer: "ARC Interiors & Cabinetry can be reached through locations in Santolan, Pasig and Jubilation South, Biñan, Laguna.",
    short: "We have locations in Santolan, Pasig and Jubilation South, Biñan, Laguna.",
  },
  {
    question: "How can I inquire about a project?",
    answer: "Contact ARC Interiors & Cabinetry directly at 09456512620 to discuss your project.",
    short: "Call us directly at 09456512620 to discuss your project.",
  },
  {
    question: "Can I provide reference images?",
    answer: "Yes. Reference images can help communicate your preferred style, layout, cabinetry design, and overall interior direction.",
    short: "Yes. Reference images help communicate your preferred style and interior direction.",
  },
] as const;
