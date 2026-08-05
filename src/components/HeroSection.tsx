import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WaveDecoration from "./WaveDecoration";
import heroImage from "@/assets/hero-home.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[84vh] flex items-center lg:items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students learning together"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute bottom-0 start-0 w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_23.42%,rgba(0,0,0,0.89)_89%)] z-1"></div>
      
      {/* Wave Decoration at Bottom */}
      <WaveDecoration position="bottom" />

      
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-16 lg:mb-40">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-dm-serif font-normal leading-tight text-white animate-fade-in">
            One <span className="italic">Story</span>. One <span className="italic">Idea</span>. One <span className="italic">Action</span>.
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-5xl mx-auto font-sarabun">
            Creating a Better Tomorrow through literacy, innovation, and community-led change
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/get-involved">
              <Button size="lg" className="bg-[#004AAD] text-white hover:bg-[#003d91] shadow-xl text-sm px-6 py-4 rounded-lg font-medium border-2 border-[#3A86FF] hover:border-white">
                Get Involved
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" className="bg-[#00AD9B] text-white hover:bg-[#008f7e] shadow-xl text-sm px-6 py-4 rounded-lg font-medium border-2 border-[#82FF9E] hover:border-white">
                Explore Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;