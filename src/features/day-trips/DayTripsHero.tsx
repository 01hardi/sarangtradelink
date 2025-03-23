
import React from 'react';

const DayTripsHero: React.FC = () => {
  return (
    <section className="relative h-[40vh] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-3">
            UK Day Trips From London
          </h1>
          <p className="text-lg text-white">
            Discover England's historic cities, countryside, and landmarks
          </p>
        </div>
      </div>
    </section>
  );
};

export default DayTripsHero;
