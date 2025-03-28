
import React from 'react';
import Layout from '@/components/Layout';
import DayTripsHero from '@/features/day-trips/DayTripsHero';
import DayTripsList from '@/features/day-trips/DayTripsList';
import BookingSection from '@/features/london-experience/BookingSection';

const DayTrips: React.FC = () => {
  return (
    <Layout>
      <DayTripsHero />
      <DayTripsList />
      <BookingSection title="Ready to Explore the UK?" subtitle="Make Your Inquiry" />
    </Layout>
  );
};

export default DayTrips;
