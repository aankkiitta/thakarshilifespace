import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import DropReviewButton from "./DropReviewButton";
import "./Testimonials.css";

const API_URL = "https://www.thakarshilifespaces.com";

const getInitial = (name) => {
  if (!name) return "?";
  return name.trim().charAt(0).toUpperCase();
};

export default function Testimonials() {
  const trackRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTestimonials = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await fetch(`${API_URL}/api/testimonials`);
      const result = await response.json();

      if (result.success) {
        setTestimonials(result.data);
      } else {
        setError(result.message || "Failed to load testimonials");
      }
    } catch (err) {
      console.error("Testimonials fetch error:", err);
      setError("Unable to load testimonials. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({
      left: dir * trackRef.current.clientWidth * 0.9,
      behavior: "smooth",
    });
  };

  return (
    // ✅ id="testimonials" add kiya
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">

        {/* ---------- HEADER (Title only) ---------- */}
        <div className="testimonials__head">
          <Reveal>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="testimonials__title">Words From Our Residents</h2>
          </Reveal>
        </div>

        {/* ---------- ACTIONS (Drop Review + Nav) ---------- */}
        <div className="testimonials__actions">
          <DropReviewButton onReviewSubmitted={fetchTestimonials} />

          <div className="testimonials__nav">
            <button
              aria-label="Previous testimonial"
              onClick={() => scrollBy(-1)}
              className="testimonials__arrow"
              type="button"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => scrollBy(1)}
              className="testimonials__arrow"
              type="button"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ---------- Loading ---------- */}
        {isLoading && (
          <p className="testimonials__status">Loading testimonials...</p>
        )}

        {/* ---------- Error ---------- */}
        {!isLoading && error && (
          <p className="testimonials__status testimonials__status--error">
            {error}
          </p>
        )}

        {/* ---------- Empty ---------- */}
        {!isLoading && !error && testimonials.length === 0 && (
          <p className="testimonials__status">No testimonials yet.</p>
        )}

        {/* ---------- Track ---------- */}
        {!isLoading && !error && testimonials.length > 0 && (
          <div ref={trackRef} className="testimonials__track">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonials__card">
                <Quote
                  className="testimonials__icon"
                  size={30}
                  strokeWidth={1.25}
                />

                <p className="testimonials__quote">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="testimonials__author">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      loading="lazy"
                      className="testimonials__avatar"
                    />
                  ) : (
                    <span
                      className="testimonials__avatar testimonials__avatar--initial"
                      aria-hidden="true"
                    >
                      {getInitial(t.name)}
                    </span>
                  )}

                  <div>
                    <p className="testimonials__name">{t.name}</p>
                    <p className="testimonials__project">{t.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}