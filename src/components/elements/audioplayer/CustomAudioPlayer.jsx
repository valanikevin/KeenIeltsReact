import React, { useRef, useState, useEffect } from "react";
import { Button, ButtonGroup, Form, Stack } from "react-bootstrap";
import {
  FiFastForward,
  FiPause,
  FiPlay,
  FiRewind,
  FiSkipBack,
  FiSkipForward,
} from "react-icons/fi";
import moment from "moment";

const CustomAudioPlayer = ({ src, start_time }) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentDuration, setCurrentDuration] = useState("00:00");
  const [totalDuration, setTotalDuration] = useState("00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && audioRef.current.duration) {
        setProgress(
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        );
        setCurrentDuration(
          moment.utc(audioRef.current.currentTime * 1000).format("mm:ss")
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    audioRef.current.currentTime = start_time;
  }, [start_time]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 5;
  };

  const handleForward = () => {
    audioRef.current.currentTime += 5;
  };

  const handleLoadedData = () => {
    setTotalDuration(
      moment.utc(audioRef.current.duration * 1000).format("mm:ss")
    );
  };

  const handlePlayFromStart = () => {
    audioRef.current.currentTime = 0;
    playAudio();
  };

  const handleSkipToEnd = () => {
    audioRef.current.currentTime = audioRef.current.duration;
  };

  const handleProgressChange = (e) => {
    audioRef.current.currentTime =
      (e.target.value / 100) * audioRef.current.duration;
    setProgress(e.target.value);
  };

  return (
    <div className="bg-white px-5 py-3">
      <audio ref={audioRef} src={src} onLoadedData={handleLoadedData} />
      <div className="d-flex justify-content-between align-items-center">
        <Form.Range
          value={progress}
          onChange={handleProgressChange}
          style={{ flexGrow: 1 }}
        />
      </div>
      <Stack direction="horizontal" className="mb-2">
        <div>
          <span>{currentDuration}</span>
        </div>
        <div className="ms-auto">
          <span>{totalDuration}</span>
        </div>
      </Stack>
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
    </div>
  );
};

export default CustomAudioPlayer;
