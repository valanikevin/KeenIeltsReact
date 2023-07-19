import { useContext, useState, useEffect, createContext } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

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
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const registerUser = (userInfo) => {};
  const checkUserStatus = () => {};

  //   let updateToken = async () => {
  //     console.log("Update Token Called");
  //     let response = await fetch("http://localhost:8000/api/token/refresh/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         refresh: authTokens?.refresh,
  //       }),
  //     });
  //     let data = await response.json();
  //     if (response.status === 200) {
  //       setAuthTokens(data);
  //       setUser(jwt_decode(data.access));
  //       localStorage.setItem("authTokens", JSON.stringify(data));
  //       localStorage.setItem("user", JSON.stringify(jwt_decode(data.access)));
  //     } else {
  //       logoutUser();
  //     }

  //     if (loading) {
  //       setLoading(false);
  //     }
  //   };

  const contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
    registerUser,
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
