"use client";

import { Button, HeaderOne } from "@/components";
import Card from "@/components/card";
import Tooltip from "@/components/tooltip";
import { BUSINESSES } from "@/mock-data/businesses";
import { CHARITIES } from "@/mock-data/charities";
import { Business, Charity } from "@/types";
import { useEffect, useState } from "react";
import { FaCertificate, FaQuestionCircle } from "react-icons/fa";

const ProfilePage = () => {
  // get the information from local storage
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  console.log("User:", user);

  const [business, setBusiness] = useState<Business>();
  const [charity, setCharity] = useState<Charity>();

  useEffect(() => {
    const { roleId, role } = user;
    if (role === "business") {
      const business = BUSINESSES.find((b) => b.id === roleId);
      setBusiness(business);
    } else if (role === "charity") {
      const charity = CHARITIES.find((c) => c.id === roleId);
      setCharity(charity);
    }
  }, [user]);

  return (
    <div>
      <HeaderOne>Profile</HeaderOne>
      <p>User account management and activity summary.</p>
      <Card>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {user.role !== "individual" && (
          <div className='flex items-center gap-2'>
            <strong>Role:</strong>
            {user.verified && (
              <Tooltip content='verified'>
                <FaCertificate className='text-orange-500' />
              </Tooltip>
            )}
            {user.role} contact
            {!user.verified && (
              <>
                <Button variant='danger'>Not yet verified</Button>
                <Tooltip content='Why?'>
                  <FaQuestionCircle />
                </Tooltip>
              </>
            )}
          </div>
        )}
        {business && (
          <>
            <strong>Business Details:</strong>
            <ul className='ml-2'>
              <li>{business.name}</li>
              <li>{business.contactTel}</li>
              <li>{business.address.firstLine}</li>
              <li>{business.address.secondLine}</li>
              <li>{business.address.city}</li>
              <li>{business.address.postcode}</li>
            </ul>
          </>
        )}
        {charity && (
          <>
            <strong>Charity Details:</strong>
            <ul className='ml-2'>
              <li>{charity.name}</li>
              <li>{charity.contactTel}</li>
              <li>{charity.address.firstLine}</li>
              <li>{charity.address.secondLine}</li>
              <li>{charity.address.city}</li>
              <li>{charity.address.postcode}</li>
            </ul>
          </>
        )}
      </Card>
    </div>
  );
};

export default ProfilePage;
