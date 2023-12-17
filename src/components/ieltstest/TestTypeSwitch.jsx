import React, { useContext, useEffect, useState } from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import TestTypeContext from "../../context/TestTypeContext";

const TestTypeSwitch = () => {
  const [testType, setTestType] = useContext(TestTypeContext);
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDeviceType("mobile");
      } else {
        setDeviceType("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white py-2">
      <Container className="text-center px-1">
        <div className="">
          <ButtonGroup className="p-0 m-0">
            <Button
              variant="outline-dark"
              active={testType === "academic" ? true : false}
              onClick={() => {
                setTestType("academic");
              }}
            >
              {deviceType === "desktop" ? "Academic " : "AC"}
            </Button>
            <Button
              variant="outline-dark"
              active={testType === "general" ? true : false}
              onClick={() => {
                setTestType("general");
              }}
            >
              {deviceType === "desktop" ? "General " : "GT"}
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </div>
  );
};

export default TestTypeSwitch;
