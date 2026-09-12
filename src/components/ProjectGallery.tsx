import { ArrowUpRight, Search } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { filters } from "../data/content";
import { projects } from "../data/projects";
import type { ProjectFilter } from "../types/project";

const PREVIEW_COUNT = 4;
const THUMBNAILS_QUERY = "(min-width: 721px)";

interface ProjectGalleryProps {
  activeFilter: ProjectFilter;
  onFilterChange: (filter: ProjectFilter) => void;
}

// Thumbnail strips crowd the image on phones, where swiping already covers navigation.
function useThumbnailStrip() {
  const [enabled, setEnabled] = useState(() => window.matchMedia(THUMBNAILS_QUERY).matches);

  useEffect(() => {
    const query = window.matchMedia(THUMBNAILS_QUERY);
    const onChange = (event: MediaQueryListEvent) => setEnabled(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return enabled;
}

export function ProjectGallery({ activeFilter, onFilterChange }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState(-1);
  const tabsRef = useRef<HTMLDivElement>(null);
  const showThumbnails = useThumbnailStrip();

  const filtered = useMemo(
    () => projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );
  const preview = filtered.slice(0, PREVIEW_COUNT);

  useEffect(() => {
    const active = tabsRef.current?.querySelector<HTMLButtonElement>('[aria-selected="true"]');
    active?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [activeFilter]);

  return (
    <section className="section gallery-section" id="projects">
      <div className="container">
        <div className="section-intro split-heading">
          <div>
            <p className="eyebrow">Selected residential work</p>
            <h2>Project catalog</h2>
          </div>
          <p>Explore a considered collection of residential interiors, cabinetry, and built-in work across every space.</p>
        </div>

        <div className="filter-wrap" role="tablist" aria-label="Filter projects by space" ref={tabsRef}>
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {preview.map((project, index) => (
            <button
              type="button"
              className="gallery-item"
              key={project.id}
              onClick={() => setOpenIndex(index)}
              aria-label={`View ${project.title}`}
            >
              <img
                src={project.src}
                alt={project.alt}
                width={project.width}
                height={project.height}
                loading="lazy"
                decoding="async"
                onError={(event) => {
                  event.currentTarget.closest(".gallery-item")?.classList.add("image-error");
                }}
              />
              <span className="gallery-overlay">
                <span>
                  <small>{project.category}</small>
                  <strong>{project.title}</strong>
                </span>
                <Search aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>

        {filtered.length > PREVIEW_COUNT && (
          <div className="gallery-more">
            <button type="button" className="button" onClick={() => setOpenIndex(0)}>
              See more <ArrowUpRight />
            </button>
          </div>
        )}

        <Lightbox
          open={openIndex >= 0}
          close={() => setOpenIndex(-1)}
          index={Math.max(openIndex, 0)}
          plugins={showThumbnails ? [Counter, Thumbnails, Zoom] : [Counter, Zoom]}
          carousel={{ finite: false }}
          controller={{ closeOnBackdropClick: true }}
          thumbnails={{ width: 108, height: 74, border: 0, gap: 10, padding: 0 }}
          slides={filtered.map((project) => ({
            src: project.fullSrc,
            alt: project.alt,
            width: project.width,
            height: project.height,
          }))}
          render={{
            slideFooter: ({ slide }) => {
              const project = filtered.find((item) => item.fullSrc === slide.src);
              return project ? (
                <div className="lightbox-caption">
                  <span>{project.category}</span>
                  <strong>{project.title}</strong>
                </div>
              ) : null;
            },
          }}
        />
      </div>
    </section>
  );
}
