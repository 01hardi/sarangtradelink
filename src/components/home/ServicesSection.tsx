
import React from 'react';
import { Map, Globe, Building, Car } from 'lucide-react';
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <ServiceCard 
            title="London Experience"
            description="Guided tours of iconic London landmarks, skip-the-line tickets, and special access to popular attractions."
            icon={<Map size={24} />}
            href="/services/london-experience"
            delay={100}
          />
          <ServiceCard 
            title="Visa Services"
            description="Professional assistance with Schengen and USA visa applications, documentation, and application tracking."
            icon={<Globe size={24} />}
            href="/services/visa-services"
            delay={200}
          />
          <ServiceCard 
            title="Accommodation"
            description="Handpicked hotel recommendations, special rates, and booking assistance for comfortable stays."
            icon={<Building size={24} />}
            href="/services/accommodation"
            delay={300}
          />
          <ServiceCard 
            title="UK Day Trips"
            description="Unforgettable day excursions to Edinburgh, Oxford, Cambridge, and other picturesque UK destinations."
            icon={<Car size={24} />}
            href="/services/day-trips"
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
