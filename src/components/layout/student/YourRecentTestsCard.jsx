import React from "react";
import { Card, Table, Badge } from "react-bootstrap";

const YourRecentTestsCard = ({ overallPerformance }) => {
  return (
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
            {overallPerformance["recent_tests"].map((test, index) => (
              <tr key={index}>
                <td>
                  <Badge bg={test.module} className="text-capitalize">
                    {test.module.charAt(0).toUpperCase()}
                  </Badge>
                </td>
                <td>{test.book_name}</td>
                <td>{test.score} Bands</td>
                <td>
                  <a
                    href={
                      "/ieltstest/attempt/" +
                      test.module +
                      "/" +
                      test.module_slug +
                      "/" +
                      test.attempt_slug +
                      "/get_result"
                    }
                    target="_blank"
                  >
                    View Result
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default YourRecentTestsCard;
