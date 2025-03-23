
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import AttractionCard, { Attraction } from './AttractionCard';

interface AttractionsProps {
  attractions: Attraction[];
}

const Attractions: React.FC<AttractionsProps> = ({ attractions }) => {
  return (
    <>
      <SectionHeading 
        subtitle="Must-See Destinations" 
        title="London's Top Attractions"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {attractions.map((attraction, index) => (
          <AttractionCard key={index} attraction={attraction} />
        ))}
      </div>
    </>
  );
};

export default Attractions;
