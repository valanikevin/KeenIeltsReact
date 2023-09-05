import React, { useState, useEffect } from "react";
import { API_URLS } from "../../../utils/urls";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import SplitPane from "react-split-pane";
import "./ReactSplitPane.css";
import { MiniNavBar } from "../../../components/ieltstest/MiniNavBar";
import {
  Container,
  Row,
  Col,
  Modal,
  Card,
  Button,
  Alert,
} from "react-bootstrap";
import SpeakingFooter from "../../../components/ieltstest/speaking/SpeakingFooter";
import BookInfo from "../../../components/ieltstest/listening/BookInfo";
import Waves from "../../../components/ieltstest/speaking/Waves";
const AttemptSpeakingModulePage = () => {
  const [deviceType, setDeviceType] = useState("desktop");
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const api = useAxios();
  const [showTestInfoModal, setShowTestInfoModal] = useState(false);
  const handleCloseTestInfoModal = () => setShowTestInfoModal(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [userAllResponse, setUserAllResponse] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isEndTest, setIsEndTest] = useState(null);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const handleShowSubmitModal = () => setShowSubmitModal(true);
  const handleClosSubmiteModal = () => setShowSubmitModal(false);

  // Effects
  useEffect(() => {
    getModule();
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

  // Functions
  async function getModule() {
    const response = await api.post(
      API_URLS.getSpeakingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      const current_section = response.data.sections[0];
      setCurrentSection(current_section);
      setCurrentQuestion(current_section.questions[0]);
    }
  }

  function updateCurrentSection(id) {
    const newSection = module.sections.find((section) => section.id === id);
    setCurrentSection(newSection);
  }

  function sendAttemptUpdate(attempt_type = "In Progress") {
    const data = {
      answers: userAllResponse,
      attempt_type: attempt_type,
    };

    const response = api.post(
      "/ieltstest/update_attempt/speaking/" + attempt_slug + "/",
      data
    );

    if (response.status === 200) {
      console.log("Attempt Updated");
    }
  }

  function handleConfirmEndTest() {
    getFormDataLocal();
    sendAttemptUpdate("Completed");
    navigate(
      `/ieltstest/attempt/speaking/${module_slug}/${attempt_slug}/get_result`
    );
    handleClosSubmiteModal();
  }

  // CSS

  const paneStyle = {
    overflow: "auto",
  };

  const containerStyle = {
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "calc(100vh - 50px)", // Assuming 50px for NavBar and 50px for Footer
    overflow: "auto", // Prevent scrollbars on the main layout
  };

  if (!module) {
    return null;
  }

  return (
    <>
      <MiniNavBar
        module={module}
        currentSection={currentSection}
        updateCurrentSection={updateCurrentSection}
        setShowTestInfoModal={setShowTestInfoModal}
        showSectionList={false}
      />

      <Container style={containerStyle} className="hide-scrollbar">
        <Row
          style={{ height: "100%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Col sm={8}>
            <div style={{ width: "100%" }}>
              <Card className="my-3">
                <Card.Header>
                  <span className="text-black fw-bold">
                    {currentSection.section} :{" "}
                    {currentSection.question_type.name}
                  </span>
                </Card.Header>
                <Card.Body>
                  <p className="fw-bold" style={{ fontSize: "1.7rem" }}>
                    {currentQuestion.question}
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      <SpeakingFooter
        deviceType={deviceType}
        isSpeaking={isSpeaking}
        setIsSpeaking={setIsSpeaking}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        setIsEndTest={setIsEndTest}
        module={module}
        userAllResponse={userAllResponse}
        setUserAllResponse={setUserAllResponse}
        handleShowSubmitModal={handleShowSubmitModal}
      />

      <Modal
        show={showTestInfoModal}
        onHide={handleCloseTestInfoModal}
        centered
        className="p-0"
      >
        <Modal.Header closeButton>
          <Modal.Title>Test Info</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <BookInfo module={module} attempt_slug={attempt_slug} />
        </Modal.Body>
        <div className="modal-footer py-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleCloseTestInfoModal}
          >
            Close
          </button>
        </div>
      </Modal>

      <Modal show={showSubmitModal} onHide={handleClosSubmiteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>End Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to end the test?</Modal.Body>
        <Modal.Footer className="p-2">
          <Button variant="outline-primary" onClick={handleClosSubmiteModal}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirmEndTest}>
            Yes, end test
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AttemptSpeakingModulePage;
