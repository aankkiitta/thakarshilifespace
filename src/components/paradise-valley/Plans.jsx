import React from 'react';
import './Plans.css';
import floorvilla1Img from './img/floorvilla1.jpeg';
import floorvilla2Img from './img/floorvilla2.jpeg';
import floorvilla3Img from './img/floorvilla3.jpeg';

export default function Plans({ openModal }) {
  const planData = [
    {
      name: "The Amalfi", tagline: "Elegant spaces designed for refined villa living",
      lead: "Thoughtfully planned spaces for comfort, privacy and effortless living.",
      desc: "Discover The Amalfi, a beautifully planned luxury villa designed with spacious interiors, a private courtyard and seamless indoor-outdoor living. Every space is thoughtfully crafted to create a comfortable and sophisticated residential experience.",
      specs: [ { label: "Carpet area:", value: "3,450 Sq. Ft. *" }, { label: "Configuration:", value: "Luxury Villa Residence" }, { label: "Highlights:", value: "Private Courtyard • Guest Suite • Rooftop Terrace" } ],
      img: floorvilla1Img, alt: "The Amalfi Floor Plan", reverse: false
    },
    {
      name: "Portofino Grande", tagline: "Generous spaces crafted for elevated living",
      lead: "A refined villa designed for comfort, entertainment and privacy.",
      desc: "Discover Portofino Grande, an expansive luxury residence featuring generous living spaces, a private media room and beautifully landscaped surroundings. Designed for those who appreciate space, elegance and modern comfort.",
      specs: [ { label: "Carpet area:", value: "4,250 Sq. Ft. *" }, { label: "Configuration:", value: "Luxury Villa Residence" }, { label: "Highlights:", value: "Media Room • Private Wine Cellar • Landscaped Garden" } ],
      img: floorvilla2Img, alt: "Portofino Grande Floor Plan", reverse: true
    },
    {
      name: "Bellagio Estate", tagline: "Expansive luxury designed for an exceptional lifestyle",
      lead: "A grand residence where space, wellness and sophistication come together.",
      desc: "Discover Bellagio Estate, an expansive luxury villa designed for an elevated lifestyle. With a dedicated home gym, private spa, elevator provision and an expansive terrace, every detail is created for premium everyday living.",
      specs: [ { label: "Carpet area:", value: "5,200 Sq. Ft. *" }, { label: "Configuration:", value: "Luxury Villa Residence" }, { label: "Highlights:", value: "Private Spa • Home Gym • Elevator • Jacuzzi Terrace" } ],
      img: floorvilla3Img, alt: "Bellagio Estate Floor Plan", reverse: false
    }
  ];

  return (
    <section className="prd-plans" id="plans">
      <div className="prd-plans__inner">
        <div className="prd-plans__head">
          <p className="prd-plans__eyebrow">Layouts</p>
          <h2 className="prd-plans__title"><span>Villa</span> Plans</h2>
          <span className="prd-plans__divider"></span>
        </div>

        {planData.map((plan, index) => (
          <div key={index} className={`prd-plans__row ${plan.reverse ? 'prd-plans__row--reverse' : ''}`}>
            <div className="prd-plans__content">
              <h3 className="prd-plans__name">{plan.name}</h3>
              <p className="prd-plans__tagline">{plan.tagline}</p>
              <h4 className="prd-plans__lead">{plan.lead}</h4>
              <p className="prd-plans__desc">{plan.desc}</p>
              <ul className="prd-plans__specs">
                {plan.specs.map((spec, i) => (
                  <li key={i}>
                    <span className="prd-plans__label">{spec.label}</span>
                    <span className="prd-plans__value">{spec.value}</span>
                  </li>
                ))}
              </ul>
              <button className="prd-plans__btn" onClick={openModal}>Enquire Now</button>
            </div>
            <div className="prd-plans__media">
              <img src={plan.img} alt={plan.alt} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}