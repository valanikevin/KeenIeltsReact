import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../utils/useAxios";

const StartBookSmartTest = () => {
  const { test_type, slug } = useParams();
  const api = useAxios();

  
  return (
    <div>
      StartBookSmartTest {test_type} - {slug}
    </div>
  );
};

export default StartBookSmartTest;
