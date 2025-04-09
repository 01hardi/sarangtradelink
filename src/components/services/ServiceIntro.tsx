
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const ServiceIntro: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="What We Offer" 
          title="Comprehensive Travel Services for Your London Journey"
        />
        <div className="max-w-3xl mx-auto text-center mt-6">
          <p className="text-gray-600">
            At Sarang Tradelink, we provide a complete range of services designed to make your London experience seamless and memorable. From guided tours of iconic landmarks to visa assistance, accommodation booking, and exciting day trips, we've got every aspect of your journey covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
