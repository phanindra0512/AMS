import apiService from '../../../api';
import {ExpensesResponse} from '../../../types/expenses';

export const expensesService = apiService.injectEndpoints({
  endpoints: builder => ({
    addExpenses: builder.mutation({
      query: ({
        serviceType,
        customServiceType,
        serviceProviderName,
        contactNumber,
        amountPaid,
        image,
      }) => {
        const formData = new FormData();

        formData.append('serviceType', serviceType);
        formData.append('customServiceType', customServiceType);
        formData.append('serviceProviderName', serviceProviderName);
        formData.append('contactNumber', contactNumber);
        formData.append('amountPaid', amountPaid);

        // File append
        formData.append('image', {
          uri: image.uri,
          name: image.name,
          type: image.type,
        });

        return {
          url: 'api/expenses/addExpense',
          method: 'POST',
          data: formData, // ✅ use body, not data
          headers: {
            'Content-Type': 'multipart/form-data', // ✅ REQUIRED
          },
        };
      },
      invalidatesTags: ['Expenses'],
    }),
    getExpensesByMonthYear: builder.query<
      ExpensesResponse,
      {month: number; year: number}
    >({
      query: ({month, year}) => ({
        url: `api/expenses/getAllExpenseByMonthYear?month=${month}&year=${year}`,
        method: 'GET',
      }),
      providesTags: ['Expenses'],
    }),
  }),
});

export const {useAddExpensesMutation, useGetExpensesByMonthYearQuery} =
  expensesService;
