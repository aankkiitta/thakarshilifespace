import { useState, useEffect, useRef, useCallback } from "react";
import "./Gallery.css";

/* ============================================
   useCarousel — Custom Hook (merged)
   ============================================ */
function useCarousel(itemCount) {
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const getGap = useCallback(() => {
    if (!trackRef.current) return 30;
    const style = window.getComputedStyle(trackRef.current);
    return parseInt(style.columnGap || style.gap) || 30;
  }, []);

  const centerItem = useCallback(
    (index) => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;

      const items = track.querySelectorAll(".palm-carousel__item");
      if (!items.length) return;

      if (index < 0) index = items.length - 1;
      if (index >= items.length) index = 0;

      setActiveIndex(index);

      const itemWidth = items[0].offsetWidth;
      const gap = getGap();
      const totalItemWidth = itemWidth + gap;

      const viewportWidth = viewport.offsetWidth;
      const itemCenter = index * totalItemWidth + itemWidth / 2;
      const viewportCenter = viewportWidth / 2;
      const translateX = viewportCenter - itemCenter;

      track.style.transform = `translateX(${translateX}px)`;
    },
    [getGap]
  );

  // Recenter on resize
  useEffect(() => {
    const handleResize = () => centerItem(activeIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, centerItem]);

  return {
    trackRef,
    viewportRef,
    activeIndex,
    centerItem,
  };
}

/* ============================================
   CarouselPanel
   ============================================ */
function CarouselPanel({ isActive, items, onReady }) {
  const { trackRef, viewportRef, activeIndex, centerItem } =
    useCarousel(items.length);

  // Center middle item on mount + when tab becomes active
  useEffect(() => {
    if (!isActive) return;

    const t1 = setTimeout(() => centerItem(1), 100);
    const t2 = setTimeout(() => centerItem(1), 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isActive, centerItem]);

  // Notify parent so it can re-center on tab switch
  useEffect(() => {
    if (onReady) onReady({ centerItem });
  }, [onReady, centerItem]);

  return (
    <div className={`palm-carousel ${isActive ? "is-active" : ""}`}>
      <button
        type="button"
        className="palm-carousel__arrow palm-carousel__arrow--prev"
        onClick={() => centerItem(activeIndex - 1)}
        aria-label="Previous"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
      </button>

      <div className="palm-carousel__viewport" ref={viewportRef}>
        <div className="palm-carousel__track" ref={trackRef}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`palm-carousel__item ${
                i === activeIndex ? "is-active" : ""
              }`}
              onClick={() => centerItem(i)}
            >
              <div className="palm-carousel__img-wrap">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <p className="palm-carousel__caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="palm-carousel__arrow palm-carousel__arrow--next"
        onClick={() => centerItem(activeIndex + 1)}
        aria-label="Next"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}

/* ============================================
   Gallery Data
   ============================================ */
const GALLERY_DATA = {
  exterior: [
    {
      src: "https://picsum.photos/800/1000?random=1",
      alt: "Exterior 1",
      caption: "Tower elevation designed to inspire.",
    },
    {
      src: "https://picsum.photos/800/1000?random=2",
      alt: "Exterior 2",
      caption: "Landscaped podium with green spaces.",
    },
    {
      src: "https://picsum.photos/800/1000?random=3",
      alt: "Exterior 3",
      caption: "Signature facade with modern architecture.",
    },
    {
      src: "https://picsum.photos/800/1000?random=4",
      alt: "Exterior 4",
      caption: "Grand entrance for elevated living.",
    },
  ],
  interior: [
    {
      src: "https://picsum.photos/800/1000?random=5",
      alt: "Interior 1",
      caption: "Expansive living room with natural light.",
    },
    {
      src: "https://picsum.photos/800/1000?random=6",
      alt: "Interior 2",
      caption: "Premium finishes, timeless design.",
    },
    {
      src: "https://picsum.photos/800/1000?random=7",
      alt: "Interior 3",
      caption: "Where comfort meets style.",
    },
    {
      src: "https://picsum.photos/800/1000?random=8",
      alt: "Interior 4",
      caption: "Every corner thoughtfully curated.",
    },
  ],
  amenities: [
    {
      src: "https://picsum.photos/800/1000?random=9",
      alt: "Amenities 1",
      caption: "Infinity pool with panoramic views.",
    },
    {
      src: "https://picsum.photos/800/1000?random=10",
      alt: "Amenities 2",
      caption: "Power isn't displayed. It's sculpted.",
    },
    {
      src: "https://picsum.photos/800/1000?random=11",
      alt: "Amenities 3",
      caption: "State-of-the-art fitness studio.",
    },
    {
      src: "https://picsum.photos/800/1000?random=12",
      alt: "Amenities 4",
      caption: "Spa and wellness retreat.",
    },
  ],
};

const TABS = [
  { key: "exterior", label: "Exterior" },
  { key: "interior", label: "Interior" },
  { key: "amenities", label: "Amenities" },
];

/* ============================================
   Gallery (Main Component)
   ============================================ */
export default function Gallery() {
  const [activeTab, setActiveTab] = useState("exterior");
  const panelRefs = useRef({});

  const handleTabClick = (key) => {
    setActiveTab(key);

    // Re-center the newly active panel
    const panel = panelRefs.current[key];
    if (panel?.centerItem) {
      setTimeout(() => panel.centerItem(1), 60);
    }
  };

  return (
    <section className="palm-gallery" id="gallery">
      <div className="palm-gallery__head">
        <h2 className="palm-gallery__heading" data-reveal="up">
          GALLERY
        </h2>
        <span
          className="palm-gallery__divider"
          data-reveal="zoom"
          data-reveal-delay="1"
        />
      </div>

      <div
        className="palm-gallery__tabs"
        data-reveal="up"
        data-reveal-delay="2"
      >
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`palm-gallery__tab ${
              activeTab === tab.key ? "is-active" : ""
            }`}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {TABS.map((tab) => (
        <CarouselPanel
          key={tab.key}
          isActive={activeTab === tab.key}
          items={GALLERY_DATA[tab.key]}
          onReady={(api) => {
            panelRefs.current[tab.key] = api;
          }}
        />
      ))}

      <div className="palm-gallery__curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C360,120 720,0 1080,60 C1260,90 1440,60 1440,60 L1440,120 L0,120 Z"
            fill="#e2e8f0"
          />
        </svg>
      </div>
    </section>
  );
}