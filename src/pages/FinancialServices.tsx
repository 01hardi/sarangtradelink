
import React from 'react';
import Layout from '@/components/Layout';
import FinancialServicesHero from '@/features/financial-services/FinancialServicesHero';
import FinancialServicesIntro from '@/features/financial-services/FinancialServicesIntro';
import FinancialServicesList from '@/features/financial-services/FinancialServicesList';
import TestimonialsSection from '@/features/financial-services/TestimonialsSection';
import BookingSection from '@/features/financial-services/BookingSection';

const FinancialServices = () => {
  return (
    <Layout>
      <FinancialServicesHero />
      <FinancialServicesIntro />
      <FinancialServicesList />
      <TestimonialsSection />
      <BookingSection title="Need Financial Assistance?" subtitle="Make Your Inquiry" />
    </Layout>
  );
};

export default FinancialServices;
