
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={pass.image} 
        alt={pass.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{pass.name}</h3>
        <p className="text-gray-600 mb-4">{pass.description}</p>
        <div className="text-travel-navy font-semibold mb-4">{pass.price}</div>
        <Button className="w-full bg-travel-gold hover:bg-travel-navy text-white transition-colors">
          Purchase Pass
        </Button>
      </div>
    </div>
  );
};

export default CityPassCard;
