import React, { useState } from "react";
import TestTypeContext from "../TestTypeContext";

const TestTypeState = ({ children }) => {
  const [testType, setTestType] = useState("academic");
  return (
    <TestTypeContext.Provider value={[testType, setTestType]}>
      {children}
    </TestTypeContext.Provider>
  );
};

export default TestTypeState;
