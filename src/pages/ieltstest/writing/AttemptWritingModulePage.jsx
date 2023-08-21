import React, { useEffect, useRef, useState } from "react";
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
import WritingTask from "../../../components/ieltstest/writing/WritingTask";

const AttemptWritingModulePage = () => {
  // Variables:
  const api = useAxios();
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [showTestInfoModal, setShowTestInfoModal] = useState(false);
  const handleCloseTestInfoModal = () => setShowTestInfoModal(false);
  const [deviceType, setDeviceType] = useState("desktop");
  const [userAnswerBySection, setUserAnswerBySection] = useState({});
  const formRef = useRef(null);
  const [currentFormData, setCurrentFormData] = useState({});

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

  function updateCurrentSection(id) {
    const newSection = module.sections.find((section) => section.id === id);
    setCurrentSection(newSection);
  }

  // CSS

  const paneStyle = {
    overflow: "auto",
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

  const handleChange = (event) => {
    const formData = getFormDataLocal();
  };

  function getFormDataLocal() {
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      let data = {};
      for (let [key, value] of formData.entries()) {
        data[key] = value; // Construct the data object
      }
      // Use currentSection.id to store the data for the current section
      setUserAnswerBySection({
        ...userAnswerBySection,
        [currentSection.id]: data[`task-${currentSection.id}`],
      });
      setCurrentFormData(data);
    }
  }

  useEffect(() => {
    getFormDataLocal();
    if (currentSection) {
    }
  }, [currentSection]);

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
        updateCurrentSection={updateCurrentSection}
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
                  style={{
                    height: `${deviceType === "mobile" ? "30vh" : "95vh"}`,
                    backgroundColor: "#ffeae0",
                  }}
                >
                  <WritingTask
                    currentSection={currentSection}
                    key={currentSection.id}
                  />
                </div>
                <div
                  className="statisticsDiv p-3 bg-white"
                  style={{
                    height: `${deviceType === "mobile" ? "60vh" : "95vh"}`,
                  }}
                >
                  <WritingSection
                    currentSection={currentSection}
                    key={currentSection.id}
                    deviceType={deviceType}
                    formRef={formRef}
                    handleChange={handleChange}
                    currentFormData={currentFormData}
                    userAnswerBySection={userAnswerBySection} // Pass this prop
                  />
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
