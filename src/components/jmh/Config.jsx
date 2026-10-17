import './Config.css';

const CONFIGS = [
  { title: '1 BHK', area: '420 – 446 Sq. Ft.', featured: false },
  { title: '2 BHK', area: '580 – 623 Sq. Ft.', featured: true },
  { title: 'JODI FLATS', area: '850 Sq. Ft.', featured: false },
];

const ICON = (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 4 L26 14 L36 14 L28 22 L32 32 L20 26 L8 32 L12 22 L4 14 L14 14 Z"/>
    <path d="M20 10 L23 16 L30 16 L25 21 L27 28 L20 24 L13 28 L15 21 L10 16 L17 16 Z"/>
  </svg>
);

export default function Config({ onEnquire }) {
  return (
    <section className="jmh-config" id="config">
      <div className="jmh-config__inner">
        <div className="jmh-config__head">
          <p className="jmh-config__eyebrow">CONFIGURATION</p>
          <h2 className="jmh-config__title">CHOOSE YOUR RESIDENCE</h2>
          <span className="jmh-config__divider"></span>
        </div>

        <div className="jmh-config__grid">
          {CONFIGS.map((c) => (
            <div
              key={c.title}
              className={`jmh-config__card ${c.featured ? 'jmh-config__card--featured' : ''}`}
            >
              <div className="jmh-config__content">
                <h3 className="jmh-config__card-title">{c.title}</h3>
                <p className="jmh-config__card-area">{c.area}<sup>*</sup></p>
              </div>

              <div className="jmh-config__footer">
                <span className="jmh-config__icon">{ICON}</span>
                <button className="jmh-config__link" onClick={onEnquire} type="button">
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}