export interface Treasurer {
  treasurerId: string;
  treasurerName: string;
  treasurerPhoneNumber: string;
}

export interface Expense {
  _id: string;
  treasurer: Treasurer;
  serviceType: string;
  customServiceType: string | null;
  serviceProviderName: string;
  contactNumber: string;
  amountPaid: number;
  month: number;
  year: number;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ExpensesResponse {
  success: boolean;
  month: number;
  year: number;
  totalExpenses: number;
  totalExpenseAmount: number;
  data: Expense[];
}

