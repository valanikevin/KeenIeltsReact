import React, { useState } from "react";
import SplitPane, { Pane } from "react-split-pane";

const AttemptListeningModulePage = () => {
  const paneStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflow: "auto",
  };
  return (
    <SplitPane split="horizontal" defaultSize={200} primary="second">
      <div style={paneStyle}>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
        <h1>Kevin</h1>
      </div>
      <div />
    </SplitPane>
  );
};

export default AttemptListeningModulePage;
