import React from "react";
import EvaluationLoader from "./EvaluationLoader";

const DashboardLoader = () => {
  return (
    <EvaluationLoader
      title={
        "Please Hold On, Your Personalized IELTS Dashboard is Being Prepared!"
      }
      description={
        "We are currently analyzing your performance to offer tailored recommendations and insights. Your personalized dashboard will be ready shortly, typically within a minute. Thank you for your patience."
      }
    />
  );
};

export default DashboardLoader;
