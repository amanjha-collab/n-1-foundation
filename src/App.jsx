import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import RawPage from './components/RawPage.jsx';
import Donate from './pages/Donate.jsx';

// Each page's HTML is now its own lazy-loaded chunk (via Vite's code-splitting),
// so a visitor only ever downloads the one page they're actually viewing, instead
// of all 9 pages' content being bundled into the initial JS payload for everyone.
function lazyRawPage(loader) {
  return lazy(() => loader().then((m) => ({ default: () => <RawPage html={m.default} /> })));
}

const HomePage = lazyRawPage(() => import('./pages/bodies/home.html?raw'));
const AboutPage = lazyRawPage(() => import('./pages/bodies/about.html?raw'));
const ProgramsPage = lazyRawPage(() => import('./pages/bodies/programs.html?raw'));
const GetInvolvedPage = lazyRawPage(() => import('./pages/bodies/get_involved.html?raw'));
const ResourcesPage = lazyRawPage(() => import('./pages/bodies/resources.html?raw'));
const ContactPage = lazyRawPage(() => import('./pages/bodies/contact.html?raw'));
const FaqPage = lazyRawPage(() => import('./pages/bodies/faq.html?raw'));
const TestimonyPage = lazyRawPage(() => import('./pages/bodies/testimony.html?raw'));

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
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/testimony" element={<TestimonyPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
