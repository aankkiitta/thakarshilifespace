import { useState } from "react";
import { Check } from "lucide-react";
import "./ContactForm.css";

const API_URL = import.meta.env.VITE_API_URL || "https://www.thakarshilifespaces.com";

const TYPES = ["Residential", "Commercial", "Luxury"];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  type: "",
  message: "",
  agree: false,
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address.";
  if (!/^[0-9+\s-]{7,15}$/.test(form.phone))
    errors.phone = "Enter a valid mobile number.";
  if (!form.agree) errors.agree = "Please accept the privacy policy to continue.";
  return errors;
}

export default function ContactForm({ dark = true }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const update = (field) => (e) => {
    const value = field === "agree" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsLoading(true);

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        subject: form.type || "General Enquiry",
        message: form.message.trim() || "No message provided",
      };

      const response = await fetch(`${API_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm(initialForm);
      } else {
        setServerError(result.message || result.errors?.join(", ") || "Something went wrong");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setServerError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ---------- Success State ----------
  if (submitted) {
    return (
      <div className={`contact-form__success ${dark ? "is-dark" : "is-light"}`}>
        <span className="contact-form__success-icon">
          <Check size={26} />
        </span>
        <h3 className="contact-form__success-title">Thank You</h3>
        <p className="contact-form__success-desc">
          Your enquiry has been received. A member of the Thakarshi team will call
          you back within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="contact-form__success-reset"
          type="button"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  // ---------- Form ----------
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`contact-form ${dark ? "is-dark" : "is-light"}`}
    >
      {/* Name */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={update("name")}
          className="contact-form__input"
          placeholder="Your name"
          disabled={isLoading}
        />
        {errors.name && <p className="contact-form__error">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={update("email")}
          className="contact-form__input"
          placeholder="you@example.com"
          disabled={isLoading}
        />
        {errors.email && <p className="contact-form__error">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="phone">Mobile Number</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={update("phone")}
          className="contact-form__input"
          placeholder="+91 98765 43210"
          disabled={isLoading}
        />
        {errors.phone && <p className="contact-form__error">{errors.phone}</p>}
      </div>

      {/* Type */}
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="type">Property Type</label>
        <select
          id="type"
          value={form.type}
          onChange={update("type")}
          className="contact-form__input"
          disabled={isLoading}
        >
          <option value="">Select type</option>
          {TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="contact-form__field contact-form__field--full">
        <label className="contact-form__label" htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={3}
          value={form.message}
          onChange={update("message")}
          className="contact-form__input"
          placeholder="Tell us a little about what you're looking for"
          disabled={isLoading}
        />
      </div>

      {/* Consent */}
      <div className="contact-form__consent contact-form__field--full">
        <input
          id="agree"
          type="checkbox"
          checked={form.agree}
          onChange={update("agree")}
          className="contact-form__checkbox"
          disabled={isLoading}
        />
        <label htmlFor="agree" className="contact-form__consent-text">
          I agree to Thakarshi&rsquo;s Privacy Policy and Terms &amp; Conditions, and
          consent to being contacted about this enquiry.
        </label>
      </div>
      {errors.agree && (
        <p className="contact-form__error contact-form__field--full">{errors.agree}</p>
      )}

      {/* Server Error */}
      {serverError && (
        <p
          className="contact-form__error contact-form__field--full"
          style={{ color: "#dc2626" }}
        >
          {serverError}
        </p>
      )}

      {/* Submit */}
      <div className="contact-form__submit-wrap contact-form__field--full">
        <button
          type="submit"
          className="contact-form__submit"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Request A Callback"}
        </button>
      </div>
    </form>
  );
}