import { useState } from "react";
import { X, Star, Send, CheckCircle } from "lucide-react";
import "./DropReviewButton.css";

const API_URL = "https://thakarshilifespaces.com";

export default function DropReviewButton({ onReviewSubmitted }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const [form, setForm] = useState({
    name: "",
    project: "",
    quote: "",
    rating: 0, // ✅ Default 0 kar diya taaki shuru mein khali dikhe
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRating = (value) => {
    setForm((prev) => ({ ...prev, rating: value }));
  };

  const resetForm = () => {
    setForm({ name: "", project: "", quote: "", rating: 0 });
    setErrors([]);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSubmitted(false);
      resetForm();
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    // Client-side validation
    const errs = [];
    if (form.name.trim().length < 2) errs.push("Please enter your name");
    if (form.project.trim().length < 2) errs.push("Please enter project name");
    if (form.quote.trim().length < 10) errs.push("Review must be at least 10 characters");

    if (errs.length > 0) {
      setErrors(errs);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        resetForm();
        onReviewSubmitted?.();
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
        }, 2500);
      } else {
        setErrors(result.errors || [result.message || "Something went wrong"]);
      }
    } catch (err) {
      console.error("Review submit error:", err);
      setErrors(["Network error. Please try again."]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* ---------- Trigger Button ---------- */}
      <button
        type="button"
        className="drop-review-btn"
        onClick={() => setIsOpen(true)}
      >
        <Star size={18} />
        Drop Your Review
      </button>

      {/* ---------- Modal ---------- */}
      {isOpen && (
        <div className="review-modal" onClick={handleClose}>
          <div
            className="review-modal__box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="review-modal__header">
              <h3 className="review-modal__title">
                {isSubmitted ? "Thank You!" : "Share Your Experience"}
              </h3>
              <button
                className="review-modal__close"
                onClick={handleClose}
                aria-label="Close"
                type="button"
              >
                <X size={18} />
              </button>
            </div>

            {/* Success State */}
            {isSubmitted ? (
              <div className="review-modal__success">
                <CheckCircle size={48} className="review-modal__success-icon" />
                <p className="review-modal__success-text">
                  Your review has been submitted successfully.
                </p>
              </div>
            ) : (
              <form className="review-modal__body" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="review-modal__field">
                  <label className="review-modal__label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="review-modal__input"
                    placeholder="e.g. Ankita Sharma"
                    required
                  />
                </div>

                {/* Project */}
                <div className="review-modal__field">
                  <label className="review-modal__label">Project *</label>
                  <input
                    type="text"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className="review-modal__input"
                    placeholder="e.g. Palm Galaxy"
                    required
                  />
                </div>

                {/* Rating */}
                <div className="review-modal__field">
                  <label className="review-modal__label">Rating</label>
                  <div className="review-modal__stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRating(star)}
                        className={`review-modal__star ${star <= form.rating ? "is-active" : ""}`}
                        aria-label={`Rate ${star} star`}
                      >
                        <Star 
                          size={24} 
                          fill={star <= form.rating ? "currentColor" : "none"} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review */}
                <div className="review-modal__field">
                  <label className="review-modal__label">Your Review *</label>
                  <textarea
                    name="quote"
                    value={form.quote}
                    onChange={handleChange}
                    className="review-modal__input review-modal__textarea"
                    placeholder="Share your experience in a few words..."
                    rows="4"
                    required
                  />
                  <small className="review-modal__hint">
                    Minimum 10 characters
                  </small>
                </div>

                {/* Errors */}
                {errors.length > 0 && (
                  <div className="review-modal__errors">
                    {errors.map((err, i) => (
                      <p key={i} className="review-modal__error">
                        • {err}
                      </p>
                    ))}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="review-modal__submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Review
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}