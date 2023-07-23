import React from "react";

import { useState } from "react";
import LoadingState from "./Context";

const LoadingState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingState.Provider value={[loading, setLoading]}>
      {children}
    </LoadingState.Provider>
  );
};

export default LoadingState;
