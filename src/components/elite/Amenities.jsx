import { useState, useRef, useEffect } from 'react';
import './Amenities.css';

const AMENITIES = [
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80', caption: 'Sundeck Area' },
  { img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=900&q=80', caption: 'Mini Indoor Golf' },
  { img: 'https://images.unsplash.com/photo-1626248801379-51a0748a5f96?w=900&q=80', caption: 'Indoor Games' },
  { img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80', caption: 'Swimming Pool' },
  { img: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&q=80', caption: 'Modern Gym' },
  { img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=80', caption: 'Kids Play Area' },
];

export default function Amenities() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const getVisible = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  };

  const getMax = () => Math.max(0, AMENITIES.length - getVisible());

  const update = (i) => {
    const max = getMax();
    if (i < 0) i = max;
    if (i > max) i = 0;
    setIndex(i);

    if (!trackRef.current) return;
    const card = trackRef.current.children[0];
    if (!card) return;

    const cardW = card.getBoundingClientRect().width;
    const gap = parseInt(window.getComputedStyle(trackRef.current).gap) || 24;
    trackRef.current.style.transform = `translateX(-${(cardW + gap) * i}px)`;
  };

  useEffect(() => {
    const onResize = () => update(0);
    window.addEventListener('resize', onResize);
    update(0);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="elite-amenities" id="amenities">
      <div className="elite-amenities-inner">
        <div className="elite-amenities-header">
          <h2 className="elite-amenities-title" data-reveal="up">
            Project Amenities
          </h2>
          <p className="elite-amenities-subtitle" data-reveal="up">
            30+ Amenities Including Open Air Amenities on 15th Floor
          </p>
        </div>

        <div className="elite-amenities-carousel">
          <button
            className="elite-amenity-arrow prev"
            onClick={() => update(index - 1)}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="elite-amenities-viewport">
            <div className="elite-amenities-track" ref={trackRef}>
              {AMENITIES.map((item, i) => (
                <div key={i} className="elite-amenity-card" data-reveal="up">
                  <div className="elite-amenity-image">
                    <img src={item.img} alt={item.caption} />
                  </div>
                  <p className="elite-amenity-caption">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            className="elite-amenity-arrow next"
            onClick={() => update(index + 1)}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}