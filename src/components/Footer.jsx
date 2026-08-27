import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[hsl(213,100%,34%)] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link className="inline-block mb-6" to="/">
              <img src="/assets/logo-white-BaS5B_xN.svg" alt="n+1 Social Foundation" className="h-16 w-auto" />
            </Link>
            <p className="text-white/90 leading-relaxed text-xs sm:text-sm lg:text-sm font-sarabun font-medium">
              Creating better tomorrow through literacy, innovation, and community-led change.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg lg:text-lg text-white mb-6 font-sarabun">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm lg:text-sm block  font-sarabun" to="/about">About Us</Link></li>
              <li><Link className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm lg:text-sm block  font-sarabun" to="/programs">Programs</Link></li>
              <li><Link className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm lg:text-sm block  font-sarabun" to="/get-involved">Get Involved</Link></li>
              <li><Link className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm lg:text-sm block  font-sarabun" to="/resources">Resources</Link></li>
              <li><Link className="text-white/90 hover:text-white transition-colors text-xs sm:text-sm lg:text-sm block  font-sarabun" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-white mb-6">Our Programs</h4>
            <ul className="space-y-3">
              <li><Link className="text-white/90 hover:text-white transition-colors text-sm block" to="/programs#read-a-story">Read-a-Story</Link></li>
              <li><Link className="text-white/90 hover:text-white transition-colors text-sm block" to="/programs#solve-with-bharat">Solve-With-Bharat</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg text-white mb-6">Contact</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5 text-white/90 flex-shrink-0 mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <a href="mailto:info@nplusone.org.in" className="text-white/90 hover:text-white transition-colors text-sm">info@nplusone.org.in</a>
              </div>
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-5 w-5 text-white/90 flex-shrink-0 mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+917083490865" className="text-white/90 hover:text-white transition-colors text-sm">+91 70834 90865</a>
              </div>
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-5 w-5 text-white/90 flex-shrink-0 mt-0.5"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span className="text-white/90 text-sm">Pune, Maharashtra, India</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors flex items-center justify-center" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram h-4 w-4 text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
              <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors flex items-center justify-center" aria-label="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook h-4 w-4 text-white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors flex items-center justify-center" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin h-4 w-4 text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors flex items-center justify-center" aria-label="YouTube"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube h-4 w-4 text-white"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-white/80 text-sm">© 2025 n+1 Social Foundation. All rights reserved.</p>
            <p className="text-white/80 text-sm">Powered by <a href="https://aidenai.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Aiden AI</a> — Designed to drive impact.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
