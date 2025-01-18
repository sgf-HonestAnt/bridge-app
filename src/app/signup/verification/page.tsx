"use client";

import VerificationHandler from "@/components/verification";
import { Suspense } from "react";

const VerificationPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerificationHandler />
    </Suspense>
  );
};

export default VerificationPage;
