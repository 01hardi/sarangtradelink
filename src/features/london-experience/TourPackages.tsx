
import React from 'react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import TourPackageCard, { TourPackage } from './TourPackageCard';

interface TourPackagesProps {
  tourPackages: TourPackage[];
}

const TourPackages: React.FC<TourPackagesProps> = ({ tourPackages }) => {
  return (
    <section className="py-16 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Expert-Led Tours" 
          title="London Tours"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {tourPackages.map(tour => (
            <TourPackageCard key={tour.id} tour={tour} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button 
            variant="outline" 
            className="border-travel-gold text-travel-gold hover:bg-travel-gold hover:text-white transition-colors"
          >
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
