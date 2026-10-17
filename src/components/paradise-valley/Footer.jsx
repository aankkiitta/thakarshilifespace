import { Link } from 'react-router-dom';
import './Footer.css';

const LINKS = [
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms & Conditions', to: '/terms' },
  { label: 'Disclaimer', to: '#' },
  { label: 'Cookies Policy', to: '#' },
  { label: 'Grievance Redressal', to: '#' },
];

export default function Footer() {
  return (
    <footer className="paradise-valleyfooter">
      <div className="paradise-valleyfooter__top">

        {/* ---------- Site Address ---------- */}
        <p className="paradise-valleyfooter__address">
          <span className="paradise-valleyfooter__pin" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
          </span>
          <span className="paradise-valleyfooter__address-text">
            <strong>Site Address:</strong> Paradise Valley, Kolshet Road, Thane (W), Maharashtra – 400607
          </span>
        </p>

    
        {/* ---------- Divider ---------- */}
        <span className="paradise-valleyfooter__divider" aria-hidden="true" />

        {/* ---------- RERA Notice ---------- */}
        <div className="paradise-valleyfooter__rera">
          <p className="paradise-valleyfooter__rera-text">
            The project has been registered via MahaRERA registration no.{' '}
            <strong>P51700077038</strong> and is available on the website{' '}
            <a
              href="https://maharera.mahaonline.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              maharera.mahaonline.gov.in
            </a>{' '}
            under registered projects.
          </p>
        </div>

        {/* ---------- QR Code ---------- */}
        <div className="paradise-valleyfooter__qr">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://maharera.mahaonline.gov.in/"
            alt="MahaRERA QR Code"
            loading="lazy"
          />
          <p className="paradise-valleyfooter__qr-label">Scan for MahaRERA details</p>
        </div>
      </div>

      {/* ============================================================
          BOTTOM BAR — Links + Copyright + Terms
          ============================================================ */}
      <div className="paradise-valleyfooter__bottom">
        <nav className="paradise-valleyfooter__links">
          {LINKS.map((link, i) => (
            <span key={link.label}>
              {link.to.startsWith('/') ? (
                <Link to={link.to}>{link.label}</Link>
              ) : (
                <a href={link.to}>{link.label}</a>
              )}
              {i < LINKS.length - 1 && (
                <span className="paradise-valleyfooter__sep">|</span>
              )}
            </span>
          ))}
        </nav>

        <p className="paradise-valleyfooter__copyright">
          © 2025 thakarshilifespaces · All rights reserved
        </p>

      </div>
    </footer>
  );
}