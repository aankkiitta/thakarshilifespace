import './Location.css';
import locationImg from './img/location.png';

const MAP_URL = 'https://www.google.com/maps?vet=10CAAQoqAOahcKEwiQs7KH76SXAxUAAAAAHQAAAAAQBg..i&udm&fvr=1&pvq=Cg0vZy8xMXZ3emIzZHl3IhcKEWphaSBtYXJpIGJ1aWxkaW5nEAIYAw&lqi=ChtqYWkgbWFyaSBidWlsZGluZyBpbiBrYWx5YW5Iu-eG5e-6gIAIWikQABABEAIYABgBGAQiG2phaSBtYXJpIGJ1aWxkaW5nIGluIGthbHlhbpIBEmFwYXJ0bWVudF9idWlsZGluZw&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x3be795001dca78e9:0x44d3e85244a72e3a';

const ITEMS = [
  {
    label: 'Jari Mari Hospital',
    time: 'Approx. 2 mins',
    icon: (
      <>
        <path d="M13 4h6v5h5v6h-5v5h-6v-5H8V9h5z"/>
        <path d="M4 20h24v8H4z"/>
      </>
    ),
  },
  {
    label: 'Shree Patil Hospital',
    time: 'Approx. 4 mins',
    icon: (
      <>
        <path d="M12 3v5H8v4h4v5h4v-5h4V8h-4V3z"/>
        <path d="M6 17h20v12H6z"/>
      </>
    ),
  },
  {
    label: 'Axis Bank ATM',
    time: 'Approx. 4 mins',
    icon: (
      <>
        <path d="M4 12 L16 6 L28 12"/>
        <path d="M6 12 L6 24 M12 12 L12 24 M20 12 L20 24 M26 12 L26 24"/>
        <path d="M4 26 L28 26"/>
      </>
    ),
  },
  {
    label: 'IndianOil Petrol Pump, Nandivali Gaon',
    time: 'Approx. 5 mins',
    icon: (
      <>
        <rect x="6" y="6" width="13" height="22" rx="2"/>
        <path d="M6 15h13"/>
        <path d="M19 10l5 3v10a3 3 0 0 1-3 3"/>
      </>
    ),
  },
  {
    label: 'Aarya Gurukul',
    time: 'Approx. 5 mins',
    icon: (
      <>
        <path d="M6 26V14l10-8 10 8v12"/>
        <path d="M16 6V3"/>
        <path d="M4 26h24"/>
        <path d="M13 20h6v6h-6z"/>
      </>
    ),
  },
  {
    label: "St. Mary's High School",
    time: 'Approx. 5 mins',
    icon: (
      <>
        <path d="M6 26V14l10-8 10 8v12"/>
        <path d="M4 26h24"/>
        <path d="M13 20h6v6h-6z"/>
        <path d="M11 14h2M19 14h2"/>
      </>
    ),
  },
  {
    label: 'Angel English School',
    time: 'Approx. 5 mins',
    icon: (
      <>
        <path d="M6 26V14l10-8 10 8v12"/>
        <path d="M4 26h24"/>
        <path d="M13 20h6v6h-6z"/>
        <path d="M9 16h2M21 16h2"/>
      </>
    ),
  },
  {
    label: 'Jay Bhavani Hotel & Restaurant',
    time: 'Approx. 5 mins',
    icon: (
      <>
        <path d="M10 4v10a3 3 0 0 0 6 0V4"/>
        <path d="M13 4v24"/>
        <path d="M22 4c-2 0-3 2-3 4s1 4 3 4v16"/>
      </>
    ),
  },
  {
    label: 'SBI Bank, Badlapur West (Nandivali Branch)',
    time: 'Approx. 6 mins',
    icon: (
      <>
        <path d="M4 12 L16 6 L28 12"/>
        <path d="M6 12 L6 24 M12 12 L12 24 M20 12 L20 24 M26 12 L26 24"/>
        <path d="M4 26 L28 26"/>
      </>
    ),
  },
  {
    label: 'Central Bank of India ATM',
    time: 'Approx. 6 mins',
    icon: (
      <>
        <path d="M4 12 L16 6 L28 12"/>
        <path d="M6 12 L6 24 M12 12 L12 24 M20 12 L20 24 M26 12 L26 24"/>
        <path d="M4 26 L28 26"/>
      </>
    ),
  },
  {
    label: 'Gaondevi Mandir, Nandivali',
    time: 'Approx. 4 mins',
    icon: (
      <>
        <path d="M16 3 L4 13 L28 13 Z"/>
        <path d="M8 13 L8 27 L24 27 L24 13"/>
        <path d="M14 27 L14 19 L18 19 L18 27"/>
        <path d="M16 3 L16 6"/>
      </>
    ),
  },
  {
    label: 'Vitthalwadi Railway Station',
    time: 'Approx. 10 mins',
    icon: (
      <>
        <rect x="7" y="4" width="18" height="18" rx="2"/>
        <path d="M7 14h18"/>
        <path d="M11 4v10M21 4v10"/>
        <circle cx="11" cy="25" r="1.5"/>
        <circle cx="21" cy="25" r="1.5"/>
        <path d="M7 22l-3 4M25 22l3 4"/>
      </>
    ),
  },
];

export default function Location() {
  return (
    <section className="jmh-loc" id="location">
      <div className="jmh-loc__inner">
        <div className="jmh-loc__head">
          <p className="jmh-loc__eyebrow">LOCATION</p>
          <h2 className="jmh-loc__title">LOCATION ADVANTAGES</h2>
          <span className="jmh-loc__divider"></span>
        </div>

        <div className="jmh-loc__body">
          <div className="jmh-loc__content">
            <ul className="jmh-loc__grid">
              {ITEMS.map((item, i) => (
                <li key={i} className="jmh-loc__item">
                  <span className="jmh-loc__icon">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                  </span>
                  <span className="jmh-loc__text">
                    <strong>{item.label}</strong>
                    <span className="jmh-loc__time">{item.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="jmh-loc__media">
            <div className="jmh-loc__map-wrap">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="jmh-loc__map-link"
                aria-label="View on Google Maps"
              >
                <img src={locationImg} alt="Location Map" loading="lazy" />
              </a>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="jmh-loc__map-cta"
              >
                VIEW IN MAP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}