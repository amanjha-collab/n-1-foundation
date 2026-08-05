import { Heart, Users, Handshake, GraduationCap, BookOpen, UserCheck, Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, Briefcase, Search, FileEdit, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import studentPhone from "@/assets/gallery/student-phone-learning.jpg";
import smilingStudents from "@/assets/gallery/GetInvolvedImage.jpg";
import studentsOutdoor from "@/assets/gallery/students-outdoor-learning.jpg";
import volunteerTeaching from "@/assets/gallery/GroupImage.jpg";
import groupStudy from "@/assets/gallery/group-study.jpg";
import donateChildren from "@/assets/donate-children.jpg";
import yellowVector from "@/assets/Vector1.png";
import greenVector from "@/assets/Vector.png";
const GetInvolved = () => {
  const [showDonateDialog, setShowDonateDialog] = useState(false);

  return <div className="min-h-screen bg-background">
    <Dialog open={showDonateDialog} onOpenChange={setShowDonateDialog}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-dm-serif text-[#FEB344]">Thank you for your willingness to give!</DialogTitle>
          <DialogDescription className="text-base text-gray-700 mt-2">
            Donation options will go live soon. Our 80G certification is currently in progress.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    <Header />
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[84vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={smilingStudents} alt="Smiling students with notebook" className="w-full h-full object-cover" />
        </div>

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/40 z-[1]"></div> */}

        {/* Wave Decoration at Bottom */}
        <WaveDecoration position="bottom" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 sm:pt-28 lg:pt-36">
          <div className="max-w-4xl mx-auto text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium font-dm-serif leading-tight text-white animate-fade-in">
              Get Involved
            </h1>

            <p className="text-md sm:text-lg lg:text-xl text-white leading-relaxed max-w-5xl mx-auto">
              Join us in creating transformative change through education and community action
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="https://www.readastory.org.in/signup" target="_blank" rel="noopener noreferrer">
                 <Button size="lg" className="bg-[#004AAD] text-white hover:bg-[#003d91] shadow-xl text-sm px-6 py-4 rounded-lg font-medium border-2 border-[#3A86FF] hover:border-white">
                  Get Involved
                </Button>
              </a>
              <Link to="/programs">
                <Button size="lg" className="bg-[#00AD9B] text-white hover:bg-[#008f7e] shadow-xl text-sm px-6 py-4 rounded-lg font-medium border-2 border-[#82FF9E] hover:border-white">
                  Explore Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#004AAD] font-dm-serif tracking-wide">
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Be the change. Share your time and skills to empower children and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16 mx-14">
            {/* Reading Sessions */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#004AAD]" />
                  <CardTitle className="text-[#004AAD] text-base font-semibold tracking-tight leading-snug whitespace-nowrap">
                    Reading Sessions For Read-a-story
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-left text-gray-600 ml-4">
                  Conduct One-On-One Or Small Group Reading Sessions With Children
                </CardDescription>
              </CardContent>
            </Card>

            {/* Evaluation Support */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#004AAD]" />
                  <CardTitle className="text-[#004AAD] text-base font-semibold tracking-tight leading-snug">
                    Evaluation Support
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-left text-gray-600 ml-4">
                  Help Assess Program Impact And Student Progress
                </CardDescription>
              </CardContent>
            </Card>

            {/* Content Creation */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#004AAD]" />
                  <CardTitle className="text-[#004AAD] text-base font-semibold tracking-tight leading-snug">
                    Content Creation
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-left text-gray-600 ml-4">
                  Develop Educational Materials And Resources
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Image with Quote */}
          <div className="relative rounded-2xl overflow-hidden mb-8 max-w-6xl mx-14">
            <img src={volunteerTeaching} alt="Volunteers with children" className="w-full h-[69vh] object-cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <p className="text-white text-2xl  font-medium text-center px-8 max-w-5xl font-poppins whitespace-nowrap pt-80">
                "Our volunteers are not just readers of stories; <span className="italic text-orange-400">they are creators of dreams.</span>"
              </p>
            </div>
          </div>

          {/* Sign up Button */}
          <div className="text-center max-w-6xl mx-14">
            <a href="https://readastory.org.in/signup" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#004AAD] hover:bg-blue-700 text-white px-10 py-6 text-md w-full font-poppins">
                Sign up to Volunteer <ArrowRight className="ml-2 h-5 w-8 mt-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-10 bg-[#FEFBF1]">
        <div className="container px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-bold mb-4">
                <span className="text-[#FEB344] text-4xl sm:text-5xl font-dm-serif">Donate  </span><span className="text-[#FEB344] text-2xl sm:text-3xl font-dm-serif">- </span> <span className="text-gray-900 font-dm-serif text-2xl sm:text-3xl italic tracking-wide">ways to support</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl">
                Your contribution creates lasting impact. Every donation matters.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden flex-1 min-h-[300px]">
              <img src={donateChildren} alt="Children with books" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex flex-col mb-8">

            {/* Donation Cards - 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-white shadow-md hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900">Fund Resources</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Books, Story Kits, & Mobile Phones For Programs
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900">Sponsor Facilitators</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Support Community Facilitator Salaries
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900">Sponsor Transport</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Cycles Or Two-Wheelers For Facilitators
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-gray-900">General Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">
                    Flexible Funding For Program Needs
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            {/* Tax Benefits Banner */}
            <div className="bg-[#EEFFF2] border-2 border-[#82FF9E] rounded-2xl p-6 my-8">
              <p className="text-[#00AD9B] font-semibold text-center text-lg">
                Tax Benefits Available
              </p>
              <p className="text-gray-600 text-center mt-2 text-xs">
                Donations To N+1 Social Foundation Are Eligible For Tax Benefits Under 80G And 12A
              </p>
            </div>

            {/* Donate Button */}
            <div className="text-center">
              <Button size="lg" className="bg-[#004AAD] hover:bg-blue-700 text-white px-12 py-6 text-lg rounded-lg w-full" onClick={() => setShowDonateDialog(true)}>
                Donate Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Career & Internships Section */}
      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <img
    src={yellowVector}
    alt=""
    aria-hidden
    className="absolute -left-12 top-16 -translate-y-1/2 w-48  opacity-90 pointer-events-none"
  />
  <img
    src={greenVector}
    alt=""
    aria-hidden
    className="absolute right-0 top-10 w-56  opacity-90 pointer-events-none"
  />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-14">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Career Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-2xl text-gray-900 mt-3">Careers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-base mb-4">
                  Join us at the intersection of education and social impact. Be part of a mission-driven team working to make learning accessible for all.
                </p>
                <p className="text-gray-600 text-base mb-6">
                  We welcome individuals who are passionate about creating meaningful change through collaboration, innovation, and community engagement.
                </p>
                <Link to="/contact#get-in-touch">
                  <Button className="w-full bg-[#8338EC] hover:bg-purple-700 text-white">
                    View Open Positions
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Internships Card */}
            <Card className="bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-purple-600" />
                <CardTitle className="text-2xl text-gray-900">Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-base mb-4">
                  Gain hands-on experience in the social impact space through mentorship, real-world exposure, and learning opportunities.
                </p>
                <p className="text-gray-600 text-base mb-6">
                  Work alongside a purpose-driven team and contribute to initiatives that make a difference.
                </p>
                <Link to="/contact">
                  <Button className="w-full bg-[#8338EC] hover:bg-purple-700 text-white">
                    Apply for Internships
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner with US Section */}
      <section className="relative py-20 bg-[#3A86FF] overflow-hidden">
        <WaveDecoration position="top" />
        <WaveDecoration position="bottom" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6 max-w-5xl mx-auto">
            <div className="flex justify-center">
            
                <Handshake  className="h-16 w-16 text-white" />
             
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white font-dm-serif">
              Partner with US
            </h2>

            <p className="text-xl text-white/95 max-w-3xl mx-auto">
              Collaborate as a school, corporate, or NGO to expand our impact
            </p>
             <div className="px-4 py-6 bg-[#5697FFC7] rounded-xl w-full">
            <p className="text-md text-white/90 max-w-3xl mx-auto leading-relaxed">
              We work with Z.P. Schools, corporate CSR programs, universities, and NGOs to create sustainable partnerships that amplify our reach and deepen our impact in underserved communities.
            </p>
            </div>

            <div className="pt-6 ">
              <Link to="/contact">
                <Button  className="bg-[#004AAD] hover:bg-blue-600 text-white px-20 py-6 text-lg ">
                  Explore Partnership Opportunities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}

    </main>
    <Footer />
  </div>;
};
export default GetInvolved;