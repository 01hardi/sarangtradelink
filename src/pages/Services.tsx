
import React from 'react';
import Layout from '@/components/Layout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServicesList from '@/components/services/ServicesList';
import ServicesCTA from '@/components/services/ServicesCTA';

const Services = () => {
  return (
    <Layout>
      <ServiceHero />
      <ServiceIntro />
      <ServicesList />
      <ServicesCTA />
    </Layout>
  );
};

export default Services;
