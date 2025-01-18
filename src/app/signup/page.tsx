"use client";

import { Button, HeaderOne } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";

const labelCx = "block text-sm font-medium text-gray-700";
const inputCx =
  "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

const SignUpPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("type") || "individual";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
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
            openingHours: data.organization_openingHrs,
            verified: false,
          }
        : null;
    // Save form data to local storage
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: data.name,
        email: data.email,
        role,
        organization,
      })
    );
    // Redirect based on role
    if (role !== "individual") {
      router.push("/signup/verification");
    } else {
      router.push("/dashboard");
    }
  };

  if (searchParams)
    return (
      <div className='max-w-md mx-auto mt-10 p-6'>
        <HeaderOne>Sign up</HeaderOne>
        <form className='mt-4 space-y-4' onSubmit={handleSubmit}>
          {/* Hidden Role Field */}
          <div className='hidden'>
            <label htmlFor='role'>Role:</label>
            <input id='role' name='role' defaultValue='business' />
          </div>
          {/* Name Field */}
          <div>
            <label htmlFor='name' className={labelCx}>
              Name:
            </label>
            <input
              id='name'
              name='name'
              required
              defaultValue='John Doe'
              className={inputCx}
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor='email' className={labelCx}>
              Email:
            </label>
            <input
              type='email'
              id='email'
              name='email'
              required
              defaultValue={
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
              {/* Organization Name */}
              <div>
                <label htmlFor='organization_name' className={labelCx}>
                  Organization Name:
                </label>
                <input
                  id='organization_name'
                  name='organization_name'
                  required
                  defaultValue="John's Business or Charity"
                  className={inputCx}
                />
              </div>
              {/* Organization Address */}
              <div>
                <label htmlFor='organization_streetAddress' className={labelCx}>
                  Street Address:
                </label>
                <input
                  id='organization_streetAddress'
                  name='organization_streetAddress'
                  required
                  defaultValue='123 High Street'
                  className={inputCx}
                />
              </div>
              <div>
                <label htmlFor='organization_addressLine2' className={labelCx}>
                  Address Line 2 (Optional):
                </label>
                <input
                  id='organization_addressLine2'
                  name='organization_addressLine2'
                  defaultValue=''
                  className={inputCx}
                />
              </div>
              <div>
                <label htmlFor='organization_city' className={labelCx}>
                  City:
                </label>
                <input
                  id='organization_city'
                  name='organization_city'
                  required
                  defaultValue='Cardiff'
                  className={inputCx}
                />
              </div>
              <div>
                <label htmlFor='organization_county' className={labelCx}>
                  County:
                </label>
                <input
                  id='organization_county'
                  name='organization_county'
                  required
                  defaultValue='Cardiff'
                  className={inputCx}
                />
              </div>
              <div>
                <label htmlFor='organization_postalCode' className={labelCx}>
                  Postal Code:
                </label>
                <input
                  id='organization_postalCode'
                  name='organization_postalCode'
                  required
                  defaultValue='CF10 1AA'
                  className={inputCx}
                />
              </div>
              {/* Organization Contact Phone */}
              <div>
                <label htmlFor='organization_contactPhone' className={labelCx}>
                  Contact Phone:
                </label>
                <input
                  type='tel'
                  id='organization_contactPhone'
                  name='organization_contactPhone'
                  required
                  defaultValue='+44 2920 123456'
                  className={inputCx}
                />
              </div>
              {/* Organization Category */}
              <div>
                <label htmlFor='organization_category' className={labelCx}>
                  Category (Optional):
                </label>
                <input
                  id='organization_category'
                  name='organization_category'
                  defaultValue='Grocery Store'
                  className={inputCx}
                />
              </div>
              {/* Organization Opening Hours */}
              <div>
                <label htmlFor='organization_openingHours' className={labelCx}>
                  Opening Hours:
                </label>
                <input
                  id='organization_openingHours'
                  name='organization_openingHours'
                  required
                  defaultValue='9am-5pm'
                  className={inputCx}
                />
              </div>
            </>
          )}
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </form>
      </div>
    );
};

export default SignUpPage;
