import React, { useState, useEffect, useCallback, useRef } from 'react';
import './Gallery.css';
import frontvillaImg from './img/frontvilla.jpeg';
import frontvilla2Img from './img/frontvilla2.jpeg';
import frontvilla3Img from './img/frontvilla3.jpeg';
import sidevillaImg from './img/sidevilla.jpeg';
import middlevillaImg from './img/middlevilla.jpeg';
import uppervillaImg from './img/uppervilla.jpeg';

// ⏱️ Auto-slide interval (milliseconds)
const AUTO_SLIDE_DELAY = 3500;   // 3.5 seconds per slide

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ cardWidth: 480, gap: 32 });
  const [isPaused, setIsPaused] = useState(false);
  const autoTimerRef = useRef(null);

  const cards = [
    { img: frontvillaImg,   title: "Villa 1" },
    { img: frontvilla2Img,  title: "Villa 2" },
    { img: frontvilla3Img,  title: "Villa 3" },
    { img: sidevillaImg,    title: "Side View" },
    { img: middlevillaImg,  title: "Middle View" },
    { img: uppervillaImg,   title: "Upper View" }
  ];

  // ── Calculate dimensions based on viewport ──────────────
  const calculateDimensions = useCallback(() => {
    if (typeof window === 'undefined') return;
    const w = window.innerWidth;
    if (w <= 400) setDimensions({ cardWidth: 250, gap: 16 });
    else if (w <= 640) setDimensions({ cardWidth: 300, gap: 20 });
    else if (w <= 1024) setDimensions({ cardWidth: 380, gap: 26 });
    else setDimensions({ cardWidth: 480, gap: 32 });
  }, []);

  // ── Recalculate on mount + resize ───────────────────────
  useEffect(() => {
    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    return () => window.removeEventListener('resize', calculateDimensions);
  }, [calculateDimensions]);

  // ── Auto-slide effect ───────────────────────────────────
  useEffect(() => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    if (isPaused) return;

    autoTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, AUTO_SLIDE_DELAY);

    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, [isPaused, cards.length]);

  // ── Cleanup on unmount ──────────────────────────────────
  useEffect(() => {
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, []);

  // ── Manual navigation (dot click) ───────────────────────
  const goTo = (index) => setCurrentIndex(index);

  // ── Calculate translate offset ──────────────────────────
  const offset = (dimensions.cardWidth + dimensions.gap) * currentIndex;

  return (
    <section className="prd-gallery" id="gallery">
      <div className="prd-gallery__panel">

        {/* ── Heading ───────────────────────────────────── */}
        <div className="prd-gallery__head">
          <h2 className="prd-gallery__title">Our Gallery</h2>
          <p className="prd-gallery__subtitle">
            Explore our completed and ongoing projects
          </p>
        </div>

        {/* ── Slider Viewport ───────────────────────────── */}
        <div
          className="prd-gallery__viewport"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="prd-gallery__track"
            id="prdGalleryTrack"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {cards.map((card, index) => (
              <article
                className={`prd-project-card ${index === currentIndex ? 'is-active' : ''}`}
                key={index}
                onClick={() => goTo(index)}
              >
                <div className="prd-project-card__image-wrap">
                  <img
                    className="prd-project-card__image"
                    src={card.img}
                    alt={card.title}
                    loading="lazy"
                  />
                </div>
                <span className="prd-project-card__star" aria-hidden="true">
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 4 L26 14 L36 14 L28 22 L32 32 L20 26 L8 32 L12 22 L4 14 L14 14 Z" />
                  </svg>
                </span>
                <h3 className="prd-project-card__title">{card.title}</h3>
              </article>
            ))}
          </div>
        </div>

        {/* ── Dots ──────────────────────────────────────── */}
        <div className="prd-gallery__dots" id="prdGalleryDots">
          {cards.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`prd-gallery__dot ${currentIndex === index ? 'is-active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}