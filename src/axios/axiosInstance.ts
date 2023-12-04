import { IResponse } from "@/types";
import axios from "axios";

export const instance = axios.create();

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["accept"] = "application/json";
instance.defaults.timeout = 50000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor

instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
    // Do something with response data
    const responseObject: IResponse = {
      data: response,
    };
    return responseObject;
  },
  function (error) {
    // return error.response;
    return Promise.reject(error);
  }
);
