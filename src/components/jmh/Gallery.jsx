import { useState, useRef, useEffect } from 'react';
import './Gallery.css';

const CARDS = [
  { src: 'https://picsum.photos/800/600?random=1', label: 'Living Room' },
  { src: 'https://picsum.photos/800/600?random=2', label: 'Bedroom' },
  { src: 'https://picsum.photos/800/600?random=3', label: 'Kitchen' },
  { src: 'https://picsum.photos/800/600?random=4', label: 'Balcony' },
  { src: 'https://picsum.photos/800/600?random=5', label: 'Library' },
  { src: 'https://picsum.photos/800/600?random=6', label: 'Conference Room' },
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  const getVisible = () => {
    const w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 768) return 2;
    return 3;
  };

  const getTotal = () => Math.max(1, CARDS.length - getVisible() + 1);

  const goTo = (i) => {
    const total = getTotal();
    if (i < 0) i = 0;
    if (i >= total) i = total - 1;
    setIndex(i);

    if (!trackRef.current) return;
    const card = trackRef.current.children[0];
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const style = window.getComputedStyle(trackRef.current);
    const gap = parseInt(style.columnGap || style.gap) || 24;
    const translate = i * (cardWidth + gap);
    trackRef.current.style.transform = `translateX(-${translate}px)`;
  };

  useEffect(() => {
    const handleResize = () => goTo(Math.min(index, getTotal() - 1));
    window.addEventListener('resize', handleResize);
    goTo(0);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="jmh-gallery" id="gallery">
      <div className="jmh-gallery__inner">
        <h2 className="jmh-gallery__title">Project Gallery</h2>

        <div className="jmh-gallery__wrap">
          <button
            type="button"
            className="jmh-gallery__arrow jmh-gallery__arrow--prev"
            onClick={() => goTo(index - 1)}
            aria-label="Previous"
          >
            ‹
          </button>

          <div className="jmh-gallery__viewport">
            <div className="jmh-gallery__track" ref={trackRef}>
              {CARDS.map((c, i) => (
                <div
                  key={i}
                  className={`jmh-gallery__card ${i === index ? 'is-active' : ''}`}
                >
                  <img src={c.src} alt={c.label} loading="lazy" />
                  <p className="jmh-gallery__label">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="jmh-gallery__arrow jmh-gallery__arrow--next"
            onClick={() => goTo(index + 1)}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}