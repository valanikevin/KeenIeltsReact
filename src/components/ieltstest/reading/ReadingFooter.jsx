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
        <Stack
          direction="horizontal"
          className="mt-1 pb-1 border-bottom text-black"
        >
          <div>
            <span style={{ fontSize: "24px" }}>4/10</span>
          </div>
          <div className="ms-auto">
            <span style={{ fontSize: "24px" }}>34:50</span>
          </div>
          <div className="ms-auto">
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
          </div>
        </Stack>
        <Row>
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
