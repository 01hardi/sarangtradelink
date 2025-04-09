
import React from 'react';
import { Map, Globe, Building, Landmark, DollarSign, Car } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Premium Services"
          subtitle="We provide a comprehensive range of travel services to make your UK experience truly memorable."
          centered
        />
        
        <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4 mt-12 snap-x">
          <div className="w-64 flex-shrink-0 snap-start">
            <ServiceCard 
              title="Travel Services"
              description="Consulting and assisting your travel needs as per budget and nature of journey, navigating you to the best type of accredited tour arrangement as per industry standards who are ATOL/ABTA/IATA registered ®"
              icon={<Map size={24} />}
              href="/services/day-trips"
              delay={100}
            />
          </div>
          <div className="w-64 flex-shrink-0 snap-start">
            <ServiceCard 
              title="Financial Services"
              description="We at Sarang offer seamless money transfer through IMPS/RTGS, door step cash collection, and by FCA regulated third-party applications for students and travelers requiring foreign exchange services."
              icon={<DollarSign size={24} />}
              href="/services/london-experience"
              delay={200}
            />
          </div>
          <div className="w-64 flex-shrink-0 snap-start">
            <ServiceCard 
              title="Accommodation & Airbnb"
              description="As a market-leading management company, we deliver 75% occupancy through 60% direct bookings for your properties, helping you experience an exponential increase in income beyond traditional booking platforms."
              icon={<Building size={24} />}
              href="/services/accommodation"
              delay={300}
            />
          </div>
          <div className="w-64 flex-shrink-0 snap-start">
            <ServiceCard 
              title="Visa Services"
              description="We assist with personal visa & immigration matters, from UK entry applications to guidance on innovator founder, TIER 2 skilled worker, self-sponsorship, Schengen & USA visitors visa services."
              icon={<Globe size={24} />}
              href="/services/visa-services"
              delay={400}
            />
          </div>
          <div className="w-64 flex-shrink-0 snap-start">
            <ServiceCard 
              title="Transfer Services"
              description="Reliable and comfortable transportation from all London airports to your accommodation with professional drivers for convenient travel throughout London and beyond."
              icon={<Car size={24} />}
              href="/services/transfer-services"
              delay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
