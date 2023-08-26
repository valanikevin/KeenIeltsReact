import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosWithoutLoader from "../../../utils/useAxiosWithoutLoader";
import { API_URLS } from "../../../utils/urls";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import SkeletonLoader from "../../../components/elements/skeleton/SkeletonLoader";
import {
  Badge,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Stack,
} from "react-bootstrap";
import parse from "html-react-parser";
import "../../../components/ieltstest/writing/WritingModule.css";

const WritingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [bands, setBands] = useState(null);
  const [module, setModule] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const api = useAxiosWithoutLoader();
  const bands_keys = [
    "coherence",
    "task_achievement",
    "grammatical_range",
    "lexical_resource",
  ];

  async function getBands() {
    const response = await api.post(
      "/ieltstest/get_writing_bands/" + attempt_slug + "/"
    );
    if (response.status === 200) {
      setBands(response.data);
      console.log(response.data);
    }
  }

  async function getEvaluation() {
    const response = await api.post(
      "/ieltstest/get_writing_evaluation/" + attempt_slug + "/"
    );
    if (response.status === 200) {
      setEvaluation(response.data);
      console.log(response.data);
    }
  }

  async function getAttempt() {
    const response = await api.post(
      API_URLS.getWritingAttempt + attempt_slug + "/"
    );
    if (response.status === 200) {
      setAttempt(response.data);
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  async function getModule() {
    const response = await api.post(
      API_URLS.getWritingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      console.log(response.data);
    }
  }

  useEffect(() => {
    getBands();
    getEvaluation();
  }, []);

  useEffect(() => {
    getModule();
  }, []);

  useEffect(() => {
    getAttempt();
  }, []);

  if (!attempt) {
    return null;
  }

  if (!module) {
    return null;
  }

  return (
    <>
      <PageHeadingBriefinfo
        pagetitle={attempt.book.name}
        briefinfo={"Writing Test Result"}
        color="bg-writing"
      />

      <Container>
        <Row>
          <Col sm={12}>
            <Card className="skeleton-card">
              <Card.Body>
                <div className="writing-questions">
                  {parse(module.sections[0].task)}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            {attempt ? (
              <Card className="skeleton-card">
                <Card.Header>
                  <span className="fw-bold text-black">Your Answer</span>
                </Card.Header>
                <Card.Body>
                  <p className="text-black">{parse(attempt.answers["1"])}</p>
                </Card.Body>
              </Card>
            ) : (
              <SkeletonLoader title={"Your Answer"} />
            )}
          </Col>
          <Col sm={12} md={6}>
            {evaluation ? (
              <Card className="skeleton-card">
                <Card.Header>
                  <span className="fw-bold text-black">Improved Answer</span>
                </Card.Header>
                <Card.Body>
                  <div className="writing-questions text-black">
                    {parse(evaluation["1"].improved_answer)}
                  </div>
                </Card.Body>

                <Card.Footer className="">
                  <p className="text-black fw-bold">
                    What improvements did I made?
                  </p>
                  <p>{parse(evaluation["1"].what_improvements_did_you_made)}</p>
                </Card.Footer>
              </Card>
            ) : (
              <SkeletonLoader title={"Improved Answer"} />
            )}
          </Col>
          {bands_keys.map((bands_key) => (
            <Col sm={12} md={6}>
              {bands ? (
                <Card className="skeleton-card">
                  <Card.Header>
                    <Stack direction="horizontal">
                      <div>
                        <span
                          className="fw-bold text-black"
                          style={{ textTransform: "capitalize" }}
                        >
                          {bands_key.replace(/_/g, " ")}
                        </span>
                      </div>
                      <div className="ms-auto">
                        <Badge style={{ fontSize: 18 }}>
                          {
                            bands["1"][bands_key][
                              "overall_" + bands_key + "_bands"
                            ]
                          }
                        </Badge>
                      </div>
                    </Stack>
                  </Card.Header>
                  <div>
                    <ListGroup className="rounded-0 mb-3">
                      {Object.keys(bands["1"][bands_key]).map((item) => (
                        <ListGroup.Item key={item}>
                          <Stack direction="horizontal">
                            <div>
                              <span
                                className=" text-black"
                                style={{ textTransform: "capitalize" }}
                              >
                                {item.replace(/_/g, " ")}
                              </span>
                            </div>
                            <div className="ms-auto">
                              <Badge bg="reading" style={{ fontSize: 15 }}>
                                {bands["1"][bands_key][item]}
                              </Badge>
                            </div>
                          </Stack>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                </Card>
              ) : (
                <SkeletonLoader title={bands_key} />
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WritingResultPage;
