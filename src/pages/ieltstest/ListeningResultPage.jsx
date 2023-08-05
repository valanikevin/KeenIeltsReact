import React, { useEffect, useState } from "react";
import useAxios from "../../utils/useAxios";
import { API_URLS } from "../../utils/urls";
import { useParams } from "react-router";
import { Accordion, Card, Col, Container, Row, Table } from "react-bootstrap";
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
      </div>

      <div className="my-4">
        <Container>
          <Row>
            <Col sm={12} md={6}>
                
            </Col>
            <Col sm={12} md={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="text-black fw-bold">Review Answers</span>
                  </Accordion.Header>
                  <Accordion.Body className="p-0 m-0">
                    <Table bordered className="table-sm">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Your Answer</th>
                          <th scope="col">Correct Answer</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(attempt.evaluation.all_questions).map(
                          (item, index) => (
                            <tr
                              key={index}
                              className={
                                item[1]["is_user_answer_correct"] === true
                                  ? "table-success"
                                  : "table-danger"
                              }
                            >
                              <td className="fw-bold">{index + 1}</td>
                              <td className="text-black">
                                {item[1]["user_answer"]}
                              </td>
                              <td className="text-black">
                                {item[1]["correct_answer"].length > 1
                                  ? JSON.stringify(item[1]["correct_answer"])
                                  : item[1]["correct_answer"]}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </Table>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ListeningResultPage;
