
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-white text-travel-navy hover:bg-travel-gold hover:text-white transition-colors">
            Learn More
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{attraction.name}</h3>
        <p className="text-gray-600 text-sm">{attraction.description}</p>
      </div>
    </div>
  );
};

export default AttractionCard;
