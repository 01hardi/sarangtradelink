
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const ServiceIntro: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-travel-navy mb-4">
            Our Premium Services
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            We provide a comprehensive range of travel services to make your UK experience truly memorable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
