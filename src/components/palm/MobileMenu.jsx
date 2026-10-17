import './MobileMenu.css';
import logoImg from "./img/logo.png";   


const LINKS = [
  { href: '#overview',  label: 'Overview' },
  { href: '#config',    label: 'Configuration' },
  { href: '#plans',     label: 'Plans' },
  { href: '#videos',    label: 'Videos' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#advantage', label: 'Advantage' },
  { href: '#showflat',  label: 'Show Flat' },
  { href: '#developer', label: 'About Developer' },
];

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div className={`palm-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`palm-mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="palm-mobile-header">
          <a href="#top" className="palm-logo">
            <img src={logoImg} alt="Thakarshi" className="palm-logo-img" />
          </a>
          <button className="palm-mobile-close" onClick={onClose}>✕</button>
        </div>
        <nav className="palm-mobile-nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="palm-mobile-link" onClick={onClose}>{l.label}</a>
          ))}
        </nav>
      </aside>
    </>
  );
}