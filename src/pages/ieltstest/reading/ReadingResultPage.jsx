import React from "react";
import { useParams } from "react-router-dom";

const ReadingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  return (
    <div>
      {module_slug} - {attempt_slug}
    </div>
  );
};

export default ReadingResultPage;
