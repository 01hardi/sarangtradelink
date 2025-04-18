
import React from 'react';
import { Users, Briefcase, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const vehicles = [
  {
    name: "Select",
    image: "/lovable-uploads/cb84de26-af43-4379-b38b-81e42bafd24e.png",
    passengers: 4,
    luggage: 2,
    isElectric: true
  },
  {
    name: "Black Taxi",
    image: "/images/black-taxi.jpg",
    passengers: 5,
    luggage: 2,
    isElectric: false
  },
  {
    name: "Select+",
    image: "/images/select-plus.jpg",
    passengers: 6,
    luggage: 2,
    isElectric: false
  }
];

const VehicleSelector: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-travel-navy">Select Your Vehicle</h2>
            <Button className="bg-black text-white hover:bg-gray-800">
              Book Now
            </Button>
          </div>
          
          <div className="space-y-4">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="hover:border-travel-gold transition-colors cursor-pointer">
                <CardContent className="flex items-center p-6">
                  <div className="w-48 h-32 relative mr-6">
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.name} vehicle`}
                      className="w-full h-full object-contain"
                    />
                    {vehicle.isElectric && (
                      <span className="absolute top-0 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
                        ELECTRIC
                      </span>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-semibold mr-2">{vehicle.name}</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info size={16} className="text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View vehicle details</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <Users size={20} className="text-gray-400 mr-2" />
                        <span>{vehicle.passengers}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={20} className="text-gray-400 mr-2" />
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="mt-4 text-sm text-gray-500">
            By booking you agree to our terms and conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default VehicleSelector;
