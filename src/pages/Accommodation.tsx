
import React from 'react';
import Layout from '@/components/Layout';
import AccommodationHero from '@/features/accommodation/AccommodationHero';
import AccommodationOptions from '@/features/accommodation/AccommodationOptions';
import BookingSection from '@/features/london-experience/BookingSection';

const Accommodation: React.FC = () => {
  return (
    <Layout>
      <AccommodationHero />
      <AccommodationOptions />
      <BookingSection 
        title="Ready to Book Your Stay?" 
        subtitle="Contact us to find the perfect accommodation for your needs and budget" 
      />
    </Layout>
  );
};

export default Accommodation;
