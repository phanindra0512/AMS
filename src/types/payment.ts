type Treasurer = {
  treasurerName: string;
  treasurerUpiID: string;
};

export interface Payment {
  _id: string;
  transactionId: string;
  month: number;
  year: number;
  amount: number;
  paymentStatus: string;
  createdAt: string;
  treasurer: Treasurer;
}

export interface PaymentsResponse {
  success: boolean;
  ownerId: string;
  totalPayments: number;
  data: Payment[];
}

export interface ProcessedPayment {
  id: string;
  transactionId: string;
  amount: string;
  date: string;
  status: string;
  monthYear: string;
}