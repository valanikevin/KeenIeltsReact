import { useContext, useState, useEffect, createContext } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import NotificationContext from "./layout/NotificationContext";
import useAxios from "../utils/useAxios";
import axios from "axios";
import LoadingContext from "./layout/LoadingContext";
import { DJANGO_BASE_URL } from "../utils/config";
import usePublicAxios from "../utils/usePublicAxios";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const api = usePublicAxios();
  const [loading, setLoading] = useState(true);
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);
  const [registrationError, setRegistrationError] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [notification, setNotification] = useContext(NotificationContext);

  let navigate = useNavigate();

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
  }, [authTokens, loading]);

  const loginUser = async (values, handleSuccess) => {
    setLoadingBar(true); // Show loading bar at the start of the request
    try {
      const response = await api.post(`${DJANGO_BASE_URL}/account/token/`, {
        email: values.email,
        password: values.password,
      });

      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.access));
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      localStorage.setItem(
        "user",
        JSON.stringify(jwt_decode(response.data.access))
      );

      handleSuccess();
      navigate("/"); // Navigate to the homepage on successful login
    } catch (error) {
      if (error.response) {
        // The server responded with a status code outside the 2xx range
        setLoginError(error.response.data.detail || "Invalid Credentials.");
      } else {
        // The request was made but no response was received or error occurred in setting up the request
        setLoginError("There was a problem connecting to the server.");
        setNotification({
          title: "Network Error",
          message:
            "There was a problem connecting to the server. Please try again later.",
          color: "danger",
        });
      }
    } finally {
      setLoadingBar(false); // Hide loading bar after the request is completed
    }
  };

  const logoutUser = async () => {
    setAuthTokens(null);
    setUser(null);

    // Wrap localStorage removal in a Promise
    await new Promise((resolve) => {
      localStorage.removeItem("authTokens");
      localStorage.removeItem("user");
      resolve();
    });

    // Navigate after localStorage operations are complete
    navigate("/?alert=You're successfully logged out&variant=success");
  };
  const registerUser = async (values, handleSuccess) => {
    api
      .post(DJANGO_BASE_URL + "/account/register/", {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password1: values.password1,
        password2: values.password2,
      })
      .then(
        (response) => {
          handleSuccess();

          navigate(
            "/verify?email=" +
              values.email +
              "&alert=Registration Successful, Please Verify Your Email Now&variant=success"
          );
        },
        (error) => {
          setRegistrationError(error.response.data.errors);
        }
      )
      .finally((response) => {
        setLoadingBar(false);
      });
  };

  const contextData = {
    user: user,
    authTokens: authTokens,
    registrationError: registrationError,
    loginError: loginError,
    setAuthTokens: setAuthTokens,
    setUser: setUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser: registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
