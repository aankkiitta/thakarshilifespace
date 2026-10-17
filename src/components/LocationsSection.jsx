import { useState } from "react";
import { MapPin } from "lucide-react";
import { locations } from "../data/projects";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import "./LocationsSection.css";

export default function LocationsSection() {
  const [active, setActive] = useState(locations[0]);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    active.city + ", India"
  )}&output=embed`;

  return (
    <section className="locations">
      <div className="locations__inner">
        <Reveal>
          <SectionLabel align="center">Where We Are</SectionLabel>
          <h2 className="locations__title">
            Present Across India&rsquo;s Skylines
          </h2>
        </Reveal>

        <div className="locations__body">
          {/* ---------- Left: City List ---------- */}
          <Reveal className="locations__list">
            {locations.map((loc) => (
              <button
                key={loc.city}
                onClick={() => setActive(loc)}
                className={`locations__item ${
                  active.city === loc.city ? "is-active" : ""
                }`}
                type="button"
              >
                <div className="locations__item-left">
                  <MapPin
                    size={18}
                    className="locations__item-icon"
                  />
                  <span className="locations__item-city">{loc.city}</span>
                </div>

                <span className="locations__item-count">
                  {loc.count} Project{loc.count > 1 ? "s" : ""}
                </span>
              </button>
            ))}
          </Reveal>

          {/* ---------- Right: Map ---------- */}
          <Reveal delay={0.1} className="locations__map-wrap">
            <iframe
              key={active.city}
              title={`Map of AVANA projects in ${active.city}`}
              src={mapSrc}
              className="locations__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}