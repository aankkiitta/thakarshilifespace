import './ProjectCard.css';

export default function ProjectCard({ onEnquire }) {
  return (
    <section className="hero-card-section">
      <div className="hero-card">
        <div className="hero-card__badge">New Launch</div>
        <h2 className="hero-card__title">PALM GALAXY</h2>
        <p className="hero-card__by">By Thakarshi Lifespaces</p>
        <p className="hero-card__location">at Pipeline Road, Kalyan East</p>

        <div className="hero-card__strip hero-card__strip--dark">
          <span className="hero-card__dot">◆</span>
          <span>Premium 1 &amp; 2 BHK Residences</span>
        </div>
        <div className="hero-card__strip hero-card__strip--dark hero-card__strip--highlight">
          <span className="hero-card__dot hero-card__dot--yellow">◆</span>
          <span>5 Mins from Kalyan Railway Station</span>
        </div>
        <div className="hero-card__strip hero-card__strip--light">
          <span className="hero-card__dot">◆</span>
          <span>36-Acre Township Living</span>
        </div>
        <div className="hero-card__strip hero-card__strip--white">
          <span className="hero-card__dot">◆</span>
          <span>Rooftop Lifestyle Amenities &amp; High-Street Retail</span>
        </div>

        <div className="hero-card__price">
          <p className="hero-card__price-label">Premium 1 &amp; 2 BHK Apartments</p>
          <p className="hero-card__price-value">
            <span className="hero-card__currency">₹</span> Price on Request
          </p>
        </div>

        <button className="hero-card__btn" type="button" onClick={onEnquire}>
          Enquire Now
        </button>
      </div>
    </section>
  );
}