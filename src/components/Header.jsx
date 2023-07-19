import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext, { useAuth } from "../utils/AuthContext";

const Header = () => {
  const navigate = useNavigate();

  let { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <h1>Helllo {user.email}</h1>
          <Link to={"/"}>Home Page</Link>
          <span> | </span>
          <button onClick={logoutUser}>Logout</button>
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
