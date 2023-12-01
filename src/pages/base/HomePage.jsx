import { useState, useEffect, useContext } from "react";
import useAxios from "../../utils/useAxios";
import AuthContext from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import HeroTyped from "../../components/layout/HomePage/HeroTyped";
import HeroRightImage from "../../components/layout/HomePage/HeroRightImage";
import EvaluationCard from "../../components/layout/HomePage/EvaluationCard";
import ExploreBooksCard from "../../components/layout/HomePage/ExploreBooksCard";

const HomePage = () => {
  let api = useAxios();
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/dashboard/" />;
  }

  useEffect(() => {
    document.title = "KeenIELTS - Practice Real IELTS Tests";
  }, []);

  return (
    <div>
      <section className="py-lg-16 py-6 bg-white border-bottom border-top">
        <HeroRightImage />
      </section>

      <section className="py-lg-16 py-6 border-bottom">
        <EvaluationCard />
      </section>

      <section className="py-lg-16 py-6 border-bottom">
        <ExploreBooksCard />
      </section>
    </div>
  );
};

export default HomePage;
