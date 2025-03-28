
import React from 'react';
import Layout from '@/components/Layout';
import VisaServicesHero from '@/features/visa-services/VisaServicesHero';
import VisaServicesList from '@/features/visa-services/VisaServicesList';
import BookingSection from '@/features/london-experience/BookingSection';

const VisaServices: React.FC = () => {
  return (
    <Layout>
      <VisaServicesHero />
      <VisaServicesList />
      <BookingSection title="Need Visa Assistance?" subtitle="Book a Consultation" />
    </Layout>
  );
};

export default VisaServices;
