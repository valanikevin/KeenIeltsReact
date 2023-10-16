import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/urls";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import SectionCard from "../../../components/ieltstest/SectionCard";
import SkeletonLoader from "../../../components/elements/skeleton/SkeletonLoader";
import CustomAudioPlayer from "../../../components/elements/audioplayer/CustomAudioPlayer";

const SpeakingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [attempt, setAttempt] = useState(null);
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [deviceType, setDeviceType] = useState("desktop");
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
        briefinfo={"Speaking Test Result"}
        color="bg-speaking"
      />

      <Container className="mb-3">
        <Row>
          <Col sm={12} className="mt-3">
            <Card>
              <Card.Header>
                <span className="fw-bold text-black">Overall Test Score</span>
              </Card.Header>
              <Card.Body>
                <Badge>
                  <h3 className="display-4 text-white pt-2">7.5 Bands</h3>
                </Badge>
                <p className="mt-3">
                  You have a fully operational command of the language with only
                  occasional unsystematic inaccuracies and inappropriate usage.
                  You may misunderstand some things in unfamiliar situations.
                  You handle complex detailed argumentation well.
                </p>
              </Card.Body>
            </Card>
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
              <Card.Body>
                <CustomAudioPlayer
                  src={"https://ielts-up.com/listening/11.2.mp3"}
                  start_time={0.0}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SpeakingResultPage;
