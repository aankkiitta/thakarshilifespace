import { useState } from 'react';
import './Plans.css';
import groundfloor from './img/groundfloor.webp';
import firstfloor from './img/firstfloor.webp';
import secondfloor from './img/secondfloor.webp';
import third from './img/third.webp';
import sevenTwelve from './img/seven-twelve.webp';
import fourteen from './img/fourteen.webp';

const PLANS = [
  { img: groundfloor, label: 'Ground Floor' },
  { img: firstfloor,  label: 'First Floor' },
  { img: secondfloor, label: 'Second Floor' },
  { img: third,       label: '3rd to 6th, 8th to 11th & 13th floors' },
  { img: sevenTwelve, label: '7th to 12th Floor' },
  { img: fourteen,    label: '14th Floor' },
];

export default function Plans() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="elite-plans" id="plans">
      <div className="elite-plans-inner">
        <div className="elite-plans-header">
          <h2 className="elite-plans-title" data-reveal="up">Floor Plans</h2>
          <p className="elite-plans-subtitle" data-reveal="up">
            Thoughtfully designed layouts for modern living
          </p>
        </div>

        <div className="elite-plans-grid">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className="elite-plan-card"
              data-reveal="up"
              onClick={() => setLightbox(plan.img)}
            >
              <div className="elite-plan-image">
                <img src={plan.img} alt={plan.label} />
              </div>
              <p className="elite-plan-label">{plan.label}</p>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="elite-plan-modal open"
          onClick={(e) => e.target === e.currentTarget && setLightbox(null)}
        >
          <button
            className="elite-plan-modal-close"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <div className="elite-plan-modal-content">
            <img src={lightbox} alt="Floor Plan" />
          </div>
        </div>
      )}
    </section>
  );
}