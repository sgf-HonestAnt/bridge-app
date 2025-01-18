"use client";

import { DashboardHandler } from "@/components";
import { Suspense } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardHandler>{children}</DashboardHandler>
    </Suspense>
  );
}