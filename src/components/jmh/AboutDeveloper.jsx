
import './AboutDeveloper.css';
import logoImg from './img/logo.png';

export default function AboutDeveloper() {
  return (
    <section className="jmh-about" id="developer">
      <div className="jmh-about__inner">
 {/* DEVELOPER LOGO */}
        <div className="jmh-about__logo">
          <img
            src={logoImg}
            alt="Thakarshi Lifespaces Private Limited"
            loading="lazy"
          />
        </div>

        {/* SECTION HEADING */}
        <div className="jmh-about__head">
          <p className="jmh-about__eyebrow">
            ABOUT DEVELOPER
          </p>

          <h2 className="jmh-about__title">
            CREATING SPACES. BUILDING FUTURES.
          </h2>

          <span className="jmh-about__divider"></span>
        </div>

       
        {/* DEVELOPER DESCRIPTION */}
        <p className="jmh-about__desc">
          Thakarshi Lifespaces Private Limited is a growing
          real estate development company shaping residential
          and plotting opportunities across Kalyan, Dombivli,
          Badlapur and Shahapur. With business experience
          dating back to 2012 and focused real estate
          operations since 2020, the company is committed to
          creating value-driven developments for homebuyers
          and investors.

          <br />
          <br />

          With 13 successfully delivered projects, 8 ongoing
          developments and over 700 happy families, Thakarshi
          Lifespaces focuses on transparency, strategic
          locations and customer-centric development. Its
          portfolio includes residential apartments, bungalow
          projects, open plotting developments and
          investment-focused land opportunities.

          <br />
          <br />

          At Thakarshi Lifespaces, the vision goes beyond
          building properties — it is about creating
          future-ready communities and lasting relationships
          with customers.
        </p>

        {/* DEVELOPER STATISTICS */}
        <div className="jmh-about__stats">
          <div className="jmh-about__stat">
            <p className="jmh-about__stat-value">
              13<span>+</span>
            </p>
            <p className="jmh-about__stat-label">
              Projects Delivered
            </p>
          </div>

          <div className="jmh-about__stat">
            <p className="jmh-about__stat-value">
              8<span>+</span>
            </p>
            <p className="jmh-about__stat-label">
              Ongoing Developments
            </p>
          </div>

          <div className="jmh-about__stat">
            <p className="jmh-about__stat-value">
              700<span>+</span>
            </p>
            <p className="jmh-about__stat-label">
              Happy Families
            </p>
          </div>
        </div>

        {/* DEVELOPER WEBSITE */}
        <a
          href="https://www.thakarshilifespaces.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="jmh-about__link"
          aria-label="Visit Thakarshi Lifespaces official website"
        >
          <span>www.thakarshilifespaces.com</span>
        </a>

      </div>
    </section>
  );
}
