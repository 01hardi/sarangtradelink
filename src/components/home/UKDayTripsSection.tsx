
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, MapPin, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';

const UKDayTripsSection: React.FC = () => {
  return (
    <section className="py-20 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Explore the UK Beyond London"
          subtitle="Discover the charm and history of the United Kingdom with our curated day trips"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <ServiceCard 
            title="Historic Cities"
            description="Explore the cobbled streets of York, the scholarly atmosphere of Oxford and Cambridge, and Shakespeare's Stratford-upon-Avon."
            icon={<Book size={24} />}
            href="/services/day-trips"
            delay={100}
            className="h-full"
          />
          <ServiceCard 
            title="Scenic Countryside"
            description="Experience the natural beauty of the Lake District and the picturesque villages of the Cotswolds with our guided tours."
            icon={<MapPin size={24} />}
            href="/services/day-trips"
            delay={200}
            className="h-full"
          />
          <ServiceCard 
            title="Cultural Experiences"
            description="Immerse yourself in Beatles history in Liverpool or explore the magical world of Harry Potter at Warner Bros. Studio."
            icon={<Ticket size={24} />}
            href="/services/day-trips"
            delay={300}
            className="h-full"
          />
        </div>
        
        <div className="text-center mt-10">
          <Button 
            asChild
            className="bg-travel-gold hover:bg-travel-navy text-white"
          >
            <Link to="/services/day-trips">
              View All UK Day Trips
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UKDayTripsSection;
