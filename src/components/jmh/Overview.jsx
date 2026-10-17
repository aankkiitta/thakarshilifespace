import './Overview.css';
import heroImg from './img/hero.webp';
import thirdImg from './img/third.webp';

export default function Overview({ onEnquire }) {
  return (
    <section className="jmh-overview" id="overview">
      <div className="jmh-overview__inner">
        <div className="jmh-overview__left">
          <h2 className="jmh-overview__title">ABOUT</h2>
          <p className="jmh-overview__desc">
            Welcome to Jari Mari Homes, a thoughtfully designed residential
            destination in Kalyan East. Located near Arya Gurukul School on
            Nandivali Gaon Road, the project brings together modern homes,
            everyday conveniences, green open spaces and excellent connectivity.
          </p>

          <ul className="jmh-overview__features">
            <li className="jmh-overview__feature">
              <span className="jmh-overview__feature-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 4 L6 20 L42 20 Z"/>
                  <path d="M10 20 L10 40 L38 40 L38 20"/>
                  <path d="M14 40 L14 22 L34 22 L34 40"/>
                  <circle cx="24" cy="14" r="3"/>
                </svg>
              </span>
              <span className="jmh-overview__feature-text">
                <strong>1 &amp; 2 BHK</strong> Thoughtfully planned residences
              </span>
            </li>

            <li className="jmh-overview__feature">
              <span className="jmh-overview__feature-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="16" height="18" rx="1"/>
                  <rect x="26" y="4" width="16" height="26" rx="1"/>
                  <rect x="6" y="26" width="16" height="18" rx="1"/>
                  <rect x="26" y="34" width="16" height="10" rx="1"/>
                </svg>
              </span>
              <span className="jmh-overview__feature-text">
                <strong>6+ Lifestyle</strong> Amenities &amp; conveniences
              </span>
            </li>

            <li className="jmh-overview__feature">
              <span className="jmh-overview__feature-icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="12" width="12" height="28"/>
                  <rect x="18" y="6" width="12" height="34"/>
                  <rect x="32" y="16" width="12" height="24"/>
                </svg>
              </span>
              <span className="jmh-overview__feature-text">
                <strong>Green Spaces</strong> Designed for relaxed living
              </span>
            </li>
          </ul>
        </div>

        <div className="jmh-overview__right">
          <div className="jmh-overview__img jmh-overview__img--balcony">
            <img src={heroImg} alt="Jari Mari Homes Balcony" loading="lazy" />
          </div>
          <div className="jmh-overview__img jmh-overview__img--towers">
            <img src={thirdImg} alt="Jari Mari Homes Towers" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="jmh-overview__cta-wrap">
        <button className="jmh-overview__cta" onClick={onEnquire} type="button">
          <span>1 &amp; 2 BHK RESIDENCES</span>
          <span className="jmh-overview__cta-dot">•</span>
          <span>ENQUIRE NOW</span>
        </button>
      </div>
    </section>
  );
}