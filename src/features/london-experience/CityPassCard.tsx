
import React from 'react';
import { Button } from '@/components/ui/button';

export interface CityPass {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface CityPassCardProps {
  pass: CityPass;
}

const CityPassCard: React.FC<CityPassCardProps> = ({ pass }) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <img 
        src={pass.image} 
        alt={pass.name} 
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-base mb-2">{pass.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{pass.description}</p>
        <div className="text-travel-navy font-medium mb-3">{pass.price}</div>
        <Button className="w-full bg-travel-navy hover:bg-travel-navy/90 text-white" size="sm">
          Purchase Pass
        </Button>
      </div>
    </div>
  );
};

export default CityPassCard;
