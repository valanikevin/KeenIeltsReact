import React from "react";
import { Col, Row } from "react-bootstrap";

const Alert = ({ children, text, color = "primary" }) => {
  return (
    <Row>
      <Col>
        <div className={`bg-${color}`}>
          <p className="py-2 px-3 text-white" style={{ fontSize: "16px" }}>
            {children}
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Alert;
