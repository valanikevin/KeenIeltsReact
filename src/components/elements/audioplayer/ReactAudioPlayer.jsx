import React from "react";
import AudioPlayer from "react-h5-audio-player";

import "./ReactAudioPlayer.css";

const ReactAudioPlayer = ({ audio_title, audio_url, onPlayHandle }) => {
  return (
    <div className="bg-white pt-2">
      <span
        className="text-black fw-bold mx-3 text-uppercase"
        style={{ fontSize: "16px" }}
      >
        {audio_title}
      </span>
      <AudioPlayer
        className=" "
        autoPlay={false}
        src={audio_url}
        onPlay={onPlayHandle}
      />
    </div>
  );
};

export default ReactAudioPlayer;
