export type Individual = {
  id: string;
  name: string;
  email: string;
  verified: boolean;
};

export type Resource = {
  id: string;
  name: string;
  description: string;
  category: "goods" | "services";
  createdOn: string;
  expiresOn: string;
  createdById: string; // this will correspond to user id
  providedById: string; // this will correspond to business or charity id
};

export interface BusinessContact extends Individual {
  role: "business";
  roleId: string;
  location: {
    lat: number;
    lng: number;
  };
  openingHrs: string;
}

export interface CharityContact extends Individual {
  role: "charity";
  roleId: string;
  location: {
    lat: number;
    lng: number;
  };
}

export type Business = {
  id: string;
  name: string;
  address: {
    firstLine: string;
    secondLine?: string;
    city: string;
    county: string;
    postcode: string;
  };
  contactTel: string;
};

export type Charity = {
  id: string;
  name: string;
  address: {
    firstLine: string;
    secondLine?: string;
    city: string;
    county: string;
    postcode: string;
  };
  contactTel: string;
};
