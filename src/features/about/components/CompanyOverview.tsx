
import React from "react";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const CompanyOverview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              subtitle="About Our Services"
              title="Crafting Unforgettable London Experiences"
              className="text-left"
            />
            <p className="text-gray-600 mb-6">
              At WanderLondon, we specialize in creating tailor-made experiences that showcase the 
              best of London and the UK. From expertly guided tours to comprehensive travel solutions, 
              we're here to make your British journey extraordinary.
            </p>
            <p className="text-gray-600 mb-6">
              Our dedicated team combines deep local knowledge with personalized service to deliver 
              experiences that go beyond typical tourist attractions. We handle everything from 
              accommodation and transport to specialized tours and financial services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <StatBox number="15K+" label="Happy Travelers" />
              <StatBox number="12+" label="Years Experience" />
              <StatBox number="30+" label="Expert Guides" />
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/about-team.jpg"
              alt="WanderLondon Experience"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-8 -left-8 bg-travel-gold p-4 rounded-lg hidden md:block">
              <div className="flex items-center space-x-2 text-white">
                <MapPin size={24} />
                <div>
                  <p className="font-bold">Visit Us</p>
                  <p className="text-sm">Central London Office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatBox = ({ number, label }: { number: string; label: string }) => (
  <div className="bg-travel-light-gray p-6 rounded-lg flex-1 text-center">
    <h3 className="text-travel-gold text-4xl font-bold mb-2">{number}</h3>
    <p className="text-travel-navy font-medium">{label}</p>
  </div>
);

export default CompanyOverview;
