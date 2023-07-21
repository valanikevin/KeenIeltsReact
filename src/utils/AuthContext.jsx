import { useContext, useState, useEffect, createContext } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import NotificationContext from "../context/layout/NotificationContext";
import useAxios from "./useAxios";
const AuthContext = createContext();
import axios from "axios";

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
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
    setLoading(false);
  }, [authTokens, loading]);

  const loginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    let data = await response.json();

    if ((await response).status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      localStorage.setItem("user", JSON.stringify(jwt_decode(data.access)));
      setNotification({ ...notification, message: "" });
      navigate("/");
    } else {
      let error = {
        title: "Login Error",
        message: "Invalid Credentials.",
        color: "danger",
      };

      setNotification(error);
    }
  };
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const registerUser = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/register/", {
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        password1: e.target.password1.value,
        password2: e.target.password2.value,
      })
      .then(
        (response) => {
          navigate("/login");
        },
        (error) => {
          console.log(error.response.data.errors);
          setRegistrationError(error.response.data.errors);
        }
      );
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
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
