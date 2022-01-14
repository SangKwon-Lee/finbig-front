import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const {
  REACT_APP_CMS_TOKEN,
  REACT_APP_CMS_URL,
  REACT_APP_API_URL,
  REACT_APP_NAVER_DATALAB_URL,
} = process.env;

export const CMSURL = REACT_APP_CMS_URL;
export const CMS_TOKEN = REACT_APP_CMS_TOKEN;
export const APIURL = REACT_APP_API_URL;
export const DATALABURL = REACT_APP_NAVER_DATALAB_URL;

const axiosInstance = axios.create({
  baseURL: CMSURL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) ||
        `Something went wrong`,
    ),
);

export const apiServer = axios.create({
  baseURL: APIURL,
});

export const cmsServer = axios.create({
  baseURL: CMSURL,
});

export const naverDatalabServer = axios.create({
  baseURL: DATALABURL,
  withCredentials: false,
  headers: {
    'X-NCP-APIGW-API-KEY-ID': '9l200haxwb',
    'X-NCP-APIGW-API-KEY': 'fMCGqMXau5N44zqvTV4hCbwVYS1bBxXAU0WGJkWq',
    'Content-Type': 'application/json',
  },
});

apiServer.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) ||
        `Something went wrong`,
    ),
);

const pureAxiosInstance = axios.create({
  baseURL: CMSURL,
});

pureAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) ||
        `Something went wrong`,
    ),
);

export default pureAxiosInstance;
