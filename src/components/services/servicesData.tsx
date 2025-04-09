
import React from 'react';
import { Map, Building, Globe, DollarSign } from 'lucide-react';

export interface ServiceItemType {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  features: string[];
}

export const services: ServiceItemType[] = [
  {
    id: 1,
    title: "Travel Services",
    description: "Consulting and assisting your travel needs as per budget and nature of journey, navigating you to the best type of accredited tour arrangement as per industry standards who are ATOL/ABTA/IATA registered ®",
    icon: <Map className="h-12 w-12 text-travel-gold" />,
    path: "/services/day-trips",
    features: [
      "Personalized travel planning",
      "Accredited tour arrangements (ATOL/ABTA/IATA registered)",
      "Budget-friendly options",
      "Complete travel solutions"
    ]
  },
  {
    id: 2,
    title: "Financial Services",
    description: "We at Sarang offer seamless money transfer through IMPS/RTGS, door step cash collection, and by FCA regulated third-party applications for students and travelers requiring foreign exchange services.",
    icon: <DollarSign className="h-12 w-12 text-travel-gold" />,
    path: "/services/london-experience",
    features: [
      "Seamless money transfers (IMPS/RTGS)",
      "Door step cash collection",
      "FCA regulated third-party applications",
      "Foreign exchange for students and travelers"
    ]
  },
  {
    id: 3,
    title: "Accommodation & Airbnb",
    description: "As a market-leading management company, we deliver 75% occupancy through 60% direct bookings for your properties, helping you experience an exponential increase in income beyond traditional booking platforms.",
    icon: <Building className="h-12 w-12 text-travel-gold" />,
    path: "/services/accommodation",
    features: [
      "75% occupancy rates through expert management",
      "60% direct bookings, increasing profit margins",
      "Comprehensive property management",
      "Customer service excellence"
    ]
  },
  {
    id: 4,
    title: "Visa Services",
    description: "We assist with personal visa & immigration matters, from UK entry applications to guidance on innovator founder, TIER 2 skilled worker, self-sponsorship, Schengen & USA visitors visa services.",
    icon: <Globe className="h-12 w-12 text-travel-gold" />,
    path: "/services/visa-services",
    features: [
      "UK entry visa applications",
      "Innovator founder visa guidance",
      "TIER 2 skilled worker visas",
      "Schengen & USA visitors visas"
    ]
  }
];
