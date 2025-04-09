
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from './components/ServiceCard';
import ProcessStep from './components/ProcessStep';
import ServiceBenefits from './components/ServiceBenefits';
import ExchangeRateCard from './components/ExchangeRateCard';
import { financialServices, processList } from './data/financialServicesData';

const FinancialServicesList: React.FC = () => {
  return (
    <section className="py-16 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Our Financial Solutions" 
          title="Services We Offer"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {financialServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              icon={service.icon}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <SectionHeading 
            subtitle="Simple Process" 
            title="How It Works"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {processList.map((step, index) => (
              <ProcessStep
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
                isLast={index === processList.length - 1}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ServiceBenefits />
            <ExchangeRateCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesList;
