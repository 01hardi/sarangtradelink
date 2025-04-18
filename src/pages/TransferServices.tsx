import React from 'react';
import Layout from '@/components/Layout';
import TransferServicesComponent from '@/features/accommodation/TransferServices';
import BookingSection from '@/features/london-experience/BookingSection';
import VehicleSelector from '@/features/transfers/VehicleSelector';
const TransferServices: React.FC = () => {
  return <Layout>
      <div className="py-12 bg-travel-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-playfair text-center mb-4">Transfer Services</h1>
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-200">Travel seamlessly to and from London's major airports with SarangTradelink. We provide reliable, premium and comfortable transfers to Heathrow, Gatwick, Luton, Stansted, and London City airports.</p>
        </div>
      </div>
      <VehicleSelector />
      <TransferServicesComponent />
      <BookingSection title="Ready to Book Your Transfer?" subtitle="Whether you're catching a flight for business or leisure, our professional drivers and premium vehicles ensure a smooth journey every time." />
    </Layout>;
};
export default TransferServices;