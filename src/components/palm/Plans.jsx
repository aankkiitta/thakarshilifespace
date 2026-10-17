
import './Plans.css';

import floor1 from './img/floor1.webp';
import floor2 from './img/floor2.webp';
import floor3 from './img/floor3.webp';

const PLANS = [
  {
    id: 'first-floor',
    bhk: '1ST FLOOR PLAN',
    tagline: 'Thoughtfully Planned Spaces',
    title: 'Explore the First Floor Layout',
    desc: 'Discover the first-floor layout, showcasing the arrangement of residential spaces and the overall floor configuration. Explore the plan to understand the layout and distribution of homes on this level.',
    floorLabel: '1st Floor',
    layoutType: 'Residential Floor Plan',
    floor: floor1,
    reverse: false,
  },
  {
    id: 'second-sixth-floor',
    bhk: '2ND TO 6TH FLOOR PLAN',
    tagline: 'Designed for Comfortable Living',
    title: 'Explore Typical Floor Layouts',
    desc: 'Explore the residential layouts spanning the second to sixth floors. The floor plan provides an overview of the arrangement of homes and the configuration shared across these levels.',
    floorLabel: '2nd to 6th Floor',
    layoutType: 'Typical Floor Plan',
    floor: floor2,
    reverse: true,
  },
  {
    id: 'seventh-floor',
    bhk: '7TH FLOOR PLAN',
    tagline: 'A Distinctive Floor Configuration',
    title: 'Explore the Seventh Floor Layout',
    desc: 'Discover the seventh-floor layout and its distinct configuration of residential spaces. View the floor plan to understand the arrangement and overall design of this level.',
    floorLabel: '7th Floor',
    layoutType: 'Residential Floor Plan',
    floor: floor3,
    reverse: false,
  },
];

export default function Plans({ onEnquire, onLightbox }) {
  const handleImageKeyDown = (event, image) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onLightbox?.(image);
    }
  };

  return (
    <section className="palm-plans" id="plans">
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className={`palm-plan__row ${
            plan.reverse ? 'palm-plan__row--reverse' : ''
          }`}
        >
          {/* CONTENT */}
          <div
            className="palm-plan__content"
            data-reveal={plan.reverse ? 'right' : 'left'}
          >
            <h3
              className="palm-plan__bhk"
              data-reveal={plan.reverse ? 'right' : 'left'}
            >
              {plan.bhk}
            </h3>

            <p
              className="palm-plan__tagline"
              data-reveal={plan.reverse ? 'right' : 'left'}
              data-reveal-delay="1"
            >
              {plan.tagline}
            </p>

            <h2
              className="palm-plan__title"
              data-reveal={plan.reverse ? 'right' : 'left'}
              data-reveal-delay="2"
            >
              {plan.title}
            </h2>

            <p
              className="palm-plan__desc"
              data-reveal="up"
              data-reveal-delay="3"
            >
              {plan.desc}
            </p>

            {/* FLOOR DETAILS */}
            <ul
              className="palm-plan__specs"
              data-reveal="up"
              data-reveal-delay="4"
            >
              <li>
                <span className="palm-plan__label">
                  Floor Level:
                </span>

                <span className="palm-plan__value">
                  {plan.floorLabel}
                </span>
              </li>

              <li>
                <span className="palm-plan__label">
                  Layout Type:
                </span>

                <span className="palm-plan__value">
                  {plan.layoutType}
                </span>
              </li>
            </ul>

            {/* ENQUIRY BUTTON */}
            <button
              className="palm-plan__btn"
              onClick={onEnquire}
              data-reveal="up"
              data-reveal-delay="5"
              type="button"
            >
              ENQUIRE NOW
            </button>
          </div>

          {/* FLOOR PLAN IMAGE */}
          <div
            className="palm-plan__media"
            onClick={() => onLightbox?.(plan.floor)}
            data-reveal={plan.reverse ? 'left' : 'right'}
            data-reveal-delay="1"
            role="button"
            tabIndex={0}
            aria-label={`View ${plan.bhk} floor plan`}
            onKeyDown={(event) =>
              handleImageKeyDown(event, plan.floor)
            }
          >
            <img
              src={plan.floor}
              alt={`Floor plan - ${plan.floorLabel}`}
              loading="lazy"
            />

            <span className="palm-plan__zoom">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
