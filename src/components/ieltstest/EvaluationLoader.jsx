import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import spinnerGif from "../../assets/images/gif/Rhombus.gif";

const EvaluationLoader = ({ title, description }) => {
  return (
    <Container className="my-5 ">
      <Row className="justify-content-center">
        <Col xl={8} lg={10} md={12}>
          <div>
            <Card className="text-center">
              <Card.Header>
                <h3 className="mt-2 fw-bold">{title}</h3>
              </Card.Header>
              <Card.Body>
                <div>
                  <img src={spinnerGif} alt="Loading..." width={70} />
                </div>
                <div className="mt-3">
                  <p style={{ fontSize: "1.1rem" }}>{description}</p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EvaluationLoader;
