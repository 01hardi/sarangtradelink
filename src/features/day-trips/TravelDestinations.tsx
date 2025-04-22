import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
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
    image: 'https://media.chillisauce.com/image/upload/c_fill,q_auto,f_auto,dpr_2,w_600/60f11ff6655a5129d546?auto=format&fit=crop&w=8',
    location: 'Scotland',
    featured: true
  },
  {
    id: 'bath',
    name: 'Bath',
    description: 'Visit this UNESCO World Heritage city famous for its Roman-built baths and Georgian architecture.',
    image: 'https://d19lgisewk9l6l.cloudfront.net/assetbank/Bath_England_66545.jpg?auto=format&fit=crop&w=800&q=80',
    location: 'Somerset, England',
    featured: true
  },
  {
    id: 'york',
    name: 'York',
    description: 'Walk the medieval city walls and explore the magnificent York Minster in this historic northern city.',
    image: '?auto=format&fit=crop&w=800&q=80',
    location: 'North Yorkshire, England',
    featured: true
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    description: 'Experience the birthplace of The Beatles and explore its maritime history and cultural attractions.',
    image: 'data:image/jpeg;base64,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?auto=format&fit=crop&w=800&q=80',
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
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Popular UK Destinations"
          subtitle="Discover the best places to visit across the United Kingdom"
          centered
        />
        
        {/* Medium-sized destination cards in a 4-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
              <div className="h-40 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <CardContent className="pt-3 px-4 pb-4 flex-grow">
                <CardTitle className="text-base font-playfair mb-2">{destination.name}</CardTitle>
                <div className="flex items-center text-travel-gold mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-xs">{destination.location}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{destination.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
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
