import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { title, description, image, technologies, demo, github } = project;

  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={image} alt={`${title} screenshot`} loading="lazy" />
      </div>

      <div className="project-card__body">
        <h3>{title}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="project-card__tech">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <a
            href={demo || undefined}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--primary btn--small ${demo ? "" : "btn--disabled"}`}
            aria-disabled={!demo}
          >
            <FiExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--small"
          >
            <FiGithub size={16} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
