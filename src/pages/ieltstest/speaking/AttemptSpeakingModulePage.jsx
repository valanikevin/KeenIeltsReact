import React, { useState, useEffect } from "react";
import { API_URLS } from "../../../utils/config";
import { useNavigate, useParams } from "react-router-dom";
import useAxios, { baseURL } from "../../../utils/useAxios";
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
import SpeakingLoader from "../../../components/ieltstest/speaking/SpeakingLoader";

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
  const [showLoader, setShowLoader] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const handleShowSubmitModal = () => setShowSubmitModal(true);
  const handleClosSubmiteModal = () => setShowSubmitModal(false);
  const navigate = useNavigate();

  // Effects

  useEffect(() => {
    getModule();
  }, []);

  useEffect(() => {
    if (isEndTest) {
      if (userAllResponse["3"]["audio"]) {
        handleConfirmEndTest(userAllResponse);
      }
    }
  }, [isEndTest, userAllResponse]);

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

  async function sendAttemptUpdate(
    attempt_type = "In Progress",
    user_responses
  ) {
    // Create a new FormData instance for text-based data
    let formData = new FormData();

    // Append the attempt_type
    formData.append("attempt_type", attempt_type);

    // Loop through user_responses
    for (const key in user_responses) {
      const response = user_responses[key];

      // Convert the ArrayBuffer audio data to a Blob and add it to FormData
      const audioBuffer = response.audio;
      const blob = new Blob([audioBuffer], { type: "audio/wav" });
      formData.append(`${key}`, blob);

      // Loop through the rest of the keys in each response object
      for (const nestedKey in response) {
        if (nestedKey !== "audio") {
          // Skip 'audio' as it's already added
          formData.append(
            `${key},${nestedKey}`,
            JSON.stringify(response[nestedKey])
          );
        }
      }
    }

    try {
      const response = await api.post(
        `/ieltstest/update_attempt/speaking/${attempt_slug}/`,
        formData
      );

      if (response.status === 200) {
        console.log("Attempt updated successfully");
        return true; // Indicate success
      } else {
        console.log("Failed to update attempt", response);
        return false; // Indicate failure
      }
    } catch (error) {
      console.error("There was an error sending the request", error);
      return false; // Indicate failure
    }
  }

  async function blobToBytes(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(blob);
    });
  }

  async function replaceAudioBlobWithBytes(user_responses) {
    console.log("Inside replace audio");

    for (const key in user_responses) {
      const audioBlobUrl = user_responses[key].audio;

      const blob = await fetch(audioBlobUrl).then((r) => r.blob());

      const audioBytes = await blobToBytes(blob);

      // This will replace the "audio" key with the new value, while keeping the rest of the properties the same.
      user_responses[key] = {
        ...user_responses[key],
        audio: audioBytes,
      };
    }
    return user_responses;
  }

  async function handleConfirmEndTest(user_responses) {
    console.log("Handle Confirm End Test");
    const updatedUserResponses = await replaceAudioBlobWithBytes(
      user_responses
    );

    setShowLoader(true);

    const isUpdateSuccessful = await sendAttemptUpdate(
      "Completed",
      updatedUserResponses
    );

    if (isUpdateSuccessful) {
      setShowLoader(false);
      navigate(
        `/ieltstest/attempt/speaking/${module_slug}/${attempt_slug}/get_result`
      );
    } else {
      console.error("Failed to update the attempt");
      // Handle the error appropriately, perhaps show an error message to the user
    }

    handleClosSubmiteModal();
  }

  // CSS
  const containerStyle = {
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "calc(100vh - 50px)", // Assuming 50px for NavBar and 50px for Footer
    overflow: "auto", // Prevent scrollbars on the main layout
  };

  useEffect(() => {
    document.title = "Speaking Test | KeenIELTS";
  }, []);

  if (!module) {
    return null;
  }

  if (showLoader) {
    return <SpeakingLoader />;
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
        handleConfirmEndTest={handleConfirmEndTest}
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
