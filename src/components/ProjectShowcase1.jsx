import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import "./ProjectShowcase1.css";
import "./ProjectCard.css";

import palmGalaxyImg     from "./main-pages-images/palm-galaxy.png";
import jaiMariImg        from "./main-pages-images/jai-mari.webp";
import eliteImg          from "./main-pages-images/elite.png";
import paradiseValleyImg from "./main-pages-images/paradise-valley.webp";

export const projects1 = [
  {
    id: "palm-galaxy",
    name: "Palm Galaxy",
    location: "Pipeline Road, Kalyan East",
    city: "Kalyan",
    type: "Residential",
    status: "On Going",
    configuration: "1 & 2 BHK Residences",
    price: "Price on Request",
    image: palmGalaxyImg,
  },
  {
    id: "jai-mari-home",
    name: "Jai Mari Home",
    location: "Nandivali Gaon Road, Kalyan East",
    city: "Kalyan",
    type: "Residential",
    status: "On Going",
    configuration: "1, 2 BHK & Jodi Flats",
    price: "Price on Request",
    image: jaiMariImg,
  },
  {
    id: "elite-residences",
    name: "Elite Residences",
    location: "Dombivli East, Thane",
    city: "Dombivli",
    type: "Residential",
    status: "On Going",
    configuration: "2 & 3.5 BHK Apartments",
    price: "Price on Request",
    image: eliteImg,
  },
  {
    id: "paradise-valley",
    name: "Paradise Valley",
    location: "Kolshet Road, Thane (W)",
    city: "Thane",
    type: "Residential",
    status: "On Going",
    configuration: "2 & 3 BHK Residences",
    price: "Price on Request",
    image: paradiseValleyImg,
  },
  
];

const getProjectLink = (project) => {
  if (!project) return "/projects";
  if (project.id === "palm-galaxy") return "/palm";
  if (project.id === "jai-mari-home") return "/jmh";
  if (project.id === "elite-residences") return "/elite";
  if (project.id === "paradise-valley") return "/paradise-valley";
  return `/projects/${project.id}`;
};

const INITIAL_COUNT = 3;
const LOAD_MORE_STEP = 3;

export default function ProjectShowcase1({
  activeType = "All",
  showHeading = false,
  showViewAll = false,
  headingEyebrow = "Featured Projects.",
  headingTitle = "Where happiness lives",
}) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    projects1.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  const filtered = projects1.filter((p) => {
    if (activeType === "All") return true;
    return (
      p.type === activeType ||
      p.status === activeType ||
      p.tag === activeType
    );
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_STEP, filtered.length)
    );
  };

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [activeType]);

  return (
    <section className="pfeat">
      <div className="pfeat__inner">

        {showHeading && (
          <div className="pfeat__head">
            <div className="pfeat__head-left">
              <span className="pfeat__eyebrow">{headingEyebrow}</span>
              <h2 className="pfeat__title">{headingTitle}</h2>
            </div>

            {showViewAll && (
              <Link to="/projects" className="pfeat__viewall">
                <ArrowRight size={16} strokeWidth={2} />
                <span>View All</span>
              </Link>
            )}
          </div>
        )}

        {visible.length === 0 ? (
          <p className="pfeat__empty">No projects match this filter.</p>
        ) : (
          <div className="pfeat__grid">
            {visible.map((project) => (
              <Link
                key={project.id}
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
                    loading="eager"
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
                          <p className="project-card__config">
                            {project.configuration}
                          </p>
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
            ))}
          </div>
        )}

        {hasMore && (
          <div className="pfeat__load">
            <button
              type="button"
              className="pfeat__load-btn"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}