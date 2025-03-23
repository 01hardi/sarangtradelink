
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Attractions from './Attractions';
import CityPasses from './CityPasses';
import { Attraction } from './AttractionCard';
import { CityPass } from './CityPassCard';

interface TabsSectionProps {
  attractions: Attraction[];
  cityPasses: CityPass[];
}

const TabsSection: React.FC<TabsSectionProps> = ({ attractions, cityPasses }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="attractions" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="attractions">
                Major Landmarks
              </TabsTrigger>
              <TabsTrigger value="passes">
                City Passes
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="attractions">
            <Attractions attractions={attractions} />
          </TabsContent>
          
          <TabsContent value="passes">
            <CityPasses cityPasses={cityPasses} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TabsSection;
