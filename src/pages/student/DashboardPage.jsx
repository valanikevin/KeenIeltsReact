import React, { useEffect, useState } from "react";
// import media files
import Avatar1 from "../../assets/images/avatar/avatar-1.jpg";
import ProfileCover from "../../components/layout/ProfileCover";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Stack,
  Table,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import useAxios from "../../utils/useAxios";
import { DJANGO_BASE_URL } from "../../utils/config";
import { FiArrowRight } from "react-icons/fi";
import AccountSettingForm from "../../components/auth/AccountSettingForm";
import FifteenDaysPerformanceChart from "../../components/layout/student/FifteenDaysPerformanceChart";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Your Dashboard | KeenIELTS";
  }, []);

  const [deviceType, setDeviceType] = useState("desktop");
  const navigate = useNavigate();
  const api = useAxios();
  const [overallPerformance, setOverallPerformance] = useState(null);

  function getOverallPerformance() {
    api
      .post(DJANGO_BASE_URL + "/student/overall_performance/")
      .then((response) => {
        setOverallPerformance(response.data);
      });
  }

  useEffect(() => {
    getOverallPerformance();
  }, []);
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

  const isLoggedIn = () => {
    const user = localStorage.getItem("user");
    return user != null; // If user info is in local storage, user is logged in
  };

  async function startTest(item_slug) {
    if (isLoggedIn()) {
      try {
        const response = await api.post(
          `${DJANGO_BASE_URL}/ieltstest/find_smart_test/${item_slug}/`
        );
        navigate(
          `/ieltstest/attempt/${response.data.module_type}/${response.data.selected_module}/${response.data.attempt}`
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error accordingly
      }
    } else {
      navigate("/login");
    }
  }

  return (
    <Container className="mt-3">
      <ProfileCover dashboardData={dashboardData} />

      <Row className="mt-2">
        <Col sm={12} lg={6} className="my-2">
          {" "}
          <Card className="mb-2">
            <Card.Header>
              <h3 className="mt-2 fw-bold">15 Days Performance Chart</h3>
            </Card.Header>
            <Card.Body>
              <div
                className="mb-5"
                style={{
                  width: "100%",
                  height: "100px",
                }}
              >
                {overallPerformance && (
                  <FifteenDaysPerformanceChart
                    overallPerformance={overallPerformance}
                  />
                )}

              </div>
            </Card.Body>
          </Card>
          <Card className="my-3">
            <Card.Header>
              <h3 className="mt-2 fw-bold">Your Performance</h3>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  <Stack direction="horizontal" gap={3}>
                    <div>
                      <h4 className="display-6 pt-2 ">Overall</h4>
                    </div>
                    <div className="ms-auto">
                      <Badge bg="primary" className="mb-2">
                        <h2 className="display-6 pt-2 text-white">6.5 Bands</h2>
                      </Badge>
                    </div>
                  </Stack>
                </ListGroup.Item>
                {performanceBands &&
                  Object.keys(performanceBands).map((key) => {
                    if (key !== "overall") {
                      return (
                        <ListGroup.Item className="py-2" key={key}>
                          <Stack direction="horizontal">
                            <div>
                              <h3 className="m-0 text-capitalize">{key}</h3>
                            </div>
                            <div className="ms-auto">
                              <Badge bg={key} className="">
                                <h3 className="m-0 text-white">
                                  {performanceBands[key]}
                                </h3>
                              </Badge>
                            </div>
                          </Stack>
                        </ListGroup.Item>
                      );
                    }
                    return null;
                  })}
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <p>
                Your score indicates a good proficiency, particularly in
                understanding complex language and expressing ideas fluently. To
                further enhance your skills, I recommend focusing on nuanced
                grammatical structures and expanding your vocabulary range,
                especially in writing and speaking. Regular practice in these
                areas, perhaps through engaging in discussions on diverse topics
                or writing essays, will certainly help in achieving even higher
                proficiency. Keep up the great work, and I'm confident you'll
                continue to excel!
              </p>
            </Card.Footer>
          </Card>
        </Col>
        <Col sm={12} lg={6}>
          <Card className="my-2">
            <Card.Header>
              <h3 className="mt-2 fw-bold">Start Practice Test</h3>
            </Card.Header>
            <Card.Body>
              <Row>
                {TakeTestDropdown.map((item, index) => (
                  <Col sm={6} key={index}>
                    <Button
                      key={index}
                      onClick={() => startTest(item.slug)}
                      className="w-100 my-2"
                    >
                      {item.menuitem} Test <FiArrowRight size={18} />
                    </Button>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

          <Card className="mt-3 mb-2">
            <Card.Header>
              <h3 className="mt-2 fw-bold">Your Recent Tests</h3>
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Book</th>
                    <th>Score</th>
                    <th>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Badge bg="listening">L</Badge>
                    </td>
                    <td>Cambridge 12</td>
                    <td>6.5 Bands</td>
                    <td>
                      <a href="#">View Result</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Badge bg="reading">R</Badge>
                    </td>
                    <td>Cambridge 12</td>
                    <td>6.5 Bands</td>
                    <td>
                      <a href="#">View Result</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Badge bg="writing">W</Badge>
                    </td>
                    <td>Cambridge 12</td>
                    <td>6.5 Bands</td>
                    <td>
                      <a href="#">View Result</a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          <div className="my-3">
            <AccountSettingForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const TakeTestDropdown = [
  {
    menuitem: "Listening",
    link: "/ieltstest/listening/",
    slug: "listening",
  },
  {
    menuitem: "Reading",
    link: "/ieltstest/reading/",
    slug: "reading",
  },
  {
    menuitem: "Writing",
    link: "/ieltstest/writing/",
    slug: "writing",
  },
  {
    menuitem: "Speaking",
    link: "/ieltstest/speaking/",
    slug: "speaking",
  },
];

const dashboardData = {
  name: "Kevin Valani",
  email: "valanikevin@gmail.com",
  linkname: "Account Setting",
  link: "/account/",
};

const performanceBands = {
  overall: "6.5 Bands",
  listening: "6.5 Bands",
  reading: "6.5 Bands",
  writing: "6.5 Bands",
  speaking: "6.5 Bands",
};

export default DashboardPage;
