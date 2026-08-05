import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-full-color.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 bg-white border-b border-border z-[99]">
      <nav className="container mx-auto px-4 sm:px-6 2xl:px-[48px] py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="n+1 Social Foundation Logo" 
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 font-poppins">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#FEB344] ${
                  isActive(item.href)
                    ? "text-[#FEB344] border-b-2 border-[#FEB344]"
                    : "text-[#004AAD]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/donate">
              <Button  className="bg-[#004AAD] hover:bg-transparent  hover:border-[#FEB344] hover:text-[#FEB344] text-white border-2 border-[#3A86FF] py-3 px-6 rounded-md">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-[#004AAD]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/donate">
                <Button size="sm" className="w-fit bg-primary hover:bg-primary/90 text-white">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;