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
      <p>On this page, an MVP would allow us to submit verification documents (for businesses/charities). Prepare to reload in five, four...</p>
    </div>
  );
};

export default VerificationPage;
