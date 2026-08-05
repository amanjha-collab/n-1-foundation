import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import WaveDecoration from "./WaveDecoration";

const GetInvolvedSection = () => {
  return (
    <section className="relative pt-20 pb-20 bg-[#3A86FF] overflow-hidden">
      <WaveDecoration position="top" />
      {/* <WaveDecoration position="bottom" /> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center  max-w-5xl mx-auto">
          <div className="flex justify-center">
            <div>
              <Heart className="h-16 w-16 sm:h-20 sm:w-20 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[55px] lg:leading-[80px] font-dm-serif font-normal text-[#FDFDFF]">
            Be Part of the Change
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/95 max-w-5xl mx-auto leading-relaxed font-sarabun">
            Every story read, every problem solved, every hour volunteered creates ripples of transformation
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 font-poppins">
            <Link to="/donate">
              <Button size="lg" className="bg-[#FB5607] border-2  border-[#FF7330] text-white hover:bg-primary/90 shadow-xl text-base px-10 py-6 rounded-lg font-medium">
                Support Our Mission
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-2 border-[#3A86FF] text-white hover:bg-white hover:text-secondary shadow-xl text-base px-10 py-6 rounded-lg font-medium bg-[#004AAD]">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;