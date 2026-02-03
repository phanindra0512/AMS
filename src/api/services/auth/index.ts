import apiService from '../../../api';
import {LoginSendOtpResponse, VerifyOtpResponse} from '../../../types/auth';

export const authService = apiService.injectEndpoints({
  endpoints: builder => ({
    loginSendOtp: builder.mutation<LoginSendOtpResponse, {phoneNumber: string}>(
      {
        query: ({phoneNumber}) => ({
          method: 'POST',
          url: 'api/auth/send-otp',
          data: {phoneNumber},
        }),
      },
    ),
    verifyOtp: builder.mutation<
      VerifyOtpResponse,
      {phoneNumber: string; otp: string}
    >({
      query: ({phoneNumber, otp}) => ({
        method: 'POST',
        url: 'api/auth/verify-otp',
        data: {phoneNumber, otp},
      }),
    }),
  }),
});

export const {useLoginSendOtpMutation, useVerifyOtpMutation} = authService;

export const useLoginSendOtp = () => {
  const [loginSendOtp, result] = useLoginSendOtpMutation();

  return {
    loginSendOtp,
    ...result,
  };
};

export const useVerifyOtp = () => {
  const [verifyOtp, result] = useVerifyOtpMutation();
  return {
    verifyOtp,
    ...result,
  };
};
