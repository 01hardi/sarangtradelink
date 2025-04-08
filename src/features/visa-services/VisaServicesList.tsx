
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const VisaServicesList: React.FC = () => {
  const visaServices = [
    {
      title: "Tourist Visa Assistance",
      description: "Comprehensive guidance for UK tourist visa applications.",
      features: [
        "Document checklist and preparation",
        "Application form filling assistance",
        "Interview preparation",
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
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          {visaServices.map((service, index) => (
            <Card key={index} className="shadow-sm border border-gray-100 h-full">
              <CardHeader className="pb-2">
                <div className="text-3xl mb-1">{service.icon}</div>
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
        
        <div className="mt-12">
          <div className="bg-travel-light-gray p-8 rounded-lg mb-12">
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
          
          {/* Visa Information from Image */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-travel-navy">VISA SERVICE</h3>
              
              <p className="mb-6">Never easy? Don't want to go through the hassle?</p>
              
              <p className="text-sm mb-4">Our experienced visa team will be able to help you with your Schengen Visas. If a visa's passenger responsibility to make sure that they have the right documents for their country of destination, we will act as your local partner to guide you through this procedure by checking your documents and make sure it is accurate and in order when you are applying visa on your own.</p>
              
              <p className="text-sm mb-4">For people intending to travel, need to ensure that they have the right visa before their travel. Firstly check with our holiday planner if you are eligible for a visa on arrival or visa exemption, to avoid unnecessary additional costs for visa application.</p>
              
              <p className="text-sm mb-4">As appointed to deal, attend the French Visa Application Centre (TLS Contact in person) for their biometric details to be recorded except for children under 12 and those who have had a biometric Schengen visa issued after 02/11/2015. Minors holding in-country birth ID or passport must have both parents attend the service for appointment booking and submit the application on child's behalf and collect passport once the visa is ready. Those applicants who are required to provide biometrics will need to attend the Centre between 08:00 – 12:00 on the day of their appointment to provide collection.</p>
              
              <p className="text-sm mb-8">Now is up to 60-90 working days (depending on countries but including all consulate or nation holiday synchronize with France. Some countries may take four weeks to issue, however with us you can check status synonymous with France, the biggest issue is at the time but the embassy.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair font-bold mb-4 text-travel-navy">SCHENGEN TOURIST VISA DOCUMENT REQUIREMENTS:</h3>
              
              <ul className="list-disc pl-5 space-y-2 mb-8">
                <li>Passport, valid for at least 3 months beyond the dates of travel</li>
                <li>Old passport (if available)</li>
                <li>2 passport-size color photographs with white background (35x45 mm) (must be recent for France, and 3 months for Netherlands)</li>
                <li>UK/EU passport must be linked with Extra account or UK Biometric must provide UK Immigration status (Photo page and Bio page code)</li>
                <li>2 passport photographs, 35 x 45mm, taken within the past 6 months</li>
                <li>Visa application form, completed and signed</li>
                <li>Employment letter on letter head with 3 months of appointment date</li>
                <li>UK proof of the past 3 years</li>
                <li>Travel insurance valid for all Schengen countries</li>
                <li>Flight itinerary (not to be purchased until visa is issued)</li>
                <li>Hotel reservations for the entire trip</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair font-bold mb-4 text-travel-navy">SUPPORTING INFORMATION:</h3>
              
              <ul className="list-disc pl-5 space-y-2 mb-8">
                <li>Persons eligible for a Schengen visa must have "BIO" type blank visa pages and cannot be over ten years old</li>
                <li>A visa fee of €80 for adults and €40 for children between 6-12 is paid during the month prior to the application. The client will need Visa-information-email balance that credit of £200.00 per person per day of stay</li>
                <li>A Schengen insurance policy (BUC) the validity of which corresponds to the duration of stay</li>
                <li>Hospital/Medical/health costs that may be incurred (Minimum cover must be at least 30,000 Euros)</li>
                <li>A sponsor letter needs to be provided if the ticket is of unusual and traveled by BUC parents</li>
                <li>If you are planning to stay with friends or relatives, you will need to provide a letter of invitation</li>
                <li>For post study work tier 1 visa (PSW UK visa holders are EU need) original ID number or University degree certificate</li>
                <li>If not traveling without parents, Final call itinerary for parent is required to discuss with BUC Package & Birth Statement must be from the emigration period</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair font-bold mb-4 text-travel-navy">SENDING & RECEIVING DOCUMENTS:</h3>
              
              <p className="text-sm mb-8">Documents should be submitted either by post or in person by visiting our office. If you are sending by post, we highly recommend using Royal Mail Special Delivery, which guarantees next day delivery or any other courier service such as UPS / DPD / Parcel Force.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-playfair font-bold mb-4 text-travel-navy">Schengen Visa Prices</h3>
              
              <p className="text-sm mb-4">Extra cost for travel Schengen visa fees are applicable, if traveling with us.</p>
              
              <p className="text-sm italic mb-4">Note: *Has been based rate applicable for Netherlands embassy only. Please call us for any other embassy visa cost.</p>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/5">Applicable Service Fees</TableHead>
                    <TableHead>ADULT</TableHead>
                    <TableHead>CHILD (0-11 YEARS)</TableHead>
                    <TableHead>CHILD (12-16 YEARS)</TableHead>
                    <TableHead>EU DEPENDENT</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Embassy</TableCell>
                    <TableCell>€80</TableCell>
                    <TableCell>€40</TableCell>
                    <TableCell>€80</TableCell>
                    <TableCell>€0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Admin</TableCell>
                    <TableCell>£95</TableCell>
                    <TableCell>£65</TableCell>
                    <TableCell>£95</TableCell>
                    <TableCell>£75</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>TLS Service - Not Collecting</TableCell>
                    <TableCell>£35</TableCell>
                    <TableCell>£35</TableCell>
                    <TableCell>£35</TableCell>
                    <TableCell>£35</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>With Priority</TableCell>
                    <TableCell>£85</TableCell>
                    <TableCell>£85</TableCell>
                    <TableCell>£85</TableCell>
                    <TableCell>£85</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Appointment Only Service</TableCell>
                    <TableCell>£60</TableCell>
                    <TableCell>£60</TableCell>
                    <TableCell>£60</TableCell>
                    <TableCell>£60</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaServicesList;
