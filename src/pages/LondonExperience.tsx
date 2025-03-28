
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/features/london-experience/HeroSection';
import IntroSection from '@/features/london-experience/IntroSection';
import TourPackages from '@/features/london-experience/TourPackages';
import TabsSection from '@/features/london-experience/TabsSection';
import TestimonialsSection from '@/features/london-experience/TestimonialsSection';
import BookingSection from '@/features/london-experience/BookingSection';
import { tourPackages, attractions, cityPasses } from '@/features/london-experience/data';

const LondonExperience = () => {
  // Convert all relative image paths to Unsplash URLs
  const validatedAttractions = attractions.map(attraction => ({
    ...attraction,
    image: attraction.image.startsWith('http') ? 
      attraction.image : 
      `https://images.unsplash.com/photo-${attraction.image.split('/images/')[1]?.split('.')[0] || '1566073771259-6a8506099945'}?auto=format&fit=crop&w=800&q=80`
  }));

  const validatedTourPackages = tourPackages.map(tour => ({
    ...tour,
    image: tour.image.startsWith('http') ? 
      tour.image : 
      `https://images.unsplash.com/photo-${tour.image.split('/images/')[1]?.split('.')[0] || '1588778226089-02b66a38adbe'}?auto=format&fit=crop&w=800&q=80`
  }));

  const validatedCityPasses = cityPasses.map(pass => ({
    ...pass,
    image: pass.image.startsWith('http') ? 
      pass.image : 
      `https://images.unsplash.com/photo-${pass.image.split('/images/')[1]?.split('.')[0] || '1414235077428-338989a2e8c0'}?auto=format&fit=crop&w=800&q=80`
  }));

  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <TourPackages tourPackages={validatedTourPackages} />
      <TabsSection attractions={validatedAttractions} cityPasses={validatedCityPasses} />
      <TestimonialsSection />
      <BookingSection />
    </Layout>
  );
};

export default LondonExperience;
