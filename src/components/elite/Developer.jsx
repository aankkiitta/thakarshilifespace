
import './Developer.css';
import logoImg from './img/logo.png';

export default function Developer() {
  return (
    <section className="elite-dev" id="developer">
      <div className="elite-dev-inner">

        {/* Developer Logo */}
        <div className="elite-dev-logo">
          <img
            src={logoImg}
            alt="Thakarshi Lifespaces Private Limited"
            loading="lazy"
          />
        </div>

        {/* Eyebrow */}
        <p className="elite-dev-eyebrow">
          About Thakarshi Lifespaces
        </p>

        {/* Heading */}
        <h2 className="elite-dev-title">
          Creating Spaces. Building Futures.
        </h2>

        {/* Developer Description */}
        <p className="elite-dev-desc">
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
          location selection and customer-centric development.
          Its portfolio includes residential apartments,
          bungalow projects, open plotting developments and
          investment-focused land opportunities.

          <br />
          <br />

          At Thakarshi Lifespaces, the vision goes beyond
          building properties — it is about creating
          future-ready communities and lasting relationships
          with customers.
        </p>

        {/* Official Website */}
        <a
          href="https://www.thakarshilifespaces.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="elite-dev-website"
          aria-label="Visit Thakarshi Lifespaces official website"
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
