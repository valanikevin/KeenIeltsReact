import React, { useState, useEffect, useRef } from "react";
import SplitPane from "react-split-pane";
import {
  Navbar,
  Card,
  Container,
  Row,
  Col,
  Modal,
  Accordion,
  Table,
  Badge,
} from "react-bootstrap";
import "./ReactSplitPane.css";
import { ReadingNavBar } from "../../components/ieltstest/reading/ReadingNavBar";
import ReadingFooter from "../../components/ieltstest/reading/ReadingFooter";
import useAxios from "../../utils/useAxios";
import { useParams } from "react-router-dom";
import { API_URLS } from "../../utils/urls";
import ReadingSection from "../../components/ieltstest/reading/ReadingSection";
import ReadingPassage from "../../components/ieltstest/reading/ReadingPassage";
import { getFormData } from "../../utils/moduleUtils";

const AttemptReadingModulePage = () => {
  const [deviceType, setDeviceType] = useState("desktop");
  const [isFooterExpanded, setFooterExpanded] = useState(false);
  const { module_slug } = useParams();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [currentFormData, setCurrentFormData] = useState({});
  const [userAnswerBySection, setUserAnswerBySection] = useState({});
  const [currentUserAnswerBySection, setCurrentUserAnswerBySection] =
    useState(null);
  const [questionData, setQuestionData] = useState({
    completed_questions: 0,
  });
  const [showReviewModal, setShowReviewModal] = useState(false);
  const handleShowReviewModal = () => setShowReviewModal(true);
  const handleCloseReviewModal = () => setShowReviewModal(false);

  const formRef = useRef(null);
  const api = useAxios();

  // Effects:

  useEffect(() => {
    getModule();
  }, []);

  useEffect(() => {
    if (currentSection) {
      const answers = userAnswerBySection[currentSection.id];
      setCurrentUserAnswerBySection(answers);
    }
  }, [currentSection]);

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
    getFormDataLocal();
  }, [module]);

  useEffect(() => {
    if (userAnswerBySection) {
      // Make sure this is the correct variable name
      let completed_questions = 0;

      Object.keys(userAnswerBySection).map((section) =>
        Object.keys(userAnswerBySection[section]).map(
          (item) =>
            // You can access the value with userAnswersBySection[section][item]
            userAnswerBySection[section][item] !== undefined &&
            userAnswerBySection[section][item] !== "" &&
            completed_questions++
        )
      );
      setQuestionData({
        completed_questions: completed_questions,
      });
    }
  }, [userAnswerBySection]); // Make sure this is the correct variable name

  // Functions

  function getFormDataLocal() {
    if (currentSection != null) {
      const data = getFormData(formRef, module, setCurrentFormData);
      setUserAnswerBySection({
        ...userAnswerBySection,
        [currentSection.id]: data,
      });
      return data;
    } else {
      return null;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    endTest();
  };

  const handleChange = (event) => {
    const formData = getFormDataLocal();
  };

  async function getModule() {
    const response = await api.post(
      API_URLS.getReadingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      setCurrentSection(response.data.sections[0]);
      // Initialize userAnswerBySection here if you have existing answers
      // setUserAnswerBySection( ... );
    }
  }

  function updateCurrentSection(id) {
    const newSection = module.sections.find((section) => section.id === id);
    setCurrentSection(newSection);
  }

  // CSS

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

  if (!module) {
    return null;
  }

  return (
    <>
      <Modal
        show={showReviewModal}
        onHide={handleCloseReviewModal}
        centered
        className="p-0"
      >
        <Modal.Header closeButton>
          <Modal.Title>Review Answers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered size="sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Your Answer</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(userAnswerBySection).map((section) =>
                Object.keys(userAnswerBySection[section]).map((item, index) => (
                  <tr key={`${section}-${index}`}>
                    <td className="fw-bold">{item.split("-")[1]}</td>
                    <td className="text-black">
                      {userAnswerBySection[section][item]}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
      <ReadingNavBar
        module={module}
        currentSection={currentSection}
        updateCurrentSection={updateCurrentSection}
      />
      <div style={containerStyle} className="hide-scrollbar">
        <Row style={{ height: "100%" }}>
          <Col sm={12}>
            <div style={{ width: "100%" }}>
              <SplitPane
                split={deviceType === "mobile" ? "horizontal" : "vertical"}
                style={{ height: "100%" }} // Ensure SplitPane fills its container
              >
                <div
                  className="simulationDiv p-3"
                  style={paneWithBackgroundColor}
                >
                  <ReadingPassage section={currentSection} />
                </div>
                <div className="statisticsDiv p-3 bg-white" style={paneStyle}>
                  <ReadingSection
                    section={currentSection}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    formRef={formRef}
                    key={currentSection.id}
                    user_answers={currentUserAnswerBySection}
                  />
                </div>
              </SplitPane>
            </div>
          </Col>
        </Row>
      </div>
      <ReadingFooter
        isExpanded={isFooterExpanded}
        toggleExpanded={setFooterExpanded}
        deviceType={deviceType}
        module={module}
        userAnswersBySection={userAnswerBySection}
        updateCurrentSection={updateCurrentSection}
        questionData={questionData}
        setShowReviewModal={setShowReviewModal}
      />
    </>
  );
};

export default AttemptReadingModulePage;
