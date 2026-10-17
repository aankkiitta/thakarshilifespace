import { useState } from 'react';
import './Modal.css';

const API_URL = "";

export default function Modal({ isOpen, onClose, source = "palm-galaxy" }) {
  const [form, setForm] = useState({
    name: '', mobile: '', email: '',
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
    if (!/^[0-9]{10}$/.test(form.mobile))
      return setError('Please enter a valid 10-digit mobile number.');
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
          config: null,
          message: null,
          source: source,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setForm({ name: '', mobile: '', email: '' });
        setTimeout(() => {
          onClose();
          setTimeout(() => setSuccess(false), 400);
        }, 3000);
      } else {
        setError(result.message || result.errors?.join(", ") || "Something went wrong");
      }
    } catch (err) {
      console.error("Palm modal error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`palm-modal ${isOpen ? 'open' : ''}`}>
      <div className="palm-modal__overlay" onClick={onClose}></div>

      <div className="palm-modal__box" role="dialog" aria-modal="true">
        {/* Header */}
        <div className="palm-modal__header">
          <h3 className="palm-modal__title">Enquire Now</h3>
          <button
            className="palm-modal__close"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form className="palm-modal__body" onSubmit={handleSubmit}>
          <input
            type="text"
            className="palm-modal__input"
            placeholder="Name*"
            value={form.name}
            onChange={update('name')}
            disabled={isLoading}
            required
          />

          <input
            type="email"
            className="palm-modal__input"
            placeholder="Email"
            value={form.email}
            onChange={update('email')}
            disabled={isLoading}
          />

          <input
            type="tel"
            className="palm-modal__input"
            placeholder="Mobile*"
            value={form.mobile}
            onChange={update('mobile')}
            maxLength="10"
            disabled={isLoading}
            required
          />

          {error && <p className="palm-modal__error">{error}</p>}

          <button
            type="submit"
            className="palm-modal__submit"
            disabled={isLoading}
          >
            {isLoading ? "SUBMITTING..." : "SUBMIT"}
          </button>

         

          {success && (
            <div className="palm-modal__success-inline">
              <span className="palm-modal__success-check">✅</span>
              Thank you! We'll get in touch shortly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}