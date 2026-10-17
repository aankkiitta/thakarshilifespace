import React, { useState } from 'react';
import './EnquiryModal.css';

const API_URL = "";

const CONFIGS = [
  { value: '', label: 'Select Configuration' },
  { value: '2 BHK', label: '2 BHK' },
  { value: '3 BHK', label: '3 BHK' },
  { value: 'Penthouse', label: 'Penthouse' },
  { value: 'Villa', label: 'Villa' },
];

export default function EnquiryModal({ isOpen, closeModal, source = "paradise-valley" }) {
  const [form, setForm] = useState({
    name: '', mobile: '', email: '', config: '',
  });
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (error) setError('');
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || form.name.trim().length < 2)
      return setError('Please enter your full name.');
    if (!/^[0-9+\s-]{7,15}$/.test(form.mobile))
      return setError('Please enter a valid mobile number.');
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return setError('Please enter a valid email address.');

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          mobile: form.mobile.trim(),
          email: form.email.trim().toLowerCase() || null,
          config: form.config.trim() || null,
          message: null,
          source: source,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setForm({ name: '', mobile: '', email: '', config: '' });
        setTimeout(() => {
          closeModal();
          setTimeout(() => setSuccess(false), 400);
        }, 3000);
      } else {
        setError(result.message || result.errors?.join(", ") || "Something went wrong");
      }
    } catch (err) {
      console.error("Enquiry modal error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`prd-modal ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="prd-modal__overlay" onClick={closeModal}></div>

      <div className="prd-modal__box" role="dialog" aria-modal="true">
        {/* Header */}
        <div className="prd-modal__header">
          <h3 className="prd-modal__title">Enquire Now</h3>
          <button
            className="prd-modal__close"
            onClick={closeModal}
            aria-label="Close"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="prd-modal__body" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            className="prd-modal__input"
            placeholder="Name*"
            value={form.name}
            onChange={update("name")}
            disabled={isLoading}
            required
          />

          <input
            type="email"
            className="prd-modal__input"
            placeholder="Email"
            value={form.email}
            onChange={update("email")}
            disabled={isLoading}
          />

          <input
            type="tel"
            className="prd-modal__input"
            placeholder="Mobile*"
            value={form.mobile}
            onChange={update("mobile")}
            disabled={isLoading}
            required
          />

          <select
            className="prd-modal__input prd-modal__select"
            value={form.config}
            onChange={update("config")}
            disabled={isLoading}
          >
            {CONFIGS.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                disabled={opt.value === ''}
              >
                {opt.label}
              </option>
            ))}
          </select>

          {error && <p className="prd-modal__error">{error}</p>}

          <button
            type="submit"
            className="prd-modal__submit"
            disabled={isLoading}
          >
            {isLoading ? "SUBMITTING..." : "SUBMIT"}
          </button>

          <p className="prd-modal__note">
           By submitting my details, I agree to be contacted by the sales team regarding project information, offers, and updates.
          </p>

          {success && (
            <div className="prd-modal__success-inline">
              <span className="prd-modal__success-check">✅</span>
              Thank you! We'll get in touch shortly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}