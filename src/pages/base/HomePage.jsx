import { useState, useEffect, useContext } from "react";
import useAxios from "../../utils/useAxios";
import AuthContext from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import HeroTyped from "../../components/layout/HomePage/HeroTyped";

const HomePage = () => {
  let api = useAxios();
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/dashboard/" />;
  }

  return (
    <div>
      <HeroTyped />
    </div>
  );
};

export default HomePage;
