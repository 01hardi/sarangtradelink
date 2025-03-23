
import React from 'react';
import SectionHeading from '@/components/SectionHeading';

const IntroSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <SectionHeading 
              subtitle="London Highlights" 
              title="Explore London with Our Guided Tours"
              className="text-left"
            />
            <p className="text-gray-600 mb-6">
              Experience the best of London with our expertly crafted tours and access to the city's top attractions. 
              Our knowledgeable guides will bring London's rich history and vibrant present to life.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-travel-light-gray p-3 rounded-lg text-center">
                <h3 className="text-travel-gold text-2xl font-bold mb-1">25+</h3>
                <p className="text-travel-navy text-sm">Unique Tours</p>
              </div>
              <div className="bg-travel-light-gray p-3 rounded-lg text-center">
                <h3 className="text-travel-gold text-2xl font-bold mb-1">50+</h3>
                <p className="text-travel-navy text-sm">Attractions</p>
              </div>
              <div className="bg-travel-light-gray p-3 rounded-lg text-center">
                <h3 className="text-travel-gold text-2xl font-bold mb-1">100%</h3>
                <p className="text-travel-navy text-sm">Satisfaction</p>
              </div>
              <div className="bg-travel-light-gray p-3 rounded-lg text-center">
                <h3 className="text-travel-gold text-2xl font-bold mb-1">15+</h3>
                <p className="text-travel-navy text-sm">Expert Guides</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/images/london-experience-main.jpg" 
              alt="London Experience" 
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
