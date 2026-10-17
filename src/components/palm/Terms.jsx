import './Terms.css';
import Header from './Header';
import Footer from './Footer';

const SECTIONS = [
  {
    title: '1. General Information',
    body: [
      'This website is intended to provide general information about Palm Galaxy, including its location, floor plans, amenities, and other project-related details. The information is subject to change without prior notice.',
    ],
  },
  {
    title: '2. Property Information',
    body: [
      'All images, floor plans, layouts, specifications, amenities, and other project details are indicative and may be revised as per applicable approvals and project requirements. Buyers are advised to verify the latest details with the authorised sales team before making a purchase decision.',
    ],
  },
  {
    title: '3. Enquiry Submission',
    body: [
      'By submitting your name, phone number, email address, or other details through this website, you consent to being contacted by the authorised sales team regarding your enquiry, project updates, and related information.',
    ],
  },
  {
    title: '4. Pricing and Offers',
    body: [
      'Prices, payment plans, promotional offers, and other commercial terms are subject to availability and applicable conditions. Please confirm the latest terms with the authorised representative.',
    ],
  },
  {
    title: '5. MahaRERA Information',
    body: [
      "Prospective buyers should verify the project's MahaRERA registration details, approvals, and disclosures on the official MahaRERA website before making a booking or investment decision.",
    ],
  },
  {
    title: '6. Intellectual Property',
    body: [
      'The content, branding, graphics, photographs, and other materials displayed on this website may not be copied, reproduced, or used commercially without prior written permission from the respective rights holders.',
    ],
  },
  {
    title: '7. Third-Party Links',
    body: [
      'This website may contain links to third-party websites, including mapping services and official regulatory portals. We are not responsible for the content or policies of those external websites.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    body: [
      'While reasonable efforts are made to keep the information accurate and updated, users should independently verify important project details before relying on them.',
    ],
  },
  {
    title: '9. Updates to These Terms',
    body: [
      'These Terms & Conditions may be updated periodically. The latest version published on this website will apply.',
    ],
  },
  {
    title: '10. Contact Information',
    body: [
      'For clarification regarding these terms or project details, please contact the authorised sales team through the contact information provided on this website.',
    ],
  },
];

export default function Terms() {
  return (
    <>
      <Header onMenuOpen={() => {}} />

      <main className="palm-terms">
        {/* ---------- HEADING ---------- */}
        <div className="palm-terms__head">
          <p className="palm-terms__eyebrow" data-reveal="left">
            LEGAL
          </p>
          <h1
            className="palm-terms__heading"
            data-reveal="left"
            data-reveal-delay="1"
          >
            TERMS &amp; CONDITIONS
          </h1>
          <span
            className="palm-terms__divider"
            data-reveal="zoom"
            data-reveal-delay="2"
          />
          <p
            className="palm-terms__sub"
            data-reveal="up"
            data-reveal-delay="3"
          >
            Please read the following terms carefully before using this website
            or making any enquiry.
          </p>
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="palm-terms__content">
          {SECTIONS.map((section, i) => (
            <div
              key={section.title}
              className="palm-terms__item"
              data-reveal="up"
              data-reveal-delay={Math.min(i + 1, 6)}
            >
              <h2 className="palm-terms__item-title">{section.title}</h2>
              {section.body.map((para, j) => (
                <p key={j} className="palm-terms__item-text">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* ---------- LAST UPDATED ---------- */}
        <p className="palm-terms__updated" data-reveal="fade">
          Last updated: October 2025
        </p>
      </main>

      <Footer />
    </>
  );
}