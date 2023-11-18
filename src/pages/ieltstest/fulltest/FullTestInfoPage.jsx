import React, { useEffect, useState } from "react";
import { useHref, useParams } from "react-router-dom";
import useAxios from "../../../utils/useAxios";
import { DJANGO_BASE_URL } from "../../../utils/config";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";
import PageHeadingBriefinfo from "../../../components/layout/PageHeadingBriefInfo";
import { FiArrowRight, FiCheckCircle, FiList } from "react-icons/fi";
import OverallBandsCard from "../../../components/ieltstest/OverallBandsCard";

const FullTestInfoPage = () => {
  const { attempt_slug } = useParams();
  const api = useAxios();
  const [fullTest, setFullTest] = useState(null);

  async function getFullTestInfo() {
    const response = await api.post(
      DJANGO_BASE_URL + "/ieltstest/get_fulltest_info/" + attempt_slug + "/"
    );
    if (response.status === 200) {
      setFullTest(response.data);
    } else {
      console.log("Error");
    }
  }

  useEffect(() => {
    getFullTestInfo();
  }, []);

  useEffect(() => {
    document.title = "Full Test Dashboard  | KeenIELTS";
  }, []);

  if (!fullTest) {
    return null;
  }

  const modules = [
    {
      name: "Listening Test",
      attempt: "listening_attempt",
      slug: "listening",
    },
    {
      name: "Reading Test",
      attempt: "reading_attempt",
      slug: "reading",
    },
    {
      name: "Writing Test",
      attempt: "writing_attempt",
      slug: "writing",
    },
    {
      name: "Speaking Test",
      attempt: "speaking_attempt",
      slug: "speaking",
    },
  ];

  return (
    <>
      <PageHeadingBriefinfo
        pagetitle={"Full Test"}
        briefinfo={"Practice full IELTS test with answers and explanations."}
      />
      <Container className="">
        <Row>
          <Col lg={4} className="mb-3">
            <Row className="sticky-top pt-3">
              <Col>
                <Card>
                  <Card.Header className="p-0">
                    <Card.Img variant="top" src={fullTest.test.book.cover} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title
                      className="text-dark"
                      style={{ fontSize: "1.0rem" }}
                    >
                      {fullTest.test.book.name}
                    </Card.Title>
                    <Card.Text>{fullTest.test.book.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="py-2">
                    <Stack direction="horizontal" gap={3}>
                      <div className="px-2 py-0">
                        <span className="text-black text-capitalize fw-bold">
                          {fullTest.test.name}
                        </span>
                      </div>
                    </Stack>
                  </Card.Footer>

                  {modules.map((module, index) =>
                    fullTest[module.attempt].status === "In Progress" ||
                    fullTest[module.attempt].status === "Not Started" ? (
                      <a
                        href={
                          "/ieltstest/attempt/" +
                          module.slug +
                          "/" +
                          fullTest[module.attempt].module_slug +
                          "/" +
                          fullTest[module.attempt].slug
                        }
                        target="_blank"
                      >
                        <Card.Footer key={index}>
                          <Stack direction="horizontal" gap={3}>
                            <div className="px-2">
                              <span className="text-black text-capitalize ">
                                {module.name}
                              </span>
                            </div>
                            <div className="px-2 ms-auto">
                              <Button size="sm" variant="outline-primary">
                                Start Test
                                <FiArrowRight size={20} className=" " />
                              </Button>
                            </div>
                          </Stack>
                        </Card.Footer>
                      </a>
                    ) : (
                      <a
                        href={
                          "/ieltstest/attempt/" +
                          module.slug +
                          "/" +
                          fullTest[module.attempt].module_slug +
                          "/" +
                          fullTest[module.attempt].slug +
                          "/get_result"
                        }
                        target="_blank"
                      >
                        <Card.Footer key={index}>
                          <Stack direction="horizontal" gap={3}>
                            <div className="px-2">
                              <span className="text-black text-capitalize ">
                                {module.name}
                                <FiCheckCircle
                                  size={20}
                                  className="text-success"
                                />
                              </span>
                            </div>
                            <div className="px-2 ms-auto">
                              <Button size="sm" variant="outline-dark">
                                View Result{" "}
                                <FiArrowRight size={20} className=" " />
                              </Button>
                            </div>
                          </Stack>
                        </Card.Footer>
                      </a>
                    )
                  )}
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={8} className="mt-3">
            <Row>
              {fullTest.status === "Completed" && (
                <Col lg={12} className="mb-3">
                  <OverallBandsCard
                    bands={fullTest.bands}
                    description={fullTest.bands_description}
                  />
                </Col>
              )}
              {modules.map((module, index) => (
                <Col lg={6} className="mb-3 d-flex">
                  {fullTest[module.attempt].status === "In Progress" ||
                  fullTest[module.attempt].status === "Not Started" ? (
                    <Card>
                      <Card.Header>
                        <Stack direction="horizontal" gap={3}>
                          <div className="px-2">
                            <h3 className={`mt-2 fw-bold `}>{module.name}</h3>
                          </div>
                          <div className="px-2 ms-auto">
                            <Badge bg="light" className="text-black">
                              <span style={{ fontSize: 15 }}>
                                {fullTest[module.attempt].status}
                              </span>
                            </Badge>
                          </div>
                        </Stack>
                      </Card.Header>
                      <Card.Body>
                        <p>
                          Get started on your {module.name} by clicking the
                          button below. Once you're done, a detailed analysis of
                          your performance will be ready and waiting for you
                          right here!
                        </p>
                      </Card.Body>
                      <Card.Footer>
                        <a
                          href={
                            "/ieltstest/attempt/" +
                            module.slug +
                            "/" +
                            fullTest[module.attempt].module_slug +
                            "/" +
                            fullTest[module.attempt].slug
                          }
                          target="_blank"
                        >
                          <Stack direction="horizontal">
                            <div className="p-2">
                              <span
                                className={`fw-bold text-${module.slug} text-capitalize`}
                              >
                                Start {module.name}
                              </span>
                            </div>
                            <div className="p-2 ms-auto">
                              <FiArrowRight size={20} className="text-black" />
                            </div>
                          </Stack>
                        </a>
                      </Card.Footer>
                    </Card>
                  ) : (
                    <Card className="d-flex">
                      <Card.Header>
                        <Stack direction="horizontal" gap={3}>
                          <div className="px-2">
                            <h3 className={`mt-2 fw-bold `}>{module.name}</h3>
                          </div>
                          <div className="px-2 ms-auto">
                            <Badge bg="light" className="text-black">
                              <span style={{ fontSize: 15 }}>
                                {fullTest[module.attempt].status}
                              </span>
                            </Badge>
                          </div>
                        </Stack>
                      </Card.Header>
                      <Card.Body>
                        <Badge bg={module.slug}>
                          <h4 className="display-6 mt-2 mx-3 text-white">
                            {fullTest[module.attempt].bands} Bands
                          </h4>
                        </Badge>
                        <p style={{ fontSize: "1.1rem" }} className="mt-4">
                          {fullTest[module.attempt].bands_description}
                        </p>
                      </Card.Body>
                      <Card.Footer>
                        <a
                          href={
                            "/ieltstest/attempt/" +
                            module.slug +
                            "/" +
                            fullTest[module.attempt].module_slug +
                            "/" +
                            fullTest[module.attempt].slug +
                            "/get_result"
                          }
                          target="_blank"
                        >
                          <Stack direction="horizontal">
                            <div className="p-2">
                              <span
                                className={`fw-bold text-${module.slug} text-capitalize`}
                              >
                                View Results & Feedback
                              </span>
                            </div>
                            <div className="p-2 ms-auto">
                              <FiArrowRight size={20} className="text-black" />
                            </div>
                          </Stack>
                        </a>
                      </Card.Footer>
                    </Card>
                  )}
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FullTestInfoPage;
