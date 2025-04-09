
import React from 'react';
import { Map, Globe, Building, Car, DollarSign, BarChart } from 'lucide-react';
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
          <ServiceCard 
            title="Day Trips"
            description="Trips for Windsor, Bath, Oxford, Cotswold Stonehenge etc..."
            icon={<Map size={24} />}
            href="/services/day-trips"
            delay={100}
          />
          <ServiceCard 
            title="City Sightseeing"
            description="HOHO Bus, Attractions, Merlin Pass, London Pass etc"
            icon={<Map size={24} />}
            href="/services/london-experience"
            delay={200}
          />
          <ServiceCard 
            title="Visa"
            description="Schengen, US Visitor, Tier 1, 2, 4 and 5 Worker Visa, ILR"
            icon={<Globe size={24} />}
            href="/services/visa-services"
            delay={300}
          />
          <ServiceCard 
            title="Transfers"
            description="Airport Pickup & Drop Off"
            icon={<Car size={24} />}
            href="/services/accommodation"
            delay={400}
          />
          <ServiceCard 
            title="Accommodation"
            description="Cheap air BnB Deals"
            icon={<Building size={24} />}
            href="/services/accommodation"
            delay={500}
          />
          <ServiceCard 
            title="Forex and Currency"
            description="Pound, Dollar, and INR Conversion"
            icon={<DollarSign size={24} />}
            href="/services/accommodation"
            delay={600}
          />
          <ServiceCard 
            title="Trade"
            description="Import - Export of Seasonal Products"
            icon={<BarChart size={24} />}
            href="/services/accommodation"
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
