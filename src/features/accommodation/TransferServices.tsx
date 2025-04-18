import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';
import { Car, Bus, Users, Clock } from 'lucide-react';

const TransferServices: React.FC = () => {
  const transferServices = [
    {
      title: "Airport Transfers",
      description: "Travel seamlessly to and from London's major airports with Addison Lee. We provide reliable, premium and comfortable transfers to Heathrow, Gatwick, Luton, Stansted, and London City airports.",
      icon: <Car className="h-10 w-10" />,
      features: [
        "Professional uniformed drivers",
        "Flight tracking service",
        "Meet & greet at airports",
        "Fixed competitive prices",
        "24/7 customer support"
      ]
    },
    {
      title: "Direct Booking Benefits",
      description: "Booking directly with hosts is a win-win for guests and hosts. It allows guests to sidestep Airbnb fees, potentially saving them hundreds or thousands on vacation rentals.",
      icon: <Clock className="h-10 w-10" />,
      features: [
        "Save on platform fees",
        "Direct communication with hosts",
        "Verified and secure locations",
        "Hassle-free stays",
        "Flexible booking options"
      ]
    },
    {
      title: "Private Car Service",
      description: "Luxury vehicles with professional drivers for convenient travel throughout London and beyond.",
      icon: <Clock className="h-10 w-10" />,
      features: [
        "Professional, experienced drivers",
        "Modern luxury vehicles",
        "Hourly hire available",
        "City tours with driver",
        "Corporate travel arrangements"
      ]
    },
    {
      title: "Group Transportation",
      description: "Comfortable minibuses and coaches for larger groups traveling together in the UK.",
      icon: <Users className="h-10 w-10" />,
      features: [
        "Vehicles for 8-50 passengers",
        "Day trip transportation",
        "Event & conference transfers",
        "Multi-day tour transport",
        "Customized itineraries"
      ]
    },
    {
      title: "Train Station Transfers",
      description: "Convenient pick-up and drop-off service at all major London train stations.",
      icon: <Bus className="h-10 w-10" />,
      features: [
        "All major stations covered",
        "Easy meeting points",
        "Assistance with luggage",
        "Reliable, punctual service",
        "Pre-booked or on-demand options"
      ]
    }
  ];

  return (
    <section className="py-16 bg-travel-navy text-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Travel in Style" 
          title="Transfer Services"
          light={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {transferServices.map((service, index) => (
            <Card key={index} className="bg-white/[0.05] border-0 text-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="text-travel-gold">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-travel-gold mr-2">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransferServices;
