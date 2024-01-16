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

  async function blobToAudioBuffer(blob) {
    return new Promise((resolve, reject) => {
      let audioContext = new (window.AudioContext ||
        window.webkitAudioContext ||
        window.OfflineAudioContext)();
      let reader = new FileReader();
      reader.onloadend = function () {
        audioContext.decodeAudioData(reader.result).then(resolve).catch(reject); // Add this line to catch decoding errors
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(blob);
    });
  }

  function writeUTFBytes(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  async function encodeWAV(audioBuffer) {
    // Create a WAV header
    let buffer = new ArrayBuffer(44 + audioBuffer.length * 2);
    let view = new DataView(buffer);

    // RIFF chunk descriptor
    writeUTFBytes(view, 0, "RIFF");
    view.setUint32(4, 44 + audioBuffer.length * 2 - 8, true);
    writeUTFBytes(view, 8, "WAVE");

    // FMT sub-chunk
    writeUTFBytes(view, 12, "fmt ");
    view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
    view.setUint16(20, 1, true); // AudioFormat (PCM = 1)
    view.setUint16(22, audioBuffer.numberOfChannels, true); // NumChannels
    view.setUint32(24, audioBuffer.sampleRate, true); // SampleRate
    view.setUint32(
      28,
      audioBuffer.sampleRate * audioBuffer.numberOfChannels * 2,
      true
    ); // ByteRate
    view.setUint16(32, audioBuffer.numberOfChannels * 2, true); // BlockAlign
    view.setUint16(34, 16, true); // BitsPerSample

    // Data sub-chunk
    writeUTFBytes(view, 36, "data");
    view.setUint32(40, audioBuffer.length * 2, true);

    // Write the PCM samples
    let lng = audioBuffer.length;
    let index = 44;
    let volume = 1;
    for (let i = 0; i < lng; i++) {
      view.setInt16(
        index,
        audioBuffer.getChannelData(0)[i] * (0x7fff * volume),
        true
      );
      index += 2;
    }

    // Return the Blob
    return new Blob([view], { type: "audio/wav" });
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
        const blob = new Blob([audioBuffer], { type: "audio/wav" });
        formData.append(key, blob);
      } else if (key === "merged_audio_duration") {
        const durationString = JSON.stringify(user_responses[key]);
        formData.append(key, durationString);
      } else {
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

  async function mergeAudioBlobWithBytes(user_responses) {
    let audioContext = new (window.AudioContext ||
      window.webkitAudioContext ||
      window.OfflineAudioContext)();

    let totalDuration = 0;
    let audioBuffers = [];
    let durations = {}; // Object to store individual durations

    for (const key in user_responses) {
      if (user_responses[key].audio) {
        const audioBlobUrl = user_responses[key].audio;
        const blob = await fetch(audioBlobUrl).then((r) => r.blob());
        const buffer = await blob.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(buffer);

        audioBuffers.push(audioBuffer);
        let duration = audioBuffer.duration;
        totalDuration += duration;
        durations[key] = duration; // Store duration with key
      }
    }

    // Create a single buffer for the merged audio
    let mergedBuffer = audioContext.createBuffer(
      audioBuffers[0].numberOfChannels,
      audioContext.sampleRate * totalDuration,
      audioContext.sampleRate
    );

    let offset = 0;
    audioBuffers.forEach((buffer) => {
      for (let i = 0; i < buffer.numberOfChannels; i++) {
        mergedBuffer.getChannelData(i).set(buffer.getChannelData(i), offset);
      }
      offset += buffer.length;
    });

    const mergedAudioWAVBlob = await encodeWAV(mergedBuffer);
    user_responses = {
      ...user_responses,
      merged_audio: mergedAudioWAVBlob,
      merged_audio_duration: durations, // Use the durations object
    };

    return user_responses;
  }

  async function replaceAudioBlobWithBytes(user_responses) {
    for (const key in user_responses) {
      if (key !== "merged_audio" && key !== "merged_audio_duration") {
        console.log("Key", key);
        const audioBlobUrl = user_responses[key].audio;
        const blob = await fetch(audioBlobUrl).then((r) => r.blob());
        const audioBuffer = await blobToAudioBuffer(blob); // Convert Blob to AudioBuffer
        const audioWAVBlob = await encodeWAV(audioBuffer); // Encode to WAV with metadata
        user_responses[key] = {
          ...user_responses[key],
          audio: audioWAVBlob,
        };
      }
    }
    return user_responses;
  }

  async function handleConfirmEndTest(user_responses) {
    console.log("Handle Confirm End Test");
    setShowLoader(true);
    // const updatedUserResponsesMergedAudio = await mergeAudioBlobWithBytes(
    //   user_responses
    // );

    const updatedUserResponses = await replaceAudioBlobWithBytes(
      user_responses
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
