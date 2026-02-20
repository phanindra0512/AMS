import apiService from '../../../api';

export const maintenanceService = apiService.injectEndpoints({
  endpoints: builder => ({
    payMaintenance: builder.mutation({
      query: ({
        transactionId,
        month,
        year,
        flatNumber,
        ownerName,
        ownerMobile,
        amount,
        paymentType,
        receipt,
      }) => {
        const formData = new FormData();

        formData.append('transactionId', transactionId);
        formData.append('month', month);
        formData.append('year', year);
        formData.append('flatNumber', flatNumber);
        formData.append('ownerName', ownerName);
        formData.append('ownerMobile', ownerMobile);
        formData.append('amount', amount);
        formData.append('paymentType', paymentType);

        // File append
        formData.append('receipt', {
          uri: receipt.uri,
          name: receipt.name,
          type: receipt.type,
        });

        return {
          url: 'api/maintenance/pay',
          method: 'POST',
          data: formData, // ✅ use body, not data
          headers: {
            'Content-Type': 'multipart/form-data', // ✅ REQUIRED
          },
        };
      },
    }),
  }),
});

export const {usePayMaintenanceMutation} = maintenanceService;
