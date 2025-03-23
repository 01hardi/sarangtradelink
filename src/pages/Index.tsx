
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Map, Globe, CreditCard, Building, PlaneTakeoff, ShieldCheck, Ticket, UserCheck 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import FeaturedDestination from '@/components/FeaturedDestination';
import InquiryForm from '@/components/InquiryForm';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="London Cityscape" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
              Discover The Magic Of London & The UK
            </h1>
            <p className="text-xl text-white/90 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
              Explore iconic landmarks, hidden gems, and unforgettable experiences with our expert travel services and personalized tours.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '900ms' }}>
              <Button 
                asChild
                className="bg-travel-gold hover:bg-travel-navy text-white px-8 py-6 text-lg"
              >
                <Link to="/services/london-experience">
                  Explore Our Tours
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-travel-navy px-8 py-6 text-lg"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Premium Services"
            subtitle="We provide a comprehensive range of travel services to make your UK experience truly memorable."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ServiceCard 
              title="London Experience"
              description="Guided tours of iconic London landmarks, skip-the-line tickets, and special access to popular attractions."
              icon={<Map size={24} />}
              href="/services/london-experience"
              delay={100}
            />
            <ServiceCard 
              title="Visa Services"
              description="Professional assistance with Schengen and USA visa applications, documentation, and application tracking."
              icon={<Globe size={24} />}
              href="/services/visa-services"
              delay={200}
            />
            <ServiceCard 
              title="Accommodation"
              description="Handpicked hotel recommendations, special rates, and booking assistance for comfortable stays."
              icon={<Building size={24} />}
              href="/services/accommodation"
              delay={300}
            />
            <ServiceCard 
              title="UK Day Trips"
              description="Unforgettable day excursions to Stonehenge, Oxford, Warner Bros Studio, and more."
              icon={<PlaneTakeoff size={24} />}
              href="/services/day-trips"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block text-xs font-medium px-3 py-1 bg-travel-cream text-travel-gold rounded-full mb-4">
                ABOUT WANDERLONDON
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-travel-navy mb-6">
                Your Trusted Travel Partner For UK Adventures
              </h2>
              <p className="text-travel-dark-gray mb-6">
                At WanderLondon, we are passionate about sharing the magic and history of London and the UK with travelers from around the world. 
                With over 10 years of experience in the travel industry, our team of local experts curates exceptional experiences tailored to your preferences.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <ShieldCheck size={20} className="text-travel-gold mr-2" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <UserCheck size={20} className="text-travel-gold mr-2" />
                  <span>Local Experts</span>
                </div>
                <div className="flex items-center">
                  <Ticket size={20} className="text-travel-gold mr-2" />
                  <span>Skip-the-Line Access</span>
                </div>
                <div className="flex items-center">
                  <CreditCard size={20} className="text-travel-gold mr-2" />
                  <span>Secure Payments</span>
                </div>
              </div>
              <Button 
                asChild
                className="bg-travel-gold hover:bg-travel-navy text-white"
              >
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="London Tour Guide" 
                className="w-full h-auto rounded-lg shadow-lg object-cover opacity-0 animate-fade-in"
                style={{ animationDelay: '300ms' }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block opacity-0 animate-slide-up" style={{ animationDelay: '600ms' }}>
                <div className="flex items-center">
                  <div className="bg-travel-gold text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center mr-3">
                    10+
                  </div>
                  <div>
                    <p className="font-medium text-travel-navy">Years of</p>
                    <p className="font-medium text-travel-navy">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Destinations */}
      <section className="py-20 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Popular Destinations"
            subtitle="Explore some of the most sought-after destinations in and around London."
            centered
          />
          
          <div className="space-y-12 mt-12">
            <FeaturedDestination 
              title="London City Tour"
              description="Experience the heart of London with guided tours to Buckingham Palace, Tower of London, Westminster Abbey, and more. Enjoy skip-the-line access and insider knowledge from our expert guides."
              imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              href="/services/london-experience"
              imagePosition="right"
            />
            
            <FeaturedDestination 
              title="Stonehenge & Bath"
              description="Discover the mysterious ancient monument of Stonehenge and explore the elegant Georgian city of Bath with its Roman baths and picturesque streets on this popular day trip from London."
              imageUrl="https://images.unsplash.com/photo-1599833975787-5c143f373c30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              href="/services/day-trips"
              imagePosition="left"
            />
            
            <FeaturedDestination 
              title="Warner Bros. Studio Tour"
              description="Step into the magical world of Harry Potter with a behind-the-scenes tour of the Warner Bros. Studio. See original sets, costumes, and props used in the beloved films."
              imageUrl="https://images.unsplash.com/photo-1598153346810-860daa814c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              href="/services/day-trips"
              imagePosition="right"
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Clients Say"
            subtitle="Read about the experiences of travelers who have explored the UK with us."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <TestimonialCard 
              quote="Our family trip to London was simply perfect. The Warner Bros Studio tour was a highlight for our kids. WanderLondon took care of everything!"
              author="Sarah Johnson"
              location="United States"
              rating={5}
              imageUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            />
            
            <TestimonialCard 
              quote="The visa assistance service was incredibly helpful. The team guided me through the entire Schengen visa process and made it stress-free."
              author="Rajiv Patel"
              location="India"
              rating={5}
              imageUrl="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            />
            
            <TestimonialCard 
              quote="The day trip to Stonehenge and Bath was exceptional. Our guide was knowledgeable and entertaining, and the transportation was comfortable."
              author="Maria Rodriguez"
              location="Spain"
              rating={4}
              imageUrl="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* CTA & Contact Form */}
      <section className="py-20 bg-travel-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-xs font-medium px-3 py-1 bg-travel-gold/20 text-travel-gold rounded-full mb-4">
                GET IN TOUCH
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your UK Adventure?
              </h2>
              <p className="text-gray-300 mb-8">
                Contact us today to start planning your perfect UK trip. Our travel experts will help you create a tailored itinerary based on your interests, budget, and schedule.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-travel-gold/20 p-3 rounded-full mr-4">
                    <Map size={24} className="text-travel-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Our Office</h3>
                    <p className="text-gray-300">123 Westminster, London, UK SW1A 1AA</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-travel-gold/20 p-3 rounded-full mr-4">
                    <PlaneTakeoff size={24} className="text-travel-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Travel Consultation</h3>
                    <p className="text-gray-300">Free 30-minute consultation for all inquiries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-travel-gold/20 p-3 rounded-full mr-4">
                    <CreditCard size={24} className="text-travel-gold" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Secure Booking</h3>
                    <p className="text-gray-300">Flexible payment options with secure processing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
