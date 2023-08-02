import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Stack } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import Slider from "react-slick";

const CountdownTimer = ({ initialMinutes = 1, initialSeconds = 0 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <Container>
      <Stack direction="horizontal">
        <div>
          <span className="text-black" style={{ fontSize: "20px" }}>
            {" "}
            <FiCheckCircle /> 9/40
          </span>
        </div>
        <div className="ms-auto">
          {minutes === 0 && seconds === 0 ? (
            <h1>Time's up!</h1>
          ) : (
            <span className="text-black" style={{ fontSize: "20px" }}>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </span>
          )}
        </div>
      </Stack>
    </Container>
  );
};

export default CountdownTimer;
