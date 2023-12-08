import React from "react";
import { Card, Table, Badge } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const YourRecentTestsCard = ({ tests }) => {
  return (
    <>
      {tests && tests.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Test</th>
              <th>Bands</th>
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
                <td>
                  <Link to={`/book/${test.book_slug}`}>{test.book_name}</Link>
                </td>
                <td>{test.test_name}</td>
                <td>{parseFloat(test.score).toFixed(1)}</td>
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
                    Result
                    <FiArrowRight />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h3 className="text-center my-6">
          You haven't attempted any tests from this book yet.
        </h3>
      )}
    </>
  );
};

export default YourRecentTestsCard;
