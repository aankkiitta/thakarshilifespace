import { useState, useEffect } from 'react';
import './Hero.css';

const SLIDES = [
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80',
];

const STRIP = [
  '2 & 3 BHK RESIDENCES',
  'HIGHER FLOOR RESIDENCES',
  'WORLD-CLASS LIFESTYLE AMENITIES',
  'EXCELLENT RAIL, ROAD & METRO CONNECTIVITY',
  'ROOFTOP LIFESTYLE AMENITIES',
  'GREEN OPEN SPACES',
  'INDOOR GAMES & YOGA MEDITATION',
  'PROPOSED METRO STATION CONNECTIVITY',
];
export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((i) => (i + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const goNext = () => setCurrent((i) => (i + 1) % SLIDES.length);
  const goPrev = () => setCurrent((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  const stripItems = [...STRIP, ...STRIP];

  return (
    <section className="elite-hero" id="top">
      <div className="elite-hero-slider">
        {SLIDES.map((src, i) => (
          <div key={i} className={`elite-hero-slide ${i === current ? 'active' : ''}`}>
            <img src={src} alt={`Elite Building ${i + 1}`} />
          </div>
        ))}

        <button className="elite-hero-arrow prev" onClick={goPrev} aria-label="Previous">‹</button>
        <button className="elite-hero-arrow next" onClick={goNext} aria-label="Next">›</button>
      </div>

      <div className="elite-hero-strip">
        <div className="elite-hero-strip-track">
          {stripItems.map((text, i) => (
            <span key={i}>
              {text}
              <span className="sep"> | </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}