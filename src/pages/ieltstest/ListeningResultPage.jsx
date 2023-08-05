import React, { useEffect, useState } from "react";
import useAxios from "../../utils/useAxios";
import { API_URLS } from "../../utils/urls";
import { useParams } from "react-router";
import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeadingBriefinfo from "../../components/layout/PageHeadingBriefInfo";

const ListeningResultPage = () => {
  const api = useAxios();
  const { module_slug, attempt_slug } = useParams();
  const [attempt, setAttempt] = useState(null);

  async function getAttempt() {
    const response = await api.post(
      API_URLS.getListeningAttempt + attempt_slug + "/"
    );
    if (response.status === 200) {
      setAttempt(response.data);
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  useEffect(() => {
    getAttempt();
  }, []);

  if (!attempt) {
    return null;
  }

  return (
    <>
      <div className="border-bottom">
        <PageHeadingBriefinfo
          pagetitle={attempt.book.name}
          briefinfo={"Listening Test Result"}
          color="bg-listening"
        />
        <Container className="my-3">
          <Row className="px-2">
            <Col xs={6} md={3} className="my-2">
              <Card>
                <Card.Body className="">
                  <span>Bands</span>
                  <h2 style={{ fontSize: "18px" }} className="my-2">
                    {attempt.bands} Bands
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="my-2">
              <Card>
                <Card.Body className="">
                  <span>Score</span>
                  <h2 style={{ fontSize: "18px" }} className="my-2">
                    {attempt.correct_answers}/
                    {attempt.correct_answers + attempt.incorrect_answers}
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="my-2 ">
              <Card>
                <Card.Body className="">
                  <span>Highest Score</span>
                  <h2
                    style={{ fontSize: "18px" }}
                    className="my-2 text-uppercase"
                  >
                    {attempt.evaluation.best_scored_section[0]}
                  </h2>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="my-2 ">
              <Card>
                <Card.Body className="">
                  <span>Lowest Score</span>
                  <h2
                    style={{ fontSize: "18px" }}
                    className="my-2 text-uppercase"
                  >
                    {attempt.evaluation.worst_scored_section[0]}
                  </h2>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ListeningResultPage;
