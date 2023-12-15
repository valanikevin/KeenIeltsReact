import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/config";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import SectionCard from "../../../components/ieltstest/SectionCard";
import SkeletonLoader from "../../../components/elements/skeleton/SkeletonLoader";
import CustomAudioPlayer from "../../../components/elements/audioplayer/CustomAudioPlayer";
import LoadingContext from "../../../context/layout/LoadingContext";
import OverallBandsCard from "../../../components/ieltstest/OverallBandsCard";
import SuggestionListCard from "../../../components/SuggestionListCard";
import EstimatedBandScoreCard from "../../../components/EstimatedBandScoreCard";
import { FiPlayCircle } from "react-icons/fi";
import SpeakingLoader from "../../../components/ieltstest/speaking/SpeakingLoader";
import FullTestNextModule from "../../../components/ieltstest/FullTestNextModule";
import StartPracticeTestCard from "../../../components/ieltstest/StartPracticeTestCard";
import WhatsNextCard from "../../../components/ieltstest/WhatsNextCard";
import CommentsCard from "../../../components/CommentsCard";

const module_type = "speaking";

const SpeakingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [attempt, setAttempt] = useState(null);
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [deviceType, setDeviceType] = useState("desktop");
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);
  const [evaluation, setEvaluation] = useState(null);
  const [currentAudioTime, setCurrentAudioTime] = useState(0.0);

  const isFirstSection = currentSection
    ? currentSection.id === module.sections[0].id
    : false;
  const isLastSection = currentSection
    ? currentSection.id === module.sections[module.sections.length - 1].id
    : false;
  const api = useAxios();

  async function getAttempt() {
    const response = await api.post(
      API_URLS.getSpeakingAttempt + attempt_slug + "/"
    );
    if (response.status === 200) {
      setAttempt(response.data);
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  async function getModule() {
    const response = await api.post(
      API_URLS.getSpeakingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      setCurrentSection(response.data.sections[0]);
    }
  }

  async function getEvaluation() {
    const response = await api.post(
      "/ieltstest/get_speaking_evaluation/" + attempt_slug + "/"
    );
    if (response.status === 200) {
      setEvaluation(response.data);
      getAttempt();
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  useEffect(() => {
    getAttempt();
    getModule();
  }, []);

  useEffect(() => {
    getEvaluation();
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

  useEffect(() => {
    document.title = "Speaking Test Result  | KeenIELTS";
  }, []);

  if (!module || !attempt || !evaluation) {
    return <SpeakingLoader />; // Replace with your preferred loading component
  }

  return (
    <>
      <PageHeadingBriefinfo
        pagetitle={attempt.book.name}
        briefinfo={"Speaking Test Result"}
        color="bg-speaking"
      />

      <Container className="mb-3">
        <Row className="justify-content-center">
          <Col xl={8} lg={10} md={12} className="mt-3">
            <OverallBandsCard
              bands={attempt.bands}
              description={attempt.bands_description}
              color="speaking"
            />
          </Col>

          <Col xl={8} lg={10} md={12} className="mt-3">
            <EstimatedBandScoreCard
              evaluation_keys={evaluation_keys}
              evaluation={evaluation}
            />
          </Col>

          <Col xl={8} lg={10} md={12} className="mt-3">
            <SuggestionListCard
              title={"Test Suggestions"}
              evaluation={evaluation}
              currentSection={currentSection}
              array={evaluation.grammar_vocabulary_fluency_accuracy_suggestions}
            />
          </Col>
          <Col xl={8} lg={10} md={12} className="mt-3">
            <Card>
              <Card.Header>
                <h3 className="mt-2 fw-bold">Conclusion & Expert Feedback</h3>
              </Card.Header>
              <Card.Body>
                <p style={{ fontSize: "1.1rem" }}>
                  {evaluation &&
                    evaluation["overall_personalized_feedback_suggestions"]}
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xl={8} lg={10} md={12} className="mt-3">
            <Card>
              <Card.Header>
                {" "}
                <h3 className="mt-2 fw-bold">Your Responses</h3>
              </Card.Header>
              <div className="mt-3">
                <CustomAudioPlayer
                  src={attempt.merged_audio}
                  start_time={currentAudioTime}
                />
              </div>
              <hr />
              <Card.Body>
                <Accordion>
                  {module.sections.map((section, index) => (
                    <Accordion.Item eventKey={index} key={index}>
                      <Accordion.Header>
                        <h4 className="mt-2 fw-bold">
                          {section.section} Questions
                        </h4>
                      </Accordion.Header>
                      <Accordion.Body className="">
                        <div className="">
                          <Table bordered striped responsive>
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Question Asked</th>
                                <th scope="col">Play</th>
                              </tr>
                            </thead>
                            <tbody>
                              {section.questions.map((question, index) => (
                                <tr key={index}>
                                  <th scope="row">{index + 1}</th>
                                  <td>{question.question}</td>
                                  <td>
                                    <FiPlayCircle
                                      size={20}
                                      onClick={() => {
                                        setCurrentAudioTime(
                                          attempt.merged_timestamps[question.id]
                                        );
                                      }}
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Card.Body>
            </Card>
          </Col>

          {attempt.full_test_next_attempt && (
            <Col xl={8} lg={10} md={12} className="my-3">
              <FullTestNextModule attempt={attempt} />
            </Col>
          )}

          <Col xl={8} lg={10} md={12} className="my-3">
            <WhatsNextCard />
          </Col>

          <Col xl={8} lg={10} md={12} className="mb-3">
            <StartPracticeTestCard />
          </Col>

          <Col xl={8} lg={10} md={12} className="mb-3">
            <CommentsCard unique_id={`${module_type}-${module_slug}`} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

const evaluation_keys = [
  {
    name: "Fluency and Coherence",
    short: "FC",
    key: "fluency_and_coherence_bands",
  },
  {
    name: "Grammatical Range Accuracy",
    short: "GRA",
    key: "grammatical_range_and_accuracy_bands",
  },
  {
    name: "Lexical Resource",
    short: "LR",
    key: "lexical_resource_bands",
  },
  {
    name: "Pronunciation",
    short: "PR",
    key: "pronunciation_bands",
  },
  // {
  //   name: null,
  //   short: "Overall",
  //   key: "overall_band_score",
  // },
];

export default SpeakingResultPage;
