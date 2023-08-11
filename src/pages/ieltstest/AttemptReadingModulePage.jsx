import React, { useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import { Navbar, Card, Container, Row, Col } from "react-bootstrap";
import "./ReactSplitPane.css";
import { ReadingNavBar } from "../../components/ieltstest/reading/ReadingNavBar";
import { FiActivity } from "react-icons/fi";
import ReadingFooter from "../../components/ieltstest/reading/ReadingFooter";
import useAxios from "../../utils/useAxios";
import { useParams } from "react-router-dom";
import { API_URLS } from "../../utils/urls";

const AttemptReadingModulePage = () => {
  const [deviceType, setDeviceType] = useState("desktop");
  const [isFooterExpanded, setFooterExpanded] = useState(false);
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);

  const api = useAxios();

  async function getModule() {
    const response = await api.post(
      API_URLS.getReadingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      setCurrentSection(response.data.sections[0]);
    }
  }

  useEffect(() => {
    getModule();
  }, [setModule]);

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
    <>
      <ReadingNavBar />

      <Container fluid style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Row style={{ height: "calc(100vh - 100px)" }}>
          <Col sm={12}>
            <div style={{ height: "100%", width: "100%" }}>
              <SplitPane
                split={deviceType === "mobile" ? "horizontal" : "vertical"}
                minSize={100}
                defaultSize={100}
              >
                <div
                  className="simulationDiv py-2 px-1"
                  style={{ overflow: "auto" }}
                >
                  <Card className="h-100">
                    <Card.Body>
                      {/* Place Reading Passage content here */}
                    </Card.Body>
                  </Card>
                </div>
                <div
                  className="statisticsDiv py-2 px-1"
                  style={{ overflow: "auto" }}
                >
                  <Card className="h-100">
                    <Card.Body>
                      {/* Place Questions/Answer content here */}
                    </Card.Body>
                  </Card>
                </div>
              </SplitPane>
            </div>
          </Col>
        </Row>
      </Container>
      <ReadingFooter
        isExpanded={isFooterExpanded}
        toggleExpanded={setFooterExpanded}
        deviceType={deviceType}
      />
    </>
  );
};

export default AttemptReadingModulePage;
