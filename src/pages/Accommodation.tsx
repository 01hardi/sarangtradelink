
import React from 'react';
import Layout from '@/components/Layout';

const Accommodation: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col justify-center items-center px-4 py-16 bg-travel-navy">
        <div className="max-w-2xl bg-white/90 rounded-xl shadow-md p-8 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-travel-navy">Accommodation & Airbnb</h1>
          <p className="text-lg text-gray-800">
            Booking directly with hosts is a win-win for guests and hosts. It allows guests to sidestep Airbnb fees, potentially saving them hundreds or thousands on vacation rentals. Hosts too, find direct booking preferable. However, it is non-trivial to find the direct booking pages. <span className="font-bold text-travel-bright-blue">SARANG</span> provides a safe, verified and secured locations which are accessible directly without any channels allowing you enjoy your stays hastlefree.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Accommodation;

