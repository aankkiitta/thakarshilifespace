import { useState, useRef, useEffect } from 'react';
import './Video.css';
import interiorVideo from './img/palminterior.mp4';

const VIDEO_DATA = {
  outside: {
    src: interiorVideo,
    title: 'From Outside — Project Walkthrough',
    desc: 'Take a look at the stunning architecture, landscaped podium, and tower elevation from the outside.',
  },
  inside: {
    src: interiorVideo,
    title: 'From Inside — Sample Flat Tour',
    desc: 'Step inside the sample flat and explore spacious interiors, premium finishes, and expansive decks.',
  },
};

export default function Video({ onEnquire }) {
  const [view, setView] = useState('outside');
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.load();
  }, [view]);

  const data = VIDEO_DATA[view];

  return (
    <section className="palm-video" id="videos">
      <div className="palm-video__inner">
        {/* ---------- LEFT: Content ---------- */}
        <div className="palm-video__content">
          {/* Eyebrow — left se */}
          <p className="palm-video__eyebrow" data-reveal="left">
            WATCH &amp; EXPLORE
          </p>

          {/* Heading — left se */}
          <h2 className="palm-video__heading" data-reveal="left" data-reveal-delay="1">
            EXPLORE PALM GALAXY
          </h2>

          {/* Divider — zoom */}
          <span className="palm-video__divider" data-reveal="zoom" data-reveal-delay="2"></span>

          {/* Description — up */}
          <p className="palm-video__desc" data-reveal="up" data-reveal-delay="3">
            Take a closer look at Palm Galaxy and discover thoughtfully designed residences,
            rooftop lifestyle amenities, green open spaces and the vibrant high-street experience.
          </p>

          {/* Toggles — up */}
          <div className="palm-video__toggles" data-reveal="up" data-reveal-delay="4">
            <button
              type="button"
              className={`palm-video__toggle ${view === 'outside' ? 'is-active' : ''}`}
              onClick={() => setView('outside')}
            >
              <span className="palm-video__toggle-label">Explore</span>
              <span className="palm-video__toggle-title">Exterior</span>
            </button>
            <button
              type="button"
              className={`palm-video__toggle ${view === 'inside' ? 'is-active' : ''}`}
              onClick={() => setView('inside')}
            >
              <span className="palm-video__toggle-label">Explore</span>
              <span className="palm-video__toggle-title">Interior</span>
            </button>
          </div>

          {/* Info box — up */}
          <div className="palm-video__info" data-reveal="up" data-reveal-delay="5">
            <h3 className="palm-video__info-title">{data.title}</h3>
            <p className="palm-video__info-desc">{data.desc}</p>
          </div>

          {/* Actions — up */}
          <div className="palm-video__actions" data-reveal="up" data-reveal-delay="6">
            <button className="palm-video__btn" onClick={onEnquire} type="button">
              ENQUIRE NOW
            </button>
          </div>
        </div>

        {/* ---------- RIGHT: Video ---------- */}
        <div className="palm-video__media" data-reveal="right" data-reveal-delay="2">
          <div className="palm-video__frame">
            <video
              ref={videoRef}
              controls
              controlsList="nodownload"
              playsInline
              preload="metadata"
              muted
            >
              <source src={data.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}