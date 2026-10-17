import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import "./Layout.css";

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // ✅ Agar URL mein #hash hai (jaise #lead, #story)
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
        return; // Scroll hone do, top pe mat jao
      }
    }
    
    // ✅ Agar normal page change hai (jaise Projects pe jana)
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}