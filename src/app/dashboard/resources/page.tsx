"use client";

import { Button, HeaderFive, HeaderOne } from "@/components";
import { EnhancedCard } from "@/components/card";
import {
  EnhancedBusinessContact,
  EnhancedCharityContact,
  EnhancedResource,
} from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ResourcesPage: React.FC = () => {
  const [user, setUser] = useState<
    EnhancedBusinessContact | EnhancedCharityContact
  >();
  const [resources, setResources] = useState<EnhancedResource[]>([]);
  const [batches, setBatches] = useState<string[]>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user") ?? "{}");
    setUser(_user);
  }, []);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("/mock-data/resources.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);

  useEffect(() => {
    const _batches = Array.from(
      { length: Math.ceil(resources.length / 5) },
      (_, i) => `${i * 5}-${i * 5 + 4}`
    );
    setBatches(_batches);
  }, [resources]);

  function handleClickBatch(batch: string) {
    const [start] = batch.split("-").map((n) => parseInt(n));
    setPage(start);
  }

  function isBatchSelected(batch: string) {
    const [start] = batch.split("-").map((n) => parseInt(n));
    return start === page;
  }

  return (
    <div>
      <HeaderOne>Resources</HeaderOne>
      {user?.organization.verified && (
        <Button variant='warning'>
          <Link href='/dashboard/resources/post'>Post a new resource</Link>
        </Button>
      )}
      <div className='flex align-middle justify-between'>
        {batches?.map((batch, i) => (
          <span
            key={i}
            onClick={() => handleClickBatch(batch)}
            className={
              // if current page is the batch, make it bold
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
      <div className='grid gap-4 md:grid-cols-2'>
        {resources.slice(page, page + 5).map((resource) => (
          <EnhancedCard key={resource.id} provider={resource.provider}>
            <HeaderFive>{resource.name}</HeaderFive>
            <p>{resource.description}</p>
          </EnhancedCard>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
