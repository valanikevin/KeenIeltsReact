import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";

const CustomSplitPane = ({ left, right, deviceType, currentSection }) => {
  // References for the scrollable panes
  const leftPaneRef = useRef(null);
  const rightPaneRef = useRef(null);

  // Scroll to top effect
  useEffect(() => {
    if (leftPaneRef.current) {
      leftPaneRef.current.scrollTop = 0;
    }
    if (rightPaneRef.current) {
      rightPaneRef.current.scrollTop = 0;
    }
  }, [currentSection]); // Dependency array includes left and right content

  // CSS

  const scrollableStyle1 = {
    height: `${deviceType === "mobile" ? "38vh" : "calc(100vh - 100px)"}`,
    overflowY: "auto",
  };

  const scrollableStyle2 = {
    height: `${deviceType === "mobile" ? "46vh" : "calc(100vh - 100px)"}`,
    overflowY: "auto",
    backgroundColor: "#F5F5DC",
  };

  return (
    <Container className={deviceType === "mobile" ? "pt-7" : "pt-7"}>
      <Row className="">
        <Col
          sm={12}
          lg={6}
          style={scrollableStyle1}
          className="bg-white"
          ref={leftPaneRef}
        >
          {/* Content of the first column */}
          <div className="my-5">{left}</div>
        </Col>
        <Col sm={12} lg={6} style={scrollableStyle2} ref={rightPaneRef}>
          {/* Content of the second column */}
          <div className="my-5">{right}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomSplitPane;
