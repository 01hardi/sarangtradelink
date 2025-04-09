
import React from 'react';

const DayTripsHero: React.FC = () => {
  return (
    <section className="relative h-[50vh] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?auto=format&fit=crop&w=1600&q=80')" }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair mb-4 leading-tight">
            Travel Services
          </h1>
          <p className="text-xl text-white leading-relaxed max-w-2xl">
            Comprehensive travel solutions for exploring the United Kingdom and beyond
          </p>
        </div>
      </div>
    </section>
  );
};

export default DayTripsHero;
