import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import useAxios from "../../utils/useAxios";

import {
  Row,
  Col,
  Container,
  Card,
  Badge,
  Button,
  Stack,
} from "react-bootstrap";

import ReactAudioPlayer from "../../components/elements/audioplayer/ReactAudioPlayer";
import ListeningSection from "../../components/ieltstest/listening/ListeningSection";
import useScrollDirection from "../../utils/useScrollDirection";
import CountdownTimer from "../../components/elements/CountdownTimer";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const AttemptListeningModulePage = () => {
  const { module_slug, attempt_slug } = useParams();
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

  const formRef = useRef(null);
  const [currentFormData, setCurrentFormData] = useState({});

  // Log form data every 5 seconds

  function getFormData() {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      let data = {};
      let counter = 1;
      for (let [key, value] of formData.entries()) {
        data[key] = value; // Construct the data object
        counter++;
      }
      setCurrentFormData(data); // Update the state
      return formData;
    }
  }

  useEffect(() => {
    getFormData();
  }, [module]);

  const handleChange = (event) => {
    const formData = getFormData();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let length = 0;
    for (let pair of formData.entries()) {
      length++;
    }
  };

  if (!module) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
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
          <Col sm={12} md={8}>
            <Row>
              <Col sm={12}>
                <Card>
                  <Card.Body>
                    <Stack direction="horizontal">
                      <div className="">
                        <span className=" fw-bold text-black">
                          {module.test.book.name}
                        </span>
                      </div>
                      <div className=" ms-auto">
                        <FiChevronRight className="text-black" size={20} />
                      </div>
                    </Stack>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12}>
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
            </Row>
          </Col>
          <Col sm={12} md={4} className="mt-2">
            <Card>
              <Card.Header>
                <span className=" fw-bold text-black">Question Pallete</span>
              </Card.Header>
              <Card.Body>
                {Object.entries(currentFormData).map((item, index) => (
                  <Badge
                    style={{ fontSize: "20px" }}
                    key={index}
                    className="m-1"
                    bg={`${item[1] === "" ? "warning" : "success"}`}
                  >
                    {index + 1}
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
