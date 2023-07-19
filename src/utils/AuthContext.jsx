import { useContext, useState, useEffect, createContext } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  let navigate = useNavigate();

  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  useEffect(() => {
    setLoading(false);
  }, []);

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
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };
  const logoutUser = () => {};
  const registerUser = (userInfo) => {};
  const checkUserStatus = () => {};

  const contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser,
    registerUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading....</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
