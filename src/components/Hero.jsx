import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

// Import your local images
import frontvilla from "../components/main-pages-images/frontvilla.jpeg";
import frontvilla2 from "../components/main-pages-images/frontvilla2.jpeg";
import frontvilla3 from "../components/main-pages-images/frontvilla3.jpeg";
import sidevilla from "../components/main-pages-images/sidevilla.jpeg";

const SLIDES = [
  sidevilla,      
  frontvilla,
  frontvilla2,
  frontvilla3,        
];

const SLIDE_DURATION = 6000;

export default function Hero1({ onEnquire }) {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  // Preload images
  useEffect(() => {
    SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-slide timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timerRef.current);
  }, []);

  // Trigger load animation
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    resetTimer();
  };

  const goNext = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % SLIDES.length);
    resetTimer();
  };

  const handleEnquire = (e) => {
    e.stopPropagation();
    if (onEnquire) onEnquire();
  };

  // ✅ Spelling Fix: paradaise -> paradise
  const handleHeroClick = () => {
    navigate("/paradise-valley"); 
  };

  return (
    <section
      className="hero1"
      onClick={handleHeroClick}
      style={{ cursor: "pointer" }}
    >
      {/* Background Slider */}
      <div className="hero1__slider">
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className={`hero1__slide ${i === current ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero1__overlay" />
      </div>

      {/* Left Arrow */}
      <button
        type="button"
        className="hero1__arrow hero1__arrow--prev"
        onClick={goPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        type="button"
        className="hero1__arrow hero1__arrow--next"
        onClick={goNext}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className={`hero1__content ${loaded ? "is-loaded" : ""}`}>
        <p className="hero1__eyebrow">Building A Better Tomorrow</p>

        <h1 className="hero1__title">
          Creating Spaces
          <br />
          That Inspire Life
        </h1>

        <p className="hero1__desc">
          Discover thoughtfully designed residences crafted around quality,
          comfort and exceptional living.
        </p>

        <div className="hero1__actions">
          <button
            type="button"
            className="hero1__btn hero1__btn--primary"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/paradise-valley"); // ✅ Spelling Fix
            }}
          >
            Explore Projects
          </button>
          <button
            type="button"
            onClick={handleEnquire}
            className="hero1__btn hero1__btn--ghost"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}