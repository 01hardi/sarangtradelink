
import React from "react";
import SectionHeading from "@/components/SectionHeading";

const ValueProposition = () => {
  const values = [
    {
      number: 1,
      title: "Comprehensive Services",
      description: "From hotel reservations to bespoke ground services, we offer complete tourism solutions across multiple countries.",
    },
    {
      number: 2,
      title: "Global Presence",
      description: "With offices in UK, USA, Australia, UAE, & India, we provide seamless destination management services worldwide.",
    },
    {
      number: 3,
      title: "Direct Contracts",
      description: "We maintain direct contracts with hotels and ground suppliers, ensuring competitive rates and reliable service.",
    },
    {
      number: 4,
      title: "Own Fleet",
      description: "Our own fleet of vehicles ranging from cars to coaches ensures quality transportation services.",
    },
  ];

  return (
    <section className="py-16 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Our Services"
          title="Comprehensive Travel Solutions"
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
