
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The money transfer service was incredibly fast and reliable. I needed to send money to my son studying in the UK, and Sarang's team made it happen within hours. The exchange rate was better than any bank offered.",
    author: "Priya Sharma",
    location: "New Delhi, India",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "As an international student, I've used Sarang's financial services multiple times for tuition payments. Their student-specific services are excellent, and their staff is always helpful in explaining the process.",
    author: "Ahmed Hassan",
    location: "Dubai, UAE",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "I was worried about exchange rates when planning my UK holiday, but Sarang offered the most competitive rates for currency exchange. The process was smooth and their travel finance advice was invaluable.",
    author: "Maria Rodriguez",
    location: "Barcelona, Spain",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&h=150"
  }
];

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
          {testimonials.map((testimonial, index) => (
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
