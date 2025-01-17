"use client";

import { Button } from "@/components";
import Tooltip from "@/components/tooltip";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import {
  FaBell,
  FaBox,
  FaHome,
  FaQrcode,
  FaQuestion,
  FaUser,
} from "react-icons/fa";

const INDIVIDUAL = {
  id: "3",
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  verified: true,
};
const BUSINESS = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  verified: true,
  role: "business",
  roleId: "B1",
  location: { lat: 40.7128, lng: -74.006 },
  openingHrs: "9am-5pm",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  // if ?mock=individual, clear local storage then set local storage to the sample individual user
  // if ?mock=business, clear local storage then set local storage to the sample business user
  const searchParams = useSearchParams();

  useEffect(() => {
    const mock = searchParams.get("mock");
    const user = localStorage.getItem("user");
    console.log({ mock, user });
    if (mock === "individual") {
      console.log("setting individual user");
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(INDIVIDUAL));
    } else if (mock === "business") {
      console.log("setting business user");
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(BUSINESS));
    }
  }, [searchParams]);

  const d = "/dashboard";

  function handleSignOut() {
    localStorage.clear();
    router.push("/");
  }

  return (
    <div>
      <div className='flex justify-between items-center'>
        <Tooltip content='Home'>
          <Link href={d}>
            <FaHome />
          </Link>
        </Tooltip>
        <Tooltip content='Profile'>
          <Link href={d + "/profile"}>
            <FaUser />
          </Link>
        </Tooltip>
        <Tooltip content='About'>
          <Link href={d + "/about"}>
            <FaQuestion />
          </Link>
        </Tooltip>
        <Tooltip content='Invite'>
          <Link href={d + "/invite"}>
            <FaQrcode />
          </Link>
        </Tooltip>
        <Tooltip content='Resources'>
          <Link href={d + "/resources"}>
            <FaBox />
          </Link>
        </Tooltip>
        <Tooltip content='Notifications'>
          <Link href={d + "/notifications"}>
            <FaBell />
          </Link>
        </Tooltip>
      </div>
      {children}
      <div className='flex justify-between items-center'>
        <Button variant='danger' onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
    </div>
  );
}
