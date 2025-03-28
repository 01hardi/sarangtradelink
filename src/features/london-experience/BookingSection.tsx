
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import InquiryForm from '@/components/InquiryForm';

interface BookingSectionProps {
  title?: string;
  subtitle?: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({ 
  title = "Ready to Explore London?",
  subtitle = "Make Your Inquiry"
}) => {
  return (
    <section className="py-12 bg-travel-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <SectionHeading 
            subtitle={subtitle} 
            title={title}
            light={true}
          />
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
