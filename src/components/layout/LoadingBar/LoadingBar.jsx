import React, { useContext } from "react";
import "./LoadingBar.css";
import LoadingContext from "../../../context/layout/LoadingContext";

const LoadingBar = () => {
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  if (!loadingBar) {
    return null;
  }

  return (
    <div className="demo-container1">
      <div className="progress-bar1">
        <div className="progress-bar-value1"></div>
      </div>
    </div>
  );
};

export default LoadingBar;
