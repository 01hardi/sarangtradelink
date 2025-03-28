
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
    <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden h-52">
        <img 
          src={attraction.image} 
          alt={attraction.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            // Fallback to a placeholder image if the original fails to load
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1470904228243-795988a47f61?auto=format&fit=crop&w=800&q=80";
          }}
        />
      </div>
      <div className="p-5">
        <h3 className="font-medium text-lg mb-2">{attraction.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{attraction.description}</p>
        <Button size="sm" className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-md">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default AttractionCard;
