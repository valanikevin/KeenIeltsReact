import { useContext, useState, useEffect, createContext } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import NotificationContext from "../context/layout/NotificationContext";
import useAxios from "./useAxios";
const AuthContext = createContext();
import axios from "axios";
import LoadingContext from "../context/layout/LoadingContext";

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);
  const [registrationError, setRegistrationError] = useState(null);
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

  const loginUser = async (values, resetForm, initialValues) => {
    let response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    let data = await response.json();

    if ((await response).status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      localStorage.setItem("user", JSON.stringify(jwt_decode(data.access)));
      setNotification({ ...notification, message: "" });
      setLoadingBar(false);
      resetForm(initialValues);
      navigate("/");
    } else {
      let error = {
        title: "Login Error",
        message: "Invalid Credentials.",
        color: "danger",
      };
      setNotification(error);
      setLoadingBar(false);
    }
  };
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const registerUser = async (values, resetForm, initialValues) => {
    axios
      .post("http://localhost:8000/api/register/", {
        first_name: values.first_name,
        last_name: values.last_name,
        email: values.email,
        password1: values.password1,
        password2: values.password2,
      })
      .then(
        (response) => {
          resetForm(initialValues);
          let message = {
            title: "Registration Successful",
            message:
              "You have successfully registered your account. Please login now.",
            color: "success",
          };

          setNotification(message);

          navigate("/login");
        },
        (error) => {
          console.log(error.response.data.errors);
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
