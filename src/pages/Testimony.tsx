import { Star, Quote, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import smilingStudent from "@/assets/gallery/smiling-student-notebook.jpg";
import schoolGroup from "@/assets/gallery/school-group-photo.jpg";

const Testimony = () => {
  const testimonies = [
    {
      name: "Priya Sharma",
      role: "Volunteer, Read-a-story Program",
      location: "Mumbai, Maharashtra",
      content: "Working with Aiden's Read-a-story program has been incredibly fulfilling. Seeing the children's faces light up when they understand a story is priceless. The training provided was excellent, and the support from the team makes volunteering a joy.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Community Facilitator, Solve-with-Bharat",
      location: "Pune, Maharashtra",
      content: "As a local facilitator, I've witnessed firsthand how this program transforms children's relationship with mathematics. The app-based tools combined with personal attention helps children build strong foundations. It's amazing to see kids who once feared math now solving problems with confidence.",
      rating: 5
    },
    {
      name: "Meera Patel",
      role: "Parent",
      location: "Rural Gujarat",
      content: "My daughter was struggling with basic math operations. After joining the Solve-with-Bharat program, her confidence has improved tremendously. She now helps her younger brother with his homework. Thank you Aiden for bringing such quality education to our community.",
      rating: 5
    },
    {
      name: "Ankit Verma",
      role: "School Principal",
      location: "Delhi",
      content: "Aiden's programs have made a significant impact in our school. The Read-a-story sessions have improved English comprehension among our students, and the math program has helped bridge learning gaps. The volunteers are well-trained and passionate about education.",
      rating: 5
    },
    {
      name: "Shreya Joshi",
      role: "Volunteer Coordinator",
      location: "Bangalore, Karnataka",
      content: "I've been coordinating volunteers for over 2 years now. What I love most about Aiden is their systematic approach to training and their genuine care for both volunteers and beneficiaries. The impact reports we receive show real progress in children's learning outcomes.",
      rating: 5
    },
    {
      name: "Arjun Das",
      role: "Student, Age 12",
      location: "Kolkata, West Bengal",
      content: "I love when the volunteers come to read stories with us. They make English fun and easy to understand. Now I can read simple books by myself and I want to become a teacher like them when I grow up.",
      rating: 5
    }
  ];

  const stats = [
    { label: "Happy Volunteers", value: "500+", icon: Users },
    { label: "Satisfied Parents", value: "2,000+", icon: Users },
    { label: "Success Stories", value: "1,200+", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={smilingStudent} 
              alt="Smiling student with notebook" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
          
          {/* Wave Decoration at Bottom */}
          <WaveDecoration position="bottom" />
          
          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-dm-serif font-normal leading-tight text-white animate-fade-in">
                One <span className="italic font-dm-serif">Voice</span>. One <span className="italic font-dm-serif">Impact</span>. One <span className="italic font-dm-serif">Community</span>.
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                Hear from volunteers, parents, and students whose lives have been touched by our educational programs
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-secondary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonies */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-dm-serif font-normal mb-4 text-[#004AAD]">What People Say About Us</h2>
              <p className="text-[#494949] max-w-2xl mx-auto  font-medium font-sarabun">
                Real stories from real people who have experienced the impact of our programs firsthand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonies.map((testimony, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <Quote className="h-8 w-8 text-primary/20 mr-2" />
                      <div className="flex">
                        {[...Array(testimony.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                      "{testimony.content}"
                    </p>
                    
                    <div className="mt-auto">
                      <div className="font-semibold text-foreground">{testimony.name}</div>
                      <div className="text-sm text-primary font-medium">{testimony.role}</div>
                      <div className="text-sm text-muted-foreground">{testimony.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Create Your Own Success Story?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of volunteers, parents, and educators who are making a difference in children's lives. Your story could be the next one we feature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-involved">
                  <Button className="px-8 py-3 bg-[#004AAD] text-white hover:bg-[#003d91] transition-colors duration-200">
                    Get Involved Today
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="px-8 py-3 border-2 border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white transition-colors duration-200">
                    Share Your Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimony;