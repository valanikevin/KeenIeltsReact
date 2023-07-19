import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const logoutClick = null;
  return (
    <div>
      {user ? (
        <>
          <Link to={"/"}>Home Page</Link>
          <span> | </span>
          <button onClick={logoutClick}>Logout</button>
        </>
      ) : (
        <>
          <Link to={"/"}>Home Page</Link>
          <span> | </span>
          <Link to={"/login"}>Login</Link>
        </>
      )}
    </div>
  );
};

export default Header;
