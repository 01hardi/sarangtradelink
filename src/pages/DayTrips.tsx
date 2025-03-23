
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
      <BookingSection />
    </Layout>
  );
};

export default DayTrips;
