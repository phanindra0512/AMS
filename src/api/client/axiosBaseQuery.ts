import { AxiosError, AxiosRequestConfig } from 'axios';

import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import AxiosClient from "./index";


const axiosBaseQuery = (): BaseQueryFn<
  AxiosRequestConfig,
  unknown,
  AxiosError
> => {
  return async ({url, method, data, params, headers}) => {
    try {
      const result = await AxiosClient({
        url,
        method,
        data,
        params,
        headers,
      });
      return {data: result.data};
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return {
        error,
      };
    }
  };
};

export default axiosBaseQuery;
