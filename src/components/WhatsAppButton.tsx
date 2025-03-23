
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp business number
    const phoneNumber = '447123456789';
    const message = 'Hello! I would like to know more about your travel services.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast.success('Opening WhatsApp...', {
      description: 'You will be redirected to WhatsApp to chat with us.'
    });
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} fill="white" />
    </button>
  );
};

export default WhatsAppButton;
