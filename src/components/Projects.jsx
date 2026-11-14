import { useState } from "react";
import { projects, projectFilters } from "../data/projects.js";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter));

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionTitle
          eyebrow="Projects"
          title="Things I've built"
          subtitle="Each one started with a data model and grew into a working product."
        />

        <Reveal className="projects__filters">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "is-active" : ""}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <div className="projects__grid">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
