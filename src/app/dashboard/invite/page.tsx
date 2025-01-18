"use client";

import { HeaderOne } from "@/components";
import {
  EnhancedBusinessContact,
  EnhancedCharityContact,
  Individual,
} from "@/types";
import { getUserFromLocalStorage } from "@/utils/localStorage";
import Image from "next/image";
import { useEffect, useState } from "react";

const InvitePage = () => {
  const [user, setUser] = useState<
    Individual | EnhancedBusinessContact | EnhancedCharityContact | null
  >(null);

  useEffect(() => {
    const _user = getUserFromLocalStorage();
    if (_user) setUser(_user);
  }, []);

  const isBusiness = user && "role" in user && user.role === "business";
  const isCharity = user && "role" in user && user.role === "charity";

  return (
    <div>
      <HeaderOne>
        Invite a {isBusiness ? "business" : isCharity ? "charity" : "friend"}
      </HeaderOne>
      <Image
        src={
          isBusiness
            ? "/qrcode_business.png"
            : isCharity
            ? "/qrcode_charity"
            : "/qrcode.png"
        }
        alt='QRCode'
        height={300}
        width={300}
      />
    </div>
  );
};

export default InvitePage;
