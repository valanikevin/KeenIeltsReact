import React from "react";
import { Button, ButtonGroup, Row, Col } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ReadingFooter = () => {
  return (
    <div
      className="fixed-footer d-flex align-items-center justify-content-center"
      style={{
        height: "50px",
        width: "100vw",
        position: "fixed",
        bottom: 0,
        backgroundColor: "white",
      }}
    >
      <Row className="w-100">
        <Col className="col-4">{/* Add your additional content here */}</Col>
        <Col className="col-4 text-center d-flex align-items-center justify-content-center">
          <ButtonGroup size="sm">
            <Button className="px-1">
              <FiChevronLeft size={20} />
            </Button>
            <Button disabled variant="outline-primary" className="text-black">
              Section 1
            </Button>
            <Button className="px-1">
              <FiChevronRight size={20} />
            </Button>
          </ButtonGroup>
        </Col>
        <Col className="col-4">{/* Add your additional content here */}</Col>
      </Row>
    </div>
  );
};

export default ReadingFooter;
