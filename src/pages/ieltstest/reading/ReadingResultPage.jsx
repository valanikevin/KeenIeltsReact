import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/urls";
import ScoreSection from "../../../components/ieltstest/ScoreSection";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import SplitPane from "react-split-pane";
import "./ReactSplitPane.css";

import ReadingPassage from "../../../components/ieltstest/reading/ReadingPassage";
import ReadingSection from "../../../components/ieltstest/reading/ReadingSection";

const ReadingResultPage = () => {
  const api = useAxios();
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const [deviceType, setDeviceType] = useState("desktop");

  async function getModule() {
    const response = await api.post(
      API_URLS.getReadingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      console.log(response.data);
    }
  }

  async function getAttempt() {
    const response = await api.post(
      API_URLS.getReadingAttempt + attempt_slug + "/"
    );
    if (response.status === 200) {
      setAttempt(response.data);
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  useEffect(() => {
    getAttempt();
  }, []);

  useEffect(() => {
    getModule();
  }, []);

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

  const paneStyle = {
    overflow: "auto",
    height: `${deviceType === "mobile" ? "65vh" : "95vh"}`,
  };

  const paneWithBackgroundColor = {
    ...paneStyle,
    backgroundColor: "#F5F5DC",
  };

  const containerStyle = {
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "calc(100vh - 50px)", // Assuming 50px for NavBar and 50px for Footer
    overflow: "auto", // Prevent scrollbars on the main layout
  };

  if (!attempt || !attempt.evaluation) {
    return null;
  }

  if (!module) {
    return null;
  }

  return (
    <>
      <div className="border-bottom">
        <ScoreSection attempt={attempt} module_name={"Reading"} />
      </div>

      <div className="my-4">
        <Container>
          <Row>
            <Col sm={12}>
              <Accordion defaultActiveKey={"0"}>
                {Object.keys(module.sections).map((item) => (
                  <Accordion.Item eventKey={item} key={item}>
                    <Accordion.Header>
                      {module.sections[item].section}
                    </Accordion.Header>
                    <Accordion.Body className="p-0">
                      <div className="h-100">
                        <SplitPane
                          split={
                            deviceType === "mobile" ? "horizontal" : "vertical"
                          }
                          minSize={50}
                          defaultSize={100} // Ensure SplitPane fills its container
                        >
                          <div
                            className="simulationDiv p-3"
                            style={paneWithBackgroundColor}
                          >
                            <ReadingPassage section={module.sections[item]} />
                          </div>
                          <div
                            className="statisticsDiv p-3 bg-white"
                            style={paneStyle}
                          >
                            <ReadingSection
                              section={module.sections[item]}
                              user_answers={
                                attempt.evaluation.all_sections[item]
                              }
                            />
                          </div>
                        </SplitPane>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ReadingResultPage;
