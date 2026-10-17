import { useState } from 'react';
import './WhyBuy.css';

const ITEMS = [
  { text: 'Proposed Metro Station', icon: (
    <svg viewBox="0 0 64 64">
      <rect x="14" y="10" width="36" height="40" rx="6"/>
      <path d="M14 30h36"/>
      <circle cx="24" cy="42" r="3"/>
      <circle cx="40" cy="42" r="3"/>
      <path d="M22 18h6v6h-6zM36 18h6v6h-6z"/>
      <path d="M22 54l-4 6M42 54l4 6"/>
      <path d="M28 10V6M36 10V6"/>
    </svg>
  )},
  { text: 'RERA Approved', icon: (
    <svg viewBox="0 0 64 64">
      <circle cx="32" cy="26" r="14"/>
      <path d="M32 18l2.4 4.8 5.3.8-3.8 3.7.9 5.3L32 30l-4.8 2.6.9-5.3-3.8-3.7 5.3-.8L32 18z"/>
      <path d="M22 38l-4 18 14-6 14 6-4-18"/>
    </svg>
  )},
  { text: 'Affordable Price', icon: (
    <svg viewBox="0 0 64 64">
      <path d="M10 30l22-22h18v18l-22 22z"/>
      <circle cx="42" cy="16" r="3"/>
      <path d="M22 40h8M26 36v8"/>
      <path d="M38 42h8"/>
    </svg>
  )},
  { text: 'Excellent rail, road & metro connectivity', icon: (
    <svg viewBox="0 0 64 64">
      <path d="M8 56V24h12l6-8h12l6 8h12v32"/>
      <path d="M8 40h48"/>
      <path d="M26 40v16M38 40v16"/>
      <circle cx="20" cy="32" r="2"/>
      <circle cx="44" cy="32" r="2"/>
    </svg>
  )},
  { text: '99% Loan Available From All Nationalized Banks', icon: (
    <svg viewBox="0 0 64 64">
      <path d="M8 24l24-14 24 14"/>
      <path d="M12 24v24M52 24v24"/>
      <path d="M22 24v24M32 24v24M42 24v24"/>
      <path d="M8 48h48"/>
      <path d="M6 54h52"/>
    </svg>
  )},
  { text: 'World class lifestyle amenities', icon: (
    <svg viewBox="0 0 64 64">
      <path d="M32 8l6 14h14l-11 9 4 15-13-9-13 9 4-15-11-9h14z"/>
      <circle cx="32" cy="32" r="3"/>
    </svg>
  )},
  { text: 'Prime Location', icon: (
    <svg viewBox="0 0 64 64">
      <path d="M32 56s-16-14-16-26a16 16 0 0 1 32 0c0 12-16 26-16 26z"/>
      <circle cx="32" cy="30" r="6"/>
    </svg>
  )},
];

const BATCH_SIZE = 4;

export default function WhyBuy() {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const visibleItems = ITEMS.slice(0, visibleCount);
  const hasMore = visibleCount < ITEMS.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, ITEMS.length));
  };

  return (
    <section className="why-buy" id="advantage">
      <div className="why-buy__inner">
        <h2 className="why-buy__heading">Why Buy at Elite Galaxy Room</h2>
        <p className="why-buy__sub">
          Thoughtful design, prime connectivity, and lifestyle-first living — all in one address.
        </p>

        <div className="why-buy__grid">
          {visibleItems.map((item, i) => (
            <div key={i} className="why-buy__item">
              <div className="why-buy__icon">{item.icon}</div>
              <p className="why-buy__text">{item.text}</p>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="why-buy__more-wrap">
            <button
              type="button"
              className="why-buy__more-btn"
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}