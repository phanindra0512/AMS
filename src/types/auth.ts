export interface LoginSendOtpResponse {
  success: boolean;
  message: string;
  otp: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  owner: {
    _id: string;
    name: string;
    phoneNumber: string;
    flatNumber: string;
    floorNumber: string;
    flatType: string;
    status: string;
    occupation: string;
    upiID: string;
    createdAt: string;
    updatedAt: string;
    role: string;
    familyDetails: {
      spouseName: string;
      numberOfChildren: number;
      children: {
        _id: string;
        name: string;
      }[];
    };
  };
}
