import React, { useState, useEffect, useRef } from "react";
import SplitPane from "react-split-pane";
import {
  Stack,
  Navbar,
  Card,
  Container,
  Row,
  Col,
  Modal,
  Accordion,
  Table,
  Badge,
  Button,
} from "react-bootstrap";
import "./ReactSplitPane.css";
import { ReadingNavBar } from "../../../components/ieltstest/reading/ReadingNavBar";
import ReadingFooter from "../../../components/ieltstest/reading/ReadingFooter";
import useAxios from "../../../utils/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import { API_URLS } from "../../../utils/urls";
import ReadingSection from "../../../components/ieltstest/reading/ReadingSection";
import ReadingPassage from "../../../components/ieltstest/reading/ReadingPassage";
import { getFormData } from "../../../utils/moduleUtils";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import BookInfo from "../../../components/ieltstest/listening/BookInfo";

const AttemptReadingModulePage = () => {
  const [deviceType, setDeviceType] = useState("desktop");
  const [isFooterExpanded, setFooterExpanded] = useState(false);
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);
  const [currentFormData, setCurrentFormData] = useState({});
  const [userAnswerBySection, setUserAnswerBySection] = useState({});
  const [currentUserAnswerBySection, setCurrentUserAnswerBySection] =
    useState(null);
  const [allAnswers, setAllAnswers] = useState({});
  const [questionData, setQuestionData] = useState({
    completed_questions: 0,
  });
  const [showReviewModal, setShowReviewModal] = useState(false);
  const handleCloseReviewModal = () => setShowReviewModal(false);

  const [showTestInfoModal, setShowTestInfoModal] = useState(false);
  const handleCloseTestInfoModal = () => setShowTestInfoModal(false);

  const formRef = useRef(null);
  const api = useAxios();
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const handleShowSubmitModal = () => setShowSubmitModal(true);
  const handleClosSubmiteModal = () => setShowSubmitModal(false);
  const navigate = useNavigate();
  const passageSection = useRef(null);
  const questionSection = useRef(null);

  // Effects:

  useEffect(() => {
    getModule();
  }, []);

  useEffect(() => {
    if (currentSection) {
      const answers = userAnswerBySection[currentSection.id];
      setCurrentUserAnswerBySection(answers);
      window.scrollTo(0, 0);
      passageSection.current.scrollTop = 0;
      questionSection.current.scrollTop = 0;
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
    initializeAllAnswer();
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
      setAllAnswers({
        ...allAnswers,
        ...data, // Correctly merging the data object with the existing allAnswers object
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

  async function getModule() {
    const response = await api.post(
      API_URLS.getReadingModule + module_slug + "/"
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

  function initializeAllAnswer() {
    if (module) {
      const n = module.total_questions;
      let answers = {};
      Array.from({ length: n }, (_, index) => index + 1).map(
        (number) => (answers["que-" + number] = "")
      );
      setAllAnswers(answers);
    }
  }

  function sendAttemptUpdate(attempt_type = "In Progress") {
    const data = {
      answers: allAnswers,
      attempt_type: attempt_type,
    };

    const response = api.post(
      "/ieltstest/update_attempt/reading/" + attempt_slug + "/",
      data
    );
    if (response.status === 200) {
      console.log("Attempt Updated");
    }
  }

  function endTest() {
    handleShowModal();
  }
  function handleConfirmEndTest() {
    getFormDataLocal();
    sendAttemptUpdate("Completed");
    navigate(
      `/ieltstest/attempt/reading/${module_slug}/${attempt_slug}/get_result`
    );
    handleClosSubmiteModal();
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
              {Object.keys(allAnswers).map((item) => (
                <tr key={item}>
                  <td>{item.split("-")[1]}</td>
                  <td className="fw-bold text-black">{allAnswers[item]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <div class="modal-footer py-2">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={handleCloseReviewModal}
          >
            Close
          </button>
        </div>
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
        <div class="modal-footer py-2">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={handleCloseTestInfoModal}
          >
            Close
          </button>
        </div>
      </Modal>

      <ReadingNavBar
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
                  className="simulationDiv p-3"
                  style={paneWithBackgroundColor}
                  ref={passageSection}
                >
                  <ReadingPassage section={currentSection} />
                </div>
                <div
                  className="statisticsDiv p-3 bg-white"
                  style={paneStyle}
                  ref={questionSection}
                >
                  <ReadingSection
                    section={currentSection}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    formRef={formRef}
                    key={currentSection.id}
                    section_form_values={currentUserAnswerBySection}
                  />
                  <Stack direction="horizontal" className="border-top pt-3">
                    <div className="m-0">
                      <Button
                        variant="dark"
                        className="btn-sm"
                        onClick={handlePreviousSectionButton}
                      >
                        <FiArrowLeft size={20} /> Previous Section
                      </Button>
                    </div>
                    <div className="m-0 ms-auto">
                      <Button
                        variant="dark"
                        className="btn-sm"
                        onClick={handleNextSectionButton}
                      >
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
      <ReadingFooter
        isExpanded={isFooterExpanded}
        toggleExpanded={setFooterExpanded}
        deviceType={deviceType}
        module={module}
        updateCurrentSection={updateCurrentSection}
        questionData={questionData}
        setShowReviewModal={setShowReviewModal}
        userAllAnswer={allAnswers}
        setShowSubmitModal={setShowSubmitModal}
        handleConfirmEndTest={handleConfirmEndTest}
      />
    </>
  );
};

export default AttemptReadingModulePage;
