
import React from 'react';
import Layout from '@/components/Layout';
import TransferServicesComponent from '@/features/accommodation/TransferServices';
import BookingSection from '@/features/london-experience/BookingSection';

const TransferServices: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 bg-travel-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair text-center mb-4">Transfer Services</h1>
          <p className="text-center max-w-2xl mx-auto text-lg text-gray-200">
            Reliable and comfortable transportation throughout the UK with our professional drivers
          </p>
        </div>
      </div>
      <TransferServicesComponent />
      <BookingSection title="Ready to Book Your Transfer?" subtitle="Make Your Inquiry" />
    </Layout>
  );
};

export default TransferServices;
