import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../utils/useAxios";

import { Row, Col, Container, Card } from "react-bootstrap";

import ReactAudioPlayer from "../../components/elements/audioplayer/ReactAudioPlayer";
import ListeningSection from "../../components/ieltstest/listening/ListeningSection";

const AttemptListeningModulePage = () => {
  const { module_slug } = useParams();
  const api = useAxios();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    getModule();
  }, [setModule]);

  async function getModule() {
    const response = await api.options(
      "/ieltstest/get_module/listening/" + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      setCurrentSection(response.data.sections[0]);
    }
  }

  if (!module) {
    return null;
  }

  function onStartAttempt() {}

  return (
    <>
      <Row className="sticky-top border-top justify-content-center">
        <Col>
          <ReactAudioPlayer
            audio_title={currentSection.section}
            audio_url={currentSection.audio}
          />
        </Col>
      </Row>
      <Container className="my-3">
        <Row>
          <Col sm={8}>
            <Row>
              {module.sections.length > 0 &&
                module.sections.map((section) => (
                  <ListeningSection
                    key={section.id}
                    section={section}
                    setCurrentSection={setCurrentSection}
                  />
                ))}
            </Row>
          </Col>
          <Col sm={4} className="mt-2">
            <Card>
              <Card.Header>
                <span className=" fw-bold text-black">Question Pallete</span>
              </Card.Header>
              <Card.Body>Valani</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AttemptListeningModulePage;
