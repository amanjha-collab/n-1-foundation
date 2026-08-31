import { useState } from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
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
            {links.map((l) => (
              <Link
                key={l.to}
                className="text-sm font-medium transition-colors hover:text-[#FEB344] text-[#004AAD]"
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
            {links.map((l) => (
              <Link
                key={l.to}
                className="text-sm font-medium transition-colors hover:text-[#FEB344] text-[#004AAD]"
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
