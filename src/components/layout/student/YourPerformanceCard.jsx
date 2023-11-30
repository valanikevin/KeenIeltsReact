import React from "react";
import { Card, ListGroup, Stack, Badge } from "react-bootstrap";
import parse from "html-react-parser";

const YourPerformanceCard = ({ overallPerformance }) => {
  const performanceBands = {
    overall: parseFloat(
      overallPerformance["average_score"].overall.average_bands
    ).toFixed(1),
    listening: parseFloat(
      overallPerformance["average_score"].listening.average_bands
    ).toFixed(1),
    reading: parseFloat(
      overallPerformance["average_score"].reading.average_bands
    ).toFixed(1),
    writing: parseFloat(
      overallPerformance["average_score"].writing.average_bands
    ).toFixed(1),
    speaking: parseFloat(
      overallPerformance["average_score"].speaking.average_bands
    ).toFixed(1),
  };

  return (
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
                <Badge bg="primary" className="">
                  <h2 className="display-6 pt-2 text-white">
                    {performanceBands.overall} Bands
                  </h2>
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
                            {performanceBands[key]} Bands
                          </h3>
                        </Badge>
                      </div>
                    </Stack>
                  </ListGroup.Item>
                );
              }
              return null;
            })}
          <ListGroup.Item className="py-2">
            <Stack direction="horizontal">
              <div className="ms-auto">
                <p className="m-0 text-capitalize">
                  Attempted:{" "}
                  {overallPerformance["average_score"].overall.total_attempts}{" "}
                  Tests
                </p>
              </div>
            </Stack>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      {overallPerformance["overall_feedback"] && (
        <Card.Footer>
          <p className="fw-bold">
            Updated: {overallPerformance["overall_feedback_date"]}
          </p>
          <p>{parse(overallPerformance["overall_feedback"])}</p>
        </Card.Footer>
      )}
    </Card>
  );
};

export default YourPerformanceCard;