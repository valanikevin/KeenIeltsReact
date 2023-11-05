import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import AuthContext from "../context/AuthContext";
import { useContext, useEffect } from "react";
import LoadingContext from "../context/layout/LoadingContext";
import { DJANGO_BASE_URL } from "./config";

export const baseURL = DJANGO_BASE_URL;

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  useEffect(() => {
    // This cleanup function will hide the loadingBar when the component is unmounted
    return () => {
      setLoadingBar(false);
    };
  }, [setLoadingBar]);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    setLoadingBar(true);
    const user = jwt_decode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}/account/token/refresh/`, {
      refresh: authTokens.refresh,
    });

    localStorage.setItem("authTokens", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
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

export default useAxios;
