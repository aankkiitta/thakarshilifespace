import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./ProjectCard.css";

const getProjectLink = (project) => {
  if (!project) return "/projects";
  if (project.id === "palm-galaxy") return "/palm";
  if (project.id === "jai-mari-home") return "/jmh";
  if (project.id === "elite-residences") return "/elite";
  if (project.id === "paradise-valley") return "/paradise-valley";
  return `/projects/${project.id}`;
};

export default function ProjectCard({ project }) {
  return (
    <Link
      to={getProjectLink(project)}
      className="project-card"
      aria-label={`View details for ${project.name}`}
    >
      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt={`${project.name}, ${project.location}`}
          width="800"
          height="600"
          loading="eager"            /* ✅ Eager — turant load */
          decoding="async"
          className="project-card__image"
        />
        <div className="project-card__overlay" />
        <span className="project-card__status">{project.status}</span>

        <div className="project-card__content">
          <p className="project-card__location">{project.location}</p>
          <h3 className="project-card__title">{project.name}</h3>

          <div className="project-card__details">
            <div className="project-card__details-inner">
              <div>
                <p className="project-card__config">{project.configuration}</p>
                <p className="project-card__price">{project.price}</p>
              </div>
              <span className="project-card__arrow">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}