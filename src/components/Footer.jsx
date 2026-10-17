import { MapPin, Phone, Mail } from "lucide-react";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

// ✅ Import your logo image here
import logoImg from "./main-pages-images/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Column 1: Brand */}
        <div className="footer__col footer__col--brand">
          <Link to="/" className="footer__logo-link">
            <img src={logoImg} alt="Luxe Estate" className="footer__logo-img" />
          </Link>
          
          <div className="footer__socials">
            <a 
              href="https://www.youtube.com/@Thakarshi-Lifespaces" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/company/thakarshi-lifespaces/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a 
              href="https://www.instagram.com/thakarshilifespacespvtltd?igsh=MW54OHd1bW11eGp6Zg%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* ✅ Wrapper for Quick Links & Projects (Side-by-side on mobile) */}
        <div className="footer__links-grid">
          
          {/* Column 2: Quick Links */}
          <div className="footer__col">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="#story">About Us</Link></li>
              <li><Link to="#lead">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Projects */}
          <div className="footer__col">
            <h3 className="footer__heading">Our Projects</h3>
            <ul className="footer__links">
              <li><Link to="/palm">Palm Galaxy</Link></li>
              <li><Link to="/jmh">Jai Mari Home</Link></li>
              <li><Link to="/elite">Elite Residences</Link></li>
              <li><Link to="/paradise-valley">Paradise Valley</Link></li>
            </ul>
          </div>

        </div>

        {/* Column 4: Contact */}
        <div className="footer__col">
          <h3 className="footer__heading">Get in Touch</h3>
          <ul className="footer__contact">
            <li>
              <MapPin size={18} className="footer__icon" />
              <span>
                1st Floor, Malang Plazza, Front of Yash Raj Paradise, 
                Malangad Rd, Kalyan East, Pisavli Village, Nandivali Gaon, 
                Kalyan, Maharashtra 421306, India
              </span>
            </li>
            <li>
              <Phone size={18} className="footer__icon" />
              <span>+91 98765 43210</span> 
            </li>
            <li>
              <Mail size={18} className="footer__icon" />
              <span>hello@luxeestate.com</span> 
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>&copy; {currentYear}  Thakarshilifespace All rights reserved.</p>
        
        <div className="footer__legal">
          <p className="footer__crafted-text">
            Crafted by{" "}
            <a href="https://avanaaa.com" target="_blank" rel="noopener noreferrer">
              avanaaa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}