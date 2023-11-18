import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";

const CustomSplitPane = ({ left, right, deviceType }) => {
  // CSS

  const scrollableStyle = {
    height: `${deviceType === "mobile" ? "42vh" : "calc(100vh - 100px)"}`,
    overflowY: "auto",
  };

  const scrollableStyleWithBackground = {
    ...scrollableStyle,
    backgroundColor: "#F5F5DC",
  };
  return (
    <Container className={deviceType === "mobile" ? "pt-8" : "pt-7"}>
      <Row className="">
        <Col sm={12} lg={6} style={scrollableStyle} className="bg-white">
          {/* Content of the first column */}
          <div>{left}</div>
        </Col>
        <Col sm={12} lg={6} style={scrollableStyleWithBackground}>
          {/* Content of the second column */}
          <div>
            {right}
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomSplitPane;
