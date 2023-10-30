import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/urls";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import {
  Accordion,
  Badge,
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

const SpeakingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [attempt, setAttempt] = useState(null);
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [deviceType, setDeviceType] = useState("desktop");
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);
  const [evaluation, setEvaluation] = useState(null);

  const isFirstSection = currentSection
    ? currentSection.id === module.sections[0].id
    : false;
  const isLastSection = currentSection
    ? currentSection.id === module.sections[module.sections.length - 1].id
    : false;
  const api = useAxios();

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
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  useEffect(() => {
    getAttempt();
    getModule();
  }, [loadingBar]);

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

  if (!module || !attempt) {
    return null;
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
            <Accordion defaultActiveKey={0}>
              {module.sections.map((section, index) => (
                <Accordion.Item eventKey={index}>
                  <Accordion.Header>
                    <h3 className="mt-2 fw-bold">Section 1</h3>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <CustomAudioPlayer
                      src={"https://ielts-up.com/listening/10.3.mp3"}
                      start_time={"0.0"}
                    />
                    <hr />
                    <div className="px-3">
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
                                <FiPlayCircle size={20} />
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
