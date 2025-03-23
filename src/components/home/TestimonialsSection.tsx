
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import TestimonialCard from '@/components/TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Clients Say"
          subtitle="Read about the experiences of travelers who have explored the UK with us."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <TestimonialCard 
            quote="Our family trip to London was simply perfect. The Warner Bros Studio tour was a highlight for our kids. WanderLondon took care of everything!"
            author="Sarah Johnson"
            location="United States"
            rating={5}
            imageUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
          />
          
          <TestimonialCard 
            quote="The visa assistance service was incredibly helpful. The team guided me through the entire Schengen visa process and made it stress-free."
            author="Rajiv Patel"
            location="India"
            rating={5}
            imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
          />
          
          <TestimonialCard 
            quote="The day trip to Edinburgh was exceptional. Our guide was knowledgeable and entertaining, and the transportation was comfortable."
            author="Maria Rodriguez"
            location="Spain"
            rating={4}
            imageUrl="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
