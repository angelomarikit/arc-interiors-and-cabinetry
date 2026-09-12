import { ArrowDown, ArrowUpRight } from "lucide-react";
import { spaces } from "../data/content";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../types/project";

interface SpaceCategoriesProps {
  onSelect: (category: ProjectCategory) => void;
}

export function Hero() {
  return (
    <section className="hero" id="home">
      <img src="/images/hero/arc-hero.webp" alt="Custom living room and cabinetry by ARC Interiors & Cabinetry" width="2560" height="1440" />
      <div className="hero-shade" />
      <div className="hero-content container">
        <p className="eyebrow light">Interiors / Custom cabinetry</p>
        <h1>Spaces designed with purpose.<br /><em>Built with precision.</em></h1>
        <p className="hero-copy">Custom interiors and cabinetry crafted for modern homes, functional spaces, and timeless living.</p>
        <div className="hero-actions">
          <a className="button button-light" href="#projects">Explore our work <ArrowUpRight /></a>
          <a className="text-link light" href="#contact">Request a consultation</a>
        </div>
      </div>
      <a href="#introduction" className="scroll-cue" aria-label="Scroll to introduction">
        Scroll <ArrowDown />
      </a>
    </section>
  );
}

export function Introduction() {
  return (
    <section className="section intro" id="introduction">
      <div className="container intro-grid">
        <p className="eyebrow">ARC / Pasig &amp; Biñan</p>
        <h2>Thoughtful interiors.<br /><em>Custom craftsmanship.</em></h2>
        <div className="intro-copy">
          <p>ARC Interiors &amp; Cabinetry creates functional, refined, and personalized interiors with a focus on custom cabinetry, considered space planning, and timeless design.</p>
          <p>We balance aesthetics, storage, comfort, and everyday functionality across the key spaces of the home.</p>
        </div>
      </div>
    </section>
  );
}

export function SpaceCategories({ onSelect }: SpaceCategoriesProps) {
  return (
    <section className="section spaces-section" id="spaces">
      <div className="container">
        <div className="section-intro split-heading">
          <div>
            <p className="eyebrow">Our expertise</p>
            <h2>Spaces we design</h2>
          </div>
          <p>Explore interior and cabinetry work across the different areas of the home.</p>
        </div>
        <div className="spaces-list">
          {spaces.map((space, index) => {
            const project = projects.find((item) => item.id === space.imageId) ?? projects.find((item) => item.category === space.name);
            if (!project) return null;
            return (
              <article className="space-row" key={space.name}>
                <span className="space-index">0{index + 1}</span>
                <div className="space-image">
                  <img src={project.src} alt={project.alt} width={project.width} height={project.height} loading="lazy" />
                </div>
                <div className="space-copy">
                  <h3>{space.name}</h3>
                  <p>{space.description}</p>
                  <a
                    href="#projects"
                    onClick={() => onSelect(space.name)}
                    className="text-link"
                  >
                    View projects <ArrowUpRight />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface FeaturedProjectsProps {
  onSelect: (category: ProjectCategory) => void;
}

export function FeaturedProjects({ onSelect }: FeaturedProjectsProps) {
  const featured = projects.filter((project) => project.featured).slice(0, 5);
  const [lead, ...rest] = featured;

  const describe = (category: ProjectCategory) => spaces.find((space) => space.name === category)?.description;
  const countFor = (category: ProjectCategory) => projects.filter((project) => project.category === category).length;

  const body = (project: (typeof projects)[number], index: number) => (
    <>
      <span className="featured-index">{`0${index + 1}`}</span>
      <h3>{project.title}</h3>
      <p>{describe(project.category)}</p>
      <a className="text-link light" href="#projects" onClick={() => onSelect(project.category)}>
        {countFor(project.category)} {project.category} projects <ArrowUpRight />
      </a>
    </>
  );

  const frame = (project: (typeof projects)[number]) => (
    <div className="featured-frame">
      <img src={project.src} alt={project.alt} width={project.width} height={project.height} loading="lazy" />
      <span className="featured-tag">{project.category}</span>
    </div>
  );

  return (
    <section className="section featured-section" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-intro split-heading">
          <div>
            <p className="eyebrow">A closer look</p>
            <h2 id="featured-title">Featured projects</h2>
          </div>
          <div className="featured-lede">
            <p>One project from each space we design — bedrooms, cabinetry, kitchens, living and dining areas, and toilets.</p>
            <a className="text-link light" href="#projects">View full catalog <ArrowUpRight /></a>
          </div>
        </div>

        {lead && (
          <article className="featured-lead">
            {frame(lead)}
            <div className="featured-body">{body(lead, 0)}</div>
          </article>
        )}

        <div className="featured-rows">
          {rest.map((project, index) => (
            <article className="featured-row" key={project.id}>
              {frame(project)}
              <div className="featured-body">{body(project, index + 1)}</div>
            </article>
          ))}
        </div>

        <div className="featured-foot">
          <p>Browse every project grouped by space</p>
          <a className="button button-light" href="#projects">Open the full catalog <ArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
}
