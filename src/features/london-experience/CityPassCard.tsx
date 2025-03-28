
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
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="overflow-hidden">
        <img 
          src={pass.image} 
          alt={pass.name} 
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            // Fallback image if the original fails to load
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80";
          }}
        />
      </div>
      <div className="p-5">
        <h3 className="font-medium text-lg mb-2">{pass.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pass.description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-gray-900 font-semibold">{pass.price}</div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-md" size="sm">
            Purchase
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CityPassCard;
