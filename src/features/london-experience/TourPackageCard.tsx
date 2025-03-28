
import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface TourPackage {
  id: number;
  title: string;
  duration: string;
  groupSize: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  highlights: string[];
  image: string;
}

interface TourPackageCardProps {
  tour: TourPackage;
}

const TourPackageCard: React.FC<TourPackageCardProps> = ({ tour }) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-56">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback image if the original fails to load
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1588778226089-02b66a38adbe?auto=format&fit=crop&w=800&q=80";
          }}
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-travel-gold text-white">Popular</Badge>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{tour.title}</h3>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span>{tour.rating}</span>
              <span className="text-gray-500 text-sm ml-1">({tour.reviews})</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-gray-500 text-sm">From</div>
            <div className="text-xl font-bold text-travel-navy">{tour.price}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {tour.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {tour.groupSize}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{tour.description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-travel-gold hover:bg-travel-navy">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TourPackageCard;
