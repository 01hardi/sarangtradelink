
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const ServiceIntro: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="What We Offer" 
          title="Our Premium Services"
        />
        <div className="max-w-3xl mx-auto text-center mt-6">
          <p className="text-gray-600">
            At Sarang Tradelink, we provide a comprehensive range of premium services designed to make your UK experience seamless and memorable. From travel consulting and visa assistance to accommodation management and financial services, we've got every aspect of your journey covered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
