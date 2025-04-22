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
    image: 'data:image/jpeg;base64,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?auto=format&fit=crop&w=800&q=80',
    location: 'North Yorkshire, England',
    featured: true
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    description: 'Experience the birthplace of The Beatles and explore its maritime history and cultural attractions.',
    image: 'https://www.google.co.uk/imgres?q=places%20iconic%20liverpool%20england%20landmark%20photos&imgurl=https%3A%2F%2Fmedia.timeout.com%2Fimages%2F105915459%2F750%2F562%2Fimage.jpg&imgrefurl=https%3A%2F%2Fwww.timeout.com%2Fliverpool%2Fthings-to-do%2Fbest-things-to-do-in-liverpool&docid=RX9032VCqN_9PM&tbnid=T5APYf_NzHxyQM&vet=12ahUKEwj72r_orOqMAxX5XEEAHRZbLpcQM3oECGQQAA..i&w=750&h=562&hcb=2&ved=2ahUKEwj72r_orOqMAxX5XEEAHRZbLpcQM3oECGQQAA?auto=format&fit=crop&w=800&q=80',
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
