import React from "react";
import { useState } from "react";
import LoadingContext from "./LoadingContext";

const LoadingState = ({ children }) => {
  const [loadingBar, setLoadingBar] = useState(false);
  return (
    <LoadingContext.Provider value={[loadingBar, setLoadingBar]}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingState;
