import React from "react";
import {
  Button,
  ButtonGroup,
  Row,
  Col,
  Stack,
  Container,
} from "react-bootstrap";
import {
  FiArrowUp,
  FiArrowDown,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import CountdownTimer from "../../elements/CountdownTimer";

const ReadingFooter = ({ isExpanded, toggleExpanded, deviceType }) => {
  return (
    <div
      className="fixed-footer border-top"
      style={{
        height: isExpanded ? "300px" : "50px", // adjust as needed
        width: "100vw",
        position: "fixed",
        bottom: 0,
        backgroundColor: "white",
        transition: "height 0.3s",
        zIndex: "999",
      }}
    >
      {/* <ButtonGroup size="sm">
        <Button className="px-1">
          <FiChevronLeft size={20} />
        </Button>
        <Button disabled variant="outline-primary" className="text-black">
          Section 1
        </Button>
        <Button className="px-1">
          <FiChevronRight size={20} />
        </Button>
      </ButtonGroup> */}
      <Container>
        <Row className="mt-1 pb-1 border-bottom text-black">
          <Col className="col-4 mt-1">
            <div>
              <span style={{ fontSize: "20px" }}>4/10</span>
            </div>
          </Col>
          <Col className="col-4 text-center mt-1">
            {" "}
            <CountdownTimer initialMinutes={40} initialSeconds={0} />
          </Col>
          <Col className="col-4" style={{ textAlign: "right" }}>
            {deviceType !== "mobile" && (
              <>
                <Button variant="outline-primary" className="mx-1">
                  Review
                </Button>
                <Button variant="outline-primary" className="mx-1">
                  Submit Test
                </Button>
              </>
            )}
            <Button
              className="mx-1"
              onClick={() => toggleExpanded(!isExpanded)}
            >
              {isExpanded ? <FiArrowDown size={20} /> : <FiArrowUp size={20} />}
            </Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg={"4"}>
            <h2>Kevin</h2>
          </Col>
          <Col lg={"4"}>
            <h2>Kevin</h2>
          </Col>
          <Col lg={"4"}>
            <h2>Kevin</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReadingFooter;
