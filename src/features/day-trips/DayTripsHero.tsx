
import React from 'react';

const DayTripsHero: React.FC = () => {
  return (
    <section className="relative h-[50vh] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80')" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4 leading-tight">
            UK Day Trips From London
          </h1>
          <p className="text-xl text-white leading-relaxed max-w-2xl">
            Discover England's historic cities, scenic countryside, and cultural landmarks
          </p>
        </div>
      </div>
    </section>
  );
};

export default DayTripsHero;
