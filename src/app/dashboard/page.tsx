"use client";

import { Button, HeaderOne, HeaderThree } from "@/components";
import Card from "@/components/card";
import { usePagination } from "@/hooks/pagination";
import { EnhancedResource } from "@/types";
import { fetchResources } from "@/utils/fetchResources";
import { getUserFromLocalStorage } from "@/utils/localStorage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardPage = () => {
  const router = useRouter();

  const user = getUserFromLocalStorage();

  const isVerified = user?.organization?.verified;

  const isIndividual = user?.role === "individual" || !user?.organization;

  const [resources, setResources] = useState<EnhancedResource[] | undefined>(
    []
  );

  useEffect(() => {
    const fetch = async () => {
      const _resources = await fetchResources();
      setResources(_resources);
    };

    fetch();
  }, []);

  // Use pagination hook
  const { paginatedItems, batches, handleClickBatch, isBatchSelected } =
    usePagination(resources || [], 9);

  return (
    <div>
      <HeaderOne>Welcome to Your Dashboard</HeaderOne>
      <p>
        Manage your account, explore available resources, and contribute to the
        community.
      </p>

      {/* Verification Status Card */}
      {!isIndividual && (
        <Card>
          <h2>Verification Status</h2>
          {isVerified ? (
            <>
              <p>
                ✅ Your account is verified! You can post resources to help the
                community.
              </p>
              <Link href='/dashboard/resources/post'>
                <Button variant='tertiary'>Post a new resource</Button>
              </Link>
            </>
          ) : (
            <>
              <p>
                ⚠️ Your account is not verified yet. To post resources, please
                complete the verification process.
              </p>
              <p>To view a verified demo, click below.</p>
              <Link href='/dashboard/profile?mock=business'>
                <Button variant='primary'>Demo.</Button>
              </Link>
            </>
          )}
        </Card>
      )}

      {/* Resource List */}
      <div className='mt-5'>
        <HeaderThree>Available Resources</HeaderThree>
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
        {resources && resources.length > 0 ? (
          <div className='grid grid-cols-3 md:grid-cols-5 gap-2'>
            {paginatedItems.map((resource) => (
              <div
                key={resource.id}
                className='border border-white border-1 p-2 flex flex-col'>
                <h3>{resource.name}</h3>
                <Button
                  variant='primary'
                  onClick={() =>
                    router.push("/dashboard/resources/" + resource.id)
                  }>
                  View Details
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <Card>
            <p>
              There are no resources available at the moment. Check back later
              or consider posting a resource to help others.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
