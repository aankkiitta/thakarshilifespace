import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ✅ Agar URL mein #hash hai (jaise #about-us, #lead)
    // Toh hash wale section pe smooth scroll karo
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Thoda delay taaki page render ho jaye
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return;
      }
    }

    // ✅ Agar normal page change hai (jaise card click -> /projects/123)
    // Toh bina kisi animation ke foran top pe jao
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}