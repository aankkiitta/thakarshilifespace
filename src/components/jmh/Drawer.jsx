import './Drawer.css';
import logoImg from './img/logo.png';

const LINKS = [
  { href: '#overview',  label: 'Overview' },
  { href: '#config',    label: 'Configuration' },
  { href: '#plans',     label: 'Plans' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#location',  label: 'Location' },
  { href: '#gallery',   label: 'Gallery' },
  { href: '#developer', label: 'Developer' },
];

export default function Drawer({ isOpen, onClose, onEnquire }) {
  const handleEnquire = () => {
    onClose();
    setTimeout(() => onEnquire(), 300);
  };

  return (
    <div className={`jmh-drawer ${isOpen ? 'is-open' : ''}`}>
      <div className="jmh-drawer__overlay" onClick={onClose} />

      <aside className="jmh-drawer__panel">
        <div className="jmh-drawer__head">
          <a href="#top" className="jmh-logo jmh-logo--drawer">
            <img src={logoImg} alt="Jai Mari Home" className="jmh-logo__img" />
          </a>
          <button className="jmh-drawer__close" onClick={onClose} aria-label="Close" type="button">✕</button>
        </div>

        <nav className="jmh-drawer__nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="jmh-drawer__link" onClick={onClose}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="jmh-drawer__footer">
          <button className="jmh-drawer__cta" onClick={handleEnquire} type="button">
            Enquire Now
          </button>
        </div>
      </aside>
    </div>
  );
}