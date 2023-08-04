import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge, Stack } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import Slider from "react-slick";

const CountdownTimer = ({
  initialMinutes = 1,
  initialSeconds = 0,
  questionData,
  handleTimesUp,
}) => {
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
          handleTimesUp();
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

  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      return handleTimesUp();
    }
  }, []);

  return (
    <Container>
      <Stack direction="horizontal">
        <div>
          <span className="text-black" style={{ fontSize: "20px" }}>
            {" "}
            <FiCheckCircle /> {questionData.completed_questions}/
            {questionData.total_questions}
          </span>
        </div>
        <div className="ms-auto">
          {minutes === 0 && seconds === 0 ? (
            <Badge bg="danger" style={{ fontSize: "20px" }} className="my-2">
              Time's Up
            </Badge>
          ) : minutes === 0 && seconds <= 60 ? (
            <Badge bg="danger" style={{ fontSize: "20px" }} className="m-2">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Badge>
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
