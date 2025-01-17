// Base interface for shared user properties
type Address = {
  streetAddress: string;
  addressLine2?: string;
  city: string;
  county: string;
  postalCode: string;
};

export type Individual = {
  id: string;
  name: string;
  email: string;
};

export type Resource = {
  id: string;
  name: string;
  description: string;
  category: "goods" | "services";
  createdByUserId: string; // this will correspond to user id
  providerId: string; // this will correspond to business or charity id
};

export interface BusinessContact extends Individual {
  role: "business";
  organizationId: string; // corresponds to business id
}

export interface CharityContact extends Individual {
  role: "charity";
  organizationId: string; // corresponds to charity id
}

export interface EnhancedBusinessContact extends BusinessContact {
  organization: Business;
}

export interface EnhancedCharityContact extends CharityContact {
  organization: Charity;
}

export type User = Individual | BusinessContact | CharityContact;

export type Business = {
  id: string;
  name: string;
  address: Address;
  contactPhone: string;
  category?: string; // Optional: e.g., "bakery", "grocery store"
  verified: boolean;
  location: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
};

export type Charity = {
  id: string;
  name: string;
  address: Address;
  contactPhone: string;
  cause?: string; // Optional: e.g., "homelessness", "education"
  verified: boolean;
  location: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
};

export type EnhancedResource = Resource & {
  creator: User; // Full user object for reference
  provider: Business | Charity; // Full business or charity object
};
