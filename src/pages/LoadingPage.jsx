import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkeletonLoader from "../components/elements/skeleton/SkeletonLoader";

const LoadingPage = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <SkeletonLoader />
        </Col>
        <Col sm={12} md={6}>
          <SkeletonLoader />
        </Col>
      </Row>
    </Container>
  );
};

export default LoadingPage;
