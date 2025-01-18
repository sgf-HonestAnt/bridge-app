"use client";

import { Button, HeaderOne } from "@/components";
import Card from "@/components/card";
import { EnhancedBusinessContact, EnhancedCharityContact } from "@/types";
import {
  getUserFromLocalStorage,
  setUserInLocalStorage,
} from "@/utils/localStorage";
import { useEffect, useState } from "react";

interface ChangeEvent {
  target: {
    value: string;
  };
}

const ProfilePage = () => {
  const [toggle, setToggle] = useState(false); // Edit mode toggle
  const [refresh, setRefresh] = useState(false); // Trigger re-renders
  const [user, setUser] = useState<EnhancedBusinessContact | EnhancedCharityContact | null>(null);
  const [detail, setDetail] = useState<string | null>(null);

  // Load user from localStorage
  useEffect(() => {
    const _user = getUserFromLocalStorage();
    if (_user) {
      setUser(_user);
      const { organization } = _user;

      if (_user.role === "business") {
        setDetail(organization?.category ?? null);
      } else if (_user.role === "charity") {
        setDetail(organization?.cause ?? null);
      }
    }
  }, [refresh]);

  // Handle input changes for cause or category
  function handleChange(e: ChangeEvent) {
    const value = e.target.value;
    if (user) {
      const key = user.role === "business" ? "category" : "cause";
      const updatedOrganization = {
        ...user.organization,
        [key]: value,
      };
  
      setUser({
        ...user,
        organization: updatedOrganization, // Ensure the updated organization matches the expected type
      });
    }
  }

  // Save edits to localStorage and re-render
  function handleEdit() {
    if (user) {
      setUserInLocalStorage(user.role, user);
      setToggle(false);
      setRefresh((prev) => !prev);
    }
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  const { organization } = user;

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
        {organization && (
          <>
            <p>
              <strong>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)} address:
              </strong>
            </p>
            <ul className="ml-2">
              <li>{organization.name}</li>
              <li>{organization.contactPhone}</li>
              <li>{organization.address.streetAddress}</li>
              <li>{organization.address.addressLine2}</li>
              <li>{organization.address.city}</li>
              <li>{organization.address.postalCode}</li>
            </ul>
            <p>
              <strong>Telephone number:</strong>{" "}
              {organization.contactPhone ?? "not known"}
            </p>
            <p>
              <strong>Cause or category:</strong>{" "}
              {detail || (
                !toggle && (
                  <Button onClick={() => setToggle(true)}>Add</Button>
                )
              )}
            </p>
            {toggle && (
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Enter cause or category"
                  className="border border-gray-300 rounded-md p-2 mr-2"
                  onChange={handleChange}
                />
                <Button onClick={handleEdit}>Save</Button>
              </div>
            )}
            <p>
              <strong>Verified:</strong> {organization.verified ? "yes" : "no"}
            </p>
          </>
        )}
      </Card>
    </div>
  );
};

export default ProfilePage;
