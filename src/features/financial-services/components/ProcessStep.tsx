
import React from 'react';

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  isLast: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
  isLast
}) => {
  return (
    <div className="text-center">
      <div className="bg-travel-navy w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
        {step}
      </div>
      <div className="relative">
        {!isLast && (
          <div className="hidden md:block absolute w-full h-0.5 bg-gray-300 top-8 -right-1/2 z-0"></div>
        )}
      </div>
      <h3 className="font-medium text-lg mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProcessStep;
