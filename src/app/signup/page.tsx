"use client";

import SignUpForm from "@/components/form";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpForm />
    </Suspense>
  );
}
