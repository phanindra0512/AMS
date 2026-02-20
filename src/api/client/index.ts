import axios from 'axios';


import interceptors from './interceptors';

const APPLICATION_JSON = 'application/json';
const CONTENT_TYPE = 'Content-Type';


const AxiosClient = axios.create({
  baseURL: "https://ams-backend-l7l4.onrender.com",
  headers: {
    Accept: APPLICATION_JSON,
    // [CONTENT_TYPE]: APPLICATION_JSON,
  },
});

interceptors(AxiosClient);

export default AxiosClient;
