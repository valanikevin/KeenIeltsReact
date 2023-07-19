import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext, { useAuth } from "../utils/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const logoutClick = null;

  let { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <h1>Helllo {user.email}</h1>
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
