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
    image: 'https://www.onthegotours.com/repository/View-of-York-Minster-853621719396907.jpg?auto=format&fit=crop&w=800&q=80',
    location: 'North Yorkshire, England',
    featured: true
  },
  {
    id: 'liverpool',
    name: 'Liverpool',
    description: 'Experience the birthplace of The Beatles and explore its maritime history and cultural attractions.',
    image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/64/c1/62.jpg?auto=format&fit=crop&w=800&q=80',
    location: 'Merseyside, England',
    featured: true
  },
  {
    id: 'cambridge',
    name: 'Cambridge',
    description: 'Tour the prestigious university city and enjoy punting along the scenic River Cam.',
    image: 'https://cdn.getyourguide.com/img/location/5b1450f00ed7d.jpeg/68.jpg?auto=format&fit=crop&w=800&q=80',
    location: 'Cambridgeshire, England',
    featured: true
  },
  {
    id: 'cardiff',
    name: 'Cardiff',
    description: 'Explore the Welsh capital with its impressive castle, beautiful bay area, and vibrant cultural scene.',
    image: 'https://images.ctfassets.net/uiu4umqyl5b5/1oLC5tQHieRMgym9dKnvzK/083e67ff3e621b57306d6835716c72f1/jonny-gios-SQQ81UjpoW4-unsplash-1.jpg?fm=webp&f=center?auto=format&fit=crop&w=800&q=80',
    location: 'Wales'
  },
  {
    id: 'manchester',
    name: 'Manchester',
    description: 'Discover this vibrant northern city known for its industrial heritage, music scene, and football culture.',
    image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,f_jpg,h_822,q_75,w_1220/http://manchester.newmindmedia.com/wsimgs/olympic-parade_1992645352.jpg?auto=format&fit=crop&w=800&q=80',
    location: 'Greater Manchester, England'
  },
  {
    id: 'belfast',
    name: 'Belfast',
    description: 'Visit Northern Ireland\'s capital, home to the Titanic Museum and gateway to the Giant\'s Causeway.',
    image: 'https://irelandwide.com/wp-content/uploads/2023/02/Best-Northern-Ireland-Landmarks.jpg?auto=format&fit=crop&w=800&q=80',
    location: 'Northern Ireland'
  },
  {
    id: 'glasgow',
    name: 'Glasgow',
    description: 'Scotland\'s largest city offers Victorian architecture, a rich cultural scene, and friendly locals.',
    image: 'https://www.scottishtours.co.uk/wwwroot/images/blog/8-The-Kelpies.jpg?auto=format&fit=crop&w=800&q=80',
    location: 'Scotland'
  },
  {
    id: 'oxford',
    name: 'Oxford',
    description: 'The "City of Dreaming Spires" is renowned for its prestigious university, beautiful architecture, and literary history.',
    image: 'https://www.theenglishhome.co.uk/_gatsby/file/e4190c31d46b272255c52a2b95259cdc/ben-seymour-nqBUTBsDQNM-unsplash.jpg?auto=format&fit=crop&w=800&q=80',
    location: 'Oxfordshire, England'
  },
  {
    id: 'brighton',
    name: 'Brighton',
    description: 'This vibrant coastal city offers a famous pier, unique shopping in The Lanes, and a relaxed seaside atmosphere.',
    image: 'https://media.timeout.com/images/106033334/750/562/image.jpg?auto=format&fit=crop&w=800&q=80',
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
