"use client";

import { Button, HeaderOne } from "@/components";
import {
  EnhancedBusinessContact,
  EnhancedCharityContact,
  EnhancedResource,
} from "@/types";
import {
  getUserFromLocalStorage,
  saveResourceToLocalStorage,
} from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const labelCx = "block text-sm font-medium text-gray-700";
const inputCx =
  "mt-1 block w-full px-3 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

const PostResourcePage = () => {
  const router = useRouter();

  const [user, setUser] = useState<
    EnhancedBusinessContact | EnhancedCharityContact | null
  >(null);

  useEffect(() => {
    const _user = getUserFromLocalStorage();
    setUser(_user);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    const newResource: EnhancedResource = {
      id: `${Date.now()}`, // Generate a unique ID
      name: data.name,
      description: data.description,
      category: data.category as "goods" | "services",
      createdByUserId: user?.id ?? "",
      providerId: user?.organization?.id ?? "",
      creator: user!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      provider: user?.organization!,
    };

    saveResourceToLocalStorage(newResource); // Use utility function
    router.push("/dashboard/resources");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-8'>
      <HeaderOne>Post Resource</HeaderOne>
      <form className='mt-4 space-y-4' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' className={labelCx}>
            Resource Name:
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            placeholder='e.g., Warm Clothes Donation'
            className={inputCx}
          />
        </div>
        <div>
          <label htmlFor='description' className={labelCx}>
            Description:
          </label>
          <textarea
            id='description'
            name='description'
            required
            placeholder='Provide a brief description of the resource.'
            className={inputCx}></textarea>
        </div>
        <div>
          <label htmlFor='category' className={labelCx}>
            Category:
          </label>
          <select id='category' name='category' required className={inputCx}>
            <option value=''>Select a category</option>
            <option value='goods'>Goods</option>
            <option value='services'>Services</option>
          </select>
        </div>
        <Button type='submit' variant='primary'>
          Post Resource
        </Button>
      </form>
    </div>
  );
};

export default PostResourcePage;
