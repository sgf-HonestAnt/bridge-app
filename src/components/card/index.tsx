"use client";
import { Business, Charity } from "@/types";
import { FaPhone } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";
import MapBox from "../map";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type EnhancedCardProps = {
  provider: Business | Charity;
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

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  provider,
  children,
}) => {
  return (
    <Card className='flex flex-col gap-2 justify-between'>
      <div>{children}</div>
      <div>Provided by: {provider.name}</div>
      <div className='flex align-middle justify-between gap-2'>
        <span>
          <FaArrowPointer />
          {provider.address.postalCode}
        </span>
        <span>
          <FaPhone />
          {provider.contactPhone}
        </span>
      </div>
      <MapBox
        lat={provider.location.latitude}
        lng={provider.location.longitude}
        name={provider.name}
      />
    </Card>
  );
};

export default Card;
