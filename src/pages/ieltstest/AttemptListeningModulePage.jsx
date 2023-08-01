import React, { useState } from "react";
import "../../components/layout/ResizePanel/style.css";
import SplitPane from "react-split-pane";

const AttemptListeningModulePage = () => {
  const [sizes, setSizes] = useState([100, "30%", "auto"]);

  const layoutCSS = {
    height: "100%",
    overflow: "auto",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={{ height: "100vh" }}>
      <SplitPane split="horizontal" minSize={20} defaultSize={1000}>
        <div className="simulationDiv" style={{ overflow: "auto" }}>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
        </div>
        <div className="statisticsDiv" style={{ overflow: "auto" }}>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
          <h1>Kevin </h1>
        </div>
      </SplitPane>
    </div>
  );
};

export default AttemptListeningModulePage;
