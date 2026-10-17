import './Header.css';
import logoImg from './img/logo.png';

const NAV_LINKS = [
  { href: '#overview',  label: 'Overview' },
  { href: '#config',    label: 'Configuration' },
  { href: '#plans',     label: 'Plans' },
  { href: '#videos',    label: 'Video' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#advantage', label: 'Advantage' },
  { href: '#showflat',  label: 'Show Flat' },
  { href: '#developer', label: 'About Developer' },
];

export default function Header({ onBurgerClick }) {
  return (
    <header className="elite-header">
      <div className="elite-header-inner">
        <a href="#top" className="elite-logo">
          <img src={logoImg} alt="Thakarshi" className="elite-logo-img" />
        </a>

        <nav className="elite-nav">
          {NAV_LINKS.map((link, i) => (
            <span key={link.href} className="elite-nav-item">
              <a href={link.href} className="elite-nav-link">{link.label}</a>
              {i < NAV_LINKS.length - 1 && <span className="elite-nav-sep">|</span>}
            </span>
          ))}
        </nav>

        <button
          className="elite-burger"
          onClick={onBurgerClick}
          aria-label="Open menu"
          type="button"
        >
          ☰
        </button>
      </div>
    </header>
  );
}