import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const primaryLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
];

const programsMenu = [
  { to: '/programs', label: 'All Programs' },
  { to: '/programs/read-a-story', label: 'Read-a-story', chipBg: '#FEF3C7', chipColor: '#F59E0B' },
  { to: '/programs/solve-with-bharat', label: 'Solve-with-Bharat', chipBg: '#DBEAFE', chipColor: '#004AAD' },
];

const learnMenu = [
  { to: '/resources', label: 'Resources', chipBg: '#DBEAFE', chipColor: '#004AAD' },
  { to: '/success-stories', label: 'Success Stories', chipBg: '#FEF3C7', chipColor: '#F59E0B' },
  { to: '/testimony', label: 'Testimonials', chipBg: '#EDE9FE', chipColor: '#7C3AED' },
  { to: '/faq', label: 'FAQ', chipBg: '#DCFCE7', chipColor: '#0F8A5F' },
];

const tailLinks = [
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
];

function DotIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"></circle>
    </svg>
  );
}

function NavDropdown({ label, items, isActive, closeMobile }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  return (
    <div
      className={`nv-wrap${open ? ' is-open' : ''}`}
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`nv-trigger${isActive ? ' is-active' : ''}`}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <svg className="nv-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
      <div className="nv-pop">
        <div className="nv-card">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nv-item${pathname === item.to ? ' nv-item--on' : ''}`}
              onClick={() => {
                setOpen(false);
                if (closeMobile) closeMobile();
              }}
            >
              {item.chipBg && (
                <span className="nv-ic" style={{ background: item.chipBg, color: item.chipColor }}>
                  <DotIcon />
                </span>
              )}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobilePrograms, setMobilePrograms] = useState(false);
  const [mobileLearn, setMobileLearn] = useState(false);
  const { pathname } = useLocation();
  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));
  const programsActive = pathname.startsWith('/programs');
  const learnActive = ['/resources', '/success-stories', '/testimony', '/faq'].some((p) => pathname.startsWith(p));

  return (
    <header className="sticky top-0 z-50 bg-white  border-b border-border z-[99]">
      <nav className="container mx-auto px-4 sm:px-6 2xl:px-[48px] py-3">
        <div className="flex justify-between items-center h-16">
          <Link className="flex items-center group" to="/">
            <img
              src="/assets/logo-full-color-BEuo0RIX.svg"
              alt="n+1 Social Foundation Logo"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8 font-poppins">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                className={`text-sm font-medium transition-colors border-b-2 pb-1 ${isActive(l.to) ? 'text-[#FEB344] border-[#FEB344]' : 'text-[#004AAD] border-transparent hover:text-[#FEB344]'}`}
                to={l.to}
              >
                {l.label}
              </Link>
            ))}
            <NavDropdown label="Programs" items={programsMenu} isActive={programsActive} />
            <NavDropdown label="Learn" items={learnMenu} isActive={learnActive} />
            {tailLinks.map((l) => (
              <Link
                key={l.to}
                className={`text-sm font-medium transition-colors border-b-2 pb-1 ${isActive(l.to) ? 'text-[#FEB344] border-[#FEB344]' : 'text-[#004AAD] border-transparent hover:text-[#FEB344]'}`}
                to={l.to}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/donate">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#004AAD] hover:bg-transparent hover:border-[#FEB344] hover:text-[#FEB344] text-white border-2 border-[#3A86FF] py-3 px-6 rounded-md">
                Donate Now
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-4 flex flex-col space-y-3 font-poppins">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                className={`text-sm font-medium transition-colors ${isActive(l.to) ? 'text-[#FEB344]' : 'text-[#004AAD] hover:text-[#FEB344]'}`}
                to={l.to}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            <div className="nv-mobile-group">
              <button type="button" className="nv-mobile-label" onClick={() => setMobilePrograms((v) => !v)}>
                Programs {mobilePrograms ? '\u2212' : '+'}
              </button>
              {mobilePrograms && (
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  {programsMenu.map((item) => (
                    <Link key={item.to} to={item.to} className="text-sm text-[#004AAD]" onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="nv-mobile-group">
              <button type="button" className="nv-mobile-label" onClick={() => setMobileLearn((v) => !v)}>
                Learn {mobileLearn ? '\u2212' : '+'}
              </button>
              {mobileLearn && (
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  {learnMenu.map((item) => (
                    <Link key={item.to} to={item.to} className="text-sm text-[#004AAD]" onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {tailLinks.map((l) => (
              <Link
                key={l.to}
                className={`text-sm font-medium transition-colors ${isActive(l.to) ? 'text-[#FEB344]' : 'text-[#004AAD] hover:text-[#FEB344]'}`}
                to={l.to}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/donate" onClick={() => setOpen(false)}>
              <button className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-10 bg-[#004AAD] hover:bg-transparent hover:border-[#FEB344] hover:text-[#FEB344] text-white border-2 border-[#3A86FF] py-3 px-6 rounded-md">
                Donate Now
              </button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
