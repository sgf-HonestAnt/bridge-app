"use client";

import { HeaderOne } from "@/components";
import Card from "@/components/card";
import { Business, Charity, User } from "@/types";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState<User>();
  const [business, setBusiness] = useState<Business>();
  const [charity, setCharity] = useState<Charity>();

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user") ?? "{}");
    setUser(_user);
    const { role } = _user;
    if (role === "business") {
      setBusiness({
        id: "business_7890",
        name: "Greenfield Farms",
        address: {
          streetAddress: "10 Market Street",
          city: "Cardiff",
          county: "Cardiff",
          postalCode: "CF11 3ZR",
        },
        contactPhone: "+44 2920 987654",
        verified: true,
        location: {
          latitude: 51.516807,
          longitude: -3.127014,
        },
        openingHours: "7:00 AM - 5:00 PM",
      });
    } else if (role === "charity") {
      setCharity({
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
      });
    }
  }, []);

  if (user)
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
          {/* {user.role !== "individual" && (
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
          )} */}
          {business && (
            <>
              <strong>Business Details:</strong>
              <ul className='ml-2'>
                <li>{business.name}</li>
                <li>{business.contactPhone}</li>
                <li>{business.address.streetAddress}</li>
                <li>{business.address.addressLine2}</li>
                <li>{business.address.city}</li>
                <li>{business.address.postalCode}</li>
              </ul>
            </>
          )}
          {charity && (
            <>
              <strong>Charity Details:</strong>
              <ul className='ml-2'>
                <li>{charity.name}</li>
                <li>{charity.contactPhone}</li>
                <li>{charity.address.streetAddress}</li>
                <li>{charity.address.addressLine2}</li>
                <li>{charity.address.city}</li>
                <li>{charity.address.postalCode}</li>
              </ul>
            </>
          )}
        </Card>
      </div>
    );
};

export default ProfilePage;
