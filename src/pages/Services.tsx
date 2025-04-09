import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { ArrowRight, Map, BookOpen, Building, Car, DollarSign, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
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

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-travel-navy py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1520967824495-b529902acfab?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">Our Services</h1>
          <Breadcrumb className="text-white">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Services Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            subtitle="What We Offer" 
            title="Comprehensive Travel Services for Your London Journey"
          />
          <div className="max-w-3xl mx-auto text-center mt-6">
            <p className="text-gray-600">
              At Sarang Tradelink, we provide a complete range of services designed to make your London experience seamless and memorable. From guided tours of iconic landmarks to visa assistance, accommodation booking, and exciting day trips, we've got every aspect of your journey covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-playfair font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-travel-gold mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="bg-travel-gold hover:bg-travel-navy text-white transition-colors"
                      asChild
                    >
                      <Link to={service.path}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1520967824495-b529902acfab' : 
                           index === 1 ? '1551269901-5c5e14c25df7' : 
                           index === 2 ? '1618160702438-9b02ab6515c9' : 
                           index === 3 ? '1513836279014-a89f7a76ae86' :
                           index === 4 ? '1580048915913-4f5f6825b5f3' :
                           '1566994861939-3d507cf1a414'}?auto=format&fit=crop&w=800&q=80`} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg w-full h-auto"
                    onError={(e) => {
                      // Fallback image if the original fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-travel-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Ready to Plan Your London Adventure?</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Contact our team of London experts today to start planning your perfect trip. 
            Whether you're seeking guidance on attractions, need visa assistance, or want to book a complete travel package, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-travel-gold hover:bg-travel-light-gold text-white transition-colors"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-travel-navy transition-colors"
              asChild
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
