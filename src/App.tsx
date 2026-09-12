import { useState } from "react";
import { Header } from "./components/Header";
import { Hero, Introduction, SpaceCategories, FeaturedProjects } from "./components/PortfolioSections";
import { About, Contact, Philosophy, Process } from "./components/ContentSections";
import { ProjectGallery } from "./components/ProjectGallery";
import { FAQWidget, Footer } from "./components/FooterAndWidget";
import type { ProjectCategory, ProjectFilter } from "./types/project";

export default function App() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("Bedroom");

  const selectSpace = (category: ProjectCategory) => {
    setActiveFilter(category);
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <SpaceCategories onSelect={selectSpace} />
        <FeaturedProjects onSelect={selectSpace} />
        <ProjectGallery activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <Philosophy />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <FAQWidget />
    </>
  );
}
