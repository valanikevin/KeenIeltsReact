import React, { useEffect, useState } from "react";
// import media files
import Avatar1 from "../../assets/images/avatar/avatar-1.jpg";
import Logo from "../../assets/images/brand/logo/logo-small.svg";
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
import YourPerformanceCard from "../../components/layout/student/YourPerformanceCard";
import YourRecentTestsCard from "../../components/layout/student/YourRecentTestsCard";
import DashboardLoader from "../../components/ieltstest/DashboardLoader";
import StartPracticeTestCard from "../../components/ieltstest/StartPracticeTestCard";
import CommentsCard from "../../components/CommentsCard";
import DashboardCommunityChat from "../../components/DashboardCommunityChat";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Your Dashboard | KeenIELTS";
  }, []);

  const [deviceType, setDeviceType] = useState("desktop");
  const navigate = useNavigate();
  const api = useAxios();
  const [overallPerformance, setOverallPerformance] = useState(null);
  const [userData, setUserData] = useState(null);

  function getOverallPerformance() {
    api
      .post(DJANGO_BASE_URL + "/student/overall_performance/")
      .then((response) => {
        setOverallPerformance(response.data);
      });
  }

  function getUserDetails() {
    api
      .post(DJANGO_BASE_URL + "/account/get_user_details/")
      .then((response) => {
        if (response.status === 200) {
          setUserData(response.data);
        }
      });
  }

  useEffect(() => {
    getUserDetails();
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

  if (!overallPerformance || !userData) return <DashboardLoader />;

  if (overallPerformance["average_score"].overall.total_attempts <= 0) {
    return (
      <Container className="mt-3">
        <ProfileCover userData={userData} />

        <Row className="mt-2 pt-2">
          <Col sm={12} lg={6} className="">
            <StartPracticeTestCard />
            <Card className="my-3">
              <Card.Header>
                <Stack direction="horizontal" gap={3}>
                  <div>
                    <img src={Logo} width={40} />
                  </div>
                  <div className="ms-auto">
                    <h3 className="mt-2 fw-bold">Get Started</h3>
                  </div>
                </Stack>
              </Card.Header>
              <Card.Body>
                <p>
                  <span className="fw-bold">Welcome to KeenIELTS,</span> your
                  personalized gateway to mastering the IELTS exam. Our platform
                  is meticulously designed to assist you in the four key
                  modules. With our unique blend of comprehensive evaluations,
                  detailed feedback, and insightful analytics, we provide you
                  with the tools to understand and improve your abilities. Begin
                  your learning journey by selecting your desired test type
                  above, or delve into our diverse collection of IELTS books
                  available on the navbar. <br />
                  <br />
                  <span className="fw-bold">Remember,</span> consistent practice
                  is the cornerstone of success in IELTS. Our data underscores
                  this fact: students who initially scored 6.5 bands and engaged
                  in regular practice on KeenIELTS for at least 15 days have
                  remarkably improved, often achieving scores as high as 8.0
                  bands. This journey requires dedication, and by practicing
                  regularly with our resources, you too can elevate your IELTS
                  performance. Start now and unlock your full potential with
                  KeenIELTS.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={6} className="mb-3">
            <div className="mb-3">
              <AccountSettingForm />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return (
    <Container className="mt-3">
      <ProfileCover userData={userData} />

      <Row className="mt-2 pt-2">
        <Col sm={12} lg={6} className="">
          <StartPracticeTestCard />

          <YourPerformanceCard overallPerformance={overallPerformance} />
        </Col>
        <Col sm={12} lg={6}>
          <Card className="mb-2 ">
            <Card.Header>
              <h3 className="mt-2 fw-bold">15 Days Performance Chart</h3>
            </Card.Header>
            <Card.Body>
              <div
                className="mb-0"
                style={{
                  width: "100%",
                  height: "150px",
                }}
              >
                <FifteenDaysPerformanceChart
                  overallPerformance={overallPerformance}
                />
              </div>
            </Card.Body>
          </Card>

          <Card className="mt-3 mb-2">
            <Card.Header>
              <h3 className="mt-2 fw-bold">Your Recent Attempts</h3>
            </Card.Header>
            <Card.Body>
              <YourRecentTestsCard tests={overallPerformance.recent_tests} />
            </Card.Body>
          </Card>

          <div className="my-3">
            <DashboardCommunityChat />
          </div>

          <div className="my-3">
            <AccountSettingForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
