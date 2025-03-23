
import React, { useState } from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { DayTrip } from './dayTripsData';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Badge } from '@/components/ui/badge';

interface DayTripCardProps {
  trip: DayTrip;
}

const DayTripCard: React.FC<DayTripCardProps> = ({ trip }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'historic':
        return 'bg-blue-500';
      case 'countryside':
        return 'bg-green-500';
      case 'cultural':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <>
      <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-300">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={trip.image} 
            alt={trip.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <Badge className={`absolute top-3 right-3 ${getCategoryColor(trip.category)} text-white`}>
            {trip.category.charAt(0).toUpperCase() + trip.category.slice(1)}
          </Badge>
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-bold text-travel-navy">{trip.name}</h3>
        </CardHeader>
        <CardContent className="pb-0 flex-grow">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <MapPin size={16} />
            <span>{trip.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Clock size={16} />
            <span>{trip.duration}</span>
          </div>
          <p className="text-gray-600 mb-4">{trip.description}</p>
          <p className="font-bold text-travel-navy mb-1">From {trip.price} per person</p>
        </CardContent>
        <CardFooter>
          <div className="flex justify-between items-center w-full">
            <Button 
              variant="outline" 
              className="border-travel-gold text-travel-gold hover:bg-travel-gold hover:text-white"
              onClick={() => setShowDetails(true)}
            >
              View Details
            </Button>
            <Button className="bg-travel-gold hover:bg-travel-navy text-white">
              Book Now
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair text-travel-navy">{trip.name}</DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-travel-navy">
              <MapPin size={16} className="text-travel-gold" />
              {trip.location} • <span>{trip.distance}</span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img 
                src={trip.image} 
                alt={trip.name} 
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="mt-4">
                <p className="font-bold text-lg mb-2">Highlights:</p>
                <ul className="space-y-1">
                  {trip.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight size={16} className="text-travel-gold mr-2 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <p className="text-gray-700">{trip.longDescription}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Duration:</span>
                  <span>{trip.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Price:</span>
                  <span className="font-bold text-travel-navy">{trip.price} per person</span>
                </div>
              </div>
              <Button className="w-full bg-travel-gold hover:bg-travel-navy text-white">
                Book This Trip
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DayTripCard;
