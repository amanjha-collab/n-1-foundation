import { Users, BookOpen, Info } from "lucide-react";
import { Card } from "@/components/ui/card";
import classroomTeaching from "@/assets/classroom-teaching.png";

const CommunityImpactSection = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Volunteers",
      color: "text-[#FB5607]",
    },
    {
      icon: BookOpen,
      value: "2,000+",
      label: "Satisfied Parents",
      color: "text-[#3A86FF]",
    },
    {
      icon: Info,
      value: "1,200+",
      label: "Success Stories",
      color: "text-[#00AD9B]",
    },
  ];

  return (
    <section className="relative pt-20 pb-14 bg-[#FEFBF1] overflow-hidden">
      {/* Decorative wave - left side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none">
        {/* <svg viewBox="0 0 100 400" className="h-full w-full">
          <path
            d="M 0,200 Q 50,150 50,100 T 50,0"
            fill="none"
            stroke="#F7A71B"
            strokeWidth="8"
            opacity="0.3"
          />
          <path
            d="M 0,250 Q 50,200 50,150 T 50,50"
            fill="none"
            stroke="#FF6B6B"
            strokeWidth="8"
            opacity="0.3"
          />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width="172"
          // height="393"
          viewBox="0 0 172 393"
          fill="none"
          className="h-[220px] w-auto xl:h-[263px]"
        >
          <path
            d="M167.383 282.846C145.562 272.59 122.545 265.347 98.3468 262.991C97.2655 262.871 96.5111 263.076 95.977 263.639C95.4976 264.145 95.2613 264.893 95.0213 265.587L95.0196 265.594L95.0169 265.601C87.0246 291.034 75.5483 312.342 62.1604 329.746L48.2519 319.729C58.7773 305.869 67.3398 290.339 74.4302 273.593C75.5927 270.848 76.4619 268.742 76.9122 267.154C77.3516 265.605 77.4552 264.35 76.8028 263.472C76.475 263.031 75.9958 262.741 75.4126 262.55C74.8333 262.36 74.1208 262.258 73.2831 262.209C71.6107 262.112 69.3166 262.224 66.3373 262.381L66.3217 262.382C41.771 264.433 15.7172 269.502 -7.95752 279.243L-23.5997 267.978C8.66732 252.577 46.1344 245.992 80.8098 245.58C82.0736 245.593 82.9358 245.306 83.5136 244.663C84.0581 244.057 84.2702 243.208 84.4573 242.346L84.4572 242.345C95.3578 193.362 90.599 151.269 73.1682 115.111C55.7809 79.0437 25.8051 48.9232 -13.717 23.7627L-10.9971 7.16518C25.1202 29.1617 55.3767 52.9915 76.0948 84.4658C96.9251 116.111 108.142 155.525 105.916 208.661C104.624 224.374 102.768 233.517 101.954 238.981C101.552 241.682 101.387 243.578 101.74 244.908C101.923 245.598 102.249 246.152 102.753 246.588C103.248 247.015 103.885 247.303 104.649 247.519C106.155 247.946 108.337 248.139 111.295 248.455C114.278 248.774 118.122 249.224 123.033 250.157C132.805 252.014 146.824 255.793 166.684 264.289L167.383 282.846Z"
            fill="#FB5607"
            stroke="#004AAD"
          />
          <path
            d="M61.5489 330.54C40.384 357.749 14.5331 375.28 -9.91116 383.946C-34.3274 392.602 -57.2757 392.393 -72.7608 384.247L-69.6552 365.282C-64.8693 369.761 -57.8716 372.791 -48.959 373.863C-32.6303 375.828 -17.4814 371.553 -3.35044 364.008C17.5159 352.868 34.1717 338.055 47.6444 320.524L61.5489 330.54Z"
            fill="#FF006E"
            stroke="#004AAD"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[75%_25%]  gap-8 items-stretch max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-full">
              <img
                src={classroomTeaching}
                alt="Teacher interacting with children in classroom"
                className="w-full object-cover h-full"
              />
            </div>
          </div>

          {/* Stats Section */}
          <div className="order-1 lg:order-2 space-y-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 rounded-[18px] shadow-card"
              >
                <div className="flex items-center flex-col  justify-center">
                  <div className={`mb-4 ${stat.color}`}>
                    <stat.icon className="h-10 w-10" />
                  </div>
                  <div className="font-poppins  text-center">
                    <div className="text-[32px] font-semibold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[#494949] font-normal text-sm">
                      {stat.label}
                    </div>
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

export default CommunityImpactSection;
