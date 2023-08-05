import React, { useRef, useState, useEffect } from "react";
import { Button, ButtonGroup, Container, ProgressBar } from "react-bootstrap";
import {
  FiFastForward,
  FiPause,
  FiPlay,
  FiRewind,
  FiSkipBack,
  FiSkipForward,
} from "react-icons/fi";

const CustomAudioPlayer = ({ src, currentSection }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isStartReady, setIsStartReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && audioRef.current.duration) {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isStartReady) {
      audioRef.current.currentTime = currentSection.audio_start_time;
      playAudio();
    }
  }, [currentSection, isStartReady]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 5;
  };

  const handleForward = () => {
    audioRef.current.currentTime += 5;
  };

  const handleLoadedData = () => {
    isStartReady && setDuration(audioRef.current.duration);
  };

  const handlePlayFromStart = () => {
    audioRef.current.currentTime = 0;
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSkipToEnd = () => {
    audioRef.current.currentTime = audioRef.current.duration;
  };

  return (
    <Container className="my-3">
      {isStartReady ? (
        <>
          <audio ref={audioRef} src={src} onLoadedData={handleLoadedData} />
          <ProgressBar
            now={progress}
            className="mb-3"
            style={{ height: "5px" }}
          />
          <div className="text-center">
            <ButtonGroup>
              <Button onClick={handlePlayFromStart} className="btn-light">
                <FiSkipBack size={20} />
              </Button>
              <Button onClick={handleBackward} className="btn-light">
                <FiRewind size={20} />
              </Button>
              <Button onClick={handlePlayPause}>
                {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
              </Button>
              <Button onClick={handleForward} className="btn-light">
                <FiFastForward size={20} />
              </Button>
              <Button onClick={handleSkipToEnd} className="btn-light">
                <FiSkipForward size={20} />
              </Button>
            </ButtonGroup>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2>Ready?</h2>
          <p>Take a look at the questions once, then start the test.</p>
          <Button
            variant="outline-primary"
            onClick={() => {
              setIsStartReady(true);
            }}
          >
            Begin Listening Test
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CustomAudioPlayer;
