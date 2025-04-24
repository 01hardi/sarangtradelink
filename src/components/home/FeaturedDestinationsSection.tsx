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
            title="London City Tour"
            description="Experience the heart of London with guided tours to Buckingham Palace, Tower of London, Westminster Abbey, and more. Enjoy skip-the-line access and insider knowledge from our expert guides."
            imageUrl="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            href="/services/london-experience"
            imagePosition="right"
          />

          <FeaturedDestination
            title="Edinburgh City Tour"
            description="Discover the historic Royal Mile, Edinburgh Castle, and the charming Old Town of Scotland's capital city. Our guided tours bring Edinburgh's rich history and culture to life."
            imageUrl="https://media.chillisauce.com/image/upload/c_fill,q_auto,f_auto,dpr_2,w_600/60f11ff6655a5129d546?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
  );
};

export default FeaturedDestinationsSection;
