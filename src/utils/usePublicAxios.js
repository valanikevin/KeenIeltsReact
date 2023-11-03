import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect } from "react";
import LoadingContext from "../context/layout/LoadingContext";
import { DJANGO_BASE_URL } from "./config";

export const baseURL = DJANGO_BASE_URL;

const usePublicAxios = () => {
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  useEffect(() => {
    // This cleanup function will hide the loadingBar when the component is unmounted
    return () => {
      setLoadingBar(false);
    };
  }, [setLoadingBar]);

  const axiosInstance = axios.create({
    baseURL,
  });

  axiosInstance.interceptors.request.use(async (req) => {
    setLoadingBar(true);
    return req;
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      setLoadingBar(false); // Hide the loadingBar when a response is received
      return response;
    },
    (error) => {
      setLoadingBar(false); // Hide the loadingBar if there is an error
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default usePublicAxios;
