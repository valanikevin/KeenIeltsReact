import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
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
  Table,
} from "react-bootstrap";
import parse from "html-react-parser";
import "../../../components/ieltstest/writing/WritingModule.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SectionCard from "../../../components/ieltstest/SectionCard";
import useAxios from "../../../utils/useAxios";

const WritingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [evaluation, setEvaluation] = useState(null);

  const isFirstSection = currentSection
    ? currentSection.id === module.sections[0].id
    : false;
  const isLastSection = currentSection
    ? currentSection.id === module.sections[module.sections.length - 1].id
    : false;
  const [deviceType, setDeviceType] = useState("desktop");

  const api1 = useAxiosWithoutLoader();
  const api = useAxios();

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

  async function evaluateSections(sections, index) {
    if (index < sections.length) {
      await getEvaluation(sections[index].id);
      evaluateSections(sections, index + 1); // Move to the next section
    }
  }

  async function getEvaluation(section_id) {
    const response = await api1.post(
      "/ieltstest/get_writing_evaluation/" +
        attempt_slug +
        "/" +
        section_id +
        "/"
    );

    if (response.status === 200) {
      setEvaluation((prevEvaluation) => ({
        ...prevEvaluation,
        [section_id]: response.data,
      }));
    } else {
      console.error("Unable to fetch attempt at WritingResultPage.jsx");
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
    getModule();
  }, []);

  useEffect(() => {
    getAttempt();
  }, []);

  useEffect(() => {
    if (module && module.sections) {
      evaluateSections(module.sections, 0); // Start with the first section
    }
  }, [module]);

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

  useEffect(() => {
    if (currentSection) {
      window.scrollTo(0, 0);
    }
  }, [currentSection]);

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
        <Row className="justify-content-center">
          <Col sm={12} md={8} className="mt-3">
            <SectionCard
              currentSection={currentSection}
              deviceType={deviceType}
              isFirstSection={isFirstSection}
              isLastSection={isLastSection}
              handleNextSectionButton={handleNextSectionButton}
              handlePreviousSectionButton={handlePreviousSectionButton}
            />
          </Col>
          <Col sm={12} md={8}>
            <Card className="skeleton-card">
              <Card.Body>
                <div className="writing-questions">
                  {parse(currentSection.task)}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={8} className="mt-3">
            <Card className="h-100">
              <Card.Header>
                <h3 className="mt-2 fw-bold">Estimated Band Scores</h3>
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Bands</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {evaluation_keys.map((item) => (
                      <tr>
                        <td>
                          <h3 className="m-0">{item.short}: </h3>
                          {item.name}
                        </td>
                        <td>
                          <h3>
                            {evaluation &&
                              evaluation[currentSection.id] &&
                              evaluation[currentSection.id][item.key]}
                          </h3>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={8} className="mt-3">
            <Card>
              <Card.Header>
                <h3 className="mt-2 fw-bold">
                  Vocabulary & Word Choice Suggestions
                </h3>
              </Card.Header>
              <Card.Body>
                <Table bordered hover responsive>
                  <tbody className="">
                    {evaluation &&
                      evaluation[currentSection.id][
                        "vocabulary_choice_suggestions"
                      ].map((suggestion) => (
                        <tr>
                          <td>
                            <p style={{ fontSize: "1.1rem" }}>{suggestion}</p>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={8} className="mt-3">
            <Card>
              <Card.Header>
                <h3 className="mt-2 fw-bold">Conclusion & Expert Feedback</h3>
              </Card.Header>
              <Card.Body>
                <p style={{ fontSize: "1.1rem" }}>
                  {evaluation &&
                    evaluation[currentSection.id][
                      "overall_personalized_feedback_suggestions"
                    ]}
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={8} className="mt-3">
            <SectionCard
              currentSection={currentSection}
              deviceType={deviceType}
              isFirstSection={isFirstSection}
              isLastSection={isLastSection}
              handleNextSectionButton={handleNextSectionButton}
              handlePreviousSectionButton={handlePreviousSectionButton}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const evaluation_keys = [
  {
    name: "Task Achievement",
    short: "TA",
    key: "task_achievement_band_score",
  },
  {
    name: "Coherence and Cohesion",
    short: "CC",
    key: "coherence_and_cohesion_band_score",
  },
  {
    name: "Lexical Resource",
    short: "LR",
    key: "lexical_resource_band_score",
  },
  {
    name: "Grammatical Range Accuracy",
    short: "GRA",
    key: "grammatical_range_accuracy_band_score",
  },
  {
    name: null,
    short: "Overall",
    key: "overall_band_score",
  },
];

export default WritingResultPage;
