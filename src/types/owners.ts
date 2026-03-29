type Child = {
  _id: string;
  name: string;
};

type FamilyDetails = {
  spouseName: string;
  numberOfChildren: number;
  children: Child[];
};

export type Resident = {
  _id: string;
  name: string;
  phoneNumber: string;
  flatNumber: string;
  floorNumber: string | number;
  flatType: string;
  status: string;
  occupation: string;
  upiID: string;
  role: "ADMIN" | "TREASURER" | "RESIDENT";
  createdAt: string;
  updatedAt: string;
  __v: number;

  familyDetails: FamilyDetails;

  // optional fields
  otp?: string | null;
  otpExpires?: string | null;
};