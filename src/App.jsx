import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import RawPage from './components/RawPage.jsx';
import Donate from './pages/Donate.jsx';

import homeHtml from './pages/bodies/home.html?raw';
import aboutHtml from './pages/bodies/about.html?raw';
import programsHtml from './pages/bodies/programs.html?raw';
import getInvolvedHtml from './pages/bodies/get_involved.html?raw';
import resourcesHtml from './pages/bodies/resources.html?raw';
import contactHtml from './pages/bodies/contact.html?raw';
import faqHtml from './pages/bodies/faq.html?raw';
import testimonyHtml from './pages/bodies/testimony.html?raw';

// Scroll to top on route change (and handle in-page #anchors).
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollManager />
      <Header />
      <Routes>
        <Route path="/" element={<RawPage html={homeHtml} />} />
        <Route path="/about" element={<RawPage html={aboutHtml} />} />
        <Route path="/programs" element={<RawPage html={programsHtml} />} />
        <Route path="/get-involved" element={<RawPage html={getInvolvedHtml} />} />
        <Route path="/resources" element={<RawPage html={resourcesHtml} />} />
        <Route path="/contact" element={<RawPage html={contactHtml} />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/faq" element={<RawPage html={faqHtml} />} />
        <Route path="/testimony" element={<RawPage html={testimonyHtml} />} />
        <Route path="*" element={<RawPage html={homeHtml} />} />
      </Routes>
      <Footer />
    </div>
  );
}
