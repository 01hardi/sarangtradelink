
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';
import { testimonials } from './data';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-travel-navy text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="What Our Clients Say" 
          title="Customer Testimonials"
          light={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
              imageUrl={testimonial.imageUrl}
              className="bg-white/[0.03] text-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
