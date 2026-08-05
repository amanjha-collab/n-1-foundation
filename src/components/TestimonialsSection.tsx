import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Volunteer",
      content: "Working with Read-a-story has been incredibly fulfilling. Seeing children's faces light up when they understand a story is priceless.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Community Facilitator",
      content: "This program transforms children's relationship with mathematics. It's amazing to see kids who once feared math now solving problems with confidence.",
      rating: 5
    },
    {
      name: "Meera Patel",
      role: "Parent",
      content: "My daughter was struggling with basic math. After joining Solve-with-Bharat, her confidence has improved tremendously.",
      rating: 5
    }
  ];

  return (
    <section className=" pt-12 pb-20 bg-gradient-to-br from-blue-50/30 via-white to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[55px]  lg:leading-[80px] font-dm-serif font-normal text-[#004AAD]">
            What People Say About Us
          </h2>
          <p className="text-2xl text-[#494949] max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto font-medium font-sarabun">
            Real stories from real people who have experienced the impact firsthand
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg  flex flex-col">
              <CardContent className="flex flex-col flex-1 px-8 py-6 font-poppins">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-primary/30 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FBB040] text-[#FBB040]" />
                    ))}
                  </div>
                </div>
                
                <p className="text-[#425466] mb-6 leading-relaxed font-poppins text-base  flex-1">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-5">
                  <div className="font-semibold text-[#004AAD] text-[14px]">{testimonial.name}</div>
                  <div className="text-xs text-[#004AAD] font-normal">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;