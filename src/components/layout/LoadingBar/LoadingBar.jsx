import React, { useContext } from "react";
import "./LoadingBar.css";
import LoadingContext from "../../../context/layout/LoadingContext";
import ErrorContext from "../../../context/layout/ErrorContext";
import { Container, Stack } from "react-bootstrap";
import { FiX } from "react-icons/fi";

const LoadingBar = () => {
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);
  const [error, setError] = useContext(ErrorContext);

  if (error) {
    return (
      <div className="bg-danger  py-2">
        <Container>
          <Stack direction="horizontal" gap={3}>
            <div className="text-white">
              <p className="text-white p-0 m-0" style={{ fontSize: "16px" }}>
                {error}
              </p>
            </div>
            <div className="ms-auto">
              <FiX
                onClick={() => {
                  setError(null);
                }}
                className="text-white"
                size={20}
              />
            </div>
          </Stack>
        </Container>
      </div>
    );
  }
  if (!loadingBar) {
    return (
      <div className="demo-container1 bg-white border-bottom">
        <div className="bg-white">
          <div className="bg-white"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-container1 border-bottom">
      <div className="progress-bar1">
        <div className="progress-bar-value1"></div>
      </div>
    </div>
  );
};

export default LoadingBar;
