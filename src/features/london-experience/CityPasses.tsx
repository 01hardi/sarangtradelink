
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import CityPassCard, { CityPass } from './CityPassCard';

interface CityPassesProps {
  cityPasses: CityPass[];
}

const CityPasses: React.FC<CityPassesProps> = ({ cityPasses }) => {
  return (
    <>
      <SectionHeading 
        subtitle="Save Time & Money" 
        title="Skip-the-Line & City Passes"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {cityPasses.map((pass, index) => (
          <CityPassCard key={index} pass={pass} />
        ))}
      </div>
    </>
  );
};

export default CityPasses;
