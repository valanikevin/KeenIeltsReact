import React, { useState, useEffect } from "react";
import CountdownTimer from "../../elements/CountdownTimer";
import {
  Row,
  Col,
  Container,
  Button,
  Stack,
  Badge,
  Card,
} from "react-bootstrap";
import {
  MdKeyboardDoubleArrowRight,
  MdMic,
  MdPause,
  MdPauseCircleFilled,
} from "react-icons/md";
import Waves from "./Waves";

const SpeakingFooter = ({
  deviceType,
  isSpeaking,
  setIsSpeaking,
  currentQuestion,
  setCurrentQuestion,
  currentSection,
  setCurrentSection,
  setIsEndTest,
  module,
  userAllResponse,
  setUserAllResponse,
  handleConfirmEndTest,
}) => {
  const [testStarted, setIsTestStarted] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const [audioCurrentSection, setAudioCurrentSection] =
    useState(currentSection);

  useEffect(() => {
    if (testStarted && audioURL) {
      const user_responses = updateUserResponses(
        audioCurrentSection.id,
        audioURL
      );
      setAudioCurrentSection(currentSection);
    }
  }, [audioURL]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);

      setIntervalId(interval);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    // Clear audio URL and start a new recording when section changes
    setAudioURL("");
    if (testStarted) {
      startRecording(); // startRecording should take care of creating a new MediaRecorder instance
    }
  }, [currentSection]);

  useEffect(() => {
    setElapsedTime(0);
  }, [currentQuestion]);

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

          if (volume > 15) {
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

  function startTest() {
    setIsRunning(true);
    startRecording();
  }

  const startRecording = () => {
    setIsTestStarted(true); // Set testStarted to true
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

  const pauseRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      setIsRunning(false);
      mediaRecorder.pause();
      setIsPaused(true);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "paused") {
      setIsRunning(true);
      mediaRecorder.resume();
      setIsPaused(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      mediaRecorder.stop();
      setMediaRecorder(null); // Reset the MediaRecorder
    }
  };

  // function updateAudioTimeStampForQuestion -> Save audio timestamp for each question.
  // function handleNextSection -> Save audio for entire section.

  function updateUserResponses(audioSection = null, audioBlobUrl = null) {
    // Check that currentSection and currentQuestion are not null or undefined
    if (
      currentSection &&
      currentQuestion &&
      currentSection.id &&
      currentQuestion.id
    ) {
      // Create a deep copy of the current userAllResponse state
      const newUserAllResponse = userAllResponse
        ? JSON.parse(JSON.stringify(userAllResponse))
        : {};

      // Check and create keys if they don't exist
      if (!newUserAllResponse[currentSection.id]) {
        newUserAllResponse[currentSection.id] = {};
      }

      if (!newUserAllResponse[currentSection.id][currentQuestion.id]) {
        newUserAllResponse[currentSection.id][currentQuestion.id] = {};
      }

      // Update the elapsedTime for the current question in the current section
      newUserAllResponse[currentSection.id][currentQuestion.id]["elapsedTime"] =
        elapsedTime;

      // If we're changing sections or at the end of the section, store the audio blob URL
      console.log("AUDIO: ", audioSection);
      if (audioBlobUrl) {
        newUserAllResponse[audioSection] =
          newUserAllResponse[audioSection] ?? {};
        newUserAllResponse[audioSection]["audio"] = audioBlobUrl;
      }

      setUserAllResponse(newUserAllResponse);
      return newUserAllResponse;
    } else {
      console.error(
        "Either currentSection, currentQuestion or their IDs are null or not set."
      );
    }
  }

  function handleNextQuestion() {
    // Find the index of the current question in the current section
    const user_responses = updateUserResponses();

    const currentQuestionIndex = currentSection.questions.findIndex(
      (q) => q === currentQuestion
    );

    // If the current question is found and not the last question in the section
    if (
      currentQuestionIndex !== -1 &&
      currentQuestionIndex < currentSection.questions.length - 1
    ) {
      const nextQuestion = currentSection.questions[currentQuestionIndex + 1];
      setCurrentQuestion(nextQuestion);
    }
    // If it's the last question in the current section
    else if (currentQuestionIndex === currentSection.questions.length - 1) {
      stopRecording();

      updateUserResponses(audioURL);
      // Find the index of the current section in the module
      const currentSectionIndex = module.sections.findIndex(
        (sec) => sec === currentSection
      );

      // If the current section is found and not the last section in the module
      if (
        currentSectionIndex !== -1 &&
        currentSectionIndex < module.sections.length - 1
      ) {
        const nextSection = module.sections[currentSectionIndex + 1];
        setCurrentSection(nextSection);

        // Optionally, set the question to the first one in the new section
        setCurrentQuestion(nextSection.questions[0]);
      }
      // If it's the last section
      else if (currentSectionIndex === module.sections.length - 1) {
        // Set isEndTest to true
        setIsEndTest(true);
      }
    } else {
      console.log("Question not found or already at the end.");
    }
    console.log(userAllResponse);
  }

  function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  return (
    <div
      className=" border-top bg-white"
      style={{ position: "fixed", bottom: 0, width: "100%" }}
    >
      <Container className="">
        <Row className="my-2 text-black justify-content-center ">
          <Col sm={8} className="border-bottom mb-2">
            <div>{audioURL}</div>
            <div>{audioURL && <audio src={audioURL} controls />}</div>
            <div className="mt-2 mb-3 text-center">
              {isPaused ? (
                <div className="text-danger">On pause</div>
              ) : (
                <div>
                  <Badge
                    bg="dark"
                    className=""
                    style={{ fontSize: "20px", width: "125px" }}
                  >
                    <Stack direction="horizontal" className="">
                      <div className="mx-2">
                        <Waves isSpeaking={isSpeaking} background="dark" />
                      </div>
                      <div className="mx-2">
                        {secondsToMinutes(elapsedTime)}
                      </div>
                    </Stack>
                  </Badge>
                </div>
              )}
            </div>
          </Col>
          <Col sm={8}>
            <Row className="">
              <Col className="col-6 mt-1">
                {!testStarted ? (
                  <Button
                    onClick={startTest}
                    className={`w-100 ${deviceType === "desktop" && "btn-lg"}`}
                  >
                    <MdMic size={23} /> Start
                  </Button>
                ) : isPaused ? (
                  <Button
                    onClick={resumeRecording}
                    className={`w-100 ${deviceType === "desktop" && "btn-lg"}`}
                  >
                    <MdMic size={23} /> Continue
                  </Button>
                ) : (
                  <Button
                    variant=""
                    onClick={pauseRecording}
                    className={`w-100 ${
                      deviceType === "desktop" && "btn-lg"
                    } btn-outline-primary`}
                  >
                    <MdPause size={23} /> Pause
                  </Button>
                )}
              </Col>

              <Col className="col-6 mt-1">
                <Button
                  onClick={handleNextQuestion}
                  className={`w-100 ${deviceType === "desktop" && "btn-lg"}`}
                  disabled={!testStarted && "disabled"}
                >
                  Next <MdKeyboardDoubleArrowRight size={23} />
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpeakingFooter;
