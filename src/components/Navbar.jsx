import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useScrollNav } from "../hooks/useScrollNav";
import "./Navbar.css";

import logoImg from "./main-pages-images/logo.png";

const LINKS = [
  { label: "Projects", to: "/projects" },
  { label: "About Us", to: "#story" },
 
  { label: "Our Gallery", to: "#everyday-gallery" },
   { label: "Testimonials", to: "#testimonials" },
  { label: "Contact", to: "#lead" },
];

export default function Navbar() {
  const scrolled = useScrollNav(60);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Add kiya

  const transparent = location.pathname === "/" && !scrolled && !open;
  const isHome = location.pathname === "/";

  // ✅ Smart Click Handler
  const handleLinkClick = (e, to) => {
    setOpen(false);

  
    if (to.startsWith("#")) {
      e.preventDefault();
      
      
      window.history.replaceState(null, "", window.location.pathname);

      if (isHome) {
   
        const el = document.querySelector(to);
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
        }
      } else {

        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(to);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  };

  return (
    <header className={`navbar ${transparent ? "is-transparent" : "is-solid"}`}>
      <nav className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <img
            src={logoImg}
            alt="Thakarshilifespace"
            className="navbar__logo-img"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {LINKS.map((link) => (
            <li key={link.label}>
              <Link 
                to={link.to} 
                className="navbar__link"
                onClick={(e) => handleLinkClick(e, link.to)}
              >
                {link.label}
                <span className="navbar__link-underline" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA (Enquire Now) */}
        <div className="navbar__cta-wrap">
          <Link 
            to="#lead" 
            className="navbar__cta"
            onClick={(e) => handleLinkClick(e, "#lead")} // ✅ Click handler lagaya
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="navbar__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          type="button"
        >
          {open ? (
            <X size={26} color="#1C1B18" />
          ) : (
            <Menu size={26} color={transparent ? "#F7F4EE" : "#1C1B18"} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${open ? "is-open" : ""}`}>
        <div className="navbar__mobile-inner">
          {LINKS.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={(e) => handleLinkClick(e, link.to)}
              className="navbar__mobile-link"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA (Enquire Now) */}
          <Link
            to="#lead"
            onClick={(e) => handleLinkClick(e, "#lead")} // ✅ Click handler lagaya
            className="navbar__mobile-cta"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}