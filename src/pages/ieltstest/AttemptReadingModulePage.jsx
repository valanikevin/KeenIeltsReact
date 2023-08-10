import React, { useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import "./ReactSplitPane.css";
import { Card, Container } from "react-bootstrap";

const AttemptReadingModulePage = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    // Call once to set initial state
    handleResize();

    // Attach event listener for future window resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount and once on unmount

  return (
    <div style={{ height: "90vh", width: "98vw" }}>
      <SplitPane
        split={deviceType === "mobile" ? "horizontal" : "vertical"}
        minSize={100}
        defaultSize={100}
      >
        <div className="simulationDiv p-2" style={{ overflow: "auto" }}>
          <Card>
            <Card.Body>
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
            </Card.Body>
          </Card>
        </div>
        <div className="statisticsDiv p-2" style={{ overflow: "auto" }}>
          <Card>
            <Card.Body>
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
            </Card.Body>
          </Card>
        </div>
      </SplitPane>
    </div>
  );
};

export default AttemptReadingModulePage;
