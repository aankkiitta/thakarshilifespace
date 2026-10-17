import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProjectFilter from "../components/ProjectFilter";
import ProjectShowcase from "../components/ProjectShowcase1";
import CompletedShowcase from "../components/CompletedShowcase1";
import "./Projects.css";

export default function Projects() {
  const [params] = useSearchParams();
  const initialType = params.get("filter") || "All";
  const [activeType, setActiveType] = useState(initialType);

  return (
    <div className="projects-page">
      {/* ✅ MAIN TITLE SECTION (Wapas add kiya) */}
      <div className="projects-page__header">
        <h1 className="projects-page__title">Projects</h1>
        <p className="projects-page__subtitle">
          Explore Our Ongoing, Incoming and Completed
        </p>
      </div>

      {/* ✅ FILTER SECTION */}
      <div className="projects-page__filter-wrap">
        <ProjectFilter activeType={activeType} setActiveType={setActiveType} />
      </div>

      {/* ✅ FEATURED PROJECTS TITLE */}
      <div className="projects-page__featured-header">
        <h2 className="projects-page__featured-title">Featured Projects</h2>
      </div>

      {/* ✅ FEATURED PROJECTS GRID */}
      <div className="projects-page__showcase-wrap">
        <ProjectShowcase activeType={activeType} />
      </div>

      {/* ✅ COMPLETED PROJECTS TITLE */}
      <div className="projects-page__featured-header">
        <h2 className="projects-page__featured-title">Completed Projects</h2>
      </div>

      {/* ✅ COMPLETED PROJECTS GRID */}
      <div className="projects-page__completed-wrap">
        <CompletedShowcase activeType={activeType} />
      </div>
    </div>
  );
}