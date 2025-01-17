"use client";

import { Button, HeaderOne } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("type") || "individual";
  const nameOf = role === "business" ? "businessName" : "charityName";

  const labelCx = "block text-sm font-medium text-gray-700";
  const inputCx =
    "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Get form data
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    // Save form data to local storage
    localStorage.setItem("user", JSON.stringify(data));
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
          <div className='hidden'>
            <label htmlFor='role'>Role:</label>
            <input id='role' name='role' defaultValue={role} />
          </div>
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
            <div>
              <label htmlFor={nameOf} className={labelCx}>
                Name of {role === "business" ? "Business" : "Charity"}:
              </label>
              <input
                id={nameOf}
                name={nameOf}
                required
                defaultValue={
                  role === "charity"
                    ? "John Doe's Charity"
                    : "John Doe's Business"
                }
                className={inputCx}
              />
            </div>
          )}
          {role === "business" && (
            <div>
              <label htmlFor='openingHrs' className={labelCx}>
                Opening Hours:
              </label>
              <input
                id='openingHrs'
                name='openingHrs'
                required
                defaultValue='9am-5pm'
                className={inputCx}
              />
            </div>
          )}
          {role !== "individual" && (
            <div>
              <label htmlFor='location' className={labelCx}>
                Location:
              </label>
              <input
                id='location'
                name='location'
                required
                defaultValue={"lat: 40.7128, lng: -74.006"}
                className={inputCx}
              />
            </div>
          )}
          <Button variant='primary' type='submit'>
            Login
          </Button>
        </form>
      </div>
    );
};

export default SignUpPage;
