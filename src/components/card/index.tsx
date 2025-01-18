"use client";
import { Business, Charity } from "@/types";
import { FaPhone, FaStar } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";
import { Button } from "../button";
import Tooltip from "../tooltip";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type EnhancedCardProps = {
  provider: Business | Charity;
  isOwner: boolean;
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
  isOwner,
  children,
}) => {
  return (
    <Card className='flex flex-col gap-2 justify-between'>
      <div className='relative'>
        {isOwner && (
          <div className='absolute right-2 top-2'>
            <Tooltip content='You created this resource'>
              <FaStar className="text-green-600" />
            </Tooltip>
          </div>
        )}
        {children}
      </div>
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
      <Button variant='warning'>Show map and full details</Button>
    </Card>
  );
};

export default Card;
