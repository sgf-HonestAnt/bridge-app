import { EnhancedBusinessContact, EnhancedCharityContact, Individual } from "@/types";

export const INDIVIDUAL: Individual = {
  id: "user_0001",
  name: "Joe Bloggs",
  email: "j.bloggs@example.com",
};
export const BUSINESS: EnhancedBusinessContact = {
  id: "user_3482",
  name: "Laura Green",
  email: "laura.green@example.com",
  role: "business",
  organizationId: "business_2345",
  organization: {
    id: "business_2345",
    name: "Tech Haven",
    address: {
      streetAddress: "22 Park Lane",
      city: "Cardiff",
      county: "Cardiff",
      postalCode: "CF11 9BG",
    },
    contactPhone: "+44 2920 333555",
    verified: true,
    location: {
      latitude: 51.54085,
      longitude: -3.178663,
    },
    openingHours: "8:00 AM - 8:00 PM",
  },
};
export const CHARITY: EnhancedCharityContact = {
  id: "user_8612",
  name: "Sophia Morgan",
  email: "sophia.morgan@example.com",
  role: "charity",
  organizationId: "charity_3456",
  organization: {
    id: "charity_3456",
    name: "Safe Haven Shelter",
    address: {
      streetAddress: "30 Cathedral Road",
      city: "Cardiff",
      county: "Cardiff",
      postalCode: "CF11 9LL",
    },
    contactPhone: "+44 2920 123789",
    verified: true,
    location: {
      latitude: 51.498207,
      longitude: -3.183087,
    },
    openingHours: "24/7",
  },
};