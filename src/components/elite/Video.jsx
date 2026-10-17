import './Video.css';
import eliteVideo from './img/elite.mp4';   // ✅ Space hataya

export default function Video() {
  return (
    <section className="video-section" id="videos">
      <div className="video-section-inner">
        <h2 className="video-section-title" data-reveal="up">
          Project Walkthrough
        </h2>
        <p className="elite-plans-subtitle" data-reveal="up">
          Thoughtfully designed layouts for modern living
        </p>

        <div className="video-section-frame" data-reveal="up">
          <video
            className="video-section-player"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={eliteVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}