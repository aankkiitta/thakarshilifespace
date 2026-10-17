import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "./ProjectShowcase";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import "./LuxuryScroll.css";

const luxuryProjects = projects.filter((p) => p.tag === "Luxury");

export default function LuxuryScroll() {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({
      left: dir * trackRef.current.clientWidth * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <section className="luxury">
      <div className="luxury__inner">
        {/* ---------- Header ---------- */}
        <div className="luxury__head">
          <Reveal>
            <SectionLabel dark>The Art Of Luxury</SectionLabel>
            <h2 className="luxury__title">Beyond The Ordinary</h2>
          </Reveal>

          <div className="luxury__nav">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              className="luxury__arrow"
              type="button"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              className="luxury__arrow"
              type="button"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ---------- Track ---------- */}
        <div ref={trackRef} className="luxury__track">
          {luxuryProjects.map((p) => (
            <Link
              to={`/projects/${p.id}`}
              key={p.id}
              className="luxury__card"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="luxury__card-image"
              />
              <div className="luxury__card-overlay" />

              <div className="luxury__card-content">
                <p className="luxury__card-location">{p.location}</p>
                <h3 className="luxury__card-title">{p.name}</h3>
                <p className="luxury__card-desc">{p.description}</p>
                <span className="luxury__card-link">
                  Explore Project <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}