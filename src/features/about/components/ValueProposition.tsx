
import React from "react";
import SectionHeading from "@/components/SectionHeading";

const ValueProposition = () => {
  const values = [
    {
      number: 1,
      title: "Local Expertise",
      description: "Our guides are passionate Londoners who share authentic insights and hidden gems of the city.",
    },
    {
      number: 2,
      title: "Complete Solutions",
      description: "From visa assistance to accommodation, we handle all aspects of your UK experience.",
    },
    {
      number: 3,
      title: "Tailored Service",
      description: "Every itinerary is customized to match your interests, schedule, and preferences perfectly.",
    },
    {
      number: 4,
      title: "24/7 Support",
      description: "Our dedicated team is always available to assist you throughout your journey in the UK.",
    },
  ];

  return (
    <section className="py-16 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Why Choose Us"
          title="The WanderLondon Difference"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value) => (
            <ValueCard key={value.number} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="w-16 h-16 bg-travel-gold/10 rounded-full flex items-center justify-center mb-4">
      <span className="text-3xl text-travel-gold">{number}</span>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ValueProposition;
