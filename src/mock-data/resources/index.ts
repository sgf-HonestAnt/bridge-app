import { Resource } from "@/types";

const mockTodayDate = new Date().toISOString().split("T")[0];

const mockOneWeekFromNow = new Date();
mockOneWeekFromNow.setDate(mockOneWeekFromNow.getDate() + 7);

const mockOneYearFromNow = new Date();
mockOneYearFromNow.setDate(mockOneYearFromNow.getDate() + 365);

export const RESOURCES: Resource[] = [
  {
    id: "1",
    name: "Pies and Pastries",
    description:
      "10+ various pies and pastries available for collection by the end of day, must go today.",
    category: "goods",
    createdOn: mockTodayDate,
    expiresOn: mockTodayDate,
    createdById: "1",
    providedById: "B1",
  },
  {
    id: "2",
    name: "Cheap haircut and shave",
    description: "£1 haircut and shave available this week only.",
    category: "services",
    createdOn: mockTodayDate,
    expiresOn: mockOneWeekFromNow.toISOString().split("T")[0],
    createdById: "6",
    providedById: "B4",
  },
  {
    id: "3",
    name: "Hot drinks and company",
    description:
      "Free hot drinks and company available every day, we will also charge your phone for you. Friendly dogs allowed.",
    category: "services",
    createdOn: mockTodayDate,
    expiresOn: mockOneYearFromNow.toISOString().split("T")[0],
    createdById: "9",
    providedById: "B7",
  },
];
