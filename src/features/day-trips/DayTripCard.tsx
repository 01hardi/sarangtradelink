
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
        return 'bg-blue-400';
      case 'countryside':
        return 'bg-green-400';
      case 'cultural':
        return 'bg-purple-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <>
      <Card className="h-full flex flex-col hover:shadow-sm transition-shadow duration-300 overflow-hidden rounded-md">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={trip.image} 
            alt={trip.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={(e) => {
              // Fallback image if the original fails to load
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80";
            }}
          />
          <Badge className={`absolute top-3 right-3 ${getCategoryColor(trip.category)} text-white font-normal`}>
            {trip.category.charAt(0).toUpperCase() + trip.category.slice(1)}
          </Badge>
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-lg font-semibold text-travel-navy">{trip.name}</h3>
        </CardHeader>
        <CardContent className="pb-0 flex-grow">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <MapPin size={14} />
            <span>{trip.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Clock size={14} />
            <span>{trip.duration}</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">{trip.description}</p>
          <p className="font-semibold text-travel-navy mb-1">From {trip.price} per person</p>
        </CardContent>
        <CardFooter>
          <div className="flex justify-between items-center w-full">
            <Button 
              variant="outline" 
              size="sm"
              className="border-travel-navy text-travel-navy hover:bg-travel-navy hover:text-white"
              onClick={() => setShowDetails(true)}
            >
              Details
            </Button>
            <Button 
              size="sm"
              className="bg-travel-navy hover:bg-travel-navy/90 text-white"
            >
              Explore
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-playfair text-travel-navy">{trip.name}</DialogTitle>
            <DialogDescription className="flex items-center gap-2 text-travel-navy">
              <MapPin size={14} className="text-travel-gold" />
              {trip.location} • <span>{trip.distance}</span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img 
                src={trip.image} 
                alt={trip.name} 
                className="w-full h-56 object-cover rounded-md"
                onError={(e) => {
                  // Fallback image if the original fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80";
                }}
              />
              <div className="mt-4">
                <p className="font-semibold text-base mb-2">Highlights:</p>
                <ul className="space-y-1">
                  {trip.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <ArrowRight size={14} className="text-travel-gold mr-2 mt-1 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <p className="text-gray-700 text-sm">{trip.longDescription}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-medium">Duration:</span>
                  <span>{trip.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Price:</span>
                  <span className="font-bold text-travel-navy">{trip.price} per person</span>
                </div>
              </div>
              <Button className="w-full bg-travel-navy hover:bg-travel-navy/90 text-white">
                Explore
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DayTripCard;
