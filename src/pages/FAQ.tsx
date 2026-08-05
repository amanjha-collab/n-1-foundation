import { ChevronDown, Phone, Clock, BookOpen, Users, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import studentsOutdoor from "@/assets/gallery/students-outdoor-learning.jpg";
import threeStudents from "@/assets/gallery/three-students-blackboard.jpg";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={studentsOutdoor} 
              alt="Students learning outdoors" 
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white animate-fade-in">
                One <span className="italic font-serif">Question</span>. One <span className="italic font-serif">Answer</span>. One <span className="italic font-serif">Step Forward</span>.
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                Everything you need to know about volunteering and making a difference in children's education
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            {/* Volunteering Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  Volunteering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I get involved?</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>Register on our website and save the Read-a-story WhatsApp number (+91-7083490865) in your contacts to receive important updates.</li>
                        <li>After review of your application and orientation, we will pair you with a child.</li>
                        <li>We will provide access to the downloadable teaching materials.</li>
                        <li>You will provide guidance and coaching, as the student reads a story over the phone.</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What are the required skills to teach?</AccordionTrigger>
                    <AccordionContent>
                      Proficiency in written and spoken English.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I teach from outside of India?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we will provide you with the dialing instructions once you have been paired with a child. You can use Google Voice, Vonage or other low cost international calling plans. As you are calling a local landline number in India, one is unable to use Zoom, Skype, WhatsApp, Webex etc.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Where are the students located?</AccordionTrigger>
                    <AccordionContent>
                      The students are in the tribal region and under served communities in India.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Do I need to have the ability to speak the local language?</AccordionTrigger>
                    <AccordionContent>
                      Yes, the ability to speak/translate in the local language is needed. Alternatively, we can get you an advanced student if you speak only English.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>Are all times in the registration form IST times?</AccordionTrigger>
                    <AccordionContent>
                      Yes, all times are IST.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>What telephony vendors have worked well in the past for international dialing?</AccordionTrigger>
                    <AccordionContent>
                      Google voice and Vonage have worked well in the past. If they are unavailable in your region, please contact us and we will assist you.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Time Commitment Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Clock className="mr-3 h-6 w-6 text-primary" />
                  Time Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="time-1">
                    <AccordionTrigger>When are the children generally home to receive calls?</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p><strong>Mon-Fri:</strong> 7:00-9:00 AM, 7:30-8:30 PM</p>
                        <p><strong>Sat:</strong> 1:00-4:00 PM, 7:30-8:30 PM</p>
                        <p><strong>Sun:</strong> 7:00-11:00 AM, 2:00-4:00 PM</p>
                        <p className="text-sm text-muted-foreground">All times are IST</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-2">
                    <AccordionTrigger>What is the minimum time commitment?</AccordionTrigger>
                    <AccordionContent>
                      We would like you to ideally commit one hour per week. But if you can give more, we are happy to accommodate that as well.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="time-3">
                    <AccordionTrigger>What is the duration that I need to commit?</AccordionTrigger>
                    <AccordionContent>
                      16 weeks, 1 hour per week at a minimum.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Call Format and Teaching Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Phone className="mr-3 h-6 w-6 text-primary" />
                  Call Format and Teaching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="call-1">
                    <AccordionTrigger>What things should I do in the first call?</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside space-y-2">
                        <li>A five minute icebreaker in the local language, where you can ask the child about their hobbies, favourite subjects or about school.</li>
                        <li>A schedule of days and time that is mutually agreeable.</li>
                        <li>Start the reading session with the student.</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="call-2">
                    <AccordionTrigger>What are the typical challenges during the first call?</AccordionTrigger>
                    <AccordionContent>
                      There will be pauses and breaks. Students may be a bit apprehensive, and may need time to get comfortable with your teaching style. Please be patient, as the interaction will get easier in subsequent sessions.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="call-3">
                    <AccordionTrigger>What happens if the child does not pick up the phone?</AccordionTrigger>
                    <AccordionContent>
                      Please try again after a while. After three attempts, please notify the coordinator.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="call-4">
                    <AccordionTrigger>How long should a session last?</AccordionTrigger>
                    <AccordionContent>
                      Since this is a 1:1 session, we have found 30-45 minutes per session is a good duration.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="call-5">
                    <AccordionTrigger>Can I use another phone than the registered one?</AccordionTrigger>
                    <AccordionContent>
                      Unfortunately, not. As we use number masking to protect the child and volunteer, we need you to only use the registered number to call the student. In case, your registered number changes, please notify the coordinator.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="call-6">
                    <AccordionTrigger>Are all calls recorded?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we have to in order to protect the child and safeguard volunteer's rights. This is also for educational purposes.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="call-7">
                    <AccordionTrigger>How are the levels defined?</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p><strong>Beginner:</strong> Can read alphabets; but will need help with simple words.</p>
                        <p><strong>L0:</strong> Can read simple words; but will need help with simple sentences.</p>
                        <p><strong>L1:</strong> Can read simple sentences; but not complex sentences.</p>
                        <p><strong>L2:</strong> Can read harder sentences; but paragraphs may be difficult.</p>
                        <p><strong>L3:</strong> Can read paragraphs.</p>
                        <p><strong>L4:</strong> Can read and comprehend paragraphs, and has achieved a self-learner state.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="call-8">
                    <AccordionTrigger>What do I do if I need to pause or discontinue in the middle of a trial?</AccordionTrigger>
                    <AccordionContent>
                      <p>Please contact the Help Desk: +91-7083490865 (call or WhatsApp) Or email: info@nplusone.org.in</p>
                      <p className="mt-2"><strong>Hours (IST) of the help desk:</strong></p>
                      <div className="mt-2 space-y-1">
                        <p><strong>Mon-Fri:</strong> 7:00-9:00 AM, 7:30-8:30 PM</p>
                        <p><strong>Sat:</strong> 1:00-4:00 PM, 7:30-8:30 PM</p>
                        <p><strong>Sun:</strong> 7:00-11:00 AM, 2:00-4:00 PM</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Effective Teaching Tips Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <BookOpen className="mr-3 h-6 w-6 text-primary" />
                  Effective Teaching Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Profile of a Read-a-story Student</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The majority of our students come from Zilla Parishad schools in remote Maharashtra areas. These schools often have 400+ students but only 4-5 teachers. Students are young and may not fully understand education's significance, with parents unaware of educational opportunities. With your help, these students can access otherwise unreachable opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Challenges Faced by Students</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Limited network coverage and connectivity issues</li>
                    <li>Inconsistent electricity supply affecting phone charging</li>
                    <li>Only one family phone, often taken by working parents</li>
                    <li>First-generation learners with limited English exposure</li>
                    <li>Potential lack of parental motivation for education</li>
                    <li>Parents engaged in daily wage work, farming, or labor</li>
                    <li>Students eager to learn despite unsupportive environments</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">How Your Patience and Dedication Make a Difference</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li><strong>Building Trust:</strong> Your consistent presence develops trust and strong bonds</li>
                    <li><strong>English Development:</strong> Dedicated efforts improve language skills and expand horizons</li>
                    <li><strong>Parental Engagement:</strong> Motivate parents by demonstrating education's importance</li>
                    <li><strong>Consistency:</strong> Regular volunteering establishes routines and reinforces commitment</li>
                    <li><strong>Overcoming Challenges:</strong> Your dedication inspires students to overcome obstacles</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Teaching Guidelines</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Pronunciation, Punctuation, and Intonation:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>Ask students to read aloud and help them identify mistakes</li>
                        <li>Focus on pronunciation, sentence rhythm, and proper intonation</li>
                        <li>Allocate time for discussion and feedback at session end</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Homework:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>Ask students to write summaries of what they've read</li>
                        <li>Have them write new words 5 times with local language meanings</li>
                        <li>Encourage review of written work for vocabulary retention</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Reading Session Without Books:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                        <li>Sing nursery rhymes focusing on pronunciation</li>
                        <li>Teach colors, vegetables, festivals, and village life concepts</li>
                        <li>Play language games: "Give me 5 words starting with B"</li>
                        <li>Encourage active participation in a supportive environment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6 text-center">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact our support team for additional help and guidance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+91-7083490865</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span>info@nplusone.org.in</span>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;