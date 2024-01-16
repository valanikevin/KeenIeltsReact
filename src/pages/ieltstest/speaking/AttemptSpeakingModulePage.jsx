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
import parse from "html-react-parser";

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
  const [testStarted, setIsTestStarted] = useState(false);
  const [micAccessError, setMicAccessError] = useState(null);

  // Effects

  useEffect(() => {
    getModule();
  }, []);

  useEffect(() => {
    if (module) {
      console.log("isEndTest", isEndTest);
      console.log("userAllResponse", userAllResponse);
      const last_section = module.sections[module.sections.length - 1];
      if (isEndTest) {
        if (
          userAllResponse[last_section["id"]] &&
          userAllResponse[last_section["id"]]["audio"]
        ) {
          handleConfirmEndTest(userAllResponse);
        }
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
      if (key === "merged_audio") {
        console.log("Merged Audio", user_responses[key]);
        const audioBuffer = user_responses[key];
        const blob = new Blob([audioBuffer], { type: "audio/mp3" });
        formData.append(key, blob);
      } else if (key === "merged_audio_duration") {
        formData.append(key, user_responses[key]);
      } else {
        const response = user_responses[key];

        // Convert the ArrayBuffer audio data to a Blob and add it to FormData
        const audioBuffer = response.audio;
        const blob = new Blob([audioBuffer], { type: "audio/mp3" });
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

  async function getAudioDuration(blob) {
    return new Promise((resolve, reject) => {
      let audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      let reader = new FileReader();

      reader.onloadend = function () {
        audioContext.decodeAudioData(
          reader.result,
          function (buffer) {
            resolve(buffer.duration);
          },
          reject
        );
      };

      reader.onerror = reject;
      reader.readAsArrayBuffer(blob);
    });
  }

  async function mergeAudioBlobWithBytes(user_responses) {
    let merge_audio_bytes = new Uint8Array();
    let merged_audio_duration = "";
    for (const key in user_responses) {
      if (user_responses[key].audio) {
        const audioBlobUrl = user_responses[key].audio;
        const blob = await fetch(audioBlobUrl).then((r) => r.blob());
        const seconds = await getAudioDuration(blob);
        const audioBytes = new Uint8Array(await blobToBytes(blob));

        // Combine the current bytes with the merged bytes
        let combined = new Uint8Array(
          merge_audio_bytes.length + audioBytes.length
        );
        combined.set(merge_audio_bytes);
        combined.set(audioBytes, merge_audio_bytes.length);

        // Update the merged bytes
        merge_audio_bytes = combined;
        merged_audio_duration += key + ":" + seconds + ";";
      }
    }
    console.log("merged_audio_duration", merged_audio_duration);
    // Create a Blob from the merged bytes
    const mergedAudioBlob = new Blob([merge_audio_bytes], {
      type: "audio/mp3",
    });

    const mergedAudioUrl = URL.createObjectURL(mergedAudioBlob);
    const blob1 = await fetch(mergedAudioUrl).then((r) => r.blob());
    const mergeAudioBytes = await blobToBytes(blob1);

    // Store the Blob directly
    user_responses = {
      ...user_responses,
      merged_audio: mergeAudioBytes,
      merged_audio_duration: merged_audio_duration,
      // Store the Blob itself
    };
    return user_responses;
  }

  async function replaceAudioBlobWithBytes(user_responses) {
    console.log("Inside replace audio");

    for (const key in user_responses) {
      if (key !== "merged_audio" && key !== "merged_audio_duration") {
        const audioBlobUrl = user_responses[key].audio;

        const blob = await fetch(audioBlobUrl).then((r) => r.blob());

        const audioBytes = await blobToBytes(blob);

        // This will replace the "audio" key with the new value, while keeping the rest of the properties the same.
        user_responses[key] = {
          ...user_responses[key],
          audio: audioBytes,
        };
      }
    }
    return user_responses;
  }

  async function handleConfirmEndTest(user_responses) {
    console.log("Handle Confirm End Test");
    setShowLoader(true);
    const updatedUserResponsesMergedAudio = await mergeAudioBlobWithBytes(
      user_responses
    );

    const updatedUserResponses = await replaceAudioBlobWithBytes(
      updatedUserResponsesMergedAudio
    );

    const isUpdateSuccessful = await sendAttemptUpdate(
      "Completed",
      updatedUserResponses
    );

    console.log("isUpdateSuccessful", isUpdateSuccessful);
    if (isUpdateSuccessful) {
      window.location.href = `/ieltstest/attempt/speaking/${module_slug}/${attempt_slug}/completed`;
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
      <script src="https://unpkg.com/audiobuffer-to-wav"></script>

      <MiniNavBar
        module={module}
        currentSection={currentSection}
        updateCurrentSection={updateCurrentSection}
        setShowTestInfoModal={setShowTestInfoModal}
        showSectionList={false}
      />

      <Container style={containerStyle} className="hide-scrollbar">
        <Row
          style={{ height: "80%" }}
          className="d-flex align-items-center justify-content-center"
        >
          {testStarted ? (
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
                    <p className="fw-bold" style={{ fontSize: "1.4rem" }}>
                      {currentQuestion.question}
                    </p>
                    {currentQuestion.help_text && (
                      <p>{parse(currentQuestion.help_text)}</p>
                    )}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ) : micAccessError ? (
            <Col sm={8}>
              <div style={{ width: "100%" }}>
                <Card className="my-3">
                  <Card.Header>
                    <span className="text-black fw-bold">
                      Microphone Access Needed
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <p className="fw-bold" style={{ fontSize: "16px" }}>
                      We noticed an issue accessing your microphone. For the
                      speaking test, please ensure microphone access is granted.
                    </p>
                    <p className="" style={{ fontSize: "16px" }}>
                      <ul>
                        <li>
                          Check your browser's permissions and confirm that your
                          microphone is not in use by another application.
                        </li>
                        <li>
                          Click on the 'Start Test' button again. When prompted,
                          select to allow microphone access.
                        </li>
                        <li>
                          If the issue persists, consider restarting your
                          browser or switching to a different one.
                        </li>
                        <li>
                          Your progress and success in the speaking test matter
                          to us. We're here to help every step of the way!
                        </li>
                      </ul>
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ) : (
            <Col sm={8}>
              <div style={{ width: "100%" }}>
                <Card className="my-3">
                  <Card.Header>
                    <h3 className="text-black fw-bold mt-2">
                      Ready to Begin Your Speaking Test?
                    </h3>
                  </Card.Header>
                  <Card.Body>
                    <p className="" style={{ fontSize: "16px" }}>
                      <ul>
                        <li>
                          Get set for a quick and engaging speaking test,
                          lasting just 15-20 minutes.
                        </li>
                        <li>
                          We're excited to hear you! But first, we'll need your
                          permission to access your microphone. Don't worry, a
                          prompt will appear when you hit "Start Test."
                        </li>
                        <li>
                          Feeling prepared? Great! Simply click "Start Test"
                          when you're all set to go.
                        </li>
                      </ul>
                    </p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          )}
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
        testStarted={testStarted}
        setIsTestStarted={setIsTestStarted}
        setMicAccessError={setMicAccessError}
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
