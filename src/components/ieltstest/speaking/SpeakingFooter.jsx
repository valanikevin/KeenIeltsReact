import React from "react";
import CountdownTimer from "../../elements/CountdownTimer";
import { Row, Col, Container, Button, Stack } from "react-bootstrap";
import { MdKeyboardDoubleArrowRight, MdMic } from "react-icons/md";

const SpeakingFooter = ({ handleConfirmEndTest, deviceType }) => {
  return (
    <div
      className=" border-top bg-white"
      style={{ position: "fixed", bottom: 0, width: "100%" }}
    >
      <Container className="">
        <Row className="my-2 text-black justify-content-center ">
          <Col sm={8} className="border-bottom mb-2">
            <div className="mt-2 mb-3 text-center">
              <span className="">Recording</span>
            </div>
          </Col>
          <Col sm={8}>
            <Row className="">
              <Col className="col-6 mt-1">
                <Button
                  className={`w-100 ${deviceType === "desktop" && "btn-lg"}`}
                >
                  <MdMic size={23} /> Start
                </Button>
              </Col>
              <Col className="col-6 mt-1">
                <Button
                  className={`w-100 ${deviceType === "desktop" && "btn-lg"}`}
                >
                  Next <MdKeyboardDoubleArrowRight size={23} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpeakingFooter;
