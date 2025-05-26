import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, UserCheck, Ticket, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
const AboutSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block text-xs font-medium px-3 py-1 bg-travel-cream text-travel-gold rounded-full mb-4">
              SARANG TRADELINK
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-travel-navy mb-6">
              Your Trusted Travel Partner For UK Adventures
            </h2>
            <p className="text-travel-dark-gray mb-6">
              At Sarang Tradelink, we are passionate about sharing the magic and
              history of London and the UK with travelers from around the world.
              With over 10 years of experience in the travel industry, our team
              of local experts curates exceptional experiences tailored to your
              preferences.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <ShieldCheck size={20} className="text-travel-gold mr-2" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <UserCheck size={20} className="text-travel-gold mr-2" />
                <span>Local Experts</span>
              </div>
              <div className="flex items-center">
                <Ticket size={20} className="text-travel-gold mr-2" />
                <span>Skip-the-Line Access</span>
              </div>
              <div className="flex items-center">
                <CreditCard size={20} className="text-travel-gold mr-2" />
                <span>Secure Payments</span>
              </div>
            </div>
            <Button
              asChild
              className="bg-travel-gold hover:bg-travel-navy text-white"
            >
              <Link to="/about">Know More About What We Do</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img
              src="data:image/jpeg;base64,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?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="London Tour Guide"
              className="w-full h-auto rounded-lg shadow-lg object-cover opacity-0 animate-fade-in"
              style={{
                animationDelay: "300ms",
              }}
            />
            <div
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block opacity-0 animate-slide-up"
              style={{
                animationDelay: "600ms",
              }}
            >
              <div className="flex items-center">
                <div className="bg-travel-gold text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mr-3 bg-gray-500">
                  10+
                </div>
                <div>
                  <p className="font-medium text-travel-navy">Years of</p>
                  <p className="font-medium text-travel-navy">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
