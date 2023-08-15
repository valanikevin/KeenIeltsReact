import React from "react";
import {
  Button,
  ButtonGroup,
  Row,
  Col,
  Stack,
  Container,
  Card,
} from "react-bootstrap";
import {
  FiArrowUp,
  FiArrowDown,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import CountdownTimer from "../../elements/CountdownTimer";
import QuestionPallete from "../QuestionPallete";

const ReadingFooter = ({
  isExpanded,
  toggleExpanded,
  deviceType,
  module,
  questionData,
  setShowReviewModal,
  userAllAnswer,
  setShowSubmitModal,
}) => {
  return (
    <div
      className="fixed-footer border-top"
      style={{
        height: isExpanded ? "50vh" : "50px", // adjust as needed
        width: "100vw",
        position: "fixed",
        bottom: 0,
        backgroundColor: "white",
        transition: "height 0.3s",
        zIndex: "999",
      }}
    >
      <Container>
        <Row className="mt-1 pb-1 border-bottom text-black">
          <Col className="col-4 mt-1">
            <div>
              <span style={{ fontSize: "20px" }}>
                <FiCheckCircle className="" style={{ marginRight: "5px" }} />
                {questionData.completed_questions}/{module.total_questions}
              </span>
            </div>
          </Col>
          <Col className="col-4 text-center mt-1">
            <CountdownTimer initialMinutes={40} initialSeconds={0} />
          </Col>
          <Col className="col-4" style={{ textAlign: "right" }}>
            {deviceType !== "mobile" && (
              <>
                <Button
                  variant="outline-primary"
                  className="mx-1"
                  onClick={() => {
                    setShowReviewModal(true);
                  }}
                >
                  Review
                </Button>
                <Button
                  variant="outline-primary"
                  className="mx-1"
                  onClick={setShowSubmitModal}
                >
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
        <Row className="my-3" style={{ overflow: "auto", maxHeight: "38vh" }}>
          <Col lg={"8"} className="my-2">
            <p className=" fw-bold text-black mb-1 mx-1">Question Pallete</p>
            <QuestionPallete module={module} currentFormData={userAllAnswer} />
          </Col>
          <Col lg={"4"}>
            {deviceType === "mobile" && (
              <>
                <Button
                  variant="outline-primary"
                  className="mx-1"
                  onClick={() => {
                    setShowReviewModal(true);
                  }}
                >
                  Review
                </Button>
                <Button
                  variant="outline-primary"
                  className="mx-1"
                  onClick={setShowSubmitModal}
                >
                  Submit Test
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ReadingFooter;
