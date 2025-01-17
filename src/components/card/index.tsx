"use client";

import { BUSINESSES } from "@/mock-data/businesses";
import { CHARITIES } from "@/mock-data/charities";
import { Business, Charity } from "@/types";
import { useEffect, useState } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type CardWithProviderIdProps = {
  id: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={`bg-white text-gray-700 shadow-md rounded-md p-4 ${className}`}
      {...props}>
      {children}
    </div>
  );
};

const allBusinessesAndCharities: (Business | Charity)[] =
  BUSINESSES.concat(CHARITIES);

export const CardWithProviderId: React.FC<CardWithProviderIdProps> = ({
  id,
  children,
}) => {
  const [provider, setProvider] = useState<Business | Charity>();

  useEffect(() => {
    const _provider = allBusinessesAndCharities.find((p) => p.id === id);
    setProvider(_provider);
  }, [id]);

  if (!provider) {
    console.log("check provider id");
    return;
  }

  return (
    <Card className='flex flex-col gap-2'>
      <div>{children}</div>
      <div>
        <p>Provided by: {provider.name}</p>
        {/* TODO: ADD MAP */}
      </div>
    </Card>
  );
};

export default Card;
