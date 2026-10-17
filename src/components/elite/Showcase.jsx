import { useState, useRef, useEffect } from 'react';
import './Showcase.css';

const SLIDES = [
  { img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=900&q=80', caption: 'Dining Area' },
  { img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900&q=80', caption: 'Master Bedroom' },
  { img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=900&q=80', caption: 'Bedroom' },
  { img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80', caption: 'Living Room' },
  { img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&q=80', caption: 'Balcony' },
  { img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80', caption: 'Modular Kitchen' },
];

export default function Showcase() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const getVisible = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  };

  const getMax = () => Math.max(0, SLIDES.length - getVisible());

  const update = (i) => {
    const max = getMax();
    if (i < 0) i = 0;
    if (i > max) i = max;
    setIndex(i);

    if (!trackRef.current) return;
    const card = trackRef.current.children[0];
    if (!card) return;

    const w = card.getBoundingClientRect().width;
    const gap = parseInt(window.getComputedStyle(trackRef.current).gap) || 24;
    trackRef.current.style.transform = `translateX(-${(w + gap) * i}px)`;
  };

  useEffect(() => {
    const onResize = () => update(0);
    window.addEventListener('resize', onResize);
    update(0);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const maxIndex = getMax();

  return (
    <section className="elite-showcase" id="showflat">
      <div className="elite-showcase-inner">
        <div className="elite-showcase-header" data-reveal="up">
          <h2 className="elite-showcase-title">
            Show <span>Flats</span>
          </h2>
          <p className="elite-showcase-subtitle">
            Take a virtual tour of our fully-furnished sample apartments
          </p>
        </div>

        <div className="elite-showcase-slider">
          <button
            className="elite-showcase-arrow prev"
            onClick={() => update(index - 1)}
            disabled={index <= 0}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="elite-showcase-viewport">
            <div className="elite-showcase-track" ref={trackRef}>
              {SLIDES.map((s, i) => (
                <div
                  key={i}
                  className={`elite-showcase-slide ${i === index + 1 ? 'active' : ''}`}
                >
                  <div className="elite-showcase-img">
                    <img src={s.img} alt={s.caption} />
                  </div>
                  <p className="elite-showcase-caption">{s.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            className="elite-showcase-arrow next"
            onClick={() => update(index + 1)}
            disabled={index >= maxIndex}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}