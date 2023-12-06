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
          {performanceBands &&
            Object.keys(performanceBands).map((key) => {
              return (
                <ListGroup.Item className="py-2" key={key}>
                  <Stack direction="horizontal">
                    <div>
                      <h4 className="m-0 text-capitalize">{key}</h4>
                    </div>
                    <div className="ms-auto">
                      <Badge
                        bg={key === "overall" ? "primary" : key}
                        className=""
                      >
                        <h4 className="m-0 text-white">
                          {performanceBands[key]} Bands
                        </h4>
                      </Badge>
                    </div>
                  </Stack>
                </ListGroup.Item>
              );
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
