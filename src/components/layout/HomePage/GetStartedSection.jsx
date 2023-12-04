import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

const GetStartedSection = () => {
  const title = "Get Started with Keen IELTS";
  const subtitle = "Achieve your IELTS goals";
  const description = `Sign up today and embark on your journey towards achieving a higher band score in IELTS. With our state-of-the-art learning system, tailored just for you, success is not just a goal—it's a guarantee. And the best part? It's completely free.`;
  const btntext = "Get Started";
  const btnlink = "/register/";

  return (
    <Container>
      <Row>
        <Col
          lg={{ span: 8, offset: 2 }}
          md={12}
          xs={12}
          className="text-center"
        >
          <span className="fs-4 text-warning ls-md text-uppercase fw-semi-bold">
            {subtitle}
          </span>
          {/* heading  */}
          <h2 className="display-3 mt-4 mb-3 fw-bold">{title}</h2>
          {/* para  */}
          <p className="lead px-lg- 8 mb-6">{description}.</p>
          <Link to={btnlink} className="btn btn-primary">
            {btntext}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default GetStartedSection;
