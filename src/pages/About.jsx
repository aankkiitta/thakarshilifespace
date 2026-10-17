import React from "react";
import { Globe } from "lucide-react";
import "./About.css";
import logoImg from "../components/main-pages-images/logo.png";

const AboutUs = () => {
  return (
    <section className="about-us-page" id="story">
      <div className="about-us-page__inner">

        {/* ── Logo ───────────────────────────── */}
        <div className="about-us-page__logo-wrap">
          <img
            src={logoImg}
            alt="Thakarshilifespaces Private Limited"
            className="about-us-page__logo"
          />
        </div>

        {/* ── Heading ────────────────────────── */}
        <h1 className="about-us-page__title">
         Building Dreams Since 2016
        </h1>

        {/* ── Paragraph ──────────────────────── */}
        <p className="about-us-page__desc">
         With business experience since 2012 and a focused presence in real estate since 2020, Thakarshi Lifespaces Private Limited is shaping the residential and plotting landscape across Kalyan, Dombivli, Badlapur, and Shahapur. With 13 projects delivered and 8 ongoing developments, we specialize in residential apartments, bungalow projects, open plotting developments, and investment-focused land opportunities. Our commitment to transparency, strategic locations, and customer satisfaction has earned the trust of over 700 happy families. With developments in high-growth corridors near railway connectivity, upcoming metro access, and the proposed Kalyan terminal expansion, we aim to create communities that combine modern living, connectivity, and long-term investment potential.
        </p>

        {/* ── Website Link ───────────────────── */}
        <a
          href="https://www.thakarshilifespaces.com"
          target="_blank"
          rel="noopener noreferrer"
          className="about-us-page__link"
        >
          <Globe
            size={20}
            strokeWidth={1.8}
            className="about-us-page__link-icon"
          />
          <span>www.thakarshilifespaces.com</span>
        </a>

      </div>
    </section>
  );
};

export default AboutUs;