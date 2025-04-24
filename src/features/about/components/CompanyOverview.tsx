import React from "react";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
const CompanyOverview = () => {
  return <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading subtitle="About Our Company" title="UK's Leading Destination Management Company" className="text-left" />
            <p className="text-gray-600 mb-6">
              Sarang Tradelink is a premier UK-based consultancy firm specializing in comprehensive 
              tourism services. With our headquarters in London and strategic offices across USA, 
              Australia, UAE, & India, we facilitate travel handling services for tour operators 
              and travel agents globally.
            </p>
            <p className="text-gray-600 mb-6">
              We pride ourselves on being a leading wholesaler for FIT and Groups, achieved through 
              our continuous development of products and services, including direct hotel contracts 
              and our own fleet of vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <StatBox number="5+" label="Global Offices" />
              <StatBox number="1000+" label="Partner Hotels" />
              <StatBox number="20+" label="Travel Services" />
            </div>
          </div>
          <div className="relative">
            
            
          </div>
        </div>
      </div>
    </section>;
};
const StatBox = ({
  number,
  label
}: {
  number: string;
  label: string;
}) => <div className="bg-travel-light-gray p-6 rounded-lg flex-1 text-center">
    <h3 className="text-travel-gold text-4xl font-bold mb-2">{number}</h3>
    <p className="text-travel-navy font-medium">{label}</p>
  </div>;
export default CompanyOverview;