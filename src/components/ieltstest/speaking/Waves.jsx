import React from "react";
import "./Waves.css";

const Waves = ({ isSpeaking, background = "primary" }) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center bg-${background}`}
      style={{ height: "30px" }}
    >
      {isSpeaking ? (
        <div className="d-flex justify-content-between align-items-center">
          <div className="waveform-bar animated rounded"></div>
          <div className="waveform-bar animated rounded"></div>
          <div className="waveform-bar animated rounded"></div>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center">
          <div className="waveform-dot"></div>
          <div className="waveform-dot"></div>
          <div className="waveform-dot"></div>
        </div>
      )}
    </div>
  );
};

export default Waves;
