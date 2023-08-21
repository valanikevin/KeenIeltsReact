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
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";
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
  const isFirstSection = currentSection
    ? currentSection.id === module.sections[0].id
    : false;
  const isLastSection = currentSection
    ? currentSection.id === module.sections[module.sections.length - 1].id
    : false;
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const handleShowSubmitModal = () => setShowSubmitModal(true);
  const handleClosSubmiteModal = () => setShowSubmitModal(false);

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

  function handleConfirmEndTest() {
    getFormDataLocal();
    sendAttemptUpdate("Completed");
    navigate(
      `/ieltstest/attempt/writing/${module_slug}/${attempt_slug}/get_result`
    );
    handleClosSubmiteModal();
  }

  function handlePreviousSectionButton() {
    let current_section_id = currentSection.id;
    let new_section_id = current_section_id - 1;
    const newSection = module.sections.find(
      (section) => section.id === new_section_id
    );
    if (newSection) {
      setCurrentSection(newSection);
    } else {
      const lastElement = module.sections[module.sections.length - 1];
      setCurrentSection(lastElement);
    }
  }

  function handleNextSectionButton() {
    let current_section_id = currentSection.id;
    let new_section_id = current_section_id + 1;
    const newSection = module.sections.find(
      (section) => section.id === new_section_id
    );
    if (newSection) {
      setCurrentSection(newSection);
    } else {
      const lastElement = module.sections[0];
      setCurrentSection(lastElement);
    }
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
                      <Button
                        variant="dark"
                        className="btn-sm"
                        onClick={handlePreviousSectionButton}
                        disabled={isFirstSection} // Disable if on the first section
                      >
                        <FiArrowLeft size={20} /> Previous Section
                      </Button>
                    </div>
                    <div className="m-0 ms-auto">
                      {isLastSection ? (
                        <Button
                          variant="primary"
                          className="btn-sm"
                          onClick={() => {
                            setShowSubmitModal(true);
                          }}
                        >
                          Submit Test <FiCheckCircle size={20} />
                        </Button>
                      ) : (
                        <Button
                          variant="dark"
                          className="btn-sm"
                          onClick={handleNextSectionButton}
                        >
                          Next Section <FiArrowRight size={20} />
                        </Button>
                      )}
                    </div>
                  </Stack>
                </div>
              </SplitPane>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showSubmitModal} onHide={handleClosSubmiteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>End Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to end the test?</Modal.Body>
        <Modal.Footer className="p-2">
          <Button variant="outline-primary" onClick={handleClosSubmiteModal}>
            No
          </Button>
          <Button variant="primary" onClick={handleConfirmEndTest}>
            Yes, end test
          </Button>
        </Modal.Footer>
      </Modal>
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
