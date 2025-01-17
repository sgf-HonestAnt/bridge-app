"use client";

import { HeaderOne } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const VerificationPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const verify = searchParams.get("verify");

  useEffect(() => {
    setTimeout(() => {
      router.push(`/dashboard?mock=${verify}`);
    }, 3000);
  }, [router, verify]);

  return (
    <div>
      <HeaderOne>Verification</HeaderOne>
      <p>Submit verification documents (for businesses/charities).</p>
    </div>
  );
};

export default VerificationPage;
