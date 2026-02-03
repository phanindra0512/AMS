import {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {GlobalStore} from '../../storage/stores';
import GlobalStorage from '../../storage';
const UNAUTHORIZED = 401;

const setAuthorizationHeaders = (request: InternalAxiosRequestConfig) => {
  const {headers} = request;
  const userToken = GlobalStore.userToken.getValue('authToken');

  if (userToken?.authToken) {
    headers.Authorization = `Bearer ${userToken?.authToken}`;
  }
  return request;
};

// const handleLogout = () => {
//   console.log("Logging out user...");
//   GlobalStorage.delete("clientToken");
//   GlobalStorage.delete("userToken");
//   GlobalStorage.delete("parentInfo");
//   ToastAndroid.show("Session expired, Please login again.", ToastAndroid.LONG);
//   reset("LandingScreen");
// };

export default (httpClient: AxiosInstance) => {
  httpClient.interceptors.request.use(setAuthorizationHeaders);

  httpClient.interceptors.response.use(
    async response => {
      console.log('SUCCESS RESP FROM INTERCEPTORS', response);
      const {data} = response;
      const userToken = data?.token;
      if (userToken) {
        console.log('GOT USER TOKEN FROM Login-verify-otp RESPONSE', userToken);
        GlobalStore.userToken.setValue('authToken', {
          authToken: userToken,
        });
      }
      return response;
    },

    async error => {
      const {response, config} = error;
      const originalRequest = config;
      const status = response?.status;
      console.log('ERROR RESP FROM INTERCEPTORS', response);

      if (status === UNAUTHORIZED) {
        // try {
        //   console.log("Attempting to refresh client token...");

        //   const clientTokenResponse = await httpClient.post(CLIENT_TOKEN_URL, {
        //     grant_type: "client_credentials",
        //     client_id: CLIENT_ID,
        //     client_secret: CLIENT_SECRET,
        //     scope: SCOPE,
        //   });

        //   const { access_token } = clientTokenResponse.data;
        //   console.log("GOT CLIENT_TOKEN FROM oath/token ===> ", access_token);

        //   GlobalStore.clientToken.setValue("clientToken", {
        //     client_token: access_token,
        //   });

        //   originalRequest.headers.Authorization = `Bearer ${access_token}`;
        //   return httpClient(originalRequest);
        // } catch (error) {
        //   console.log("Error Interceptor in generating token");
        // }
        console.log('Persistent UNAUTHORIZED error, logging out...');
        // handleLogout();
      }
      return Promise.reject(error);
    },
  );
};
