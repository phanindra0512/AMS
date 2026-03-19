import axios from 'axios';
import Config from "react-native-config";
import interceptors from './interceptors';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';
console.log("API URL:", Config.API_BASE_URL);

const AxiosClient = axios.create({
  baseURL: Config.API_BASE_URL,
  headers: {
    Accept: APPLICATION_JSON,
    // [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

interceptors(AxiosClient);

export default AxiosClient;
