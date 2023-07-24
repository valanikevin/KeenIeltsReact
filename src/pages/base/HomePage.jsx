import { useState, useEffect, useContext } from "react";
import useAxios from "../../utils/useAxios";
import AuthContext from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const HomePage = () => {
  let api = useAxios();
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/dashboard/" />;
  }

  return (
    <div>
      <p>You are logged to the home page!</p>

      <ul></ul>
    </div>
  );
};

export default HomePage;
