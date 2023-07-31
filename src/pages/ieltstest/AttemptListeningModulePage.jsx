import React, { useState } from "react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

const AttemptListeningModulePage = () => {
  const [sizes, setSizes] = useState([100, "30%", "auto"]);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={{ height: 1000 }}>
      <SplitPane split="horizontal" sizes={sizes} onChange={setSizes}>
        <Pane minSize={50} maxSize="50%">
          <div style={{ ...layoutCSS, background: "#ddd" }}>pane1</div>
        </Pane>
        <div style={{ ...layoutCSS, background: "#d5d7d9" }}>pane2</div>
        <div style={{ ...layoutCSS, background: "#a1a5a9" }}>pane2</div>
      </SplitPane>
    </div>
  );
};

export default AttemptListeningModulePage;
