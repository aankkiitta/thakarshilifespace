import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";  
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import About from "./pages/About";

// 🔥 Palm Galaxy 
import PalmPage from "./components/palm/PalmPage";

// 🔥 Jai Mari Home 
import JmhPage from "./components/jmh/JmhPage";

// 🔥 Elite Residences 
import ElitePage from "./components/elite/ElitePage";

// 🔥 Paradise Valley 
import ParadisePage from "./components/paradise-valley/ParadisePage";

export default function App() {
  return (
    <>
      <ScrollToTop />  
      <Routes>
        {/* ============================================ */}
        {/* AVANA ROUTES                                 */}
        {/* ============================================ */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* ============================================ */}
        {/* PALM GALAXY             */}
        {/* ============================================ */}
        <Route path="/palm" element={<PalmPage />} />

        {/* ============================================ */}
        {/* JAI MARI HOME                   */}
        {/* ============================================ */}
        <Route path="/jmh" element={<JmhPage />} />

        {/* ============================================ */}
        {/* ELITE RESIDENCES                */}
        {/* ============================================ */}
        <Route path="/elite" element={<ElitePage />} />

        {/* ============================================ */}
        {/* PARADISE VALLEY               */}
        {/* ============================================ */}
        <Route path="/paradise-valley" element={<ParadisePage />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}