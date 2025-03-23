
import React from 'react';
import { Clock, Users, Star, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-64">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-travel-gold text-white font-medium">Most Popular</Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{tour.title}</CardTitle>
            <CardDescription className="flex items-center mt-2">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-medium">{tour.rating}</span>
              <span className="text-gray-500 ml-1">({tour.reviews} reviews)</span>
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">From</div>
            <div className="text-2xl font-bold text-travel-navy">{tour.price}</div>
            <div className="text-sm text-gray-500">per person</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {tour.duration}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {tour.groupSize}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{tour.description}</p>
        <div className="space-y-2">
          {tour.highlights.slice(0, 3).map((highlight, i) => (
            <div key={i} className="flex items-start">
              <Check className="h-4 w-4 text-travel-gold mr-2 mt-1 flex-shrink-0" />
              <span className="text-sm">{highlight}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-travel-gold hover:bg-travel-navy text-white transition-colors">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TourPackageCard;
