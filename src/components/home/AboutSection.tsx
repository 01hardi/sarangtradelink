import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, UserCheck, Ticket, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
const AboutSection: React.FC = () => {
  return <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block text-xs font-medium px-3 py-1 bg-travel-cream text-travel-gold rounded-full mb-4">
              ABOUT SARANG TRADELINK
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
            <Button asChild className="bg-travel-gold hover:bg-travel-navy text-white">
              <Link to="/about">Know More About What We Do</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <img src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="London Tour Guide" className="w-full h-auto rounded-lg shadow-lg object-cover opacity-0 animate-fade-in" style={{
            animationDelay: "300ms"
          }} />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block opacity-0 animate-slide-up" style={{
            animationDelay: "600ms"
          }}>
              <div className="flex items-center">
                <div className="bg-travel-gold text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mr-3 bg-gray-500">10+</div>
                <div>
                  <p className="font-medium text-travel-navy">Years of</p>
                  <p className="font-medium text-travel-navy">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;