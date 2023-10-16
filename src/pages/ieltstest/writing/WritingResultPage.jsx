import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosWithoutLoader from "../../../utils/useAxiosWithoutLoader";
import { API_URLS } from "../../../utils/urls";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import SkeletonLoader from "../../../components/elements/skeleton/SkeletonLoader";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Stack,
} from "react-bootstrap";
import parse from "html-react-parser";
import "../../../components/ieltstest/writing/WritingModule.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SectionCard from "../../../components/ieltstest/SectionCard";

const WritingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [bands, setBands] = useState(null);
  const [module, setModule] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const isFirstSection = currentSection
    ? currentSection.id === module.sections[0].id
    : false;
  const isLastSection = currentSection
    ? currentSection.id === module.sections[module.sections.length - 1].id
    : false;
  const [deviceType, setDeviceType] = useState("desktop");

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
      setCurrentSection(response.data.sections[0]);
    }
  }

  function handlePreviousSectionButton() {
    let current_section_id = currentSection.id;
    let new_section_id = current_section_id - 1;
    const newSection = module.sections.find(
      (section) => section.id === new_section_id
    );
    if (newSection) {
      setCurrentSection(newSection);
    } else {
      const lastElement = module.sections[module.sections.length - 1];
      setCurrentSection(lastElement);
    }
  }

  function handleNextSectionButton() {
    let current_section_id = currentSection.id;
    let new_section_id = current_section_id + 1;
    const newSection = module.sections.find(
      (section) => section.id === new_section_id
    );
    if (newSection) {
      setCurrentSection(newSection);
    } else {
      const lastElement = module.sections[0];
      setCurrentSection(lastElement);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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

      <Container className="mb-3">
        <Row>
          <Col sm={12} className="mt-3">
            <SectionCard
              currentSection={currentSection}
              deviceType={deviceType}
              isFirstSection={isFirstSection}
              isLastSection={isLastSection}
              handleNextSectionButton={handleNextSectionButton}
              handlePreviousSectionButton={handlePreviousSectionButton}
            />
          </Col>
          <Col sm={12}>
            <Card className="skeleton-card">
              <Card.Body>
                <div className="writing-questions">
                  {parse(currentSection.task)}
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
                  <p className="text-black">
                    {parse(attempt.answers[currentSection.id])}
                  </p>
                </Card.Body>
              </Card>
            ) : (
              <SkeletonLoader title={"Your Answer"} />
            )}
            {bands ? (
              <Card className="skeleton-card">
                <Card.Header>
                  <span className="fw-bold text-black">Overall Score</span>
                </Card.Header>
                <Card.Body>
                  <p className="fw-bold text-black">
                    <Badge style={{ fontSize: "20px" }}>
                      {bands[currentSection.id]["overall_score"]["bands"]}
                    </Badge>
                  </p>
                  <p>
                    {bands[currentSection.id]["overall_score"]["description"]}
                  </p>
                </Card.Body>
              </Card>
            ) : (
              <SkeletonLoader title={"Overall Score"} />
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
                    {parse(evaluation[currentSection.id].improved_answer)}
                  </div>
                </Card.Body>

                <Card.Footer className="">
                  <p className="text-black fw-bold">
                    What improvements did I made?
                  </p>
                  <p>
                    {parse(evaluation[currentSection.id].improvements_made)}
                  </p>
                </Card.Footer>
              </Card>
            ) : (
              <SkeletonLoader title={"Improved Answer"} />
            )}
          </Col>
          {bands_keys.map((bands_key) => (
            <Col sm={12} md={6} key={bands_key}>
              {bands &&
              bands[currentSection.id] &&
              bands[currentSection.id][bands_key] ? (
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
                      {Object.keys(bands[currentSection.id][bands_key]).map(
                        (item) => (
                          <ListGroup.Item key={item}>
                            <Stack direction="horizontal">
                              <div>
                                <span
                                  className="text-black"
                                  style={{ textTransform: "capitalize" }}
                                >
                                  {item.replace(/_/g, " ")}
                                </span>
                              </div>
                              <div className="ms-auto">
                                <Badge bg="dark" style={{ fontSize: 15 }}>
                                  {bands[currentSection.id][bands_key][item]}
                                </Badge>
                              </div>
                            </Stack>
                          </ListGroup.Item>
                        )
                      )}
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
