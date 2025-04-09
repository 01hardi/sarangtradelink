
import React from 'react';
import Layout from '@/components/Layout';
import DayTripsHero from '@/features/day-trips/DayTripsHero';
import BookingSection from '@/features/london-experience/BookingSection';
import TravelDestinations from '@/features/day-trips/TravelDestinations';
import DayTripsList from '@/features/day-trips/DayTripsList';

const DayTrips: React.FC = () => {
  return (
    <Layout>
      <DayTripsHero />
      <TravelDestinations />
      <DayTripsList />
      <BookingSection title="Ready to Explore the UK?" subtitle="Make Your Inquiry" />
    </Layout>
  );
};

export default DayTrips;
