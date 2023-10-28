import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/urls";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import SectionCard from "../../../components/ieltstest/SectionCard";
import SkeletonLoader from "../../../components/elements/skeleton/SkeletonLoader";
import CustomAudioPlayer from "../../../components/elements/audioplayer/CustomAudioPlayer";
import LoadingContext from "../../../context/layout/LoadingContext";
import OverallBandsCard from "../../../components/ieltstest/OverallBandsCard";

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
        <Row>
          <Col sm={12} className="mt-3">
            <OverallBandsCard
              bands={attempt.bands}
              description={attempt.bands_description}
              color="speaking"
            />
          </Col>
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

          <Col sm={12} className="mt-3">
            <Card>
              <Card.Body className="p-1">
                <CustomAudioPlayer
                  src={"https://ielts-up.com/listening/11.2.mp3"}
                  start_time={0.0}
                />
              </Card.Body>
              <hr className="m-0" />
              <Card.Body className="text-black" style={{ fontSize: "1.2rem" }}>
                <h2>Nicely Done</h2>
                <ul>
                  <li>
                    You provided relevant answers to most of the questions.
                  </li>
                  <li>
                    Your fluency and pronunciation were generally clear and
                    understandable.
                  </li>
                  <li>
                    You used a variety of sentence structures and vocabulary.
                  </li>
                </ul>
              </Card.Body>
              <hr className="m-0" />
              <Card.Body className="text-black" style={{ fontSize: "1.2rem" }}>
                <h2>Things to Improve</h2>
                <ul>
                  <li>
                    Try to answer the questions more directly and provide more
                    specific examples.
                  </li>
                  <li>
                    Work on your grammar and sentence structure to make your
                    responses more coherent.
                  </li>
                  <li>
                    Expand your vocabulary by using more descriptive words.
                  </li>
                </ul>
              </Card.Body>
              <hr className="m-0" />
              <Card.Body className="text-black" style={{ fontSize: "1.2rem" }}>
                <h2>Coherence Suggestions</h2>
                <ul>
                  <li>
                    Try to organize your thoughts more clearly and use
                    transition words to link your ideas together.
                  </li>
                  <li>
                    Use topic sentences to introduce each new point you want to
                    make.
                  </li>
                  <li>
                    Practice speaking more fluently and naturally to improve
                    your overall coherence.
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SpeakingResultPage;
