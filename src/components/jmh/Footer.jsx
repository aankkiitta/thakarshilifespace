import { Link } from 'react-router-dom';
import './Footer.css';
import qrImg from './img/Qr.png';

export default function Footer() {
  return (
    <footer className="palm-footer">
      <div className="palm-footer__top">

        {/* ---------- Site Address ---------- */}
        <p className="palm-footer__address">
          <span className="palm-footer__pin" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
          </span>
          <span className="palm-footer__address-text">
            <strong>Site Address:</strong> Palm Galaxy, Pisavli Village,
            Pipeline Road, Kalyan East, Thane – 421306
          </span>
        </p>

       

        {/* ---------- Divider ---------- */}
        <span className="palm-footer__divider" aria-hidden="true" />

        {/* ---------- RERA Notice ---------- */}
        <div className="palm-footer__rera">
          <p className="palm-footer__rera-text">
            The project has been registered via MahaRERA registration no.{' '}
            <strong>P51700054299</strong> and is available on the website{' '}
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
        <div className="palm-footer__qr">
          <img src={qrImg} alt="MahaRERA QR Code" loading="lazy" />
          <p className="palm-footer__qr-label">Scan for MahaRERA details</p>
        </div>
      </div>

 
      <div className="palm-footer__bottom">
       

        <p className="palm-footer__copyright">
          © 2025 thakarshilifespaces · All rights reserved
        </p>

  
      </div>
    </footer>
  );
}