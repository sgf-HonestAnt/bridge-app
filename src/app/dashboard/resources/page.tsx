import { HeaderFive, HeaderOne } from "@/components";
import { CardWithProviderId } from "@/components/card";
import { RESOURCES } from "@/mock-data/resources";
import React from "react";

const ResourcesPage: React.FC = () => {
  return (
    <div>
      <HeaderOne>Resources</HeaderOne>
      <div className='grid gap-4 md:grid-cols-2'>
        {RESOURCES.map((resource) => (
          <CardWithProviderId key={resource.id} id={resource.providedById}>
            <HeaderFive>{resource.name}</HeaderFive>
            <p>{resource.description}</p>
          </CardWithProviderId>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
