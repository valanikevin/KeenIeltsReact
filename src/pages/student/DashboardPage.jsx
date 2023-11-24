import React, { useEffect } from "react";
// import media files
import Avatar1 from "../../assets/images/avatar/avatar-1.jpg";
import ProfileCover from "../../components/layout/ProfileCover";
import {
  Badge,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Stack,
  Table,
} from "react-bootstrap";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "KeenIELTS - The Smart Choice for IELTS Excellence";
  }, []);

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

  return (
    <Container className="mt-3">
      <ProfileCover dashboardData={dashboardData} />

      <Row className="mt-3">
        <Col sm={12} md={6}>
          <Card>
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
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
