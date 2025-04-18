
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import InquiryForm from "@/components/InquiryForm";

const ContactSection = () => {
  return (
    <section className="py-16 bg-travel-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            subtitle="Get in Touch"
            title="Start Planning Your London Adventure"
          />
          <div className="mt-8">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
