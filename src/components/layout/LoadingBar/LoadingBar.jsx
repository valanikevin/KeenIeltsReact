import React, { useContext } from "react";
import "./LoadingBar.css";
import LoadingContext from "../../../context/layout/LoadingContext";

const LoadingBar = () => {
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  if (!loadingBar) {
    return null;
  }

  return (
    <div className="demo-container">
      <div className="progress-bar">
        <div className="progress-bar-value"></div>
      </div>
    </div>
  );
};

export default LoadingBar;
