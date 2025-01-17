type Business = {
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

export const BUSINESSES: Business[] = [
  {
    id: "B1",
    name: "Peggy's Pies",
    address: {
      firstLine: "123 Main St",
      city: "Anytown",
      county: "Anyshire",
      postcode: "A1 1AA",
    },
    contactTel: "01234 567890",
  },
  {
    id: "B2",
    name: "Duvet Days",
    address: {
      firstLine: "456 High St",
      city: "Othertown",
      county: "Othershire",
      postcode: "B2 2BB",
    },
    contactTel: "02345 678901",
  },
  {
    id: "B3",
    name: "Sweet Sensations",
    address: {
      firstLine: "789 Low St",
      city: "Sometown",
      county: "Someshire",
      postcode: "C3 3CC",
    },
    contactTel: "03456 789012",
  },
  {
    id: "B4",
    name: "North Street Barber",
    address: {
      firstLine: "101 North St",
      city: "Anycity",
      county: "Anycounty",
      postcode: "D4 4DD",
    },
    contactTel: "04567 890123",
  },
  {
    id: "B5",
    name: "The Book Nook",
    address: {
      firstLine: "202 South St",
      city: "Othercity",
      county: "Othercounty",
      postcode: "E5 5EE",
    },
    contactTel: "05678 901234",
  },
  {
    id: "B6",
    name: "Gadget Garage",
    address: {
      firstLine: "303 East St",
      city: "Somecity",
      county: "Somecounty",
      postcode: "F6 6FF",
    },
    contactTel: "06789 012345",
  },
  {
    id: "B7",
    name: "Coffee Corner",
    address: {
      firstLine: "404 West St",
      city: "Anyville",
      county: "Anyshire",
      postcode: "G7 7GG",
    },
    contactTel: "07890 123456",
  },
  {
    id: "B8",
    name: "Fitness First",
    address: {
      firstLine: "505 Central St",
      city: "Otherville",
      county: "Othershire",
      postcode: "H8 8HH",
    },
    contactTel: "08901 234567",
  },
  {
    id: "B9",
    name: "Tech Trends",
    address: {
      firstLine: "606 Market St",
      city: "Someville",
      county: "Someshire",
      postcode: "I9 9II",
    },
    contactTel: "09012 345678",
  },
  {
    id: "B10",
    name: "The Green Scene",
    address: {
      firstLine: "707 Park St",
      city: "Othercity",
      county: "Othercounty",
      postcode: "J0 0JJ",
    },
    contactTel: "09123 456789",
  },
];
