import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../../utils/useAxios";

import { Row, Col, Container, Card, Badge, Button } from "react-bootstrap";

import ReactAudioPlayer from "../../components/elements/audioplayer/ReactAudioPlayer";
import ListeningSection from "../../components/ieltstest/listening/ListeningSection";
import useScrollDirection from "../../utils/useScrollDirection";
import CountdownTimer from "../../components/elements/CountdownTimer";

const AttemptListeningModulePage = () => {
  const { module_slug } = useParams();
  const api = useAxios();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const scrollDirection = useScrollDirection();

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

  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2,
  ];

  function onStartAttempt() {}
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  if (!module) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Row
        className={`${
          scrollDirection === "up" ? "sticky-top" : ""
        } mx-0 border-top border-bottom`}
      >
        <Col sm={12} className="p-0 bg-white">
          <ReactAudioPlayer
            audio_title={currentSection.section}
            audio_url={currentSection.audio}
          />
        </Col>
        <Col sm={12} className="bg-white border-top p-0">
          <CountdownTimer initialMinutes={60} initialSeconds={0} />
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
                    handleChange={handleChange}
                  />
                ))}
            </Row>
          </Col>
          <Col sm={4} className="mt-2">
            <Card>
              <Card.Header>
                <span className=" fw-bold text-black">Question Pallete</span>
              </Card.Header>
              <Card.Body>
                {items.map((item, index) => (
                  <Badge
                    style={{ fontSize: "20px" }}
                    key={index}
                    className="m-1"
                    bg={`${index > 6 ? "warning" : "success"}`}
                  >
                    {index}
                  </Badge>
                ))}
              </Card.Body>
              <Card.Footer>
                <Button type="submit">Submit Answers</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default AttemptListeningModulePage;
