import React, { useRef, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const CustomAudioPlayer = ({ src, start_time }) => {
  const audioPlayerRef = useRef(); // Create a ref for the audio player

  useEffect(() => {
    if (audioPlayerRef.current) {
      audioPlayerRef.current.audio.current.currentTime = start_time;
    }
  }, [start_time]);

  return (
    <div className="my-2">
      <AudioPlayer
        ref={audioPlayerRef} // Assign the ref to the AudioPlayer
        src={src}
        autoPlayAfterSrcChange={false}
        customAdditionalControls={[]}
        customVolumeControls={[]}
      />
    </div>
  );
};

export default CustomAudioPlayer;
