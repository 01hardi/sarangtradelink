
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from './data';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-travel-navy text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="What Our Clients Say" 
          title="Unforgettable London Experiences"
          light={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
              imageUrl={testimonial.imageUrl}
              className="bg-white/[0.03] border-white/10 text-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
