import React, { useEffect, useState, useContext } from "react";
import { json, useParams } from "react-router-dom";
import { API_URLS } from "../../../utils/config";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import SkeletonLoader from "../../../components/elements/skeleton/SkeletonLoader";
import {
  Accordion,
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
import useAxios from "../../../utils/useAxios";
import { LuFileEdit } from "react-icons/lu";
import LoadingContext from "../../../context/layout/LoadingContext";
import OverallBandsCard from "../../../components/ieltstest/OverallBandsCard";
import EstimatedBandScoreCard from "../../../components/EstimatedBandScoreCard";
import SuggestionListCard from "../../../components/SuggestionListCard";
import FullTestNextModule from "../../../components/ieltstest/FullTestNextModule";
import SectionCard from "../../../components/ieltstest/SectionCard";

const WritingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  const isFirstSection = currentSection
    ? currentSection.id === module.sections[0].id
    : false;
  const isLastSection = currentSection
    ? currentSection.id === module.sections[module.sections.length - 1].id
    : false;
  const [deviceType, setDeviceType] = useState("desktop");

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
    } else {
      getAttempt();
    }
  }

  async function getEvaluation(section_id) {
    const response = await api.post(
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
    getAttempt();
    getModule();
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

  useEffect(() => {
    document.title = "Writing Test Result  | KeenIELTS";
  }, []);

  if (!module || !attempt) {
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
          <Col xl={8} lg={10} md={12} className="mt-3">
            {attempt && attempt.bands > 0 ? (
              <OverallBandsCard
                bands={attempt.bands}
                description={attempt.bands_description}
                color="writing"
              />
            ) : (
              <SkeletonLoader title={"Overall Score"} />
            )}
            <hr className=" my-4" />
          </Col>

          {evaluation ? (
            <>
              <Col xl={8} lg={10} md={12} className="">
                <SectionCard
                  currentSection={currentSection}
                  deviceType={deviceType}
                  isFirstSection={isFirstSection}
                  isLastSection={isLastSection}
                  handleNextSectionButton={handleNextSectionButton}
                  handlePreviousSectionButton={handlePreviousSectionButton}
                />
              </Col>
              <Col xl={8} lg={10} md={12}>
                <Card className="skeleton-card">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <span className="fw-bold text-black">
                          <h3 className="mt-2 fw-bold">Your Answer</h3>
                        </span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="writing-questions table table-responsive">
                          {parse(currentSection.task)}
                        </div>
                        <hr />
                        <h3 className="mt-2 fw-bold">Your Answer</h3>
                        <p className="writing-questions">
                          {attempt &&
                            attempt.answers &&
                            parse(attempt.answers[currentSection.id])}
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card>
              </Col>
              <Col xl={8} lg={10} md={12} className="mt-3">
                <EstimatedBandScoreCard
                  evaluation_keys={evaluation_keys}
                  evaluation={evaluation}
                  currentSection={currentSection}
                />
              </Col>

              <Col xl={8} lg={10} md={12} className="mt-3">
                {evaluation && evaluation[currentSection.id] && (
                  <SuggestionListCard
                    title={"Vocabulary & Word Choice Suggestions"}
                    evaluation={evaluation}
                    currentSection={currentSection}
                    array={
                      evaluation[currentSection.id][
                        "vocabulary_choice_suggestions"
                      ]
                    }
                  />
                )}
              </Col>
              <Col xl={8} lg={10} md={12} className="mt-3">
                <Card>
                  <Card.Header>
                    <h3 className="mt-2 fw-bold">
                      Conclusion & Expert Feedback
                    </h3>
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

              <Col xl={8} lg={10} md={12} className="mt-3">
                <SectionCard
                  currentSection={currentSection}
                  deviceType={deviceType}
                  isFirstSection={isFirstSection}
                  isLastSection={isLastSection}
                  handleNextSectionButton={handleNextSectionButton}
                  handlePreviousSectionButton={handlePreviousSectionButton}
                />
              </Col>

              <Col xl={8} lg={10} md={12} className="my-3">
                <FullTestNextModule attempt={attempt} />
              </Col>
            </>
          ) : (
            <Col xl={8} lg={10} md={12} className="">
              <Card>
                <Card.Header>
                  <h3 className="mt-2 fw-bold">Test Results</h3>
                </Card.Header>
                <Card.Body className="text-center">
                  <LuFileEdit size={60} color="black" />
                  <h2 className="mt-3">Crafting Your Results!</h2>
                  <p style={{ fontSize: "1.1rem" }}>
                    We're meticulously evaluating your answers to provide an
                    accurate score. As we piece together your performance,
                    please enjoy this brief moment of anticipation. Your IELTS
                    proficiency insights are just around the corner!
                  </p>
                </Card.Body>
              </Card>
            </Col>
          )}
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
