import React, { useEffect, useState } from "react";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/urls";
import { useParams } from "react-router-dom";
import { MiniNavBar } from "../../../components/ieltstest/MiniNavBar";
import { Modal } from "react-bootstrap";
import BookInfo from "../../../components/ieltstest/listening/BookInfo";
import SplitPane from "react-split-pane";
import "../reading/ReactSplitPane.css";
import "../../../components/ieltstest/writing/WritingModule.css";
import parse from "html-react-parser";

import {
  Stack,
  Navbar,
  Card,
  Container,
  Row,
  Col,
  Accordion,
  Table,
  Badge,
  Button,
} from "react-bootstrap";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import WritingSection from "../../../components/ieltstest/writing/WritingSection";

const AttemptWritingModulePage = () => {
  // Variables:
  const api = useAxios();
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [showTestInfoModal, setShowTestInfoModal] = useState(false);
  const handleCloseTestInfoModal = () => setShowTestInfoModal(false);
  const [deviceType, setDeviceType] = useState("desktop");

  // Functions
  async function getModule() {
    const response = await api.post(
      API_URLS.getWritingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      setCurrentSection(response.data.sections[0]);
    }
  }

  // CSS

  const paneStyle = {
    overflow: "auto",
    height: `${deviceType === "mobile" ? "50vh" : "95vh"}`,
  };

  const paneWithBackgroundColor = {
    ...paneStyle,
    backgroundColor: "#ffeae0",
  };

  const containerStyle = {
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "calc(100vh - 50px)", // Assuming 50px for NavBar and 50px for Footer
    overflow: "auto", // Prevent scrollbars on the main layout
  };

  //useEffects

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

  useEffect(() => {
    getModule();
  }, []);

  if (!module) {
    return null;
  }
  return (
    <>
      <MiniNavBar
        module={module}
        currentSection={currentSection}
        setShowTestInfoModal={setShowTestInfoModal}
      />
      <Container style={containerStyle} className="hide-scrollbar px-0">
        <Row style={{ height: "100%" }}>
          <Col sm={12}>
            <div style={{ width: "100%" }}>
              <SplitPane
                split={deviceType === "mobile" ? "horizontal" : "vertical"}
                style={{ height: "100%" }} // Ensure SplitPane fills its container
              >
                <div
                  className="simulationDiv p-3 writing-questions"
                  style={paneWithBackgroundColor}
                >
                  {parse(module.sections[0].questions)}
                </div>
                <div className="statisticsDiv p-3 bg-white" style={paneStyle}>
                  <WritingSection />
                  <Stack direction="horizontal" className="border-top pt-3">
                    <div className="m-0">
                      <Button variant="dark" className="btn-sm">
                        <FiArrowLeft size={20} /> Previous Section
                      </Button>
                    </div>
                    <div className="m-0 ms-auto">
                      <Button variant="dark" className="btn-sm">
                        Next Section <FiArrowRight size={20} />
                      </Button>
                    </div>
                  </Stack>
                </div>
              </SplitPane>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal
        show={showTestInfoModal}
        onHide={handleCloseTestInfoModal}
        centered
        className="p-0"
      >
        <Modal.Header closeButton>
          <Modal.Title>Test Info</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <BookInfo module={module} attempt_slug={attempt_slug} />
        </Modal.Body>
        <div className="modal-footer py-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleCloseTestInfoModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AttemptWritingModulePage;
