export interface Treasurer {
  _id: string;
  name: string;
  phoneNumber: string;
  flatNumber: string;
  floorNumber: string;
  flatType: string;
  status: string;
  occupation: string;
  upiID: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  familyDetails: {
    spouseName: string;
    numberOfChildren: number;
    children: {
      _id: string;
      name: string;
    }[];
  };
}
