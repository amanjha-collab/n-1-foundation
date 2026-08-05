import { BookOpen, Calculator, ArrowRight, Users, Target, CheckCircle, Award, MapPin, Clock, FileText, Presentation, MessageSquare, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import studentsOutdoor from "@/assets/programs-hero.png";
import threeStudents from "@/assets/gallery/three-students-blackboard.jpg";
import schoolGroup from "@/assets/gallery/school-group-photo.jpg";
import checkTicks from "@/assets/check-ticks.png";
import blueRibbon from "@/assets/blue-ribbon.png";
import pinkRibbon from "@/assets/pink-ribbon.png";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Programs = () => {
  const readAStoryFeatures = [
    "One-on-one reading sessions with trained volunteers",
    "Age-appropriate English storybooks and materials",
    "Interactive storytelling techniques to engage children",
    "Regular progress tracking and feedback",
    "Certificate of contribution for volunteers",
    "Comprehensive Baseline & Endline Assessments for every student"
  ];

  const solveWithBharatFeatures = [
    "Custom math practice app for personalized learning",
    "Paper-based tools for offline practice",
    "Local Community Facilitators from the community",
    "Rigorous Monitoring & Evaluation from IIT Bombay",
    "Focus on mastery of basic operations (+, −, ×, ÷)"
  ];

  const readAStoryImpact = [
    { label: "Reading Sessions Conducted", value: "Thousands", icon: BookOpen },
    { label: "Children Engaged", value: "2,800+", icon: Users },
    { label: "Volunteer Hours", value: "47,000+", icon: Clock },
    { label: "Schools Reached", value: "Multiple Districts", icon: MapPin }
  ];

  const solveWithBharatImpact = [
    { label: "Youth Participants", value: "90+", icon: Users },
    { label: "Z.P. School Students", value: "9,000+", icon: Target },
    { label: "Community Facilitators", value: "Active Program", icon: Award },
    { label: "Implementation Partner", value: "IIT Bombay", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[84vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={studentsOutdoor} 
              alt="Students learning outdoors" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-[1]"></div>
          
          {/* Wave Decoration at Bottom */}
          <WaveDecoration position="bottom" />
          
          {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-38 sm:pt-42 lg:pt-48">
          <div className="max-w-6xl mx-auto text-center space-y-8">

            {/* One-line Title + Subtitle */}
            <h1 className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 
                          text-5xl sm:text-6xl lg:text-7xl font-display font-bold 
                          leading-tight text-yellow-500 animate-fade-in">
              <span>
                One Story. One <span className="italic">Idea</span>. One Action.
              </span>
              <span className="text-lg sm:text-xl lg:text-2xl font-normal text-white/95">
                Our flagship programs combine community-led action with innovative approaches to create lasting educational impact
              </span>
            </h1>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={()=>scrollToSection("read-a-story")}
                className="rounded-xl bg-purple-600 border-2 border-white text-white hover:bg-purple-700 px-8"
              >
                Read-a-story
              </Button>

              <Button
                size="lg"
                onClick={()=>scrollToSection("solve-with-bharat")}
                className="rounded-xl bg-teal-500 border-2 border-teal-800 text-white hover:bg-teal-600 px-8"
              >
                Solve-with-bharat
              </Button>
            </div>

          </div>
        </div>

        </section>

        {/* Read-a-story Program */}
        <section id="read-a-story" className="py-20 bg-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-orange-100">
                  <BookOpen className="h-12 w-12 text-orange-500" strokeWidth={2.5} />
                </div>
              </div>
              <h2 className="text-4xl font-display font-bold mb-4 text-yellow-500">Read-a-story</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A volunteer-driven literacy initiative bringing<br />books and imagination to marginalized children
              </p>
            </div>

            {/* Why It Matters + Action Buttons */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="mt-8">
                <h3 className="text-3xl font-bold text-blue-600 mb-8">Why It Matters?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      Builds <span className="italic text-blue-600 font-medium">imagination</span>, <span className="italic text-blue-600 font-medium">vocabulary</span>, and <span className="italic text-blue-600 font-medium">confidence</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      Creates a <span className="italic text-blue-600 font-medium">joyful reading culture</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg text-gray-700">
                      Provides an <span className="italic text-blue-600 font-medium">opportunity</span> for a <span className="italic text-blue-600 font-medium">better future</span>
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://readastory.org.in/signup" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-lg">
                      Sign Up Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Impact Stats Section */}
              <div className="grid grid-cols-3 gap-6">
                <Card className="text-center shadow-lg bg-white rounded-xl border-0">
                  <CardContent className="pt-2 pb-2">
                    <BookOpen className="h-10 w-10 text-blue-600 mx-auto mb-4" strokeWidth={2} />
                    <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
                    <div className="text-sm text-gray-600">Reading Sessions</div>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg bg-white rounded-xl border-0">
                  <CardContent className="pt-2 pb-2">
                    <MapPin className="h-10 w-10 text-green-600 mx-auto mb-4" strokeWidth={2} />
                    <div className="text-4xl font-bold text-gray-900 mb-2">9,000+</div>
                    <div className="text-sm text-gray-600">Schools Reached</div>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg bg-white rounded-xl border-0 col-span-2">
                  <CardContent className="pt-2 pb-2">
                    <Clock className="h-10 w-10 text-cyan-600 mx-auto mb-4" strokeWidth={2} />
                    <div className="text-4xl font-bold text-gray-900 mb-2">47,000+</div>
                    <div className="text-sm text-gray-600">Volunteer Hours</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Volunteer Journey Section */}
            <div className="bg-white w-[110%] -mx-[7%] py-16">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold mb-2 text-blue-600">Your Journey as a Reading Volunteer</h3>
              </div>
              <Card className="shadow-2xl bg-white border-0 w-[70%] mx-[18%]">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-[#FEB344] mx-auto mb-4 flex items-center justify-center bg-white">
                        <FileText className="h-10 w-10 text-orange-500" strokeWidth={2} />
                      </div>
                      <div className="text-[#FEB344] font-bold text-lg mb-2">01 Sign Up</div>
                      <p className="text-sm text-gray-600">Join a community of change makers passionate about nurturing young readers.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-[#FEB344] mx-auto mb-4 flex items-center justify-center bg-white">
                        <Presentation className="h-10 w-10 text-orange-500" strokeWidth={2} />
                      </div>
                      <div className="text-[#FEB344] font-bold text-lg mb-2">02 Orientation & Training</div>
                      <p className="text-sm text-gray-600">Get familiar with reading techniques, storytelling tools, and our teaching approach.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-[#FEB344] mx-auto mb-4 flex items-center justify-center bg-white">
                        <Users className="h-10 w-10 text-orange-500" strokeWidth={2} />
                      </div>
                      <div className="text-[#FEB344] font-bold text-lg mb-2">03 One-On-One Reading Sessions</div>
                      <p className="text-sm text-gray-600">Get familiar with reading techniques, storytelling tools, and our teaching approach.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-[#905B0D] mx-auto mb-4 flex items-center justify-center bg-white">
                        <MessageSquare className="h-10 w-10 text-[#905B0D]" strokeWidth={2} />
                      </div>
                      <div className="text-[#926218] font-bold text-lg mb-2">04 Feedback Session</div>
                      <p className="text-sm text-gray-600">Share your experiences and help us improve the program for even greater impact.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-[#905B0D] mx-auto mb-4 flex items-center justify-center bg-white">
                        <Award className="h-10 w-10 text-[#905B0D]" strokeWidth={2} />
                      </div>
                      <div className="text-[#926218] font-bold text-lg mb-2">05 Certificate Of Contribution</div>
                      <p className="text-sm text-gray-600">Receive recognition for your commitment and hours of service.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* <div className="bg-amber-50 w-full"><img src={blueRibbon} alt="Blue Ribbon" className="bg-amber-50 w-[25%] max-w-sm mb-10 mx-[10%] mt-2 mb-4 z-50"/></div> */}
        


        {/* Solve-with-Bharat Program */}
        <section id="solve-with-bharat" className="bg-amber-50 pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-blue-100">
                  <Calculator className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h2 className="text-4xl font-display font-bold mb-4 text-blue-600">Solve-with-Bharat</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A practice-based math program ensuring mastery of basic operations (+, −, ×, ÷) for children in under-resourced Zilla Parishad schools. Weak teacher–student ratios leave gaps in basic math skills - we bridge this gap with focused practice and personal support.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              {/* Why It Matters */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-orange-600 mb-6">Why It Matters?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Custom math practice <span className="italic text-orange-600 font-medium">app and paper-based tools</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Local Facilitators provide <span className="italic text-orange-600 font-medium">personalized attention</span>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">
                      Rigorous <span className="italic text-orange-600 font-medium">Monitoring & Evaluation</span> from IIT Bombay
                    </span>
                  </li>
                </ul>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center shadow-lg bg-white">
                  <CardContent className="pt-2 pb-2">
                    <BookOpen className="h-10 w-10 text-blue-600 mx-auto mb-4" strokeWidth={2} />
                    <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Reading Sessions</div>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg bg-white">
                  <CardContent className="pt-2 pb-2">
                    <MapPin className="h-10 w-10 text-green-600 mx-auto mb-4" strokeWidth={2} />
                    <div className="text-3xl font-bold text-gray-900 mb-2">9,000+</div>
                    <div className="text-sm text-muted-foreground">Students Impacted</div>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg bg-white">
                  <CardContent className="pt-2 pb-2">
                    <Clock className="h-10 w-10 text-cyan-600 mx-auto mb-4" strokeWidth={2} />
                    <div className="text-3xl font-bold text-gray-900 mb-2">47,000+</div>
                    <div className="text-sm text-muted-foreground">Volunteer Hours</div>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg bg-white">
                  <CardContent className="pt-2 pb-2">
                    <Users className="h-10 w-10 text-orange-600 mx-auto mb-4" strokeWidth={2} />
                    <div className="text-3xl font-bold text-gray-900 mb-2">90+</div>
                    <div className="text-sm text-muted-foreground">Participants</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Math Mentor Journey Section */}
            <div className="bg-white w-[110%] -mx-[7%] py-16">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold mb-2 text-orange-500">Your Journey as a Math Mentor</h3>
                <p className="text-gray-600">Your path to making an impact</p>
              </div>
              <Card className="shadow-2xl bg-white border-0 w-[70%] mx-[18%]">
                <CardContent className="p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-blue-500 mx-auto mb-4 flex items-center justify-center bg-white">
                        <FileText className="h-10 w-10 text-blue-500" strokeWidth={2} />
                      </div>
                      <div className="text-blue-500 font-bold text-lg mb-2">01 Sign Up</div>
                      <p className="text-sm text-gray-600">Become part of a mission to strengthen foundational math skills in tribal schools.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-blue-500 mx-auto mb-4 flex items-center justify-center bg-white">
                        <Presentation className="h-10 w-10 text-blue-500" strokeWidth={2} />
                      </div>
                      <div className="text-blue-500 font-bold text-lg mb-2">02 Orientation & Training</div>
                      <p className="text-sm text-gray-600">Learn the practice-based model, familiarize yourself with digital and paper tools, and understand student engagement methods.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-blue-500 mx-auto mb-4 flex items-center justify-center bg-white">
                        <Users className="h-10 w-10 text-blue-500" strokeWidth={2} />
                      </div>
                      <div className="text-blue-500 font-bold text-lg mb-2">03 One-On-One Reading Sessions</div>
                      <p className="text-sm text-gray-600">Guide students in solving real problems, ensuring conceptual clarity and confidence.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-[#0F2A4A] mx-auto mb-4 flex items-center justify-center bg-white">
                        <MessageSquare className="h-10 w-10 text-[#0F2A4A]" strokeWidth={2} />
                      </div>
                      <div className="text-[#0F2A4A] font-bold text-lg mb-2">04 Feedback Session</div>
                      <p className="text-sm text-gray-600">Collaborate with facilitators and teachers to measure learning improvements.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-[#0F2A4A] mx-auto mb-4 flex items-center justify-center bg-white">
                        <Award className="h-10 w-10 text-[#0F2A4A]" strokeWidth={2} />
                      </div>
                      <div className="text-[#0F2A4A] font-bold text-lg mb-2">05 Certificate Of Contribution</div>
                      <p className="text-sm text-gray-600">Celebrate your role in transforming learning outcomes in rural India.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

        

        {/* Call to Action Section */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          {/* Decorative curved patterns */}
          <WaveDecoration position="top" />
          <img src={pinkRibbon} alt="Pink Ribbon" className="absolute left-0 top-1/2 -translate-y-1/2 w-38 h-38" />
          {/* <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48" viewBox="0 0 200 200">
            <path d="M 0,100 Q 50,50 100,100 T 200,100" fill="none" stroke="#ef4444" strokeWidth="3" opacity="0.3"/>
            <path d="M 0,120 Q 50,70 100,120 T 200,120" fill="none" stroke="#ec4899" strokeWidth="3" opacity="0.3"/>
            <path d="M 0,140 Q 50,90 100,140 T 200,140" fill="none" stroke="#f97316" strokeWidth="3" opacity="0.3"/>
          </svg> */}
          {/* <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48" viewBox="0 0 200 200">
            <path d="M 0,100 Q 50,50 100,100 T 200,100" fill="none" stroke="#10b981" strokeWidth="3" opacity="0.3"/>
            <path d="M 0,120 Q 50,70 100,120 T 200,120" fill="none" stroke="#14b8a6" strokeWidth="3" opacity="0.3"/>
            <path d="M 0,140 Q 50,90 100,140 T 200,140" fill="none" stroke="#22c55e" strokeWidth="3" opacity="0.3"/>
          </svg> */}
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-50">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Be Part of the Change
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Join our mission to transform education and empower communities. Whether you want to volunteer, partner, or support our programs, there's a place for you in our journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-sm">
                  Volunteer With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-[#004AAD] border-2 border-[#3A86FF] text-white hover:bg-white hover:text-blue-600">
                  Collaborate With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
