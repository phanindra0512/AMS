import { createApi } from '@reduxjs/toolkit/query/react';

import axiosBaseQuery from './client/axiosBaseQuery';

export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: [
    'PurchaseTransaction',
    'User',
    'Item',
    'Cashier',
    'TransferStatement',
  ],
  endpoints: () => ({}),
});

export default apiService;
