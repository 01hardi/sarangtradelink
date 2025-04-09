
import React from 'react';
import Layout from '@/components/Layout';
import DayTripsHero from '@/features/day-trips/DayTripsHero';
import BookingSection from '@/features/london-experience/BookingSection';
import TravelDestinations from '@/features/day-trips/TravelDestinations';

const DayTrips: React.FC = () => {
  return (
    <Layout>
      <DayTripsHero />
      <TravelDestinations />
      <BookingSection title="Ready to Explore the UK?" subtitle="Make Your Inquiry" />
    </Layout>
  );
};

export default DayTrips;
