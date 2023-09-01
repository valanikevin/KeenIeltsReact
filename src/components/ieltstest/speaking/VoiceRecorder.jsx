import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const VoiceRecorder = ({ setIsSpeaking }) => {
  const [audioURL, setAudioURL] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);

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

  const pauseRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.pause();
    }
  };

  const resumeRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "paused") {
      mediaRecorder.resume();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
    }
  };

  return (
    <div className="App">
      <Card style={{ margin: "20px" }}>
        <Card.Header>Simple Audio Recorder</Card.Header>
        <Card.Body>
          <Button variant="primary" onClick={startRecording}>
            Start
          </Button>{" "}
          <Button variant="warning" onClick={pauseRecording}>
            Pause
          </Button>{" "}
          <Button variant="success" onClick={resumeRecording}>
            Resume
          </Button>{" "}
          <Button variant="secondary" onClick={stopRecording}>
            Stop
          </Button>
        </Card.Body>
        <Card.Footer>
          <h2>Preview:</h2>
          {audioURL && <audio controls src={audioURL} />}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default VoiceRecorder;
