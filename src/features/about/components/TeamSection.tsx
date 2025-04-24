import React from "react";
import SectionHeading from "@/components/SectionHeading";
const TeamSection = () => {
  const teamMembers = [{
    name: "David Anderson",
    role: "Global Operations Director",
    image: "/images/team-1.jpg"
  }, {
    name: "Sarah Chen",
    role: "International Partnerships",
    image: "/images/team-2.jpg"
  }, {
    name: "Raj Patel",
    role: "Regional Director - Asia",
    image: "/images/team-3.jpg"
  }, {
    name: "Emma Thompson",
    role: "Client Relations Manager",
    image: "/images/team-4.jpg"
  }];
  return <section className="py-16">
      
    </section>;
};
const TeamMember = ({
  name,
  role,
  image
}: {
  name: string;
  role: string;
  image: string;
}) => <div className="text-center">
    <div className="relative mb-4 overflow-hidden rounded-lg group">
      <img src={image} alt={name} className="w-full h-auto transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-travel-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex space-x-3">
          <SocialIcon href="#" icon="github" />
          <SocialIcon href="#" icon="linkedin" />
        </div>
      </div>
    </div>
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-travel-gold">{role}</p>
  </div>;
const SocialIcon = ({
  href,
  icon
}: {
  href: string;
  icon: "github" | "linkedin";
}) => <a href={href} className="text-white hover:text-travel-gold">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      {icon === "github" ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> : <>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth={2} />
        </>}
    </svg>
  </a>;
export default TeamSection;