import { useMemo, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectShowcase.css";

// ✅ Local images
import palmGalaxyImg     from "./main-pages-images/palm-galaxy.png";
import jaiMariImg        from "./main-pages-images/jai-mari.webp";
import eliteImg          from "./main-pages-images/elite.png";
import paradiseValleyImg from "./main-pages-images/paradise-valley.webp";

// 🔥 PROJECTS DATA
export const projects = [
  {
    id: "palm-galaxy",
    name: "Palm Galaxy",
    location: "Pipeline Road, Kalyan East",
    city: "Kalyan",
    type: "Residential",
    tag: "New Launch",
    status: "New Launch",
    configuration: "1 & 2 BHK Residences",
    price: "Price on Request",
    image: palmGalaxyImg,
    gallery: [palmGalaxyImg],
    description: "36-acre township by Thakarshi Lifespaces.",
    amenities: ["Rooftop Amenities", "High-Street Retail", "36-Acre Township"],
  },
  {
    id: "jai-mari-home",
    name: "Jai Mari Home",
    location: "Nandivali Gaon Road, Kalyan East",
    city: "Kalyan",
    type: "Residential",
    tag: "New Launch",
    status: "New Launch",
    configuration: "1, 2 BHK & Jodi Flats",
    price: "Price on Request",
    image: jaiMariImg,
    gallery: [jaiMariImg],
    description:
      "Thoughtfully designed residential destination in Kalyan East, near Arya Gurukul School.",
    amenities: ["Landscape Garden", "Indoor Games", "Jogging Track", "Yoga Pavilion"],
  },
  {
    id: "elite-residences",
    name: "Elite Residences",
    location: "Dombivli East, Thane",
    city: "Dombivli",
    type: "Residential",
    tag: "New Launch",
    status: "New Launch",
    configuration: "2 & 3.5 BHK Apartments",
    price: "Price on Request",
    image: eliteImg,
    gallery: [eliteImg],
    description:
      "The next big thing in luxury living by Kapleshwara Group, located in Dombivli (E).",
    amenities: ["Rooftop Amenities", "Sundeck Area", "Indoor Games", "Kids Play Area"],
  },
  {
    id: "paradise-valley",
    name: "Paradise Valley",
    location: "Kolshet Road, Thane (W)",
    city: "Thane",
    type: "Residential",
    tag: "New Launch",
    status: "New Launch",
    configuration: "2 & 3 BHK Residences",
    price: "Price on Request",
    image: paradiseValleyImg,
    gallery: [paradiseValleyImg],
    description:
      "Thoughtfully designed residential destination by Thakarshi Lifespaces on Kolshet Road, Thane West.",
    amenities: ["Rooftop Amenities", "Landscaped Gardens", "Club House", "Kids Play Area"],
  },
  {
    id: "meridian-park",
    name: "Meridian Park",
    location: "Bandra East, Mumbai",
    city: "Mumbai",
    type: "Residential",
    tag: "Luxury",
    status: "Ready to Move",
    configuration: "3 & 4 BHK Residences",
    price: "₹4.2 Cr Onwards",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    ],
    description: "A 42-storey residential landmark overlooking the Bandra skyline.",
    amenities: ["Infinity Pool", "Private Sky Gardens", "Wellness Spa", "24/7 Concierge"],
  },
  {
    id: "azure-heights",
    name: "Azure Heights",
    location: "Ghodbunder Road, Thane",
    city: "Thane",
    type: "Residential",
    tag: "Upcoming",
    status: "Upcoming",
    configuration: "2 & 3 BHK Residences",
    price: "₹1.8 Cr Onwards",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80",
    ],
    description: "Set against the Yeoor hills.",
    amenities: ["Central Green", "Clubhouse", "Jogging Trail", "Kids' Cove"],
  },

  
];

// ✅ Collect ALL unique image URLs for preloading
const ALL_IMAGES = [
  palmGalaxyImg,
  jaiMariImg,
  eliteImg,
  paradiseValleyImg,
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1400&q=80",
];

// ✅ Filter options
const TYPE_FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Luxury",
  "Ready to Move",
  "Upcoming",
];

const LOCATIONS = [
  "All Locations",
  "Kalyan",
  "Dombivli",
  "Mumbai",
  "Thane",
];

export default function ProjectShowcase({
  limit,
  showFilters = false,
  initialType = "All",
}) {
  const [activeType, setActiveType] = useState(initialType);
  const [activeCity, setActiveCity] = useState("All Locations");

  // ✅ PRELOAD ALL IMAGES ON MOUNT — cached in browser
  useEffect(() => {
    ALL_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // ✅ Filter logic
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const typeMatch =
        activeType === "All" ||
        p.type === activeType ||
        p.tag === activeType ||
        p.status === activeType;
      const cityMatch =
        activeCity === "All Locations" || p.city === activeCity;
      return typeMatch && cityMatch;
    });
  }, [activeType, activeCity]);

  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="showcase">
      <div className="showcase__inner">
        {/* ── Head ─────────────────────────────── */}
        <div className="showcase__head">
          <span className="showcase__eyebrow">Our Projects</span>
          <div className="showcase__head-row">
            <h2 className="showcase__title">Iconic Developments</h2>
            <p className="showcase__desc">
              Discover exceptional residential and commercial destinations designed
              for a life beyond ordinary.
            </p>
          </div>
        </div>

        {/* ── Filters ──────────────────────────── */}
        {showFilters && (
          <div className="showcase__filters">
            <div className="showcase__filter-row">
              {TYPE_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveType(f)}
                  className={`showcase__filter-btn ${
                    activeType === f ? "is-active" : ""
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="showcase__filter-row">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setActiveCity(loc)}
                  className={`showcase__loc-btn ${
                    activeCity === loc ? "is-active" : ""
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── Grid ─────────────────────────────── */}
        {visible.length === 0 ? (
          <p className="showcase__empty">No projects match these filters yet.</p>
        ) : (
          <div className="showcase__grid">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}