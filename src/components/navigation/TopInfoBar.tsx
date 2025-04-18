
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const TopInfoBar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - startX,
        y: e.clientY - startY
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div 
      className="hidden lg:block bg-travel-navy text-white py-2 cursor-move"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        position: 'relative',
        zIndex: isDragging ? 51 : 50,
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-6 text-sm items-center">
          <div className="flex items-center space-x-2">
            <Phone size={14} />
            <span>+44 7765793462</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>123 Westminster, London</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} />
            <span>Mon-Fri: 9AM - 6PM</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-travel-gold transition-colors">
            <Facebook size={16} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-travel-gold transition-colors">
            <Instagram size={16} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-travel-gold transition-colors">
            <Twitter size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
