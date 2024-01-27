import { useState, useEffect, useContext } from "react";
import useAxios from "../../utils/useAxios";
import AuthContext from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import HeroTyped from "../../components/layout/HomePage/HeroTyped";
import HeroRightImage from "../../components/layout/HomePage/HeroRightImage";
import EvaluationCard from "../../components/layout/HomePage/EvaluationCard";
import ExploreBooksCard from "../../components/layout/HomePage/ExploreBooksCard";
import TestimonialsCTA from "../../components/layout/HomePage/TestimonialsCTA";
import KeenFeaturesSection from "../../components/layout/HomePage/KeenFeaturesSection";
import GetStartedSection from "../../components/layout/HomePage/GetStartedSection";
import { Helmet } from "react-helmet";

const HomePage = () => {
  let api = useAxios();
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/dashboard/" />;
  }

  return (
    <div>
      <Helmet>
        <title>
          KeenIELTS – Free & Authentic IELTS Practice Tests | Achieve Your
          Desired Band Score
        </title>
        <meta
          name="description"
          content="Embark on your IELTS journey with KeenIELTS and access real IELTS tests for free. Dive into authentic simulations for Listening, Reading, Writing, and Speaking. Benefit from comprehensive feedback and expert guidance to excel in your IELTS and reach your academic or career milestones."
        />
      </Helmet>
      <section className="py-lg-16 py-6 bg-white border-bottom border-top">
        <HeroRightImage />
      </section>

      <section className="py-lg-16 py-6 border-bottom">
        <EvaluationCard />
      </section>

      <section className="py-lg-16 py-6 bg-white border-bottom ">
        <ExploreBooksCard />
      </section>

      <section className="py-lg-16 py-6  border-bottom ">
        <KeenFeaturesSection />
      </section>

      <section className="py-lg-16 py-6 bg-white border-bottom ">
        <TestimonialsCTA />
      </section>

      <section className="py-lg-16 py-6  border-bottom ">
        <GetStartedSection />
      </section>
    </div>
  );
};

export default HomePage;
