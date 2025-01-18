"use client";

import { Button } from "@/components";
import Tooltip from "@/components/tooltip";
import {
  EnhancedBusinessContact,
  EnhancedCharityContact,
  Individual,
} from "@/types";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { FaBox, FaQrcode, FaQuestion, FaUser } from "react-icons/fa";

const INDIVIDUAL: Individual = {
  id: "user_0001",
  name: "Joe Bloggs",
  email: "j.bloggs@example.com",
};
const BUSINESS: EnhancedBusinessContact = {
  id: "user_3482",
  name: "Laura Green",
  email: "laura.green@example.com",
  role: "business",
  organizationId: "business_2345",
  organization: {
    id: "business_2345",
    name: "Tech Haven",
    address: {
      streetAddress: "22 Park Lane",
      city: "Cardiff",
      county: "Cardiff",
      postalCode: "CF11 9BG",
    },
    contactPhone: "+44 2920 333555",
    verified: true,
    location: {
      latitude: 51.54085,
      longitude: -3.178663,
    },
    openingHours: "8:00 AM - 8:00 PM",
  },
};
const CHARITY: EnhancedCharityContact = {
  id: "user_8612",
  name: "Sophia Morgan",
  email: "sophia.morgan@example.com",
  role: "charity",
  organizationId: "charity_3456",
  organization: {
    id: "charity_3456",
    name: "Safe Haven Shelter",
    address: {
      streetAddress: "30 Cathedral Road",
      city: "Cardiff",
      county: "Cardiff",
      postalCode: "CF11 9LL",
    },
    contactPhone: "+44 2920 123789",
    verified: true,
    location: {
      latitude: 51.498207,
      longitude: -3.183087,
    },
    openingHours: "24/7",
  },
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
    if (mock === "individual") {
      console.log("setting individual user");
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(INDIVIDUAL));
    } else if (mock === "business") {
      console.log("setting business user");
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(BUSINESS));
    } else if (mock === "charity") {
      console.log("setting charity user");
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(CHARITY));
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
      {children}
      <div className='flex justify-between items-center'>
        <Button variant='danger' onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
    </div>
  );
}
