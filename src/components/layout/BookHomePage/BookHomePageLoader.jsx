import React from "react";
import EvaluationLoader from "../../ieltstest/EvaluationLoader";

const BookHomePageLoader = () => {
  return (
    <EvaluationLoader
      title={"Please Wait While We Load Your Book"}
      description={
        "We are loading your book; it should not take more than a few seconds. If it doesn't load within 1 minute, please refresh to try again."
      }
    />
  );
};

export default BookHomePageLoader;
