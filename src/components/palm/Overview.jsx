import './Overview.css';

export default function Overview({ onEnquire }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <section className="palm-overview" id="overview">
      <div className="palm-overview__inner">
        <div className="palm-overview__left">
          {/* Eyebrow — left se aata hai */}
          <p className="palm-overview__eyebrow" data-reveal="left">
            INTRODUCING PALM GALAXY
          </p>

          {/* Heading — left se, thoda delay */}
          <h2 className="palm-overview__title" data-reveal="left" data-reveal-delay="1">
            PALM GALAXY
          </h2>

          {/* Divider — zoom in */}
          <span className="palm-overview__divider" data-reveal="zoom" data-reveal-delay="2"></span>

          {/* Lead — left se */}
          <p className="palm-overview__lead" data-reveal="left" data-reveal-delay="3">
            AN AVENUE FOR A GOOD LIFE.
          </p>

          {/* Paragraph 1 — bottom se */}
          <p className="palm-overview__text" data-reveal="up" data-reveal-delay="4">
            Experience urban living at its best with Palm Galaxy a perfect blend of fine living,
            sought-after comforts, high-street delights and green open spaces.
          </p>

          {/* Paragraph 2 — bottom se, thoda delay */}
          <p className="palm-overview__text" data-reveal="up" data-reveal-delay="5">
            Part of a 36-acre township built around <strong>Live • Learn • Work • Play</strong>,
            Palm Galaxy brings thoughtfully designed 1 &amp; 2 BHK residences together with lifestyle
            amenities, integrated high-street retail and seamless connectivity.
          </p>

          {/* Button — bottom se */}
          <button
            className="palm-overview__btn"
            onClick={onEnquire}
            data-reveal="up"
            data-reveal-delay="6"
          >
            1 &amp; 2 BHK RESIDENCES • ENQUIRE NOW
          </button>
        </div>

        {/* Right side form — RIGHT se aata hai */}
        <div className="palm-overview__right" data-reveal="right" data-reveal-delay="2">
          <div className="palm-form">
            <div className="palm-form__header">REGISTER YOUR INTEREST</div>
            <form className="palm-form__body" onSubmit={handleSubmit}>
              <div className="palm-form__field">
                <input type="text" placeholder="Name*" required />
              </div>
              <div className="palm-form__field">
                <input type="tel" placeholder="Mobile*" required />
              </div>
              <div className="palm-form__field">
                <input type="email" placeholder="Email" />
              </div>
              <label className="palm-form__consent">
                <input type="checkbox" required />
                <span>
                  I consent to the processing of my personal data according to{" "}
                  <a href="#">Privacy Policy</a>
                </span>
              </label>
              <button type="submit" className="palm-form__submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}