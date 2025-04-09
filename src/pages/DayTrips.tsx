
import React from 'react';
import Layout from '@/components/Layout';
import DayTripsHero from '@/features/day-trips/DayTripsHero';
import BookingSection from '@/features/london-experience/BookingSection';
import TravelDestinations from '@/features/day-trips/TravelDestinations';
import SectionHeading from '@/components/SectionHeading';
import { MapPin, Calendar, Ticket, Plane } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PopularActivities from '@/features/day-trips/PopularActivities';

const DayTrips: React.FC = () => {
  return (
    <Layout>
      <DayTripsHero />
      
      {/* Travel Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Comprehensive Travel Services"
            subtitle="Expert assistance for all your UK travel needs"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16">
            <div className="bg-travel-light-gray p-8 rounded-lg">
              <h3 className="text-xl font-bold text-travel-navy mb-4">Why Choose Our Travel Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-travel-gold mr-2">✓</span>
                  <span>Personalized itineraries tailored to your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-gold mr-2">✓</span>
                  <span>Access to exclusive attractions and skip-the-line tickets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-gold mr-2">✓</span>
                  <span>Partnerships with ATOL/ABTA/IATA registered tour operators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-gold mr-2">✓</span>
                  <span>Competitive pricing with best value guarantees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-travel-gold mr-2">✓</span>
                  <span>24/7 customer support during your travels</span>
                </li>
              </ul>
            </div>
            <div className="bg-travel-navy text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Services Include</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 border border-travel-gold rounded-md">
                  <h4 className="font-medium mb-1">Flight Bookings</h4>
                  <p className="text-sm text-gray-200">Domestic & international flights at competitive rates</p>
                </div>
                <div className="p-3 border border-travel-gold rounded-md">
                  <h4 className="font-medium mb-1">Accommodation</h4>
                  <p className="text-sm text-gray-200">Hotels, B&Bs, apartments & more across the UK</p>
                </div>
                <div className="p-3 border border-travel-gold rounded-md">
                  <h4 className="font-medium mb-1">Transportation</h4>
                  <p className="text-sm text-gray-200">Car hire, rail passes & airport transfers</p>
                </div>
                <div className="p-3 border border-travel-gold rounded-md">
                  <h4 className="font-medium mb-1">Tour Packages</h4>
                  <p className="text-sm text-gray-200">Pre-designed itineraries for hassle-free travel</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Travel Service Types */}
          <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4 mt-8 snap-x">
            <div className="w-64 flex-shrink-0 snap-start">
              <ServiceCard 
                title="Guided Tours"
                description="Expert-led tours to the UK's most iconic destinations with skip-the-line access and insider knowledge."
                icon={<MapPin size={24} />}
                href="/services/day-trips"
                delay={100}
              />
            </div>
            <div className="w-64 flex-shrink-0 snap-start">
              <ServiceCard 
                title="Travel Documentation"
                description="Assistance with travel permits, international driving licenses, and other essential travel documents."
                icon={<Plane size={24} />}
                href="/services/visa-services"
                delay={200}
              />
            </div>
            <div className="w-64 flex-shrink-0 snap-start">
              <ServiceCard 
                title="Event Tickets"
                description="Secure tickets for major UK events, West End shows, concerts, and sporting fixtures."
                icon={<Ticket size={24} />}
                href="/services/london-experience"
                delay={300}
              />
            </div>
            <div className="w-64 flex-shrink-0 snap-start">
              <ServiceCard 
                title="Seasonal Travel"
                description="Special packages for Christmas markets, summer festivals, and other seasonal attractions across the UK."
                icon={<Calendar size={24} />}
                href="/services/day-trips"
                delay={400}
              />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button 
              asChild
              className="bg-travel-gold hover:bg-travel-navy text-white"
            >
              <Link to="/contact">
                Contact Our Travel Experts
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations Section */}
      <TravelDestinations />
      
      {/* Popular Activities Section */}
      <PopularActivities />
      
      {/* Booking Section - Moved Inside Container */}
      <section className="py-12 bg-travel-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-playfair">Ready for Your UK Adventure?</h2>
              <p className="mb-6">Whether you're planning a short city break or an extended tour of the British Isles, our team of expert travel consultants is here to help create your perfect itinerary.</p>
              <div className="bg-travel-navy/40 p-6 rounded-lg border border-travel-gold">
                <h3 className="text-xl mb-4">Why Book With Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-travel-gold mr-2">✓</span>
                    <span>No hidden fees or charges</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-travel-gold mr-2">✓</span>
                    <span>Flexible booking options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-travel-gold mr-2">✓</span>
                    <span>Free cancellation on most bookings</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <BookingSection title="Make Your Travel Inquiry" subtitle="Our team will get back to you within 24 hours" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DayTrips;
