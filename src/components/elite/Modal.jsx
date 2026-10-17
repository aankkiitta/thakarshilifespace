import { useState } from 'react';
import './Modal.css';

const API_URL = "";   // Vite proxy handles it

const INVENTORY = [
  { value: '', label: 'Select Inventory' },
  { value: '1bhk', label: '1 BHK' },
  { value: '2bhk', label: '2 BHK' },
  { value: '3.5bhk', label: '3.5 BHK' },
  { value: 'jodi', label: 'Jodi' },
];

export default function Modal({ isOpen, onClose, source = "elite-galaxy" }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', inventory: '',
  });
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (!form.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!/^[0-9]{10}$/.test(form.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    if (!form.inventory) {
      setError('Please select an inventory.');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          mobile: form.phone.trim(),
          email: form.email.trim().toLowerCase(),
          config: form.inventory,
          message: null,
          source: source,                 // ✅ Dynamic source from prop
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', inventory: '' });

        setTimeout(() => {
          onClose();
          setTimeout(() => setSuccess(false), 400);
        }, 2500);
      } else {
        setError(result.message || result.errors?.join(", ") || "Something went wrong");
      }
    } catch (err) {
      console.error("Modal submit error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="eq-modal open">
      <div className="eq-overlay" onClick={onClose}></div>

      <div className="eq-box" role="dialog" aria-modal="true">
        <div className="eq-header">
          <h3 className="eq-title">Enquire Now</h3>
          <button
            className="eq-close"
            onClick={onClose}
            aria-label="Close"
            type="button"
          >
            ✕
          </button>
        </div>

        <form className="eq-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="eq-input"
            placeholder="Name*"
            value={form.name}
            onChange={update('name')}
            disabled={isLoading}
            required
          />

          <input
            type="email"
            className="eq-input"
            placeholder="Email*"
            value={form.email}
            onChange={update('email')}
            disabled={isLoading}
            required
          />

          <input
            type="tel"
            className="eq-input"
            placeholder="Mobile*"
            value={form.phone}
            onChange={update('phone')}
            maxLength="10"
            disabled={isLoading}
            required
          />

          <select
            className="eq-input eq-select"
            value={form.inventory}
            onChange={update('inventory')}
            disabled={isLoading}
            required
          >
            {INVENTORY.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                disabled={opt.value === ''}
              >
                {opt.label}
              </option>
            ))}
          </select>

          {/* Error */}
          {error && (
            <p className="eq-error" style={{ color: "#dc2626", fontSize: "0.85rem", margin: "8px 0" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            className="eq-submit"
            disabled={isLoading}
          >
            {isLoading ? "SUBMITTING..." : "SUBMIT"}
          </button>

          <p className="eq-dnc">
           By submitting my details, I agree to be contacted by the sales team regarding project information, offers, and updates.
          </p>

          {success && (
            <p className="eq-success show">
              ✅ Thank you! We'll get in touch shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}