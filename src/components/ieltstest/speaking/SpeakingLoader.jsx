import React from "react";
import { Card } from "react-bootstrap";
import spinnerGif from "../../../assets/images/gif/Rhombus.gif";
import EvaluationLoader from "../EvaluationLoader";

const SpeakingLoader = () => {
  return (
    <EvaluationLoader
      title={"Please Hold On, Your IELTS Speaking Analysis is Underway!"}
      description={
        "We're currently processing your speech to provide you with the most accurate IELTS speaking assessment. This process involves advanced algorithms and expert evaluations, so it may take a few moments. Please note that the analysis could take up to 3-4 minutes. Thank you for your patience."
      }
    />
  );
};

export default SpeakingLoader;
