import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Shield,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import rahulImg from "@/assets/team/rahul.jpg";
import amodImg from "@/assets/team/Amod.png";
import gauriImg from "@/assets/team/Gauri.png";
import aboutHero from "@/assets/about-hero.png";
import butterflyLifecycle from "@/assets/butterfly-lifecycle.png";
import logo from "@/assets/logo-short.png";
import teachingSession from "@/assets/gallery/teaching-session.jpg";
import classroomStudents from "@/assets/gallery/classroom-students.jpg";
import studentsLearning from "@/assets/gallery/students-learning.jpg";
import groupStudy from "@/assets/gallery/group-study.jpg";
import volunteerTeaching from "@/assets/gallery/volunteer-teaching.jpg";
const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empathy",
      description:
        "Listening and responding to community needs with compassion and understanding.",
    },
    {
      icon: Target,
      title: "Innovation",
      description:
        "Designing simple, scalable solutions that create lasting impact.",
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Accountability through open reports, audits, and clear communication.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Building partnerships for sustained impact across communities.",
    },
  ];
  const recognitions = [
    "Recognized by State Education Boards for literacy promotion",
    "Featured at CSR forums for innovative volunteer-driven models",
    "Community appreciation awards from schools and local bodies",
  ];
  const teamMembers = [
  
    {
      name: "Amod Joshi",
      image: amodImg,
      initials: "AJ",
    },
      {
      name: "Rahul Pathak",
      image: rahulImg,
      initials: "RP",
    },
    {
      name: "Gauri Mehendale",
      image: gauriImg,
      initials: "GM",
    },
    {
      name: "Saarang Rajguru",
      image: null,
      initials: "SR",
    },
  
    ];
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[84vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={aboutHero}
              alt="Students with books"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-[1]"></div>

          {/* Wave Decoration at Bottom */}
          <WaveDecoration position="bottom" />

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-dm-serif font-normal leading-tight text-white animate-fade-in">
                About US
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-5xl mx-auto font-sarabun">
                The n+1 Social Foundation is a registered non-profit committed
                to transforming lives through literacy, innovation, and
                community-led change
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/get-involved">
                  <Button size="lg" className="bg-[#004AAD] hover:bg-[#003a8c] text-white px-8 rounded-lg">
                    Get Involved
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 rounded-lg">
                    Explore Our Programs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="pt-12 pb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mx-auto max-w-6xl">
              <h2 className="text-3xl sm:text-4xl lg:text-[55px]  lg:leading-[80px] font-dm-serif font-normal text-[#004AAD]">
                Who We Are:{" "}
                <img src={logo} alt="n+1" className="h-12 inline-block" />
              </h2>
              <p className="text-2xl text-[#494949] font-sarabun font-medium">
                The n+1 Social Foundation is a registered non-profit committed
                to transforming lives through literacy, innovation, and
                community-led change. We believe that small, consistent efforts
                multiply into transformative change.
              </p>
              <p className="text-2xl text-[#494949] font-sarabun font-medium mt-1">
                Through our flagship programs Read-a-Story and
                Solve-with-Bharat, we empower children to learn joyfully and
                youth to be actively involved, ensuring that education and
                community-led action become powerful engines of nation-building.
              </p>
            </div>
          </div>
        </section>

        {/* Butterfly Lifecycle */}
        <section className="">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto overflow-hidden">
              <img
                src={butterflyLifecycle}
                alt="Transforming Lives Through Literacy - Butterfly lifecycle showing educational transformation"
                className="block w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="pt-8 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto ">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="shadow-lg rounded-3xl">
                  <CardHeader className="p-8 pb-6">
                    <div className="flex items-start flex-col gap-2">
                      <Eye className="h-8 w-8 text-primary" />
                      <CardTitle className="text-base xl:text-xl 2xl:text-2xl [min-width:1728px]:text-3xl">
                        Our Vision
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8  pt-0">
                    <p className="text-[clamp(13px,0.92vw,16px)]  font-poppins leading-relaxed text-black">
                      A society where every child has access to joyful learning,
                      and every young mind has the opportunity to better shape
                      their future.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg rounded-3xl">
                  <CardHeader className="p-8 pb-6">
                    <div className="flex items-start flex-col gap-2">
                      <Target className="h-8 w-8 text-secondary" />
                      <CardTitle className="text-base xl:text-xl 2xl:text-2xl [min-width:1728px]:text-3xl">
                        Our Mission
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 space-y-4">
                    <ul className="space-y-3 text-black text-[clamp(13px,0.92vw,16px)] font-poppins list-disc list-inside pl-3">
                      <li className="flex items-start  [display:list-item]">
                        {/* <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span> */}
                        Bridge literacy gaps through volunteer and community
                        involvement
                      </li>
                      <li className="flex items-start [display:list-item]">
                        {/* <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span> */}
                        Inspire youth to design solutions for rural challenges
                      </li>
                      <li className="flex items-start [display:list-item]">
                        {/* <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span> */}
                        Build ecosystems of empathy, innovation, and
                        partnerships
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact in Action - Full Width Banner Style */}

        {/* Meet The Team */}
        <section className="pt-16 pb-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-[55px]  lg:leading-[80px] font-dm-serif font-normal text-[#004AAD]">
                Meet The Team
              </h2>
              <p className="text-2xl text-[#494949]  font-sarabun font-medium">
                People behind n+1 Social Foundation
              </p>
            </div>

            <div
              className="grid  grid-cols-1 
  sm:grid-cols-2 
  lg:grid-cols-4 
  2xl:grid-cols-4 gap-8 max-w-6xl mx-auto"
            >
              {teamMembers.map((member, index) => {
                // Alternate gradient colors: blue and orange
                const gradientColor =
                  index % 2 === 0
                    ? "bg-gradient-to-t from-[#004EAD] to-transparent"
                    : "bg-gradient-to-t from-[#F1A826] to-transparent";
                return (
                  <div key={index} className="group">
                    <div className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[3/4]">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover grayscale"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-4xl font-semibold text-gray-500">{member.initials}</span>
                        </div>
                      )}
                      {/* Gradient overlay at bottom */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${gradientColor} pt-12 pb-4 px-4`}
                      >
                        <h3 className="text-white font-semibold text-center text-[clamp(20px,1.4vw,28px)]">
                          {member.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-12 bg-[#FEFBF1]">
          {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8"> */}
            <div className="mx-auto max-w-[1284px] flex gap-[80px]">
              <div className="mb-16 pr-12">
                <h2 className="text-3xl sm:text-4xl lg:text-[55px] lg:leading-[80px] font-dm-serif font-normal">
                  <span className="text-[#FEB344]">Our Core </span>
                  <span className="text-[#FEB344] italic">Values</span>
                </h2>
                <p className="text-[#494949] font-sarabun text-2xl font-medium">
                  The principles that guide everything we do
                </p>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-8">
                {/* Empathy */}
                <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-[10px]">
                      <Heart className="h-[32px] w-[32px] text-pink-500" />
                    </div>
                    <CardTitle className="text-[24px] xl:text-[26px] 2xl:text-[28px] font-semibold text-black">
                      Empathy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center font-poppins ">
                    <p className="text-[#494949] font-poppins text-xs xl:text-[13px] 2xl:text-sm">
                      Listening And Responding To Community Needs With
                      Compassion And Understanding.
                    </p>
                  </CardContent>
                </Card>

                {/* Innovation */}
                <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-[10px]">
                      <Sparkles className="h-[28px] w-[28px] text-blue-500" />
                    </div>
                    <CardTitle className="text-[28px] font-semibold text-black">
                      Innovation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center font-poppins ">
                    <p className="text-[#494949] font-poppins text-sm">
                      Designing Simple, Scalable Solutions That Create Lasting
                      Impact.
                    </p>
                  </CardContent>
                </Card>

                {/* Transparency */}
                <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-[10px]">
                      <Shield className="h-[32px] w-[32px] text-teal-500" />
                    </div>
                    <CardTitle className="text-[28px] font-semibold text-black">
                      Transparency
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center font-poppins">
                    <p className="text-[#494949] font-poppins text-sm">
                      Accountability Through Open Reports, Audits, And Honest
                    </p>
                  </CardContent>
                </Card>

                {/* Collaboration */}
                <Card className="bg-white hover:shadow-xl transition-all duration-300 border-none shadow-md">
                  <CardHeader className="text-center pb-2">
                    <div className="flex justify-center mb-[10px]">
                      <UserRound className="h-[34px] w-[34px] text-orange-500" />
                    </div>
                    <CardTitle className="text-[28px] font-semibold text-black">
                      Collaboration
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center font-poppins">
                    <p className="text-[#494949] font-poppins text-sm">
                      Building Partnerships For Sustained, Community-Driven
                      Change.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          {/* </div> */}
        </section>

        {/* Awards & Recognition + Legal */}
        <section className="relative py-20  flex items-center bg-[#3A86FF] overflow-hidden">
          <WaveDecoration position="top" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center my-12">
          
                  <svg
                 className="w-20 h-20 text-white"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Awards & Recognition"
                  >
                    <path
                      d="M18.6489 29.1291C18.6489 34.7329 20.875 40.1072 24.8374 44.0697C28.7999 48.0321 34.1742 50.2582 39.778 50.2582C45.3818 50.2582 50.7561 48.0321 54.7185 44.0697C58.681 40.1072 60.9071 34.7329 60.9071 29.1291C60.9071 23.5253 58.681 18.1511 54.7185 14.1886C50.7561 10.2261 45.3818 8 39.778 8C34.1742 8 28.7999 10.2261 24.8374 14.1886C20.875 18.1511 18.6489 23.5253 18.6489 29.1291Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39.778 50.2579L51.7512 70.9997L57.3786 59.6146L70.049 60.4316L58.0759 39.6934M21.4732 39.6934L9.5 60.4351L22.1704 59.6146L27.7978 70.9962L39.771 50.2579"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                    <svg
                   className="w-20 h-20 text-white"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img" aria-label="Legal and financial transparency"
                  >
                    <path
                      d="M38.61 40.8897C42.1267 44.4063 46.76 47.9797 46.76 47.9797L53.11 41.6297C53.11 41.6297 49.5367 36.9963 46.02 33.4797C42.5033 29.963 37.87 26.3897 37.87 26.3897L31.52 32.7397C31.52 32.7397 35.0933 37.373 38.61 40.8897ZM38.61 40.8897L27.5 51.9997M54.1667 40.5697L45.7 49.0363M38.9333 25.333L30.4667 33.7997"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M70.5 37.61V27.9333C70.5 22.4667 70.5 19.7333 69.1533 17.95C67.8067 16.1667 64.76 15.3033 58.67 13.57C54.9968 12.515 51.4005 11.2086 47.9067 9.66C43.91 7.88667 41.9133 7 40.5 7C39.0867 7 37.09 7.88667 33.0933 9.66C30.16 10.96 26.4933 12.3867 22.33 13.57C16.24 15.3033 13.1967 16.17 11.8467 17.95C10.5 19.7333 10.5 22.4667 10.5 27.9333V37.61C10.5 56.36 27.3767 67.61 35.8133 72.0633C37.8367 73.13 38.8467 73.6667 40.5 73.6667C42.1533 73.6667 43.1633 73.1333 45.1867 72.0667C53.6233 67.6067 70.5 56.36 70.5 37.61Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                
          </div>
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Awards & Recognition Card */}
              <div className="bg-[#5697FFC7] border-[1px] border-[#80C6F9] rounded-3xl p-8 shadow-xl text-white">
                

                <h2 className="text-base xl:text-xl 2xl:text-2xl [min-width:1728px]:text-3xl font-semibold mb-6">
                  Awards & Recognition
                </h2>
                <ul
                  className="space-y-2 font-poppins  text-[clamp(13px,0.92vw,16px)] ml-4 list-disc list-outside
               marker:content-['✓']  marker:font-medium"
                >
                  <li className="flex items-start [display:list-item]">
                    {/* <span className="mr-3 mt-1 flex-shrink-0">✓</span> */}
                    <span className="pl-2  text-xs xl:text-[13px] 2xl:text-sm font-medium">
                      Recognized By State Education Boards For Literacy
                      Promotion
                    </span>
                  </li>
                  <li className="flex items-start [display:list-item]">
                    {/* <span className="mr-3 mt-1 flex-shrink-0">✓</span> */}
                    <span className="pl-2 text-xs xl:text-[13px] 2xl:text-sm font-medium">
                      Featured At CSR Forums For Innovative Volunteer-Driven
                      Models
                    </span>
                  </li>
                  <li className="flex items-start [display:list-item]">
                    {/* <span className="mr-3 mt-1 flex-shrink-0">✓</span> */}
                    <span className="pl-2  text-xs xl:text-[13px] 2xl:text-sm font-medium">
                      Community Appreciation Awards From Schools And Local
                      Bodies
                    </span>
                  </li>
                </ul>
              </div>

              {/* Legal & Financial Transparency Card */}
              <div className="bg-[#5697FFC7] border-[1px] border-[#80C6F9] rounded-3xl p-8 shadow-xl text-white">
                <div className="mb-4">
                
                </div>
                <h2 className="text-base xl:text-xl 2xl:text-2xl [min-width:1728px]:text-3xl font-semibold mb-6">
                  Legal & Financial Transparency
                </h2>
                <ul className="space-y-2 font-poppins list-disc text-[clamp(13px,0.92vw,16px)] ml-6">
                  <li className="flex items-start [display:list-item]">
                    {/* <span className="mr-3 mt-1 flex-shrink-0">•</span> */}
                    <span className="text-sm font-medium">
                      Registered Under The Societies Registration Act
                    </span>
                  </li>
                  <li className="flex items-start [display:list-item]">
                    {/* <span className="mr-3 mt-1 flex-shrink-0">•</span> */}
                    <span className="text-sm font-medium">
                      Certified Under 80G And 12A - Donors Enjoy Tax Exemptions
                    </span>
                  </li>
                  <li className="flex items-start [display:list-item]">
                    {/* <span className="mr-3 mt-1 flex-shrink-0">•</span> */}
                    <span className="text-sm font-medium">
                      Annual Independent Audits Conducted
                    </span>
                  </li>
                  <li className="flex items-start [display:list-item]">
                    {/* <span className="mr-3 mt-1 flex-shrink-0">•</span> */}
                    <span className="text-sm font-medium">
                      Financial And Impact Reports Publicly Available
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
export default About;
