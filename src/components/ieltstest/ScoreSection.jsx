import React from "react";
import PageHeadingBriefinfo from "../layout/PageHeadingBriefInfo";
import { Container, Row, Col, Card } from "react-bootstrap";

const ScoreSection = ({ attempt, module_name }) => {
  return (
    <>
      <PageHeadingBriefinfo
        pagetitle={attempt.book.name}
        briefinfo={module_name + " Test Result"}
        color="bg-listening"
      />
      <Container className="my-3">
        <Row className="px-2">
          <Col xs={12}>
            <h2 className="display4">Your Scores</h2>
          </Col>
          <Col xs={6} md={3} className="my-2 d-flex">
            <Card className="flex-fill">
              <Card.Body className="">
                <span>Bands</span>
                <h2 style={{ fontSize: "1.2rem" }} className="my-2">
                  {attempt.bands} Bands
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3} className="my-2 d-flex">
            <Card className="flex-fill">
              <Card.Body className="">
                <span>Score</span>
                <h2 style={{ fontSize: "1.2rem" }} className="my-2">
                  {attempt.correct_answers}/
                  {attempt.correct_answers + attempt.incorrect_answers}
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3} className="my-2 d-flex">
            <Card className="flex-fill">
              <Card.Body className="">
                <span>Highest Score</span>
                <h2
                  style={{ fontSize: "1.2rem" }}
                  className="my-2 text-uppercase"
                >
                  {attempt.evaluation.best_scored_section[0]}
                </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3} className="my-2 d-flex">
            <Card className="flex-fill">
              <Card.Body className="">
                <span>Lowest Score</span>
                <h2
                  style={{ fontSize: "1.2rem" }}
                  className="my-2 text-uppercase"
                >
                  {attempt.evaluation.worst_scored_section[0]}
                </h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ScoreSection;
