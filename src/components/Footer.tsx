import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoWhite from "@/assets/logo-white.svg";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "Resources", href: "/resources" },
  ];

  const programs = [
    { name: "Read-a-story", href: "/programs" },
    { name: "Solve-With-Bharat", href: "/programs" },
  ];

  return (
    <footer className="relative bg-[hsl(213,100%,34%)] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img 
                src={logoWhite} 
                alt="n+1 Social Foundation" 
                className="h-16 w-auto"
              />
            </Link>
            
            <p className="text-white/90 leading-relaxed text-xs sm:text-sm lg:text-sm font-sarabun font-medium">
              Creating better tomorrow through literacy, innovation, and community-led change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg lg:text-lg text-white mb-6 font-sarabun">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm lg:text-sm block  font-sarabun"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link 
                    to={program.href}
                    className="text-white/90 hover:text-white transition-colors text-sm block"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg text-white mb-6">Contact</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@nplusone.org.in" className="text-white/90 hover:text-white transition-colors text-sm">
                  info@nplusone.org.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">+91 70834 90865</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/90 flex-shrink-0 mt-0.5" />
                <span className="text-white/90 text-sm">"TORAN" Building, Flat No.102, Plot No.15, CTS No.1336, Sr.No.132/2+3, Gulmohar Park, Aundh, PUNE: 411007</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-white/80 text-sm">
              © 2025 n+1 Social Foundation. All rights reserved.
            </p>
            <p className="text-white/80 text-sm">
              CIN : U80904PN2021NPL200117
            </p>
            <p className="text-white/80 text-sm">
              Powered by Aiden AI — Designed to drive impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;