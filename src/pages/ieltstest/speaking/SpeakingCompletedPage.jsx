import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/config";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import SpeakingLoader from "../../../components/ieltstest/speaking/SpeakingLoader";
import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Table,
  Badge,
  Stack,
} from "react-bootstrap";
import CustomAudioPlayer from "../../../components/elements/audioplayer/CustomAudioPlayer";
import { FiCheck, FiCheckCircle, FiPlayCircle } from "react-icons/fi";
import WhatsNextCard from "../../../components/ieltstest/WhatsNextCard";
import StartPracticeTestCard from "../../../components/ieltstest/StartPracticeTestCard";
import CommentsCard from "../../../components/CommentsCard";
import { CheckCircleFill } from "react-bootstrap-icons";
import SpeakingResponsesCard from "../../../components/ieltstest/speaking/SpeakingResponsesCard";

const SpeakingCompletedPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [attempt, setAttempt] = useState(null);
  const [module, setModule] = useState(null);

  const api = useAxios();

  async function getAttempt() {
    const response = await api.post(
      API_URLS.getSpeakingAttempt + attempt_slug + "/"
    );
    if (response.status === 200) {
      setAttempt(response.data);
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  async function getModule() {
    const response = await api.post(
      API_URLS.getSpeakingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
    }
  }

  useEffect(() => {
    getAttempt();
    getModule();
  }, []);

  if (!module || !attempt) {
    return <SpeakingLoader />; // Replace with your preferred loading component
  }

  return (
    <>
      <PageHeadingBriefinfo
        pagetitle={attempt.book.name}
        briefinfo={"Speaking Test Completed"}
        color="bg-speaking"
      />

      <Container className="mb-3">
        <Row className="justify-content-center">
          <Col xl={8} lg={10} md={12} className="mt-3">
            <Card>
              <Card.Header>
                <Stack direction="horizontal" gap={3}>
                  <div>
                    <h3 className="mt-2 fw-bold">
                      You've completed your speaking test.{" "}
                    </h3>
                  </div>
                  <div className="ms-auto">
                    <CheckCircleFill size={30} className="text-success" />
                  </div>
                </Stack>
              </Card.Header>
              <Card.Body className="">
                <p style={{ fontSize: "1.1rem" }} className="">
                  We have received your test responses. We will evaluate your
                  test and send you the result within 24 hours. You will receive
                  an email with your result as well as you will be able to see
                  your result from your dashboard.
                </p>
                <p style={{ fontSize: "1.1rem" }}>
                  Meanwhile, you can check your test responses below.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={8} lg={10} md={12} className="mt-3">
            <SpeakingResponsesCard attempt={attempt} module={module} />
          </Col>

          {attempt.full_test_next_attempt && (
            <Col xl={8} lg={10} md={12} className="my-3">
              <FullTestNextModule attempt={attempt} />
            </Col>
          )}

          <Col xl={8} lg={10} md={12} className="my-3">
            <WhatsNextCard />
          </Col>

          <Col xl={8} lg={10} md={12} className="mb-3">
            <StartPracticeTestCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SpeakingCompletedPage;
