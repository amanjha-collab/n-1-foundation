import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaveDecoration from "@/components/WaveDecoration";
import { Heart, Shield, Users, BookOpen, Calculator, CreditCard, Smartphone, Building, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
// import schoolGroup from "@/assets/gallery/school-group-photo.jpg";
import donatechildren from "@/assets/donate.jpg";
import smilingStudent from "@/assets/gallery/smiling-student-notebook.jpg";

const Donate = () => {
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<string>("500");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("upi");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [showDonateDialog, setShowDonateDialog] = useState(false);
  const { toast } = useToast();

  const predefinedAmounts = ["100", "250", "500", "1000", "2500", "5000"];

  return (
    <div className="min-h-screen bg-background">
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
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={donatechildren}
              alt="School group photo"
              className="w-full h-full object-cover object-top"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            {/* Stronger Dark Gradient Overlay at Bottom (Tailwind only) */}
            <div
              className="absolute bottom-0 left-0 w-full h-1/2 z-[2] pointer-events-none bg-gradient-to-b from-transparent to-black/90"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-[2]" />
          {/* Wave Decoration at Bottom */}
          <WaveDecoration position="bottom" />
          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-64">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-dm-serif font-normal leading-tight text-yellow-500 animate-fade-in">
                Thank you for your willingness to give!
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white italic leading-relaxed max-w-3xl mx-auto">
                Donation options will go live soon. Our 80G certification is currently in progress.
              </p>
              <div>
                <Button
                  size="lg"
                  className="bg-[#004AAD] hover:bg-blue-700 text-white px-12 py-6 text-lg rounded-lg"
                  onClick={() => setShowDonateDialog(true)}
                >
                  Donate Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
       

        {/* Impact Section */}
        
      </main>

      <Footer />
    </div>
  );
};

export default Donate;