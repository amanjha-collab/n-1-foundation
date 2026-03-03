import { Users, BookOpen, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const ImpactSection = () => {
  const stats = [
    {
      icon: Users,
      value: "12,000+",
      label: "Children Engaged",
      color: "text-orange-500",
    },
    {
      icon: BookOpen,
      value: "30+",
      label: "Collaborations with Educational Institutions",
      color: "text-blue-500",
    },
    {
      icon: Clock,
      value: "54,000+",
      label: "Volunteer Hours to Date",
      color: "text-cyan-500",
    },
    {
      icon: TrendingUp,
      value: "60",
      label: "Youth Employed",
      color: "text-pink-500",
    },
  ];

  return (
    <section className="relative py-12 bg-[#FEFBF1]">
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-14">
        
      </div> */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-0">
                <svg
                  width="721"
                  height="446"
                  viewBox="0 0 721 446"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M55.5868 264.258C67.2367 276.299 79.4962 287.173 92.2557 296.833L91.18 266.854C87.679 263.807 84.2185 260.654 80.8002 257.393L55.5868 264.258Z"
                    fill="#42C3EE"
                  />
                  <path
                    d="M69.6345 246.215C51.2012 226.884 32.4537 207.692 8.93011 194.241C-42.3751 161.967 -95.5767 203.577 -93.4174 257.213C-94.0928 273.275 -92.3849 288.782 -88.643 303.528L-67.1287 297.67C-71.2259 281.3 -72.3312 263.967 -69.7303 246.139C-66.6195 222.883 -53.7722 208.667 -34.025 205.88C-20.0706 203.91 -8.08918 209.668 3.23266 216.977C20.3913 228.054 35.0395 242.151 48.774 257.031C51.0175 259.491 53.2946 261.889 55.5863 264.258L80.7997 257.393C77.0265 253.793 73.2999 250.076 69.6345 246.215Z"
                    fill="#8338EC"
                  />
                  <path
                    d="M441.136 277.704L434.419 253.532C333.564 353.376 194.82 357.046 91.1799 266.854L92.2556 296.833C198.198 377.041 338.117 374.482 441.136 277.704Z"
                    fill="#FFBE0B"
                  />
                  <path
                    d="M633.878 229.224C571.634 171.993 486.05 197.019 433.901 254.118L440.777 278.183C516.358 191.857 614.081 193.18 664.336 306.098C677.769 338.815 672.993 328.021 686.151 361.12L704.526 350.574C687.635 304.752 669.3 261.372 633.878 229.224Z"
                    fill="#FFBE0B"
                  />
                </svg>
              </div>
      <div className="mx-auto max-w-[1284px]">
          <div className="flex">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[55px]  font-dm-serif font-normal  lg:leading-[80px]  text-[#FEB344]">
                Our <span className="italic text-[#FEB344]">Impact</span>
              </h2>
              <p className="text-2xl text-[#494949] max-w-xl font-sarabun font-medium">
                Every number represents a life touched, a story shared, and a
                future brightened
              </p>
              
            </div>

            {/* Right side - Stats Grid */}
            <div className="flex-1 grid grid-cols-2 gap-8 z-50">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 rounded-[18px]  text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white border-0 shadow-lg"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <stat.icon
                      className={`h-[34px] w-[34px] ${stat.color}`}
                      strokeWidth={1.5}
                    />
                    <div className="font-poppins">
                      <p className="text-3xl sm:text-4xl font-semibold text-foreground mb-1">
                        {stat.value}
                      </p>
                      <p className="text-sm text-[#494949] font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default ImpactSection;
