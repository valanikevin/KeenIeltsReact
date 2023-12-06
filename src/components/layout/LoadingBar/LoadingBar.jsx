import React, { useContext } from "react";
import "./LoadingBar.css";
import LoadingContext from "../../../context/layout/LoadingContext";

const LoadingBar = () => {
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  if (!loadingBar) {
    return (
      <div className="demo-container1 bg-white border-bottom">
        <div className="bg-white">
          <div className="bg-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-container1 border-bottom">
      <div className="progress-bar1">
        <div className="progress-bar-value1"></div>
      </div>
    </div>
  );
};

export default LoadingBar;
