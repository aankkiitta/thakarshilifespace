import './MobileMenu.css';
import logoImg from './img/logo.png';

const LINKS = [
  { href: '#overview',  label: 'Overview' },
  { href: '#config',    label: 'Configuration' },
  { href: '#plans',     label: 'Plans' },
  { href: '#videos',    label: 'Video' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#advantage', label: 'Advantage' },
  { href: '#showflat',  label: 'Show Flat' },
  { href: '#developer', label: 'About Developer' },
];

export default function MobileMenu({ isOpen, onClose, onEnquire }) {
  const handleEnquire = () => {
    onClose();
    setTimeout(() => onEnquire(), 300);
  };

  return (
    <>
      <div className={`elite-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />

      <aside className={`elite-mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="elite-mobile-header">
          <a href="#top" className="elite-logo" onClick={onClose}>
            <img src={logoImg} alt="Thakarshi" className="elite-logo-img" />
          </a>
          <button
            className="elite-mobile-close"
            onClick={onClose}
            aria-label="Close menu"
            type="button"
          >
            ✕
          </button>
        </div>

        <nav className="elite-mobile-nav">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="elite-mobile-link"
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="elite-mobile-cta">
          <a href="tel:7066800900" className="elite-btn-mobile call">
            📞 Call Now
          </a>
          <button
            className="elite-btn-mobile enquire"
            onClick={handleEnquire}
            type="button"
          >
            Enquire Now
          </button>
        </div>
      </aside>
    </>
  );
}