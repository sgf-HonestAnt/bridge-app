"use client";

import { HeaderOne } from "@/components";
import MapBox from "@/components/map";
import { EnhancedResource } from "@/types";
import { fetchResources } from "@/utils/fetchResources";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";

const ResourceByIdPage = () => {
  const [resources, setResources] = useState<EnhancedResource[] | undefined>(
    undefined
  );

  const pathname = usePathname();
  const id = pathname.split("/").pop();

  useEffect(() => {
    if (!id) return;

    const fetch = async () => {
      const _resources = await fetchResources(id);
      setResources(_resources);
    };

    fetch();
  }, [id]);

  console.log({ id, resources });

  if (!resources || resources.length < 1) {
    return (
      <div>
        <HeaderOne>Resource</HeaderOne>
        <p>Loading resource details...</p>
      </div>
    );
  }

  return (
    <div>
      <HeaderOne>{resources[0].name}</HeaderOne>
      <p>{resources[0].description}</p>
      <div>Provided by: {resources[0].provider.name}</div>
      <div className='flex align-middle justify-between gap-2'>
        <span>
          <FaArrowPointer />
          {resources[0].provider.address.postalCode}
        </span>
        <span>
          <FaPhone />
          {resources[0].provider.contactPhone}
        </span>
      </div>
      <MapBox
        lat={resources[0].provider.location.latitude}
        lng={resources[0].provider.location.longitude}
        name={resources[0].provider.name}
      />
    </div>
  );
};

export default ResourceByIdPage;
