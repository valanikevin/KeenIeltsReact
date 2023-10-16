import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/urls";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import { Card, Col, Container, Row } from "react-bootstrap";
import SectionCard from "../../../components/ieltstest/SectionCard";

const SpeakingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [attempt, setAttempt] = useState(null);
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
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
        briefinfo={"Speaking Test Result"}
        color="bg-speaking"
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
        </Row>
      </Container>
    </>
  );
};

export default SpeakingResultPage;
