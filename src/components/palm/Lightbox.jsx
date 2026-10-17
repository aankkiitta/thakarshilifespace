import './Lightbox.css';

export default function Lightbox({ src, onClose }) {
  if (!src) return null;

  return (
    <div className="palm-lightbox open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="palm-lightbox__close" onClick={onClose}>✕</button>
      <img src={src} alt="Preview" className="palm-lightbox__img" />
    </div>
  );
}