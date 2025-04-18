
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/features/about/components/HeroSection";
import CompanyOverview from "@/features/about/components/CompanyOverview";
import ValueProposition from "@/features/about/components/ValueProposition";
import TeamSection from "@/features/about/components/TeamSection";
import ContactSection from "@/features/about/components/ContactSection";

const About = () => {
  return (
    <Layout>
      <HeroSection />
      <CompanyOverview />
      <ValueProposition />
      <TeamSection />
      <ContactSection />
    </Layout>
  );
};

export default About;
