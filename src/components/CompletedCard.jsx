import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./CompletedCard.css";

const getProjectLink = (project) => {
  if (!project || !project.id) return "/projects";
  return `/projects/${project.id}`;
};

export default function CompletedCard({ project }) {
  // ✅ Safety — agar project undefined ho
  if (!project) {
    console.warn("CompletedCard: project prop is required");
    return null;
  }

  return (
    <Link
      to={getProjectLink(project)}
      className="completed-card"
      aria-label={`View details for ${project.name || "Project"}`}
    >
      <div className="completed-card__image-wrap">
        <img
          src={project.image || ""}
          alt={`${project.name || "Project"}, ${project.location || ""}`}
          width="800"
          height="600"
          loading="eager"
          decoding="async"
          className="completed-card__image"
        />
        <div className="completed-card__overlay" />

        {/* Completed Badge */}
        <span className="completed-card__badge">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          {project.status || "Completed"}
        </span>

        {/* Year Chip */}
        {project.year && (
          <span className="completed-card__year">{project.year}</span>
        )}

        <div className="completed-card__content">
          <p className="completed-card__location">{project.location}</p>
          <h3 className="completed-card__title">{project.name || "Untitled"}</h3>

          <div className="completed-card__details">
            <div className="completed-card__details-inner">
              <div>
                <p className="completed-card__config">
                  {project.configuration}
                </p>
                {project.units && (
                  <p className="completed-card__units">
                    <strong>{project.units}</strong> Units Delivered
                  </p>
                )}
              </div>
              <span className="completed-card__arrow">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}