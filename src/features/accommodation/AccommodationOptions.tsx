
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { Bed, Star, CreditCard, MapPin, Coffee } from 'lucide-react';

const AccommodationOptions: React.FC = () => {
  const accommodations = [
    {
      title: "Luxury Hotels",
      description: "Experience the height of London luxury with our carefully selected 5-star hotels in prime locations.",
      features: ["Concierge service", "Spa facilities", "Fine dining", "Central locations", "Exclusive packages"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Boutique Hotels",
      description: "Stay in charming, character-filled boutique hotels that offer unique experiences and personalized service.",
      features: ["Unique design", "Personalized service", "Local experience", "Intimate atmosphere", "Special amenities"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      icon: <Coffee className="h-6 w-6" />
    },
    {
      title: "Budget-Friendly Options",
      description: "Quality accommodations that won't break the bank, perfect for travelers who prefer to spend on experiences.",
      features: ["Great value", "Clean and comfortable", "Convenient locations", "Free WiFi", "Breakfast options"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      title: "Serviced Apartments",
      description: "Home-like comfort with hotel amenities, ideal for longer stays or family travel to London.",
      features: ["Fully equipped kitchen", "Living areas", "Housekeeping", "Laundry facilities", "Extended stay discounts"],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      icon: <Bed className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Stay in Comfort" 
          title="Accommodation Options"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {accommodations.map((option, index) => (
            <Card key={index} className="overflow-hidden shadow-sm border-0">
              <div className="h-48 overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback image if the original fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-travel-light-gray p-2 rounded-md text-travel-navy">
                  {option.icon}
                </div>
                <CardTitle>{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">{option.description}</p>
                <ul className="space-y-2 mb-4">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-travel-gold mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-travel-gold hover:bg-travel-navy text-white">
                  Explore Options
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-travel-light-gray p-8 rounded-lg mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading 
              subtitle="Prime Locations" 
              title="Stay in London's Best Areas"
              centered
            />
            <p className="text-gray-600 mb-8">
              We offer accommodation options in London's most desirable locations, ensuring you're always close to major attractions, dining, shopping, and transport links.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Westminster", icon: <MapPin className="h-6 w-6" /> },
                { name: "Kensington", icon: <MapPin className="h-6 w-6" /> },
                { name: "Covent Garden", icon: <MapPin className="h-6 w-6" /> },
                { name: "South Bank", icon: <MapPin className="h-6 w-6" /> },
              ].map((location, index) => (
                <div key={index} className="bg-white p-4 rounded-md text-center">
                  <div className="flex justify-center mb-2 text-travel-gold">
                    {location.icon}
                  </div>
                  <h3 className="font-medium">{location.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationOptions;
