import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Plus, Minus,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import contactHero from "@/assets/contact-hero.jpg";
import pinkRibbon from "@/assets/pink-ribbon.png";
import vectorDecoration from "@/assets/Vector.svg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={contactHero}
              alt="School children"
              className="w-full h-full object-cover object-top"
            />
            {/* Stronger Dark Gradient Overlay at Bottom (Tailwind only) */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 z-[2] pointer-events-none bg-gradient-to-b from-transparent to-black/90" />
          </div>

          {/* Wave Decoration at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-[2]">
            <WaveDecoration position="bottom" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="min-h-[84vh] flex items-end justify-center">
              <div className="max-w-4xl mx-auto text-center space-y-4 pb-24">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-dm-serif font-normal leading-tight text-white drop-shadow-lg">
                  Contact Us
                </h1>

                <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto">
                  Let's create change together. Reach out to learn more or get
                  involved.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-0">
                  <Link to="/get-involved">
                    <Button
                      size="lg"
                      className="rounded-lg bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-3 text-base font-medium shadow-md"
                    >
                      Get Involved
                    </Button>
                  </Link>
                  <Link to="/programs">
                    <Button
                      size="lg"
                      className="rounded-lg bg-[#00B894] hover:bg-[#00A080] text-white px-8 py-3 text-base font-medium shadow-md"
                    >
                      Explore Our Programs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="get-in-touch" className="py-12 bg-[#FEFBF1]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="grid grid-cols-1
    lg:grid-cols-[minmax(360px,35%)_minmax(600px,65%)] gap-8 max-w-7xl mx-auto"
            >
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[55px] lg:leading-[80px] text-[#FEB344] font-dm-serif mb-9">
                  Get In <span className="italic">Touch</span>
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="font-poppins text-black">
                      <h3 className="text-gray-900 mb-1">Email</h3>
                      <p className="font-semibold">info@nplusone.org.in</p>
                    </div>
                  </div>

                  <div className="flex items-start ">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="font-poppins text-black">
                      <h3 className="text-gray-900 mb-1">Phone</h3>
                      <p className="font-semibold">+91 70834 90865</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="font-poppins text-black">
                      <h3 className="mb-1">Address</h3>
                      <p className="font-semibold">"TORAN" Building, Flat No.102, Plot No.15, CTS No.1336, Sr.No.132/2+3, Gulmohar Park, Aundh, PUNE: 411007</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {/* Contact Form */}
                <Card className="bg-white rounded-[18px] mb-8">
                  <CardHeader className="py-8 px-6">
                    <CardTitle className="text-base xl:text-xl 2xl:text-2xl [min-width:1728px]:text-3xl text-black font-sarabun">
                      Send Us A Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8 font-poppins pb-8">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-black">
                        Your Name <span className="text-[#E45E5E]">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        className="bg-white border-[#DBE1E8] rounded-sm p-[14px]  placeholder:text-[#BDBDBD]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-black">
                        Email Address <span className="text-[#E45E5E]">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@domain.com"
                        className="bg-white border-[#DBE1E8] rounded-sm p-[14px]  placeholder:text-[#BDBDBD]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-black">
                        Phone Number <span className="text-[#E45E5E]">*</span>
                      </Label>
                      <div className="flex gap-2">
                        <select className="border px-[14px] bg-white w-20 border-[#DBE1E8] rounded-sm  text-xs xl:text-[13px] 2xl:text-sm">
                          <option>+91</option>
                        </select>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder=""
                          className="bg-white flex-1 border-[#DBE1E8] rounded-sm p-[14px]  placeholder:text-[#BDBDBD]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-black">
                        Subject <span className="text-[#E45E5E]">*</span>
                      </Label>
                      <Input
                        id="subject"
                        placeholder="Enter your subject"
                        className="bg-white border-[#DBE1E8] rounded-sm p-[14px]  placeholder:text-[#BDBDBD]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">
                        Message <span className="text-[#E45E5E]">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your inquiry"
                        className="min-h-[120px] bg-white border-[#DBE1E8] rounded-sm p-[14px]  placeholder:text-[#BDBDBD]"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Button className="w-full bg-[#004AAD] border-[1px] border-[#C0C0C0] hover:bg-transparent hover:border-2 hover:border-[#FEB344] hover:text-[#FEB344] rounded-sm text-white">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-dm-serif text-[#004AAD] text-3xl sm:text-4xl lg:text-[55px] lg:leading-[80px]">
                Visit Us
              </h2>
              <p className="text-base xl:text-xl 2xl:text-2xl [min-width:1728px]:text-3xl text-[#494949] max-w-6xl mx-auto font-poppins font-medium">
                We welcome visitors to Palghar. Please contact us in advance
                to schedule an appointment and ensure someone is available to
                meet with you.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-6xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120298.75979522675!2d72.68873835!3d19.696295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71cc41ab2e413%3A0x5765ec6c23b1de68!2sPalghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 pt-24 bg-[#3A86FF] overflow-hidden">
          <WaveDecoration position="top" />

          {/* Pink Ribbon Decoration */}
          <img
            src={pinkRibbon}
            alt=""
            className="absolute left-0 top-12 w-64 h-64 lg:w-80 lg:h-80 opacity-90 z-0"
            aria-hidden="true"
          />

          {/* Vector Decoration at Bottom Right */}
          <img
            src={vectorDecoration}
            alt=""
            className="absolute -right-1 bottom-12 w-48 h-48 lg:w-60 lg:h-60 opacity-90 z-0"
            aria-hidden="true"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* FAQ Header with Icon */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[55px] lg:leading-[80px]
 text-white font-dm-serif"
              >
                FAQ
              </h2>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="volunteering" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="inline-flex gap-3 bg-[#FDFDFF] rounded-lg px-4 py-9 shadow-[0px_0.5px_1px_0px_#19213D12] border-[1px] border-[#D3DEE2]">
                  <TabsTrigger
                    value="volunteering"
                    className="data-[state=active]:bg-[#004AAD] data-[state=active]:text-white text-[#494949] rounded-sm flex items-center justify-center gap-3 px-5 py-3 text-base
  lg:text-lg
  2xl:text-xl font-medium font-poppins whitespace-nowrap data-[state=active]:font-semibold"
                  >
                    <svg
                      className="w-7 h-7 text-[#FEB344] data-[state=active]:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Volunteering</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="commitment"
                    className="data-[state=active]:bg-[#004AAD] data-[state=active]:text-white text-[#494949] rounded-sm flex items-center justify-center gap-3 px-5 py-3 text-base
  lg:text-lg
  2xl:text-xl font-medium font-poppins whitespace-nowrap data-[state=active]:font-semibold"
                  >
                    <svg
                      className="w-7 h-7 text-orange-400 data-[state=active]:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Time Commitment</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="teaching"
                    className="data-[state=active]:bg-[#004AAD] data-[state=active]:text-white text-[#494949] rounded-sm flex items-center justify-center gap-3 px-5 py-3 text-base
  lg:text-lg
  2xl:text-xl font-medium font-poppins whitespace-nowrap data-[state=active]:font-semibold"
                  >
                    <svg
                      className="w-7 h-7 text-orange-400 data-[state=active]:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>Call format & Teaching</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="max-w-full mx-auto">
                {/* Volunteering Tab */}
                <TabsContent
                  value="volunteering"
                  className="bg-white rounded-3xl p-20 max-h-[500px] overflow-y-auto"
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="item-1"
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        How do I get involved?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        Register on our website and save the Read-a-story WhatsApp number (+91 70834 90865) to receive updates. After your application is reviewed and you complete the orientation, you will be paired with a child and given access to downloadable teaching materials. You will then guide and support the student as they read a story over the phone, helping build their confidence and literacy skills.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        What are the required skills to teach?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        No special teaching credentials are required. We provide
                        comprehensive training and support materials for all our
                        volunteers.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        Can I teach from outside of India?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        Yes! Many of our programs can be conducted remotely
                        through video calls, allowing volunteers from anywhere
                        in the world to participate.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-4"
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        Where are the students located?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        Our students are primarily located in rural and
                        underserved communities across Maharashtra, India.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-5"
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        Do I need to have the ability to speak the local
                        language?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        While knowledge of local languages is helpful, it's not
                        mandatory. Many of our programs are conducted in English
                        or with translation support.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                {/* Time Commitment Tab */}
                <TabsContent
                  value="commitment"
                  className="bg-white rounded-3xl p-20 max-h-[500px] overflow-y-auto"
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="item-1"
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        Are all times in the registration form IST times?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        Yes, all times mentioned in our registration forms and
                        scheduling system are in Indian Standard Time (IST).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        What telephony vendors have worked well in the past for
                        international dialing?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        We recommend WhatsApp calling, Skype, or Google Meet for
                        international communication as they provide reliable and
                        cost-effective solutions.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      className="border-b border-gray-200"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        What is the minimum time commitment required?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        We ask volunteers to commit to at least one session per week for a minimum of 16 weeks to ensure consistent support for the children.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                {/* Call Format & Teaching Tab */}
                <TabsContent
                  value="teaching"
                  className="bg-white rounded-3xl p-20 max-h-[500px] overflow-y-auto"
                >
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="item-1"
                      className="border-b border-[#D3DEE2]"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        How do I get started with teaching?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        After signing up, you'll receive an orientation session
                        followed by training materials. We'll then match you
                        with students based on your availability and
                        preferences.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="border-b border-[#D3DEE2]"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        What happens during the first call with a student?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        The first call is an introduction session where you get to know the student, explain how the sessions will work, and begin with a simple story to assess their reading level.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      className="border-b border-[#D3DEE2]"
                    >
                      <AccordionTrigger
                        className="text-left text-black text-base
  lg:text-lg
  2xl:text-xl font-semibold hover:no-underline py-4"
                      >
                        How long does each reading session last?
                      </AccordionTrigger>
                      <AccordionContent className="text-[#6F6C8F] pb-4">
                        Each session is typically 20–30 minutes long, conducted over a phone call. This is designed to be manageable for both volunteers and children.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
