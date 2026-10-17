import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import "./CompletedShowcase1.css";
import "./ProjectCard.css";



// images
import TrilokinathHeights from "./main-pages-images/Trilokinath-heights.png";

import Atharvapartment from "./main-pages-images/Atharv-apartment.png";

import Aasthaheritage from "./main-pages-images/Aastha-Heritage.png";

import SkyAmbiencephase2 from "./main-pages-images/SkyAmbiencephase2.png";



export const completedProjects1 = [
  {
    id: "thakarshi-heights",
    name: "Trilokinath Heights",
    location: "Kalyan East , Thane",
    city: "Dombivli",
    status: "Completed",
    year: "2022",
   
    price: "Sold Out",
    image: TrilokinathHeights,
  },
  {
    id: "Atharv-apartment",
    name: "Atharv Apartment",
    location: "Kalyan West, Thane",
    city: "Kalyan",
    status: "Completed",
    year: "2021",
    configuration: "Premium Office Spaces",
    price: "Sold Out",
    image: Atharvapartment,
  },
  {
    id: "Aastha-Heritage",
    name: "Aastha Heritage",
    location: "Kalyan East, Thane",
    city: "Ambernath",
    status: "Completed",
    year: "2020",
    price: "Sold Out",
    image: Aasthaheritage,
  },
  {
    id: "SkyAmbiencephase2",
    name: "Sky Ambience phase 2",
    location: "Kalyan East, Thane",
    city: "Murbad",
    status: "Completed",
    year: "2019",
    price: "Sold Out",
    image: SkyAmbiencephase2,
  },
  
];

const getProjectLink = (project) => {
  if (!project) return "/projects";
  return `/projects/${project.id}`;
};

const INITIAL_COUNT = 3;
const LOAD_MORE_STEP = 3;

export default function CompletedShowcase1({
  activeType = "All",
  showHeading = false,
  showViewAll = false,
  headingEyebrow = "Completed Projects.",
  headingTitle = "Where memories live",
}) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  useEffect(() => {
    completedProjects1.forEach((p) => {
      const img = new Image();
      img.src = p.image;
    });
  }, []);

  const filtered = completedProjects1.filter((p) => {
    if (activeType === "All") return true;
    if (activeType === "Completed") return true;
    if (p.type === activeType) return true;
    if (p.status === activeType) return true;
    return false;
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
    <section className="cfeat">
      <div className="cfeat__inner">

        {showHeading && (
          <div className="cfeat__head">
            <div className="cfeat__head-left">
              <span className="cfeat__eyebrow cfeat__eyebrow--desktop">
                {headingEyebrow}
              </span>
              <h2 className="cfeat__title cfeat__title--desktop">
                {headingTitle}
              </h2>
              <span className="cfeat__eyebrow--mobile">
                Completed Projects
              </span>
            </div>

            {showViewAll && (
              <Link to="/projects" className="cfeat__viewall">
                <ArrowRight size={16} strokeWidth={2} />
                <span>View All</span>
              </Link>
            )}
          </div>
        )}

        {visible.length === 0 ? (
          <p className="cfeat__empty">No completed projects match this filter.</p>
        ) : (
          <div className="cfeat__grid">
            {visible.map((project) => (
              <Link
                key={project.id}
                to={getProjectLink(project)}
                className="cfeat__card"
                aria-label={`View details for ${project.name}`}
              >
                <div className="cfeat__ribbon">
                  <span>{project.status}</span>
                </div>

                <div className="cfeat__card-image-wrap">
                  <img
                    src={project.image}
                    alt={`${project.name}, ${project.location}`}
                    width="800"
                    height="600"
                    loading="eager"
                    decoding="async"
                    className="cfeat__card-image"
                  />
                  <div className="cfeat__card-overlay" />

                  <div className="cfeat__card-content">
                    <p className="cfeat__card-location">{project.location}</p>
                    <h3 className="cfeat__card-title">{project.name}</h3>

                    <div className="cfeat__card-details">
                      <div className="cfeat__card-details-inner">
                        <div>
                          <p className="cfeat__card-config">
                            {project.configuration}
                          </p>
                          <p className="cfeat__card-price">{project.price}</p>
                        </div>
                        <span className="cfeat__card-arrow">
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
          <div className="cfeat__load">
            <button
              type="button"
              className="cfeat__load-btn"
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