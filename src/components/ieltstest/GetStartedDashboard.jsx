import React from "react";
import { Card, Col, Row, Stack } from "react-bootstrap";
import StartPracticeTestCard from "./StartPracticeTestCard";
import Logo from "../../assets/images/brand/logo/logo-small.svg";
import AccountSettingForm from "../auth/AccountSettingForm";

const GetStartedDashboard = () => {
  return (
    <Row className="">
      <Col sm={12} lg={6} className="">
        <StartPracticeTestCard />
        <Card className="my-3">
          <Card.Header>
            <Stack direction="horizontal" gap={3}>
              <div>
                <img src={Logo} width={40} />
              </div>
              <div className="ms-auto">
                <h3 className="mt-2 fw-bold">Get Started</h3>
              </div>
            </Stack>
          </Card.Header>
          <Card.Body>
            <p>
              <span className="fw-bold">Welcome to KeenIELTS,</span> your
              personalized gateway to mastering the IELTS exam. Our platform is
              meticulously designed to assist you in the four key modules. With
              our unique blend of comprehensive evaluations, detailed feedback,
              and insightful analytics, we provide you with the tools to
              understand and improve your abilities. Begin your learning journey
              by selecting your desired test type above, or delve into our
              diverse collection of IELTS books available on the navbar. <br />
              <br />
              <span className="fw-bold">Remember,</span> consistent practice is
              the cornerstone of success in IELTS. Our data underscores this
              fact: students who initially scored 6.5 bands and engaged in
              regular practice on KeenIELTS for at least 15 days have remarkably
              improved, often achieving scores as high as 8.0 bands. This
              journey requires dedication, and by practicing regularly with our
              resources, you too can elevate your IELTS performance. Start now
              and unlock your full potential with KeenIELTS.
            </p>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} lg={6} className="mb-3">
        <div className="mb-3">
          <AccountSettingForm />
        </div>
      </Col>
    </Row>
  );
};

export default GetStartedDashboard;
