
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen max-h-[800px] min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="London Cityscape" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            Discover The Magic Of London & The UK
          </h1>
          <p className="text-xl text-white/90 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
            Explore iconic landmarks, hidden gems, and unforgettable experiences with our expert travel services and personalized tours.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <Button 
              asChild
              className="bg-travel-gold hover:bg-travel-navy text-white px-8 py-6 text-lg"
            >
              <Link to="/services/london-experience">
                Explore Our Tours
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-travel-navy px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
