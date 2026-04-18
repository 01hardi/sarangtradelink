import React from 'react';
import Layout from '@/components/Layout';
import SectionHeading from '@/components/SectionHeading';
import BookingSection from '@/features/london-experience/BookingSection';
import { MapPin, Calendar, Camera, Clock, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ParisTour: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-travel-navy py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[url('https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-travel-navy via-travel-navy/60 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-travel-navy bg-travel-gold rounded-full uppercase">Exclusive Experience</span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 drop-shadow-lg">
            Magical Paris Tour
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Experience the romance, culture, and spirituality of Paris. From the iconic Eiffel Tower to the breathtaking BAPS Shri Swaminarayan Mandir.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button className="bg-travel-gold hover:bg-white hover:text-travel-navy text-white px-8 py-6 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              <a href="#booking">Book This Tour</a>
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-md text-lg transition-all duration-300">
              <a href="#itinerary">View Itinerary</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Brochures Section */}
      <section className="py-16 bg-white relative -mt-10 rounded-t-[3rem] z-20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Download Our Itineraries"
            subtitle="Get the full details of our magical Paris tours"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 mb-10 max-w-4xl mx-auto">
            {/* Brochure 1 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[340px] aspect-square rounded-xl overflow-hidden shadow-md mb-6 relative border border-gray-100">
                 <img src="https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80" alt="9 Day Itinerary Brochure" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                   <div className="w-full px-6 pb-6 text-center">
                     <span className="block text-travel-gold font-medium mb-1 tracking-widest text-sm uppercase">Quick Gateway</span>
                     <span className="text-white font-playfair text-2xl font-bold drop-shadow-md">9-Day Tour</span>
                   </div>
                 </div>
              </div>
              <h3 className="text-xl font-bold text-travel-navy mb-4 font-playfair text-center">Ultimate Paris Experience</h3>
              <Button asChild className="bg-travel-navy text-white px-6 rounded-md font-normal">
                 <a href="https://drive.google.com/file/d/1dq8txkD61vLw3DLqjyBdVIr7E0cCYIft/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Download PDF Brochure 
                 </a>
              </Button>
            </div>
            
            {/* Brochure 2 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[340px] aspect-square rounded-xl overflow-hidden shadow-md mb-6 relative border border-gray-100">
                 <img src="https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=600&q=80" alt="11 Day Itinerary Brochure" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                   <div className="w-full px-6 pb-6 text-center">
                     <span className="block text-travel-gold font-medium mb-1 tracking-widest text-sm uppercase">Comprehensive</span>
                     <span className="text-white font-playfair text-2xl font-bold drop-shadow-md">11-Day Tour</span>
                   </div>
                 </div>
              </div>
              <h3 className="text-xl font-bold text-travel-navy mb-4 font-playfair text-center">Essential Paris & Mandir</h3>
              <Button asChild className="bg-travel-navy text-white px-6 rounded-md font-normal">
                 <a href="https://drive.google.com/file/d/1qv_QPpHQlsC20yuWFS9LvPQU2d8u8I7q/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Download PDF Brochure
                 </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Highlights */}
      <section className="py-16 bg-travel-light-gray relative z-10">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Tour Highlights"
            subtitle="The very best of the French Capital"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 mb-16">
            {[
              { icon: <MapPin className="text-travel-gold mb-3" size={32} />, title: "Iconic Landmarks", desc: "Eiffel Tower, Louvre Museum & Arc de Triomphe" },
              { icon: <Star className="text-travel-gold mb-3" size={32} />, title: "Spiritual Marvel", desc: "Exclusive visit to the newly inaugurated BAPS Mandir Paris" },
              { icon: <Camera className="text-travel-gold mb-3" size={32} />, title: "Seine River Cruise", desc: "See the city illuminated during a magical river cruise" },
              { icon: <Calendar className="text-travel-gold mb-3" size={32} />, title: "Flexible Packages", desc: "Choose from 9-day to 11-day comprehensive itineraries" },
            ].map((highlight, idx) => (
              <div key={idx} className="bg-travel-light-gray p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group">
                <div className="p-4 bg-white rounded-full shadow-inner mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-travel-navy mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.desc}</p>
              </div>
            ))}
          </div>

          {/* Main Itinerary */}
          <div id="itinerary" className="mt-20 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-playfair text-travel-navy">The Ultimate Parisian Experience</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our carefully curated Paris Tour blends world-famous European attractions with profound spiritual visits. Experience the cosmopolitan charm of central Paris, taking in the art, the dining, and the architecture, and find deep serenity at the beautiful cultural complexes just outside the center.
                </p>
                
                <div className="space-y-6">
                  <div className="flex bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-travel-navy text-travel-gold rounded-full flex items-center justify-center font-bold text-xl">01</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-travel-navy mb-2">BAPS Shri Swaminarayan Mandir</h4>
                      <p className="text-gray-600 text-sm">Experience the magnificent new Hindu temple in Bussy-Saint-Georges. Marvel at the intricate traditional stone architecture, participate in the peaceful atmosphere, and enjoy the breathtaking cultural exhibitions. A true spiritual oasis in France.</p>
                    </div>
                  </div>
                  
                  <div className="flex bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-travel-navy text-travel-gold rounded-full flex items-center justify-center font-bold text-xl">02</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-travel-navy mb-2">The Heart of Paris</h4>
                      <p className="text-gray-600 text-sm">Skip-the-line access to the Eiffel Tower for panoramic city views. Stroll down the Champs-Élysées, ending at the magnificent Arc de Triomphe for perfect photos.</p>
                    </div>
                  </div>

                  <div className="flex bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-travel-navy text-travel-gold rounded-full flex items-center justify-center font-bold text-xl">03</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-travel-navy mb-2">Art & Culture</h4>
                      <p className="text-gray-600 text-sm">Guided tour of the Louvre Museum focusing on masterpieces like the Mona Lisa and Venus de Milo. Followed by a relaxing evening cruise along the River Seine.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-2">
                {/* Visual collage layout */}
                <div className="grid grid-cols-2 gap-2">
                  <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" alt="Eiffel Tower" className="w-full h-48 md:h-56 object-cover rounded-tl-xl" />
                  <img src="https://www.arte-charpentier.com/wp-content/uploads/2024/05/imageprincipale-BAPS-site-web1.jpg" alt="BAPS Architecture Style" className="w-full h-48 md:h-56 object-cover rounded-tr-xl" />
                  <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80" alt="Seine River" className="w-full h-48 md:h-56 object-cover rounded-b-xl col-span-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Inclusions */}
      <section className="py-16 bg-travel-light-gray">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What's Included"
            subtitle="Everything you need for a stress-free journey"
            centered
          />
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-md mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Eurostar / Flight Tickets from UK",
                "Premium Hotel Accommodation (3*/4*)",
                "Daily Continental or Indian Breakfast",
                "Dedicated Tour Manager",
                "Guided Tour of BAPS Parisian Mandir",
                "Eiffel Tower Entry Tickets",
                " Seine River Cruise Pass",
                "Luxury Coach Transfers in Paris"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="text-green-600" size={14} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <div id="booking" className="scroll-mt-10">
        <section className="py-12 bg-travel-navy text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 font-playfair">Ready to experience Paris?</h2>
                <p className="mb-6 text-gray-300">Let our travel experts handle all the arrangements. From visa assistance to bespoke itineraries, we ensure your journey to the City of Light is nothing short of magical.</p>
                <div className="bg-travel-navy/40 p-6 rounded-lg border border-travel-gold/50 shadow-inner">
                  <h3 className="text-xl mb-4 font-playfair text-travel-gold">Secure Your Spot Early</h3>
                  <p className="text-sm text-gray-300 mb-4">Due to high demand for the BAPS Mandir visits combined with central Paris tours, we recommend booking at least 4 weeks in advance.</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock size={16} className="text-travel-gold"/>
                    <span>Immediate confirmation on deposit</span>
                  </div>
                </div>
              </div>
              <div>
                <BookingSection title="Inquire About Paris Tour" subtitle="Receive a customized quote within 24 hours" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ParisTour;
