import './Config.css';

const CONFIGS = [
  { title: '1 BHK', area: '401 – 480 Sq. Ft.', floor: '/img/floor1.webp' },
  { title: '2 BHK', area: '571 – 780 Sq. Ft.', floor: '/img/floor2.webp' },
  { title: 'TWO ADJACENT FLATS', area: '1405 Sq. Ft.', floor: '/img/floor3.webp' },
];

export default function Config({ onEnquire, onLightbox }) {
  return (
    <section className="palm-config" id="config">
      {/* ---------- HEADING ---------- */}
      <div className="palm-config__head">
        {/* Eyebrow — left se slide in */}
        <p
          className="palm-config__eyebrow"
          data-reveal="left"
        >
          CONFIGURATION
        </p>

        {/* Heading — left se, thoda delay */}
        <h2
          className="palm-config__heading"
          data-reveal="left"
          data-reveal-delay="1"
        >
          CHOOSE YOUR RESIDENCE
        </h2>

        {/* Divider — zoom in */}
        <span
          className="palm-config__divider"
          data-reveal="zoom"
          data-reveal-delay="2"
        ></span>
      </div>

      {/* ---------- CARDS GRID ---------- */}
      <div className="palm-config__grid">
        {CONFIGS.map((cfg, i) => (
          <div
            key={cfg.title}
            className="palm-config__card"
            data-reveal="up"
            data-reveal-delay={i + 1}
          >
            <div className="palm-config__content">
              <h3 className="palm-config__title">{cfg.title}</h3>
              <p className="palm-config__area">
                {cfg.area}
                <sup>*</sup>
              </p>
            </div>

            <div className="palm-config__footer">
              {/* Icon — lightbox open */}
              <span
                className="palm-config__icon"
                onClick={() => onLightbox(cfg.floor)}
                role="button"
                tabIndex={0}
                aria-label={`View ${cfg.title} floor plan`}
                onKeyDown={(e) => e.key === 'Enter' && onLightbox(cfg.floor)}
              >
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M20 4 L26 14 L36 14 L28 22 L32 32 L20 26 L8 32 L12 22 L4 14 L14 14 Z" />
                  <path d="M20 10 L23 16 L30 16 L25 21 L27 28 L20 24 L13 28 L15 21 L10 16 L17 16 Z" />
                </svg>
              </span>

              {/* Enquire button */}
              <button
                className="palm-config__link"
                onClick={onEnquire}
                type="button"
              >
                ENQUIRE NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}