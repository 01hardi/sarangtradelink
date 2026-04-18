import React from "react";
import SectionHeading from "@/components/SectionHeading";
import FeaturedDestination from "@/components/FeaturedDestination";

const FeaturedDestinationsSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Popular Destinations"
          subtitle="Explore some of the most sought-after destinations in and around London."
          centered
        />

        <div className="space-y-12 mt-12">
          <FeaturedDestination
            title="Paris Tour"
            description="Discover the magic of Paris with our guided tours to the Eiffel Tower, Louvre Museum, Notre Dame Cathedral, and more. Enjoy skip-the-line access and insider knowledge from our expert guides."
            imageUrl="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D"
            href="/services/paris-tour"
            imagePosition="right"
            objectPosition="object-top"
          />

          <FeaturedDestination
            title="London City Tour"
            description="Experience the heart of London with guided tours to Buckingham Palace, Tower of London, Westminster Abbey, and more. Enjoy skip-the-line access and insider knowledge from our expert guides."
            imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            href="/services/london-experience"
            imagePosition="left"
          />

          <FeaturedDestination
            title="Edinburgh City Tour"
            description="Discover the historic Royal Mile, Edinburgh Castle, and the charming Old Town of Scotland's capital city. Our guided tours bring Edinburgh's rich history and culture to life."
            imageUrl="https://media.chillisauce.com/image/upload/c_fill,q_auto,f_auto,dpr_2,w_600/60f11ff6655a5129d546?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            href="/services/day-trips"
            imagePosition="right"
          />

          
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinationsSection;
