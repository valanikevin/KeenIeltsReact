import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosWithoutLoader from "../../../utils/useAxiosWithoutLoader";
import { API_URLS } from "../../../utils/urls";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import SkeletonLoader from "../../../components/elements/skeleton/SkeletonLoader";
import { Col, Container, Row } from "react-bootstrap";

const WritingResultPage = () => {
  const { module_slug, attempt_slug } = useParams();
  const [bands, setBands] = useState(null);
  const [module, setModule] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const api = useAxiosWithoutLoader();

  async function getBands() {
    const response = await api.post(
      "/ieltstest/get_writing_bands/" + attempt_slug + "/"
    );
    if (response.status === 200) {
      setBands(response.data);
      console.log(response.data);
    }
  }

  async function getEvaluation() {
    const response = await api.post(
      "/ieltstest/get_writing_evaluation/" + attempt_slug + "/"
    );
    if (response.status === 200) {
      setEvaluation(response.data);
      console.log(response.data);
    }
  }

  async function getAttempt() {
    const response = await api.post(
      API_URLS.getWritingAttempt + attempt_slug + "/"
    );
    if (response.status === 200) {
      setAttempt(response.data);
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  async function getModule() {
    const response = await api.post(
      API_URLS.getWritingModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
      console.log(response.data);
    }
  }

  useEffect(() => {
    getBands();
    getEvaluation();
  }, []);

  useEffect(() => {
    getModule();
  }, []);

  useEffect(() => {
    getAttempt();
  }, []);

  if (!attempt) {
    return null;
  }

  if (!module) {
    return null;
  }

  return (
    <>
      <PageHeadingBriefinfo
        pagetitle={attempt.book.name}
        briefinfo={"Writing Test Result"}
        color="bg-writing"
      />

      <Container>
        <Row>
          <Col sm={12} md={6}>
            <SkeletonLoader title={"Bands Evaluation"} />
          </Col>
          <Col sm={12} md={6}>
            <SkeletonLoader title={"Bands Evaluation"} />
          </Col>
          <Col sm={12} md={6}>
            <SkeletonLoader title={"Bands Evaluation"} />
          </Col>
          <Col sm={12} md={6}>
            <SkeletonLoader title={"Bands Evaluation"} />
          </Col>
          <Col sm={12} md={6}>
            <SkeletonLoader title={"Bands Evaluation"} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WritingResultPage;
