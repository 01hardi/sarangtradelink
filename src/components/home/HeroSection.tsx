
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen max-h-[700px] min-h-[500px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="London Cityscape" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up" style={{ animationDelay: '300ms', animationDuration: '1s' }}>
            Discover the magic of London & the UK
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '600ms', animationDuration: '1s' }}>
            Explore iconic landmarks and hidden secrets with expert guides who know the city inside out.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '900ms', animationDuration: '1s' }}>
            <Button 
              asChild
              className="bg-white text-gray-900 hover:bg-white/90 px-6 py-5 font-medium rounded-md"
            >
              <Link to="/services/london-experience">
                Discover Tours
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-6 py-5 font-medium rounded-md"
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
