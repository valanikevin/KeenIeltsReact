import React, { useEffect, useState } from "react";
import TestTypeContext from "../TestTypeContext";

const TestTypeState = ({ children }) => {
  const [testType, setTestType] = useState();

  useEffect(() => {
    // Attempt to get the test type from localStorage
    const storedTestType = localStorage.getItem("testType");

    // If there is a stored test type, use that, otherwise default to "academic"
    setTestType(storedTestType || "academic");
  }, []);

  useEffect(() => {
    // Make sure we don't overwrite localStorage with undefined on initial render
    if (testType) {
      localStorage.setItem("testType", testType);
    }
  }, [testType]);

  return (
    <TestTypeContext.Provider value={[testType, setTestType]}>
      {children}
    </TestTypeContext.Provider>
  );
};

export default TestTypeState;
