import './Location.css';
import locationImg from './img/palm-location.png';

const LOCATIONS = [
  { text: 'Kalyan Junction : 10–12 Mins', icon: 'train' },
  { text: 'Jan Kalyan Multispeciality Hospital : 6 Mins', icon: 'hospital' },
  { text: 'Shramsafalya Hospital : 5 Mins', icon: 'hospital' },
  { text: 'Bus Stop : 2–3 Mins', icon: 'bus' },
  { text: 'Jay Shree Super Market : 6 Mins', icon: 'cart' },
  { text: 'Bharat Petroleum Petrol Pump : 6 Mins', icon: 'fuel' },
  { text: 'Golden Spoon Family Restaurant : 4 Mins', icon: 'food' },
  { text: "St. Mary's High School : 5 Mins", icon: 'school' },
  { text: 'Kalyan–Shilphata Road : Easy Connectivity', icon: 'road' },
  { text: 'Pune Link Road : Easy Access', icon: 'road' },
  { text: 'Malang Gad Road : Direct Connectivity', icon: 'road' },
  { text: 'Pipeline Road : Project Location', icon: 'pipeline' },
];

const MAP_URL =
  'https://www.google.com/maps/place/Palm+Galaxy/@19.219668,73.1254534,17.09z';

const ICONS = {
  train: (
    <>
      <rect x="5" y="4" width="22" height="20" rx="2" />
      <path d="M5 13h22M12 4v9m8-9v9M8 24l-3 4m19-4 3 4M11 24l-2 4m12-4 2 4M9 28h14" />
    </>
  ),
  hospital: (
    <>
      <path d="M13 3h6v7h7v6h-7v7h-6v-7H6v-6h7z" />
      <path d="M5 23h22v6H5zM12 26h2m5 0h2" />
    </>
  ),
  bus: (
    <>
      <rect x="4" y="5" width="24" height="19" rx="3" />
      <path d="M4 15h24M8 24l-2 4m18-4 2 4" />
      <circle cx="9" cy="26" r="2" />
      <circle cx="23" cy="26" r="2" />
    </>
  ),
  cart: (
    <>
      <path d="M3 5h4l4 17h15l4-12H9" />
      <circle cx="13" cy="27" r="2" />
      <circle cx="24" cy="27" r="2" />
    </>
  ),
  fuel: (
    <>
      <rect x="5" y="4" width="18" height="25" rx="2" />
      <path d="M9 8h10v7H9zM23 10h3l2 3v9a3 3 0 0 1-5 2" />
    </>
  ),
  food: (
    <>
      <path d="M7 3v10a3 3 0 0 0 6 0V3M10 3v27M23 3v27M23 3c-5 5-5 12 0 14" />
    </>
  ),
  school: (
    <>
      <path d="M3 13 16 4l13 9M6 12v16h20V12M3 28h26" />
      <path d="M13 28v-7h6v7" />
      <circle cx="16" cy="15" r="1" />
    </>
  ),
  road: (
    <>
      <path d="M7 29 12 3m13 26L19 3M16 6v4m0 5v4m0 5v3" />
    </>
  ),
  pipeline: (
    <>
      <path d="M3 11h26M3 17h26M7 11v6m18-6v6M10 17v11h4V17m4 0v11h4V17" />
      <path d="m5 6 2 5m20-5-2 5" />
    </>
  ),
};

export default function Location() {
  return (
    <section className="palm-loc" id="advantage">
      {/* ---------- Heading ---------- */}
      <div className="palm-loc__head">
        <p className="palm-loc__eyebrow" data-reveal="left">
          LOCATION
        </p>
        <h2
          className="palm-loc__heading"
          data-reveal="left"
          data-reveal-delay="1"
        >
          LOCATION ADVANTAGES
        </h2>
        <span
          className="palm-loc__divider"
          data-reveal="zoom"
          data-reveal-delay="2"
        />
      </div>

      {/* ---------- Body ---------- */}
      <div className="palm-loc__body">
        {/* LEFT: Grid of locations — bottom se up */}
        <div className="palm-loc__left" data-reveal="up" data-reveal-delay="3">
          <div className="palm-loc__grid">
            {LOCATIONS.map((item, index) => (
              <div className="palm-loc__item" key={index}>
                <span className="palm-loc__icon">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[item.icon]}
                  </svg>
                </span>

                <span className="palm-loc__text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Map — right se */}
        <div className="palm-loc__right" data-reveal="right" data-reveal-delay="3">
          <div className="palm-loc__map-wrap">
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="palm-loc__map-link"
              aria-label="Open Palm Galaxy location in Google Maps"
            >
              <img
                src={locationImg}
                alt="Palm Galaxy location map"
                loading="lazy"
              />
            </a>

            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="palm-loc__map-cta"
            >
              View in Map ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}