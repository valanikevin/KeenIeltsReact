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

  const [audioURL, setAudioURL] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (mediaRecorder) {
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const dataArray = new Uint8Array(analyser.frequencyBinCount);

      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        const checkAudio = () => {
          analyser.getByteFrequencyData(dataArray);
          const volume = dataArray.reduce((a, b) => a + b) / dataArray.length;

          if (volume > 10) {
            setIsSpeaking(true);
          } else {
            setIsSpeaking(false);
          }
          requestAnimationFrame(checkAudio);
        };
        checkAudio();
      });
    }
  }, [mediaRecorder]);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const newMediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(newMediaRecorder);

        newMediaRecorder.ondataavailable = (event) => {
          const audioBlob = new Blob([event.data], { type: "audio/wav" });
          setAudioURL(URL.createObjectURL(audioBlob));
        };

        newMediaRecorder.start();
      })
      .catch((err) => {
        console.error("Could not get media:", err);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

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
      setCurrentSection(response.data.sections[0]);
    }
  }

  function updateCurrentSection(id) {
    const newSection = module.sections.find((section) => section.id === id);
    setCurrentSection(newSection);
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
                    {currentSection.questions[0].question}
                  </p>

                  <div className="App">
                    <Card style={{ margin: "20px" }}>
                      <Card.Header>Simple Audio Recorder</Card.Header>
                      <Card.Body>
                        <Button variant="primary" onClick={startRecording}>
                          Start Recording
                        </Button>{" "}
                        <Button variant="secondary" onClick={stopRecording}>
                          Stop Recording
                        </Button>
                        <Waves isSpeaking={isSpeaking} />
                        {isSpeaking ? (
                          <Alert variant="success">Speaking...</Alert>
                        ) : (
                          <Alert variant="danger">Silent</Alert>
                        )}
                      </Card.Body>
                      <Card.Footer>
                        <h2>Preview:</h2>
                        {audioURL && <audio controls src={audioURL} />}
                      </Card.Footer>
                    </Card>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      <SpeakingFooter deviceType={deviceType} />

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
    </>
  );
};

export default AttemptSpeakingModulePage;
