type Individual = {
  id: string;
  name: string;
  email: string;
  verified: boolean;
};

interface BusinessContact extends Individual {
  role: "business";
  roleId: string;
  location: {
    lat: number;
    lng: number;
  };
  openingHrs: string;
}

interface CharityContact extends Individual {
  role: "charity";
  roleId: string;
  location: {
    lat: number;
    lng: number;
  };
}

type User = Individual | BusinessContact | CharityContact;

export const USERS: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    verified: true,
    role: "business",
    roleId: "B1",
    location: { lat: 40.7128, lng: -74.006 },
    openingHrs: "9am-5pm",
  },
  {
    id: "4",
    name: "Bob Brown",
    email: "bob.brown@example.com",
    verified: true,
    role: "business",
    roleId: "B2",
    location: { lat: 37.7749, lng: -122.4194 },
    openingHrs: "8am-6pm",
  },
  {
    id: "5",
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    verified: false,
    role: "business",
    roleId: "B3",
    location: { lat: 51.5074, lng: -0.1278 },
    openingHrs: "10am-4pm",
  },
  {
    id: "6",
    name: "Diana Evans",
    email: "diana.evans@example.com",
    verified: true,
    role: "business",
    roleId: "B4",
    location: { lat: 48.8566, lng: 2.3522 },
    openingHrs: "9am-5pm",
  },
  {
    id: "7",
    name: "Ethan Foster",
    email: "ethan.foster@example.com",
    verified: false,
    role: "business",
    roleId: "B5",
    location: { lat: 35.6895, lng: 139.6917 },
    openingHrs: "11am-7pm",
  },
  {
    id: "8",
    name: "Fiona Green",
    email: "fiona.green@example.com",
    verified: true,
    role: "business",
    roleId: "B6",
    location: { lat: -33.8688, lng: 151.2093 },
    openingHrs: "7am-3pm",
  },
  {
    id: "9",
    name: "George Harris",
    email: "george.harris@example.com",
    verified: false,
    role: "business",
    roleId: "B7",
    location: { lat: 55.7558, lng: 37.6173 },
    openingHrs: "8am-4pm",
  },
  {
    id: "10",
    name: "Hannah Irving",
    email: "hannah.irving@example.com",
    verified: true,
    role: "business",
    roleId: "B8",
    location: { lat: 40.4168, lng: -3.7038 },
    openingHrs: "9am-6pm",
  },
  {
    id: "11",
    name: "Ian Johnson",
    email: "ian.johnson@example.com",
    verified: false,
    role: "business",
    roleId: "B9",
    location: { lat: 52.52, lng: 13.405 },
    openingHrs: "10am-5pm",
  },
  {
    id: "12",
    name: "Jackie King",
    email: "jackie.king@example.com",
    verified: true,
    role: "business",
    roleId: "B10",
    location: { lat: 41.9028, lng: 12.4964 },
    openingHrs: "8am-5pm",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    verified: false,
    role: "charity",
    roleId: "C1",
    location: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: "13",
    name: "Karen Lee",
    email: "karen.lee@example.com",
    verified: true,
    role: "charity",
    roleId: "C2",
    location: { lat: 39.9042, lng: 116.4074 },
  },
  {
    id: "14",
    name: "Larry Moore",
    email: "larry.moore@example.com",
    verified: false,
    role: "charity",
    roleId: "C3",
    location: { lat: 19.4326, lng: -99.1332 },
  },
  {
    id: "15",
    name: "Megan Nelson",
    email: "megan.nelson@example.com",
    verified: true,
    role: "charity",
    roleId: "C4",
    location: { lat: 35.6762, lng: 139.6503 },
  },
  {
    id: "16",
    name: "Nathan Owens",
    email: "nathan.owens@example.com",
    verified: false,
    role: "charity",
    roleId: "C5",
    location: { lat: 55.7558, lng: 37.6173 },
  },
  {
    id: "17",
    name: "Olivia Parker",
    email: "olivia.parker@example.com",
    verified: true,
    role: "charity",
    roleId: "C6",
    location: { lat: 48.8566, lng: 2.3522 },
  },
  {
    id: "18",
    name: "Paul Quinn",
    email: "paul.quinn@example.com",
    verified: false,
    role: "charity",
    roleId: "C7",
    location: { lat: 40.7128, lng: -74.006 },
  },
  {
    id: "19",
    name: "Rachel Scott",
    email: "rachel.scott@example.com",
    verified: true,
    role: "charity",
    roleId: "C8",
    location: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: "20",
    name: "Steven Turner",
    email: "steven.turner@example.com",
    verified: false,
    role: "charity",
    roleId: "C9",
    location: { lat: 51.5074, lng: -0.1278 },
  },
  {
    id: "21",
    name: "Tina Underwood",
    email: "tina.underwood@example.com",
    verified: true,
    role: "charity",
    roleId: "C10",
    location: { lat: 37.7749, lng: -122.4194 },
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    verified: true,
  },
  {
    id: "22",
    name: "Victor White",
    email: "victor.white@example.com",
    verified: false,
  },
  {
    id: "23",
    name: "Wendy Young",
    email: "wendy.young@example.com",
    verified: true,
  },
  {
    id: "24",
    name: "Xander Zane",
    email: "xander.zane@example.com",
    verified: false,
  },
  {
    id: "25",
    name: "Yara Adams",
    email: "yara.adams@example.com",
    verified: true,
  },
  {
    id: "26",
    name: "Zachary Brown",
    email: "zachary.brown@example.com",
    verified: false,
  },
  {
    id: "27",
    name: "Ava Clark",
    email: "ava.clark@example.com",
    verified: true,
  },
  {
    id: "28",
    name: "Benjamin Davis",
    email: "benjamin.davis@example.com",
    verified: false,
  },
  {
    id: "29",
    name: "Chloe Evans",
    email: "chloe.evans@example.com",
    verified: true,
  },
  {
    id: "30",
    name: "Daniel Foster",
    email: "daniel.foster@example.com",
    verified: false,
  },
  {
    id: "31",
    name: "Ella Green",
    email: "ella.green@example.com",
    verified: true,
  },
  {
    id: "32",
    name: "Finn Harris",
    email: "finn.harris@example.com",
    verified: false,
  },
  {
    id: "33",
    name: "Grace Irving",
    email: "grace.irving@example.com",
    verified: true,
  },
  {
    id: "34",
    name: "Henry Johnson",
    email: "henry.johnson@example.com",
    verified: false,
  },
  {
    id: "35",
    name: "Isla King",
    email: "isla.king@example.com",
    verified: true,
  },
  {
    id: "36",
    name: "Jack Lee",
    email: "jack.lee@example.com",
    verified: false,
  },
  {
    id: "37",
    name: "Kara Moore",
    email: "kara.moore@example.com",
    verified: true,
  },
  {
    id: "38",
    name: "Liam Nelson",
    email: "liam.nelson@example.com",
    verified: false,
  },
  {
    id: "39",
    name: "Mia Owens",
    email: "mia.owens@example.com",
    verified: true,
  },
  {
    id: "40",
    name: "Noah Parker",
    email: "noah.parker@example.com",
    verified: false,
  },
];
