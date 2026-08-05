import { Link } from "react-router-dom";
import { BookOpen, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import readStoryImg from "@/assets/gallery/volunteer-teaching.jpg";
import solveMathImg from "@/assets/gallery/students-learning.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Read-a-story",
      description: "A volunteer-driven literacy initiative that brings books and imagination to children from underserved communities.",
      image: readStoryImg,
      stats: "3,000+ children engaged",
      color: "primary",
      borderColor: "border-primary"
    },
    {
      icon: Calculator,
      title: "Solve-with-Bharat",
      description: "Strengthening math foundations in tribal schools through practice-based learning.",
      image: solveMathImg,
      stats: "9,000+ students impacted",
      color: "secondary",
      borderColor: "border-secondary"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[55px] lg:leading-[80px] font-dm-serif font-normal text-[#004AAD]">
            Our <span className="italic">Programs</span>
          </h2>
          <p className="text-2xl text-[#494949] max-w-3xl mx-auto font-sarabun font-medium">
            Empowering communities through education and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg rounded-3xl overflow-hidden bg-white`}>


              <CardContent className="p-6 space-y-6 font-poppins">
                <div className="flex items-center gap-3">

                  <h3 className="text-2xl font-semibold">{program.title}</h3>
                </div>

                <p className="text-sm leading-relaxed text-[#494949]">
                  {program.description}
                </p>

                <div className="flex flex-col">
                  <span className={`text-sm font-medium`}>
                    {program.stats}
                  </span>

                </div>
                <div>
                  <Link to="/programs">
                    <Button
                      variant="link"
                      className={`text-sm p-4 h-auto font-medium text-[#004AAD]  rounded-base border-1 border-solid w-full`}
                      style={{
                        borderWidth: '1px',
                        borderImageSlice: 1,
                        borderImageSource: `linear-gradient(0deg,#C0C0C0,#C0C0C0),
                        linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),
                        linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),
                        linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),
                        linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))`,
                      }}
                    >
                      Learn More <span className="w-4 h-4 flex items-center justify-center  rounded">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-3xl"
                />
                <div className="absolute -top-[30px] -left-[40px] right-0 bottom-0 bg-black/45"></div>
                {/* Icon on top-left */}
                <div className="absolute bottom-5 left-7">
                  <program.icon
                    className={`h-10 w-10 text-white`}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ProgramsSection;