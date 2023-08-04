import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import useAxios from "../../utils/useAxios";

import {
  Row,
  Col,
  Container,
  Card,
  Badge,
  Button,
  Accordion,
  Table,
} from "react-bootstrap";

import ListeningSection from "../../components/ieltstest/listening/ListeningSection";
import useScrollDirection from "../../utils/useScrollDirection";
import CountdownTimer from "../../components/elements/CountdownTimer";
import BookInfo from "../../components/ieltstest/listening/BookInfo";
import CustomAudioPlayer from "../../components/elements/audioplayer/CustomAudioPlayer";

const AttemptListeningModulePage = () => {
  const { module_slug, attempt_slug } = useParams();
  const api = useAxios();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const scrollDirection = useScrollDirection();
  const formRef = useRef(null);
  const [currentFormData, setCurrentFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getModule();
  }, [setModule]);

  async function getModule() {
    const response = await api.post(
      "/ieltstest/get_module/listening/" + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      setCurrentSection(response.data.sections[0]);
    }
  }

  const [questionData, setQuestionData] = useState({
    completed_questions: 0,
    total_questions: 0,
  });
  // Log form data every 5 seconds

  function sendAttemptUpdate(attempt_type = "In Progress") {
    const data = {
      answers: currentFormData,
      attempt_type: attempt_type,
    };

    const response = api.post(
      "/ieltstest/update_attempt/listening/" + attempt_slug + "/",
      data
    );
    if (response.status === 200) {
      console.log("Attempt Updated");
    }
  }

  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      // Get the element's position
      const rect = element.getBoundingClientRect();

      // Scroll to the element, minus some offset for spacing
      window.scrollTo({
        top: rect.top + window.pageYOffset - 200,
        behavior: "smooth",
      });
    }
  }

  function getFormData() {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      let data = {};
      let counter = 0;
      let completedQuestions = 0;
      for (let [key, value] of formData.entries()) {
        data[key] = value; // Construct the data object
        counter++;
        if (value !== "") {
          completedQuestions++;
        }
      }

      setCurrentFormData(data); // Update the state
      setQuestionData({
        completed_questions: completedQuestions,
        total_questions: counter,
      });
      return formData;
    }
  }

  useEffect(() => {
    getFormData();
  }, [module]);

  const handleChange = (event) => {
    const formData = getFormData();
  };

  function endTest() {
    getFormData();
    sendAttemptUpdate("Completed");
    navigate(
      `/ieltstest/attempt/listening/${module_slug}/${attempt_slug}/get_result`
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    endTest();
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
          {/* <ReactAudioPlayer
            audio_title={currentSection.section}
            audio_url={currentSection.audio}
            onEndedHandle={onSectionAudioEndedHandle}
          /> */}
          <CustomAudioPlayer
            src={module.audio}
            currentSection={currentSection}
          />
        </Col>
        <Col sm={12} className="bg-white border-top p-0">
          <CountdownTimer
            initialMinutes={0}
            initialSeconds={10}
            questionData={questionData}
            handleTimesUp={endTest}
          />
        </Col>
      </Row>
      <Container className="my-3">
        <Row>
          <Col sm={12} md={8}>
            <Row>
              <Col sm={12} className="my-3">
                <BookInfo module={module} attempt_slug={attempt_slug} />
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

          <Col sm={12} md={4} className="">
            <Row className="sticky-top" style={{ zIndex: 10 }}>
              <Col sm={12} className="my-3">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <span className="text-black fw-bold">Review Answers</span>
                    </Accordion.Header>
                    <Accordion.Body className="p-0 m-0">
                      <Table striped bordered>
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Your Answer</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(currentFormData).map(
                            (item, index) => (
                              <tr key={index}>
                                <td className="fw-bold">{index + 1}</td>
                                <td className="text-black">{item[1]}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </Table>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col sm={12} className="mt-2">
                <Card>
                  <Card.Header>
                    <span className=" fw-bold text-black">
                      Question Pallete
                    </span>
                  </Card.Header>
                  <Card.Body>
                    {Object.entries(currentFormData).map((item, index) => (
                      <Badge
                        style={{ fontSize: "20px" }}
                        key={index}
                        className="m-1"
                        onClick={() => scrollToElement("que-" + (index + 1))}
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
          </Col>
        </Row>
      </Container>
    </form>
  );
};

export default AttemptListeningModulePage;
