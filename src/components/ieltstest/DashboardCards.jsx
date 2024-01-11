import React from "react";
import { Badge, Button, Card, Col, Row, Stack } from "react-bootstrap";
import StartPracticeTestCard from "./StartPracticeTestCard";
import Logo from "../../assets/images/brand/logo/logo-small.svg";
import AccountSettingForm from "../auth/AccountSettingForm";
import YourPerformanceCard from "../layout/student/YourPerformanceCard";
import FifteenDaysPerformanceChart from "../layout/student/FifteenDaysPerformanceChart";
import YourRecentTestsCard from "../layout/student/YourRecentTestsCard";
import DashboardCommunityChat from "../DashboardCommunityChat";
import SkeletonLoader from "../elements/skeleton/SkeletonLoader";
import { Bell } from "react-bootstrap-icons";
import { FiArrowRight, FiBell } from "react-icons/fi";

const DashboardCards = ({ overallPerformance, overallPerformanceFeedback }) => {
  return (
    <Row className="mt-0 pt-0">
      <Col sm={12} lg={6} className="">
        <Card className="mb-3 ">
          <Card.Header>
            <Stack direction="horizontal" gap={2}>
              <div>
                <h3 className="mt-2 fw-bold">Notifications</h3>
              </div>

              <Badge pill bg="primary ms-auto">
                <FiBell size={25} className="" />
              </Badge>
            </Stack>
          </Card.Header>
          <Card.Body>
            <h3 className="m-0">
              Your recent speaking test result has been published.
            </h3>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" className="ms-auto">
              View Result <FiArrowRight size={20} />
            </Button>
          </Card.Footer>
        </Card>

        <StartPracticeTestCard />

        <YourPerformanceCard
          overallPerformance={overallPerformance}
          overallPerformanceFeedback={overallPerformanceFeedback}
        />

        {(overallPerformanceFeedback == null ||
          overallPerformanceFeedback["overall_feedback"] == null) && (
          <div className="mb-3">
            <SkeletonLoader title={"Performance Feedback"} />
          </div>
        )}
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
      </Col>
    </Row>
  );
};

export default DashboardCards;
