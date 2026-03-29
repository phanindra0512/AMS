import apiService from '../..';
import {Resident} from '../../../types/owners';

export const ownersService = apiService.injectEndpoints({
  endpoints: builder => ({
    getAllOwners: builder.query<Resident[], void>({
      query: () => ({
        url: 'api/owners/getAllOwners',
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetAllOwnersQuery} = ownersService;
