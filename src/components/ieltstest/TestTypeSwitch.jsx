import React, { useContext } from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import TestTypeContext from "../../context/TestTypeContext";

const TestTypeSwitch = () => {
  const [testType, setTestType] = useContext(TestTypeContext);

  return (
    <div className="bg-white py-2 ">
      <Container className="text-center">
        <div className="">
          <ButtonGroup aria-label="Basic mixed styles example">
            <Button
              variant="outline-dark"
              active={testType === "academic" ? true : false}
              onClick={() => {
                setTestType("academic");
              }}
            >
              Academic
            </Button>
            <Button
              variant="outline-dark"
              active={testType === "general" ? true : false}
              onClick={() => {
                setTestType("general");
              }}
            >
              General
            </Button>
          </ButtonGroup>
        </div>
      </Container>
    </div>
  );
};

export default TestTypeSwitch;
