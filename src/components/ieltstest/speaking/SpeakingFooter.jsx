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
  ProgressBar,
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
  testStarted,
  setIsTestStarted,
  setMicAccessError,
}) => {
  const [audioURL, setAudioURL] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const [audioCurrentSection, setAudioCurrentSection] =
    useState(currentSection);
  const [timeToThink, setTimeToThink] = useState(5);

  useEffect(() => {
    // Update timeToThink based on the current section
    console.log("audioCurrent Section", currentSection.section);
    switch (currentSection.section) {
      case "Part 1":
        setTimeToThink(5);
        break;
      case "Part 2":
        setTimeToThink(60);
        break;
      case "Part 3":
        setTimeToThink(10);
        break;
      default:
        setTimeToThink(5);
    }
  }, [currentQuestion]);

  useEffect(() => {
    let timerId;

    if (testStarted && timeToThink > 0) {
      // Test is paused when timeToThink is active
      pauseRecording();

      // Start a timer that decreases timeToThink every second
      timerId = setInterval(() => {
        setTimeToThink((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeToThink === 0) {
      // Resume the test when timeToThink is over
      resumeRecording();
    }

    // Clear the interval when component unmounts or timeToThink changes
    return () => clearInterval(timerId);
  }, [timeToThink, currentQuestion]);

  useEffect(() => {
    // Calculate total questions
    let count = 0;
    module.sections.forEach((section) => {
      count += section.questions.length;
    });
    setTotalQuestions(count);
  }, [module]);

  useEffect(() => {
    // Calculate progress
    let completedQuestions = 0;
    for (let i = 0; i < module.sections.length; i++) {
      const section = module.sections[i];
      if (section === currentSection) {
        completedQuestions +=
          currentSection.questions.indexOf(currentQuestion) + 1;
        break;
      } else {
        completedQuestions += section.questions.length;
      }
    }
    setProgress((completedQuestions / totalQuestions) * 100);
  }, [currentQuestion, currentSection, module, totalQuestions]);

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

  const startTest = () => {
    setMicAccessError(null); // Reset the error message before starting the test
    startRecording();
  };

  const startRecording = () => {
    console.log("Running startRecording");
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setIsTestStarted(true); // Flag to indicate the test has started
        const newMediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(newMediaRecorder);

        newMediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            const audioBlob = new Blob([event.data], { type: "audio/wav" });
            const _audio_url = URL.createObjectURL(audioBlob);
            setAudioURL(_audio_url);
          }
        };

        newMediaRecorder.start();
        setIsRunning(true);
      })
      .catch((err) => {
        console.error("Could not get media:", err);
        setMicAccessError(
          "Unable to access microphone. Please allow microphone access to start the test."
        );
      });
  };

  const pauseRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.pause();
      setIsRunning(false);
      setIsPaused(true);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "paused") {
      mediaRecorder.resume();
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const stopRecording = () => {
    console.log("Running stopRecording");
    if (mediaRecorder) {
      mediaRecorder.stop(); // First, stop the MediaRecorder
      mediaRecorder.stream.getTracks().forEach((track) => track.stop()); // Then stop each track
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

      if (audioBlobUrl) {
        newUserAllResponse["fullAudio"] = audioBlobUrl;
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
    console.log("Running handleNextQuestion");
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
        stopRecording();
      }
    } else {
      console.log("Question not found or already at the end.");
    }
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
      <ProgressBar
        now={progress}
        className="mb-2 rounded-0"
        style={{ height: "5px" }}
      />
      <Container className="">
        <Row className="mt-2 text-black justify-content-center ">
          <Col sm={8} className="">
            <div className="mt-2  text-center">
              {isPaused ? (
                timeToThink > 0 ? (
                  <p
                    className="text-dark fw-bold m-0"
                    style={{ fontSize: "1.4rem" }}
                  >
                    {timeToThink} secs
                  </p>
                ) : (
                  <div className="text-danger">On pause</div>
                )
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
        </Row>
      </Container>
      <hr></hr>
      <Container>
        <Row className="my-2 mb-3 text-black justify-content-center ">
          <Col sm={8}>
            <Row className="">
              {!testStarted ? (
                <Col className={`col-${testStarted ? 6 : 12} mt-1`}>
                  <Button
                    onClick={startTest}
                    className={`w-100 ${deviceType === "desktop" && "btn-lg"}`}
                  >
                    <MdMic size={23} /> Start Test
                  </Button>
                </Col>
              ) : isPaused ? (
                timeToThink > 0 ? (
                  <Col className={`col-12 mt-1 text-center`}>
                    <p
                      className="text-dark  m-0"
                      style={{ fontSize: "1.4rem" }}
                    >
                      Time to think
                    </p>
                  </Col>
                ) : (
                  <Col className={`col-12 mt-1`}>
                    <Button
                      onClick={resumeRecording}
                      className={`w-100 ${
                        deviceType === "desktop" && "btn-lg"
                      }`}
                    >
                      <MdMic size={23} /> Continue
                    </Button>
                  </Col>
                )
              ) : (
                <Col className={`col-${testStarted ? 6 : 12} mt-1`}>
                  <Button
                    variant=""
                    onClick={pauseRecording}
                    className={`w-100 ${
                      deviceType === "desktop" && "btn-lg"
                    } btn-outline-primary`}
                  >
                    <MdPause size={23} /> Pause
                  </Button>
                </Col>
              )}

              <Col className="col-6 mt-1">
                {testStarted && !isPaused && (
                  <Button
                    onClick={handleNextQuestion}
                    className={`w-100 ${deviceType === "desktop" && "btn-lg"}`}
                    disabled={!testStarted && "disabled"}
                  >
                    Next <MdKeyboardDoubleArrowRight size={23} />
                  </Button>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpeakingFooter;
