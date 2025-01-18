"use client";

import { Button, HeaderFive, HeaderOne } from "@/components";
import { EnhancedCard } from "@/components/card";
import { usePagination } from "@/hooks/pagination";
import {
  EnhancedBusinessContact,
  EnhancedCharityContact,
  EnhancedResource,
  Individual,
} from "@/types";
import { fetchResources } from "@/utils/fetchResources";
import { getUserFromLocalStorage } from "@/utils/localStorage";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ResourcesPage: React.FC = () => {
  const [user, setUser] = useState<
    Individual | EnhancedBusinessContact | EnhancedCharityContact
  >();
  const [resources, setResources] = useState<EnhancedResource[] | undefined>(
    []
  );

  useEffect(() => {
    const _user = getUserFromLocalStorage();
    setUser(_user);
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const _resources = await fetchResources();
      setResources(_resources);
    };

    fetch();
  }, []);

  // Use pagination hook
  const { paginatedItems, batches, handleClickBatch, isBatchSelected } =
    usePagination(resources || [], 5);

  return (
    <div>
      <HeaderOne>Resources</HeaderOne>
      {user && <h2>Welcome, {user.name}</h2>}
      {
        // @ts-expect-error: to fix
        user?.organization?.verified && (
          <Button variant='tertiary'>
            <Link href='/dashboard/resources/post'>Post a new resource</Link>
          </Button>
        )
      }
      <div className='flex align-middle justify-between'>
        {batches.map((batch) => (
          <span
            key={batch}
            onClick={() => handleClickBatch(batch)}
            className={
              isBatchSelected(batch)
                ? "font-bold text-yellow-400"
                : "cursor-pointer"
            }>
            {"<"}
            {batch}
            {">"}
          </span>
        ))}
      </div>
      <div className='grid gap-4'>
        {paginatedItems.map((resource) => (
          <Link href={"/dashboard/resources/" + resource.id} key={resource.id}>
            <EnhancedCard
              provider={resource.provider}
              isOwner={user?.id === resource.createdByUserId}>
              <HeaderFive>{resource.name}</HeaderFive>
              <p>{resource.description}</p>
            </EnhancedCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
