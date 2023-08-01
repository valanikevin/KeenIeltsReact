import React from "react";
import React, { useState } from "react";
import "../../components/layout/ResizePanel/style.css";
import SplitPane from "react-split-pane";

const ResizePanelCode = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <SplitPane split="horizontal" minSize={100} defaultSize={100}>
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

export default ResizePanelCode;
