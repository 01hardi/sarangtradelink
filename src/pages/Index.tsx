
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import UKDayTripsSection from '@/components/home/UKDayTripsSection';
import FeaturedDestinationsSection from '@/components/home/FeaturedDestinationsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <UKDayTripsSection />
      <FeaturedDestinationsSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
