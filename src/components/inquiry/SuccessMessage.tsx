
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuccessMessageProps {
  onReset: () => void;
  className?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset, className }) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md text-center ${className}`}>
      <div className="mb-4 mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-playfair font-bold text-travel-navy mb-2">Thank You!</h3>
      <p className="text-travel-dark-gray mb-6">
        Your inquiry has been submitted successfully. We will get back to you as soon as possible.
      </p>
      <Button 
        onClick={onReset}
        className="bg-travel-gold hover:bg-travel-navy text-white"
      >
        Submit Another Inquiry
      </Button>
    </div>
  );
};

export default SuccessMessage;
