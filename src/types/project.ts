export type ProjectCategory =
  | "Bedroom"
  | "Cabinets"
  | "Kitchen"
  | "Living Room – Dining Room"
  | "Toilet";

export type ProjectFilter = ProjectCategory;
export type ImageOrientation = "landscape" | "portrait" | "square";

export interface ProjectImage {
  id: string;
  src: string;
  fullSrc: string;
  alt: string;
  title: string;
  category: ProjectCategory;
  featured?: boolean;
  description?: string;
  width: number;
  height: number;
  orientation: ImageOrientation;
  order: number;
}
