import './Amenities.css';

const AMENITIES = [
  {
    label: 'Open Gym',
    icon: (
      <>
        <path d="M3 9v6M6 6v12M9 9v6M15 9v6M18 6v12M21 9v6" />
        <path d="M6 12h12" />
      </>
    ),
  },
  {
    label: 'Indoor Games',
    icon: (
      <>
        <path d="M6 8h12a4 4 0 0 1 3.8 5l-1 4a2 2 0 0 1-3.3 1l-3-2H9.5l-3 2a2 2 0 0 1-3.3-1l-1-4A4 4 0 0 1 6 8Z" />
        <path d="M7 11v4M5 13h4" />
        <circle cx="16" cy="12" r="0.8" />
        <circle cx="18" cy="14" r="0.8" />
      </>
    ),
  },
  {
    label: 'Garden',
    icon: (
      <>
        <path d="M12 21V12" />
        <path d="M12 14C5 14 3 9 4 4c6 0 9 4 8 10" />
        <path d="M12 11c0-5 3-8 8-8 1 5-2 9-8 10" />
        <path d="M7 21h10" />
      </>
    ),
  },
  {
    label: 'Yoga Pavilion',
    icon: (
      <>
        <circle cx="12" cy="5" r="2" />
        <path d="M12 8v4" />
        <path d="m12 9-5 3M12 9l5 3" />
        <path d="m12 12-5 5M12 12l5 5" />
        <path d="M5 19c2-2 4-2 7-2s5 0 7 2" />
        <path d="M3 22h18" />
      </>
    ),
  },
  {
    label: "Children's Play Area",
    icon: (
      <>
        <path d="M3 4h18M5 4v4M19 4v4" />
        <path d="M5 8h14" />
        <path d="M7 8v5l5 4 5-4V8" />
        <path d="M12 17v4M8 21h8" />
      </>
    ),
  },
  {
    label: 'Gazebos',
    icon: (
      <>
        <path d="M2 10 12 3l10 7H2Z" />
        <path d="M4 10v10M20 10v10M12 10v10" />
        <path d="M2 20h20" />
        <path d="M8 15h8" />
      </>
    ),
  },
  {
    label: 'Mini Pool',
    icon: (
      <>
        <path d="M3 10h18v4H3z" />
        <path d="M5 14v3M19 14v3" />
        <path d="M3 18c2-2 4 2 6 0s4-2 6 0 4 2 6 0" />
        <path d="M3 22c2-2 4 2 6 0s4-2 6 0 4 2 6 0" />
        <path d="M8 7V4M12 7V3M16 7V4" />
      </>
    ),
  },
];

export default function Amenities() {
  return (
    <section className="palm-amenities" id="amenities">
      {/* ---------- Heading ---------- */}
      <div className="palm-amenities__head">
        <p className="palm-amenities__eyebrow" data-reveal="left">
          AMENITIES
        </p>
        <h2
          className="palm-amenities__heading"
          data-reveal="left"
          data-reveal-delay="1"
        >
          DISCOVER THE FINER SIDE OF LIFE
        </h2>
        <span
          className="palm-amenities__divider"
          data-reveal="zoom"
          data-reveal-delay="2"
        ></span>
        <p
          className="palm-amenities__sub"
          data-reveal="up"
          data-reveal-delay="3"
        >
          Exclusive indulgences, green spaces and recreation.
        </p>
      </div>

      {/* ---------- Grid ---------- */}
      <div className="palm-amenities__grid">
        {AMENITIES.map((a, i) => (
          <div
            key={a.label}
            className="palm-amenities__item"
            data-reveal="up"
            data-reveal-delay={Math.min(i + 1, 6)}
          >
            <span className="palm-amenities__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {a.icon}
              </svg>
            </span>
            <span className="palm-amenities__label">{a.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}