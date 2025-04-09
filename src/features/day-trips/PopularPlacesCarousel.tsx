
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface PopularPlace {
  id: number;
  name: string;
  location: string;
  image: string;
}

const popularPlaces: PopularPlace[] = [
  {
    id: 1,
    name: "Stonehenge",
    location: "Wiltshire",
    image: "https://images.unsplash.com/photo-1599833975787-5c143f373c30?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Windsor Castle",
    location: "Windsor",
    image: "https://images.unsplash.com/photo-1591449188152-8c2bee19872a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Oxford University",
    location: "Oxford",
    image: "https://images.unsplash.com/photo-1589894404892-7310b92ea7a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Lake District",
    location: "Cumbria",
    image: "https://images.unsplash.com/photo-1568246627702-b59f7a33740c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Giant's Causeway",
    location: "Northern Ireland",
    image: "https://images.unsplash.com/photo-1591118205242-8be58af35bf9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Edinburgh Castle",
    location: "Edinburgh",
    image: "https://images.unsplash.com/photo-1569982270505-f0c862c510f3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Tower Bridge",
    location: "London",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80"
  }
];

const PopularPlacesCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Must-See Places in the UK"
          subtitle="Iconic landmarks and breathtaking attractions"
          centered
        />
        
        <div className="mt-10 relative mx-auto max-w-5xl px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full"
          >
            <CarouselContent>
              {popularPlaces.map((place) => (
                <CarouselItem key={place.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80";
                          }}
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg">{place.name}</h3>
                        <p className="text-travel-gold text-sm">{place.location}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80" />
            <CarouselNext className="right-2 bg-white/80" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PopularPlacesCarousel;
