import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/config";
import ScoreSection from "../../../components/ieltstest/ScoreSection";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import LoadingContext from "../../../context/layout/LoadingContext";

import ReadingPassage from "../../../components/ieltstest/reading/ReadingPassage";
import ReadingSection from "../../../components/ieltstest/reading/ReadingSection";
import ReviewAnswers from "../../../components/ieltstest/ReviewAnswers";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import OverallBandsCard from "../../../components/ieltstest/OverallBandsCard";
import FullTestNextModule from "../../../components/ieltstest/FullTestNextModule";

const ReadingResultPage = () => {
  const api = useAxios();
  const { module_slug, attempt_slug } = useParams();
  const [module, setModule] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const [deviceType, setDeviceType] = useState("desktop");
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  async function getModule() {
    const response = await api.post(
      API_URLS.getReadingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
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
    getModule();
  }, [loadingBar]);

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

  useEffect(() => {
    document.title = "Reading Test Result  | KeenIELTS";
  }, []);

  if (!module || !attempt || !attempt.evaluation) {
    return null;
  }

  return (
    <>
      <PageHeadingBriefinfo
        pagetitle={attempt.book.name}
        briefinfo={"Reading" + " Test Result"}
        color="bg-reading"
      />

      <div className="my-4">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} lg={10} md={12} className="mt-3 mb-3">
              <OverallBandsCard
                bands={attempt.bands}
                description={attempt.bands_description}
                color="reading"
              />
            </Col>
            <Col xl={8} lg={10} md={12}>
              <Accordion defaultActiveKey={"review_answer"}>
                <Accordion.Item eventKey="review_answer">
                  <Accordion.Header>
                    <span className="text-black fw-bold">Review Answers</span>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    <ReviewAnswers attempt={attempt} />
                  </Accordion.Body>
                </Accordion.Item>
                {Object.keys(module.sections).map((item) => (
                  <Accordion.Item eventKey={item} key={item}>
                    <Accordion.Header>
                      <span className="text-black fw-bold">
                        {module.sections[item].section}
                      </span>
                    </Accordion.Header>
                    <Accordion.Body className="p-0">
                      <ReadingPassage section={module.sections[item]} />
                      <ReadingSection
                        section={module.sections[item]}
                        user_answers={attempt.evaluation.all_sections[item]}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
            <Col xl={8} lg={10} md={12} className="my-3">
              <FullTestNextModule attempt={attempt} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ReadingResultPage;
