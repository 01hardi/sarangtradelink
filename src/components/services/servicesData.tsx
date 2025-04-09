
import React from 'react';
import { Map, BookOpen, Building, Car, DollarSign, BarChart } from 'lucide-react';

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
    title: "City Sightseeing",
    description: "Discover the best of London with HOHO Bus, Attractions, Merlin Pass, London Pass and more. From the Tower of London to West End shows, we'll help you experience the city like a local.",
    icon: <Map className="h-12 w-12 text-travel-gold" />,
    path: "/services/london-experience",
    features: [
      "Private & group guided tours",
      "Skip-the-line tickets to major attractions",
      "Themed tours (royal London, historic sites, etc.)",
      "West End show bookings & dining packages"
    ]
  },
  {
    id: 2,
    title: "Visa Services",
    description: "Navigate the visa application process with confidence. We support Schengen, US Visitor, Tier 1, 2, 4 and 5 Worker Visa, and ILR applications.",
    icon: <BookOpen className="h-12 w-12 text-travel-gold" />,
    path: "/services/visa-services",
    features: [
      "Application assistance & document review",
      "Personalized application guidance",
      "Fast-track processing options",
      "Post-visa support services"
    ]
  },
  {
    id: 3,
    title: "Accommodation & Transfers",
    description: "Find your perfect stay in London with our accommodation booking service including cheap air BnB deals. We also offer airport pickup & drop off services.",
    icon: <Building className="h-12 w-12 text-travel-gold" />,
    path: "/services/accommodation",
    features: [
      "Curated hotel selections across all budgets",
      "Luxury apartment & home rentals",
      "Airport & train station transfers",
      "Group transportation solutions"
    ]
  },
  {
    id: 4,
    title: "Day Trips",
    description: "Extend your London adventure with unforgettable day trips to Windsor, Bath, Oxford, Cotswold Stonehenge and other iconic destinations around the UK.",
    icon: <Car className="h-12 w-12 text-travel-gold" />,
    path: "/services/day-trips",
    features: [
      "Windsor Castle tours",
      "Bath & Stonehenge experiences",
      "Oxford & Cotswolds village tours",
      "Customizable private day excursions"
    ]
  },
  {
    id: 5,
    title: "Forex and Currency",
    description: "Get competitive exchange rates for your travel needs with our currency conversion services. We offer Pound, Dollar, and INR conversion.",
    icon: <DollarSign className="h-12 w-12 text-travel-gold" />,
    path: "/services/accommodation",
    features: [
      "Competitive exchange rates",
      "Multi-currency options",
      "Quick and secure transactions",
      "Travel money advice"
    ]
  },
  {
    id: 6,
    title: "Trade",
    description: "Our import-export services facilitate the movement of seasonal products between markets, helping businesses expand their reach.",
    icon: <BarChart className="h-12 w-12 text-travel-gold" />,
    path: "/services/accommodation",
    features: [
      "Seasonal product importing",
      "Export facilitation",
      "Customs documentation assistance",
      "Market research and strategy"
    ]
  }
];
