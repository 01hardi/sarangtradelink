
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const VisaServicesList: React.FC = () => {
  const visaServices = [
    {
      title: "Tourist Visa Assistance",
      description: "Comprehensive guidance for UK tourist visa applications.",
      features: [
        "Document checklist and preparation",
        "Application form filling assistance",
        "Interview preparation",
        "Visa tracking assistance",
        "24/7 support during application process"
      ],
      icon: "🌍"
    },
    {
      title: "Business Visa Services",
      description: "Streamlined visa process for business travelers to the UK.",
      features: [
        "Business invitation letter templates",
        "Documentation guidance for business purposes",
        "Expedited processing options",
        "Meeting and conference coordination",
        "Business travel schedule planning"
      ],
      icon: "💼"
    },
    {
      title: "Student Visa Support",
      description: "Expert assistance for those planning to study in the UK.",
      features: [
        "University and college admission guidance",
        "Student visa requirements explanation",
        "Financial documentation assistance",
        "Accommodation arrangements",
        "Pre-departure orientation"
      ],
      icon: "🎓"
    },
    {
      title: "Family Visit Visas",
      description: "Helping families reunite with UK-based relatives.",
      features: [
        "Relationship documentation guidance",
        "Sponsor letter templates",
        "Financial requirement explanation",
        "Application tracking",
        "Appeal assistance if needed"
      ],
      icon: "👪"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading 
          subtitle="Expert Visa Assistance" 
          title="Our Visa Services"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {visaServices.map((service, index) => (
            <Card key={index} className="shadow-sm border border-gray-100">
              <CardHeader>
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-travel-gold mr-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-travel-light-gray p-8 rounded-lg">
          <SectionHeading 
            subtitle="Our Process" 
            title="How Our Visa Service Works"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We assess your travel needs and determine the best visa type for your purpose."
              },
              {
                step: "2",
                title: "Document Preparation",
                description: "We provide a comprehensive checklist and guide you through gathering required documentation."
              },
              {
                step: "3",
                title: "Application Filing",
                description: "We assist with accurately completing forms and submitting your application properly."
              },
              {
                step: "4",
                title: "Follow-up & Support",
                description: "We track your application and provide support until your visa is approved."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-travel-navy w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mx-auto">
                  {step.step}
                </div>
                <h3 className="font-medium text-lg mt-4 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaServicesList;
