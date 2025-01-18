"use client";

import { Button, HeaderOne } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const labelCx = "block text-sm font-medium text-gray-700";
const inputCx =
  "mt-1 block w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

const SignUpForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [role, setRole] = useState<string>("individual");

  useEffect(() => {
    const _role = searchParams.get("type") || "individual";
    setRole(_role);
  }, [searchParams]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const organization =
      role !== "individual"
        ? {
            name: data.organization_name,
            address: {
              streetAddress: data.organization_streetAddress,
              addressLine2: data.organization_addressLine2,
              city: data.organization_city,
              county: data.organization_county,
              postalCode: data.organization_postalCode,
            },
            contactPhone: data.organization_contactPhone,
            openingHours: data.organization_openingHours,
            verified: false,
          }
        : null;

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: data.name,
        email: data.email,
        role,
        organization,
      })
    );

    if (role !== "individual") {
      router.push("/signup/verification");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen w-screen p-8 px-24">
      <HeaderOne>Sign up</HeaderOne>
      <form className="mt-4 space-y-6 w-full max-w-lg" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className={labelCx}>
            Name:
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className={inputCx}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCx}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder={
              role === "individual"
                ? "john.doe@email.com"
                : role === "charity"
                ? "info@johndoescharity.com"
                : "hello@johndoesbusiness.com"
            }
            className={inputCx}
          />
        </div>
        {role !== "individual" && (
          <>
            <div>
              <label htmlFor="organization_name" className={labelCx}>
                Organization Name:
              </label>
              <input
                id="organization_name"
                name="organization_name"
                required
                placeholder="John's Business or Charity"
                className={inputCx}
              />
            </div>
            <div>
              <label className={labelCx}>Organization Address:</label>
              <div className="space-y-4">
                <input
                  id="organization_streetAddress"
                  name="organization_streetAddress"
                  required
                  placeholder="123 High Street"
                  className={inputCx}
                />
                <input
                  id="organization_addressLine2"
                  name="organization_addressLine2"
                  placeholder="Apartment, suite, etc. (optional)"
                  className={inputCx}
                />
                <div className="flex gap-4">
                  <input
                    id="organization_city"
                    name="organization_city"
                    required
                    placeholder="City"
                    className={`${inputCx} flex-1`}
                  />
                  <input
                    id="organization_county"
                    name="organization_county"
                    required
                    placeholder="County"
                    className={`${inputCx} flex-1`}
                  />
                </div>
                <input
                  id="organization_postalCode"
                  name="organization_postalCode"
                  required
                  placeholder="Postal Code"
                  className={inputCx}
                />
              </div>
            </div>
            <div>
              <label htmlFor="organization_contactPhone" className={labelCx}>
                Contact Phone:
              </label>
              <input
                type="tel"
                id="organization_contactPhone"
                name="organization_contactPhone"
                required
                placeholder="+44 2920 123456"
                className={inputCx}
              />
            </div>
            <div>
              <label htmlFor="organization_openingHours" className={labelCx}>
                Opening Hours:
              </label>
              <input
                id="organization_openingHours"
                name="organization_openingHours"
                required
                placeholder="9am-5pm"
                className={inputCx}
              />
            </div>
          </>
        )}
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;