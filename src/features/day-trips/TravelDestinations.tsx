
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
  featured?: boolean;
}

const destinations: Destination[] = [
  {
    id: 'london',
    name: 'London',
    description: 'Explore the historic landmarks, world-class museums, and vibrant neighborhoods of England\'s capital city.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    location: 'England',
    featured: true
  },
  {
    id: 'edinburgh',
    name: 'Edinburgh',
    description: 'Discover the medieval Old Town, majestic castle, and stunning views in Scotland\'s historic capital.',
    image: 'https://images.unsplash.com/photo-1580746738099-75b3b5a43c55?auto=format&fit=crop&w=800&q=80',
    location: 'Scotland',
    featured: true
  },
  {
    id: 'bath',
    name: 'Bath',
    description: 'Visit this UNESCO World Heritage city famous for its Roman-built baths and Georgian architecture.',
    image: 'https://images.unsplash.com/photo-1565711545376-b3fc7f4c2acf?auto=format&fit=crop&w=800&q=80',
    location: 'Somerset, England',
    featured: true
  },
  {
    id: 'york',
    name: 'York',
    description: 'Walk the medieval city walls and explore the magnificent York Minster in this historic northern city.',
    image: 'https://images.unsplash.com/photo-1599639668273-a217801acfc1?auto=format&fit=crop&w=800&q=80',
    location: 'North Yorkshire, England',
    featured: true
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    description: 'Experience the birthplace of The Beatles and explore its maritime history and cultural attractions.',
    image: 'https://images.unsplash.com/photo-1568974082867-2c58d3d532b5?auto=format&fit=crop&w=800&q=80',
    location: 'Merseyside, England',
    featured: true
  },
  {
    id: 'cambridge',
    name: 'Cambridge',
    description: 'Tour the prestigious university city and enjoy punting along the scenic River Cam.',
    image: 'https://images.unsplash.com/photo-1597524678053-5e6dae98a29c?auto=format&fit=crop&w=800&q=80',
    location: 'Cambridgeshire, England',
    featured: true
  },
  {
    id: 'cardiff',
    name: 'Cardiff',
    description: 'Explore the Welsh capital with its impressive castle, beautiful bay area, and vibrant cultural scene.',
    image: 'https://images.unsplash.com/photo-1595916707038-8a4736ba2a5d?auto=format&fit=crop&w=800&q=80',
    location: 'Wales'
  },
  {
    id: 'manchester',
    name: 'Manchester',
    description: 'Discover this vibrant northern city known for its industrial heritage, music scene, and football culture.',
    image: 'https://images.unsplash.com/photo-1612002254399-57b75b9d79e2?auto=format&fit=crop&w=800&q=80',
    location: 'Greater Manchester, England'
  },
  {
    id: 'belfast',
    name: 'Belfast',
    description: 'Visit Northern Ireland\'s capital, home to the Titanic Museum and gateway to the Giant\'s Causeway.',
    image: 'https://images.unsplash.com/photo-1569430044636-127e52e8fe62?auto=format&fit=crop&w=800&q=80',
    location: 'Northern Ireland'
  },
  {
    id: 'glasgow',
    name: 'Glasgow',
    description: 'Scotland\'s largest city offers Victorian architecture, a rich cultural scene, and friendly locals.',
    image: 'https://images.unsplash.com/photo-1637265274869-49be19243371?auto=format&fit=crop&w=800&q=80',
    location: 'Scotland'
  },
  {
    id: 'oxford',
    name: 'Oxford',
    description: 'The "City of Dreaming Spires" is renowned for its prestigious university, beautiful architecture, and literary history.',
    image: 'https://images.unsplash.com/photo-1604906145285-d44ccd3b6192?auto=format&fit=crop&w=800&q=80',
    location: 'Oxfordshire, England'
  },
  {
    id: 'brighton',
    name: 'Brighton',
    description: 'This vibrant coastal city offers a famous pier, unique shopping in The Lanes, and a relaxed seaside atmosphere.',
    image: 'https://images.unsplash.com/photo-1617219302953-5c115fa4b364?auto=format&fit=crop&w=800&q=80',
    location: 'East Sussex, England'
  }
];

const TravelDestinations: React.FC = () => {
  const featuredDestinations = destinations.filter(dest => dest.featured);
  const otherDestinations = destinations.filter(dest => !dest.featured);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Popular UK Destinations"
          subtitle="Discover the best places to visit across the United Kingdom"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {featuredDestinations.map((destination) => (
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
                  Explore
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mt-16 mb-6 text-center">More Amazing Destinations</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherDestinations.map((destination) => (
            <Link to={`#${destination.id}`} key={destination.id} className="group">
              <div className="relative h-32 rounded-md overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-2">
                  <h3 className="text-white font-bold text-center text-sm">
                    {destination.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button 
            asChild
            className="bg-travel-gold hover:bg-travel-navy text-white"
          >
            <Link to="/contact">
              Plan Your UK Journey
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TravelDestinations;
