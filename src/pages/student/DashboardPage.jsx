import React, { useEffect, useState } from "react";
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

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "KeenIELTS - The Smart Choice for IELTS Excellence";
  }, []);

  const [deviceType, setDeviceType] = useState("desktop");

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

  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
    ],
    datasets: [
      {
        label: "Overall Score",
        data: [
          6.5, 6.0, 6.5, 7.0, 8.0, 6.5, 7.0, 6.0, 6.5, 6.0, 7.0, 7.5, 6.5, 7.0,
          6.5,
        ], // Sample overall scores for each day
        borderColor: "#0052CC",
        tension: 0.4,
        fill: false,
        borderWidth: 4,
      },
    ],
  };

  const additionalData = {
    Reading: [
      6.0, 6.5, 6.0, 7.0, 7.5, 6.5, 7.0, 6.0, 6.5, 6.0, 7.0, 7.5, 6.5, 7.0,
    ],
    Listening: [
      7.0, 6.0, 6.5, 7.5, 7.0, 6.5, 7.5, 6.0, 6.5, 6.0, 7.0, 7.5, 6.5, 7.0,
    ],
    Writing: [
      6.0, 6.5, 7.0, 6.5, 6.5, 6.5, 6.5, 6.0, 6.5, 6.0, 7.0, 7.5, 6.5, 7.0,
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const index = context.dataIndex;
            const value = context.dataset.data[index];

            // Construct additional data string for the tooltip
            let additionalInfo = `Overall: ${value}\n`;
            Object.keys(additionalData).forEach((key) => {
              additionalInfo += `${key}: ${additionalData[key][index]}\n`;
            });

            return additionalInfo;
          },
        },
      },
      legend: {
        display: false,
        position: "top",
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: false, // Change to false to use the automatic scaling

        grace: "0%", // Adds a bit of space at the top and bottom of the scale
        title: {
          display: false,
        },
      },
      x: {
        display: false, // Set to true if you want to display the x-axis
        title: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 4, // Adjust the line thickness
        tension: 0.4, // Smoothens the line
      },
      point: {
        radius: 3, // Adjust the size of points on the line
      },
    },
  };

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

  return (
    <Container className="mt-3">
      <ProfileCover dashboardData={dashboardData} />

      <Row className="mt-3">
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <h3 className="mt-2 fw-bold">Your Performance Card</h3>
            </Card.Header>
            <Card.Body>
              <div
                className="mb-5"
                style={{
                  width: "100%",
                  height: "100px",
                }}
              >
                <Line data={data} options={options} />
              </div>
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
        <Col sm={12} md={6}>
          <Card>
            <Card.Header>
              <h3 className="mt-2 fw-bold">Your Performance Card</h3>
            </Card.Header>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardPage;
