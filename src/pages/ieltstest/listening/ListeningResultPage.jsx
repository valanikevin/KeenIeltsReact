import React, { useEffect, useState, useContext } from "react";
import useAxios from "../../../utils/useAxios";
import { API_URLS } from "../../../utils/config";
import { useParams } from "react-router";
import { Accordion, Card, Col, Container, Row, Table } from "react-bootstrap";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import ListeningSection from "../../../components/ieltstest/listening/ListeningSection";
import CustomAudioPlayer from "../../../components/elements/audioplayer/CustomAudioPlayer";
import useAxiosWithoutLoader from "../../../utils/useAxiosWithoutLoader";
import ScoreSection from "../../../components/ieltstest/ScoreSection";
import ReviewAnswers from "../../../components/ieltstest/ReviewAnswers";
import LoadingContext from "../../../context/layout/LoadingContext";
import OverallBandsCard from "../../../components/ieltstest/OverallBandsCard";
import FullTestInfoPage from "../fulltest/FullTestInfoPage";
import FullTestNextModule from "../../../components/ieltstest/FullTestNextModule";
import WhatsNextCard from "../../../components/ieltstest/WhatsNextCard";
import StartPracticeTestCard from "../../../components/ieltstest/StartPracticeTestCard";

const ListeningResultPage = () => {
  const api = useAxios();
  const api1 = useAxiosWithoutLoader();
  const { module_slug, attempt_slug } = useParams();
  const [attempt, setAttempt] = useState(null);
  const [module, setModule] = useState(null);
  const [currentAudioTime, setCurrentAudioTime] = useState(null);
  const [loadingBar, setLoadingBar] = useContext(LoadingContext);

  async function getAttempt() {
    const response = await api.post(
      API_URLS.getListeningAttempt + attempt_slug + "/"
    );
    if (response.status === 200) {
      setAttempt(response.data);
    } else {
      console.error("Unable to fetch attempt at ListeningResult.jsx");
    }
  }

  async function getModule() {
    const response = await api1.post(
      API_URLS.getListeningModule + module_slug + "/"
    );
    if (response.status === 200) {
      setModule(response.data);
    }
  }

  useEffect(() => {
    getAttempt();
    getModule();
  }, [loadingBar]);

  useEffect(() => {
    document.title = "Listening Test Result  | KeenIELTS";
  }, []);

  if (!module || !attempt || !attempt.evaluation) {
    return null;
  }

  function handleChangeAudioTime(section) {
    setCurrentAudioTime(section.audio_start_time);
  }

  return (
    <>
      <PageHeadingBriefinfo
        pagetitle={attempt.book.name}
        briefinfo={"Listening" + " Test Result"}
        color="bg-listening"
      />

      <div className="my-4">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} lg={10} md={12} className="mt-3 mb-3">
              <OverallBandsCard
                bands={attempt.bands}
                description={attempt.bands_description}
                color="listening"
              />
            </Col>

            <Col xl={8} lg={10} md={12} className="mb-3">
              <Card>
                <Card.Body className="m-0 p-1">
                  <CustomAudioPlayer
                    src={module.audio}
                    start_time={currentAudioTime}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={8} lg={10} md={12}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="text-black fw-bold">Review Answers</span>
                  </Accordion.Header>
                  <Accordion.Body className="p-0 m-0">
                    <ReviewAnswers attempt={attempt} />
                  </Accordion.Body>
                </Accordion.Item>
                {Object.entries(attempt.evaluation.all_sections).map(
                  (section, index) => (
                    <Accordion.Item key={section[0]} eventKey={index + 1}>
                      <Accordion.Header>
                        <span className="text-black fw-bold">
                          Section {index + 1} • {section[1]["correct"]}/
                          {section[1]["correct"] + section[1]["incorrect"]}
                        </span>
                      </Accordion.Header>
                      <Accordion.Body className="p-0 m-0">
                        <Table bordered className="table-sm">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Your Answer</th>
                              <th scope="col">Correct Answer</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(section[1]).map((item, index) => {
                              if (item[0].split("-")[0] === "que") {
                                return (
                                  <tr
                                    key={index}
                                    className={
                                      item[1]["is_user_answer_correct"] === true
                                        ? "table-success"
                                        : "table-danger"
                                    }
                                  >
                                    <td className="fw-bold">
                                      {item[0].split("-")[1]}
                                    </td>
                                    <td className="text-black">
                                      {item[1]["user_answer"]}
                                    </td>
                                    <td className="text-black">
                                      {item[1]["correct_answer"]}
                                    </td>
                                  </tr>
                                );
                              } else {
                                return null; // return null if you don't want to render anything
                              }
                            })}
                          </tbody>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                )}
              </Accordion>
            </Col>
            <Col xl={8} lg={10} md={12} className="">
              <Row>
                {module.sections.length > 0 &&
                  module.sections.map((section) => (
                    <div key={section.id} className="mt-3">
                      <ListeningSection
                        section={section}
                        user_answers={attempt.evaluation.all_questions}
                        setCurrentSection={handleChangeAudioTime}
                      />
                    </div>
                  ))}
              </Row>
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
      </div>
    </>
  );
};

export default ListeningResultPage;
