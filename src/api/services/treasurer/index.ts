import apiService from '../../../api';
import {ApiResponse} from '../../../types/api';
import {Treasurer} from '../../../types/treasurer';

export const treasurerService = apiService.injectEndpoints({
  endpoints: builder => ({
    getTreasurerDetails: builder.query<
      ApiResponse<Treasurer>,
      {month: number; year: number}
    >({
      query: ({month, year}) => ({
        url: 'api/owners/treasurer',
        method: 'GET',
        params: {month, year},
      }),
    }),
  }),
});

export const {useGetTreasurerDetailsQuery} = treasurerService;
