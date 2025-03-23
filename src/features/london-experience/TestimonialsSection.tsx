
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-travel-navy text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="What Our Clients Say" 
          title="Unforgettable London Experiences"
          light={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Testimonial content placeholder */}
          {/* This section can be expanded in the future */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
