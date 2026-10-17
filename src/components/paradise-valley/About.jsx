import React, { useState } from 'react';
import './About.css';
import heroImg from './img/hero.webp';
import frontvilla2Img from './img/frontvilla2.jpeg';
import frontvilla3Img from './img/frontvilla3.jpeg';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { src: heroImg, alt: 'Paradise architecture' },
    { src: frontvilla2Img, alt: 'Paradise interior' },
    { src: frontvilla3Img, alt: 'Paradise lifestyle' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="prd-about" id="overview">
      <div className="prd-about__inner">
        <div className="prd-about__media">
          <div className="prd-about__layer-text">
            <h3 className="prd-about__layer-title">Welcome to <span>Paradise Valley</span></h3>
            <p className="prd-about__layer-sub">by <strong>Thakarshilifespace</strong></p>
          </div>
          <div className="prd-about__card">
            <div className="prd-about__counter">
              <span className="prd-about__counter-current">{currentSlide + 1}</span>
              <span className="prd-about__counter-sep">/</span>
              <span className="prd-about__counter-total">{slides.length}</span>
            </div>
            <div className="prd-about__slides">
              {slides.map((slide, index) => (
                <div key={index} className={`prd-about__slide ${index === currentSlide ? 'is-active' : ''}`}>
                  <img src={slide.src} alt={slide.alt} loading="lazy" />
                </div>
              ))}
            </div>
            <button className="prd-about__arrow prd-about__arrow--prev" onClick={prevSlide} aria-label="Previous image" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="prd-about__arrow prd-about__arrow--next" onClick={nextSlide} aria-label="Next image" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        <div className="prd-about__content">
          <h2 className="prd-about__title">ABOUT</h2>
          <p className="prd-about__desc">
            At Paradise, you will experience the quality of life with the quality of design. Each apartment is designed with extreme precision to deliver the finest at affordable prices. These aesthetic residences are built with stability to nurture long-term comfort — a mesmerizing green ambience that offers a relaxed atmosphere and a positive environment, with the convenience of everything just around the corner.
          </p>
          <ul className="prd-about__features">
            <li className="prd-about__feature">
              <span className="prd-about__feature-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M32 56 C32 56 14 42 14 26 A18 18 0 0 1 50 26 C50 42 32 56 32 56 Z"/><path d="M18 46 L46 46"/><path d="M20 50 L44 50"/><circle cx="32" cy="26" r="6"/>
                </svg>
              </span>
              <span className="prd-about__feature-text"><strong>168</strong> Luxury Villas</span>
            </li>
            <li className="prd-about__feature">
              <span className="prd-about__feature-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="6" width="22" height="22" rx="1"/><rect x="36" y="6" width="22" height="22" rx="1"/><rect x="6" y="36" width="22" height="22" rx="1"/><rect x="36" y="36" width="22" height="22" rx="1"/>
                </svg>
              </span>
              <span className="prd-about__feature-text"><strong>5.2 Acres</strong> Low-Density Enclave</span>
            </li>
            <li className="prd-about__feature">
              <span className="prd-about__feature-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="10" y="18" width="10" height="40" rx="1"/><rect x="24" y="10" width="12" height="48" rx="1"/><rect x="40" y="22" width="10" height="36" rx="1"/><path d="M24 10 L30 4 L36 10"/><path d="M13 26 L17 26"/><path d="M13 32 L17 32"/><path d="M13 38 L17 38"/><path d="M13 44 L17 44"/><path d="M27 18 L33 18"/><path d="M27 24 L33 24"/><path d="M27 30 L33 30"/><path d="M27 36 L33 36"/><path d="M43 30 L47 30"/><path d="M43 36 L47 36"/><path d="M43 42 L47 42"/>
                </svg>
              </span>
              <span className="prd-about__feature-text"><strong>25+</strong> Resort-Style Amenities</span>
            </li>
            <li className="prd-about__feature">
              <span className="prd-about__feature-icon">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="32" cy="32" r="22"/><path d="M32 18 L32 32 L42 38"/>
                </svg>
              </span>
              <span className="prd-about__feature-text"><strong>12 Mins</strong> Main Road To City Center</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}