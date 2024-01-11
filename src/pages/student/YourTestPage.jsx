import React, { useEffect, useState } from "react";
import { Card, Container, Nav, Spinner, Tab, Table } from "react-bootstrap";
import ProfileCover from "../../components/layout/ProfileCover";
import { Link } from "react-router-dom";
import useAxios from "../../utils/useAxios";
import { DJANGO_BASE_URL } from "../../utils/config";
import { FiArrowRight } from "react-icons/fi";
import { CheckCircleFill, ExclamationCircleFill } from "react-bootstrap-icons";
import YourRecentTestsCard from "../../components/layout/student/YourRecentTestsCard";

const YourTestPage = () => {
  const [currentModule, setCurrentModule] = useState("listening");
  const [tests, setTests] = useState(null);
  const api = useAxios();

  function getTests(module) {
    setTests(false);
    api
      .post(DJANGO_BASE_URL + "/student/get_attempts/" + module + "/")
      .then((response) => {
        if (response.status === 200) {
          setTests(response.data);
        }
      });
  }

  useEffect(() => {
    getTests(currentModule);
  }, [currentModule]);
  return (
    <Container className="my-3">
      <ProfileCover page={"tests"} />

      <Tab.Container defaultActiveKey={currentModule}>
        <Card>
          <Card.Header>
            <h3 className="mt-2 fw-bold">Your Attempts</h3>
          </Card.Header>
          <Card.Header className="border-bottom-0 p-0">
            <Nav className="nav-lb-tab">
              <Nav.Item>
                <Nav.Link
                  eventKey="listening"
                  className="mb-sm-3 mb-md-0"
                  onClick={() => {
                    setCurrentModule("listening");
                  }}
                >
                  Listening
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="reading"
                  className="mb-sm-3 mb-md-0"
                  onClick={() => {
                    setCurrentModule("reading");
                  }}
                >
                  Reading
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="writing"
                  className="mb-sm-3 mb-md-0"
                  onClick={() => {
                    setCurrentModule("writing");
                  }}
                >
                  Writing
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="speaking"
                  className="mb-sm-3 mb-md-0"
                  onClick={() => {
                    setCurrentModule("speaking");
                  }}
                >
                  Speaking
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body className="p-2">
            {tests === false ? (
              <div className="text-center my-2">
                <h3 className="text-capitalize">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </h3>
              </div>
            ) : tests && tests.length === 0 ? (
              <div className="text-center my-2">
                <h3 className="text-capitalize">
                  No {currentModule} Attempts Found.
                </h3>
              </div>
            ) : (
              <YourRecentTestsCard tests={tests} />
            )}
          </Card.Body>
        </Card>
      </Tab.Container>
    </Container>
  );
};

export default YourTestPage;
