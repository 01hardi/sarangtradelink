
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { Shield, Banknote, Home } from 'lucide-react';

const AccommodationOptions: React.FC = () => {
  const benefits = [
    {
      icon: <Banknote className="h-8 w-8" />,
      title: "Save on Platform Fees",
      description: "Skip unnecessary platform fees by booking directly with hosts, saving hundreds or thousands on your vacation rentals."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified and Secure",
      description: "All our locations are thoroughly verified and secured, ensuring a safe and comfortable stay for our guests."
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Direct Host Communication",
      description: "Communicate directly with property hosts for a more personal and efficient booking experience."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionHeading 
            title="Direct Booking Benefits"
            subtitle="Save Money, Stay Better"
            centered
          />
          <p className="mt-4 text-gray-600">
            Booking directly with hosts is a win-win for guests and hosts. It allows guests to sidestep Airbnb fees, 
            potentially saving them hundreds or thousands on vacation rentals. SARANG provides safe, verified and secured 
            locations which are accessible directly without any channels allowing you to enjoy your stays hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-travel-light-gray rounded-full text-travel-gold mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-travel-gold hover:bg-travel-navy text-white px-8 py-6 text-lg"
          >
            Start Booking Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccommodationOptions;
