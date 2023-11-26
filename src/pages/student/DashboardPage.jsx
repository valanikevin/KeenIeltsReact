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
import YourPerformanceCard from "../../components/layout/student/YourPerformanceCard";
import YourRecentTestsCard from "../../components/layout/student/YourRecentTestsCard";
import DashboardLoader from "../../components/ieltstest/DashboardLoader";

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

  if (!overallPerformance) return <DashboardLoader />;

  return (
    <Container className="mt-3">
      <ProfileCover userData={userData} />

      <Row className="mt-2 pt-2">
        <Col sm={12} lg={6} className="">
          <Card className="">
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

          <YourPerformanceCard overallPerformance={overallPerformance} />
        </Col>
        <Col sm={12} lg={6}>
          <Card className="mb-2 ">
            <Card.Header>
              <h3 className="mt-2 fw-bold">15 Days Performance Chart</h3>
            </Card.Header>
            <Card.Body>
              <div
                className="mb-5"
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
          <YourRecentTestsCard overallPerformance={overallPerformance} />

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

export default DashboardPage;
