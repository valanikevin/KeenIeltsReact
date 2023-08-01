import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./ReactAudioPlayer.css";

const ReactAudioPlayer = ({ url }) => {
  return (
    <AudioPlayer
      autoPlay
      src={url}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
};

export default ReactAudioPlayer;
