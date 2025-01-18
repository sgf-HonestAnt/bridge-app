"use client";

import { HeaderOne } from "@/components";
import Card from "@/components/card";
import { EnhancedBusinessContact, EnhancedCharityContact } from "@/types";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState<
    EnhancedBusinessContact | EnhancedCharityContact
  >();

  const [detail, setDetail] = useState<string | null>();

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user") ?? "{}");
    setUser(_user);

    if (_user.role === "business") {
      const category = localStorage.getItem("category");
      setDetail(category);
    }

    if (_user.role === "charity") {
      const cause = localStorage.getItem("cause");
      setDetail(cause);
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
          {user.organization && (
            <>
              <p>
                <strong>
                  {user.role.slice(0, 1).toUpperCase()}
                  {user.role.slice(1)} address:
                </strong>
              </p>
              <ul className='ml-2'>
                <li>{user.organization.name}</li>
                <li>{user.organization.contactPhone}</li>
                <li>{user.organization.address.streetAddress}</li>
                <li>{user.organization.address.addressLine2}</li>
                <li>{user.organization.address.city}</li>
                <li>{user.organization.address.postalCode}</li>
              </ul>
              <p>
                <strong>Telephone number:</strong>{" "}
                {user.organization.contactPhone ?? "not known"}
              </p>
              <p>
                <strong>Cause or category:</strong> {detail ?? "not known"}
              </p>
              <p>
                <strong>Verified:</strong>{" "}
                {user.organization.verified ? "yes" : "no"}
              </p>
            </>
          )}
        </Card>
      </div>
    );
};

export default ProfilePage;
