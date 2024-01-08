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
import StartPracticeTestCard from "../../components/ieltstest/StartPracticeTestCard";
import CommentsCard from "../../components/CommentsCard";
import DashboardCommunityChat from "../../components/DashboardCommunityChat";
import SkeletonLoader from "../../components/elements/skeleton/SkeletonLoader";
import GetStartedDashboard from "../../components/ieltstest/GetStartedDashboard";
import DashboardCards from "../../components/ieltstest/DashboardCards";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Your Dashboard | KeenIELTS";
  }, []);

  const [deviceType, setDeviceType] = useState("desktop");
  const navigate = useNavigate();
  const api = useAxios();
  const [overallPerformance, setOverallPerformance] = useState(null);
  const [overallPerformanceFeedback, setOverallPerformanceFeedback] =
    useState(null);

  function getOverallPerformance() {
    api
      .post(DJANGO_BASE_URL + "/student/overall_performance/")
      .then((response) => {
        setOverallPerformance(response.data);
      });
  }

  function getOverallPerformanceFeedback() {
    api
      .post(DJANGO_BASE_URL + "/student/overall_performance_feedback/")
      .then((response) => {
        setOverallPerformanceFeedback(response.data);
      });
  }

  useEffect(() => {
    getOverallPerformance();
    getOverallPerformanceFeedback();
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

  // Conditional rendering logic
  let content;
  if (!overallPerformance) {
    content = <DashboardLoader />;
  } else if (overallPerformance["average_score"].overall.total_attempts <= 0) {
    content = <GetStartedDashboard />;
  } else {
    content = (
      <DashboardCards
        overallPerformance={overallPerformance}
        overallPerformanceFeedback={overallPerformanceFeedback}
      />
    );
  }

  return (
    <Container className="mt-3">
      <ProfileCover page={"dashboard"} />
      {content}
    </Container>
  );
};

export default DashboardPage;
