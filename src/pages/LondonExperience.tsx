
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/features/london-experience/HeroSection';
import IntroSection from '@/features/london-experience/IntroSection';
import TourPackages from '@/features/london-experience/TourPackages';
import TabsSection from '@/features/london-experience/TabsSection';
import TestimonialsSection from '@/features/london-experience/TestimonialsSection';
import BookingSection from '@/features/london-experience/BookingSection';
import { tourPackages, attractions, cityPasses, testimonials } from '@/features/london-experience/data';

const LondonExperience = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <TourPackages tourPackages={tourPackages} />
      <TabsSection attractions={attractions} cityPasses={cityPasses} />
      <TestimonialsSection />
      <BookingSection />
    </Layout>
  );
};

export default LondonExperience;
