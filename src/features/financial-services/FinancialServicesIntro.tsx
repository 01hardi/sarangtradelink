
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const FinancialServicesIntro: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <SectionHeading 
              subtitle="Financial Solutions" 
              title="International Money Transfer & Foreign Exchange"
              className="text-left"
            />
            <p className="text-gray-600 mb-6">
              We at Sarang offer seamless money transfer services through IMPS/RTGS, door step cash collection, 
              and FCA regulated third-party applications for students and travelers requiring foreign exchange services.
              Our reliable financial solutions ensure that your money reaches its destination safely and on time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-travel-light-gray p-3 rounded-lg text-center">
                <h3 className="text-travel-gold text-2xl font-bold mb-1">Fast</h3>
                <p className="text-travel-navy text-sm">Quick Transfers</p>
              </div>
              <div className="bg-travel-light-gray p-3 rounded-lg text-center">
                <h3 className="text-travel-gold text-2xl font-bold mb-1">Secure</h3>
                <p className="text-travel-navy text-sm">FCA Regulated</p>
              </div>
              <div className="bg-travel-light-gray p-3 rounded-lg text-center">
                <h3 className="text-travel-gold text-2xl font-bold mb-1">24/7</h3>
                <p className="text-travel-navy text-sm">Support Available</p>
              </div>
              <div className="bg-travel-light-gray p-3 rounded-lg text-center">
                <h3 className="text-travel-gold text-2xl font-bold mb-1">Low</h3>
                <p className="text-travel-navy text-sm">Service Fees</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?auto=format&fit=crop&w=800&q=80" 
              alt="Financial Services" 
              className="rounded-lg w-full h-auto"
              onError={(e) => {
                // Fallback image if the original fails to load
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesIntro;
