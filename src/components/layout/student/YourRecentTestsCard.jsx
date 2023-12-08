import React from "react";
import { Card, Table, Badge } from "react-bootstrap";

const YourRecentTestsCard = ({ tests }) => {
  return (
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
        {tests.map((test, index) => (
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
              >
                View Result
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default YourRecentTestsCard;
