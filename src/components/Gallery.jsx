import React, { useState, useEffect, useCallback } from "react";
import "./Gallery.css";

// ✅ Images imported (Only the ones that actually exist)
import frontvilla from "./main-pages-images/frontvilla.jpeg";
import frontvilla2 from "./main-pages-images/frontvilla2.jpeg";
import sidevilla from "./main-pages-images/sidevilla.jpeg";
import frontvilla3 from "./main-pages-images/frontvilla3.jpeg";

// ❌ REMOVED: middlevilla and uppervilla

const images = [
  {
    src: frontvilla,
    title: "A Place to Unwind",
    description: "Discover beautiful spaces designed for everyday living.",
  },
  {
    src: frontvilla2,
    title: "Moments That Matter",
    description: "Make every moment a memorable experience.",
  },
  {
    src: sidevilla,
    title: "Your Perfect Escape",
    description: "Find your own little corner of happiness.",
  },
  {
    src: frontvilla3, // ✅ Added frontvilla3 here
    title: "Closer to Nature",
    description: "Slow down, breathe, and enjoy the little things.",
  },
];

export default function Gallery1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Keyboard
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextSlide, prevSlide]);

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 40) diff < 0 ? nextSlide() : prevSlide();
    setTouchStart(null);
  };

  const getSlideClass = (index) => {
    if (index === currentIndex) return "is-active";
    if (index === (currentIndex - 1 + images.length) % images.length)
      return "is-prev";
    if (index === (currentIndex + 1) % images.length) return "is-next";
    return "";
  };

  return (
<section className="everyday-gallery" id="everyday-gallery">      <div className="escape-gallery">
        <div className="gallery-heading">
          <span>OUR GALLERY</span>
          <div className="heading-line" />
        </div>

        <div
          className="gallery-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="gallery-track">
            {images.map((image, index) => (
              <figure
                key={index}
                className={`gallery-slide ${getSlideClass(index)}`}
                onClick={() => {
                  if (index !== currentIndex) setCurrentIndex(index);
                }}
              >
                <img src={image.src} alt={image.title} />
                <div className="slide-overlay" />
                <figcaption className="slide-content">
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* ✅ Chevron arrows */}
          <button
            type="button"
            className="gallery-arrow gallery-prev"
            onClick={prevSlide}
            aria-label="Previous image"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            className="gallery-arrow gallery-next"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Footer */}
        <div className="gallery-footer">
          <div className="gallery-counter">
            <span className="current-slide">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>
            <span className="counter-divider" />
            <span>{String(images.length).padStart(2, "0")}</span>
          </div>

          <div className="gallery-dots">
            {images.map((image, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                className={`gallery-dot ${
                  index === currentIndex ? "is-active" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}