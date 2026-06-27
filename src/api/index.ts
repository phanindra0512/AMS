import {createApi} from '@reduxjs/toolkit/query/react';

import axiosBaseQuery from './client/axiosBaseQuery';

export const apiService = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: ['Payments','Expenses'],
  endpoints: () => ({}),
});

export default apiService;
