import React from "react";
import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import CountdownTimer from "../../elements/CountdownTimer";
import { FiArrowRight, FiCheckCircle, FiArrowLeft } from "react-icons/fi";

const WritingFooter = ({
  deviceType,
  handleConfirmEndTest,
  isFirstSection,
  isLastSection,
  handleNextSectionButton,
  handlePreviousSectionButton,
  setShowSubmitModal,
}) => {
  return (
    <div
      className="fixed-footer border-top"
      style={{
        height: "50px", // adjust as needed
        width: "100vw",
        position: "fixed",
        bottom: 0,
        backgroundColor: "white",
        transition: "height 0.3s",
        zIndex: "999",
      }}
    >
      <Container>
        <Row className="mt-1 text-black">
          <Col className="col-4 mt-1">
            <CountdownTimer
              initialMinutes={60}
              initialSeconds={0}
              handleTimesUp={handleConfirmEndTest}
            />
          </Col>
          <Col className="col-8 mt-1" style={{ textAlign: "right" }}>
            <Button
              variant="dark"
              className="btn-sm mx-2"
              onClick={handlePreviousSectionButton}
              disabled={isFirstSection} // Disable if on the first section
            >
              <FiArrowLeft size={20} />{" "}
              {deviceType !== "mobile" && "Previous Task"}
            </Button>
            {isLastSection ? (
              <Button
                variant="primary"
                className="btn-sm"
                onClick={() => {
                  setShowSubmitModal(true);
                }}
              >
                Submit Test <FiCheckCircle size={20} />
              </Button>
            ) : (
              <Button
                variant="dark"
                className="btn-sm"
                onClick={handleNextSectionButton}
              >
                Next Task <FiArrowRight size={20} />
              </Button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WritingFooter;
