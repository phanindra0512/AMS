import {createApi} from '@reduxjs/toolkit/query/react';

import axiosBaseQuery from './client/axiosBaseQuery';

export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Payments', 'Expenses', 'Services'],
  endpoints: () => ({}),
});

export default apiService;
