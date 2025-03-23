
import React from 'react';
import { Map, PlaneTakeoff, CreditCard } from 'lucide-react';
import InquiryForm from '@/components/InquiryForm';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-travel-navy">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block text-xs font-medium px-3 py-1 bg-travel-gold/20 text-travel-gold rounded-full mb-4">
              GET IN TOUCH
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your UK Adventure?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to start planning your perfect UK trip. Our travel experts will help you create a tailored itinerary based on your interests, budget, and schedule.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-travel-gold/20 p-3 rounded-full mr-4">
                  <Map size={24} className="text-travel-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Our Office</h3>
                  <p className="text-gray-300">123 Westminster, London, UK SW1A 1AA</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-travel-gold/20 p-3 rounded-full mr-4">
                  <PlaneTakeoff size={24} className="text-travel-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Travel Consultation</h3>
                  <p className="text-gray-300">Free 30-minute consultation for all inquiries</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-travel-gold/20 p-3 rounded-full mr-4">
                  <CreditCard size={24} className="text-travel-gold" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Secure Booking</h3>
                  <p className="text-gray-300">Flexible payment options with secure processing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
