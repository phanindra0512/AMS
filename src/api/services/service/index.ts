// api/services/service/index.ts

import apiService from '../../../api';
import {CreateServiceRequest, ServicesResponse} from '../../../types/service';

export const serviceApi = apiService.injectEndpoints({
  endpoints: builder => ({
    createService: builder.mutation<any, CreateServiceRequest>({
      query: ({
        serviceType,
        customServiceType,
        serviceProviderName,
        mobileNumber,
        location,
      }) => ({
        url: 'api/services/create',
        method: 'POST',
        data: {
          serviceType,
          customServiceType,
          serviceProviderName,
          mobileNumber,
          location,
        },
      }),

      invalidatesTags: ['Services'],
    }),
    getAllServices: builder.query<ServicesResponse, void>({
      query: () => ({
        url: 'api/services/getAllServices',
        method: 'GET',
      }),
      providesTags: ['Services'],
    }),
  }),
});

export const {useCreateServiceMutation, useGetAllServicesQuery} = serviceApi;
