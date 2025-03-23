
import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import DayTripCard from './DayTripCard';
import { dayTrips, DayTrip } from './dayTripsData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DayTripsList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTrips = activeCategory === 'all' 
    ? dayTrips 
    : dayTrips.filter(trip => trip.category === activeCategory);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Explore Beyond London"
          subtitle="Discover the best destinations within easy reach of London"
          centered
        />
        
        <div className="mt-6 mb-8 flex justify-center">
          <Tabs defaultValue="all" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all" onClick={() => setActiveCategory('all')}>All</TabsTrigger>
              <TabsTrigger value="historic" onClick={() => setActiveCategory('historic')}>Historic</TabsTrigger>
              <TabsTrigger value="countryside" onClick={() => setActiveCategory('countryside')}>Countryside</TabsTrigger>
              <TabsTrigger value="cultural" onClick={() => setActiveCategory('cultural')}>Cultural</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTrips.map((trip) => (
            <DayTripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayTripsList;
