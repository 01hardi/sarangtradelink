
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import InquiryForm from '@/components/InquiryForm';

const BookingSection: React.FC = () => {
  return (
    <section className="py-16 bg-travel-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading 
            subtitle="Book Your Experience" 
            title="Ready to Explore London?"
            light={true}
          />
          <div className="mt-8">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
