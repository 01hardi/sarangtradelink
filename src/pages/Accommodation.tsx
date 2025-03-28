
import React from 'react';
import Layout from '@/components/Layout';
import AccommodationHero from '@/features/accommodation/AccommodationHero';
import AccommodationOptions from '@/features/accommodation/AccommodationOptions';
import TransferServices from '@/features/accommodation/TransferServices';
import BookingSection from '@/features/london-experience/BookingSection';

const Accommodation: React.FC = () => {
  return (
    <Layout>
      <AccommodationHero />
      <AccommodationOptions />
      <TransferServices />
      <BookingSection title="Book Your Stay & Transfers" subtitle="Get in Touch" />
    </Layout>
  );
};

export default Accommodation;
