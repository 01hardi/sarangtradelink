
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesCTA: React.FC = () => {
  return (
    <section className="py-20 bg-travel-navy text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Plan Your London Adventure?</h2>
        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
          Contact our team of London experts today to start planning your perfect trip. 
          Whether you're seeking guidance on attractions, need visa assistance, or want to book a complete travel package, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-travel-gold hover:bg-travel-light-gold text-white transition-colors"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-travel-navy transition-colors"
            asChild
          >
            <Link to="/about">Learn About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
