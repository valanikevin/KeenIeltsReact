import React from "react";
import { useState } from "react";
import ErrorContext from "./ErrorContext";

const ErrorState = ({ children }) => {
  const [error, setError] = useState(null);
  return (
    <ErrorContext.Provider value={[error, setError]}>
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorState;
