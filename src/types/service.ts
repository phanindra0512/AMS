export interface CreateServiceRequest {
  serviceType: string;
  customServiceType: string;
  serviceProviderName: string;
  mobileNumber: string;
  location: string;
}

export interface Service {
  _id: string;
  serviceType: string;
  customServiceType: string | null;
  serviceProviderName: string;
  contactNumber: string;
 location: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServicesResponse {
  success: boolean;
  totalServices: number;
  data: Service[];
}