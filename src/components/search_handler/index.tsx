"use client";

import { Button, HeaderOne } from "@/components";
import Tooltip from "@/components/tooltip";
import { BUSINESS, CHARITY, INDIVIDUAL } from "@/constants/mockUsers";
import { clearLocalStorage, setUserInLocalStorage } from "@/utils/localStorage";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FaBox, FaQrcode, FaUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

export function DashboardHandler({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const mock = searchParams.get("mock");
    if (!mock) return; // Do nothing unless mocking login
    if (mock === "individual") {
      setUserInLocalStorage("individual", INDIVIDUAL);
    } else if (mock === "business") {
      setUserInLocalStorage("business", BUSINESS);
    } else if (mock === "charity") {
      setUserInLocalStorage("charity", CHARITY);
    }
  }, [searchParams]);

  const handleSignOut = () => {
    clearLocalStorage();
    router.push("/");
  };

  const d = "/dashboard";

  return (
    <div className='w-full h-screen p-4 flex flex-col justify-between gap-5'>
      <div>
        <div className='flex justify-between items-center mb-10'>
          <Tooltip content='Home'>
            <Link href={d}>
              <FaHouse />
            </Link>
          </Tooltip>
          <Tooltip content='Profile'>
            <Link href={d + "/profile"}>
              <FaUser />
            </Link>
          </Tooltip>
          <Tooltip content='Resources'>
            <Link href={d + "/resources"}>
              <FaBox />
            </Link>
          </Tooltip>
          <Tooltip content='Invite'>
            <Link href={d + "/invite"}>
              <FaQrcode />
            </Link>
          </Tooltip>
        </div>
        <div className='mx-10'>{children}</div>
      </div>
      <footer className='flex justify-between items-center'>
        <Button variant='danger' onClick={handleSignOut}>
          Sign out
        </Button>
      </footer>
    </div>
  );
}

export const VerificationHandler = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const verify = searchParams.get("verify");

  useEffect(() => {
    if (verify) {
      setTimeout(() => {
        router.push(`/dashboard?mock=${verify}`);
      }, 3000);
    }
  }, [router, verify]);

  return (
    <div>
      <HeaderOne>Verification</HeaderOne>
      <p>
        On this page, an MVP would allow us to submit verification documents
        (for businesses/charities). Prepare to reload in five, four...
      </p>
    </div>
  );
};