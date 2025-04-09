
import React from 'react';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';

interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
}

const destinations: Destination[] = [
  {
    id: 'london',
    name: 'London',
    description: 'Explore the historic landmarks, world-class museums, and vibrant neighborhoods of England\'s capital city.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    location: 'England'
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh',
    description: 'Discover the medieval Old Town, majestic castle, and stunning views in Scotland\'s historic capital.',
    image: 'https://images.unsplash.com/photo-1580746738099-75b3b5a43c55?auto=format&fit=crop&w=800&q=80',
    location: 'Scotland'
  },
  {
    id: 'bath',
    name: 'Bath',
    description: 'Visit this UNESCO World Heritage city famous for its Roman-built baths and Georgian architecture.',
    image: 'https://images.unsplash.com/photo-1565711545376-b3fc7f4c2acf?auto=format&fit=crop&w=800&q=80',
    location: 'Somerset, England'
  },
  {
    id: 'york',
    name: 'York',
    description: 'Walk the medieval city walls and explore the magnificent York Minster in this historic northern city.',
    image: 'https://images.unsplash.com/photo-1599639668273-a217801acfc1?auto=format&fit=crop&w=800&q=80',
    location: 'North Yorkshire, England'
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    description: 'Experience the birthplace of The Beatles and explore its maritime history and cultural attractions.',
    image: 'https://images.unsplash.com/photo-1568974082867-2c58d3d532b5?auto=format&fit=crop&w=800&q=80',
    location: 'Merseyside, England'
  },
  {
    id: 'cambridge',
    name: 'Cambridge',
    description: 'Tour the prestigious university city and enjoy punting along the scenic River Cam.',
    image: 'https://images.unsplash.com/photo-1597524678053-5e6dae98a29c?auto=format&fit=crop&w=800&q=80',
    location: 'Cambridgeshire, England'
  }
];

const TravelDestinations: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Popular UK Destinations"
          subtitle="Discover the best places to visit across the United Kingdom"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    // Fallback image if the original fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <CardContent className="pt-6 pb-2 flex-grow">
                <CardTitle className="text-xl font-playfair mb-2">{destination.name}</CardTitle>
                <div className="flex items-center text-travel-gold mb-3">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <p className="text-gray-600 text-sm">{destination.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-travel-navy hover:bg-travel-gold text-white transition-colors">
                  Explore Tours
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelDestinations;
