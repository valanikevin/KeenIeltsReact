import React from "react";
import AudioPlayer from "react-h5-audio-player";

import "./ReactAudioPlayer.css";
import { Container } from "react-bootstrap";

const ReactAudioPlayer = ({ audio_title, audio_url, onPlayHandle }) => {
  return (
    <Container>
      <div className="bg-white pt-2">
        <span
          className="text-black fw-bold mx-3 text-uppercase"
          style={{ fontSize: "16px" }}
        >
          {audio_title}
        </span>
        <AudioPlayer
          className=" "
          autoPlay={true}
          src={audio_url}
          onPlay={onPlayHandle}
        />
      </div>
    </Container>
  );
};

export default ReactAudioPlayer;
