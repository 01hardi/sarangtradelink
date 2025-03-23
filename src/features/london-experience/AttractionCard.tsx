
import React from 'react';
import { Button } from '@/components/ui/button';

export interface Attraction {
  name: string;
  description: string;
  image: string;
}

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm">
      <div className="relative">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className="w-full h-44 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-base mb-2">{attraction.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{attraction.description}</p>
        <Button size="sm" className="w-full bg-travel-navy hover:bg-travel-navy/90 text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default AttractionCard;
