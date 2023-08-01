import React, { useState } from "react";
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
    <div style={{ height: "100vh", width: "100vw" }}>
      <SplitPane split="horizontal" minSize={50} defaultSize={100}>
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
        <div className="statisticsDiv" />
      </SplitPane>
    </div>
  );
};

export default AttemptListeningModulePage;
