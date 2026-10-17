
import './Developer.css';
import logoImg from './img/logo.png';

export default function Developer() {
  return (
    <section className="palm-developer" id="developer">
      <div className="palm-developer__inner">

        {/* Developer Logo */}
        <div
          className="palm-developer__logo"
          data-reveal="zoom"
        >
          <img
            src={logoImg}
            alt="Thakarshi Lifespaces Private Limited"
            loading="lazy"
          />
        </div>

        {/* Eyebrow */}
        <p
          className="palm-developer__eyebrow"
          data-reveal="up"
          data-reveal-delay="1"
        >
          ABOUT THAKARSHI LIFESPACES
        </p>

        {/* Title */}
        <h2
          className="palm-developer__title"
          data-reveal="up"
          data-reveal-delay="2"
        >
          CREATING SPACES. BUILDING FUTURES.
        </h2>

        {/* Divider */}
        <span
          className="palm-developer__divider"
          data-reveal="zoom"
          data-reveal-delay="3"
        />

        {/* Developer Description */}
        <p
          className="palm-developer__desc"
          data-reveal="up"
          data-reveal-delay="4"
        >
          Thakarshi Lifespaces Private Limited is a growing
          real estate development company shaping the
          residential and plotting landscape across Kalyan,
          Dombivli, Badlapur and Shahapur. With business
          experience dating back to 2012 and focused real
          estate operations since 2020, the company is
          committed to creating value-driven developments
          for modern homebuyers and investors.

          <br />
          <br />

          With 13 successfully delivered projects, 8 ongoing
          developments and over 700 happy families, Thakarshi
          Lifespaces continues to build its reputation through
          transparency, strategic location selection and a
          customer-first approach. Its portfolio includes
          residential apartments, bungalow projects, open
          plotting developments and investment-focused land
          opportunities.

          <br />
          <br />

          Strategically located across emerging growth
          corridors, the company's developments focus on
          lifestyle, connectivity and long-term value.
          At Thakarshi Lifespaces, the vision goes beyond
          building properties — it is about creating
          future-ready communities and lasting relationships.
        </p>

        {/* Website Link */}
        <a
          href="https://www.thakarshilifespaces.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="palm-developer__website"
          data-reveal="up"
          data-reveal-delay="5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>

          <span>www.thakarshilifespaces.com</span>
        </a>

      </div>
    </section>
  );
}
