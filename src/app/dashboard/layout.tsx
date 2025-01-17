"use client";

import { Button } from "@/components";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  function handleSignOut() {
    localStorage.clear();
    router.push("/");
  }

  return (
    <div>
      <div>
        <Button variant='danger' onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
      {children}
    </div>
  );
}
