
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, DollarSign, CreditCard, Banknote, Percent, Calendar } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const FinancialServicesList: React.FC = () => {
  const financialServices = [
    {
      title: "Money Transfer",
      description: "Fast and secure international money transfers with competitive exchange rates.",
      features: [
        "IMPS/RTGS transfers",
        "Door step cash collection",
        "Low transaction fees",
        "Real-time tracking"
      ],
      icon: <Banknote className="h-10 w-10 text-travel-gold" />
    },
    {
      title: "Foreign Exchange",
      description: "Competitive rates for foreign currency exchange for travelers and students.",
      features: [
        "Multiple currency options",
        "Best market rates",
        "Expert market guidance",
        "No hidden fees"
      ],
      icon: <DollarSign className="h-10 w-10 text-travel-gold" />
    },
    {
      title: "Student Services",
      description: "Specialized financial services for international students studying in the UK.",
      features: [
        "Tuition fee transfers",
        "Student living expenses",
        "Educational loan assistance",
        "Documentation support"
      ],
      icon: <CreditCard className="h-10 w-10 text-travel-gold" />
    },
    {
      title: "Travel Finance",
      description: "Financial solutions specifically tailored for international travelers.",
      features: [
        "Travel cash cards",
        "Emergency fund transfers",
        "Travel insurance payment",
        "Hotel & tour payments"
      ],
      icon: <Percent className="h-10 w-10 text-travel-gold" />
    }
  ];

  const processList = [
    {
      step: "1",
      title: "Consultation",
      description: "Discuss your financial requirements with our experts."
    },
    {
      step: "2",
      title: "Documentation",
      description: "Complete the necessary paperwork for your transaction."
    },
    {
      step: "3",
      title: "Transfer Execution",
      description: "Secure processing of your financial transaction."
    },
    {
      step: "4",
      title: "Confirmation",
      description: "Receive confirmation and tracking details for your transfer."
    }
  ];

  return (
    <section className="py-16 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Our Financial Solutions" 
          title="Services We Offer"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {financialServices.map((service, index) => (
            <Card key={index} className="shadow-sm border border-gray-100 h-full">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-travel-gold mr-1 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16">
          <SectionHeading 
            subtitle="Simple Process" 
            title="How It Works"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {processList.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-travel-navy w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto">
                  {step.step}
                </div>
                <div className="relative">
                  {index < processList.length - 1 && (
                    <div className="hidden md:block absolute w-full h-0.5 bg-gray-300 top-8 -right-1/2 z-0"></div>
                  )}
                </div>
                <h3 className="font-medium text-lg mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-2xl font-playfair font-bold mb-4">Why Choose Our Financial Services?</h3>
              <p className="text-gray-600 mb-4">
                At Sarang, we understand the importance of reliable and efficient financial services, especially for
                international travelers and students. Our team of experts is dedicated to providing you with the best
                possible service, ensuring your money reaches its destination safely and on time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-travel-gold mr-2 shrink-0 mt-0.5" />
                  <span>FCA regulated third-party applications for secure transactions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-travel-gold mr-2 shrink-0 mt-0.5" />
                  <span>Competitive exchange rates that save you money</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-travel-gold mr-2 shrink-0 mt-0.5" />
                  <span>Fast and reliable service with regular status updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-travel-gold mr-2 shrink-0 mt-0.5" />
                  <span>Dedicated customer support available 7 days a week</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-travel-gold mr-2 shrink-0 mt-0.5" />
                  <span>Transparent fee structure with no hidden costs</span>
                </li>
              </ul>
            </div>
            <div className="bg-travel-navy rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Current Exchange Rates</h3>
              <p className="text-sm mb-4">Last updated: {new Date().toLocaleDateString()}</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                  <div className="flex items-center">
                    <span className="font-medium">GBP → USD</span>
                  </div>
                  <div className="font-bold">1.27</div>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                  <div className="flex items-center">
                    <span className="font-medium">GBP → EUR</span>
                  </div>
                  <div className="font-bold">1.17</div>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                  <div className="flex items-center">
                    <span className="font-medium">GBP → INR</span>
                  </div>
                  <div className="font-bold">105.84</div>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-600">
                  <div className="flex items-center">
                    <span className="font-medium">GBP → CAD</span>
                  </div>
                  <div className="font-bold">1.72</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="font-medium">GBP → AUD</span>
                  </div>
                  <div className="font-bold">1.90</div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-300">
                *Rates are indicative only and subject to change.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialServicesList;
