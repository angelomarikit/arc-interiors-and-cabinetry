import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputRoot = path.join(root, "public", "images");
const categories = [
  ["Bedroom", "Bedroom", "bedroom"],
  ["Cabinets", "Cabinets", "cabinets"],
  ["Kitchen", "Kitchen", "kitchen"],
  ["Living Room-Dining Room", "Living Room – Dining Room", "living-dining"],
  ["Toilet", "Toilet", "toilet"],
];

const titleSets = {
  Bedroom: ["Bedroom Interior", "Integrated Wardrobe", "Bedroom Cabinetry", "Custom Bed Wall"],
  Cabinets: ["Custom Storage Cabinet", "Built-In Cabinetry", "Display Cabinet", "Integrated Storage"],
  Kitchen: ["Modern Kitchen Cabinetry", "Custom Kitchen", "Kitchen Storage", "Built-In Kitchen"],
  "Living Room – Dining Room": ["Living Room Interior", "Dining Area Cabinetry", "Entertainment Unit", "Connected Living Space"],
  Toilet: ["Toilet Interior", "Custom Vanity", "Bathroom Cabinetry", "Integrated Vanity Storage"],
};

const featured = new Set([
  "bedroom-bedroom",
  "cabinets-p08",
  "kitchen-04",
  "living-dining-yl-living-room-1",
  "toilet-2f-master-bathroom-a",
]);

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const missing = [];
for (const [sourceDir] of categories) {
  try {
    await fs.access(path.join(root, sourceDir));
  } catch {
    missing.push(sourceDir);
  }
}
try {
  await fs.access(path.join(root, "LOGO", "Logo-Model CIRCULARpng.png"));
} catch {
  missing.push("LOGO");
}

if (missing.length > 0) {
  console.error("Original source folders are no longer in this project.");
  console.error("The website already uses optimized files in public/images.");
  console.error("To regenerate images, restore these folders first:", missing.join(", "));
  process.exit(1);
}

await fs.mkdir(outputRoot, { recursive: true });
const projects = [];
let globalIndex = 1;

for (const [sourceDir, category, slug] of categories) {
  const files = (await fs.readdir(path.join(root, sourceDir)))
    .filter((file) => /\.(jpe?g|png|webp|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  const categoryOut = path.join(outputRoot, "projects", slug);
  await fs.mkdir(categoryOut, { recursive: true });

  for (const [index, file] of files.entries()) {
    const id = `${slug}-${slugify(file)}`;
    const input = path.join(root, sourceDir, file);
    const image = sharp(input).rotate();
    const metadata = await image.metadata();
    const width = metadata.width ?? 1600;
    const height = metadata.height ?? 1200;
    const ratio = width / height;
    const title = titleSets[category][index % titleSets[category].length];
    const alt = `${title} by ARC Interiors & Cabinetry`;

    await Promise.all([
      image
        .clone()
        .resize({ width: 1000, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toFile(path.join(categoryOut, `${id}-gallery.webp`)),
      image
        .clone()
        .resize({ width: 2400, withoutEnlargement: true })
        .webp({ quality: 88, effort: 5 })
        .toFile(path.join(categoryOut, `${id}-full.webp`)),
    ]);

    projects.push({
      id,
      src: `/images/projects/${slug}/${id}-gallery.webp`,
      fullSrc: `/images/projects/${slug}/${id}-full.webp`,
      alt,
      title,
      category,
      featured: featured.has(id),
      width,
      height,
      orientation: ratio > 1.28 ? "landscape" : ratio < 0.82 ? "portrait" : "square",
      order: globalIndex++,
    });
  }
}

await fs.mkdir(path.join(outputRoot, "hero"), { recursive: true });
await sharp(path.join(root, "Living Room-Dining Room", "YL Living Room 1.jpg"))
  .rotate()
  .resize({ width: 2560, withoutEnlargement: true })
  .webp({ quality: 88, effort: 5 })
  .toFile(path.join(outputRoot, "hero", "arc-hero.webp"));

await fs.mkdir(path.join(outputRoot, "brand"), { recursive: true });
await sharp(path.join(root, "LOGO", "Logo-Model CIRCULARpng.png"))
  .resize({ width: 512, height: 512, fit: "contain" })
  .png({ compressionLevel: 9 })
  .toFile(path.join(outputRoot, "brand", "arc-mark.png"));

const data = `import type { ProjectImage } from "../types/project";\n\n// Edit this file to reorder, rename, feature, or recategorize catalog images.\nexport const projects: ProjectImage[] = ${JSON.stringify(projects, null, 2)};\n`;
await fs.mkdir(path.join(root, "src", "data"), { recursive: true });
await fs.writeFile(path.join(root, "src", "data", "projects.ts"), data);
console.log(`Prepared ${projects.length} project images.`);
