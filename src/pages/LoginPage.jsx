import React, { useEffect, useContext } from "react";
import AuthContext, { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  let { loginUser } = useContext(AuthContext);

  return (
    <div>
      <form onSubmit={loginUser}>
        <br /> <br />
        <input type="email" name="email" placeholder="Enter your email" />
        <br /> <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />{" "}
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
