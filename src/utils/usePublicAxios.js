import axios from "axios";

import { useContext, useEffect } from "react";
import LoadingContext from "../context/layout/LoadingContext";
import { DJANGO_BASE_URL } from "./config";
import ErrorContext from "../context/layout/ErrorContext";

export const baseURL = DJANGO_BASE_URL;

const usePublicAxios = () => {
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);
  const [error, setError] = useContext(ErrorContext);
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
      console.error("Error:", error);
      setLoadingBar(false); // Hide the loadingBar if there is an error
      setError(
        "Something went wrong. Please refresh the page and try again. If the problem persists, contact team@keenielts.com."
      );
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default usePublicAxios;
