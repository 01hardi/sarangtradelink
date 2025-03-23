
import React from 'react';

const DayTripsHero: React.FC = () => {
  return (
    <section className="relative h-[50vh] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: "linear-gradient(rgba(10, 35, 66, 0.7), rgba(10, 35, 66, 0.6)), url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4">
            UK Day Trips From London
          </h1>
          <p className="text-xl text-white mb-6">
            Discover England's historic cities, stunning countryside, and cultural landmarks with our expert-guided day trips
          </p>
        </div>
      </div>
    </section>
  );
};

export default DayTripsHero;
